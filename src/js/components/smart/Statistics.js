import React, { Component } from 'react';
import PageButtons from '../dumb/bottomSection/PageButtons';

//create the statistics class component
class Statistics extends Component {
    constructor() {
        super()
        //initialize state
        this.state = {}
    }
    render() {
        return(
            //render stats content to the DOM
            <div>
                This is the statistics page
                <PageButtons currentPage={this.props.currentPage} changePage={this.props.changePage}/>
            </div>
        )
    }
}

export default Statistics;