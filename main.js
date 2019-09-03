
var pet = [
    {
        Image: "<img src = './images/Britskorthaar.JPG'>",
        Name: "Cat",
        Color: 'grey',
        SpecialSkill: 'In 1871 the British Shorthair competed for the first time in The Crystal Palace where it broke records of popularity, surpassing the Persian cat.',
        TypeOfPet: 'Britskorthaar'
    },
    {
    Image: "<img src = './images/White_Persian_Cat.JPG'>",
    Name: "Cat",
    Color: 'white',
    SpecialSkill: 'White Persian Cat, unlike most other cat breeds, like to have their feet planted firmly on terra firma, and do not aspire to reach great heights.',
    TypeOfPet: 'White_Persian_Cat'
    },
    {
        Image: "<img src = './images/Chihuahua.JPG'>",
        Name: "Dog",
        Color: 'white',
        SpecialSkill: 'Chihuahuas are quite capable of scarring away predators and protecting their family. In 2007, a ferocious five-pound Chihuahua named Zoey protected her owner\"s 1-year-old grandson from a rattlesnake by jumping in front of the serpent.',
        TypeOfPet: 'Chihuahua'
    },
    {
        Image: "<img src = './images/beaggle.JPG'>",
        Name: "Dog",
        Color: 'white grey',
        SpecialSkill: 'Beagles are explorers, and for this reason, it can be risky to let them off of their leash. Again, once Beagles are tracking a scent, they will not give up. Along with their deep howls, they are known for having “musical voices.” They tend to “sing” along to any loud outside noises such as sirens or people passing by their house.',
        TypeOfPet: 'beagle'
    },
    {
        Image: "<img src = './images/Velociraptor.JPG'>",
        Name: "Dinos",
        Color: 'grey',
        SpecialSkill: 'This dinosaur walked on two feet (bipedal) and could run very fast, perhaps up to 40 miles per hour. It had 80 very sharp teeth and sharp claws on its feet and hands. One of its claws on its feet was especially long and dangerous. This middle claw was up to 3 inches long and likely was used to tear into prey and deliver the killing blow. ',
        TypeOfPet: 'Velociraptor'
    },
    {
        Image: "<img src = './images/Pterodactyl.JPG'>",
        Name: "Dinos",
        Color: 'grey',
        SpecialSkill: 'Pterodactylus, like other pterosaurs, was capable of ‘flapping flight’. This means that it could power itself through the air by flapping its wings – just like (most) modern birds. This ability set it apart from earlier winged reptiles that could only glide.',
        TypeOfPet: 'Pterodactyl'
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
        domString += `<div class= "pet-main">
                        <div class = "one"><p>${element.Name}</p></div>
                        <div class = "two"><p>${element.Image}</p></div>
                        <div class = "three"><p>${element.Color}</p></div>
                        <div class = "four"><p>${element.SpecialSkill}</p></div>
                        <div class = "five"><p>${element.TypeOfPet}</p></div>
                        </div>`;
    }

    printToDom('pet-cage', domString);
}

var buttonClick = (e)=>{
    const petsId = e.target.id;
    const selectPets = [];
    for (let i = 0; i < pet.length; i++) {
        const p = pet[i];
        if(p.Name === petsId){
            selectPets.push(p);
        }        
    }
    petBuilder(selectPets);
};



var animalBuilder = (petArr)=>{
    var domString = '';
    for (let i = 0; i < petArr.length; i++) {
        const element = petArr[i];
        domString += `<div class= "pet-main">`;
        domString += `<p>${element.Name}</p>`;
        domString += `<p>${element.Image}</p>`;
        domString += `<p>${element.Color}</p>`;
        domString += `<p>${element.SpecialSkill}</p>`;
        domString += `<p>${element.TypeOfPet}</p>
        </div>`;
    }
    printToDom('pet-cage', domString);
}
var buttonClickAll = ()=>{
    animalBuilder(pet);        
};
document.getElementById('all').addEventListener('click', buttonClickAll);
document.getElementById('Cat').addEventListener('click', buttonClick);
document.getElementById('Dog').addEventListener('click', buttonClick);
document.getElementById('Dinos').addEventListener('click', buttonClick);
