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
        const play = document.getElementById("play");
        const numberUtent=[];  
        const casualNumber=[]; 
        // for ( let i = 0; i < 5; i++){
        // casualNumber.push(Math.floor(Math.random()* 100));
        // };
        // console.log(casualNumber); 
        // Stampa su elemento Dom
        // number.innerHTML= casualNumber.join("-");

    // 2) inserire fuzione time(i numeri non si devono vedere)
        // Funzione   
        play.addEventListener("click", function(){ 
            for ( let i = 0; i < 5; i++){
                casualNumber.push(Math.floor(Math.random()* 100));
                };
                console.log(casualNumber); 
                // Stampa su elemento Dom
                number.innerHTML= casualNumber.join("-"); 
        setTimeout(numeri, 5000) // prova di 2 secondi
            function numeri (){
            document.getElementById("dom-numbers").classList.add("d-none");
            };
    // 3) prompt utente (chiedo di inserire i 5 numeri)  
            setTimeout(game, 6000 )
            function game(){
            const memoryUtent=[];   
            for (let i = 0; i < 5; i++){
                const utente= parseInt(prompt("inserisci i numeri che ti ricordi")) 
                memoryUtent.push(utente) 
                };
                // Creo due variabili come contatore
                let memories=0; 
                let notRemember= 0; 
                // Creo la funzione di comparazione 
                for (let i = 0; i < memoryUtent.length; i++){
                    if(casualNumber.includes( memoryUtent[i])){
                        memories++
                    }else{
                        notRemember++
                    } 
                //Stampo nel Dom il risultato 
                }document.getElementById("numeri").innerHTML=` Hai indovinato solo: ${memories}  di 5 numeri.  I numeri da ricordare erano: ${casualNumber.join(" ")}`;
        }; 
    });