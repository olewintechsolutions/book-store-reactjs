
import { useEffect, useState } from "react";
import { app } from "./firebaseConfig";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";

const auth = getAuth(app)
const provider = new GoogleAuthProvider();


const SignUp = () => {

    const [user, setUser] = useState(null);

    const handleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user);
                console.log(result.user)
            })
            .catch((error) => console.log(error));
    };
    const handleLogout = () => {
        setUser(null);
        auth.signOut();
    }

    useEffect(()=>{
        console.log(user)
    },[user])

    return (
        <div className="container">
            {!user && (
                <img
                    className="btn"
                    onClick={() => handleLogin()}
                    src="https://media.geeksforgeeks.org/wp-content/uploads/20240520175106/Google_SignIn_Logo.png"
                    alt="NA"
                />
            )}
            {user  && (
                <>
                    <div className="user">
                        <h1>Your Successfully Loged In</h1>
                        <h2>Name: {user.displayName}</h2>
                        <h2>Email: {user.email}</h2>
                        <img src={user.photoURL} alt="N/A" />
                        <button onClick={() => handleLogout()} className="logout">Log Out</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default SignUp;
