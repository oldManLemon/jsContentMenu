

var h1Counter = document.getElementsByTagName("h1"); //Gather all elements with the tag
var nav = document.getElementById('toc');
var navbarWrite = nav.innerHTML;

for (i = 0; i <= h1Counter.length; i++) {
    var titles = h1Counter[i].innerHTML;
    var links = "#" + h1Counter[i].attributes.id.value;
    navbarWrite += nav.innerHTML += '<li class="nav-item"><a class="nav-link" href="' + links + '">' + titles + '</a></li>';
    
}





