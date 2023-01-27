import React from 'react'

const Header = () => {
  return (
      <div>
          <header>
              <div>
                  <img src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png' />
                  <div className='search-box'>
                      <form>
                          <input type="search" name="search" value="build this page" className="search-prompt" />
                      </form>
                  </div>
                  <div className="nav-right">
                      <span class="material-symbols-outlined">
                          apps
                      </span>
                          {/* <a href="index.html"><button>Sign in</button></a> */}
                  </div>
              </div>
              <nav>
                  <a href="#home">All</a>
                  <a href="#news">News</a>
                  <a href="#contact">Videos</a>
                  <a href="#about">Map</a>
                  <a href="#about">Shopping</a>
                  <a href="#about">More</a>
                  <a href="#about">Settings</a>
                  <a href="#about">Tools</a>
              </nav>

              <hr />
          </header> 
    </div>
  )
}

export default Header