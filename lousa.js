const lousa = document.getElementById('lousa');
const quadriculadoButton = document.getElementById('quadriculado-btn');
const borrachaButton = document.getElementById('borracha-btn');
let clickAndHold = false;

export const criarLousa = (grid, Pincel) => {
    lousa.innerHTML = '';
    const lousa_Height_Width = `${(400 / grid)}px`;

    for(let linha = 1; linha <= grid; linha++){
        for(let coluna = 1; coluna <= grid; coluna++){
            const quadradoDiv = document.createElement('div');
            
            ["mouseout", "mouseover"].forEach((tipo) => {
                quadradoDiv.addEventListener(tipo, (event) => {
                    event.preventDefault();
                    if(clickAndHold){
                        event.target.style.backgroundColor = Pincel.cor;
                    }
                });
            });
            
            quadradoDiv.style.width = lousa_Height_Width;
            quadradoDiv.style.height = lousa_Height_Width;
            quadradoDiv.classList.add('quadrado');
            if(quadriculadoButton.classList.contains('ativado')){
               quadradoDiv.classList.add('add-border'); 
            }
            lousa.appendChild(quadradoDiv);
        }
    }
}

export const verificarClickAndHold = (Pincel) => {
    lousa.addEventListener('mouseleave', (event) => {
        event.preventDefault()
        clickAndHold = false; 
    }); 
    lousa.addEventListener('mousedown', (event) => {
            event.preventDefault()
            clickAndHold = true; 
            if(event.target === lousa){
                return
            }
            else if(borrachaButton.classList.contains('ativado')){
                event.target.style.backgroundColor = '';
            }else{
                event.target.style.backgroundColor = Pincel.cor;
            }      
    });
    lousa.addEventListener('mouseup', (event) => {
            event.preventDefault()
            clickAndHold = false; 
    });
}
