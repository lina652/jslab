let count =0;
function displayCount(){
    document.getElementById('count').innerHTML=count;
}

function increaseCount(){
    count++;
    displayCount()
}


function resetCount(){
    count=0;
    displayCount();
    alert("Followers count has been reset!");
 }
 

 