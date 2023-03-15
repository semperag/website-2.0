const accountElem = document.getElementById('account');
const socialMediaElem = document.getElementById('socialMedia');

setTimeout(function(text){
    accountElem.classList.remove('hidden');
}, 400);

setTimeout(function(text){
    socialMediaElem.classList.remove('hidden');
}, 600);

console.log('hello');