import React, { Component } from "react";

class newBookForm extends Component {
  render() {
    return (
      <div>
        <input
          onChange={event => this.props.handleChange(event, "author")}
          placeholder="author"
        />
        <input
          onChange={event => this.props.handleChange(event, "country")}
          placeholder="country"
        />
        <input
          onChange={event => this.props.handleChange(event, "imageLink")}
          placeholder="imageLink"
        />
        <input
          onChange={event => this.props.handleChange(event, "language")}
          placeholder="language"
        />
        <input
          onChange={event => this.props.handleChange(event, "link")}
          placeholder="link"
        />
        <input
          onChange={event => this.props.handleChange(event, "pages")}
          placeholder="pages"
        />
        <input
          onChange={event => this.props.handleChange(event, "link")}
          placeholder="title"
        />
        <input
          onChange={event => this.props.handleChange(event, "year")}
          placeholder="year"
        />
        <button onClick={this.props.handleSubmit}>Add Book</button>
      </div>
    );
  }
}

export default newBookForm;
