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
    peso = item.querySelector(`#poke-weight`),
    altura = item.querySelector(`#poke-height`),
    tipoA = item.querySelector(`#poke-type-a`),
    tipoB = item.querySelector(`#poke-type-b`),
    shinyBtn = item.querySelector(`#shinyBtn`),
    leftBtn = item.querySelector(`#leftBtn`),
    rightBtn = item.querySelector(`#rightBtn`),
    sexBtn = item.querySelector(`#sexBtn`)

function consultarPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(function (response) {
            response.json()
                .then(function (pokemon) {
                    crearPokemon(pokemon)
                })
        })
}

function consultarPokemonStats(id) {
    fetch(`https://pokeapi.co/api/v2/stat/${id}`)
        .then(function (response) {
            response.json()
                .then(function (pokemon) {
                    crearPokemon(pokemon)
                })
        })
}

function consultarPokemones() {
    let pokeID = Math.round(Math.random() * 493)
    consultarPokemon(pokeID)
    consultarPokemonStats(pokeID)
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
    nombre.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
    numero.textContent = `#${pokemon.id}`
    peso.textContent = `Weight: ${Math.round((pokemon.weight)/10)} kg.`
    altura.textContent = `Height: ${Math.round((pokemon.height)*10)} cm.`
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
    if (imgFem.src === 'https://nachokai.github.io/PokeAPI/null') {
        muestraDefault()
    }
    if (img.className === 'poke-img') {
        muestraDefaultFem()
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