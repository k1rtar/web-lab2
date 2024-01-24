<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<jsp:useBean id="history" scope="session" class="com.kirtar.lab2.models.HitHistory"/>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="css/styles.css">
    <script src="js/plot.js" defer></script>
    <script src="js/Validator.js" defer></script>
    <script src="js/start.js" defer></script>
    <script src="js/main.js" defer></script>
    <script src="js/cleartable.js" defer></script>


    <title>Lab1</title>
</head>
<body>
<header>
    <img src="img/logo.png" alt="Логотип Итмо" id = "logo">
    <span class="student"><strong>Таранов Кирилл Викторович, группа P3219, вариант 29786</strong></span>
    <span><strong> </strong></span>
</header>

<table class = "main">

    <tr>
        <td>

            <canvas width="400" height="400" id="plot"></canvas>

        </td>
    </tr>

    <tr>
        <td class="coordinates-container">

                <form id = "check-form" novalidate onsubmit="handleForm()">
                <table class="form-table">
                    <tr>
                        <td>
                            <label for="firstR" class="r-label">Выберите значение R: </label>
                        </td>
                        <td>
                            <label>1  <input name="r"  id = "firstR" type="radio" class="r-button" value="1"></label>
                            <label>2 <input name="r"   type="radio" class="r-button" value="2"></label>
                            <label>3 <input name="r"   type="radio" class="r-button" value="3"></label>
                            <label>4 <input name="r"   type="radio" class="r-button" value="4"></label>
                            <label>5 <input name="r"   type="radio" class="r-button" value="5"></label>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label for="firstX">Выберите значение X: </label>
                        </td>
                        <td>
                            <label><input name="x"   id="firstX" type="checkbox" class="custom-checkbox" value="-4">-4</label>
                            <label><input name="x"   type="checkbox" class="custom-checkbox" value="-3">-3</label>
                            <label><input name="x"   type="checkbox" class="custom-checkbox" value="-2">-2</label>
                            <label><input name="x"   type="checkbox" class="custom-checkbox" value="-1">-1</label>
                            <label><input name="x"   type="checkbox" class="custom-checkbox" value="0">0</label>
                            <label><input name="x"   type="checkbox" class="custom-checkbox" value="1">1</label>
                            <label><input name="x"   type="checkbox" class="custom-checkbox" value="2">2</label>
                            <label><input name="x"   type="checkbox" class="custom-checkbox" value="3">3</label>
                            <label><input name="x"   type="checkbox" class="custom-checkbox" value="4">4</label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="y-input">Выберите значение Y: </label>
                        </td>
                        <td>
                            <input name="y"   placeholder ="Введите число в диапазоне (-3;3)" id="y-input" maxlength="17">
                        </td>

                        <div id="error-message"></div>

    <tr><td></td>
        <td>
            <input type="submit" value="Отправить" class="btn" id="submit-button">
        </td>
    </tr>
</table>

</form>
</td>
</tr>

<tr>
    <td>
        <table class="results-table" id="results">
            <tr>
                <td>X</td>
                <td>Y</td>
                <td>R</td>

                <td>Результат</td>
                <td>Текущее время</td>
                <td>Время выполнения</td>
            </tr>

            <c:forEach var="hit" items="${history.hitHistory}">
                <tr>

                    <td>${hit.x}</td>
                    <td>${hit.y}</td>
                    <td>${hit.r}</td>
                    <c:choose>
                        <c:when test="${hit.hit}">
                            <td style="color:green">Попадание</td>
                        </c:when>
                        <c:otherwise>
                            <td style="color:red">Промах</td>
                        </c:otherwise>
                    </c:choose>

                    <td>${hit.currentTime}</td>
                    <td>${hit.executionTime} c</td>

                </tr>
            </c:forEach>

        </table>

    </td>
</tr>
<tr>
    <td>
        <form id="clear-table-form">
            <input type="submit" value="Очистить таблицу" class="clear-btn" id="clear-table-button"/>
        </form>
    </td>
</tr>
</table>



</body>
</html>
