import Photo from './Images/header_photo.png'
import './header.css'
import Home from './home';
import About from './about';
import Project from './project';

function App() {
  return (
    <div class="app">
      <header class="header">
        <div class="header_content">
          <div class="header_name">
            <div class="my_image">
              <img src={Photo} class="header_photo"></img>
            </div>
            <spam class="my-name">SAURABH CHAUDHARY</spam>
          </div>
          <div class="header_menu">
            <div class="header_items">
              <div class="header_link">
                <spam class="links">home</spam>
              </div>
              <div class="header_link">
                <spam class="links">about</spam>
              </div>
              <div class="header_link">
                <spam class="links">projects</spam>
              </div>
              <div class="header_link">
                <spam class="links">Resume</spam>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Home />
      <About />
      <Project />
    </div>
  );
}

export default App;
