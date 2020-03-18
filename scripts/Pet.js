export const Pet = petObject => {
    return `<section class="pet-info">
        <h4>${petObject.Name}</h4>
        <div>
            <img src = "${petObject.Image}">
        </div>
        <div>Color: ${petObject.Color}</div>
        <div>Type Of Pet: ${petObject.TypeOfPet}</div>
        <div>${petObject.SpecialSkill}</div>
    </section>
    `
}