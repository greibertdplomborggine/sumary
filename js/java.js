//Variables

let resultComponent = document.querySelector('.result-component');
let stateRange = document.getElementById('state-range');
let statusRandom = document.getElementById('status');
let paragraph = document.getElementById ('result-paragraph');
let numbersContainer = document.getElementById('numbers-container');

//variables sumary setion

let reaction = document.getElementById('reaction');
let memory = document.getElementById('memory');
let verbal = document.getElementById('verbal');
let visual = document.getElementById('visual');
let buttonContinue = document.getElementById('.button');

//mostrar cuando se haya cargado la pagina "mostrar:"



function randomValues(){
    let values = [];

    for(let i = 1; i <= 4; i ++){
        randomNumbers = Math.round(Math.random()* 100);
        values.push(randomNumbers)

    }
    console.log(values)
    values.forEach((value,index) =>{
        switch(index){
            case 0:
                reaction.innerText = value + " / 100";
                break;
            case 1:
                memory.innerText = value + " / 100";
                break;
            case 2:
                verbal.innerText = value + " / 100";
                break;
            case 3:
                visual.innerText = value + " / 100";
            break;
                default:
                    'todo mal'
        }
    })
    //sumar valores para despues sacar la media "sumar:unknown word"
    const media = values.reduce((valuePrevious, currentvalue) =>{
        return valuePrevious + currentvalue; 
    }, 0);

   const result =  Math.round (media / 4);

   if(result >= 75){
    resultComponent.classList.add('result-component');
    numbersContainer.classList.add('numbers');
       numbersContainer.classList.remove('result-component-warning', 'result-component-danger');
    stateRange.innerText = result;
    statusRandom.innerText = 'Excelente';
    paragraph.innerText = 'Felicidades eres una persona con excelente materia'
    
}
   if(result <= 74 && result>= 43){
    resultComponent.classList.add('result-component-warning');
       numbersContainer.classList.add('numbers-warning');
       numbersContainer.classList.remove('result-component', 'result-component-danger');
    stateRange.innerText = result;
    statusRandom.innerText = 'Normal';
    paragraph.innerText = 'estas en un rango normal de personas'
    
}
   if(result <= 42){
    resultComponent.classList.add('result-component-danger');
    numbersContainer.classList.add('numbers-danger');
    numbersContainer.classList.remove('result-component', 'result-component-warning');
    stateRange.innerText = result;
    statusRandom.innerText = 'Grave';
    paragraph.innerText = 'Estas rango grave y debes revisar tus valores'
    
}
 

}
window.addEventListener('load', randomValues);