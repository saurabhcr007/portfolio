import Github from './Images/github.png'
import Discord from './Images/discord.png'
import Reddit from './Images/reddit.png'
import Linkedin from './Images/linkedin.png'
import Email from './Images/email.png'
import Leetcode from './Images/leetcode.png'
import Steam from './Images/steam.png'
import './home.css'

function Home() {
    return (
      <div class="ghar">
        <section class="Home" id="home-sec">
        <div class="body_content">
          <div class="body_text_top">
            <h1 class="naam"><b class="wave">&#128075;</b>HELLO , I'M SAURABH CHAUDHARY</h1>
            <div class="social_links">
              <div class="s_link">
                <a href="https://www.linkedin.com/in/saurabhcr007/"><img src={Linkedin} class="slinks"></img></a>
              </div>
              <div class="s_link">
                <a href="https://github.com/saurabhcr007/"><img src={Github} class="slinks"></img></a>
              </div>
              <div class="s_link">
                <a href="https://leetcode.com/saurabhCR007/"><img src={Leetcode} class="slinks"></img></a>
              </div>
              <div class="s_link">
                <a href="https://discord.com/channels/564737787715256330"><img src={Discord} class="slinks"></img></a>
              </div>
              <div class="s_link">
                <a href="https://www.reddit.com/user/Saurabh_cr_007"><img src={Reddit} class="slinks"></img></a>
              </div>
              <div class="s_link">
                <a href="mailto:supersaurabh017@gmail.com"><img src={Email} class="slinks"></img></a>
              </div>
              <div class="s_link">
                <a href="https://steamcommunity.com/id/Saurabh_cr007/"><img src={Steam} class="slinks"></img></a>
              </div>
            </div>
            <div class="middle_mouse">
              <div class="mouse"></div>
            </div>
          </div>
        </div>
        </section>
      </div>
    );
}

export default Home;