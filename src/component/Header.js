import React from 'react'

const Header = () => {
  return (
      <div>
          <header>
              <div>
                  <img src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'></img>
                  <div className='search-box'>
                      <form>
                          <input type="search" name="search" value="build this page" className="search-prompt" />
                      </form>
                  </div>
                  <div className="nav-right">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMG6DsqfFZ-Mlo3ULMOs6CqBqBuSLUT5_OZv82wlZVs_LnHFGgZg" alt="Googleapps" height="16px" width="16px" />
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