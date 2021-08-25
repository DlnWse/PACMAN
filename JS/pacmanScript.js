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
    [0, 1, 1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 1, 1, 0],
    [0, 0, 0, 0, 2, 0, 2, 0, 0, 1, 0, 0, 2, 0, 2, 0, 0, 0, 0],
    [2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2],
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
let param = document.getElementById('score')
let score = 0;
let Win = document.getElementById('Win') ;
let Loose = document.getElementById('Loose') ;
let scoreLabel = document.createElement('label');
let dots = -1;
//===============================================//

function updateScore() {
    scoreLabel.innerHTML = score;
}

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
                mur.src = './IMG/bleu.jpg';
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
    //Affichage du score
    updateScore();
    document.getElementById('TextLabel').appendChild(scoreLabel);
   
}

//=============================================//
//Affichage de PacMan//

// declaration de l'objet pacman
let pacman = {
    x: 10,
    y: 11,
    direction: 0
}

function ShowPacman() {

    let pacmanEle = document.createElement('img');
    pacmanEle.src = './IMG/pacman4.gif';
    pacmanEle.style.gridArea = pacman.y + '/' + pacman.x;
    boxMap.appendChild(pacmanEle);
}

//declaration des fantomes//
let TableauFantome = [{
        x: 2,
        y: 2,
        direction: 1
    },

    {
        x: 18,
        y: 21,
        direction: 1
    },
    {
        x: 2,
        y: 21,
        direction: 1
    },
    {
        x: 18,
        y: 2,
        direction: 1
    }
]



function ShowFantome(num) {
    let boxMap = document.getElementById('boxMap')
    let fantomeEle = document.createElement('div');
    fantomeEle.classList.add('fantome' + num);
    fantomeEle.style.gridArea = TableauFantome[num].y + '/' + TableauFantome[num].x;
    boxMap.appendChild(fantomeEle);
}



//fonction qui afficher toutes les autres fonction// 
function Tour() {
    BougePacman();
    Collision();
    Manger();
    Show();
    ShowPacman();

    for (y = 0; y < TableauFantome.length; y++) {
        ShowFantome(y);
        BougeFantome(y);
        CollisionFantome(y)
    }
    Gain();
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

function BougeFantome(num) {

    if (TableauFantome[num].direction == 1) {
        TableauFantome[num].y++
    }
    if (TableauFantome[num].direction == 2) {
        TableauFantome[num].y--
    }
    if (TableauFantome[num].direction == 3) {
        TableauFantome[num].x++
    }
    if (TableauFantome[num].direction == 4) {
        TableauFantome[num].x--
    }
    if (TableauFantome[num].x > 19) {
        TableauFantome[num].x = 1
    }
    if (TableauFantome[num].y > 22) {
        TableauFantome[num].y = 1
    }
    if (TableauFantome[num].x < 1) {
        TableauFantome[num].x = 19
    }
    if (TableauFantome[num].y < 1) {
        TableauFantome[num].y = 22
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
    for (num = 0; num < TableauFantome.length; num++) {


        if (TableauFantome[num].y == pacman.y && TableauFantome[num].x == pacman.x) {
           let PerduPacman = document.body.appendChild(document.createTextNode(' Vous avez Perdu ! PacMan s\' est suicidé ! '))
            document.getElementById('Loose').appendChild(PerduPacman);
            clearInterval(Interval)
        }

    }
}

function CollisionFantome(num) {

    if (tableau[TableauFantome[num].y - 1][TableauFantome[num].x - 1] == 0) {

        if (TableauFantome[num].direction == 1) {
            TableauFantome[num].y--
        }
        if (TableauFantome[num].direction == 2) {
            TableauFantome[num].y++
        }
        if (TableauFantome[num].direction == 3) {
            TableauFantome[num].x--
        }
        if (TableauFantome[num].direction == 4) {
            TableauFantome[num].x++
        }
        TableauFantome[num].direction = Math.round(Math.random() * 3) % 4 + 1;

        if (TableauFantome[num].y == pacman.y && TableauFantome[num].x == pacman.x) {
            document.body.appendChild(document.createTextNode(' Vous avez Perdu ! Les fantomes vous ont tué !'))
            clearInterval(Interval)
        }
    }

}




//Fonction pour que PacMan mange les bonbons//
function Manger() {
    if (tableau[pacman.y - 1][pacman.x - 1] == 2) {
        tableau[pacman.y - 1][pacman.x - 1] = 1
        score += 10;
        dots--;
    }
}

function Points() {
    dots = 0;
    for (y = 0; y < 22; y++) {
        for (x = 0; x < 19; x++) {

            if (tableau[y][x] == 2) {
                dots++;
            }

        }
    }
}

function Gain() {
    if (dots == 0) {
        document.getElementById('Win').appendChild(document.createTextNode('Vous avez Gagné !'));
        clearInterval(Interval)
    }

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
Points();
let Interval = setInterval(Tour, 200);