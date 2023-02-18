import './project.css'
import Porject2 from './Images/project2.png';
import Porject3 from './Images/project3.png';
import Porject4 from './Images/project4.png';

function Project() {
    return (
        <div class="project_main">
            <section class="project">
                <div class="main_heading-project">
                    <div class="main_heading-project-topic"><h2><u>PROJECTS</u></h2>
                    </div>
                    <div class="main_heading-project-sub-topic"><p>Here are my some projects which are made by me as individually or in team</p>
                    </div>
                </div>
                <div class="main_content-project">
                <div class="main_content-project-row">
                        <div class="main_content-project-img">
                            <img class="projects__row-img" src={Porject4} alt="porject4" />
                        </div>
                        <div class="main_content-project-content">
                            <h3 class="main_content-project-content-heading">EduLABS (User Interactive Lab Simulator)</h3>
                            <p class="main_content-project-content-paragraph">EduLABS is a user interactive lab simulator Android application project that provides virtual labs in various scientific fields<b>.</b> It allows users to test hypotheses<b>,</b> collect data<b>,</b> and analyze results through interactive experiments<b>.</b> The project offers a safe and cost-effective alternative to traditional labs and aims to enhance science education accessibility<b>.</b></p>
                            {/* <a class="main_content-project-content-button-code" href='https://github.com/saurabhcr007/EduLABs'>CODE</a> */}
                            <a class="main_content-project-content-button-site" href='https://drive.google.com/drive/folders/1VeFXubCw4QUZ9QEamGPOndRyvNLXKw3f?usp=sharing' target="_blank">Download Link</a>
                        </div>
                    </div>
                    <div class="main_content-project-row">
                        <div class="main_content-project-img">
                            <img class="projects__row-img" src={Porject2} alt="porject2" />
                        </div>
                        <div class="main_content-project-content">
                            <h3 class="main_content-project-content-heading">Memes Generator</h3>
                            <p class="main_content-project-content-paragraph">A Memes Generator is a web application that allows users to create and customize memes<b>.</b> It provides a variety of templates and tools to add captions<b>,</b> change the font<b>,</b> and add images<b>.</b> It can be used for personal enjoyment<b>,</b> social media engagement<b>,</b> or marketing campaigns<b>,</b> and is designed to be user-friendly and entertaining <b>.</b></p>
                            {/* <a class="main_content-project-content-button-code" href='https://github.com/saurabhcr007/memes-generator'>CODE</a> */}
                            <a class="main_content-project-content-button-site" href='https://memegenerator007.netlify.app/' target="_blank">Live Link</a>
                            {/* <button class="main_content-project-content-button-site" onclick="window.open('https://google.com', '_blank')">Live Link</button> */}
                        </div>
                    </div>
                    <div class="main_content-project-row">
                        <div class="main_content-project-img">
                            <img class="projects__row-img" src={Porject3} alt="porject3" />
                        </div>
                        <div class="main_content-project-content">
                            <h3 class="main_content-project-content-heading">Password Generator</h3>
                            <p class="main_content-project-content-paragraph">A password generator web application automatically generates strong and secure passwords for users<b>.</b> It has customizable settings and should be designed with security in mind, including encryption of passwords and protection against hacking attempts<b>.</b> It provides an easy and secure way for users to create strong passwords<b>.</b> </p>
                            {/* <a class="main_content-project-content-button-code" href='https://github.com/saurabhcr007/Password-Generator-by-html-css-js-'>CODE</a> */}
                            <a class="main_content-project-content-button-site" href='https://saurabhcr007.github.io/Password-Generator-by-html-css-js-/' target="_blank">Live Link</a>
                        </div>
                    </div>
                    
                </div>
            </section>
        </div>
    );
}

export default Project;
