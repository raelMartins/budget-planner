import React, { Component } from 'react';
import StatsBottom from '../dumb/bottomSection/Stats/StatsBottom';
import StatsTop from '../dumb/topSection/Stats/StatsTop';

//create the statistics class component
class Statistics extends Component {
    constructor() {
        super()
        //initialize state
        this.state = {}
    }
    componentDidMount() {
        const year = new Date().getFullYear()
        this.setState(this.props.pageState)
        this.setState({period: year})
    }
    render() {
        return(
            //render stats content to the DOM
            <div>
                <StatsTop />
                <StatsBottom  currentPage={this.props.currentPage} changePage={this.props.changePage}/>
            </div>
        )
    }
}

export default Statistics;