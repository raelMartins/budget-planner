import React, { Component } from 'react';
import Monthly from './Monthly';

class Bottom extends Component {
    constructor(props) {
        super()
        this.state = {}
    }

    render() {
        return(
            <div className="bottom">
                <Monthly />
            </div>
        )
    }
    
}
export default Bottom;