import React from 'react'
import Fish from './Fish'

class Lake extends React.Component {

    constructor () {
        super();
        this.state = {fish: [] }
                                
    }
    
    show = () => { 
        const fish = [...this.state.fish];
        fish.push(1)
        this.setState({fish: fish}); 
        
    }
    
    render() {
        return(
            <>
            <div className = 'lake'>
                {
                    this.state.fish.map((_, i) => <Fish key = {i} number = {i}></Fish>)
                }
               
            </div>
            <button onClick={this.show}>Click Hide Fish</button>
    
            </>
        )
    }
}




export default Lake;