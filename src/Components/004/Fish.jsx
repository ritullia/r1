import React from 'react'


class Fish extends React.Component {

    constructor () {
        super();
        console.log(this.props.number)
    }

    componentDidMount(){
        console.log('Born:'+ this.props.number )
    }
   
    componentWillUnmount()
{
    console.log('Dead:'+ this.props.number )
}

    render(){
        
        return <div className = 'square'>{this.props.number}</div>

    }
  
    
    
}


export default Fish;