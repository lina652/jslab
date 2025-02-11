const array1=['Pancake' ,'Eggs Benedict' ,'Oatmeal', 'Frittata'];
const array2=['12','22.99','21.99','15'];

const A =array1.map((item,index)=>`<p>item ${index+1} : ${item}- $${array2[index]}</p>`).join('');
document.getElementById('breakfast').innerHTML=A;

