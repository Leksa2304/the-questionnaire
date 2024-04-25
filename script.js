const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
    // Предотвращает действие браузера по умолчанию. В данном случае — отправку формы
    // https://learn.javascript.ru/default-browser-action
    event.preventDefault();


    // Здесь твой код

    const inputName = document.querySelector("#name");
    const inputSecondName = document.querySelector("#secondName");
    const inputEmail = document.querySelector("#email");
    const inputPhone = document.querySelector("#phone");
    const checkbox = document.querySelector("#agree");


    fetch("https://polinashneider.space/user", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer: Leksa2304"
            },
            body: JSON.stringify({

                name: inputName.value,
                secondName: inputSecondName.value,
                phone: inputPhone.value,
                email: inputEmail.value,
                agree: checkbox.checked,

            }),

        })
        .then((data) => {
            return data.json();

        })
        .then((data) => {
            if (data.message) {
                alert(data.message);
            }
            form.reset();
        })
        .catch((e) => {

            alert("Произошла ошибка");
        });
});