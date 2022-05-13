import React from 'react'

class FatDog extends React.Component {

    constructor () {
        super();
        this.state = {fontSize: true};
    }

    click = () => {
        console.log('Paspaudimas ivyko');
        this.setState(f => (f.font === 20 ? {font: 40} : {font:20}))
        //console.log(this)
    }
    render(){
        return(
            <>
            <h3 style={{color: this.props.color, fontSize: this.state.font  + 'px'}}>Fat Dog</h3>
            <button onClick={this.click.bind(this)}>Click Dog</button>
            </>
        )
    }

}

export default FatDog;