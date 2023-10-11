// Только один чекбокс X в активном положении
const checkboxes = document.querySelectorAll('.custom-checkbox');

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
        checkboxes.forEach((otherCheckbox) => {
            if (otherCheckbox !== checkbox) {
                otherCheckbox.checked = false;
            }
        });
    });
});






// const submitButton = document.getElementById("submit-button");
// submitButton.addEventListener("click", function (e) {
//     e.preventDefault();
//
//     const xInputs = document.querySelectorAll('input[name="x"]:checked');
//     const yInput = document.getElementById("y-input").value;
//     const rRadios = document.querySelectorAll('input[name="r"]');
//     const errorMessagesElement = document.getElementById("error-message");
//
//     errorMessagesElement.textContent = "";
//
//     const errors = [];
//
//     if (xInputs.length === 0) {
//         errors.push("Выберите значение X.");
//     }
//
//     const yRegex = /^-?(\d+(\.\d+)?|[0-2](\.\d+)?)$/;
//     const numericY = parseFloat(yInput);
//     if (!yRegex.test(yInput) || isNaN(numericY) || numericY <= -3 || numericY >= 3) {
//         errors.push("Введите корректное числовое значение Y в диапазоне (-3;3).");
//
//     }
//
//     // if (rInput.length === 0) {
//     //     errors.push("Выберите значение R.");
//     // }
//     let selectedR = null;
//     for (const radio of rRadios) {
//         if (radio.checked) {
//             selectedR = radio.value;
//             break;
//             // Если нашли выбранную кнопку, выходим из цикла
//         }
//     }
//
//     if (selectedR === null) {
//         errors.push("Выберите значение R.");
//     }
//
//     if (errors.length > 0) {
//         errorMessagesElement.innerHTML = errors.map(error => `<p>${error}</p>`).join("");}})
//     else{
//         // xInputs.forEach((xInput)=> {
//         //     if (xInput.checked) {
//         //         console.log(xInput.value);
//         //         console.log(typeof xInput);
//         //         console.log(typeof parseInt(xInput));
//         //         console.log(parseInt(xInput.value));
//         //     }
//         //})
//         const url = "/web-lab2/controller";
//         const formData = new FormData(); // Создаем объект для отправки данных формы
//
// // Получите значения X, Y и R и добавьте их в объект formData
//         xInputs.forEach((xInput) => {
//             if (xInput.checked) {
//                 console.log(parseInt(xInput.value))
//                 console.log(typeof parseInt(xInput.value))
//                 formData.append("x", parseInt(xInput.value))
//             }
//         })
//
//         //const yValue = parseFloat(yInput.value.replace(",", "."));
//         const yValue = parseFloat(yInput);
//         formData.append("y", yValue);
//
//
//         rRadios.forEach((radio) => {
//             if (radio.checked) {
//                 formData.append("r", parseInt(radio.value));
//             }
//         });
//         //console.log(checkboxik.value, yInput.value);
//         // Выполните POST-запрос
//         fetch(url, {
//             method: "POST",
//             body: formData,
//         }).catch((error) => {
//             console.error("Произошла ошибка при выполнении AJAX-запроса:", error);
//         })
//     }})

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", function (e) {
    e.preventDefault();

    const xInputs = document.querySelectorAll('input[name="x"]:checked');
    const yInput = document.getElementById("y-input").value;
    const rRadios = document.querySelectorAll('input[name="r"]');
    const errorMessagesElement = document.getElementById("error-message");

    errorMessagesElement.textContent = "";

    const errors = [];

    if (xInputs.length === 0) {
        errors.push("Выберите значение X.");
    }

    const yRegex = /^-?(\d+(\.\d+)?|[0-2](\.\d+)?)$/;
    const numericY = parseFloat(yInput);
    if (!yRegex.test(yInput) || isNaN(numericY) || numericY <= -3 || numericY >= 3) {
        errors.push("Введите корректное числовое значение Y в диапазоне (-3;3).");

    }

    // if (rInput.length === 0) {
    //     errors.push("Выберите значение R.");
    // }
    let selectedR = null;
    for (const radio of rRadios) {
        if (radio.checked) {
            selectedR = radio.value;
            break;
             // Если нашли выбранную кнопку, выходим из цикла
        }
    }

    if (selectedR === null) {
        errors.push("Выберите значение R.");
    }

    if (errors.length > 0) {
        errorMessagesElement.innerHTML = errors.map(error => `<p>${error}</p>`).join("");}
    else{
//         // xInputs.forEach((xInput)=> {
//         //     if (xInput.checked) {
//         //         console.log(xInput.value);
//         //         console.log(typeof xInput);
//         //         console.log(typeof parseInt(xInput));
//         //         console.log(parseInt(xInput.value));
//         //     }
//             //})
            const url = "/web-lab2/controller";
            let data = {x: 0, y: 0, r: 0};
            const formData = new FormData(); // Создаем объект для отправки данных формы

// Получите значения X, Y и R и добавьте их в объект formData
            xInputs.forEach((xInput) => {
                if (xInput.checked) {
                    console.log(parseInt(xInput.value))
                    console.log(typeof parseInt(xInput.value))
                    formData.append("x", parseInt(xInput.value))
                    data.x = parseInt(xInput.value)
                }
            })

            //const yValue = parseFloat(yInput.value.replace(",", "."));
            const yValue = parseFloat(yInput);
            formData.append("y", yValue);
            data.y = yValue;


            rRadios.forEach((radio) => {
                if (radio.checked) {
                    formData.append("r", parseInt(radio.value));
                    data.r = parseInt(radio.value);
                }
            });

             console.log(formData);
            //console.log(checkboxik.value, yInput.value);
            // Выполните POST-запрос
            fetch(url, {
                method: "POST",
                body: JSON.stringify({x: 1, y: 2, r: 3}),
                // body: JSON.stringify(formData),
            }).catch((error) => {
                console.error("Произошла ошибка при выполнении AJAX-запроса:", error);
            })
        }})

// ############################################
//     } else {
//         const url = "/web-lab2/controller"; // Укажите правильный URL для вашего сервлета
//         const formData = new FormData(); // Создаем объект для отправки данных формы
//
// // Получите значения X, Y и R и добавьте их в объект formData
//         checkboxes.forEach((checkbox) => {
//             if (checkbox.checked) {
//                 formData.append("x", checkbox.value);
//             }
//         });
//
//         //const yValue = parseFloat(yInput.value.replace(",", "."));
//         const yValue = parseFloat(yInput.value);
//         formData.append("y", yValue);
//
//         rRadios.forEach((radio) => {
//             if (radio.checked) {
//                 formData.append("r", radio.value);
//             }
//         });
//
// // Выполните POST-запрос
//         fetch(url, {
//             method: "POST",
//             body: formData,
//         }).catch((error) => {
//             console.error("Произошла ошибка при выполнении AJAX-запроса:", error);
//         })
//         // ;}});
//             .then((response) => response.text())
//             .then((data) => {
//                 // Обновите результаты на странице
//                 document.querySelector(".results-table").innerHTML = data;
//                 localStorage.setItem("savedData", data);
//             })
//             .catch((error) => {
//                 console.error("Произошла ошибка при выполнении AJAX-запроса:", error);
//             });
//     }


