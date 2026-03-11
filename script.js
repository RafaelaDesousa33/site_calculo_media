const nota1 = document.querySelector(".nota1");
const nota2 = document.querySelector(".nota2");
const nota3 = document.querySelector(".nota3");
const btnMedia = document.querySelector(".btn_media")
const result = document.querySelector(".result")


const calculoMedia = (nota1, nota2, nota3) => {

    const media = (nota1 + nota2 + nota3) / 3;
   
    if (media < 7) {
        result.style.color = "red"

        result.textContent = media.toFixed(2);

        return

    }

    result.textContent = media.toFixed(2)
    result.style.color = "blue"


}


btnMedia.addEventListener("click", (e) => {
    e.preventDefault()
    const valor1 = parseFloat(nota1.value);
    const valor2 = parseFloat(nota2.value);
    const valor3 = parseFloat(nota3.value);



    calculoMedia(valor1, valor2, valor3);


})
