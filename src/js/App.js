import React, { Component } from 'react';
import Monthly from './components/smart/Monthly';

class App extends Component {
    constructor() {
        super()
        this.state = {}
        
    }
    render() {
        return(
            <div>
                <Monthly />
            </div>
        )   
    }
}

export default App;