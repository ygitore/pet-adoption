const pet = [
    {
        Image: "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_weight_other/1800x1200_cat_weight_other.jpg?resize=600px:*",
        Name: 'Shure',
        Color: 'Grey',
        SpecialSkill: 'drink water without spilling.',
        TypeOfPet: 'Cat'        
    },
    {
        Image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
        Name: 'Whity',
        Color: 'Brown',
        SpecialSkill: 'tolerant of extremely hot and cold temperatures. ',
        TypeOfPet: 'Cat'
    },
    {
    Image: "https://icatcare.org/app/uploads/2018/06/Layer-1704-1920x840.jpg",
    Name: 'Ema',
    Color: 'White',
    SpecialSkill: 'stand up firmly.',
    TypeOfPet: 'Cat'
    },
    {
        Image: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12234558/Chinook-On-White-03.jpg",
        Name: 'Chihuahua',
        Color: 'Grey',
        SpecialSkill: 'scarring away predators and protecting their family.',
        TypeOfPet: 'Dog'
    },
    {
        Image: "https://mk0cesarswaykigy4yk3.kinstacdn.com/wp-content/uploads/2019/10/AdobeStock_190562703.jpeg",
        Name: 'Halaka',
        Color: 'White grey',
        SpecialSkill: 'beagles are explorers. They tend to “sing” along to any loud outside noises.',
        TypeOfPet: 'Dog'
    },
    {
        Image: "https://thenypost.files.wordpress.com/2019/12/dinosaur-feature.jpg?quality=80&strip=all",
        Name: 'Velociraptor',
        Color: 'Grey',
        SpecialSkill: 'walk on two feet and could run very fast',
        TypeOfPet: 'Dinos'
    },
    {
        Image: "https://lh3.googleusercontent.com/proxy/ATXmbVmBTtLQz60wJCcwoCO0dJjCk0BrDTPOyq2I7GgZ-F2a4FEsMK2Bd-KlYehs8AAcICdQRyFnPucjUCuA7-rJynC0gNdH2_1wIkONvXs7jB3OaEztYqLT9ivFf_6VukViZ-jq",
        Name: 'Pterodactyl',
        Color: 'Brown',
        SpecialSkill: 'floppy flying.',
        TypeOfPet: 'Dinos'
    }
];
export const usePet = () => {
    return pet.slice()
}