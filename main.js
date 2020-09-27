const buttons = document.querySelectorAll("button");


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        const joueur = buttons[i].innerHTML;
        const robot = buttons[Math.floor(Math.random() * buttons.length)]
            .innerHTML;
        let results = "";
        if (joueur === robot) {
            results = "égalité";
            let col = document.querySelector('.result')
            col.style.background="#FFCE44";
            col.style.boxShadow="0 0 10px #FFCE44, 0 0 10px #FFCE44";
        }
        else if
            ((joueur === "Pierre" && robot === "Ciseaux") ||
            (joueur === "Feuille" && robot === "Pierre") ||
            (joueur === "Ciseaux" && robot === "Feuille")) {
            results = "Gagné";
            let col = document.querySelector('.result')
            col.style.background="#0F9D58";
            col.style.boxShadow="0 0 10px #0F9D58, 0 0 10px #0F9D58";
            
           
        }
        else {
            results = "Perdu";
            let col = document.querySelector('.result')
            col.style.background="#DB4437";
            col.style.boxShadow="0 0 10px #DB4437, 0 0 10px #DB4437";
        };
        document.querySelector(".result--joueur").innerHTML = `
        Player 1 : ${joueur} 
        `;
        document.querySelector(".result--robot").innerHTML = `
        Player 2 : ${robot} </br>
        `;
        document.querySelector(".result").innerHTML = `
        ${results}`;

    });
}  
