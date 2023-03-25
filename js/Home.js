const accountElem = document.getElementById('account');
const socialMediaElem = document.getElementById('socialMedia');

setTimeout(function(text){
    accountElem.classList.remove('hidden');
}, 800);

setTimeout(function(text){
    socialMediaElem.classList.remove('hidden');
}, 1200);

console.log('hello');