import React, { Component } from "react";
import "./App.css";
import axios from "axios";

import Book from "./Book.js";
import NewBook from "./newBookForm.js";

const BASE_URL = "http://localhost:3005";

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      title: "",
      author: "",
      year: 1900,
      language: "",
      country: "",
      pages: 0,
      link: ""
    };
  }

  componentDidMount() {
    axios.get(`${BASE_URL}/books`).then(response => {
      console.log("response", response);
      this.setState({ books: response.data });
    });
  }

  handleChange = (event, key) => {
    // console.log(this.state);
    this.setState({
      [key]: event.target.value
    });
  };

  handleSubmit = () => {
    axios
      .post(BASE_URL + "/add-book", {
        title: this.state.title,
        author: this.state.author,
        year: this.state.year,
        language: this.state.language,
        country: this.state.country,
        pages: this.state.pages,
        link: this.state.link
      })
      .then(response => {
        this.setState({ books: response.data });
      });
  };

  render() {
    return (
      <div className="App">
        <NewBook
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        {this.state.books.map(book => {
          return (
            <div key={book.title + book.author}>
              <Book book={book} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
