import Uzbekistan from '../assets/Uzbekistan.avif'
import HeaderImg from '../assets/HeaderImg.jpg'

function Header (){
    return(
        <>
        <div className='image-container'>
        <img src={HeaderImg} alt="" className='header-image'/>
        
        <div className='headerImageText'><b style={{fontSize:"260%"}}>Hi, I'm Fumika!</b> <br />This is a world travel blog featuring beautiful destinations, new experiences, and hidden places around the world.</div>
        </div>
  
        </>
    )
}
export default Header