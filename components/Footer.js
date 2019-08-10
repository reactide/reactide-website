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
      <br></br>
      <a class="github-button" href="https://github.com/reactide/reactide" data-icon="octicon-star" data-show-count="true" aria-label="Star ntkme/github-buttons on GitHub">Star</a>
    </div>
  )
}