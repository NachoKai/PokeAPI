$(document).ready(function () {
    fetch(`https://pokeapi.co/api/v2/pokemon/pikachu/`).then(res => res.json()).then(data => {
        let pic = document.getElementById('pic');
        pic.innerHTML = "<img src='" + data.sprites.front_shiny + "'style='position:relative;top:-10px;' width=150 height=150/>";
        console.log(data);
        let desc = document.getElementById('desc');
        let abilities = data.abilities;
        let moves = data.moves;
        desc.innerHTML = "<p><b>Type:</b> " + data.types[0].type.name +
            "</p><hr><p id='abty'><b>Abilities: </b></p>";
        for (let i = 0; i < abilities.length; i++) {
            abty.innerHTML += "<span class='badge badge-danger'>" + abilities[i].ability.name + "</span>&nbsp;";
        }
        abty.innerHTML += "<hr><p><b>Moves: </b><button class='badge badge-danger'>~</button><p id='mvs'></p></p>";
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
        let stats = data.stats;
        /* Chart */

        let ctx = document.getElementById('myChart').getContext('2d');
        let chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'doughnut',

            // The data for our dataset
            data: {
                labels: ['Speed', 'special-defense', 'special-attack', 'defence', 'attack', 'hp'],
                datasets: [{
                    label: 'My First dataset',
                    backgroundColor: ['#C39BD3', '#76D7C4', '#F9E79F', '#F5B7B1', '#AED6F1', '#E5E7E9'],
                    borderColor: ['#C39BD3', '#76D7C4', '#F9E79F', '#F5B7B1', '#AED6F1', '#E5E7E9'],
                    data: [stats[0].base_stat, stats[1].base_stat, stats[2].base_stat, stats[3].base_stat, stats[4].base_stat, stats[5].base_stat]
                }]
            },

            // Configuration options go here
            options: {}
        });

    }).catch(err => console.log(err));

})

let frm = document.querySelector('#frm');
frm.addEventListener('submit', function (e) {
    e.preventDefault();
    const pkmn = document.querySelector('#pkmn').value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${pkmn}`).then(res => res.json()).then(data => {
        let pic = document.getElementById('pic');
        pic.innerHTML = "<img src='" + data.sprites.front_shiny + "'style='position:relative;top:-10px;' width=150 height=150/>";
        console.log(data);
        let desc = document.getElementById('desc');
        let abilities = data.abilities;
        let moves = data.moves;
        desc.innerHTML = "<p><b>Type:</b> " + data.types[0].type.name +
            "</p><hr><p id='abty'><b>Abilities: </b></p>";
        for (let i = 0; i < abilities.length; i++) {
            abty.innerHTML += "<span class='badge badge-danger'>" + abilities[i].ability.name + "</span>&nbsp;";
        }
        abty.innerHTML += "<hr><p><b>Moves: </b><button class='badge badge-danger'>~</button><p id='mvs'></p></p>";
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
        let stats = data.stats;
        /* Chart */

        let ctx = document.getElementById('myChart').getContext('2d');
        let chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'doughnut',

            // The data for our dataset
            data: {
                labels: ['Speed', 'special-defense', 'special-attack', 'defence', 'attack', 'hp'],
                datasets: [{
                    label: 'My First dataset',
                    backgroundColor: ['#C39BD3', '#76D7C4', '#F9E79F', '#F5B7B1', '#AED6F1', '#E5E7E9'],
                    borderColor: ['#C39BD3', '#76D7C4', '#F9E79F', '#F5B7B1', '#AED6F1', '#E5E7E9'],
                    data: [stats[0].base_stat, stats[1].base_stat, stats[2].base_stat, stats[3].base_stat, stats[4].base_stat, stats[5].base_stat]
                }]
            },

            // Configuration options go here
            options: {}
        });

    }).catch(err => {
        let desc = document.getElementById('desc');
        desc.innerHTML = "<span class='alert alert-danger'>Wrong Input</span>";
        let canvas = document.getElementById('hd');
        console.log(err)
    });
})