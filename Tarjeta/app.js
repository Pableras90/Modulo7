const value = ["5299 6400 0000 0000","5299-6400-0000-0000","5299640000000000"];
const pattern = /^(\d{4})(?:\s|-)?(\d{4})(?:\s|-)?(\d{4})(?:\s|-)?(\d{4})$/;
value.forEach(value => {
 console.log('Regex matchs with ' + value +'? ->', pattern.test(value));
 console.log('Grupo de 4 ->', pattern.exec(value));
  
});