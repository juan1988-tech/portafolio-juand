let burguer_button = document.getElementById('burguer_button');
let headerBurguer = document.getElementById('header__burguer');

function burguerButton(x){
    burguer_button.classList.toggle('change_burguer-button');
    x.classList.toggle('change');
    console.log(burguer_button.classList.toggle('change_burguer-button'))
    if(burguer_button.classList.toggle('change_burguer-button') !== false){
        header__burguer.style.transform = `translateY(100vh)`;
        header__burguer.style.transition = 'transform 700ms'; 
        header__burguer.style.position = 'absolute';

    }else{
        header__burguer.style.transform = `translateY(0vh)`;
        header__burguer.style.transition = 'transform 700ms';
    }
}


function occultDelay(){
    header__burguer.style.transform = `translateY(0vh)`;
    header__burguer.style.transition = 'transform 700ms';
}