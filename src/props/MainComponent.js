// import "./MainComponent.css";
// import "./Css.moduls/Style.moduls.css"
// import classNames from "classnames";
import styles from './Css.moduls/style.module.css'


// import {Component} from 'react';


//  class MainComponent extends Component {
//     render() {
//         return(
//                     <div>
//                         <h1 className="Main">
//                             MiniGreen
//                         </h1>
//                         <p>a green and tiny market for vagan people</p>
//                         <hr/>
//                     </div>
//                 )
//     }
//  }


// import { useState } from "react";

import ChildA from "./Components/childA";


const MainComponent = () => {


// const[count , setCount] = useState(0)


// const increaseCount = () => {
// setCount(count+1)
// }

//  const decreaseCount = () => {
//     setCount(count-1)
//  }

//  const refresh = () => {
//     setCount(0)
//  }

//  const random = () => {
//     setCount(Math.floor(Math.random()*100));
//  }

        return(
            <div className={ styles.Margin}>
                <h1 className="Main">
                    COUNTER
                </h1>
                <p>Do Count ...</p>
                <hr/>


                
                

                <ChildA/>
            </div>
        )
    }

export default MainComponent;