// Password Generator Function - http://www.net-comber/charset.html

<script src="./"></script>

function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomNumber(){ 
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol () {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor (Math.random() * symbnols.length)];
}

console.log(getRandomSymbol());