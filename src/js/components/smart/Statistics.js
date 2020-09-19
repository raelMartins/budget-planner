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
                exp: []
            },
            totals: {
                inc: 0,
                exp: 0
            }
        }
    }
    componentDidMount() {
        const year = new Date().getFullYear()
        console.log(this.state)
        this.setState(this.props.pageState)
        this.setState({period: year})
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
                />
            </div>
        )
    }
}

export default Statistics;