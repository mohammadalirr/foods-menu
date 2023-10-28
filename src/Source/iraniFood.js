
    let foods = [
        {
            name: "ماش پلو",
            type: "ایرانی",
            main: "ماش",
            price: 44000 ,
            number: 6
    
        }
        ,
        {
            name: "عدس پلو",
            type: "ایرانی",
            main: "عدس",
            price: 34000 ,
            number: 7
    
        }
        ,
        {
            name: "هویج پلو",
            type: "ایرانی",
            main: "هویج",
            price: 57000 ,
            number: 8
    
        }
        ,
        {
            name: "دمی گوجه",
            type: "ایرانی",
            main: "گوجه",
            price: 1350000 ,
            number: 9
        }
        ,
        {
            name: "قیمه نثار",
            type: "ایرانی",
            main: "خلال بادام و پسته",
            price: 75000 ,
            number: 10
    
        }
    ];
    









// export default foods;


export const dataIrani = () => {
    return foods;
}

export const getFood = (number) => {
return (
    foods.find(food => food.number === number)
)
}

// export const getFood = (number) => {
//      return foods.find((food) => food.number === number)
// }

// console.log(foods)

// const Map =
//     `<ul class="Food">

//     ${foods.map(food => `* ${food.name} is ${food.type}`).join("")}

//     </ul>`


// const Html = `<p>${Object.values(foods)}</p>`




// document.body.innerHTML = Map




