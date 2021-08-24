// declaration du tableau
let tableau = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0],
    [0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 2, 0],
    [0, 2, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 0],
    [0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0],
    [0, 1, 1, 0, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 1, 1, 0],
    [0, 0, 0, 0, 2, 0, 2, 0, 0, 1, 0, 0, 2, 0, 2, 0, 0, 0, 0],
    [2, 2, 2, 2, 2, 2, 2, 0, 1, 1, 1, 0, 2, 2, 2, 2, 2, 2, 2],
    [0, 0, 0, 0, 2, 0, 2, 0, 0, 1, 0, 0, 2, 0, 2, 0, 0, 0, 0],
    [0, 1, 1, 0, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 1, 1, 0],
    [0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0],
    [0, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 0],
    [0, 0, 2, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 2, 0, 0],
    [0, 2, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 0],
    [0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

let boxMap = document.getElementById('boxMap')

//===============================================//
//Affichage de la map//
function Show() {
    boxMap.innerHTML = '';
    let mur;
    let sol;
    let bonbon;

    for (y = 0; y < 22; y++) {
        for (x = 0; x < 19; x++) {
            if (tableau[y][x] == 0) {
                mur = document.createElement('img');
                mur.src = './IMG/mur.gif';
                mur.style.gridArea = (y + 1) + '/' + (x + 1);
                boxMap.appendChild(mur);
            } else if (tableau[y][x] == 1) {
                sol = document.createElement('img');
                sol.src = './IMG/sol.gif';
                sol.style.gridArea = (y + 1) + '/' + (x + 1);
                boxMap.appendChild(sol);
            } else {
                bonbon = document.createElement('img');
                bonbon.src = './IMG/bonbon.gif';
                bonbon.style.gridArea = (y + 1) + '/' + (x + 1);
                boxMap.appendChild(bonbon);
            }
        }
    }
}

//=============================================//
//Affichage de PacMan//

// declaration de l'objet pacman
let pacman = {
    x: 5,
    y: 2,
    direction: 1
}

function ShowPacman() {

    let pacmanEle = document.createElement('img');
    pacmanEle.src = './IMG/pacman4.gif';
    pacmanEle.style.gridArea = pacman.y + '/' + pacman.x;
    boxMap.appendChild(pacmanEle);
}

//fonction qui afficher toutes les autres fonction// 
function Tour() {
    Show();
    BougePacman();
    Collision();
    Manger();
    Win();
    ShowPacman();
}

//fonction pour bouger PacMan//

function BougePacman() {
    if (pacman.direction == 1) {
        pacman.y++
    }
    if (pacman.direction == 2) {
        pacman.y--
    }
    if (pacman.direction == 3) {
        pacman.x++
    }
    if (pacman.direction == 4) {
        pacman.x--
    }
    if (pacman.x > 19) {
        pacman.x = 1
    }
    if (pacman.y > 22) {
        pacman.y = 1
    }
    if (pacman.x < 1) {
        pacman.x = 19
    }
    if (pacman.y < 1) {
        pacman.y = 22
    }


}

//fonction pour gérer les collision avec les murs //

function Collision() {

    if (tableau[pacman.y - 1][pacman.x - 1] == 0) {

        if (pacman.direction == 1) {
            pacman.y--
        }
        if (pacman.direction == 2) {
            pacman.y++
        }
        if (pacman.direction == 3) {
            pacman.x--
        }
        if (pacman.direction == 4) {
            pacman.x++
        }
    }

}


//Fonction pour que PacMan mange les bonbons//
function Manger() {
    if (tableau[pacman.y - 1][pacman.x - 1] == 2) {
        tableau[pacman.y - 1][pacman.x - 1] = 1
    }
}

function Win() {
   
}

function Score() {

}

//fonction pour gerer les touches// 

function Touche(event) {

    if (event.code == "ArrowUp") {
        pacman.direction = 2
    } else if (event.code == "ArrowDown") {
        pacman.direction = 1
    } else if (event.code == "ArrowLeft") {
        pacman.direction = 4
    } else if (event.code == "ArrowRight") {
        pacman.direction = 3
    }

}

//lecture des touches + interval d'actualisation du jeu//
document.body.addEventListener("keydown", Touche)
setInterval(Tour, 250);