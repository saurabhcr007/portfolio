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
                    <div class="main_heading-project-sub-topic"><p>Here are my some projects which are made by me in individually or in team</p>
                    </div>
                </div>
                <div class="main_content-project">
                    <div class="main_content-project-row">
                        <div class="main_content-project-img">
                            <img class="projects__row-img" src={Porject2} alt="porject2" />
                        </div>
                        <div class="main_content-project-content">
                            <h3 class="main_content-project-content-heading">Memes Generator</h3>
                            <p class="main_content-project-content-paragraph">Memes Generator is webpage where you can get memes template and can make your own memes by editing it on webpage <b>,</b> After that you can download it and share it with your friends <b>.</b></p>
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
                            <p class="main_content-project-content-paragraph">Password Generator is a Webpage where you can crate a unique password <b>,</b> which can you use it by copying it <b>,</b> you can set the length of the password <b>.</b> </p>
                            {/* <a class="main_content-project-content-button-code" href='https://github.com/saurabhcr007/Password-Generator-by-html-css-js-'>CODE</a> */}
                            <a class="main_content-project-content-button-site" href='https://saurabhcr007.github.io/Password-Generator-by-html-css-js-/' target="_blank">Live Link</a>
                        </div>
                    </div>
                    <div class="main_content-project-row">
                        <div class="main_content-project-img">
                            <img class="projects__row-img" src={Porject4} alt="porject4" />
                        </div>
                        <div class="main_content-project-content">
                            <h3 class="main_content-project-content-heading">EduLABS (User Interactive Lab Simulator)</h3>
                            <p class="main_content-project-content-paragraph">EduLABS is a android application <b>,</b>It is a virtual lab simulation application for interactive experiments and research with a user-friendly interface and a variety of laboratory equipment<b>.</b> </p>
                            {/* <a class="main_content-project-content-button-code" href='https://github.com/saurabhcr007/EduLABs'>CODE</a> */}
                            <a class="main_content-project-content-button-site" href='https://drive.google.com/drive/folders/1VeFXubCw4QUZ9QEamGPOndRyvNLXKw3f?usp=sharing' target="_blank">Download Link</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Project;
