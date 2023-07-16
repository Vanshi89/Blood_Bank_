const email = document.getElementById("email");
const mob = document.getElementById("mob");
const uname = document.getElementById("name");
const password = document.getElementById("password");
const Conf_password = document.getElementById("Conf_password");
const button = document.getElementById("signup");

button.addEventListener("click", () => {
    const dataobj = {
        email: email.value,
        mob: mob.value,
        name: uname.value,
        password: password.value,
        Conf_password: Conf_password.value,
    };
    fetch("http://localhost:8080/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dataobj),
    })
    .then((res) => res.json())
    .then((data) => {
        alert("Account created successfully!");
        window.location.href = "./signin.html";
    })
    .catch((error) => {
        console.error("Error:",error);
    });
});
