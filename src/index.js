
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);


function drawPokemon(){
    
    let cards = document.querySelector('.cards');
    

    for (let i = 0; i < data.length; i++){

        let title = document.createElement('h2');
        title.classList.add('card--title');
        let alteredName = '';
        for (let k = 0; k < data[i].name.length; k++){
            if (k == 0){
                alteredName += data[i].name.charAt(k).toUpperCase();
            }
            else {
                alteredName += data[i].name.charAt(k);
            }
        }
        title.innerHTML = alteredName;
        let card = document.createElement('li');
        card.classList.add('card');

        let image = document.createElement('img');
        image.classList.add('card--img');
        image.width = 256;
        image.src = data[i].sprites.other['official-artwork'].front_default;

        let text = document.createElement('ul');
        text.classList.add('card--text');

        for (let j = 0; j < data[i].stats.length; j++){
            let item = document.createElement('li');
            item.innerHTML = `${data[i].stats[j].stat.name.toUpperCase()}: ${data[i].stats[j].base_stat}`;
            text.appendChild(item);
        }
        
        card.append(title);
        card.append(image);
        card.append(text);
        cards.append(card);
    }

}

drawPokemon();