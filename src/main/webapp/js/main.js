function handleForm(){
    if (!validator.validateAll()){
        const errorMessagesElement = document.getElementById("error-message");
        const errors = [];
        errors.push("Неправильное заполнение формы! Проверьте, что все поля заполнены, а также Y принимает допустимые значения")
        errorMessagesElement.textContent = "";
        errorMessagesElement.innerHTML = errors.map((error) => `<p>${error}</p>`).join("");
    }
    else{
    sendPoint(validator.lastClickedX,
        document.getElementById("y-input").value.replace(',', '.'),
        validator.lastClickedR)
        }
}

function sendPoint(x, y, r) {
    const data = {
        x: x,
        y: y,
        r: r,
        timezone: -new Date().getTimezoneOffset()
    };


    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    };

    fetch('controller', requestOptions)
        .then(response => response.json())
        .then(data => {
            // Обработка успешного ответа
            console.log("Ответ сервера:", data);
            location.reload()
            // Дополнительный код обработки
        })
        .catch(error => {
            // Обработка ошибки
            console.error("Произошла ошибка при выполнении запроса:", error);
        });
}

