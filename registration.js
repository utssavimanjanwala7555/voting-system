function validateForm()
{
    const name = document.getElementById("name").value;
    const dept = document.getElementById("dept").value;
    const enroll = document.getElementById("enroll").value;
    const year = document.getElementById("year").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    const Cpass = document.getElementById("confirmPass").value;

    
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
        alert("Only alphabets and spaces are allowed in name.");
        return false;
    }
    if(name.length < 2 || name.length > 50)
    {
        alert("please enter appropriate name.");
        return false;
    }


    if(enroll == "")
    {
        alert("Please enter your enrollment number.");
        return false;
    }
    if(enroll.length != 15)
    {
        alert("Please enter a valid enrollment number.");
        return false;   
    }


    if(dept == "")
    {
        alert("Please select your department.");
        return false;
    }

    if(year == "")
    {
        alert("Please enter your academic year.");
        return false;
    }

    if(email == "")
    {
        alert("Please enter your email.");
        return false;
    }

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    {
        alert("Enter valid Email Id.");
        return false;
    }

    if(pass == "")
    {
        alert("Please create a password.");
        return false;
    }

    if(Cpass == "")
    {
        alert("Please rewrite your password to confirm.");
        return false;
    }

    if(pass != Cpass)
    {
        alert("Passwords do not match.");
        return false;
    }
    

}
