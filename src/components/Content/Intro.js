import React, { Component } from "react";
import Loading from '../Loading';
import { Element } from 'react-scroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// IMAGE IMPORT
import VisualImg from '../../img/intro/vi-ring.png';

gsap.registerPlugin(ScrollTrigger);

class Intro extends Component {

    constructor(props) {
        super(props);
        this.sectionRef = React.createRef();
        this.textBoxRefs = []; // Multiple refs for text boxes
    }

    componentDidMount() {
        // 초기 상태 설정: 애니메이션이 적용되기 전에 텍스트 박스가 보이지 않도록 설정
        this.textBoxRefs.forEach((textBoxRef) => {
            if (textBoxRef) {
                gsap.set(textBoxRef, { opacity: 0, y: '100%' });
            }
        });

        // Intersection Observer 설정
        const observerOptions = {
            root: null, // 뷰포트를 기준으로 관찰
            threshold: 0.6, // 요소가 60% 이상 보이면 트리거
        };

        // Text Boxes 애니메이션
        this.textBoxRefs.forEach((textBoxRef, index) => {
            const textBoxObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.intersectionRatio > 0.6) {
                        gsap.to(entry.target, { opacity: 1, y: 0, duration: 0.6, delay: index * 0.2, ease: 'power2.out' });
                    }
                    // else {
                    //     gsap.to(entry.target, { opacity: 0, y: '100%', duration: 0.6, delay: index * 0.2, ease: 'power2.out' });
                    // }
                });
            }, observerOptions);

            if (textBoxRef) {
                textBoxObserver.observe(textBoxRef); // DOM 요소를 전달
            }
        });
    }

    render() {
        const { isLoaded } = this.props;

        if (!isLoaded) {
            return <Loading />
        }

        return (
            <Element name='home'>
                <section className="introSection" ref={this.sectionRef} name='home'>
                    <div className="imgBox ring"><img src={VisualImg} alt="비주얼 포인트 이미지" /></div>

                    <div className="wrap">
                        <div className="introContainer">
                            {/* 텍스트 박스 */}
                            <div className="vi-text">
                                <div className="txt-line">
                                    <p className="tit" ref={(el) => (this.textBoxRefs[0] = el)}>
                                        CRAFTING
                                    </p>
                                </div>
                                <div className="txt-line">
                                    <p className="tit" ref={(el) => (this.textBoxRefs[1] = el)}>
                                        MY
                                    </p>
                                    <p className="desc visible_desktop" ref={(el) => (this.textBoxRefs[2] = el)}>
                                        저는 다양한 웹 서비스의 개발하고 운영해온 경험이 있습니다.<br />
                                        다수의 UI 구현을 통해 사용자 인터랙션에 대한 이해도를 갖추고 있으며 업무 효율 향상에 많은 관심을 가지고 있습니다.
                                    </p>
                                </div>
                                <div className="txt-line">
                                    <p className="tit" ref={(el) => (this.textBoxRefs[3] = el)}>
                                        UNIQUE<br className="visible_mobile"/> WEB
                                    </p>
                                    <p className="desc visible_mobile" ref={(el) => (this.textBoxRefs[4] = el)}>
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
            </Element>
        )
    }
}

export default Intro;
