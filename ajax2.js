console.log("correcto");

const xhttp = new XMLHttpRequest();
xhttp.open('GET', 'catalogo.json', true);
xhttp.send();
xhttp.onreadystatechange = function (){
    if(this.readyState == 4 && this.status == 200){
        console.log(this.responseText);
        let datos = JSON.parse(this.responseText);
        console.log('Ahora lo imnpro en modo JSON');
        console.log(datos);
        console.log('IMPRESO!');
    }
}

