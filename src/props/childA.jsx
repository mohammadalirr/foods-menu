// import {Component} from 'react';


// class ChildA extends Component {
// render() {
//     console.log(this.props)
//     return(
//                 <div>
//                     <p>{this.props.Count}</p>
//                 </div>
//             )
//     }

// }


import { useState } from "react";




const ChildA = () => {
    const[count , setCount] = useState(0)


const increaseCount = () => {
setCount(count+1)
}

 const decreaseCount = () => {
    setCount(count-1)
 }

 const refresh = () => {
    setCount(0)
 }

 const random = () => {
    setCount(Math.floor(Math.random()*100));
 }

//  const blockDecreaseCount = () => {
    
//  }

// const Disable = ()=>{
//     document.getElementsByClassName("Buttonb").setAttribute("disabled" , "")
// }


// if(count===0){
//     // Disable()
//     document.getElementsByClassName("Buttonb").setAttribute("disabled" , "")
// }


// if(count===-1){
//     increaseCount()
// } else {}


// switch(count) {
//     case 5: Disable()
//     break;
//     case -1 : increaseCount()
//     break;

//     default:
// }




 
    return(
        <div>


            <span>{count}</span>
            <br/>
            <br/>
            
                <button className="Buttona" onClick={increaseCount}>🔺</button>
                <button className="Buttonb" onClick={decreaseCount} disabled={count===0}>🔻</button>
                <button className="Buttonc" onClick={refresh}>♻</button>
                <button className="Buttond" onClick={random}>🎲</button>

            

        </div>
    )
    
}




export default ChildA;