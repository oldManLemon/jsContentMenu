var h1Counter = document.getElementsByTagName("h1"); //Gather all elements with the tag
var anchorPointCounter = document.getElementsByTagName("ap");
console.log(anchorPointCounter);
var nav = document.getElementById('toc');
var navbarWrite = nav.innerHTML = '<h2><a href="http://bwwiki:49494/handbooks/revitHandbook.html">Main Contents</a></h2>';
for (i = 1; i <= h1Counter.length; i++) {
  var titles = h1Counter[i].innerText;
  var links = '#' + anchorPointCounter[i - 1].id;
  navbarWrite += nav.innerHTML += '<li class="nav-item"><a class="nav-link" href="' + links + '">' + titles + '</a></li>';
}