import React, { createRef } from "react";
import PropTypes from "prop-types";

class AddFishForm extends React.Component
{   
    nameref=React.createRef();
    priceref=React.createRef();
    statusref=React.createRef();
    descref=React.createRef();
    imageref=React.createRef();
    static propTypes = {
        addFish: PropTypes.func
      };
    createfish=(e)=>{
      e.preventDefault();
    //    console.log(this.nameref.current.value);
    const fish={
        name: this.nameref.current.value,
        price: parseFloat(this.priceref.current.value),
        status: this.statusref.current.value,
        desc: this.descref.current.value,
        image: this.imageref.current.value,

    };
    // console.log(fish);
    this.props.addfish(fish);
    //reset the form after adding one fish
    e.currentTarget.reset();
        
    }

    
    render()
    {
        return(
            <form className="fish-edit" onSubmit={this.createfish}>
                {/* <p>Hi</p>
                 */}
                 <input name="name" type="text" placeholder="Name" ref={this.nameref}></input>
                 <input name="price" type="text" placeholder="Price" ref={this.priceref}></input>
                 <select name="status" ref={this.statusref}>
                 
                    <option value={"available"}>Fresh</option>
                    <option value={"unavailable"}>Soldout</option>

                 </select>
                 <textarea name="desc" type="text" placeholder="Provide description" ref={this.descref}></textarea>
                 <input name="image" type="text" placeholder="Image" ref={this.imageref}></input>
                 <button type="submit">+Add Fish</button>

            </form>
     
        );
    }
}

export default AddFishForm;