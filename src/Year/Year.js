import React from 'react'
import Month from '../Month/Month'
import classes from './Year.module.scss'

const Year = (props) => {
    let months = [];
    for(let i=1; i<13; i++){
        months.push(
            <Month key={i} month={i} year={props.year} />
        )
    }
    return(
        <div className={classes.yearContainer}>
            {months}
        </div>
    )
}

export default Year