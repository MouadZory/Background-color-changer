var M=document.getElementById('A')
var b=document.getElementById('B')
var R=document.getElementById('E')

var a,b,c,d,e,f
var codes="1234567890ABCDEF"

b.addEventListener('click',function(){
    a=Math.floor(Math.random()*15)
    b=Math.floor(Math.random()*15)
    c=Math.floor(Math.random()*15)
    d=Math.floor(Math.random()*15)
    e=Math.floor(Math.random()*15)
    f=Math.floor(Math.random()*15)
    M.innerHTML="#"+codes[a]+codes[b]+codes[c]+codes[d]+codes[e]+codes[f] 
    R.style.backgroundColor="#"+codes[a]+codes[b]+codes[c]+codes[d]+codes[e]+codes[f]})