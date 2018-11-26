import React  from 'react';
import classes from './Backdrop.module.scss'
import Popup from '../Popup/Popup';

const Backdrop = (props) => {
    
    return(
        <div className={classes.backdrop} onClick={props.clicked}>
            <Popup X={props.X} Y={props.Y} tagClicked={props.tagClicked} date={props.date} tag={props.tag}/>
        </div>
    );
}

export default Backdrop;