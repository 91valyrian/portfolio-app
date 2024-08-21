import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.sectionRef = React.createRef();
        this.contactListRef = React.createRef();
        this.textBoxRefs = []; // Multiple refs for text boxes
    }

    componentDidMount() {
        // Intersection Observer 설정
        const observerOptions = {
            root: null, // 뷰포트를 기준으로 관찰
            threshold: 0.6, // 요소가 10% 이상 보이면 트리거
        };

        // Contact List 애니메이션
        const contactListObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    gsap.to(this.contactListRef.current, { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' });
                } else {
                    gsap.to(this.contactListRef.current, { opacity: 0, x: -200, duration: 0.8, ease: 'power2.out' });
                }
            });
        }, observerOptions);

        contactListObserver.observe(this.contactListRef.current);

        // Text Boxes 애니메이션
        this.textBoxRefs.forEach((textBoxRef, index) => {
            const textBoxObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        gsap.to(textBoxRef.children, { opacity: 1, y: 0, duration: 0.8, delay: index * 0.3, ease: 'power2.out' });
                    } else {
                        gsap.to(textBoxRef.children, { opacity: 0, y: '100%', duration: 0.8, delay: index * 0.3, ease: 'power2.out' });
                    }
                });
            }, observerOptions);

            textBoxObserver.observe(textBoxRef);
        });
    }

    render() {
        return (
            <footer className='footerSection' ref={this.sectionRef}>
                <div className="wrap">
                    <div className="contact-list" ref={this.contactListRef}>
                        <Link to={'tel:010-9928-6110'}>PHONE</Link>
                        <Link to={'mailto:91.valyrian@gmail.com'}>EMAIL</Link>
                        <Link to={'https://www.instagram.com/u.say.cheeze/'} target='_blank'>INSTAGRAM</Link>
                    </div>

                    <div className="typoGraphy">
                        <div className="typeBox" ref={(el) => (this.textBoxRefs[0] = el)}>
                            <p>LEE HYEONG</p>
                        </div>
                        <div className="typeBox" ref={(el) => (this.textBoxRefs[1] = el)}>
                            <Link to={'sms:01099286110?body=문의하실 내용을 작성해 주세요.'} className="message">message</Link>
                            <p>SEOK</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
