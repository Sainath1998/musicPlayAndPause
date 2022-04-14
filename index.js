let audoiElement = new Audio("music/manyMen.mp3")
playPaus = document.getElementById("play")
playPaus.addEventListener('click',function(){
    if(audoiElement.paused || audoiElement.currentTime <=0)
    {
        audoiElement.play()
    }
    else
    {
        audoiElement.pause()
    }
})
