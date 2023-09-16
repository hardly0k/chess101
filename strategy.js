const openingBtn = document.getElementById("openingBtn");
const middleBtn = document.getElementById("middleBtn");
const endGameBtn = document.getElementById("endGameBtn");
const openingForm = document.getElementById("openingForm");
const middleForm = document.getElementById("middleForm");
const endGameForm = document.getElementById("endGameForm");

openingBtn.addEventListener("click", function(e){
    e.preventDefault();

    openingForm.style.display = openingForm.style.display === "none" ? "block" : "none";
    middleForm.style.display = "none";
    endGameForm.style.display = "none";
});

middleBtn.addEventListener("click", function(e){
    e.preventDefault();

    middleForm.style.display = middleForm.style.display === "none" ? "block" : "none";
    openingForm.style.display = "none";
    endGameForm.style.display = "none";
});

endGameBtn.addEventListener("click", function(e){
    e.preventDefault();

    endGameForm.style.display = endGameForm.style.display === "none" ? "block" : "none";
    openingForm.style.display = "none";
    middleForm.style.display = "none";

});