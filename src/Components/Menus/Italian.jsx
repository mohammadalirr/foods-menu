import { NavLink, Outlet } from "react-router-dom";
import { dataItaly } from "../../Source/italianFood";
import styles from "../../Css.moduls/App.module.css"
// import { getDataItaly } from "../../Source/italianFood";


const Italian = () => {

    const foods = dataItaly()
    return (
        <main style={{ display: "flex" }}>
            <div>
                <ul className={styles.outletA}>
                    {/* <li><Link to="brosketa">{food[0].name}</Link></li>
                    <li><Link to="pasta">{food[1].name}</Link></li>
                    <li><Link to="margarita">{food[2].name}</Link></li> */}

                    {foods.map((food) =>
                    (<NavLink to={`/Menu/Italian/${food.number}`} key={food.number} style={({ isActive }) => {
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
};

export default Italian;

