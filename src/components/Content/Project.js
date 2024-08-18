import React, { Component } from "react";
import ProjectItem from './Project/ProjectItem';

class Project extends Component{

    render(){

        return(
            <section className="projectSection">
                <p className="project-tit">
                    Projects Recently <br />Worked On
                </p>

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
                </div>
            </section>
        )
    }
}


export default Project;