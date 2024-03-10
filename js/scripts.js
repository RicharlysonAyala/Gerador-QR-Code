// Seleção
const container = document.querySelector(".container");

const formInput = document.querySelector("#qr-form input");

const formBtn = document.querySelector("#qr-form button");

const qrCodeImg = document.querySelector("#qr-code img");

const qrCode = document.querySelector("#qr-code")

// Funções
function geradorQR() {
    const inputValue = formInput.value; 
    
    if(!inputValue) return;

    formBtn.innerText = "Gerando código...";

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;

    qrCodeImg.addEventListener("load", () => {
        container.classList.add("active");
        formBtn.innerText = "Código criado!"
    })
}

// Eventos
formBtn.addEventListener("click", () => {
    geradorQR();
})

formInput.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
        geradorQR();
    }
})

// Limpar área do QR Code
formInput.addEventListener("keyup", (e) => {
    if (!formInput.value || e.code === "Backspace") {
        qrCode.style.transition = "0s"
        container.classList.remove("active");
        formBtn.innerText = "Gerar QR Code"
    }
})
