//Caso 1
const value = "ES6600190020961234567890";
const pattern = /ES\d{22}$/;
console.log(pattern.test(value));

//Caso 2
const value1 = ["ES6600190020961234567890","ES66 0019 0020 9612 3456 7890"];
const pattern1 = /^ES\d{2}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/;
value1.forEach(value => {
 console.log('Regex matchs with ' + value +'? ->', pattern1.test(value));
});

//Caso 3
const value2 = ["ES6600190020961234567890"]
const pattern2 = /^(ES)(\d{2})\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/;;
value2.forEach(value => {
 var array = pattern2.exec(value);
 var pais = array[1];
 var control = array[2];
 console.log('Regex matchs with ' + value+'? ->', pattern2.exec(value));
 console.log('El código de país es: ' + pais);
 console.log('El dígito de control es: ' + control);
});
