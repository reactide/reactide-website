import github from '../assets/images/github-logo.png'

export default function Footer() {
  return (
    <div className='footer'>
      <h5>
      ©Copyright. All rights reserved.
      </h5>
      <a href='https://github.com/reactide/reactide'>
      <img src={github} />
      </a>
    </div>
  )
}