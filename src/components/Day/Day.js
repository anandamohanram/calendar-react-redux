import React, { Component } from 'react'
import moment from 'moment'
import './Day.scss'
import {connect} from 'react-redux'
import Backdrop from '../Backdrop/Backdrop';

export class Day extends Component {   

    state={
        showPopup:false,
        X:'100px',
        Y:'100px'
    }

    clickHandler = e => {
        let setY = e.clientY;  
        let setX = e.clientX;     
        if(e.clientY+220 >= window.innerHeight)
        {
            setY = e.clientY-220;
        }
        if(e.clientX+180 >= window.innerWidth)
        {
            setX = e.clientX-180;
        }

    e.persist();
        this.setState({
            showPopup:true,
            X:setX+'px',
            Y:setY+'px'
        });
    }

    closeBackdrop = e => {
        this.setState({showPopup:false});
    }

    tagClicked = e => {
        alert("clicked" + e.target.name)
    }

  render() {
      let tag = ""
      let dayTag = 'dayBoxes';
      if(this.props[this.props.year] && this.props[this.props.year][this.props.month] && this.props[this.props.year][this.props.month][this.props.day])
      {
        tag = this.props[this.props.year][this.props.month][this.props.day]
        dayTag += " " + tag;
      }
      else
        dayTag += ''

        //Mark Today
      let today=moment().format("DD MMMM YYYY");
      let date = moment(`${this.props.day}-${this.props.month}-${this.props.year}`,"DD-MM-YYYY").format("DD MMMM YYYY");
        dayTag += (today === date ? " today" : "")

        //Show Popup
      let display;  
        if(this.state.showPopup){
            display = <React.Fragment>
                        <div onClick={this.clickHandler} className = {dayTag}>
                            {this.props.day}
                        </div>
                        <Backdrop clicked={this.closeBackdrop} tagClicked={this.tagClicked} X={this.state.X} Y={this.state.Y} date={date} tag={tag}/>
                      </React.Fragment>  
        }
        else{
            display = <div onClick={this.clickHandler} className = {dayTag}>
                        {this.props.day}            
                      </div>
        }
    return display;
  }
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps)(Day);