import react from 'react';

export default function Die(props){

    const addtnl_styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }

    return(
        <div className='die-number' style={addtnl_styles}>
            {props.number}
        </div>
    )
}