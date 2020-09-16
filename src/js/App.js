import React, { Component } from 'react';
import Bottom from './components/Bottom';
import Top from './components/Top';

class App extends Component {
    constructor() {
        super()
        this.state = {}
        
    }
    render() {
        return(
            <div>
                <Top data={this.state}/>
                <Bottom data={this.state}/>
            </div>
        )   
    }
}

export default App;