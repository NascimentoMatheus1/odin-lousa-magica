const lousa = document.getElementById('lousa');
const gridButton = document.getElementById('grid-btn');
const titulo = document.querySelector('h1');

let clickAndHold = false;
lousa.addEventListener('mouseleave', (e) => {
        e.preventDefault()
        clickAndHold = false; 
}); 
lousa.addEventListener('mousedown', (e) => {
        e.preventDefault()
        clickAndHold = true; 
        e.target.classList.add('background-black')
});
lousa.addEventListener('mouseup', (e) => {
        e.preventDefault()
        clickAndHold = false; 
});

const criarLousar = (grid) => {
    const lousa_Height_Width = `${(900 / grid)}px`;

    for(let l = 1; l <= grid; l++){
        for(let c = 1; c <= grid; c++){
            const div = document.createElement('div');

            div.addEventListener('mouseout', (e) => {
                e.preventDefault()
                if(clickAndHold){
                    e.target.classList.add('background-black')
                }
            })
            
            div.style.width = lousa_Height_Width;
            div.style.height = lousa_Height_Width;
            div.classList.add('quadrado');
            lousa.appendChild(div);
        }
    }
}

criarLousar(64);