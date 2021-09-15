console.log(`this is file is for functuing header animation`);


const name1 = document.getElementsByClassName("welcome");
const banner_container = document.getElementsByClassName('banner_container');
const main_container = document.querySelector(".main_container");
let topstyle , maintopstyle;
let a ,b , x , y;

    
document.addEventListener("scroll", ()=>{
    var rect = name1[0].getBoundingClientRect();
    topstyle =  Math.abs(parseInt(rect.top));
    console.log(topstyle);
    if (parseInt(rect.top) < 10) {
        a = 79 - (10 + (topstyle/10));
        b = 82 - (10 + (topstyle/10));
        
    }
    else{
        console.log('lessthan10')
        a = 79;
        b = 82;
    }
    banner_container[0].style.webkitClipPath = `polygon(0 0 , 100% 0, 100% ${a}%, ${b}% 100%, 0 100%)`

    var rect2 = main_container.getBoundingClientRect();
    maintopstyle =  Math.abs(parseInt(rect2.top));
    console.log(maintopstyle);
    if (parseInt(rect2.top) < 5) {
        x = 100 - (10 + (maintopstyle/10));
        y = 28 - (10 + (maintopstyle/10));
        
    }
    else{
        console.log('lessthan10')
        x = 100;
        y = 28;
    }
    main_container.style.setProperty('--initial' , `polygon(${x}% 0, 100% 0, 100% 100%, 0 100%, 0 ${y}%)`)
})