import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import { Link } from 'react-router-dom'

class SearchBook extends Component {
	state = {
		query: '',
		searchResults: []
	}

	updateQuery = (query) => {
		this.setState({ query })
		this.searchBooks(query)
	}

	searchBooks = (query) => {
		if(query){
			BooksAPI.search(query).then((searchResults) => {
				if (searchResults.error) {
					this.setState({ searchResults: []})
					}
				else {
					this.setState({ searchResults })
					}
			})
			
		}

		else {
			this.setState({ searchResults: []})
		}
	}

	render(){
		
		return(

			<div className="search-books">
            <div className="search-books-bar">
              <Link 
              to="/"
              className="close-search">
              Close</Link>
              <div className="search-books-input-wrapper">
                
                <input 
                	type="text" 
                	placeholder="Search by title or author"
                	value={this.state.query}
                	onChange={(event) => this.updateQuery(event.target.value)}
                	/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              	{this.state.searchResults.map(searchResult => {
              		let shelf = 'none'
              		this.props.books.map(book => 
              			book.id === searchResult.id ?
              			shelf = book.shelf:'none'
              				
              			)
              		return(
              			<li key={searchResult.id}>
              			<Book 
              				book={ searchResult }
              				updateShelf={ this.props.updateShelf }
              				currentShelf={shelf}
              			/>
              		</li>
              			)
              	}
              		
              		)}
              </ol>
            </div>
          </div>

			)
	}
}

export default SearchBook
