import React, { Component } from 'react';
import Top from '../dumb/topSection/Top';
import Bottom from '../dumb/bottomSection/Bottom';

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

    handleClick(event) {
        event.preventDefault()
        const currentItem = {...this.state.currentItem}

        if (currentItem.description && currentItem.value) {
            this.setState(prev => {
                if (currentItem.type === "inc") {
                    currentItem.id = Math.random();
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
                    currentItem.id = Math.random();
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
                <Top />
                <Bottom 
                    data={this.state} 
                    handleChange={this.handleChange} 
                    handleClick={this.handleClick}
                />
            </div>
        )
    }
}

export default Monthly;