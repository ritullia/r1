import RainbowColor from "./RainbowColor";

function Rainbow(props){


         return(
                    <div>
                        
                        {
                        
                            props.colors.filter(c => c.pos === 'top').map((c, i) => <RainbowColor key={i} color={c}></RainbowColor>)
                        
                        }
  
                        <RainbowColor color={{ color: 'black', size: 20 }}></RainbowColor>

                        {
                            props.colors.filter(c => c.pos === 'bottom').map((c, i) => <RainbowColor key={i} color={c}></RainbowColor>)
                        }

                    </div>
                )



}

export default Rainbow;