import { auth, provider } from "../Firebase/FirebaseConfig"
import { signInWithPopup } from "firebase/auth"

const Auth = ({ setIsAuth }) => {

    const signIn = () => {
        signInWithPopup(auth, provider)
            .then((res) => {
                localStorage.setItem('token', res.user.refreshToken);
                setIsAuth(true);
            })
            .catch((err) => console.log(err))

    }
    return (
        <div className="auth">
            <h1>Chat Odası</h1>
            <p>Devam etmek için tıkla</p>
            <button onClick={signIn}>Google ile gir</button>
        </div>
    )
}

export default Auth