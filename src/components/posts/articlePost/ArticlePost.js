import React, { Component } from 'react'

export default class ArticlePost extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                {/* <img  src={this.props.imageSource} alt={this.props.title}/> */}
                <p>{this.props.content}</p>
            </div>
        )
    }
}
