import React ,{useState} from 'react'
import '../styles/pages/Home.css'
import Dropdown from '../components/Dropdown'
import { useNavigate } from 'react-router-dom'

const Home = ({users}) => {
    const seçim =["Seçiniz..","Kitap-Yazar Eşleşmesi"]
    const [seçimChange, setSeçimChange]= useState('')
    const navigate = useNavigate ()
    

    console.log(seçimChange, "seçimChange");

    const startQuiz = () => {
        if(seçimChange){
            navigate('/pages/${seçimChange}')
        };
    }
  return (
    <div className='home'>
        <div className="home-container">
        BİLİNDİRİME HOŞ GELDİNİZ
        <span>{users?.email}</span>
        < Dropdown  data= {seçim} setSeçimChange={setSeçimChange}/>
        <div onClick={startQuiz}className='home-btn'>Sınavı Başlat</div>
    </div>
        
    </div>
  )
}

export default Home