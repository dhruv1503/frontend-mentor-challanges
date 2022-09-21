const user = {
    feedBack: {
        rating: 0
    }
}


let ratingButtons = [...document.getElementsByClassName("feedback__btn")];
ratingButtons.forEach((e)=>{
    e.addEventListener("click",function() {
        let current = document.getElementsByClassName("feedback__btn--active");
        // getActiveButton();
        current[0].className = current[0].className.replace("feedback__btn--active" , "");
        
       this.className += " feedback__btn--active";
   
    })
})

// Submit button  
// Role-1 submit user rating to thankyou component and place in inner html Roles-2. display and hide on submit button. 
const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", switchContainers);
submitButton.addEventListener("click", updateThankyouContainer);


function getActiveButton(){
    let activeButton = document.getElementsByClassName("feedback__btn--active")[0];
    // console.log("Active button = ",activeButton.innerText)
    return activeButton;
}

function switchContainers(){
   /// replace visibility of buttons
   const feedbackContainer = document.getElementById("feedback__container");
   const thankyouContainer = document.getElementById("thankyou__container");
   feedbackContainer.style.display = "none";
   thankyouContainer.style.display = "flex";
}

function updateThankyouContainer(){
    // get the selected rating and update it in user object
    user.feedBack.rating = getActiveButton().innerText; 
    console.log(user.feedBack.rating);
    const userRating = document.getElementById("user-rating");
    userRating.innerText = user.feedBack.rating;

}