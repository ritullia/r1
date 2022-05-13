import React from 'react'

class FatCat extends React.Component {

    constructor () {
        super();
        this.state = {
            weight: 5,
            color: 'blue'}; //pradinis state
        //this.paspaudimas = this.papsaudimas.bind(this) //old school naudojami
    }

    paspaudimas = () => { // geriausia naudoti tokia arrow funkcija
        console.log("Paspaudei mygtuka")
        // this.setState({weight: 6}); // su setState keitimas
        this.setState(s => ({weight: s.weight + 1})); // su setState keitimas
        //console.log(this)
    }

    makeRed = () => {
        console.log("Click")
        this.setState({color: 'red' })
    }

    render(){
        return(
            <>
            <h2 style = {{color: this.state.color}}>Fat Cat {this.props.color} {this.state.weight} kg</h2>
            <button onClick={this.paspaudimas}>Click Cat</button>
            <button onClick={this.makeRed}>Click Red Cat</button>
            </>
        )
    }

}

export default FatCat