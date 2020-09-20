import React, { Component } from 'react';
import Bottom from '../dumb/bottomSection/Bottom';
import Top from '../dumb/topSection/Top';

//create the class component for the Daily page
class Daily extends Component {
    constructor() {
        super()
        //initialize the state
        this.state = {
            period: "",
            budget: 0,
            percentage: -1,
            currentItem: {
                type: "inc",
                description: "",
                value: ""
            },
            allItems: {
                inc: [],
                exp: [],
                all: []
            },
            totals: {
                inc: 0,
                exp: 0
            },
            completed: false
        }
        //bind the methods to create a lexical this that points to the component(until i can enable it with arrow functions)
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.calculateTotal = this.calculateTotal.bind(this)
        this.editBudget = this.editBudget.bind(this)
        this.completeBudget =this.completeBudget.bind(this)
    }
    editBudget() {
        this.setState({completed: false})
    }
    completeBudget() {
        const itemType = this.state.budget < 0 ? "exp" : "inc";
        const newItem = {
            id: Math.random(),
            description: this.state.period.toUpperCase(),
            value: Math.abs(this.state.budget),
            type: itemType,
            incomes: this.state.totals.inc,
            expenses: this.state.totals.exp,
            details: this.state.allItems.all
        }
        //check to see that there is a budget beore adding to next page
        if(newItem.value === 0){
            return null
        }else {
            this.props.submitData(newItem)
            this.setState({completed: true})
        }
    }
    //Once the component has been rendered to the page, it displays the period (day/month), while also retrieving the state from the App component and setting it as the new state
    componentDidMount() {
        //get day from the array of days
        const days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        const day = days[new Date().getDay()]
        //get month from the array of months
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        const month = months[new Date().getMonth()]
        //get day in the month using the getDate method
        const date = new Date().getDate()

        //create a variable that contains a more understandable version of the date
        const today = `${day}, ${date}th ${month}`

        //set the state by getting it from the App component
        this.setState(this.props.pageState, this.calculateTotal())
        
        //set the date in the state
        this.setState({ period: today })
    }
    //this method is used to calculate percentages, pretty basic
    calculatePercentage(exp, total) {
        //check that there is actually an income total
        if (total === 0) {
            return -1
        } else {
            return exp / total * 100
        }
    }

    //this method calculates the total incomes, expenses, and budget, and saves them to state
    calculateTotal() {
        //calculate total income and expenses using the reduce method
        const incomes = this.state.allItems.inc.reduce((acc, item) => acc += parseFloat(item.value), 0)
        const expenses = this.state.allItems.exp.reduce((acc, item) => acc += parseFloat(item.value), 0)

        //calculate the percentage with our created calc percentage method
        const percentage = this.calculatePercentage(expenses, incomes)

        //calculate the budget
        const budget = incomes - expenses;
        //set our state to take in the new budget, percentage, and total incomes and expenses
        this.setState({budget: budget,percentage: percentage, totals: { inc: incomes, exp: expenses}})
    }

    //this method handles deleting items from our UI and state simultaneously
    handleDelete(id) {
        //create new incomes and expenses arrays without the item which is being deleted by using it's id with the filter method, thereby deleting it
        const incomes = this.state.allItems.inc.filter(el => el.id !== id)
        const expenses = this.state.allItems.exp.filter(el => el.id !== id)
        const allBudget = this.state.allItems.all.filter(el => el.id !== id)

        //set the state to include our new incomes and expenses arrays, after which we calculate our totals again, usig setStates callback function parameter
        this.setState({
            allItems: {
                inc: incomes,
                exp: expenses,
                all: allBudget
            }
        },this.calculateTotal)
    }

    //should have named it handleAddItem for more clarity. It adds an item to our UI and state simultaneously
    handleClick(event) {
        //prevent  submission and reload
        event.preventDefault()
        //get the current item and set it to a variable
        const currentItem = this.state.currentItem
        //get the all items object
        const allItems = this.state.allItems
        //create a new array with the old array, then at the end of the array tack on the new current item
        const incomes = [...allItems.inc, currentItem]
        const expenses = [...allItems.exp, currentItem]
        const allBudget = [...allItems.all, currentItem]

        //check to see that the inputs aren't empty
        if (currentItem.description && currentItem.value) {
            //give it a random id(to be done with the uniqid dependency later)
            currentItem.id = Math.random();
            currentItem.incomes = 0;
            currentItem.expenses = 0;
            currentItem.details = []
            //check to see the type of the item then set them to state and calculate the totals immediately after in the callback
            currentItem.type === "inc" ? 
             this.setState({
                allItems: {
                    ...allItems,
                    inc: incomes,
                    all: allBudget
                },
                currentItem: {
                    type: currentItem.type,
                    description: "",
                    value: ""
                }
            }, this.calculateTotal)
            :
            this.setState({
                allItems: {
                    ...allItems,
                    exp: expenses,
                    all: allBudget
                },
                currentItem: {
                    type: currentItem.type,
                    description: "",
                    value: ""
                }
            }, this.calculateTotal)
        }
    }
    //this method handles changes in the add item input boxes
    handleChange(event) {
        //destructuring to get the name of the input box and it's value
        const { name, value } = event.target;
        //it selects the current item from the state and updates whatever section is selected in the state
        const currentItem = { ...this.state.currentItem }
        this.setState({ currentItem: { ...currentItem, [name]: value } })
    }

    render() {
        return(
            //renders the page to the DOM
            <div>
                <Top data={this.state}/>
                <Bottom 
                    data={this.state}
                    handleChange={this.handleChange}
                    handleClick={this.handleClick}
                    handleDelete={this.handleDelete}
                    changePage={this.props.changePage}
                    currentPage={this.props.currentPage}
                    completeBudget={this.completeBudget}
                    editBudget={this.editBudget}
                />
            </div>
        )
    }
}
export default Daily;