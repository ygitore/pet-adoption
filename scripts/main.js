
var printToDom = (divId, toPrint)=>{
    document.getElementById(divId).innerHTML = toPrint; 
};
var petBuilder = (petArr)=>{
    var domString = '';
    for (let i = 0; i < petArr.length; i++) {
        const element = petArr[i];
        domString += `<div class= "pet-info">
                        <header>
                            <div class = "pet-name"><p>${element.Name}</p></div>  
                        </header>         
                        <main>       
                            <div class = "pet-image"><p>${element.Image}</p></div>
                            <div class = "pet-color"><p>Color: ${element.Color}</p></div>
                            <div class = "pet-special-skill"><p>Special Skill: ${element.SpecialSkill}</p></div>
                        </main>
                        <footer>
                            <div class = "type-of-pet"><p>Type of Pet: ${element.TypeOfPet}</p></div>
                        </footer>
                    </div>`;
    }
    printToDom('pet-container', domString);
}
var buttonClick = (e)=>{
    const petsId = e.target.id;
    const selectPets = [];
    for (let i = 0; i < pet.length; i++) {
        const p = pet[i];
        if(p.TypeOfPet.toLocaleLowerCase() === petsId.toLocaleLowerCase()){
            selectPets.push(p);
        }        
    }
    petBuilder(selectPets);
};
var buttonClickAll = ()=>{
    petBuilder(pet);        
};
document.getElementById('all').addEventListener('click', buttonClickAll);
document.getElementById('Cat').addEventListener('click', buttonClick);
document.getElementById('Dog').addEventListener('click', buttonClick);
document.getElementById('Dinos').addEventListener('click', buttonClick);