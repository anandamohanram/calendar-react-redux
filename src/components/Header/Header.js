import React from 'react'
import classes from './Header.module.scss'

const Header = (props) => {
    return(
        <div className={classes.header}>
            <div className={classes.left}>
            <table>
                <tbody>
                    <tr>
                        <td className={classes.holiday}>
                        </td>
                        <td>Holiday</td>
                        <td className={classes.busy}>
                        </td>
                        <td>Busy</td>
                        <td className={classes.birthday}>
                        </td>
                        <td>Birthday</td>
                        <td className={classes.anniversary}>
                        </td>
                        <td>Anniversary</td>
                    </tr>
                </tbody>
            </table>
            </div>
            <div className={classes.title}>
            {props.year}
            </div>
            <div className={classes.right}>
            <button onClick={props.prev}> &lt; </button>
            <button onClick={props.today}>{props.yearNow}</button>
            <button onClick={props.next}> &gt; </button>
            </div>
        </div>
    );
} 
export default Header;