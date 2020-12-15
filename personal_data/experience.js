var xhttp = new XMLHttpRequest();
xhttp.open('GET', 'personal_data/experience.json', true);
xhttp.send();
xhttp.onreadystatechange = function (){
    if(this.readyState == 4 && this.status == 200){
        let experience = JSON.parse(this.responseText);

        let res = document.querySelector('#experience_block');
        res.innerHTML = '';
        for(let item of experience){
            res.innerHTML += `
                <div class="resume-item">
                <h4>${item.titulo}</h4>
                <h5>${item.startDate} - ${item.endDate}</h5>
                <p><em>${item.company}</em></p>
                <ul>
                  <li>${item.description}</li>
                  <img style="border-radius: 30px;" src="http://drive.google.com/uc?export=view&id={{experience.skills}}" width="300" height="200">
                </ul>
                </div>
            `
        }
    
    }
}
