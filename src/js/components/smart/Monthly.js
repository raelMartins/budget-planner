import React, { Component } from 'react';
import Top from '../dumb/topSection/Top';
import Bottom from '../dumb/bottomSection/Bottom';

class Monthly extends Component {
    constructor() {
        super()
        this.state = {
            month: "",
            budget: 0,
            percentage: -1,
            currentItem: {
                type: "inc",
                description: "",
                value: ""
            },
            allMonthlyItems: {
                inc: [],
                exp: []
            },
            totals: {
                inc: 0,
                exp: 0
            }
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.calculateTotal = this.calculateTotal.bind(this)
    }

    componentDidMount() {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        const month = months[new Date().getMonth()]

        this.setState({ month: month })
    }

    calculatePercentage(exp, total) {
        if (total === 0) {
            return -1
        } else {
            return exp / total * 100
        }
    }

    calculateTotal() {
        const incomes = this.state.allMonthlyItems.inc.reduce((acc, item) => acc += parseInt(item.value), 0)
        const expenses = this.state.allMonthlyItems.exp.reduce((acc, item) => acc += parseInt(item.value), 0)
        const total = incomes + expenses;

        const percentage = this.calculatePercentage(expenses, total)

        const budget = incomes - expenses;
        this.setState({budget: budget,percentage: percentage, totals: { inc: incomes, exp: expenses}})
    }

    handleDelete(id) {
        let incomes = this.state.allMonthlyItems.inc.filter(el => el.id !== id)
        let expenses = this.state.allMonthlyItems.exp.filter(el => el.id !== id)

        this.setState({
            allMonthlyItems: {
                inc: incomes,
                exp: expenses
            }
        },this.calculateTotal)
    }

    handleClick(event) {
        //prevent  submission and reload
        event.preventDefault()
        //get the current item and set it to a variable
        const currentItem = this.state.currentItem
        //get the all items object
        const allItems = this.state.allMonthlyItems
        const incomes = [...allItems.inc, currentItem]
        const expenses = [...allItems.exp, currentItem]

        //check to see that the inputs aren't empty
        if (currentItem.description && currentItem.value) {
            //give it a random id
            currentItem.id = Math.random();
            //check to see the type of the item
            currentItem.type === "inc" ? 
             this.setState({
                allMonthlyItems: {
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
                allMonthlyItems: {
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
        console.log(this.state)
    }



    handleChange(event) {
        const { name, value } = event.target;
        const currentItem = { ...this.state.currentItem }
        this.setState({ currentItem: { ...currentItem, [name]: value } })
    }

    render() {
        return (
            <div>
                <Top data={this.state} />
                <Bottom
                    data={this.state}
                    handleChange={this.handleChange}
                    handleClick={this.handleClick}
                    handleDelete={this.handleDelete}
                />
            </div>
        )
    }
}

export default Monthly;