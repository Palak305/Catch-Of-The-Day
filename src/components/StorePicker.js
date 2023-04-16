import React from "react";
// import { Return } from "stylus/lib/nodes";
import {getFunName} from '../helpers';
import { tonavigate } from "./tonavigate";
import PropTypes from "prop-types";


function handleclick()
{
  return 'hiiiiiiiiiiii';
}

class StorePicker extends React.Component
{

  static propTypes = {
    history: PropTypes.object
  };

  
  myInput=React.createRef();
  gotostore=(event)=>
  {
  //1. stop form from submitting

    event.preventDefault(); //to stop the defaulvt action of form from refreshing
  console.log(this.myInput.current.value);
  const storename=this.myInput.current.value;
  //3.change page to /store/whater
  
  const {navigate}=this.props; // navigate was added as a prop to this component by tonavigate method, hence we can use this to move to our specific url
  // console.log(this.props);
  navigate(`/store/${storename}`);

  }
  render()
   {
    return(
    
      <form className="store-selector" onSubmit={this.gotostore}>
      {/*always put comments inside of the element tag*/}
        <h2>Please enter the store</h2>
        <input type="text"
        ref={this.myInput} 
        required placeholder="Store Name" defaultValue={getFunName()} ></input>
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default tonavigate(StorePicker); // to add the navigation propertery to this function