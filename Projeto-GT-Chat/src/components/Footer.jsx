import '../styles/footer.css'
import DigitalCollegeBranco from '../assets/digital-college-branco.png'

export default function Footer(){
    return (
        <>
        <footer>
            <div className='container footer-container'>
                <p className='footer-title'>Nossos apoiadores</p>
                 <img src={DigitalCollegeBranco} alt="" />
            </div>
        </footer>
        </>
    )
}