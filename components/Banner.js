import textLogo from '../assets/images/reactide-text-logo.png'
import logo from '../assets/images/reactide-logo.png'

export default function Banner() {
  return (
    <div className='banner'>
      <img src={logo} className='logo' />
      <img src={textLogo} className='textLogo' />
      <h1>Reactide is the first dedicated IDE for React web application development.</h1>
      
    </div>
  )
}