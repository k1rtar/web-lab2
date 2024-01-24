const canvas = document.getElementById("plot"),
    context = canvas.getContext("2d");

canvas.height = canvas.width;
let w = canvas.width, h = canvas.height;

const centerX = w / 2
const centerY = h / 2

const strokeWidth = 25 / 2;
const strokeInterval = 60;//56

let rValue = "R";
function drawPlot(r) {
    context.clearRect(0, 0, w, h);

    context.lineWidth = 4;
    context.strokeStyle = "black";

    // y axis
    context.beginPath();
    context.moveTo(centerX, 0);
    context.lineTo(centerX - 7, 25);
    context.moveTo(centerX, 0);
    context.lineTo(centerX + 7, 25);
    context.moveTo(centerX, 0);
    context.lineTo(centerX, h);
    context.stroke();
    context.closePath();

    // x axis
    context.beginPath();
    context.moveTo(w, centerY);
    context.lineTo(w - 25, centerY - 7);
    context.moveTo(w, centerY);
    context.lineTo(w - 25, centerY + 7);
    context.moveTo(w, centerY);
    context.lineTo(0, centerY);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.moveTo(centerX - strokeWidth, centerY - strokeInterval);
    context.lineTo(centerX + strokeWidth, centerY - strokeInterval);
    context.moveTo(centerX - strokeWidth, centerY - strokeInterval * 2);
    context.lineTo(centerX + strokeWidth, centerY - strokeInterval * 2);
    context.moveTo(centerX - strokeWidth, centerY + strokeInterval);
    context.lineTo(centerX + strokeWidth, centerY + strokeInterval);
    context.moveTo(centerX - strokeWidth, centerY + strokeInterval * 2);
    context.lineTo(centerX + strokeWidth, centerY + strokeInterval * 2);
    context.moveTo(centerX - strokeInterval, centerY - strokeWidth);
    context.lineTo(centerX - strokeInterval, centerY + strokeWidth);
    context.moveTo(centerX - strokeInterval * 2, centerY - strokeWidth);
    context.lineTo(centerX - strokeInterval * 2, centerY + strokeWidth);
    context.moveTo(centerX + strokeInterval, centerY - strokeWidth);
    context.lineTo(centerX + strokeInterval, centerY + strokeWidth);
    context.moveTo(centerX + strokeInterval * 2, centerY - strokeWidth);
    context.lineTo(centerX + strokeInterval * 2, centerY + strokeWidth);
    context.stroke();
    context.closePath();

    //context.fillStyle = "#3399ff";
    context.fillStyle = "rgba(51, 153, 255, 0.8)";
    context.beginPath();
    //quadrant
    const radius = strokeInterval*2;
    const startAngle = 0;
    const endAngle = -Math.PI / 2 ;
    const anticlockwise = true;
    context.beginPath();
    context.arc(centerX, centerY, radius, startAngle, endAngle, anticlockwise);
    context.lineTo(centerX, centerY);

    //triangle
    const x1 = 0;
    const y1 = 0;
    const x2 = -strokeInterval*2;
    const y2 = 0;
    const x3 = 0;
    const y3 = strokeInterval*2;

// Перемещаем перо в первую вершину треугольника
    context.moveTo(centerX + x1, centerY - y1);

// Рисуем линии к остальным вершинам треугольника
    context.lineTo(centerX + x2, centerY - y2);
    context.lineTo(centerX + x3, centerY - y3);

    //rectangle
    const x = -strokeInterval*2; // Отрицательная координата X в третьей четверти
    const y = 0;  // Положительная координата Y в третьей четверти

// Задаем ширину и высоту прямоугольника
    const widthRectangle = strokeInterval*2;
    const heightRectangle = strokeInterval;

// Рисуем прямоугольник
    context.fillRect(centerX + x, centerY - y, widthRectangle, heightRectangle); // Заливаем прямоугольник цветом
    context.fillStyle = "rgba(51, 153, 255, 0.8)";
    context.fill();
    context.fill();

    // context.strokeStyle = "#ecd8c5";
    context.strokeStyle = "rgba(51, 153, 255, 0.8)";
    context.stroke();


    context.closePath();


    const fontSize = strokeInterval / 3.5;
    context.fillStyle = "black";

    context.font = `800 ${fontSize * 1.7}px Arial`;
    context.fillText("y", centerX - strokeWidth * 2.8, 15);
    context.fillText("x", w - 20, centerY - strokeWidth * 2.4);

    let label1, label2;
    if (isNaN(r)) {
        label1 = r + "/2";
        label2 = r;
    } else {
        label1 = r / 2;
        label2 = r;
    }
    rValue = label2;

    context.font = `800 ${fontSize}px Arial`;
    context.fillText(label1, centerX + strokeInterval - 3, centerY + strokeWidth * 2.8);
    context.fillText(label2, centerX + strokeInterval * 2 - 3, centerY + strokeWidth * 2.8);
    context.fillText("-" + label1, centerX - strokeInterval - 7, centerY + strokeWidth * 2.8);
    context.fillText(
        "-" + label2,
        centerX - strokeInterval * 2 - 7,
        centerY + strokeWidth * 2.8
    );

    context.fillText(label1, centerX + strokeWidth * 2, centerY - strokeInterval + 3);
    context.fillText(label2, centerX + strokeWidth * 2, centerY - strokeInterval * 2 + 3);
    context.fillText("-" + label1, centerX + strokeWidth * 2, centerY + strokeInterval + 3);
    context.fillText("-" + label2, centerX + strokeWidth * 2, centerY + strokeInterval * 2 + 3);
}


const R = strokeInterval * 2;

function convertArgs(iX, iY) {
    const rect = canvas.getBoundingClientRect();
    const x = iX - rect.left - centerX;
    const y = iY - rect.top - centerY;
    return [x, y];
}


function drawPoint(x, y, color) {
    context.beginPath();
    context.arc(centerX + x, centerY + y, 5, 0, 2 * Math.PI);

    context.fillStyle = color
    context.fill();
    context.closePath();
}

function redrawPlot(r){
    drawPlot(r)
    drawPoints()
}

function drawPoints() {
    var arrData = [];
    var table = document.getElementById("results");
    var rows = table.getElementsByTagName("tr");

    for (var i = 1; i < rows.length; i++) { // Начинаем с 1, чтобы пропустить заголовки
        var currentRow = rows[i];
        var cells = currentRow.getElementsByTagName("td");

        var x = parseFloat(cells[0].textContent);
        var y = parseFloat(cells[1].textContent);
        var r = parseInt(cells[2].textContent);
        var status = cells[3].textContent === "Попадание";
        var time = cells[4].textContent;
        var scriptTime = cells[5].textContent;

        arrData.push({
            "x": x,
            "y": y,
            "r": r,
            "status": status,
            "time": time,
            "scriptTime": scriptTime
        });
    }
    arrData.forEach(dot => {
        drawPoint(dot.x/r*strokeInterval*2,-dot.y/r*strokeInterval*2,(dot.status ? "#34fd2e" : "#Fd2e2e"))

    });
}


