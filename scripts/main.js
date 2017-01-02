

function goat(){
var path = 'content/images/',
    imgs = ['me.jpg','me2.jpg','me3.jpg'],
    i = Math.floor(Math.random()*imgs.length);
$('.imgC').append("<img src='"+path+imgs[i]+"' alt='A picture of Gavin looking suave. Seriously he looks suave, it is not a really bad picture or anything like that.' class = 'splash' >")}