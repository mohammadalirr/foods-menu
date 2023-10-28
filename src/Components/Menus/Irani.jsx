// import { number } from "prop-types";
// import iraniFood from "../../Source/iraniFood";
import { dataIrani } from "../../Source/iraniFood";
import { NavLink, Outlet } from "react-router-dom";
import styles from "../../Css.moduls/App.module.css"
// import { useParams } from "react-router-dom";
// import { getValue } from "@testing-library/user-event/dist/utils";
// import { getFood } from "../../Source/iraniFood";
// import foods from "../../Source/iraniFood";
// import ffoods from '../../Source/iraniFood'
// const IrListFoods = () => {

// }



const Irani = () => {


    // const params = useParams();
    const foods = dataIrani();
    // const num = getFood()

    // console.log(props)


    return (
        <main style={{ display: "flex" }}>
            <div>
                <ul className={styles.outletA}>

                    {/* <li><Link to="mashPolo">{food[0].name}</Link></li>
                        <li><Link to="adasPolo">{food[1].name}</Link></li>
                        <li><Link to="havigPolo">{food[2].name}</Link></li>
                        <li><Link to="damiGoge">{food[3].name}</Link></li>
                        <li><Link to="gheymeNesar">{food[4].name}</Link></li> */}

                    {foods.map((food) =>
                    (<NavLink to={`/Menu/Irani/${food.number}`} key={food.number} style={({ isActive }) => {
                        return {
                            display: "block",
                            padding: ".5rem",
                            textDecoration: "none",
                            color: isActive ? "#D80073" : "",

                        }
                    }}>
                        {food.name}
                    </NavLink>))}



                </ul>

            </div>

            <div className={styles.Outlet}>
                <Outlet />
            </div>

        </main>
    )
}

    ;






export default Irani;