import { usePet } from "./PetProvider.js"
import { Pet } from "./Pet.js"

const AllContentTarget = document.querySelector('#All')
const CatContentTarget = document.querySelector('#Cat')
const DogContentTarget = document.querySelector('#Dog')
const DinoContentTarget = document.querySelector('#Dinos')
const PetContentTarget = document.querySelector('#pet-id')

PetContentTarget.addEventListener('click', event => {
    const petList = usePet()
    const petRetrieved = []
    if(event.target.dispatchEvent.startsWith("All")){
        petRetrieved = petList.map(pet => Pet(pet)).join("")
    }
})