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
}
]
toys.forEach(toy => {
    let updateToys=toys.map(toy.name+'-'+toy.color+', форма:'+toy.shape+', количество:'+toy.count);
})
