
   // fonction pour switch des css (defi theme n°392)

   function defi_theme() {
    //togle une classe 
    document.body.classList.toggle("first");

    document.body.classList.toggle("second");
}


document.addEventListener('DOMContentLoaded', function () {
  const pointerZone = document.getElementById('pointer-zone');
  const posi_text = document.getElementById('div2')
  document.addEventListener('mousemove', function (e) {
    const x = (e.clientX - 200);
    const y = (e.clientY - 200);

    pointerZone.style.left = `${x}px`;
    pointerZone.style.top = `${y}px`;
    posi_text.style.left = `${-x}px`;
    posi_text.style.top = `${-y}px`;

  });
});

document.addEventListener('DOMContentLoaded', function () {

  var pointerZone = document.getElementById('pointer-zone');


  var toggleState = false;


  document.addEventListener('keydown', function (event) {

    if (event.key === 'c' || event.key === 'C') {

      toggleState = !toggleState;


      if (toggleState) {
        pointerZone.style.display = 'block';
        
      } else {
        pointerZone.style.display = 'none';
      }
    }
  });
});
function toggleCouleurFond(id) {
  var divQR = document.getElementById(id);

  // Vérifie si la couleur actuelle est bleue
  if (divQR.style.backgroundColor === '') {
    // Si oui, change la couleur en vert
    divQR.style.backgroundColor = 'green';
  } else {
    // Sinon, remet la couleur en bleu
    divQR.style.backgroundColor = '';
  }
}

function valider() {
  // Ajoutez votre logique de validation ici
  alert("Validation réussie !");
}
const txt = document.getElementById('switch')
const none = document.getElementById('none')

function switch1() {
  if(txt.style.display === 'block'){
    txt.style.display = 'none';
    none.style.display = 'block';
  }
  else{
    txt.style.display = 'block';
    none.style.display = 'none';
    console.log('gggg')
  }
}
