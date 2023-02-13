import './project.css'
import Porject1 from './Images/project1.png';
import Porject2 from './Images/project2.png';
import Porject3 from './Images/project3.png';
import Porject4 from './Images/project1.png';

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
                            <img class="projects__row-img" src={Porject1} alt="porject1" />
                        </div>
                        <div class="main_content-project-content">
                            <h3 class="main_content-project-content-heading">Portfolio</h3>
                            <p class="main_content-project-content-paragraph">wertyudsdg sdg sd dsg sd g gsd gsdg sdg sd gs dg sdg sdg s dgsdg dh dhdtg dfgh yhjgkjh ghkjljhgkj gfjgklhkj</p>
                            <a class="main_content-project-content-button-code">CODE</a>
                            <a class="main_content-project-content-button-site">SITE</a>
                        </div>
                    </div>
                    <div class="main_content-project-row">
                        <div class="main_content-project-img">
                            <img class="projects__row-img" src={Porject2} alt="porject1" />
                        </div>
                        <div class="main_content-project-content">
                            <h3 class="main_content-project-content-heading">Memes Generator</h3>
                            <p class="main_content-project-content-paragraph">wertyudsdg sdg sd dsg sd g gsd gsdg sdg sd gs dg sdg sdg s dgsdg dh dhdtg dfgh yhjgkjh ghkjljhgkj gfjgklhkj</p>
                            <a class="main_content-project-content-button-code">CODE</a>
                            <a class="main_content-project-content-button-site">SITE</a>
                        </div>
                    </div>
                    <div class="main_content-project-row">
                        <div class="main_content-project-img">
                            <img class="projects__row-img" src={Porject3} alt="porject1" />
                        </div>
                        <div class="main_content-project-content">
                            <h3 class="main_content-project-content-heading">Password Generator</h3>
                            <p class="main_content-project-content-paragraph">wertyudsdg sdg sd dsg sd g gsd gsdg sdg sd gs dg sdg sdg s dgsdg dh dhdtg dfgh yhjgkjh ghkjljhgkj gfjgklhkj</p>
                            <a class="main_content-project-content-button-code">CODE</a>
                            <a class="main_content-project-content-button-site">SITE</a>
                        </div>
                    </div>
                    <div class="main_content-project-row">
                        <div class="main_content-project-img">
                            <img class="projects__row-img" src={Porject1} alt="porject1" />
                        </div>
                        <div class="main_content-project-content">
                            <h3 class="main_content-project-content-heading">Portfolio</h3>
                            <p class="main_content-project-content-paragraph">wertyudsdg sdg sd dsg sd g gsd gsdg sdg sd gs dg sdg sdg s dgsdg dh dhdtg dfgh yhjgkjh ghkjljhgkj gfjgklhkj</p>
                            <a class="main_content-project-content-button-code">CODE</a>
                            <a class="main_content-project-content-button-site">SITE</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Project;
