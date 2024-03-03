import React, { Component } from 'react'
import './navbar.css';


export default class NewsItem extends Component {
    render() {
        return (
            <div>
                <div className="card mycard" style={{ height: "65vh" }}>
                    <img src={this.props.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}...</h5>
                        
                        <p className="card-text">{this.props.description}...</p>
                        
                        
                        <a href={this.props.newsUrl} target="_blank" className="btn btn-primary onbottom">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
