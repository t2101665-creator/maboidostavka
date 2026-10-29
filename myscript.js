var btn = document.querySelector(".intro_right button")

var modal = document.querySelector(".modal")

var close = document.querySelector(".close")

var modal_content = document.querySelector(".modal_content")

btn.onclick = function(){
    modal.style.display = "flex"

    setTimeout(function(){
        modal_content.style.opacity = "1"
    }, 100)
    
}

close.onclick = function(){
    modal_content.style.opacity = "0"

    setTimeout(function (){
        modal.style.display = "none"
    }, 500)
}