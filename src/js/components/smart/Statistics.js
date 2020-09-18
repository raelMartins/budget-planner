import React, { Component } from 'react';
import PageButtons from '../dumb/bottomSection/PageButtons';

class Statistics extends Component {
    render() {
        return(
            <div>
                This is the statistics page
                <PageButtons currentPage={this.props.currentPage} changePage={this.props.changePage}/>
            </div>
        )
    }
}

export default Statistics;