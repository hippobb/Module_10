// create the about section
const generateAbout = aboutText => {
  if (!aboutText) {
    return '';
  }

  return `
    <section class="my-3" id="about">
      <h2 class="text-dark bg-primary p-2 display-inline-block">About Me</h2>
      <p>${aboutText}</p>
    </section>
  `;
}


const generateManager = projectsArr => {  
  console.log(projectsArr);
  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Employee Portfolio</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link rel="stylesheet" href="style.css">
  </head>
  
  <body>
  <header>
    <div class="header ">
      <h1 class="page-title ">My Team</h1>
      <nav class="flex-row">
      </nav>
    </div>
  </header>
  <div class="row">
    <div class="col-12 col-sm-4">
      <div class="card">
        <div class="card-body">
          <h3 class="card-title">${projectsArr.manager[0].name}</h3>
          <h3 class="card-title"><i class="fas fa-mug-hot"></i> Manager</h3>
          <h5 class="card-text">Employee ID: ${projectsArr.manager[0].employee_id}</h5>
          <h5 class="card-text">Office Number:  ${projectsArr.manager[0].office_num} </h5>
          <a href="mailto:${projectsArr.manager[0].email}"class="portfolio">email: ${projectsArr.manager[0].email}</a>
        </div>
      </div>
    </div>  
  </div>
`;
}


const generateEngineer = projectsArr => {
  return `
        <div class="col-12 col-sm-4">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title">${projectsArr.name}</h3>
              <h3 class="card-title"><i class="fas fa-glasses"></i> Engineer</h3>
              <h5 class="card-text">Employee ID: ${projectsArr.employee_id}</h5>
              <h5 class="card-text">Office Number:  ${projectsArr.office_num} </h5>
              <a href="mailto:${projectsArr.email}"class="portfolio">email: ${projectsArr.email}</a></br>
              <a href="https://github.com/${projectsArr.Github}" class="btn"><i class="fab fa-github"></i> GitHub</a>
              </div>
            </div>
        </div>
    `;
}
const generateRowstrat = ()=>  {
  return `
  <div class="row">
  `;
}
const generateRowend = ()=>  {
  return `
  </div>
  `;
}

const generateIntern = projectsArr => {
  return `
      <div class="col-12 col-sm-4">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">${projectsArr.name}</h3>
            <h3 class="card-title"><i class="fas fa-user-graduate"></i> Intern</h3>
            <h5 class="card-text">Employee ID: ${projectsArr.employee_id}</h5>
            <h5 class="card-text">Office Number:  ${projectsArr.office_num} </h5>
            <a href="mailto:${projectsArr.email}"class="portfolio">email: ${projectsArr.email}</a>
            <h5 class="card-text">School:  ${projectsArr.school} </h5>
          </div>
        </div>      
      </div>
    `;
}
const generateFooter = ()=>  {
  return `
    </main>
    <footer class="container text-center py-3">
    </footer>
  </body>
  </html>
  `;
}


// export function to generate entire page
module.exports = templateData => {
  // destructure page data by section
  //const { engineer, intern, ...header } = templateData;
let webPage= generateManager(templateData);
if(templateData.engineer.length>0){  
  webPage+=generateRowstrat();
  for( let i=0; i<templateData.engineer.length;i++){
    webPage+= generateEngineer(templateData.engineer[i]);
  }
  webPage+=generateRowend();
}
if(templateData.intern.length>0){  
  webPage+=generateRowstrat();
  for( let i=0; i<templateData.intern.length;i++){
    webPage+= generateIntern(templateData.intern[i]);
  }
  webPage+=generateRowend();
}
webPage+=generateFooter();
return webPage;
};
