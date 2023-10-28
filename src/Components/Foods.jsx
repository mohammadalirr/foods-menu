import { NavLink, Outlet} from "react-router-dom";
import styles from "../Css.moduls/App.module.css"



const Foods = () => {

    return (
        <>

            <nav className={styles.nav}>

                <div className={styles.divA} id="mainDiv">

                    <ul className={styles.ul}>
                        <h5>منو مد نظر خود را انتخاب کنید...</h5>
                        <br />
                        <li><NavLink to="Irani" style={({ isActive }) => {
                            return {
                                display: "block",
                                padding: ".5rem",
                                textDecoration: "none",
                                color: isActive ? "#D80073" : "",
                            }

                        }}>منو ایرانی</NavLink></li>
                        <li><NavLink to="Arabi" style={({ isActive }) => {
                            return {
                                display: "block",
                                padding: ".5rem",
                                textDecoration: "none",
                                color: isActive ? "#D80073" : "",
                            }

                        }}>منو عربی</NavLink></li>
                        <li><NavLink to="Italian" style={({ isActive }) => {
                            return {
                                display: "block",
                                padding: ".5rem",
                                textDecoration: "none",
                                color: isActive ? "#D80073" : "",
                            }
                        }}>منو ایتالیایی</NavLink></li>

                        <li><NavLink to="All" style={{
                            display: "block",
                            padding: ".5rem",
                            textDecoration: "none",
                        }}>همه</NavLink></li>

                    </ul>

                </div>

                <div>
                    <Outlet />
                </div>

            </nav>





        </>
    )
}

export default Foods;