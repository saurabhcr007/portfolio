import './about.css'

function About(){
    return(
        <div class="info">
            <div id="about">
                <div class="main_heading">
                    <spam class="main_heading_about">
                        <u>ABOUT</u>
                    </spam>
                </div>
                <div class="main_information">
                    <div class="about_content-main">
                        <h3 class="about_content-title">KNOW ME !</h3>
                        <div class="about_content-detail">
                            <p class="about_content-detail-paragraph">My name is <b>Saurabh Chaudhary</b> and I am Pursuing my B.Tech in <b>Computer Science and Information Technology</b> from <b>Dr. A.P.J. Abdul Kalam Technical University</b></p>
                            <p class="about_content-detail-paragraph">I have relevant skills in the field software development and hands-on experience on several languages <b>,</b> tools and frameworks<b>.</b></p>
                            {/* <p class="about_content-detail-paragraph">I have made some projects, which you can find below <b>.</b> I have made them when i was learning about the tech stacks<b>.</b></p> */}
                            <p class="about_content-detail-paragraph">I'm open to opportunities where I can contribute with the best of my knowledge while also improving upon my skills to learn and grow <b>.</b> </p>
                        </div>
                    </div>
                    <div class="about_content-skill">
                        <h3 class="about_content-title">MY SKILL</h3>
                        <div class="about-skill">
                            <div class="skill_tree-skill">HTML</div>
                            <div class="skill_tree-skill">CSS</div>
                            <div class="skill_tree-skill">JAVA</div>
                            <div class="skill_tree-skill">Javascript</div>
                            <div class="skill_tree-skill">React.js</div>
                            <div class="skill_tree-skill">SQL</div>                                    
                            <div class="skill_tree-skill">Github</div>
                            <div class="skill_tree-skill">Unity3D</div>
                            <div class="skill_tree-skill">GIT</div>
                            <div class="skill_tree-skill">AR/VR</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;