//let fs = require('fs');

window.onload=function(){
    const e1 = document.getElementById("upvote");
    const e2 = document.getElementById("downvote");
    e1.addEventListener("click",plusVote,false);
    e2.addEventListener("click",minusVote ,false);
}


function plusVote(){
    readFile('data/count', (err, data) => {
        if(err) throw err;
        console.log(data);
    });
    alert('(｡•̀ᴗ-)✧');
    
}

function minusVote(){
    alert('凸(⊙▂⊙✖ ) 凸(⊙▂⊙✖ )');
}