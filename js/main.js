let listaPokemon = document.getElementById("lista-pokemon"),
    item = listaPokemon.querySelector(`#pokemon`),
    imagen = item.querySelector(`#poke-img`),
    imagenShiny = item.querySelector(`#poke-img-shiny`),
    imagenBack = item.querySelector(`#poke-imgBack`),
    imagenShinyBack = item.querySelector(`#poke-img-shinyBack`),
    nombre = item.querySelector(`#poke-name`),
    numero = item.querySelector(`#poke-number`),
    peso = item.querySelector(`#poke-weight`),
    altura = item.querySelector(`#poke-height`),
    tipoA = item.querySelector(`#poke-type-a`),
    tipoB = item.querySelector(`#poke-type-b`),
    shinyBtn = item.querySelector(`#shinyBtn`),
    left = item.querySelector(`#leftBtn`),
    right = item.querySelector(`#rightBtn`)

function consultarPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(function (response) {
            response.json()
                .then(function (pokemon) {
                    crearPokemon(pokemon)
                })
        })
}

function consultarPokemones() {
    let primerId = Math.round(Math.random() * 351)
    consultarPokemon(primerId, 1)
}

function crearPokemon(pokemon) {
    imagen.src = pokemon.sprites.front_default
    imagen.className = 'poke-img'

    imagenShiny.src = pokemon.sprites.front_shiny
    imagenShiny.className = 'hidden'

    imagenShinyBack.src = pokemon.sprites.back_shiny
    imagenShinyBack.className = 'hidden'

    imagenBack.src = pokemon.sprites.back_default
    imagenBack.className = 'hidden'

    nombre.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
    numero.textContent = `#${pokemon.id}`
    peso.textContent = `Weight: ${Math.round((pokemon.weight)/10)} kg.`
    altura.textContent = `Height: ${Math.round((pokemon.height)*10)} cm.`

    // let generation = item.querySelector(`#poke-generation`)
    // generation.textContent = `Generation: ${pokemon.generation.name} `
    // let descripcion = item.querySelector(`#poke-description`)
    // descripcion.textContent = `Description: `

    tipoA.textContent = `Type A: ${pokemon.types[0].type.name.charAt(0).toUpperCase() + pokemon.types[0].type.name.slice(1)}`
    if (pokemon.types[1] === undefined) {
        return tipoB.textContent = ''
    } else {
        tipoB.textContent = `Type B: ${pokemon.types[1].type.name.charAt(0).toUpperCase() + pokemon.types[1].type.name.slice(1)}`
    }
}

function shinyBtnFn() {
    if (imagen.className === 'poke-img') {
        muestraShiny()
    }else{
        muestraDefault()
    }
}

function turnFn() {
    if (imagen.className === 'poke-img') {
        muestraDefaultBack()
    }else{
        muestraDefault()
    }
}

function muestraDefault() {
    imagen.className = 'poke-img'
    imagenBack.className = 'hidden'
    imagenShiny.className = 'hidden'
    imagenShinyBack.className = 'hidden'
}

function muestraShiny() {
    imagen.className = 'hidden'
    imagenBack.className = 'hidden'
    imagenShiny.className = 'poke-img'
    imagenShinyBack.className = 'hidden'
}

function muestraDefaultBack() {
    imagen.className = 'hidden'
    imagenBack.className = 'poke-img'
    imagenShiny.className = 'hidden'
    imagenShinyBack.className = 'hidden'
}

function muestraShinyBack() {
    imagen.className = 'hidden'
    imagenBack.className = 'hidden'
    imagenShiny.className = 'hidden'
    imagenShinyBack.className = 'poke-img'
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