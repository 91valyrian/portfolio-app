import React, { Component } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

class Highlight extends Component{

    constructor(props){
        super(props);
        this.sectionRef = React.createRef();
        this.bgBoxRef = React.createRef();
        this.textBoxRef = React.createRef();
    }

    componentDidMount() {
        // ScrollTrigger로 section을 고정
        gsap.to(this.sectionRef.current, {
            scrollTrigger: {
                trigger: this.sectionRef.current,
                pin: true,
                start: 'top top', 
                end: 'bottom top',
                scrub: true,
            },
        });

        // bgBox에 페이드 인 애니메이션 추가
        gsap.fromTo(this.bgBoxRef.current.children, 
            { scale: 0.2 }, 
            { 
                scale: 1.2, 
                duration: 2,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: this.sectionRef.current,
                    start: 'top 40%',
                    end: 'bottom top',
                    scrub: true,
                },
            }
        );

        // textBox에 페이드 업 애니메이션 추가
        gsap.fromTo(this.textBoxRef.current.children, 
            { x: -2000 }, 
            { 
                x: 0, 
                duration: 1,
                stagger: 0.3, // 각 텍스트가 차례로 나타나도록
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: this.sectionRef.current,
                    start: 'top 40%',
                    end: 'bottom top',
                    scrub: true,
                },
            }
        );

    }
    

    render() {
        return (
            <section className="highlightSection" ref={this.sectionRef} >
                <div className="content">
                    <div className="bgBox" ref={this.bgBoxRef}>
                        <video className='visible_desktop_only' src={require(`../../video/background.mp4`)} autoPlay muted playsInline loop></video>
                        <video className='visible_mobile_tablet' src={require(`../../video/vertical_background.mp4`)} autoPlay muted playsInline loop></video>
                    </div>

                    <div className="textBox" ref={this.textBoxRef}>
                        <p>FLEXIBILITY</p>
                        <p>PASSION</p>
                        <p>ACTIVELY</p>
                    </div>

                    <div className="bottomTextBox">
                        <p>
                            유연함과 열정으로 능동적인 성장을 이끌며, 끊임없는 도전과 <br />
                            배움을 통해 더욱 높은 목표를 향해 나아갑니다.
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Highlight;
