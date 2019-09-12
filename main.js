var pet = [
    {
        Image: "<img src = './images/british-short-hair.png'>",
        Name: "Shure",
        Color: 'grey',
        SpecialSkill: 'Can run very fast.',
        TypeOfPet: 'Cat'        
    },
    {
        Image: "<img src = './images/Sand-Cat.JPG'>",
        Name: "Whity",
        Color: 'brown',
        SpecialSkill: 'tolerant of extremely hot and cold temperatures. ',
        TypeOfPet: 'Cat'
    },
    {
    Image: "<img src = './images/White_Persian_Cat.JPG'>",
    Name: "Ema",
    Color: 'White',
    SpecialSkill: 'can stand up firmly.',
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
        SpecialSkill: 'Capable of flying.',
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
                        <div class = "pet-color"><p><b>Color:</b> ${element.Color}</p></div>
                        <div class = "pet-special-skill"><p><b>Special Skill:</b> ${element.SpecialSkill}</p></div>
                        <div class = "type-of-pet"><p><b>Type of Pet:</b> ${element.TypeOfPet}</p></div>
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