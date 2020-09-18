import React, { Component } from 'react';
import ShowPage from './components/dumb/ShowPage';

class App extends Component {
    constructor() {
        super()
        this.state = {
            currentPage: "daily",
            pages: ["daily", "monthly", "stats"],
            pageState: {
                daily: {},
                monthly: {},
                stats: {}
            }
        }
        this.changePage = this.changePage.bind(this)
        this.getState = this.getState.bind(this)
    }
    getState(obj, curpage) {
        this.setState({pageState: {
            ...this.state.pageState,
            [this.state.currentPage]: obj
        }})
    }
    changePage(event, state) {

        this.getState(state, currentPage)

        const {currentPage, pages} = this.state

        const pageIndex = pages.indexOf(currentPage);

        const newPage = event.target.id === "next" ? pages[pageIndex + 1] : pages[pageIndex - 1];

        this.setState({currentPage: newPage})
    }
    render() {
        return(
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