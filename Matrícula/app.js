const value = ["2021 GMD","2345-GMD","4532BDB","0320-AAA"];
const pattern = /^(\d{4})(?:\s|-)?([A-Z]{3})$/;
value.forEach(value => {
 console.log('Regex matchs with ' + value +'? ->', pattern.test(value));
    console.log('Numeros: ' + pattern.exec(value)[1] +', Letras: ' + pattern.exec(value)[2]);
})