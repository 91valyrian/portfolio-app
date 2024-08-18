import React, { Component } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Marquee from "react-fast-marquee";

// img
import AboutPoint from '../../img/about/about-star.png';

gsap.registerPlugin(ScrollTrigger);

class About extends Component{
    constructor(props){
        super(props);
        this.sectionRef = React.createRef(); // 새로운 ref 추가
    }

    componentDidMount() {
        // ScrollTrigger를 introSection에 적용
        gsap.to(this.sectionRef.current, {
            scrollTrigger: {
                trigger: this.sectionRef.current,
                start: '0% 65%', // 스크롤이 top center에 도달할 때
                end: 'bottom 50%', // 스크롤이 bottom top에 도달할 때
                // markers: true, 
                scrub: true, // 스크롤에 따라 애니메이션 동기화
                onUpdate: (self) => this.animateTriggerBoxes(self.progress),
            }
        });
    }

    animateTriggerBoxes(progress) {
        // Select all triggerBox elements
        const triggerBoxes = document.querySelectorAll('.triggerBox');

        // Apply animation to each triggerBox
        triggerBoxes.forEach((box, index) => {
            const direction = index % 2 === 0 ? 1 : -1; 
            gsap.to(box, {
                x: direction * progress * 300, 
                duration: 0.1, 
                ease: "power1.out"
            });
        });
    }


    render(){
        return(
            <section className="aboutSection" ref={this.sectionRef}>
                <div className="imgBox about"><img src={AboutPoint} alt="About 포인트 이미지" /></div>

                <div className="marqueeSet">
                    <div className="marquee about">
                        <Marquee speed={100}>
                            <span>MEET THE VISIONARY BEHIND THE CODE</span>
                        </Marquee>
                    </div>

                    <div className="marqueeAbout">
                        <div className="triggerBox name">
                            <div className="boxWrap">
                                <span className="point">李亨錫</span>
                                <span>ฮยอนซอก ล</span>
                                <span>이형석</span>
                                <span className="point">イ・ヒョンソク</span>
                                <span>HyeongSeok Lee</span>
                                <span>Χιουνγκσέοκ Λι</span>
                                <span className="point">李亨錫</span>
                                <span>ฮยอนซอก ล</span>
                                <span>이형석</span>
                                <span className="point">イ・ヒョンソク</span>
                                <span>HyeongSeok Lee</span>
                                <span>Χιουνγκσέοκ Λι</span>
                            </div>
                        </div>
                    </div>

                    <div className="marqueeAbout">
                        <div className="triggerBox about">
                            <div className="boxWrap">
                                <span>적극적</span>
                                <span>융통성 있는</span>
                                <span className="point">열정가</span>
                                <span>변화에 빠르게</span>
                                <span >적응</span>
                                <span>원할한 협력</span>
                                <span>적극적</span>
                                <span>융통성 있는</span>
                                <span className="point">열정가</span>
                                <span>변화에 빠르게</span>
                                <span >적응</span>
                                <span>원할한 협력</span>
                            </div>
                        </div>
                    </div>

                    <div className="marqueeAbout">
                        <div className="triggerBox skill">
                            <div className="boxWrap">
                                <span>그누보드</span>
                                <span className="point">영카트</span>
                                <span>REACT</span>
                                <span className="point">HTML</span>
                                <span>JSP</span>
                                <span className="point">JAVASCRIPT</span>
                                <span>CSS</span>
                                <span>PHP</span>
                                <span className="point">SCSS</span>
                                <span>JQUERY</span>
                                <span>그누보드</span>
                                <span className="point">영카트</span>
                                <span>REACT</span>
                                <span className="point">HTML</span>
                                <span>JSP</span>
                                <span className="point">JAVASCRIPT</span>
                                <span>CSS</span>
                                <span>PHP</span>
                                <span className="point">SCSS</span>
                                <span>JQUERY</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="scrollBox">
                    <div className="circle"></div>
                </div>
            </section>
        )
    }
}

export default About;