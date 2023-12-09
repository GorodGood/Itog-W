function myFunction(){
    document.getElementById("myDropdown").classList.toggle("show");
};


window.onclick = function(event){
    if (!event.target.mathed(".dropbtn")){
        let dropdowns = document.getElementsByClassName("dropdown-content");
        for(let i = 0; i < dropdowns.length; i++){
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")){
                openDropdown.classList.remove("show");
            };
        };
    };
};
                 //-------claider-------

const nextButton = document.querySelector(".next")

const backButton = document.querySelector(".back")
                 
const images = document.querySelectorAll(".image")
                 
let imageIndex = 0;
                 
nextButton.onclick = function(){
    images[imageIndex].classList.remove("show");
                 
    if(imageIndex >= images.length - 1){   
        imageIndex = 0;
    }
    else{
    imageIndex = imageIndex + 1;
    }
    images[imageIndex].classList.add("show");
}
                 
backButton.onclick = function(){
    images[imageIndex].classList.remove("show");
                 
    if(imageIndex <= 0){
        mageIndex = 2;
    }
    else{
        imageIndex = imageIndex - 1;
    }
    images[imageIndex].classList.add("show");
                 }
                 









