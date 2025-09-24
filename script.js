import { criarLousa, verificarClickAndHold } from "./lousa.js";
const lousa = document.getElementById('lousa');
const pincelCorInput = document.getElementById('pincel-color-input');
const lousaCorInput = document.getElementById('lousa-color-input');
const RangeInput = document.getElementById('grid-range');
const RangeOutput = document.getElementById('range-output');
const quadriculadoButton = document.getElementById('quadriculado-btn');
const borrachaButton = document.getElementById('borracha-btn');
const limparButton = document.getElementById('limpar-btn');
const Pincel = {
    cor: pincelCorInput.value
};

lousaCorInput.addEventListener('input', (e) => {
    e.preventDefault();
    lousa.style.backgroundColor = lousaCorInput.value;
});

pincelCorInput.addEventListener('input', (e) => {
    e.preventDefault();
    Pincel.cor = pincelCorInput.value;
});

quadriculadoButton.addEventListener('click', (e) => {
    e.preventDefault();
    quadriculadoButton.classList.toggle('ativado');
    adicionarQuadriculado();
});

borrachaButton.addEventListener('click', (e) => {
    e.preventDefault();
    borrachaButton.classList.toggle('ativado');

    if(borrachaButton.classList.contains('ativado')){
        Pincel.cor = '';
        document.body.style.cursor = "crosshair";
        lousa.style.cursor = "crosshair";
    }else{
        Pincel.cor = pincelCorInput.value;
        document.body.style.cursor = "auto";
        lousa.style.cursor = "pointer";
    }
});

limparButton.addEventListener('click', (e) => {
    e.preventDefault()
    criarLousa(RangeInput.value, Pincel);
});

RangeInput.addEventListener('input', (e) => {
    e.preventDefault();
    const rangeValue = Number(e.target.value);
    RangeOutput.textContent = `${rangeValue} x ${rangeValue}`;
    criarLousa(rangeValue, Pincel);
});

const adicionarQuadriculado = () => {
    Array.from(lousa.children, (elem) => {
        elem.classList.toggle('add-border');
    })
}

criarLousa(32, Pincel);
verificarClickAndHold(Pincel);
