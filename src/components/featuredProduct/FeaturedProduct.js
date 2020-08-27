import React , { Component } from 'react';
import './FeaturedProduct.css';
import img from '../../images/Uncharted.jpg'
class FeaturedProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            featuredProduct : {image: img, name: "Limited Edition Uncharted Satchel - English Tan", alt: img, price:"899.000"}
        }
    }
    render() {
        return (
            <div className="row FeaturedProduct">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <img className="FeaturedProduct_Image" src={ this.state.featuredProduct.image } alt={ this.state.featuredProduct.alt }></img>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="FeaturedProduct_Infor">
                        <h1 className="Heading FeaturedProduct_Title">
                            <a href="# "> { this.state.featuredProduct.name }</a>
                        </h1>
                        <div className="Heading FeaturedProduct_PriceList">
                            <span className="FeaturedProduct_Price">
                                { this.state.featuredProduct.price } VND
                            </span>
                        </div>
                    </div>
                    <form className="FeaturedForm" action="# " method="POST">
                        <input type="hidden" ></input>
                        <button type="submit" className="button FeaturedFrom_Button button--primary">ADD TO CART</button>
                    </form>
                    
                </div>
            </div>
        )
    }
}
export default FeaturedProduct;