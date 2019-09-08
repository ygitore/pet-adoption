var pet = [
    {
        Image: "<img src = './images/Britskorthaar.JPG'>",
        Name: "Britskorthaar",
        Color: 'grey',
        SpecialSkill: 'Can run very fast.',
        TypeOfPet: 'Cat'
    },
    {
    Image: "<img src = './images/White_Persian_Cat.JPG'>",
    Name: "White_Persian_Cat",
    Color: 'White',
    SpecialSkill: 'White Persian Cat can stand firmly on terra firma, and do not aspire to reach great heights.',
    TypeOfPet: 'Cat'
    },
    {
        Image: "<img src = './images/mydog.JPG'>",
        Name: "Chihuahua",
        Color: 'Grey',
        SpecialSkill: 'Chihuahuas are quite capable of scarring away predators and protecting their family.',
        TypeOfPet: 'Dog'
    },
    {
        Image: "<img src = './images/beaggle.JPG'>",
        Name: "Beagle",
        Color: 'white grey',
        SpecialSkill: 'Beagles are explorers. They tend to “sing” along to any loud outside noises.',
        TypeOfPet: 'Dog'
    },
    {
        Image: "<img src = './images/dino.JPG'>",
        Name: "Velociraptor",
        Color: 'Grey',
        SpecialSkill: 'This dinosaur walked on two feet (bipedal) and could run very fast',
        TypeOfPet: 'Dinos'
    },
    {
        Image: "<img src = './images/Pterodactyl.JPG'>",
        Name: "Pterodactyl",
        Color: 'Brown',
        SpecialSkill: 'Pterodactylus was capable of ‘flapping flight.',
        TypeOfPet: 'Dinos'
    }
];
var printToDom = (divId, toPrint)=>{
    document.getElementById(divId).innerHTML = toPrint; 
};
var petBuilder = (petArr)=>{
    var domString = '';
    for (let i = 0; i < petArr.length; i++) {
        const element = petArr[i];
        /* pet-main is flexbox item*/
        domString += `<div class= "pet-info">
                        <div class = "two"><p>${element.Image}</p></div>
                        <div class = "one"><p>${element.Name}</p></div>
                        <div class = "three"><p>${element.Color}</p></div>
                        <div class = "four"><p>${element.SpecialSkill}</p></div>
                        <div class = "five"><p>${element.TypeOfPet}</p></div>
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
var animalBuilder = (petArr)=>{
    var domString = '';
    for (let i = 0; i < petArr.length; i++) {
        const element = petArr[i];
        domString += `<div class= "pet-info">`;        
        domString += `<p>${element.Image}</p>`;
        domString += `<p>${element.Name}</p>`;
        domString += `<p>${element.Color}</p>`;
        domString += `<p>${element.SpecialSkill}</p>`;
        domString += `<p>${element.TypeOfPet}</p>
        </div>`;
    }
    printToDom('pet-container', domString);
}
var buttonClickAll = ()=>{
    animalBuilder(pet);        
};
document.getElementById('all').addEventListener('click', buttonClickAll);
document.getElementById('Cat').addEventListener('click', buttonClick);
document.getElementById('Dog').addEventListener('click', buttonClick);
document.getElementById('Dinos').addEventListener('click', buttonClick);