import { useRef, useState } from 'react';
import Auth from './components/Auth';
import Chat from './components/Chat';

function App() {

  const [isAuth, setIsAuth] = useState(localStorage.getItem('token'))
  const [room, setRoom] = useState(null)

  const inputRef = useRef(null)

  if (!isAuth) {
    return (
      <div className="container">
        <Auth setIsAuth={setIsAuth} />
      </div>
    );
  }


  return (
    <div className="container">
      {
        room ? (
          <Chat room = {room} />
        ) : (
          <div className='room-container'>
            <h1>Chat Odası</h1>
            <p>Hangi Odaya Gireceksin ? </p>
            <input ref={inputRef} placeholder='Oda Adını Yazınız...' type='text' />
            <button onClick={() => setRoom(inputRef.current.value)} id='enter'>Odaya Gir</button>
            <button id='leave'>Çıkış Yap</button>
          </div>
        )
      }
    </div>
  );
}

export default App;
