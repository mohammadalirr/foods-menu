import styles from './Css.moduls/App.module.css'

import { NavLink, Outlet } from 'react-router-dom';

import "../src/index.css"

const App = () => {

    return (



        <main>

            <div className={styles.divH}>
                <h1 className={styles.h1}>خوراک ها</h1>
            </div>
            <div className={styles.menu}>
                <strong>
                    <NavLink to="Menu" className={styles.link} style={({isActive}) => {return{fontWeight:"bold" , margin:"2rem" , color: isActive ? "black" : ""}}}>مشاهده منو</NavLink>
                </strong>
            </div>
            <div>
                <Outlet />
            </div>
        </main>
    )
}

export default App;