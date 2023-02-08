//Validación password

const pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
const value = ["Mahonesa35", "Mahonesa35*", "mahonesa", "Maho35*"];


value.forEach(value => {
    console.log('Password ' + value + '? ->', pattern.test(value));
});

//Validación URL
const pattern1 = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
const value1 = ["https://lemoncode.net/", "lemoncode.net/", "www.lemoncode.net", "https://www.marca.com/tenis.html?intcmp=MENUPROD&s_kw=tenis",];
value1.forEach(value => {
    console.log('Url ' + value + '? ->', pattern1.test(value));
});

//Validación ColorRGBA

const pattern2 = /^#([0-9a-f]{6}|[0-9a-f]{3})$/i
const value2 = ["#FFFFF", "#0000FF", "#DD3D3", "#99FF99",];
value2.forEach(value => {
    console.log('Color ' + value + '? ->', pattern2.test(value));
});