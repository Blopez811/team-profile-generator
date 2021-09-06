const application = require('../index');
const fs = require('fs')
const generatePage = (team) => {
    console.log('generatepage')
    console.log(team);
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    </head>
    
    <body>
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <span class="navbar-brand mb-0 h1">Team</span>
            </div>
        </nav>
    
        <div>
           
        ${generateCards(team)}
    
        </div>
    
    </body>
    
    </html>
    `;
  };
const generateCards = (team) => {
    console.log('generateCards')
    console.log(team)
    console.log(team[0].name)
    function displayExtraInfo(team) {
        if(team[i].constructor.name === 'Manager') {
            return `Office number: ${team[i].number}`
        } else if(team[i].constructor.name === 'Engineer') {
            return `Github: ${team[i].github}`
        } else if(team[i].constructor.name === 'Intern'){
            return `School: ${team[i].school}`
        }
    }
    let htmlCard = ''
    for(let i = 0; i < team.length; i++) {
      htmlCard += `<div class="card" style="width: 18rem;">
       <div class="card-body">
           <h5 class="card-title">${team[i].name}</h5>
           <h6 class="card-subtitle mb-2 text-muted">${team[i].constructor.name}</h6>
           <p class="card-text">
           id: ${team[i].Id}
           Email: ${team[i].email}
           ${displayExtraInfo(team[i])}
           </p>
       </div>` 
    }
    return htmlCard
}
  module.exports = generatePage