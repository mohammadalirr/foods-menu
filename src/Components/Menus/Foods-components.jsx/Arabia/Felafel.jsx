import { dataArabi } from "../../../../Source/arabiFoods";

const Felafel = () => {

    const food = dataArabi()

    return(

        <main style={{textAlign: "center"}}>
        <div>
            <ul>
                <h1>{food[1].name}</h1>

                <li>{`نوع غذا: ${food[1].type}`}</li>
                <li>{`ماده اصلی: ${food[1].main}`}</li>
                <li>{`شماره سفارش: ${food[1].number}`}</li>

                <button className="btn btn-primary">انتخاب</button>

            </ul>
        </div>
    </main>

    )
}

export default Felafel;