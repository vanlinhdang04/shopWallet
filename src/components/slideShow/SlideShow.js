import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Slideshow.css';
import Menu from '../menu/Menu';

// component tạo slide ảnh
class SlideShow extends Component {
    constructor(prop) {
        super (prop);
        this.state = {
            slideIndex : 0
        };
        // Xac dinh ti le anh
        const ratioWHArray = this.props.ratio.split(":");
        this.ratioWH = ratioWHArray[0] / ratioWHArray[1];

        this.backward = this.backward.bind(this);
        this.forward = this.forward.bind(this);
        this.setSlideIndex = this.setSlideIndex.bind(this);
        this.getNewSlideIndex = this.getNewSlideIndex.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);
        this.runAutomatic = this.runAutomatic.bind(this);
    }
    getNewSlideIndex(step) {
        const slideIndex = this.state.slideIndex;
        const numberSlide = this.props.input.length;
    
        let newSlideIndex = slideIndex + step;
    
        if (newSlideIndex >= numberSlide) newSlideIndex = 0;
        else if (newSlideIndex < 0) newSlideIndex = numberSlide - 1;
    
        return newSlideIndex;
    }

    backward() {
        this.setState({
          slideIndex: this.getNewSlideIndex(-1)
        });
    }

    forward() {
        this.setState({
          slideIndex: this.getNewSlideIndex(1)
        });
    }

    setSlideIndex(index) {
        this.setState({
          slideIndex: index
        })
    }

    updateDimensions() {
        this.containerElm.style.height 
          = `${this.containerElm.offsetWidth / this.ratioWH}px`;
    }

    runAutomatic() {
        this.setState({
          slideIndex: this.getNewSlideIndex(1)
        });
    }

    componentDidMount() {
        this.rootElm = ReactDOM.findDOMNode(this);
        this.containerElm = this.rootElm.querySelector(".containerIA");
    
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);
    
        if (this.props.mode === "automatic") {
          const timeout = this.props.timeout || 5000;
          this.automaticInterval = setInterval(
            () => this.runAutomatic(),
            Number.parseInt(timeout)
          );
        }
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
        if (this.automaticInterval) clearInterval(this.automaticInterval);
    }
    
    render () {
        return(
            <div className="lp-slideshow">
                <Menu />
                <div className="containerIA">
                    {/* Chay map() dua anh len */}
                    { this.props.input.map((image,index) => {
                        return (
                            <div
                                key={index}
                                className = {
                                    `slide ${this.state.slideIndex === index ? " active" : ""}`
                                }
                            >
                                <img className="image" src={image.src} alt={image.alt} />
                            </div>
                        )
                        }) 
                    }

                    {/* Button prev va next */}
                    <span className="prev" onClick={this.backward}>❮</span>
                    <span className="next" onClick={this.forward}>❯</span>

                    {/* Cac dot chuyen anh */}
                    <div className="dot-container">
                        {
                            this.props.input.map((_, index) => {
                            return (
                                <span
                                key={index}
                                className={
                                    `dot ${this.state.slideIndex === index ? "active" : ""}`
                                }
                                onClick={() => this.setSlideIndex(index)}
                                >
                                </span>
                            )
                            })
                        }
                    </div>
                </div>

            </div>
        );
    }
}
export default SlideShow;