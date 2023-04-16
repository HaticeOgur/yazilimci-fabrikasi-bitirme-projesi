import React, { useState } from 'react'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'
import { auth } from '../firebase'
import { toast } from 'react-toastify'
import '../styles/pages/Auth.css'
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();


const Auth = () => {
    const [signUp, setSignUp] = useState(true)
    const [authData, setAuthData] = useState({email:'', password:''})
    
    const onChangeFunc = (e) => {
        setAuthData({...authData, [e.target.name]: e.target.value})
    }

    const authFunc = async () => {
        if (signUp){
            try{
                const data = await createUserWithEmailAndPassword(auth, authData.email, authData.password)
            const user = data.user;
            if(user){
                window.location = "/dashboard"
            }
            } catch (error) {
                toast.error(error.message)
            }
            
        }else{
            try{

                const data = await signInWithEmailAndPassword(auth, authData.email, authData.password)
            const user = data.user;
            if(user){
                window.location = "/dashboard"
            }
            } catch (error) {
                toast.error(error.message)
            }
            
        
    }
}
const googleLogin = async() => {
    try {
        const data = await signInWithPopup(auth, provider)
        const credential = GoogleAuthProvider.credentialFromResult(data);
        const token = credential.accessToken;
        const user = data.user;
        if(user){
            window.location = "/dashboard"
        }
        
        
    } catch (error) {
        const credential = GoogleAuthProvider.credentialFromError(error);
        toast.error(credential)
    }
}
  return (
    <div className='auth'>
        <div className='auth-container'>
            <h2>{signUp ? "BİLİNDİRİM'E KAYDOL" : "GİRİŞ"}</h2>
            <input name='email' value={authData.email} onChange={onChangeFunc}type="email" placeholder='Email'/>
            <input name= 'password' value={authData.password} onChange={onChangeFunc} type="password" placeholder='Password'/>
            <div onClick={googleLogin}className='auth-container-google'>Google ile Giriş Yap</div>
            <p onClick={()=> setSignUp(!signUp)}>{ signUp ? "Daha önce kayıt oldunuz mu?" : "Kayıt olmak mı istiyorsunuz?"}</p>
            <div onClick={authFunc} className='auth-container-button'> {signUp ?  "KAYDOL" : "GİRİŞ YAP" }</div>
        </div>

    </div>
  )
}

export default Auth 