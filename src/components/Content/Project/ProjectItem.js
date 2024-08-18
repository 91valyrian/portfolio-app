import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Project extends Component{

    constructor(props){
        super(props);
        this.state = {
            mouseX: 0,
            mouseY: 0,
            projectId : this.props.projectId,
            projectLink : this.props.projectLink,
            projectSkillList : this.props.projectSkillList,
            projectImg : this.props.projectImg,
        }
    }

    handleMouseMove = (e) => {
        this.setState({
            mouseX: e.clientX,
            mouseY: e.clientY,
        });
    };

    render(){
        const {mouseX, mouseY} = this.state;

        return(
            <div className="item" onMouseMove={this.handleMouseMove}>
                <Link to={this.props.projectLink} target="_blank" className="itemLink">
                    <div className="projectInfo">
                        <p
                            className="tit"
                            dangerouslySetInnerHTML={{ __html: this.props.projectId }}
                        />
                        <ul 
                            className="skillList"
                            dangerouslySetInnerHTML={{ __html: this.props.projectSkillList }}
                        />
                    </div>

                    <figure
                        className="imgWrap"
                        style={{ top : `${mouseY}px`, left: `${mouseX}px` }}
                    >
                        <div className="imgBox">
                            <img src={require(`../../../img/project/${this.props.projectImg}.png`)} alt="프로젝트 썸네일 이미지" />
                        </div>
                    </figure>

                    <div className="btnWrap">
                        <span>VIEW SITE <span className="pepicons-pop--arrow-up"></span></span>
                    </div>
                </Link>
            </div>
        )
    }
}


export default Project;