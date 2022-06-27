function changeColor() {
    let hex_number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
    let hexcode1 = '';
    let hexcode2 = '';

    for (let i = 0; i < 6; i++) {
        hexcode1 += hex_number[Math.floor(Math.random() * hex_number.length)];
        hexcode2 += hex_number[Math.floor(Math.random() * hex_number.length)];
    }
    // document.querySelector('#hexcode1').textContent = hexcode1;
    // document.querySelector('#hexcode2').textContent = hexcode2;
    document.querySelector('body').style.background = `radial-gradient( #${hexcode1}, #${hexcode2})`;


    let phrases = document.querySelectorAll('.phrase');


    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(result => {
            if (phrases.length == 0){
                let text = document.createElement('p');
                text.className = 'phrase';
                text.style = 'font-size: 1.5rem;';
                text.textContent = '\"' + result.content + '\"';
                document.querySelector('.hex-colors').append(text);
                text = document.createElement('p');
                text.className = 'phrase';
                text.style = 'font-family:\'Satisfy\', cursive; font-size: 2rem;';
                text.textContent = '— ' + result.author;
                document.querySelector('.hex-colors').append(text);
            } else {
                phrases[0].textContent = '\"' + result.content + '\"';
                phrases[1].textContent =  '— ' + result.author;
            }



        })
        .catch(err => {
            console.log(`Ошибка: ${err.name} - ${err.reason}`)
        })

}