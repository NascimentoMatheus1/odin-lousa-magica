const lousa = document.getElementById('lousa');
const limparButton = document.getElementById('limpar-btn');
const borrachaButton = document.getElementById('borracha-btn');
const RangeInput = document.getElementById('grid-range');
const RangeOutput = document.getElementById('range-output');
let corDoPincel = 'background-black';
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

limparButton.addEventListener('click', (e) => {
    e.preventDefault()
    criarLousar(32);
});

borrachaButton.addEventListener('click', (e) => {
    e.preventDefault();
    borrachaButton.classList.toggle('btn-ativado');

    if(borrachaButton.classList.contains('btn-ativado')){
        corDoPincel = 'background-white';
        document.body.style.cursor = "crosshair";
    }else{
        corDoPincel = 'background-black';
        document.body.style.cursor = "auto";
    }
});

RangeInput.addEventListener('input', (e) => {
    e.preventDefault();
    const rangeValue = Number(e.target.value);
    RangeOutput.textContent = `${rangeValue} x ${rangeValue}`;

    criarLousar(rangeValue);
});

const criarLousar = (grid) => {
    lousa.innerHTML = '';
    const lousa_Height_Width = `${(400 / grid)}px`;

    for(let l = 1; l <= grid; l++){
        for(let c = 1; c <= grid; c++){
            const div = document.createElement('div');

            div.addEventListener('mouseout', (e) => {
                e.preventDefault();
                if(clickAndHold){
                    e.target.classList.add(corDoPincel);
                }
            })
            
            div.style.width = lousa_Height_Width;
            div.style.height = lousa_Height_Width;
            div.classList.add('quadrado');
            lousa.appendChild(div);
        }
    }
}

criarLousar(32);