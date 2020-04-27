import React , { Component } from 'react';
import './App.css';
import SkipContent from './components/skipContent/SkipContent'
import SlideShow from './components/slideShow/SlideShow'
import img1 from './images/background.jpg'
import img2 from './images/background_02.jpg'
import img3 from './images/background_03.jpg'
import img4 from './images/background_04.webp'
import Panel from './components/panel/Panel';
import ProductList from './components/productList/ProductList'


const collection = [
    { src: img1 , alt : 'image01'},
    { src: img2 , alt : 'image02'},
    { src: img3 , alt : 'image03'},
    { src: img4 , alt : 'image04'}
]
class App extends Component {
    render() {
        return (
            <div className="container">
                <SkipContent />
                {/* <Menu /> */}
                <SlideShow 
                    input = {collection}
                    ratio = '3:2'
                    mode= "automatic"
                />
                <Panel content="CURRENT LEAD TIME ON NEW ORDER IS 6-8 WEEKS"/>
                <Panel content="LEATHER WALLETS" header="FEATURED COLLECTION" />
                <ProductList />
            </div>
            
            

        )
    };
}

export default App;
