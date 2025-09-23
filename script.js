const lousa = document.getElementById('lousa');
const RangeInput = document.getElementById('grid-range');
const RangeOutput = document.getElementById('range-output');
const quadriculadoButton = document.getElementById('quadriculado-btn');
const borrachaButton = document.getElementById('borracha-btn');
const limparButton = document.getElementById('limpar-btn');
let corDoPincel = 'background-black';
let clickAndHold = false;

lousa.addEventListener('mouseleave', (e) => {
        e.preventDefault()
        clickAndHold = false; 
}); 
lousa.addEventListener('mousedown', (e) => {
        e.preventDefault()
        clickAndHold = true; 
        if(borrachaButton.classList.contains('btn-ativado')){
            e.target.classList.add('background-white')
        }else{
            e.target.classList.add('background-black')
        }      
});
lousa.addEventListener('mouseup', (e) => {
        e.preventDefault()
        clickAndHold = false; 
});

quadriculadoButton.addEventListener('click', (e) => {
    e.preventDefault();
    quadriculadoButton.classList.toggle('btn-ativado');
    adicionarQuadriculado();
});

borrachaButton.addEventListener('click', (e) => {
    e.preventDefault();
    borrachaButton.classList.toggle('btn-ativado');

    if(borrachaButton.classList.contains('btn-ativado')){
        corDoPincel = 'background-white';
        document.body.style.cursor = "crosshair";
        lousa.style.cursor = "crosshair";
    }else{
        corDoPincel = 'background-black';
        document.body.style.cursor = "auto";
        lousa.style.cursor = "pointer";
    }
});

limparButton.addEventListener('click', (e) => {
    e.preventDefault()
    criarLousar(32);
});

RangeInput.addEventListener('input', (e) => {
    e.preventDefault();
    const rangeValue = Number(e.target.value);
    RangeOutput.textContent = `${rangeValue} x ${rangeValue}`;

    criarLousar(rangeValue);
});

const adicionarQuadriculado = () => {
    Array.from(lousa.children, (elem) => {
        elem.classList.toggle('add-border');
    })
}

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
            if(quadriculadoButton.classList.contains('btn-ativado')){
               div.classList.add('add-border'); 
            }
            lousa.appendChild(div);
        }
    }
}

criarLousar(32);