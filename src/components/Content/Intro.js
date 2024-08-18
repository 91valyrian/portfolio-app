import React, { Component } from "react";
import Loading from '../Loading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// IMAGE IMPORT
import VisualImg from '../../img/intro/vi-ring.png';

gsap.registerPlugin(ScrollTrigger);

class Intro extends Component{

    constructor(props){
        super(props);
        this.elements = [];
        this.sectionRef = React.createRef(); // 새로운 ref 추가
    }

    componentDidMount() {
        this.elements.forEach((el, index) => {
            if (el) {
                gsap.to(el, {
                    duration: 1,
                    delay: index * 0.2,
                    onStart: () => {
                        el.classList.add('startOn');
                    }
                });
            }
        });

        // ScrollTrigger를 introSection에 적용
        gsap.to(this.sectionRef.current, {
            scrollTrigger: {
                trigger: this.sectionRef.current,
                start: '0%', // 스크롤이 top center에 도달할 때
                end: 'bottom 50%', // 스크롤이 bottom top에 도달할 때
                markers: true, // 트리거 포인트를 시각적으로 표시
                scrub: true, // 스크롤에 따라 애니메이션 동기화
                onEnter: () => {
                    this.elements.forEach((el, index) => {
                        if (el) {
                            gsap.to(el, {
                                duration: 1,
                                delay: index * 0.2,
                                onStart: () => {
                                    el.classList.add('startOn');
                                }
                            });
                        }
                    });
                },
                onLeave: () => { // end 지점을 지나면 startOn 클래스 제거
                    this.elements.forEach(el => {
                        if (el) {
                            el.classList.remove('startOn');
                        }
                    });
                },
                onLeaveBack: () => { // 다시 돌아오면 startOn 클래스 추가
                    this.elements.forEach((el, index) => {
                        if (el) {
                            gsap.to(el, {
                                duration: 1,
                                delay: index * 0.2,
                                onStart: () => {
                                    el.classList.add('startOn');
                                }
                            });
                        }
                    });
                }

            },
        });
    }

    render(){
        const { isLoaded } = this.props;

        if(!isLoaded){
            return <Loading />
        }
    
        return(
            <section className="introSection" ref={this.sectionRef}>
                <div className="imgBox ring"><img src={VisualImg} alt="비주얼 포인트 이미지" /></div>

                <div className="wrap">
                    <div className="introContainer">
                        {/* 텍스트 박스 */}
                        <div className="vi-text">
                            <div className="txt-line">
                                <p className="tit" ref={el => this.elements[0] = el}>
                                    CRAFTING
                                    <span className="float-1">CRAFTING</span>
                                    <span className="float-2">CRAFTING</span>
                                    <span className="float-3">CRAFTING</span>
                                    <span className="float-4">CRAFTING</span>
                                </p>
                            </div>
                            <div className="txt-line">
                                <p className="tit" ref={el => this.elements[1] = el}>
                                    MY
                                    <span className="float-1">MY</span>
                                    <span className="float-2">MY</span>
                                    <span className="float-3">MY</span>
                                    <span className="float-4">MY</span>
                                </p>
                                <p className="desc visible_desktop">
                                    저는 다양한 웹 서비스의 개발하고 운영해온 경험이 있습니다.<br />
                                    다수의 UI 구현을 통해 사용자 인터랙션에 대한 이해도를 갖추고 있으며 업무 효율 향상에 많은 관심을 가지고 있습니다.
                                </p>
                            </div>
                            <div className="txt-line">
                                <p className="tit" ref={el => this.elements[2] = el}>UNIQUE<br className="visible_mobile"/> WEB
                                    <span className="float-1">UNIQUE<br className="visible_mobile" />  WEB</span>
                                    <span className="float-2">UNIQUE<br className="visible_mobile" />  WEB</span>
                                    <span className="float-3">UNIQUE<br className="visible_mobile" />  WEB</span>
                                    <span className="float-4">UNIQUE<br className="visible_mobile" />  WEB</span>
                                </p>
                                <p className="desc visible_mobile">
                                    저는 다양한 웹 서비스의 개발하고 운영해온<br />
                                    경험이 있으며 다수의 UI 구현을 통해 사용자 인터랙션에<br />
                                    대한 이해도를 갖추고 있고 업무 효율 향상에<br />
                                    많은 관심을 가지고 있습니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


export default Intro;