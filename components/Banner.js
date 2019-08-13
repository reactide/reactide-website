import textLogo from '/Users/ep/Codesmith/reactide-website/assets/images/reactide-text-logo.png'
import logo from '/Users/ep/Codesmith/reactide-website/assets/images/reactide-logo.png'

export default function Banner() {
  return (
    <div className='banner'>
      <img src={logo} className='logo' />
      <img src={textLogo} className='textLogo' />
      <h1>The first dedicated IDE for React web application development</h1>
      
    </div>
  )
}