import React from 'react'
import moment from 'moment'
import classes from './Month.module.scss'

const Month = (props) => {
    //active month and year
    let monthYear = moment(`${props.year}-${props.month}`,"YYYY-MM");

    //week day names
    let weekdayNames=['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa'];
    const weekdays = weekdayNames.map(weekdayName => <td key={weekdayName}>{weekdayName}</td>) 

    //number of days in active month
    let dayInMonths = monthYear.daysInMonth();
    //for number of blanks before printing first date
    let startDate = monthYear.startOf('month').format('d');

    //fill empty slots
    let emptySlots = [];
    for(let i=0; i<startDate; i++){
        emptySlots.push(<td key={`e${i}`}> &nbsp;</td>)
    }

    //fill date slots
    let dateSlots = [];
    for(let i = 1; i<=dayInMonths; i++){
        dateSlots.push(<td key={i}> {i} </td>);
    }

    //all slots
    let totalSlots=[...emptySlots, ...dateSlots];

    //2d array of slots
    let row=[];
    let printSlots = [];
    totalSlots.forEach((slot,i)=>{
        if(i === 0 || i % 7 !== 0){
            row.push(slot)
        }
        else{
            let pushRow = row.slice();
            printSlots.push(pushRow);
            row=[];
            row.push(slot);
        }
    //last row
        if(i === totalSlots.length-1){
            let pushRow = row.slice();
            printSlots.push(pushRow);
        }    
    })

    return(
        <div>
            <table className={classes.monthTable}>
              <tbody>
                  <tr className={classes.monthName}>
                      <th colSpan='7'>
                        {monthYear.format("MMMM")}
                      </th>
                  </tr>
                  <tr className={classes.dayNames}>
                      {weekdays}
                  </tr>
                   {printSlots.map((row,i)=>{
                          return(<tr className={classes.slots} key={i}>{row}</tr>);
                    })}

              </tbody>
          </table>
        </div>
    )
}

export default Month;