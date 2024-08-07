document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("login-form");

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const email = document.getElementById("name").value;
        const password = document.getElementById("password").value;

        try {
            const response = await fetch("http://localhost:5678/api/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email: email, password: password })
            });

            const data = await response.json();

            if (response.ok) {

                localStorage.setItem("token", data.token);

                window.location.href = "./index.html";
            } else {

                alert("Le mot de passe ou l'email est incorrect.");
            }
        } catch (error) {
            console.error("Erreur:", error);
            alert("Une erreur s'est produite. Veuillez réessayer plus tard.");
        }
    });
});
