import React from "react";
import {formatPrice} from '../helpers';
import PropTypes from "prop-types";
class Fish extends React.Component
{   

    static propTypes = {
        details: PropTypes.shape({
          image: PropTypes.string,
          name: PropTypes.string,
          desc: PropTypes.string,
          status: PropTypes.string,
          price: PropTypes.number
        }),
        addToOrder: PropTypes.func,
        index: PropTypes.string
      };
    handleclick=()=>
    {
        this.props.addtoorder(this.props.index);
    }
    
    render()
   
     {
        const isavailable=this.props.details.status==="available";
        return(
           <li className="menu-fish">
            <img src={this.props.details.image} alt={this.props.details.name}></img>
         <h3 className="fishname">
          {this.props.details.name}
          <span className="price">{formatPrice(this.props.details.price)}</span>
          <p>{this.props.details.desc}</p>
          <button disabled={!isavailable} onClick={this.handleclick}>{isavailable? 'Add to Cart':'SOLD OUT'}</button>
         </h3>

           </li>
        )
    } 
}

export default Fish;