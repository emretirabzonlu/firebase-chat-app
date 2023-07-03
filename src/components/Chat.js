import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { auth, db } from '../Firebase/FirebaseConfig';

const Chat = ({ room }) => {
    const [newMsg, setNewMsg] = useState("");
    const [messages, setMessages] = useState([]);
    const messagesRef = collection(db, "messages");
    console.log(messages);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!newMsg) return;


        addDoc(messagesRef, {
            text: newMsg,
            user: auth.currentUser.displayName,
            room: room,
            createdAt: serverTimestamp(),
        });
        setNewMsg("");


    };

    useEffect(() => {
        const queryMessage = query(
            messagesRef,
            where("room", "==", room),
            orderBy("createdAt")

        );

        onSnapshot(queryMessage,(snapshot)=>{
            let commingMessages = []
            snapshot.forEach((doc)=>{
                commingMessages.push({...doc.data(), id: doc.id});
            });
            setMessages(commingMessages);
        });
    }, []);


    return (
        <div className='chat'>
            <div className='chat-info'>
                <p>Chat</p>
                <p>{room}</p>
                <a href="/">Farklı Oda</a>
            </div>
            <div className="messages">
        {messages.map((message) => (
          <>
            {auth.currentUser.displayName == message.user ? (
              <p className="user-message">{message.text}</p>
            ) : (
              <p>
                <span className="message-info">{message.user} : </span>
                <span className="message">{message.text}</span>
              </p>
            )}
          </>
        ))}
      </div>
            <form onSubmit={handleSubmit}>
                <input value={newMsg} onChange={(e) => setNewMsg(e.target.value)} placeholder='Mesajınızı yazınız...' type="text" />
                <button type='submit'>Gönder</button>
            </form>

        </div>
    )
}

export default Chat