const lousa = document.getElementById('lousa')

const grid = 16;
const lousa_Height_Width = `${(900 / grid)}px`;

for(let l = 1; l <= grid; l++){
    for(let c = 1; c <= grid; c++){
        const div = document.createElement('div');
        div.style.width = lousa_Height_Width;
        div.style.height = lousa_Height_Width;

        div.classList.add('squares');
        lousa.appendChild(div);
    }
}

lousa.addEventListener('mouseup', (e) => {
    e.preventDefault()

    e.target.classList.add('background-black')
})
