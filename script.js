var color;
const colorOptions=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];


function newColor(){
    reset();
    randomColor();
    document.querySelector("#screen").style.backgroundColor=color;
    document.querySelector("#hexDisplay").textContent = color;
}

function reset(){
    color='#';
    document.querySelector("#hexDisplay").textContent = '';
}
function randomColor(){
    for(let i=0; i<6; i++){
        let index=Math.floor(Math.random()*16);
        color=color+colorOptions[index];
    }//for
}
