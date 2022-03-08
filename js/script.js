/**
 * Visualizzare in pagina 5 numeri casuali.
    Da lì parte un timer di 30 secondi.
    Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
    Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
 *
 */ 


    // Schema mentale e svolgimento

    // 1) Inserire 5 numeri casuali in un array e stamparlo a schermo
        const number= document.getElementById("dom-numbers");
        const casualNumber=[]; 
        for ( let i = 0; i < 5; i++){
        casualNumber.push(Math.floor(Math.random()* 100));
        
        };
        console.log(casualNumber); 
        // Stampa su elemento Dom
        number.innerHTML= casualNumber;
       