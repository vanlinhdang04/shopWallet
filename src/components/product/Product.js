import React, { Component } from 'react';
import './Product.css'

// component 1 sản phẩm
class Product extends Component {
    render() {
        return (
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6">
                <div className="card">
                    <img className="card-img-top productImage" src={this.props.productImage} alt={this.props.productAlt}/>
                    <div className="card-body heading">
                        <p className="card-text productName">{this.props.productName}</p>
                        <p className="card-text price">FROM {this.props.productPrice} VNĐ</p>
                    </div>
                </div>
            </div>
                
        );
    }
}

export default Product;