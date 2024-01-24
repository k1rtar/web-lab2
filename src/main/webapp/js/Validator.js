class Validator {
    lastClickedX = null;
    lastClickedR = null;
    validateAll(){
        return this.validateX() && this.validateY() && this.validateR();
    }

    validateX(){
        return this.lastClickedX != null;
    }

    validateY(){
        let element = document.getElementById("y-input");
        let value = element.value.replace(',', '.');
        function isNumeric(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        }
        if (!isNumeric(value) || parseFloat(value) >= 3 || parseFloat(value) <= -3) {
            return false;
        }
        return true;
    }

    validateR(){
        return this.lastClickedR != null;
    }
    validateRangeX(x){
        if (x<=5 && x>=-5) return true
        return false
    }

    validateRangeY(y){
        if (y>-5 && y<5) return true
        return false
    }

    checkRange(x,y,r){
        return x<=4 && x>=-4 && (y>-3 && y<3) &&
            r<=5 && r>=1;
    }
    checkAllRange(x,y,r){
        return this.validateRangeX(x) && this.validateRangeY(y) && this.checkRange(x,y,r)
    }
}

