const candCont = document.querySelector("#candidate-container");

const candidates = JSON.parse(localStorage.getItem("candidate")) || [];

candidates.forEach(function(candidate)
{
    const card = document.createElement("div");

    //photo
    const photo = document.createElement("img");
    photo.className = "photo";
    photo.src = candidate.imgUrl;
    card.appendChild(photo);

    //name
    const name = document.createElement("div");
    name.className = "name-div";
    name.textContent = candidate.name;
    card.appendChild(name);

    //dept
    const dept = document.createElement("div");
    dept.className = "class-div";
    dept.textContent = candidate.dept;
    card.appendChild(dept);

    //achievements
    const achievementList = document.createElement("ul");
    
    candidate.achievements.forEach(function(achievement)
    {
        const li = document.createElement("li");
        li.textContent = achievement;
        achievementList.appendChild(li);
    })

    card.appendChild(achievementList);


    //display full card 
    candCont.appendChild(card);
});