import React, { Component } from 'react';
import ShowPage from './components/dumb/ShowPage';
import Monthly from './components/smart/Monthly';

class App extends Component {
    constructor() {
        super()
        this.state = {
            currentPage: "monthly",
            pages: ["daily", "monthly", "stats"]
        }
        this.changePage = this.changePage.bind(this)
    }
    changePage(event) {

        const {currentPage, pages} = this.state

        const pageIndex = pages.indexOf(currentPage);

        const newPage = event.target.id === "next" ? pages[pageIndex + 1] : pages[pageIndex - 1];
        console.log(newPage)

        this.setState({currentPage: newPage})
    }
    render() {
        return(
            <div>
                <ShowPage 
                    currentPage={this.state.currentPage} 
                    changePage={this.changePage}
                />
            </div>
        )   
    }
}

export default App;