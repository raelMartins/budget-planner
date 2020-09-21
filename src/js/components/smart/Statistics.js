import React, { Component } from 'react';
import StatsBottom from '../dumb/bottomSection/Stats/StatsBottom';
import StatsTop from '../dumb/topSection/Stats/StatsTop';

//create the statistics class component
class Statistics extends Component {
    constructor() {
        super()
        //initialize state
        this.state = { 
            period: "",
            budget: 0,
            allItems: {
                inc: [],
                exp: [],
                all: []
            },
            totals: {
                inc: 0,
                exp: 0
            }
        }
        this.showDetails = this.showDetails.bind(this)
    }
    componentDidMount() {
        const year = new Date().getFullYear()
        this.setState(this.props.pageState)
        this.setState({period: year})
    }
    showDetails(id) {
        const items = this.state.allItems.all.map(el => {
            el.id === id ? el.isActive = !el.isActive : el.isActive;
            return el
        })
        this.setState({allItems: {
            ...this.state.allItems,
            all: [...items]
        }})
    }
    render() {
        return(
            //render stats content to the DOM
            <div>
                <StatsTop 
                    year={this.state.period} 
                    budget={this.state.budget}
                    totals={this.state.totals}
                />
                <StatsBottom
                    data={this.state}  
                    currentPage={this.props.currentPage} 
                    changePage={this.props.changePage}
                    showDetails={this.showDetails}
                />
            </div>
        )
    }
}

export default Statistics;