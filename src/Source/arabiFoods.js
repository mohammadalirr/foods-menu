const ArabiFood =

    [

        {
            name: "بابا غنوش",
            type: "عربی",
            main: "سس مخصوص",
            price: 65000 ,
            number: 1
        }
        ,
        {
            name: "فلافل" ,
            type: "عربی" , 
            main:  "نخود" ,
            price: 36000 ,
            number: 2
        }
        ,
        {
            name: "محمره" ,
            type: "عربی" , 
            main: "فلفل دلمه‌ای" ,
            price: 53000 ,
            number: 3
        }
        ,
        {
            name: "حمص" ,
            type: "عربی" , 
            main: "نخود" ,
            price: 40000 ,
            number: 4
        }
        ,
        {
            name: "پیتزا بعلبکی" ,
            type: "عربی" , 
            main: "گوشت" ,
            price: 96000 ,
            number: 5

        }

    ];

export const dataArabi = () => {
    return ArabiFood;
}

export const getDataArabi = (number) => {

return  (
    ArabiFood.find((food) => food.number === number)
)

}