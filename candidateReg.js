 const addBtn = document.querySelector("#addAchieveBtn");
 const achieveContainer = document.querySelector("#achievementContainer");
    
    addBtn.addEventListener("click" , function(e){

        e.preventDefault();

        const input =document.createElement("input");
        input.type = "text";
        input.placeholder = "Enter Achievement";
        //input.class = "achievements";
        achieveContainer.appendChild(input);
    });
 
    const name = document.getElementById("name").value;
    const dept = document.getElementById("dept").value;
    const enroll = document.getElementById("enroll").value;
    const year = document.getElementById("year").value;s