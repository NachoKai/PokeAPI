let listaPokemon = document.getElementById("lista-pokemon"),
    item = listaPokemon.querySelector(`#pokemon`),
    img = item.querySelector(`#poke-img`),
    imgBack = item.querySelector(`#poke-img-back`),
    imgShiny = item.querySelector(`#poke-img-shiny`),
    imgShinyBack = item.querySelector(`#poke-img-shiny-back`),
    imgFem = item.querySelector(`#poke-img-fem`),
    imgFemBack = item.querySelector(`#poke-img-fem-back`),
    imgShinyFem = item.querySelector(`#poke-img-shiny-fem`),
    imgShinyFemBack = item.querySelector(`#poke-img-shiny-fem-back`),
    nombre = item.querySelector(`#poke-name`),
    numero = item.querySelector(`#poke-number`),
    pesoPokemon = item.querySelector(`#poke-weight`),
    alturaPokemon = item.querySelector(`#poke-height`),
    tipoA = item.querySelector(`#poke-type-a`),
    tipoB = item.querySelector(`#poke-type-b`),
    abilities = item.querySelector(`#poke-abilities`),
    shinybutton = item.querySelector(`#shinybutton`),
    leftbutton = item.querySelector(`#leftbutton`),
    rightbutton = item.querySelector(`#rightbutton`),
    sexbutton = item.querySelector(`#sexbutton`),
    pesoUser = document.getElementById("peso-usuario"),
    alturaUser = document.getElementById("altura-usuario"),
    resultadoPeso = document.getElementById("resultado-peso"),
    resultadoAltura = document.getElementById("resultado-altura"),
    comparaciones = document.getElementById("datos"),
    calcular = document.getElementById("calcular-usuario"),
    prev = document.getElementById("prev"),
    next = document.getElementById("next")

function consultarPokemones() {
    let pokeID = Math.round(Math.random() * 493);
    consultarPokemon(pokeID);
    deletebuttons()
    showbuttons()
}

function consultarPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(response => response.json()).then((pokemon) => crearPokemon(pokemon))
}

function showbuttons() {
    const buttons = document.querySelector("#button");
    const div = document.createElement("div");
    div.className = "buttons"
    comparaciones.className = "datos"
    listaPokemon.className = "pokemon-list"
    document.getElementById("calcular-usuario").disabled = false;
    div.innerHTML = `
    <button class="button button--s" id="leftbutton" onclick="turnFn()">
    << </button> <button class="button button--s" id="shinybutton" onclick="shinybuttonFn()">Shiny ON/OFF
    </button>
    <button class="button button--s" id="sexbutton" onclick="sexFn()"> ♂/♀ </button>
    <button class="button button--s" id="rightbutton" onclick="turnFn()"> >> </button>
    `
    buttons.appendChild(div);
}

function deletebuttons() {
    const $buttons = document.querySelectorAll(".buttons")
    for (let i = 0; i < $buttons.length; i++) {
        $buttons[i].remove()
    }
    event.preventDefault();
}

function crearPokemon(pokemon) {
    img.src = pokemon.sprites.front_default
    img.className = 'poke-img'
    imgShiny.src = pokemon.sprites.front_shiny
    imgShiny.className = 'hidden'
    imgShinyBack.src = pokemon.sprites.back_shiny
    imgShinyBack.className = 'hidden'
    imgBack.src = pokemon.sprites.back_default
    imgBack.className = 'hidden'
    imgFem.src = pokemon.sprites.front_female
    imgFem.className = 'hidden'
    imgFemBack.src = pokemon.sprites.back_female
    imgFemBack.className = 'hidden'
    imgShinyFem.src = pokemon.sprites.front_shiny_female
    imgShinyFem.className = 'hidden'
    imgShinyFemBack.src = pokemon.sprites.back_shiny_female
    imgShinyFemBack.className = 'hidden'

    nombre.innerHTML = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
    numero.innerHTML = `  #${pokemon.id}`

    let desc = document.getElementById('desc');
    let abilities = pokemon.abilities;
    let moves = pokemon.moves;
    desc.innerHTML = "</p><p id='abty'><b>Abilities: </b></p>";
    for (let i = 0; i < abilities.length; i++) {
        abty.innerHTML += "<span class='badge badge-danger'>" + abilities[i].ability.name + "</span>&nbsp;";
    }
    abty.innerHTML += "<p><b>Moves: </b><p id='mvs'></p></p>";
    for (let i = 0; i < moves.length; i++) {
        if (i % 2 == 0)
            mvs.innerHTML += "<span class='badge badge-light'>" + moves[i].move.name + "</span>&nbsp;";
        else if (i % 3 == 0)
            mvs.innerHTML += "<span class='badge badge-info'>" + moves[i].move.name + "</span>&nbsp;";
        else if (i % 5 == 0)
            mvs.innerHTML += "<span class='badge badge-danger'>" + moves[i].move.name + "</span>&nbsp;";
        else
            mvs.innerHTML += "<span class='badge badge-success'>" + moves[i].move.name + "</span>&nbsp;";
    }

    pesoPokemon.innerHTML = `<b>Weight</b>: ${Math.round((pokemon.weight) / 10)} kg.`
    alturaPokemon.innerHTML = `<b>  Height</b>: ${Math.round((pokemon.height) * 10)} cm.`
    tipoA.innerHTML = `<b>Type A</b>: ${pokemon.types[0].type.name.charAt(0).toUpperCase() + pokemon.types[0].type.name.slice(1)}`
    if (pokemon.types[1] === undefined) {
        return tipoB.innerHTML = ''
    } else {
        tipoB.innerHTML = `  <b>Type B</b>: ${pokemon.types[1].type.name.charAt(0).toUpperCase() + pokemon.types[1].type.name.slice(1)}`
    }

    let stats = pokemon.stats;
    let ctx = document.getElementById('myChart').getContext('2d');
    let chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Speed', 'Special-Def', 'Special-Att', 'Defence', 'Attack', 'HP'],
            datasets: [{
                label: 'Stats:',
                backgroundColor: ['#C39BD3', '#76D7C4', '#F9E79F', '#F5B7B1', '#AED6F1', '#E5E7E9'],
                borderColor: ['#C39BD3', '#76D7C4', '#F9E79F', '#F5B7B1', '#AED6F1', '#E5E7E9'],
                data: [stats[0].base_stat, stats[1].base_stat, stats[2].base_stat, stats[3].base_stat, stats[4].base_stat, stats[5].base_stat]
            }]
        },
        options: {}
    });

}

function shinybuttonFn() {
    if (img.className === 'poke-img') {
        muestraShiny()
    } else if (img.className === 'hidden' && imgBack.className === 'poke-img') {
        muestraShinyBack()
    } else if (imgShinyBack.className === 'poke-img' && imgBack.className === 'hidden') {
        muestraDefaultBack()
    } else {
        muestraDefault()
    }
}

function turnFn() {
    if (img.className === 'poke-img') {
        muestraDefaultBack()
    } else if (img.className === 'hidden' && imgShiny.className === 'poke-img') {
        muestraShinyBack()
    } else if (img.className === 'hidden' && imgShinyBack.className === 'poke-img') {
        muestraShiny()
    } else if (imgFem.className === 'poke-img' && imgFem.getAttribute("src") !== "null" && imgFemBack.getAttribute("src") !== "null") {
        muestraDefaultBackFem()
    } else if (imgFem.className === 'poke-img' && imgFem.getAttribute("src") === "null") {
        muestraDefaultBack()
    } else if (imgFemBack.className === 'poke-img') {
        muestraDefaultFem()
    } else {
        muestraDefault()
    }
}

function sexFn() {
    if (img.className === 'poke-img' && imgFem.getAttribute("src") !== "null") {
        muestraDefaultFem()
    } else if (imgFem.getAttribute("src") === "null") {
        muestraDefault()
    } else if (img.className === 'hidden' && imgBack.className === 'poke-img' && imgFem.getAttribute("src") !== "null") {
        muestraDefaultBackFem()
    } else if (imgFemBack.className === 'poke-img') {
        muestraDefaultBack()
    } else {
        muestraDefault()
    }
}

function muestraDefault() {
    img.className = 'poke-img'
    imgBack.className = 'hidden'
    imgShiny.className = 'hidden'
    imgShinyBack.className = 'hidden'
    imgFem.className = 'hidden'
    imgFemBack.className = 'hidden'
    imgShinyFem.className = 'hidden'
    imgShinyFemBack.className = 'hidden'
}

function muestraShiny() {
    img.className = 'hidden'
    imgBack.className = 'hidden'
    imgShiny.className = 'poke-img'
    imgShinyBack.className = 'hidden'
    imgFem.className = 'hidden'
    imgFemBack.className = 'hidden'
    imgShinyFem.className = 'hidden'
    imgShinyFemBack.className = 'hidden'
}

function muestraDefaultBack() {
    img.className = 'hidden'
    imgBack.className = 'poke-img'
    imgShiny.className = 'hidden'
    imgShinyBack.className = 'hidden'
    imgFem.className = 'hidden'
    imgFemBack.className = 'hidden'
    imgShinyFem.className = 'hidden'
    imgShinyFemBack.className = 'hidden'
}

function muestraShinyBack() {
    img.className = 'hidden'
    imgBack.className = 'hidden'
    imgShiny.className = 'hidden'
    imgShinyBack.className = 'poke-img'
    imgFem.className = 'hidden'
    imgFemBack.className = 'hidden'
    imgShinyFem.className = 'hidden'
    imgShinyFemBack.className = 'hidden'
}

function muestraDefaultFem() {
    img.className = 'hidden'
    imgBack.className = 'hidden'
    imgShiny.className = 'hidden'
    imgShinyBack.className = 'hidden'
    imgFem.className = 'poke-img'
    imgFemBack.className = 'hidden'
    imgShinyFem.className = 'hidden'
    imgShinyFemBack.className = 'hidden'
}

function muestraDefaultBackFem() {
    img.className = 'hidden'
    imgBack.className = 'hidden'
    imgShiny.className = 'hidden'
    imgShinyBack.className = 'hidden'
    imgFem.className = 'hidden'
    imgFemBack.className = 'poke-img'
    imgShinyFem.className = 'hidden'
    imgShinyFemBack.className = 'hidden'
}

function muestraShinyFem() {
    img.className = 'hidden'
    imgBack.className = 'hidden'
    imgShiny.className = 'hidden'
    imgShinyBack.className = 'hidden'
    imgFem.className = 'hidden'
    imgFemBack.className = 'hidden'
    imgShinyFem.className = 'poke-img'
    imgShinyFemBack.className = 'hidden'
}

function muestraShinyBackFem() {
    img.className = 'hidden'
    imgBack.className = 'hidden'
    imgShiny.className = 'hidden'
    imgShinyBack.className = 'hidden'
    imgFem.className = 'hidden'
    imgFemBack.className = 'hidden'
    imgShinyFem.className = 'hidden'
    imgShinyFemBack.className = 'poke-img'
}

calcular.onclick = () => {
    calculaPeso()
    calculaAltura()
}

function calculaPeso() {
    let pesoPkm = Number(pesoPokemon.innerHTML.match(/\d/g).join(''))
    let difPesoMas = Number(pesoUser.value) - pesoPkm
    let difPesoMenos = pesoPkm - Number(pesoUser.value)

    if (Number(pesoUser.value === "" || 0)) {
        resultadoPeso.innerText = 'Enter your weight!'
    } else if (Number(pesoUser.value) === pesoPkm) {
        resultadoPeso.innerText = `Your weight is the same as ${nombre.innerHTML} and`
    } else if (Number(pesoUser.value) < pesoPkm) {
        resultadoPeso.innerText = `You are ${difPesoMenos}kg less heavy than ${nombre.innerHTML} and`
    } else if (Number(pesoUser.value) > pesoPkm) {
        resultadoPeso.innerText = `You are ${difPesoMas}kg heavier than ${nombre.innerHTML} and`
    } else {
        resultadoPeso.innerText = 'Enter your weight!'
    }
}

function calculaAltura() {
    let alturaPkm = Number(alturaPokemon.innerHTML.match(/\d/g).join(''))
    let difAlturaMas = Number(alturaUser.value) - alturaPkm
    let difAlturaMenos = alturaPkm - Number(alturaUser.value)

    if (Number(alturaUser.value === "" || 0)) {
        resultadoAltura.innerText = 'Enter your height!'
    } else if (Number(alturaUser.value) === alturaPkm) {
        resultadoAltura.innerText = `your height is the same as ${nombre.innerHTML}!`
    } else if (Number(alturaUser.value) < alturaPkm) {
        resultadoAltura.innerText = `you are ${difAlturaMenos}cm smaller!`
    } else if (Number(alturaUser.value) > alturaPkm) {
        resultadoAltura.innerText = `you are ${difAlturaMas}cm taller!`
    } else {
        resultadoAltura.innerText = 'Enter your height!'
    }
}

document.getElementById("current-year").innerHTML = new Date().getFullYear();


/*
Numeros por generacion:
I: 0-151
II: 152-251
III: 252-386
IV: 387-493
V: 494-649
VI: 650-721
VII: 722-809
*/