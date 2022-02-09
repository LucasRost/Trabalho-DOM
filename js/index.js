const app = document.getElementById('app');
const botao = document.getElementById('botao-modal');
const modalEscolha = document.getElementById('modal');
let exampleModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
    keybord: false
})

function dark() {
    app.classList.add('dark-mode');
    app.classList.remove('light-mode');
}

function light() {
    app.classList.remove('dark-mode');
    app.classList.add('light-mode');
}

botao.addEventListener("click", function(){
    exampleModal.show();
})

