import React, { Component } from 'react';
import Top from '../dumb/topSection/Top';
import Bottom from '../dumb/bottomSection/Bottom';

//create the class component for the Monthly page
class Monthly extends Component {
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
                exp: []
            },
            totals: {
                inc: 0,
                exp: 0
            },
            completed: false
        }
        //bind the methods' lexical this' to the component(at least until i can figure out how to do it with my arrow functions)
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.calculateTotal = this.calculateTotal.bind(this)
        this.editBudget = this.editBudget.bind(this)
        this.completeBudget =this.completeBudget.bind(this)
    }
    editBudget() {
        console.log("edit button working")
    }
    completeBudget() {
        console.log('complete button working')
    }

    //check if the component is mounted/rendered on the DOM then gets the state from the App component and the Date and render to the DOM
    componentDidMount() {
        //get the Date from an array of months and using the getFullyear to get the year
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        const month = months[new Date().getMonth()]
        const year = new Date().getFullYear()

        //create a more understandable version of the Date
        const date = `${month} ${year}`

        //set the state using the state gotten from the app component then set the date so it can be rendered on the DOM
        this.setState(this.props.pageState)
        this.setState({ period: date })
    }

    //a simple method for calculating percentages
    calculatePercentage(exp, total) {
        //check that there is actually a total income or any income at all
        if (total === 0) {
            return -1
        } else {
            return exp / total * 100
        }
    }

    //this method calculates the total income, expense and budget and sets it to state
    calculateTotal() {
        //calculate the total incomes and expenses using the reduce method
        const incomes = this.state.allItems.inc.reduce((acc, item) => acc += parseFloat(item.value), 0)
        const expenses = this.state.allItems.exp.reduce((acc, item) => acc += parseFloat(item.value), 0)

        //calculate percentages using our own calculatePercentages method
        const percentage = this.calculatePercentage(expenses, incomes)

        //calculate the budget
        const budget = incomes - expenses;
        //set the budget, percentage, total income and total expense to state
        this.setState({budget: budget,percentage: percentage, totals: { inc: incomes, exp: expenses}})
    }

    //this method handles deleting an item from the incomes or expense list
    handleDelete(id) {
        //create new arrays without the deleted item using its id and the filter method
        const incomes = this.state.allItems.inc.filter(el => el.id !== id)
        const expenses = this.state.allItems.exp.filter(el => el.id !== id)

        //set the items to the allItems object and their respective arrays after which point i again calculate the total using the callback function provided with setState
        this.setState({
            allItems: {
                inc: incomes,
                exp: expenses
            }
        },this.calculateTotal)
    }

    //this should be called handleAddItem, it adds an item from the add item container
    handleClick(event) {
        //prevent  submission and reload
        event.preventDefault()
        //get the current item and set it to a variable
        const currentItem = this.state.currentItem
        //get the all items object
        const allItems = this.state.allItems
        //create a new array containing all the elements of the old array , then tag on the new current item on at the end
        const incomes = [...allItems.inc, currentItem]
        const expenses = [...allItems.exp, currentItem]

        //check to see that the inputs aren't empty
        if (currentItem.description && currentItem.value) {
            //give it a random id(to be done with the uniqid dependency later)
            currentItem.id = Math.random();
            //check to see the type of the item then set them to state and calculate the totals immediately after in the callback
            currentItem.type === "inc" ? 
             this.setState({
                allItems: {
                    ...allItems,
                    inc: incomes
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
                    exp: expenses
                },
                currentItem: {
                    type: currentItem.type,
                    description: "",
                    value: ""
                }
            }, this.calculateTotal)
        }
    }
    //this method handles changes in the add item container
    handleChange(event) {
        //destructure to get the name of the current input box and it's value
        const { name, value } = event.target;
        //select the current item object
        const currentItem = { ...this.state.currentItem }
        //set the current item to state by selecting whatever field is being used and adding it's value to state
        this.setState({ currentItem: { ...currentItem, [name]: value } })
    }

    render() {
        return (
            //render the top and bottom components to the DOM
            <div>
                <Top data={this.state} />
                <Bottom
                    data={this.state}
                    handleChange={this.handleChange}
                    handleClick={this.handleClick}
                    handleDelete={this.handleDelete}
                    changePage={this.props.changePage}
                    currentPage={this.props.currentPage}
                    submitData={this.props.submitData}
                />
            </div>
        )
    }
}

export default Monthly;