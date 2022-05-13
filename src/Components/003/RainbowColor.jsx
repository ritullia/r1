function RainbowColor (props){

    return(
        <div>
            
            <div className='colors' style={
                {
                    backgroundColor: props.color.color,
                    height: props.color.size > 30 ? props.color.size : 30,
                     
                }}>
            
            </div>
            
        </div>
        

    )

}

export default RainbowColor