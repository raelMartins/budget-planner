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
            }
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
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

                <MainContent />
            </div>
        )
    }
}

export default Monthly;