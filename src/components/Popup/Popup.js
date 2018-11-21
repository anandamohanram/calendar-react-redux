import React  from 'react';
import classes from './Popup.module.scss'

const Popup = (props) => {
    const style = {        
                    'left':`${props.X}`,
                    'top':`${props.Y}`
                }
    return(
        <div className={classes.popup} style={style}>
        <h4>{props.date}</h4>
        <h5>{props.tag}</h5>
        <button name='' onClick={props.tagClicked}>Clear</button>
        <button name='Holiday' onClick={props.tagClicked}>Holiday</button>
        <button name='Birthday' onClick={props.tagClicked}>Birthday</button>
        <button name='Busy' onClick={props.tagClicked}>Busy</button>
        <button name='Anniversary' onClick={props.tagClicked}>Anniversary</button>        
        </div>
    );
}

export default Popup;