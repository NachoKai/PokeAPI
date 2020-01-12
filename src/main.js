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
    shinyBtn = item.querySelector(`#shinyBtn`),
    leftBtn = item.querySelector(`#leftBtn`),
    rightBtn = item.querySelector(`#rightBtn`),
    sexBtn = item.querySelector(`#sexBtn`),
    pesoUser = document.getElementById("peso-usuario"),
    alturaUser = document.getElementById("altura-usuario"),
    resultadoPeso = document.getElementById("resultado-peso"),
    resultadoAltura = document.getElementById("resultado-altura"),
    comparaciones = document.getElementById("datos"),
    calcular = document.getElementById("calcular-usuario")


function calculaAltura() {
    if (condition) {

    }
}

function consultarPokemones() {
    let pokeID = Math.round(Math.random() * 493);
    consultarPokemon(pokeID);
    deleteBtns()
    showBtns()
}

function consultarPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(response => response.json()).then((pokemon) => crearPokemon(pokemon))
}

function showBtns() {
    const btns = document.querySelector("#btn");
    const div = document.createElement("div");
    div.className = "btns"
    comparaciones.className = "datos"
    document.getElementById("calcular-usuario").disabled = false;
    div.innerHTML = `
    <button class="btn btn--s" id="leftBtn" onclick="turnFn()">
    << </button> <button class="btn btn--s" id="shinyBtn" onclick="shinyBtnFn()">Shiny ON/OFF
    </button>
    <button class="btn btn--s" id="sexBtn" onclick="sexFn()"> ♂/♀ </button>
    <button class="btn btn--s" id="rightBtn" onclick="turnFn()"> >> </button>
    `
    btns.appendChild(div);
}

function deleteBtns() {
    const $btns = document.querySelectorAll(".btns")
    for (let i = 0; i < $btns.length; i++) {
        $btns[i].remove()
    }
    event.preventDefault();
}

function crearPokemon(pokemon) {
    item.style.borderStyle = "solid"
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
    nombre.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
    numero.textContent = `#${pokemon.id}`
    pesoPokemon.textContent = `Weight: ${Math.round((pokemon.weight) / 10)} kg.`
    alturaPokemon.textContent = `Height: ${Math.round((pokemon.height) * 10)} cm.`
    tipoA.textContent = `Type A: ${pokemon.types[0].type.name.charAt(0).toUpperCase() + pokemon.types[0].type.name.slice(1)}`
    if (pokemon.types[1] === undefined) {
        return tipoB.textContent = ''
    } else {
        tipoB.textContent = `Type B: ${pokemon.types[1].type.name.charAt(0).toUpperCase() + pokemon.types[1].type.name.slice(1)}`
    }
}

function shinyBtnFn() {
    if (img.className === 'poke-img') {
        muestraShiny()
    } else {
        muestraDefault()
    }
}

function turnFn() {
    if (img.className === 'poke-img') {
        muestraDefaultBack()
    } else {
        muestraDefault()
    }
}

function sexFn() {
    if (img.className === 'poke-img' && imgFem.getAttribute('src') !== "") {
        muestraDefaultFem()
    } else if (imgFem.getAttribute('src') === "") {
        muestraDefault()
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


calcular.onclick = () => {
    calculaPeso()
    calculaAltura()
}

function calculaPeso() {
    let pesoPkm = Number(pesoPokemon.textContent.match(/\d/g).join(''))
    let difPesoMas = Number(pesoUser.value) - pesoPkm
    let difPesoMenos = pesoPkm - Number(pesoUser.value)

    if (Number(pesoUser.value === "" || 0)) {
        resultadoPeso.innerText = 'Enter your weight!'
    } else if (Number(pesoUser.value) === pesoPkm) {
        resultadoPeso.innerText = `Your weight is the same as ${nombre.textContent} and`
    } else if (Number(pesoUser.value) < pesoPkm) {
        resultadoPeso.innerText = `You weight ${difPesoMenos}kg less than ${nombre.textContent} and`
    } else if (Number(pesoUser.value) > pesoPkm) {
        resultadoPeso.innerText = `You weight ${difPesoMas}kg more than ${nombre.textContent} and`
    } else {
        resultadoPeso.innerText = 'Enter your weight!'
    }
}

function calculaAltura() {
    let alturaPkm = Number(alturaPokemon.textContent.match(/\d/g).join(''))
    let difAlturaMas = Number(alturaUser.value) - alturaPkm
    let difAlturaMenos = alturaPkm - Number(alturaUser.value)

    if (Number(alturaUser.value === "" || 0)) {
        resultadoAltura.innerText = 'Enter your height!'
    } else if (Number(alturaUser.value) === alturaPkm) {
        resultadoAltura.innerText = `your height is the same as ${nombre.textContent}!`
    } else if (Number(alturaUser.value) < alturaPkm) {
        resultadoAltura.innerText = `you are ${difAlturaMenos}cm smaller!`
    } else if (Number(alturaUser.value) > alturaPkm) {
        resultadoAltura.innerText = `you are ${difAlturaMas}cm taller!`
    } else {
        resultadoAltura.innerText = 'Enter your height!'
    }
}

document.getElementById("current-year").innerHTML = new Date().getFullYear();