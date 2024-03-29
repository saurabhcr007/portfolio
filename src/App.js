import Photo from './Images/header_photo.png'
import './header.css'
import Home from './home';
import About from './about';
import Project from './project';
import Github from './Images/github.png'
import Linkedin from './Images/linkedin.png'

function App() {
  return (
    <div class="app">
      <header class="header">
        <div class="header_content">
          <div class="header_name">
            <div class="my_image">
              <img src={Photo} class="header_photo"></img>
            </div>
            <span class="my-name">SAURABH CHAUDHARY</span>
          </div>
          <div class="header_menu">
            <div class="header_items">
              <div class="header_link">
                <span class="links"><a href='#home-sec'>home</a></span>
              </div>
              <div class="header_link">
                <span class="links"><a href='#about'>About</a></span>
              </div>
              <div class="header_link">
                <span class="links"><a href='#project'>projects</a></span>
              </div>
              <div class="header_link">
                <span class="links"><a href="https://drive.google.com/file/d/1W3TMQirGiG_WRgBX1L5hexXDOUcy-UaV/view?usp=share_link" target="_blank">Resume</a></span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Home />
      <About />
      <Project />
      <footer class="footer">
        <div class="footer_main">
          <div class="main-footer_upper">
            <div class="main-footer_about">
              <h2 class="main-footer_about-heading">SAURABH CHAUDHARY</h2>
              <p class="main-footer_description">"A Developer Student , Who is dedicated towards enhancing programming skills to build efficient, user-friendly software applications for real-world problems."</p>
            </div>
            <div class="main-footer_social">
              <h2 class="main-footer_about-heading">Social</h2>
              <div class="main-footer_social-icons">
                <a class="footer_icon" href="https://www.linkedin.com/in/saurabhcr007/" target="_blank"><img src={Linkedin} class="s_links"></img></a>
                <a class="footer_icon" href="https://github.com/saurabhcr007/" target="_blank"><img src={Github} class="s_links"></img></a>
              </div>
            </div>
          </div>
          <div class="main-footer_lower">
            Made By:- <a target="__blank" href="https://www.linkedin.com/in/saurabhcr007/">SAURABH CHAUDHARY</a>  .
            || Inspired by :- <a target="__blank" href="https://www.rammaheshwari.com/">RAM MAHESHWARI</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
