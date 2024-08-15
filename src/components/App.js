import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import '../scss/Allcss.scss';
import HeaderAdmin from './Header/Header_admin';
// import Footer from './Footer/Footer';
// import LoginForm from './LoginForm';
// import About from './About/About';
// import SoftwareList from './SoftwareToolsManage/SoftwareList';
// import SoftwareView from './SoftwareToolsManage/SoftwareView';
// import SoftwareCheck from './SoftwareToolsManage/SoftwareCheck';
// import PwChangeForm from './PwChangeForm';
// import Register from './Register/Register';

class App extends Component {
    render() {
        return (
            <div className='App'>
                asdf
                <HeaderAdmin />
                {/* <Routes>
                    <Route exact path='/' element={<SoftwareList />} />
                    <Route exact path='/login' element={<LoginForm />} />
                    <Route exact path='/About' element={<About />} />
                    <Route exact path='/SoftwareList' element={<SoftwareList />} />
                    <Route exact path='/SoftwareView/:swtcode' element={<SoftwareView />} />
                    <Route exact path='/SoftwareCheck/:swtcode' element={<SoftwareCheck />} />
                    <Route exact path='/register' element={<Register />} />
                    <Route exact path='/PwChangeForm/:email/:token' element={<PwChangeForm />} />
                </Routes>
                <Footer /> */}
            </div>
        );
    }
}

export default App;
