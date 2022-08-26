//Je sélectionne et je stocke la DIV .modal-container
const modal = document.querySelector('.modal-container');
console.log(modal);
//Je sélectionne et stocke le bouton
const btn = document.querySelector('.btn-success');
console.log(btn);
//Je sélectionne et stocke le .code
const code = document.querySelector('.code');
console.log(code);
//Je sélectionne et stocke l'icône
const icone = document.querySelector('.fa-times');
console.log(icone);

//Quand je scroll vers le bas à 400px du top la fenetre promo s'affiche
window.addEventListener('scroll', displayModal) 
function displayModal(){
    console.log('défilement détecté');
    let hauteur = document.documentElement.scrollTop;
    console.log(hauteur, 'nombre de pixels depuis le haut de la page');
    if (hauteur > 400){
        console.log('Affichage de la modale !');
        modal.style.display = "flex";
    }
};

//Je clic sur le bouton pour afficher le code promo
btn.addEventListener('click', function(){
    console.log('bouton cliqué');
    //Je rend visible le code promo
    code.style.display = "block";
    //Je rend invisible le bouton
    btn.style.display = "none";
});

//Je clic sur l'icone (croix) pour rendre invisible la fenêtre
icone.addEventListener('click', function(){
    console.log('icône cliqué');
    //Je rend invisible la DIV .modal-container
    modal.style.display = "none";
    //J'annule l'événement pour ne pas que la fenêtre promo revienne
    window.removeEventListener('scroll', displayModal);
});



