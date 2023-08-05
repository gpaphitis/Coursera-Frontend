// function moveContent() {
//     var slides = document.getElementsByClassName("moveable");
//     for (var i = 0; i < slides.length; i++) {
//         if(slides.item(i).classList.contains('moved'))
//             slides.item(i).classList.remove('moved');
//         else {
//             slides.item(i).classList.add('moved');
//         }
//     }
// }
var h=document;
h.addEventListener('click',moveContent);
function moveContent() {
    var btn = document.getElementById('menu-btn');
    var slides = document.getElementsByClassName("moveable");
    if(btn.classList.contains('show'))
    {
        for (var i = 0; i < slides.length; i++) 
        {
            slides.item(i).classList.add('moved');
        }
    }
    else 
    {
        for (var i = 0; i < slides.length; i++) 
        {
            slides.item(i).classList.remove('moved');
        }
    }
}