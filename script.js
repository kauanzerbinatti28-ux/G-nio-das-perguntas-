let input = document.getElementById("pergunta")

let texto = document.getElementById("resposta")



function resposta() {
  
  let número_de_caráctéres = input.value.length
  
 if (número_de_caráctéres % 2 === 0) {
   texto.textContent = "é verdade!"
 } else {
   texto.textContent = "é mentira"
 }
}