const submitBtn = document.querySelector(".btn")
const resultBox = document.querySelector(".result_box")
const scoreText = resultBox.querySelector("p")

document.addEventListener("DOMContentLoaded",function(){
   submitBtn.addEventListener("click",function(){
    const q1 = document.querySelector("input[name='q1']:checked")
    const q2 = document.querySelector("input[name='q2']:checked")
    const q3 = document.querySelector("input[name='q3']:checked")

    if(!q1||!q2||!q3){
        alert("Answer all questions")
        return
    }
    let score = 0
    if(q1.value === "option2"){
        score++
    }
    if(q2.value === "option1"){
        score++
    }
    if(q3.value === "option3"){
        score++
    }
    resultBox.style.display = "block"
    scoreText.textContent = `Score: ${score} out of 3`

})
})