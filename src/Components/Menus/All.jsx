import { dataAll } from "../../Source/all";
import styles from "../../Css.moduls/App.module.css";
import { useSearchParams, useNavigate } from "react-router-dom";

const All = () => {

    const navigate = useNavigate()
    const all = dataAll()
    const [searchParams, setSearchParams] = useSearchParams()
    // const notFound = () => {
    //     <p>موردی یافت نشد.</p>
    // }

    // const keys = ['name']
    // const keysList = keys.map((key) => (

    //     <li key={key}>{all[key]}</li>
    // ))
    return (
        // <ul>
        //     {keysList}
        // </ul>

        // <ul >
        //     {all.map((food) => (
        //         <li>{food.name}</li>
        //     ))}
        // </ul>


        <div className={styles.vast}>
            <nav className="row">
                <div className="col">
                    <div className="col m-4">
                        <button onClick={() => navigate('/Menu')} className="btn btn-primary">Home</button>
                    </div>
                    <form className="col">
                        <input
                            className={styles.input}
                            value={searchParams.get("filter") || ""}
                            onChange={event => {



                                let filter = event.target.value

                                if (filter) {
                                    setSearchParams({ filter: filter })
                                } else {
                                    // setSearchParams({})
                                    // return(
                                    //     <p>wjkbjwkx</p>
                                    // )
                                    setSearchParams({})
                                }
                            }}
                            type="text"
                            name="search"
                            placeholder=" بگرد ..."
                        />;
                        <button className={styles.button} type="submit" onClick={event => { event.preventDefault() }}>🔍</button>
                    </form>

                </div>
            </nav>
            <br />
            <hr style={{ margin: "0rem 10rem" }} />
            <div className={styles.allA}>


                <br />

                {all.filter(food => {
                    let filter = searchParams.get("filter");
                    if (!filter) return true;
                    let name = food.name.toLowerCase();
                    return name.startsWith(filter.toLowerCase());

                })
                    .map((food) => (
                        <div className={styles.allB}>
                            <div className="card">
                                <img src="https://placehold.jp/150x150.png" class="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">{food.name}</h5>
                                    <hr />
                                    <li className="card-text">{`نوع: ${food.type}`}</li>
                                    <li className="card-text">{`ماده اصلی: ${food.main}`}</li>
                                    <li className="card-text">{`قیمت:  ${food.type}`}</li>
                                    <li className="card-text">{`شماره سفارش: ${food.number}`}</li>
                                    <hr />
                                    <button className="btn btn-primary">انتخاب</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )

}

export default All;