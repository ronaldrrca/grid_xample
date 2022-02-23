const _1_column = document.getElementById("_1_column");
const _2_column = document.getElementById("_2_column");
const _3_column = document.getElementById("_3_column");
const _4_column = document.getElementById("_4_column");
const _5_column = document.getElementById("_5_column");
const container = document.getElementById("container");

// let value = 400;

function resolve(columns){
    
    if (columns == 1) {
        container.style.gridTemplateColumns = "100%";
        _2_column.classList.remove("active");
        _3_column.classList.remove("active");
        _4_column.classList.remove("active");
        _5_column.classList.remove("active");
        _1_column.classList.add("active");
    }else if(columns == 2){
        container.style.gridTemplateColumns = "repeat(2, auto)";
        _1_column.classList.remove("active");
        _3_column.classList.remove("active");
        _4_column.classList.remove("active");
        _5_column.classList.remove("active");
        _2_column.classList.add("active");
    }else if(columns == 3){
        container.style.gridTemplateColumns = "repeat(3, auto)";
        _1_column.classList.remove("active");
        _2_column.classList.remove("active");
        _4_column.classList.remove("active");
        _5_column.classList.remove("active");
        _3_column.classList.add("active");
    }else if(columns == 4){
        container.style.gridTemplateColumns = "repeat(4, auto)";
        _1_column.classList.remove("active");
        _2_column.classList.remove("active");
        _3_column.classList.remove("active");
        _5_column.classList.remove("active");
        _4_column.classList.add("active");
    }else if(columns == 5){
        container.style.gridTemplateColumns = "repeat(5, auto)";
        _1_column.classList.remove("active");
        _2_column.classList.remove("active");
        _3_column.classList.remove("active");
        _4_column.classList.remove("active");
        _5_column.classList.add("active");
    }
  
}



_1_column.addEventListener("click", ()=> {
    resolve(1);
})

_2_column.addEventListener("click", ()=> {
    resolve(2);

})

_3_column.addEventListener("click", ()=> {
    resolve(3);

})

_4_column.addEventListener("click", ()=> {
    resolve(4);

})

_5_column.addEventListener("click", ()=> {
    resolve(5);

})
