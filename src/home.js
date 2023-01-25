import Github from './Images/github.png'
import Email from './Images/email.png'
import Epic from './Images/epic_games.png'
import Leetcode from './Images/leetcode.png'
import Linkedin from './Images/linkedin.png'
import Reddit from './Images/reddit.png'
import Steam from './Images/steam.png'
import './home.css'

function Home() {
    return (
      <div class="ghar">
        <section class="Home">
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
                <a href="https://www.reddit.com/user/Saurabh_cr_007"><img src={Reddit} class="slinks"></img></a>
              </div>
              <div class="s_link">
                <a href="https://store.epicgames.com/en-US/u/6155006e16f14abe80c1300827691a86"><img src={Epic} class="slinks"></img></a>
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