import React, { Component } from 'react';
import PageButtons from '../dumb/bottomSection/PageButtons';

class Daily extends Component {
    render() {
        return(
            <div>
                This is the Daily budget page
                <PageButtons currentPage={this.props.currentPage} changePage={this.props.changePage}/>
            </div>
        )
    }
}
export default Daily;