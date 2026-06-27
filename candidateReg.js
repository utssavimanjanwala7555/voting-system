 const addAchieveBtn = document.querySelector("#addAchieveBtn");
 const achieveContainer = document.querySelector("#achievementContainer");

 const keyworkBtn = document.querySelector("#keyworkBtn");
 const keyworkContainer = document.querySelector("#keywordContainer");

    
    addAchieveBtn.addEventListener("click" , function(e){

        e.preventDefault();

        const div = document.createElement("div");
        div.className = "div-inputs";
        achieveContainer.appendChild(div);

        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Enter Achievement";
        input.className = "achievements"; 
        div.appendChild(input);
     
    });
 
    keyworkBtn.addEventListener("click" , function(e){

        e.preventDefault();

        const div = document.createElement("div");
        div.className = "div-inputs";
        keyworkContainer.appendChild(div);

        const input = document.createElement("input");  
        input.type = "text";
        input.placeholder = "Enter Key Work";
        input.className = "keyworks";
        div.appendChild(input);
    });


    //validation
    const registerBtn = document.querySelector(".register-btn");
    const candidateForm = document.querySelector("#candidateForm");

    candidateForm.addEventListener("submit", function(e){

    const name = document.getElementById("name").value;
    const dept = document.getElementById("dept").value;
    const enroll = document.getElementById("enroll").value;
    const year = document.getElementById("year").value;
    const achieve = document.getElementById("achieve").value;
    const keywork = document.getElementById("keywork").value;

        e.preventDefault();

    //name
    if(name == "")
    {
        alert("Please enter your name.");
        return false;
    }
    if(/\d/.test(name))
    {
        alert("Name cannot contain numbers.");
        return false;
    }
    if(!/^[A-Za-z]+(\s[A-Za-z]+)*$/.test(name))
    {
        alert("Only Alphabets And Spaces Are Allowed In Name.");
        return false;
    }
    if(name.length < 2 || name.length > 50)
    {
        alert("Please Enter Appropriate Name.");
        return false;
    }


    //enroll
    if(enroll == "")
    {
        alert("Please Enter Your Enrollment Number.");
        return false;
    }
    if(enroll.length != 15)
    {
        alert("Please Enter a Valid Enrollment Number.");
        return false;   
    }

    //dept
    if(dept == "")
    {
        alert("Please Select Your Department.");
        return false;
    }


    //year
    if(year == "")
    {
        alert("Please Enter Your Academic Year.");
        return false;
    }

    //achievements
    if(achieve == "")
    {
        alert("Please Enter Your Achievements.");
        return false;
    }

    //keyworks
    if(keywork == "")
    {
        alert("Please Enter Your Key Works.");
        return false;
    }

        
        window.location.reload();
    });