// fonction ajout
const addBtn = document.querySelector('#btn');
const taskCard = document.querySelector(".todoCard");
const delBtn = document.querySelector('.delBtn');
const tasksContainer = document.querySelector("#todoCards");


const childDivs = tasksContainer.querySelectorAll("div");


// childDivs.length =1;


/* Ajout d'un écouteur dévenement sur le bouton pour
appeler une fonction ajout */
addBtn.addEventListener('click', addTask); // add EvenrListener agit en ajoutant une fonction ou un objet.

//Ajout d'évenement sur le bouton pour appeler une fonction supression

delBtn.addEventListener('click', function(){
    deleteTask(taskCard);
}); 


// Créer Fonction
function addTask(){
    const newTask = taskCard.cloneNode(true) //copie du noeud sur lequel elle a été appelée
    const newDelBtn = newTask.querySelector('.delBtn')
    const newTextArea = newTask.querySelector('.task')
    
    
    var targetDiv = document.getElementById('displayCount');
    
    // var content = document.createTextNode();   
        // const newCardNumberbis = document.querySelectorAll('.cardNumber')
      
childDivs.length++;
console.log(childDivs.length)
var content = document.getElementById()

        newTextArea.value ="New Task"
        newDelBtn.addEventListener('click', function(){
            deleteTask (newTask);
        });



        tasksContainer.appendChild(newTask) //ajout d'un noeud à la fin de la liste des enfants d'un noeud parent
       
        
        
    
    }

    
    function deleteTask(task) {
        task.remove();
    }


