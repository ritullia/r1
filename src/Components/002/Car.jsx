import CarPrice from "./CarPrice";
import ColorMark from "./ColorMark";

function Car(props){


    return (
        <>
        <h2 style={
            {
            fontSize: props.size + 'px',
            fontFamily: props.font
            }
        }>{props.maker} {props.color} <ColorMark colors={props.marks} size={props.square} ></ColorMark></h2>
        <CarPrice price={props.price}></CarPrice>
        </>
    )
}

export default Car;