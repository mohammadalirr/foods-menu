import { useParams } from "react-router-dom";
import styles from "../../../../Css.moduls/App.module.css"
import { getDataArabi } from "../../../../Source/arabiFoods";

const ArabiFoods = () => {

    const params = useParams()
    const food = getDataArabi(parseInt(params.foodId))

    if (food) {
        return (

            <main className={styles.main}>
                <ul className={styles.UL}>
                    <h4>{food.name}</h4>
                    <br />
                    <span>{`نوع خوراک : ${food.type}`}</span>
                    <span>{`ماده اصلی : ${food.main}`}</span>
                    <span>{`قیمت : ${food.price} تومان`}</span>
                    <span>{`شماره سفارش : ${food.number}`}</span>
                </ul>
                <button name="" id="" class="btn btn-primary" type="button">انتخاب</button>
            </main>

        )
    } else {
        return (
            <div className={styles.main}>
                <p>خوراکی با این شماره وجود ندارد.</p>
            </div>

        )
    }


}



export default ArabiFoods;