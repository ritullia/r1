function Rainbow(props){


         return(
        <div>Sąrašas

        {

        props.colors.map((c, i) => <div className='colors' key={i} style={
            {
                backgroundColor: c.color,
                height: c.size
            }
    }></div>)

        }


        </div>
    )



}

export default Rainbow;