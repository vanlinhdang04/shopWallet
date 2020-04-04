import React, { Component } from 'react';
import './Panel.css'

// component tạo bảng chữ 
class Panel extends Component {
    render() {
        return (
            <div className="panel">
                <section className="sectionPanel">
                    <div className="FeatureText">
                        <div className="FeatureText_contentWrapper">
                            <div className="FeatureText_content">
                                <header>
                                    <h3 className="fontHead SectionHeader Heading">{this.props.header}</h3>
                                    <h2 className="fontText SectionHeader Heading">{this.props.content}</h2>
                                </header>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Panel;