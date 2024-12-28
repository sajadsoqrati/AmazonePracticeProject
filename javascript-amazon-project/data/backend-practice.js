const xhr = new XMLHttpRequest('load');
xhr.addEventListener('load',()=>{
console.log(xhr.response);
})
xhr.open('GET','https://supersimplebackend.dev');
xhr.send();

