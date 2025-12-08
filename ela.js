// let game =['кс2','тундра','main','dota2','gd'];
// console.log
// for (let game of games ){
//     console.log(game);
// }
// let nums = [1,2,3];
// let newNums = nums.map(n => n + 1);
// console.log(newNums);

// let nums1 = [1,2,3,4,5,6];
// let even1 = nums1.filter(n => n % 2 ==0);
// console.log(even1);

// let nums2 = [1,2,3,4,5,6];
// let even2 = nums2.filter(n => n  > 10 );
// console.log(even2);

// let words = ["Я", "люблю", "JS"];

// let sentenece = words.join(" ");
// console.log(list);

// let toyString = "шар,звезда,колоколькчик";
// let toys = toyString.split(",");

// let toys1 = [ 
//     {
//     name: "Большой шар с рисунком цветка",
//     count: 2,
//     year: 1960,
//     shape: "шар",
//     color: "желтый",
//     size: "большой",
//     favorite: false
// },
// {

//     name: "Большой шар с рисунком цветка",
//     count: 2,
//     year: 1960,
//     shape: "шар",
//     color: "желтый",
//     size: "большой",
//     favorite: false
// },
// {

//     name: "Большой шар с рисунком цветка",
//     count: 1,
//     year: 2000,
//     shape: "шар",
//     color: "черный",
//     size: "большой",
//     favorite: false
// },
// {
//     name: "Большой шар с рисунком солнца",
//     count: 2,
//     year: 1960,
//     shape: "шар",
//     color: "желтый",
//     size: "большой",
//     favorite: false
// },
// {
//     name: "Большой шар с рисунком цветка",
//     count: 3,
//     year: 2025,
//     shape: "шар",
//     color: "синий",
//     size: "средний",
//     favorite: false
// },
// {
//     name: "Большой шар с рисунком мячика",
//     count: 4,
//     year: 1999,
//     shape: "шар",
//     color: "красный",
//     size: "маленький",
//     favorite: false
// }
// ];

// const toysGrid = document.querySelector(".toys-grid");
// toys.forEach((toy, index) => {
//     const coutBOX = document/CustomElement("div");
   
//     coutBOX.textContent = toy.count;
//     coutBOX.style.color = "white";


// })

// toys.forEach(toy => {
//     let updateToys=toys.map(toy.name+'-'+toy.color+', форма:'+toy.shape+', количество:'+toy.count);
// })

// let tree = {
//     type: "snowy",
//     background: "living_room",
//     garland: "milti",
//     toys: [
//         { id: 1, x: 120, y: 240, type: "ball_red"},
//         { id: 1, x: 120, y: 240, type: "ball_red"}
//     ]
// };
// user.name="vlad";
// user.age=30;
// delete user.name;
// console.log(user);
// let oridginal = { a: 1,b: 2};
// let copy = Object.asssign({}, oridginal);
// copy.a = 99;
// console.log(oridginal.a);

// let oridginal1 = { a: 1,b: 2};
// let copyy = {...oridginal};
// copyy.b = 300;
// console.log(oridginal.b);

// const treeArea=document.querySelector(".tree-area");
// treeArea.addEventListener("dragover", e => e.preventDefault());
// treeArea.addEventListener("drop", e=> {
//     e.preventDefault();
//     })
//     const xPos = x - 40;
//     const yPos = y - 40;
//     const img = document.createElement("img");
//     img.src=toy.image;
//     img.classList.add("toy-on-tree");
//     img.style.left=xPos+"px";
//     img.style.top=yPos+"px";
//     img.addEventListener("click", () => {

//     }
//     )
//     toysGrid.children[toyIndex].children[1].textContent=toy.count;
//     img.addEventListener("clicl",() => {
//         img.remove();
//     })
//     toy.count +=1;
//     toysGrid.children[toyIndex].children[1].textContent=toy.count;
//     let currentTree = {
//         type: "",
//         garland: "",
//         toys: [],
      
//         setTree(newType) {
//           this.type = newType;
//         },
      
//         setGarland(newGarland) {
//           this.garland = newGarland;
//         },
      
//         addToy(toy) {
//           this.toys.push(toy);
//         },
      
//         showInfo() {
//           console.log("Ёлка:", this.type);
//           console.log("Гирлянда:", this.garland);
//           console.log("Игрушки:", this.toys);
//         },
        
        let toys = [
            { 
                name: "Красный матовый шарик",
                 color: "red", 
                 count: 5, 
                 year: 2023, 
                 shape: "ball", 
                 favorite: true,
                 image: ".\elochka\images\photo_5312038680551689389_m.jpg"
                },
            { 
                name: "Красно-белая игрушка", 
                color: "red",
                count: 8, 
                year: 2010,
                shape: "toy", 
                favorite: true, 
                image: ".\elochka\images\photo_5312038680551689376_m.jpg"
            },
            { 
                name: "Желтый шарик с цветком", 
                color: "yellow", 
                count: 12, 
                year: 1998 , 
                shape: "ball", 
                favorite: true, 
                image: ".\elochka\images\photo_5312038680551689387_m.jpg" 
            },
            { 
                name: "Зеленый шарик с узором", 
                color: "green", 
                count: 6,
                year:  2005, 
                shape: "ball", 
                favorite: true, 
                image: ".\elochka\images\photo_5312038680551689388_m.jpg" 
            }
            ,
            { 
                name: "Красная игрушка", 
                color: "red", 
                count: 5, 
                year: 2024 , 
                shape: "toy", 
                favorite: true, 
                image: ".\elochka\images\photo_5312038680551689381_m.jpg" 
            }
            ,
            { 
                name: "Красный шарик с узором", 
                color: "red", 
                count: 8, 
                year: 2016 , 
                shape: "ball", 
                favorite: true, 
                image: ".\elochka\images\photo_5312038680551689384_m.jpg" 
            }
            ,
            { 
                name: "Белая игрушка", 
                color: "white", 
                count: 12, 
                year: 2025 , 
                shape: "toy", 
                favorite: true, 
                image: ".\elochka\images\photo_5312038680551689380_m.jpg" 
            }
            ,
            { 
                name: "Красный шарик", 
                color: "red", 
                count: 6, 
                year: 2000 , 
                shape: "ball", 
                favorite: true, 
                image: ".\elochka\images\photo_5312038680551689390_m.jpg" 
            }
            ,
            { 
                name: "Белый колокольчик", 
                color: "white", 
                count: 5, 
                year: 2013 , 
                shape: "toy", 
                favorite: true, 
                image: ".\elochka\images\photo_5312038680551689386_m.jpg" 
            }
            ,
            { 
                name: "Золотой шарик", 
                color: "gold", 
                count: 8, 
                year: 1987 , 
                shape: "ball", 
                favorite: true, 
                image: "./elochka\images\photo_5312038680551689380_m.jpg" 
            }
            ,
            { 
                name: "Белая шишка", 
                color: "white", 
                count: 12, 
                year: 2019 , 
                shape: "toy", 
                favorite: true, 
                image: "./images/photo_5312038680551689382_m.jpg" 
            }
            ,
            { 
                name: "Белый шарик", 
                color: "white", 
                count: 6, 
                year: 2024 , 
                shape: "ball", 
                favorite: true, 
                image: "./images/photo_5312038680551689385_m.jpg" 
            }
            ,
            { 
                name: "Новогодний шарик маленький", 
                color: "NY", 
                count: 5, 
                year: 2024 , 
                shape: "ball", 
                favorite: true, 
                image: "./images/photo_5312038680551689383_m.jpg" 
            }
            ,
            { 
                name: "Новогодний шарик большой", 
                color: "NY", 
                count: 8, 
                year: 2024 , 
                shape: "ball", 
                favorite: true, 
                image: "./images/photo_5312038680551689383_m.jpg" 
            }
            ,
            { 
                name: "Новогодняя игрушка груша", 
                color: "NY", 
                count: 12, 
                year: 2024 , 
                shape: "toy", 
                favorite: true, 
                image: "./images/photo_5312038680551689375_m.jpg" 
            }
            ,
            { 
                name: "Новогодняя игрушка", 
                color: "NY", 
                count: 6, 
                year: 2024 , 
                shape: "toy", 
                favorite: true, 
                image: "./images/photo_5312038680551689375_m.jpg" 
            }
        ];
        
        const toysGrid=document.querySelector(".toys-grid");
        
        toys.forEach((toy,index)=>{
            const toyBox=document.createElement("div");
        
        const img=document.createElement("img");
        img.src=toy.image;
        img.classList.add("toy");
        img.draggable=true;
        img.dataset.index=index;
        
        const countBox=document.createElement("div");
        countBox.textContent=toy.count;
        countBox.style.color=toy.color;
        countBox.style.textAlign="center";
        countBox.style.fontSize="14px";
        
            toyBox.appendChild(img);
        toyBox.appendChild(countBox);
        
        toysGrid.appendChild(toyBox);
        img.addEventListener("dragstart", e => {
      };
      if(toy.count===0){
        e.preventDefault();
        return;
    }
    e.dataTransfer.setData('toy',index);
})
const treeArea=document.querySelector(".tree-area");
treeArea.addEventListener("dragover", e => e.preventDefault());

treeArea.addEventListener("drop", e=> {
e.preventDefault();

const rect=treeArea.getBoundingClientRect();

const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

if(e.dataTransfer.getData("toy")!==""){
const toyIndex=e.dataTransfer.getData("toy");
const toy=toys[toyIndex];
if(toy.count>0){
    toy.count--;
    const xPos = x - 40;
    const yPos = y - 40;
    const img=document.createElement("img");
    img.src=toy.image;
    img.classList.add("toy-on-tree");
    img.style.left=xPos+"px";
    img.style.top=yPos+"px";
    treeArea.appendChild(img);
    currentTree.addToy(toy, xPos, yPos);
    toysGrid.children[toyIndex].children[1].textContent=toy.count;
    img.addEventListener("clicl",() => {
        img.remove();
    })
    toy.count +=1;
    toysGrid.children[toyIndex].children[1].textContent=toy.count;
    currentTree.toys=currentTree.toys.filter(t => t!==toy);
    

    
}

}
})
    
    



