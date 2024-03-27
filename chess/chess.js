const plateau = document.querySelector("#plateau")
const largeurLigne = 8

const EmplacementInit = [
    ' ', ' ', ' ', Nroi, ' ', ' ', ' ', ' ',
    ' ', ' ', Nfou, ' ', ' ', ' ', ' ', Nchavalier,
    ' ', ' ', ' ', ' ', ' ', chavalier, ' ', ' ',
    pion, ' ', ' ', ' ', ' ', ' ', ' ', ' ',
    ' ', pion, ' ', ' ', ' ', Ntour, Npion, ' ',
    ' ', ' ', ' ', roi, Npion, ' ', ' ', Npion,
    ' ', ' ', tour, ' ', ' ', ' ', ' ', pion,
    ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
]

function CreePlateau(){
        EmplacementInit.forEach((EmplacementInit, i) => {
        const carre = document.createElement('div')
        carre.classList.add('carre')
        carre.innerHTML = EmplacementInit  
        carre.setAttribute('carre-id', i)
        const row = Math.floor( (63 - i) / 8) + 1
        if (row % 2 === 0) {
            carre.classList.add(i % 2===0 ? "Caseblanche" : "CaseBleuMajorelle")
        } else { carre.classList.add(i % 2===0 ? "CaseBleuMajorelle" : "Caseblanche")}

        plateau.append(carre)
        if(carre && carre.firstChild && carre.firstChild.firstChild && carre.firstChild.firstChild.classList.contains('blanc'))
        {
            carre.firstChild.setAttribute('draggable', true);
        }
        
    })
}


CreePlateau()

const ToutLesCarre = document.querySelectorAll("#plateau .carre")
const pieces = document.getElementsByClassName('piece');


ToutLesCarre.forEach(carre => {

        carre.addEventListener('dragstart', PieceCliquer)
        carre.addEventListener('dragover', PieceMouvement)
        carre.addEventListener('drop', PieceLacher)
})

let CoordorneDebu
let PieceSelectioner

function PieceCliquer(e) {
    CoordorneDebu = e.target.parentNode.getAttribute('carre-id')
    PieceSelectioner = e.target
}

function PieceMouvement(e) {
    e.preventDefault()
}

function PieceLacher(e) {
   e.stopPropagation()
   const CoupValide = VerifCoupValide(e.target)
   const prise = e.target.classList.contains('piece')
   if (e.target.querySelector('svg.noire') && CoupValide == true) {
    e.target.parentNode.append(PieceSelectioner)  
    e.target.firstChild.remove()  
   } 
   else if (e.target.querySelector('svg.blanc')) {   }

    else if (CoupValide == true) {
        e.target.appendChild(PieceSelectioner)
    }
}

function VerifCoupValide(target) {
    var retour = false
    const CaseFin = Number(target.getAttribute('carre-id') || Number(target.parentNode.getAttribute('carre-id')))   
    const CaseDebu = Number(CoordorneDebu)
    const Piece = PieceSelectioner.id
    const valeursPossibleschavalier = [CaseDebu + largeurLigne * 2 + 1, CaseDebu + largeurLigne * 2 - 1,
                                       CaseDebu - largeurLigne * 2 + 1, CaseDebu - largeurLigne * 2 - 1,
                                       CaseDebu + largeurLigne -2, CaseDebu + largeurLigne + 2,
                                       CaseDebu - largeurLigne -2, CaseDebu - largeurLigne + 2, ];

    const valeursPossiblesTour = [];

    for (let x = 0; x <= 8; x++) {
        //if (!document.getElementById(x)) {      
            valeursPossiblesTour.push(CaseDebu - largeurLigne * x);
            valeursPossiblesTour.push(CaseDebu + largeurLigne * x);
       // }  
        //console.log(target.parentNode.getAttribute('carre-id'))
        console.log(target.parentNode.getAttribute('carre-id'))
    }

    for (let y = 0; y <= 8; y++) {
        valeursPossiblesTour.push((CaseDebu - (CaseDebu) % 8) + y);
    }
 
    switch(Piece) {

        case 'pion' :
            if(CaseFin == (CaseDebu - 8))
            { retour = true }
        break;

        case 'chavalier' :
            if(valeursPossibleschavalier.includes(CaseFin)) 
            { retour = true }
        break;

        case 'tour' :
            if(valeursPossiblesTour.includes(CaseFin)) 
            { retour = true }
        break;
    }
    return (retour)
}    