const foods = [

{
    name: "بروسکتا" ,
    type: "ایتالیایی" , 
    main: "سیر" ,
    price: 94000 ,
    number: 11

}
,
{
    name: "پاستا" ,
    type: "ایتالیایی" , 
    main: "سس مخصوص" ,
    price: 64000 ,
    number: 12

}
,
{
    name: "پیتزا مارگاریتا" ,
    type: "ایتالیایی" , 
    main: "ریحان" ,
    price: 37000 ,
    number: 13

}
];

export const dataItaly = () => {
    return foods;
}

export const getDataItaly = (number) => {
    return (
        foods.find((food) => food.number === number)
    )
}