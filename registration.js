function validateForm()
{
    const name = document.getElementById("name").value;
    const dept = document.getElementById("dept").value;
    const enroll = document.getElementById("enroll").value;
    
    if(name == "")
    {
        alert("Please enter your name.");
        return false;
    }
    if(!isNaN(name))
    {
        alert("Name cannot contain numbers.");
        return false;
    }

    if(enroll == "")
    {
        alert("Please enter your enrollment number.");
        return false;
    }

    if(dept == "")
    {
        alert("Please select your department.");
        return false;
    }
}
