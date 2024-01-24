const clearTableButton = document.getElementById("clear-table-button");
clearTableButton.addEventListener("click", function (event) {
    event.preventDefault(); // Отменяем стандартное действие кнопки (в данном случае, отправку формы)

    const resultsTable = document.querySelector(".results-table");

    // Удаляем все строки в таблице кроме первой (с заголовками)
    while (resultsTable.rows.length > 1) {
        resultsTable.deleteRow(1);
    }
    drawPlot("R")

    // Выполняем AJAX-запрос для сброса данных на сервере
    fetch('/web-lab2/clear-history', {
        method: 'POST', //
    })
        .then(response => {
            if (response.status !== 200) {
                console.error('Произошла ошибка на сервере при сбросе таблицы.');
            }
        })
        .catch(error => {
            console.error("Произошла ошибка при выполнении AJAX-запроса:", error);
        });
});
