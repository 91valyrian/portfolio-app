import React, { Component } from "react";
import ProjectItem from './Project/ProjectItem';

class Project extends Component{

    render(){

        return(
            <section className="projectSection" name='project'>
                <p className="project-tit">
                    Projects Recently <br />Worked On
                </p>

                <div className="imgFloat topImg"><img src={require(`../../img/about/about-star.png`)}  alt="" /></div>

                <div className="projectList">
                    <ProjectItem
                        projectId={'SEJONG CYBER<br />UNIVERSITY'}
                        projectSkillList={'<li># Renewal</li><li># Responsive</li><li># Swiper</li><li># Marquee</li>'}
                        projectImg={'projectImg-01'}
                        projectLink={'https://home.sjcu.ac.kr'}
                    />

                    <ProjectItem
                        projectId={'YUIL<br />ELEVATOR'}
                        projectSkillList={'<li># Responsive</li><li># Slick</li><li># Animation</li>'}
                        projectImg={'projectImg-02'}
                        projectLink={'https://yuil-e.co.kr/'}
                    />

                    <ProjectItem
                        projectId={'HAESOL<br />NETWORK'}
                        projectSkillList={'<li># Responsive</li><li># Slick</li><li># Marquee</li><li># GSAP</li><li># SlickTrigger</li>'}
                        projectImg={'projectImg-03'}
                        projectLink={'https://wooriaiok.com/'}
                    />

                    <ProjectItem
                        projectId={'BLUEL'}
                        projectSkillList={'<li># Responsive</li><li># Slick</li><li># GSAP</li><li># SlickTrigger</li>'}
                        projectImg={'projectImg-04'}
                        projectLink={'https://bluel.net/'}
                    />

                    <ProjectItem
                        projectId={'NANO<br />& SPACE'}
                        projectSkillList={'<li># Responsive</li><li># Slick</li><li># Animation</li><li># AOS</li>'}
                        projectImg={'projectImg-05'}
                        projectLink={'https://nano-hitec.com/'}
                    />

                    <ProjectItem
                        projectId={'QUEEN’S<br />RECIPE GLOBAL'}
                        projectSkillList={'<li># Responsive</li><li># Slick</li><li># GSAP</li><li># SlickTrigger</li>'}
                        projectImg={'projectImg-06'}
                        projectLink={'https://queensrecipeglobal.com/'}
                    />

                    <ProjectItem
                        projectId={'GODOT<br />SYMPHONY'}
                        projectSkillList={'<li># Responsive</li><li># Slick</li><li># CustomMusicFilter</li>'}
                        projectImg={'projectImg-07'}
                        projectLink={'https://godotsymphony.com/'}
                    />

                </div>

                <div className="imgFloat bottomImg"><img src={require(`../../img/about/about-star.png`)}  alt="" /></div>
            </section>
        )
    }
}


export default Project;