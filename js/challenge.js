/* Deliverable 1: As a user, I should see the timer increment every second once the page has loaded. */
const timer = document.querySelector('#counter')

function numberIncrease() {
    let number = parseInt(timer.textContent, 10)
    number++
    timer.textContent = number
}

function numberDecrease() {
    let number = parseInt(timer.textContent, 10)
    number--
    timer.textContent = number
}


document.addEventListener("DOMContentLoaded", function(){
    setInterval(numberIncrease, 1000)
    
})



/* Deliverable 2: As a user, I can manually increment and decrement the counter using the plus and minus buttons.*/

const plusBtn = document.querySelector("#plus")
const minusBtn = document.querySelector("#minus")

plusBtn.addEventListener("click", numberIncrease)

minusBtn.addEventListener("click", numberDecrease)




/* Deliverable 3: As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.*/

const heartBtn = document.querySelector("#heart")
const likes = document.querySelector(".likes")

heartBtn.addEventListener("click", addLike)


const likesHash = {}

function addLike() {
    const li = document.createElement("li")
    let number = parseInt(timer.textContent, 10)
    timer.textContent 

    // likesHash[number] += 1
    
    if (number in likesHash) {
        
        likesHash[number] += 1
    } else {
        likesHash[number] = 1


    likes.append(li)

}


/* Deliverable 4: As a user, I can pause the counter, which should 1. pause the counter 2. disable all buttons except the pause button 3. the pause button should then show the text "resume." When 'resume' is clicked, it should restart the counter and re-enable the buttons. 



/* Deliverable 5: As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."*/

const commentForm = document.querySelector("#comment-form")

// commmentForm.addEventListener("submit", function(event) {
//     event.preventDefault()

//     const newComment = document.querySelector("#comment-input").value 



// })