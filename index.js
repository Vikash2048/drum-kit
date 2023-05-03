for(var i = 0; i<document.querySelectorAll(".drum").length; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);

}
// document.querySelector("button").addEventListener("click",handleClick);


// getting sound on click

function handleClick()
{
    

    var instrumentSound = this.innerHTML;
    makeSound(instrumentSound);
    addAnimation(instrumentSound);
    
    
    
}

// getting sound on pressing key 

document.addEventListener("keypress",function(event)
{
    makeSound(event.key);
    addAnimation(event.key);
});


// sound fucntion 

function makeSound(key)
{
    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom3 = new Audio("sounds/tom-3.mp3"); 
            tom3.play();
            break;
        
    
        default:console.log();
            break;
    }
}

// animation 

function addAnimation(currentKey)
{
    var activeBtn = document.querySelector("."+currentKey); 
    activeBtn.classList.add("pressed");

    setTimeout(function()
    {
        activeBtn.classList.remove("pressed");
    },100);
}