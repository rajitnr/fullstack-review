import React, { Component } from "react";
import "./App.css";

class Book extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="book-detail">
        <a href={this.props.book.link}>{this.props.book.title}</a>
        <img src={this.props.book.imageLink} alt="" />
        <h3>Author : {this.props.book.author}</h3>
        <h3>Language : {this.props.book.language}</h3>
        <h3>Pages : {this.props.book.pages}</h3>
        <h3>Year: {this.props.book.year}</h3>
      </div>
    );
  }
}
export default Book;
