import React from 'react'
import '../styles/components/Navbar.css'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'
import { toast } from 'react-toastify'

const navbar = () => {
    const logoutFunc = async()=> {
        toast.success( 'Çıkış işlemi gerçekleştiriliyor...')
        await signOut(auth)
        setTimeout(() => {
            window.location = "/"

        }, 3000
        );
    }
  return (
    <div className='navbar'>
        <div className='navbar-left'>BİLİNDİRİM</div>
        <div onClick={logoutFunc}className='navbar-right'>ÇIKIŞ YAP</div>

    </div>
  )
}

export default navbar