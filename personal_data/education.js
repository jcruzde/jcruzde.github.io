const xhttp = new XMLHttpRequest();
xhttp.open('GET', 'personal_data/education.json', true);
xhttp.send();
xhttp.onreadystatechange = function (){
    if(this.readyState == 4 && this.status == 200){
        let datos = JSON.parse(this.responseText);

        let res = document.querySelector('#education_block');
        res.innerHTML = '';
        for(let item of datos){
            res.innerHTML += `
                <div class="resume-item">
                <h4>${item.titulo}</h4>
                <h5>${item.startDate} - ${item.endDate}}</h5>
                <p><em>${item.institution}</em></p>
                </div>
            `
        }
    
    }
}

