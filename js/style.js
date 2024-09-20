/* Fonction d'Ajout */
const addBtn = document.querySelector('#btn');
const taskCard = document.querySelector(".todoCard");
const delBtn = document.querySelector('.delBtn');
const tasksContainer = document.querySelector("#todoCards");
// getElementById : Renvoie un objet élement représentant l'élément dont la propriété id correspond à la chaîne de caractères spécifiée.
var targetDiv = document.getElementById('displayCount'); 
var childDivs = tasksContainer.querySelectorAll("div");
var content = childDivs.length
// innerHtml : Permet de remplacer aisément le contenu existant d'un élément par un nouveau contenu.
targetDiv.innerHTML = content

/* Ajout d'un écouteur dévenement sur le bouton pour appeler une fonction ajout */
addBtn.addEventListener('click', addTask); 

/* Ajout d'évenement sur le bouton pour appeler une fonction supression */
delBtn.addEventListener('click', function(){
    deleteTask(taskCard);
}); 

/* Création Fonction */
// add : Ajout d'élément'.
function addTask(){
    // cloneNode : Copie du noeud sur lequel elle a été appelée.
    const newTask = taskCard.cloneNode(true) 
    // querySelector : Retourne le premier élément dans le document correspondant au sélecteur.
    const newDelBtn = newTask.querySelector('.delBtn') 
    const newTextArea = newTask.querySelector('.task')
    // querySelectorAll : Renvoie une nodelist statique représentant une liste des éléments du document qui correspondent au groupe de sélecteurs spécifiés.
    childDivs = tasksContainer.querySelectorAll("div");
    content = childDivs.length +1
    targetDiv.innerHTML = content

        newTextArea.value ="New Task"
        // addEventListener : Agit en ajoutant une fonction ou un objet.
        newDelBtn.addEventListener('click', function(){
            deleteTask (newTask);
        })
        // appenChild : Ajout d'un noeud à la fin de la liste des enfants d'un noeud parent.
        tasksContainer.appendChild(newTask)  
    }

    // delete : Suppression d'élément.
    function deleteTask(task) {
        task.remove();

        childDivs = tasksContainer.querySelectorAll("div");
        content = childDivs.length
        targetDiv.innerHTML = content
    }


