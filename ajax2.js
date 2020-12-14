
const xhttp = new XMLHttpRequest();
xhttp.open('GET', 'catalogo.json', true);
xhttp.send();
xhttp.onreadystatechange = function (){
    if(this.readyState == 4 && this.status == 200){
        let datos = JSON.parse(this.responseText);

        let res = document.querySelector('#education_block');
        res.innerHTML = '';
        for(let item of datos){
            res.innerHTML += `
                <h4>${item.titulo}</h4>
                <h5>${item.artista}</h5>
            
            `
        }
    
    }
}

