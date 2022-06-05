//for music on press.

function music(button){
    switch (button) {
        case 'w':
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case 'a':
             var audio=new Audio("sounds/tom-2.mp3");
             audio.play();
             break;
        case 's':
             var audio=new Audio("sounds/tom-3.mp3");
             audio.play();
             break;
        case 'd':
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        
        case 'j':
                var audio=new Audio("sounds/crash.mp3");
                audio.play();
                break;
        
        case 'k':
             var audio=new Audio("sounds/kick-bass.mp3");
             audio.play();
             break;

        case 'l':
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
        default:
            break;
    }
}

//for mouse click.

var a=document.querySelectorAll(".drum").length
for (let i = 0; i < a; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click" ,function(){

        var button=this.innerHTML;
        music(button);
        animation(button);
        
        
        
    });
    
}


//for keypress.


document.addEventListener("keypress" ,function(event){

    music(event.key);
    animation(event.key);
    


});


//animation on key press.


function animation(key)
{
    var ani= document.querySelector("."+key);
    ani.classList.add("pressed");

    setTimeout(function(){
        ani.classList.remove("pressed");
    } , 150);
}
