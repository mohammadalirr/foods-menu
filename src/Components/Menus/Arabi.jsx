import { NavLink , Outlet} from "react-router-dom";
import {dataArabi} from "../../Source/arabiFoods";
import styles from "../../Css.moduls/App.module.css";


const Arabi = () => {

    const foods = dataArabi()
    return (
        <main style={{display:"flex"}}>
            <div>
                <ul className={styles.outletA}>
                    {/* <li><Link to="babaghanoosh">{food[0].name}</Link></li>
                    <li><Link to="felafel">{food[1].name}</Link></li>
                    <li><Link to="mohammare">{food[2].name}</Link></li>
                    <li><Link to="homos">{food[3].name}</Link></li>
                    <li><Link to="balbaki">{food[4].name}</Link></li> */}


                    {foods.map((food) =>
                    (<NavLink to={`/Menu/Arabi/${food.number}`} key={food.number} style={({isActive}) => {
                        return {
                            display: "block" ,
                            padding: ".5rem" ,
                            textDecoration: "none",
                            color: isActive ? "#D80073" : "" ,
                         
                        }
                    }}>
                    {food.name}
                    </NavLink>))}
                </ul>
            </div>
            <div className={styles.Outlet}>
                <Outlet/>
            </div>
        </main>
    )
};

export default Arabi;

