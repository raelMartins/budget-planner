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
                daily: {period: "",budget: 0,percentage: -1,currentItem: {type: "inc",description: "",value: ""},allItems: {inc: [],exp: []},totals: {inc: 0,exp: 0}},
                monthly:{period: "",budget: 0,percentage: -1,currentItem: {type: "inc",description: "",value: ""},allItems: {inc: [],exp: []},totals: {inc: 0,exp: 0}},
                stats: {period: "",budget: 0,percentage: -1,currentItem: {type: "inc",description: "",value: ""},allItems: {inc: [],exp: []},totals: {inc: 0,exp: 0}}
            }
        }
        //binding the lexical this to the component (at least till i understand how to make my arrow functions work)
        this.changePage = this.changePage.bind(this)
        this.getState = this.getState.bind(this)
        this.submitData = this.submitData.bind(this)
    }
    //this method ,on clicking the submit button, adds the total budget of the page i'm on, to the state of the next page
    submitData(newItem) {
        console.log(newItem)
        //destructuring to get the current page and the pages array
        const {currentPage, pageState, pages} = this.state;


        //create a variable that contains the new page where the new item data goes
        const pageIndex = pages.indexOf(currentPage);
        const newPage = pages[pageIndex + 1];

        //create a variable to represent the object containing the income and expenses objects
        const allItems = pageState[newPage].allItems;
        

        //create two new arrays based on the previous income and expenses array except these arrays are used to check if a submission has been input for that day already,
        //delete it, then give it a new value
        const newIncArr = allItems.inc.filter(el => el.description !== newItem.description)
        const newExpArr = allItems.exp.filter(el => el.description !== newItem.description)

        //check to see if the budget was an income or an expense
        if (newItem.value < 0) {
            //set the state of the new page
            this.setState({pageState: {
                ...pageState,
                [newPage]: {
                    ...pageState[newPage],
                    allItems: {
                        inc: newIncArr,
                        exp: [...newExpArr, newItem]
                    }
                }
            }})
        }else if(newItem.value === 0){
            alert("There is no value to be added")
        }else {
            this.setState({pageState: {
                ...pageState,
                [newPage]: {
                    ...pageState[newPage],
                    allItems: {
                        ...allItems,
                        inc: [...newIncArr, newItem],
                        exp: newExpArr
                    }
                }
            }})
        }
        
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
                    submitData={this.submitData}
                />
            </div>
        )   
    }
}

export default App;