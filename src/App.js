import React , { Component } from 'react';
import './App.css';
import SkipContent from './components/skipContent/SkipContent'
import Menu from './components/menu/Menu'
import SlideShow from './components/slideShow/SlideShow'
import img1 from './images/background.jpg'
import img3 from './images/background_02.jpg'
import Panel from './components/panel/Panel';

const collection = [
    { src: img1 , alt : 'anh1'},
    { src : img3 , alt : 'anh3'}
]
class App extends Component {
    render() {
        return (
            <div>
                <SkipContent />
                <Menu />
                <SlideShow 
                    input = {collection}
                    ratio = '3:2'
                    mode= "automatic"
                />
                <Panel content="CURRENT LEAD TIME ON NEW ORDER IS 6-8 WEEKS"/>
                <Panel content="LEATHER WALLETS" header="FEATURED COLLECTION" />
            </div>
            
            

        )
    };
}

export default App;
