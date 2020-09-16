import React, { Component } from 'react';
import AddBudget from './AddBudget';
import MainContent from './MainContent';

class Monthly extends Component {
    constructor() {
        super()
        this.state = {
            budget: 0,
            percentage: -1,
            currentItem: {
                type:"inc",
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
            },
            budget: 0
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.calculateTotal = this.calculateTotal.bind(this)
    }

    calculateTotal() {
        // let income = 0
        // let expense = 0
        // const totalInc = this.state.allMonthlyItems.inc.forEach(el => income += parseInt(el.value))
        // const totalExp = this.state.allMonthlyItems.exp.forEach(el => expense += parseInt(el.value))

        // const newBudget = totalInc - totalExp;

        this.state.allMonthlyItems.inc.forEach(el => console.log(el))

        //this.setState({budget: newBudget, totals: {inc: totalInc, exp: totalExp}})
    }

    handleClick(event) {
        event.preventDefault()
        const currentItem = {...this.state.currentItem}

        if (currentItem.description && currentItem.value) {
            this.setState(prev => {
                if (currentItem.type === "inc") {
                    return {
                        allMonthlyItems: {
                            ...prev.allMonthlyItems,
                            inc: [...prev.allMonthlyItems.inc, currentItem]
                        },
                        currentItem: {
                            type: "inc",
                            description: "",
                            value: ""
                        }
                    }
                } else if (currentItem.type === "exp") {
                    return {
                        allMonthlyItems: {
                            ...prev.allMonthlyItems,
                            exp: [...prev.allMonthlyItems.exp, currentItem]
                        },
                        currentItem: {
                            type: "exp",
                            description: "",
                            value: ""

                        }
                    }
                }
            })
        }
        this.calculateTotal()
    }
    
    handleChange(event) {
        const {name, value} = event.target;
        const currentItem = {...this.state.currentItem}
        this.setState({currentItem: {...currentItem, [name]: value}})
    }

    render() {
        return(
            <div>
                <AddBudget
                    data={this.state} 
                    handleClick={this.handleClick} 
                    handleChange={this.handleChange} 
                />

                <MainContent data={this.state.allMonthlyItems}/>
            </div>
        )
    }
}

export default Monthly;