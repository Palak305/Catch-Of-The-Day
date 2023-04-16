import React from 'react';
import Header from './header';
import Inventory from './inventory';
import Order from './order';
import samplefishes from '../sample-fishes';
import Fish from './fish';
import { object } from 'prop-types';
// import base from '../base';
import { toparams} from "./param";
class App extends React.Component
{   
    state={  //intial state, declaring in app.js so that the state can be shared to all header,inentory, orders and get updated at all places at once
        fishes:{},
        order:{},
    };
   componentDidUpdate() //to store the order in local storahe
   {
    console.log('UPDATED');
    // console.log(this.state.order);
    const {params}=this.props;
    localStorage.setItem(this.props.params.storeId,JSON.stringify(this.state.order));
     
   }
    componentDidMount()
    {    
        const {params}=this.props;
        // this.ref= base.syncState(`${this.props.params.storeId}/fishes`, {
        //     context: this,
        //     state: 'fishes'
        //  });
        const localStorageRef = localStorage.getItem(params.storeId);
        if (localStorageRef) {
          this.setState({ order: JSON.parse(localStorageRef) });
        }
        // localStorage.setItem(`${this.props.params.storeId}/fishes`,JSON.stringify(this.state.fishes));
    }
    
    addfish=(fish)=>
    {
    //    console.log("adding a fish");

    // 1.make a copy of existing state
    const fishcopy={...this.state.fishes};
    //2.add our new fish to fishes variable
    fishcopy[`fish${Date.now()}`]=fish; //creating fish1,fish2,fish3..etc based on time
    // 3.set the new fishes object to state
        this.setState(
            {  
                fishes:fishcopy
            }
        );
    }

    updateFish = (key, updatedFish) => { //to update the newly added fish in the state
        // 1. Take a copy of the current state
        const fishes = { ...this.state.fishes };
        // 2. Update that state
        fishes[key] = updatedFish;
        // 3. Set that to state
        this.setState({ fishes });
      };

      deleteFish = key => {
        // 1. take a copy of state
        const fishes = { ...this.state.fishes };
        // 2. update the state
        delete fishes[key]; //to remove from firebase as well
        // 3.  update state
        this.setState({ fishes });
      };

  loadSamples=()=>
  {
    this.setState(
        {
            fishes:samplefishes
        }
    );
  };
  
//add to  art button
 addtoorder=(key)=>
 {
   const ordercopy={...this.state.order};
   ordercopy[key]=ordercopy[key]+1||1;// ifvthe item exists update it to +1 or add that item

   this.setState(
    {
        order:ordercopy
    }
   );
 }
 //to access the addfishform for fish object we need to go two level deep, thus add this addfish as a prop to inverntory and then to addfishform to access the firsh object

 removeFromOrder = key => {
    // 1. take a copy of state
    const order = { ...this.state.order };
    // 2. remove that itemf from order
    delete order[key];
    // 3. Call setState to update our state object
    this.setState({ order });
  };
    render()
        {
            return(
                <div className='catch-of-the-day'>
                <div className='menu'>
                    <Header tagline="Fresh Sea Food"/>
                    <ul className='fishes'>
                     {Object.keys(this.state.fishes).map(key=><Fish key={key} details={this.state.fishes[key]} 
                     index={key}
                      addtoorder={this.addtoorder}></Fish>)} 
                     {/* //to loop over all the fishes */}
                    </ul>
                </div>
                <Order {...this.state} 
                     removeFromOrder={this.removeFromOrder}
                />

                <Inventory addfish={this.addfish}  updateFish={this.updateFish} loadSamples={this.loadSamples} deleteFish={this.deleteFish} fishes={this.state.fishes}/> 
                {/* //ading prop to access addfishform in app.js */}

                </div>
            );
        }
    
}

export default toparams(App); 