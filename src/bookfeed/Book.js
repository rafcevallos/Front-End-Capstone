import React, { Component } from 'react';
//import './Book.css';

export default class Book extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            selected: false
        }
    }

    handleClick() {
        if (this.props.onSelect) {
            this.props.onSelect(this.props.key)
        }
        this.setState({
            selected: !this.state.selected
        })
    }

    render() {
        const bookData = this.props.comic;
        const { thumbnail, isbn, pageCount, date, prices, description } = bookData;
        return (
            <div className={`comic ${this.state.selected ? "selected" : ""}`} onClick={this.handleClick}>
                <div className="comic-thumbnail-container">
                    <img className="comic-thumbnail" src={`${thumbnail.path}.${thumbnail.extension}`} />
                </div>
                <div className="comic-data-container">
                    <h3>{bookData.title}</h3>
                    <p>ISBN: {isbn}</p>
                    <p>Pages: {pageCount}</p>
                    <p>Date: {date}</p>
                    <p>Price: ${prices[0].price}</p>
                    <p>Description: {description}</p>
                </div>
            </div>
        )
    }
}

<Grid>
    <Row>
        <Col xs={7} md={4}>
            <div className="comic-thumbnail-container">
                <img className="comic-thumbnail" src={`${thumbnail.path}.${thumbnail.extension}`} />
            </div>
            <h3>{bookData.title}l</h3>
            <p>ISBN: {isbn}</p>
            <p>Pages: {pageCount}</p>
            <p>Date: {date}</p>
            <p>Price: ${prices[0].price}</p>
            <p>Description: {description}</p>
            <p>
                <Button bsStyle="primary">Add to Collection</Button>
                <Button bsStyle="warning">Add to Wishlist</Button>
            </p>
        </Col>
        <Col xs={7} md={4}>
            <div className="comic-thumbnail-container">
                <img className="comic-thumbnail" src={`${thumbnail.path}.${thumbnail.extension}`} />
            </div>
            <h3>{bookData.title}l</h3>
            <p>ISBN: {isbn}</p>
            <p>Pages: {pageCount}</p>
            <p>Date: {date}</p>
            <p>Price: ${prices[0].price}</p>
            <p>Description: {description}</p>
            <p>
                <Button bsStyle="primary">Add to Collection</Button>
                <Button bsStyle="warning">Add to Wishlist</Button>
            </p>
        </Col>
        <Col xs={7} md={4}>
            <div className="comic-thumbnail-container">
                <img className="comic-thumbnail" src={`${thumbnail.path}.${thumbnail.extension}`} />
            </div>
            <h3>{bookData.title}l</h3>
            <p>ISBN: {isbn}</p>
            <p>Pages: {pageCount}</p>
            <p>Date: {date}</p>
            <p>Price: ${prices[0].price}</p>
            <p>Description: {description}</p>
            <p>
                <Button bsStyle="primary">Add to Collection</Button>
                <Button bsStyle="warning">Add to Wishlist</Button>
            </p>
        </Col>
    </Row>
</Grid >