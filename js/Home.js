const accountElem = document.getElementById('account');
const socialMediaElem = document.getElementById('socialMedia');

window.addEventListener('load', function () {
        console.log('wwwwwwwwww')
        setTimeout(function(text){
            accountElem.classList.remove('hidden');
        }, 800);

        setTimeout(function(text){
            socialMediaElem.classList.remove('hidden');
        }, 1200);
    console.log(this.document.getElementById('headImage'));
});

console.log('hello');