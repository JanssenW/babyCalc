const heroContainer = document.getElementById("heroContainer")
const heros = [];
var contador=0;


function urlGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

/*
function main(){

    data = urlGet("http://127.0.0.1:5000/get/vd")
    console.log(dolar)
    dolar = JSON.parse(data);
}*/

function getHeroData(hero) {
    const heroData = {
        investment: hero.attribute + 1,
        
    }

    const heroDataDisplay = `
    <div> Investment ($BUSD): <spam> ${heroData.investment} </spam></div>
    <div> Return per day ($Gold): <spam> ${heroData.investment} </spam></div>
    <div> Payback (days): <spam> ${heroData.investment} </spam></div>
    `
    return { heroData, heroDataDisplay }
}


function saveHero(id) {
    console.log('Button Clicked!', id)
    const heroCard = document.getElementById(`new-hero-${id}`)
    const inputs = heroCard.getElementsByTagName('input')
    const hero = { id }
    Array.from(inputs).forEach(input => { hero[input.name] = input.value });
    hero['mines'] = heroCard.getElementsByTagName('select').value
    const { heroData, heroDataDisplay } = getHeroData(hero)
    heroCard.getElementsByClassName('heroFooter')[0].innerHTML = heroDataDisplay
    heros.push({...hero, ...heroData })
    contador++;
    createHeroCard()
    
}


function deleteHero(id) {
    
    if (id == contador){

    }else{

    console.log('Deleting hero ' + id)
    const heroCard = document.getElementById(`new-hero-${id}`)
    heroContainer.removeChild(heroCard)

    
        }

}

function createHeroCard() {
   
    const newHero = document.createElement('div')
    newHero.setAttribute('class', 'heroCard')
    const newHeroId = contador
    newHero.setAttribute('id', `new-hero-${newHeroId}`)
        // Perhaps the proper way of doing this is using Fragments
    newHero.innerHTML = `
    <div class="heroHeader">
        <spam>Hero</spam>
        <svg onclick="deleteHero(${newHeroId})" viewBox="64 64 896 896" focusable="false" data-icon="delete" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path></svg>
    </div>
    <div class="heroBody">
        <form>
            <label for="mines">Mine</label>
            <select name="mines" id="mines">
                <option value="auto">Auto</option>
                <option value="part-time">Part Time Job</option>
                <option value="full-time">Full Time Job</option>
                <option value="legendary">Legendary Field</option>
            </select>
            <label for="level">Level</label>
            <input type="number" name="level" min=0>
            <label for="attribute">Main attribute value</label>
            <input type="number" name="attribute" min=0>
            <label for="gold>Gold amount to upgrade</label>
            <input type="number" name="gold" min=0>
        </form>
    </div>
    <div class="heroFooter">
        <button onclick="saveHero(${newHeroId})">Add</button>
    </div>
    `
    heroContainer.appendChild(newHero)
}

//main()
createHeroCard()