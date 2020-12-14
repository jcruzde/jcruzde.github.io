const xhttp = new XMLHttpRequest();
xhttp.open('GET', 'personal_data/description.json', true);
xhttp.send();
xhttp.onreadystatechange = function (){
    if(this.readyState == 4 && this.status == 200){
        let datos = JSON.parse(this.responseText);

        let res = document.querySelector('#education_block');
        res.innerHTML = '';
        res.innerHTML += `<p>${datos.description}</p>`
    
    }
}