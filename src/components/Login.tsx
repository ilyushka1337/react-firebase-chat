import * as React from 'react';
import { FirebaseContext } from '../firebase';
import Button from './ui/Button';
import { signInWithPopup, GoogleAuthProvider, getAuth, getAdditionalUserInfo } from 'firebase/auth'

const Login = () => {
    const {auth} = React.useContext(FirebaseContext)
    const login = () => {
        const provider = new GoogleAuthProvider()

        signInWithPopup(auth, provider).then(result => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            // The signed-in user info.
            const user = result.user;

            const userData = getAdditionalUserInfo(result)
            console.log(userData, token)
        }).catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(error)
        })
    }

    return ( 
        <div className='grow flex justify-center items-center'>
            <div className="px-14 py-10 bg-slate-300">
                <Button As='button' clickHandler={login}>Войти с помощью Google</Button>
            </div>
        </div>
    );
}
 
export default Login;