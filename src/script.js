var header = document.getElementById('Header')
window.addEventListener("scroll",()=>{
   
    var scroll= window.scrollY
    if(scroll>10){
        header.style.backgroundColor='#000000'
    }else{
        header.style.backgroundColor='transparent'
    }
});
