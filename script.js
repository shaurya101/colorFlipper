const colorOptions=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

function newColor(){
    var color='#';
    for(let i=0; i<6; i++){
        let index=Math.floor(Math.random()*16);
        color=color+colorOptions[index];
    }
    document.querySelector("#screen").style.backgroundColor=color;
    console.log(color);
}
