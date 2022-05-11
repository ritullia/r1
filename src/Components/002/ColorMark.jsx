function ColorMark(props){

    return (
        <div className= "color-mark" style={
            {
                backgroundColor: props.colors,
                width: props.size + 'px',
                height: props.size + 'px'
             }
        }></div>

    )
}

export default ColorMark;