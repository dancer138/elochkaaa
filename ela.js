let currentTree = {
    type: "",
    garland: "",
    toys: [],
  
    setTree(newType) {
      this.type = newType;
    },
  
    setGarland(newGarland) {
      this.garland = newGarland;
    },
  
    addToy(toy) {
      this.toys.push(toy);
    },
  
    showInfo() {
      console.log("Ёлка:", this.type);
      console.log("Гирлянда:", this.garland);
      console.log("Игрушки:", this.toys);
    }
  };
        let toys = [
            { 
                name: "Красный матовый шарик",
                 color: "red", 
                 count: 5, 
                 year: 2023, 
                 shape: "ball", 
                 favorite: true,
                 image: "./images/photo_5312038680551689389_m.jpg"

                },
            { 
                name: "Красно-белая игрушка", 
                color: "red",
                count: 8, 
                year: 2010,
                shape: "toy", 
                favorite: true, 
                image: "./images/photo_5312038680551689376_m.jpg"
            },
            { 
                name: "Желтый шарик с цветком", 
                color: "yellow", 
                count: 12, 
                year: 1998 , 
                shape: "ball", 
                favorite: true, 
                image: "./images/photo_5312038680551689387_m.jpg" 
            },
            { 
                name: "Зеленый шарик с узором", 
                color: "green", 
                count: 6,
                year:  2005, 
                shape: "ball", 
                favorite: true, 
                image: "./images/photo_5312038680551689388_m.jpg" 
            }
            ,
            { 
                name: "Красная игрушка", 
                color: "red", 
                count: 5, 
                year: 2024 , 
                shape: "toy", 
                favorite: true, 
                image: "./images/photo_5312038680551689381_m.jpg" 
            }
            ,
            { 
                name: "Красный шарик с узором", 
                color: "red", 
                count: 8, 
                year: 2016 , 
                shape: "ball", 
                favorite: true, 
                image: "./images/photo_5312038680551689384_m.jpg" 
            }
            ,
            { 
                name: "Белая игрушка", 
                color: "white", 
                count: 12, 
                year: 2025 , 
                shape: "toy", 
                favorite: true, 
                image: "./images/photo_5312038680551689380_m.jpg" 
            }
            ,
            { 
                name: "Красный шарик", 
                color: "red", 
                count: 6, 
                year: 2000 , 
                shape: "ball", 
                favorite: true, 
                image: "./images/photo_5312038680551689390_m.jpg" 
            }
            ,
            { 
                name: "Белый колокольчик", 
                color: "white", 
                count: 5, 
                year: 2013 , 
                shape: "toy", 
                favorite: true, 
                image: "./images/photo_5312038680551689386_m.jpg" 
            }
            ,
            { 
                name: "Золотой шарик", 
                color: "gold", 
                count: 8, 
                year: 1987 , 
                shape: "ball", 
                favorite: true, 
                image: "./images/photo_5312038680551689380_m.jpg" 
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
        img.addEventListener( "dragstart", e => {
        if(toy.count===0){
          e.preventDefault();
          return;
      }
      e.dataTransfer.setData('toy',index);
  })
});
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

 currentTree.addToy({
        id: toy.id,
        placedId: placedId,
        x: xPos,
        y: yPos,
        image: toy.image
      });
      console.log('currentTree.toys:', currentTree.toys);
      

      toysGrid.children[toyIndex].children[1].textContent = toy.count;

      img.addEventListener("click", () => {
        console.log("Клик по игрушке", img.dataset.placedId);

        img.remove();

        toy.count++;
        toysGrid.children[toyIndex].children[1].textContent = toy.count;

        currentTree.toys = currentTree.toys.filter(
          t => t.placedId != img.dataset.placedId // удалить игрушку
        );
      });
    }
  }

  if (e.dataTransfer.getData("garland") !== "") {
    const gIndex = e.dataTransfer.getData("garland");
    const garland = garlands[gIndex];

    currentTree.setGarland(garland.type);

    const img = document.createElement("img");
    img.src = garland.image;
    img.classList.add("garland-on-tree");

    img.style.left = (x - 140) + "px";
    img.style.top = (y - 20) + "px";

    img.style.animationDelay = (Math.random() * 1.6) + "s";

    treeArea.appendChild(img);
    
    //при клике на гирлянду удаляем ее из DOM
     img.addEventListener("click", () => {
      img.remove();
      // удаляем гирлянду из объекта текущей ёлки
      currentTree.setGarland("");
    });
  }
});
let treeData = {
    type: currentTree.type,
    garland:currentTree.garland,
    toys: [currentTree.toys],
  
    setTree(newType) {
      this.type = newType;
    },
  
    setGarland(newGarland) {
      this.garland = newGarland;
    },

    addToy(toyObj) {
      this.toys.push(toyObj);
    },
  
    showInfo() {
      console.log("Ёлка:", this.type);
      console.log("Гирлянда:", this.garland);
      console.log("Игрушки:", this.toys);
    }
};

    
    



