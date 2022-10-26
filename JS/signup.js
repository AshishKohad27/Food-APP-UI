
let deatilsArr = JSON.parse(localStorage.getItem("details")) || [];

class Details {
    // #passward;
    constructor() {
        this.organasation = "Happy Meal";
    }
    #validateUsername(username) {
        let value = username.includes("@") ? false : true;
        return value;
    }
    #validatePassward(passward) {
        let value = passward.includes("123") ? false : true;
        return value;
    }
    signUp(username, passward, name, email) {
        //validated passward
        let isValidated = false;
        isValidated =
            this.#validateUsername(username) && this.#validatePassward(passward);
        if (isValidated) {
            this.username = username;
            this.passward = passward;
            this.name = name;
            this.email = email;
            console.log("%c Your Successfully Signup", "color:yellow");
            deatilsArr.push(this);
            localStorage.setItem("details", JSON.stringify(deatilsArr));
        } else {
            console.log("%c Please check your details", "color:red");
        }
    }
    login(username, passward) {
        if (this.passward === passward && this.username === username) {
            console.log(`Your are Successfully Login ${this.name}`);
            alert(`Your are Successfully Login ${this.name}`);
        } else {
            console.log(
                "%c Sorry we can't find an account with this email address.Please try again or create a new Login Deatils",
                "color:red"
            );
        }
    }
}
// let d1 = new Details();
// console.log('d1:', d1)
// d1.signUp("Ashish", "Ashish456", "Ashish Kohad", "kohadashish27@gmail.com");
// console.log("d1:", d1);
// console.log('deatilsArr:', deatilsArr);
// d1.login("Ashish","Ashish456","Ashish Kohad","kohadashish27@gmail.com");
document.getElementById("formsignup").addEventListener("submit", signUpBtn);
var d1;
function signUpBtn(event) {
    event.preventDefault();
    console.log("formsignup");
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let username = document.getElementById("username").value;
    let passward = document.getElementById("passward").value;
    d1 = new Details();
    d1.signUp(username, passward, name, email);
    document.getElementById("name").value = "";
document.getElementById("email").value = "";
document.getElementById("username").value = "";
document.getElementById("passward").value = "";
    // console.log("deatilsArr:", deatilsArr);
}


// document.getElementById("formlogin").addEventListener("submit", loginBtn);
// function loginBtn(event) {
//     event.preventDefault();
//     console.log("formlogin");
//     let username = document.getElementById("username").value;
//     let passward = document.getElementById("passward").value;
//     d1 = new Details();
//     d1.login(username, passward);
//     // console.log("deatilsArr:", deatilsArr);
// }
