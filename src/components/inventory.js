import React from "react";
import AddFishForm from "./addfishforms";
import Editfishform from './editfishform'
import PropTypes from "prop-types";

class Inventory extends React.Component
{
    static propTypes = {
    fishes: PropTypes.object,
    updateFish: PropTypes.func,
    deleteFish: PropTypes.func,
    loadSampleFishes: PropTypes.func,
    addFish: PropTypes.func
  };
    render()
    {
        return(
            <div className="inventory">
                <h2>
                  Inventory!!
                </h2>
                <AddFishForm addfish={this.props.addfish}></AddFishForm> 
                {Object.keys(this.props.fishes).map(key => (
          <Editfishform
          key={key}
            index={key}
            fish={this.props.fishes[key]}
            updateFish={this.props.updateFish}
            deleteFish={this.props.deleteFish}></Editfishform>))}

                {/* //adding to access addfishform in invemtory.js */}
                {/* here we use this.prop because this is a prop of inventory */}
                <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
            </div>
        )       
    }
}

export default Inventory;