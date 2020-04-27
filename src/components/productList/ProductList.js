import React, { Component } from 'react';
import './ProductList.css';
import Product from '../product/Product';
import img1 from '../../images/product_01.webp';
import img2 from '../../images/product_02.png';

// component chứa danh sách các sản phẩm
class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product : [
                {image : img1, name : "Ví da cao cấp", alt : img1, price : "300.000"},
                {image : img2, name : "Ví da Thái Bình", alt : img2, price : "550.000"},
                {image : img1, name : "Ví da xuất khẩu", alt : img1, price : "200.000"},
                {image : img1, name : "Ví da nhập khẩu", alt : img1, price : "100.000"},
                {image : img1, name : "Ví da bò", alt : img1, price : "300.000"},
                {image : img1, name : "Ví da trâu", alt : img1, price : "250.000"},
                {image : img2, name : "Ví da xịn", alt : img2, price : "350.000"},
                {image : img1, name : "Ví da siêu xịn", alt : img1, price : "400.000"}
            ]
        }
    };
    render() {
        return (
            <div>
                <div className="row">
                    {/* Chay map cac san pham */}
                    {
                        this.state.product.map((product,index) => {
                            return(
                                <Product 
                                    key={index}
                                    productImage={product.image} 
                                    productAlt={product.alt}
                                    productPrice={product.price}
                                    productName={product.name}
                                />
                            )
                        })
                    }
                </div>
                <div className="container">
                    <div className="SectionFooter">
                        <button className="button button--primary" href="# ">VEIW ALL PRODUCTS</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductList;