var pet = [
    {
        Image: "<img src = './images/british-short-hair.png'>",
        Name: 'Shure',
        Color: 'Grey',
        SpecialSkill: 'drink water without spilling.',
        TypeOfPet: 'Cat'        
    },
    {
        Image: "<img src = './images/Sand-Cat.JPG'>",
        Name: 'Whity',
        Color: 'Brown',
        SpecialSkill: 'tolerant of extremely hot and cold temperatures. ',
        TypeOfPet: 'Cat'
    },
    {
    Image: "<img src = './images/White_Persian_Cat.JPG'>",
    Name: 'Ema',
    Color: 'White',
    SpecialSkill: 'stand up firmly.',
    TypeOfPet: 'Cat'
    },
    {
        Image: "<img src = './images/mydog.JPG'>",
        Name: 'Chihuahua',
        Color: 'Grey',
        SpecialSkill: 'scarring away predators and protecting their family.',
        TypeOfPet: 'Dog'
    },
    {
        Image: "<img src = './images/beaggle.JPG'>",
        Name: 'Halaka',
        Color: 'White grey',
        SpecialSkill: 'beagles are explorers. They tend to “sing” along to any loud outside noises.',
        TypeOfPet: 'Dog'
    },
    {
        Image: "<img src = './images/dino.JPG'>",
        Name: 'Velociraptor',
        Color: 'Grey',
        SpecialSkill: 'walk on two feet and could run very fast',
        TypeOfPet: 'Dinos'
    },
    {
        Image: "<img src = './images/Pterodactyl.JPG'>",
        Name: 'Pterodactyl',
        Color: 'Brown',
        SpecialSkill: 'floppy flying.',
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
        domString += `<div class= "pet-info">
                        <div class = "pet-name"><p>${element.Name}</p></div>
                        <div class = "pet-image"><p>${element.Image}</p></div>
                        <div class = "pet-color"><p>Color: ${element.Color}</p></div>
                        <div class = "pet-special-skill"><p>Special Skill: ${element.SpecialSkill}</p></div>
                        <div class = "type-of-pet"><p>Type of Pet: ${element.TypeOfPet}</p></div>
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