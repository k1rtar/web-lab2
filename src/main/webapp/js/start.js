const validator = new Validator();

window.onload = function () {
    redrawPlot("R");
    document.querySelectorAll('input[class="custom-checkbox"]').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('input[class="custom-checkbox"]').forEach(button =>{
            })
            validator.lastClickedX = button.value;
        })
    })

    document.querySelectorAll('input[name="r"]').forEach(radio => {
        radio.addEventListener('click', () => {
            validator.lastClickedR = radio.value;
            redrawPlot(validator.lastClickedR);
        })
    })

    canvas.addEventListener('click', function(event) {
        const rRadios = document.querySelectorAll("input[name='r']");
        let r = null;
        for (const radio of rRadios) {
            if (radio.checked) {
                r = radio.value;
                break;}}
        if (r === null) {
            alert("Выберите значение R.");
            return;
        }
        let [x, y] = convertArgs(event.clientX, event.clientY)
        x = (x / strokeInterval) * r / 2
        y = (-y/strokeInterval)*r/2
        if (!validator.checkAllRange(x,y,r)){
            alert("Ошибка: недоступный диапазон")
        }
        else{
        sendPoint(x, y, r)
            }
    });

    document.querySelectorAll('form').forEach(function(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
        });
    });


}