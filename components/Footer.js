import github from '/Users/ep/Codesmith/reactide-website/assets/images/github-logo.png'

export default function Footer() {
  return (
    <div className='footer'>
      <h5>
      ©Copyright. All rights reserved.
      </h5>
      <a href='https://github.com/reactide/reactide'>
      <img src='https://i.imgur.com/SGjW0Lo.png' />
      </a>
      <br></br>
      <a className="github-button" href="https://github.com/reactide/reactide" data-icon="octicon-star" data-show-count="true" aria-label="Star ntkme/github-buttons on GitHub">Star</a>
    </div>
  )
}