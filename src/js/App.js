import React, { Component } from 'react';
import ShowPage from './components/dumb/ShowPage';
//create the app class component
class App extends Component {
    constructor() {
        super()
        //initialize state
        this.state = {
            currentPage: "daily",
            pages: ["daily", "monthly", "stats"],
            pageState: {
                daily: {},
                monthly: {},
                stats: {}
            }
        }
        //binding the lexical this to the component (at least till i understand how to make my arrow functions work)
        this.changePage = this.changePage.bind(this)
        this.getState = this.getState.bind(this)
    }
    //get the state from the page currently being used and store it into the state of the App component
    getState(obj) {
        this.setState({pageState: {
            ...this.state.pageState,
            [this.state.currentPage]: obj
        }})
    }
    //Change the page i'm on
    changePage(event, state) {

        //calling the getstate function
        this.getState(state)

        //destructuring to get current page and pages array from state
        const {currentPage, pages} = this.state

        //get the new page and set it to current page in the state
        const pageIndex = pages.indexOf(currentPage);
        const newPage = event.target.id === "next" ? pages[pageIndex + 1] : pages[pageIndex - 1];
        this.setState({currentPage: newPage})
    }
    render() {
        return(
            //render the pages to DOM
            <div>
                <ShowPage 
                    currentPage={this.state.currentPage} 
                    changePage={this.changePage}
                    pageState={this.state.pageState} 
                />
            </div>
        )   
    }
}

export default App;