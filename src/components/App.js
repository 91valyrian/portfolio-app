import React, { Component } from 'react';
import '../scss/Allcss.scss';
import HeaderAdmin from './Header/Header_admin';
import Intro from './Content/Intro';
import About from './Content/About';
import Project from './Content/Project';
import Highlight from './Content/Highlight';
import Footer from './Footer/Footer';
import Loading from './Loading';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            isClicked: false,
            mouseX: 0,
            mouseY: 0,
        };
    }

    componentDidMount() {
        // 5초 후 로딩 종료
        this.timer = setTimeout(() => {
            this.setState({ isLoaded: true });
        }, 0);

        // 이벤트 리스너 추가
        document.addEventListener('mousedown', this.handleMouseDown);
        document.addEventListener('mouseup', this.handleMouseUp);
    }

    componentWillUnmount() {
        // 컴포넌트 언마운트 시 타이머 및 이벤트 리스너 정리
        clearTimeout(this.timer);
        document.removeEventListener('mousedown', this.handleMouseDown);
        document.removeEventListener('mouseup', this.handleMouseUp);
    }

    handleMouseDown = () => {
        this.setState({ isClicked: true });
    }

    handleMouseUp = () => {
        this.setState({ isClicked: false });
    }

    handleMouseMove = (e) => {
        this.setState({
            mouseX: e.clientX,
            mouseY: e.clientY,
        });
    };

    render() {
        const { isLoaded, mouseX, mouseY, isClicked } = this.state;

        if (!isLoaded) {
            return <Loading />;
        }

        return (
            <div className='App' onMouseMove={this.handleMouseMove}>
                <div 
                    className={`cursor ${isClicked ? 'clicked' : ''}`}
                    style={{ transform: `translate3d(${mouseX}px, ${mouseY}px, 0)` }}
                />
                <HeaderAdmin />
                
                <main>
                    <Intro isLoaded={isLoaded} />
                    <About />
                    <Project />
                    <Highlight />
                </main>

                <Footer />
            </div>
        );
    }
}

export default App;
