function Tree (props){
    // conditional component
    if(props.size>5){
        return <h4 style={{color:'red'}}>{props.size}</h4>
    }
    if(props.size>2){
        return <h4 style={{color:'green'}}>{props.size}</h4>
    }
    return null;
}

export default Tree;