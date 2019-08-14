import textLogo from '/Users/ep/Codesmith/reactide-website/assets/images/reactide-text-logo.png'
import logo from '/Users/ep/Codesmith/reactide-website/assets/images/reactide-logo.png'



export default function Banner() {
  return (
    <div className='banner'>
      <img src='https://i.imgur.com/HRNmuJs.png' className='logo' />
      <img src='https://i.imgur.com/VJVeX0f.png' className='textLogo' />
      <h1>The first dedicated IDE for React web application development</h1>
      
    </div>
  )
}