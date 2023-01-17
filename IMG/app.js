//Caso 1
const value = '<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>';
const pattern = /src="(.*)"/;
console.log('Regex matchs with ' + value +'? ->', pattern.exec(value));
console.log('El contenido del src es: '+ pattern.exec(value)[1]);

//Caso 2

const value1 = [`<html>
  <body>
    <img
      src="https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg"/>
    <h1>ejemplo</h1>
    <img
      src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>
  </body>
</html>`];
const pattern1 = /<img\s{1,}src="(.*)"\/\>/gim;
value1.forEach(value => {
 console.log('Regex matchs with ' + value +'? ->', value.match(pattern1));
})