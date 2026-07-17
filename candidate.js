const candCont = document.querySelector("#candidate-container");

const candidates = JSON.parse(localStorage.getItem("candidate")) || [];

candidates.forEach(function(candidate)
{
    const card = document.createElement("div");
    card.className = "candidate-card";
    candidate.name ;        // make another createElement for name then for dept etc... and (name = candidate.name)
    candidate.dept t;
    candidate.achievements ;
    candidate.keyworks ;
    candidate.imgUrl ;

    candCont.appendChild("card");
});