let game =['кс2','тундра','main','dota2','gd'];
console.log
for (let game of games ){
    console.log(game);
}
let nums = [1,2,3];
let newNums = nums.map(n => n + 1);
console.log(newNums);

let nums1 = [1,2,3,4,5,6];
let even1 = nums1.filter(n => n % 2 ==0);
console.log(even1);

let nums2 = [1,2,3,4,5,6];
let even2 = nums2.filter(n => n  > 10 );
console.log(even2);

let words = ["Я", "люблю", "JS"];

let sentenece = words.join(" ");
console.log(list);

let toyString = "шар,звезда,колоколькчик";
let toys = toyString.split(",");

let toys1 = [ 
    {
    name: "Большой шар с рисунком цветка",
    count: 2,
    year: 1960,
    shape: "шар",
    color: "желтый",
    size: "большой",
    favorite: false
},
{

    name: "Большой шар с рисунком цветка",
    count: 2,
    year: 1960,
    shape: "шар",
    color: "желтый",
    size: "большой",
    favorite: false
},
{

    name: "Большой шар с рисунком цветка",
    count: 1,
    year: 2000,
    shape: "шар",
    color: "черный",
    size: "большой",
    favorite: false
},
{
    name: "Большой шар с рисунком солнца",
    count: 2,
    year: 1960,
    shape: "шар",
    color: "желтый",
    size: "большой",
    favorite: false
},
{
    name: "Большой шар с рисунком цветка",
    count: 3,
    year: 2025,
    shape: "шар",
    color: "синий",
    size: "средний",
    favorite: false
},
{
    name: "Большой шар с рисунком мячика",
    count: 4,
    year: 1999,
    shape: "шар",
    color: "красный",
    size: "маленький",
    favorite: false
}
]
toys.forEach(toy => {
    let updateToys=toys.map(toy.name+'-'+toy.color+', форма:'+toy.shape+', количество:'+toy.count);
})
let tree = {
    type: "snowy",
    background: "living_room",
    garland: "milti",
    toys: [
        { id: 1, x: 120, y: 240, type: "ball_red"},
        { id: 1, x: 120, y: 240, type: "ball_red"}
    ]
};
user.name="vlad";
user.age=30;
delete user.name;
console.log(user);
let oridginal = { a: 1,b: 2};
let copy = Object.asssign({}, oridginal);
copy.a = 99;
console.log(oridginal.a);

let oridginal1 = { a: 1,b: 2};
let copy = {...oridginal};
copy.b = 300;
console.log(oridginal.b);



