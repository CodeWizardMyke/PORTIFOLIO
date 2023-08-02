const urlBase ={
    home:'/browser',
    profile:'/profile',
    project:'/projects',
    github:'https://github.com/williamOF',
    linkedn:'https://www.linkedin.com/in/myke-william-836381244/',
    instagram:'#',
    feedback:'#'
};

document.querySelector('#bt-home').addEventListener('click',()=>{
    window.location.href = urlBase.home;
});
document.querySelector('#bt-profile').addEventListener('click',()=>{
    window.location.href = urlBase.profile;
});
document.querySelector('#bt-project').addEventListener('click',()=>{
    window.location.href = urlBase.project;
});
document.querySelector('#bt-github').addEventListener('click',()=>{
    window.open(urlBase.github, '_blaank' );
});
document.querySelector('#bt-linkedn').addEventListener('click',()=>{
    window.open(urlBase.linkedn, '_blaank' );
});
document.querySelector('#bt-ig').addEventListener('click',()=>{
    window.open(urlBase.instagram, '_blaank' );
});
document.querySelector('#bt-feedback').addEventListener('click',()=>{
    window.location.href = urlBase.feedback;
});

let buttonHomeProject = document.querySelector('.bt-primary')
if(buttonHomeProject){
    buttonHomeProject.addEventListener('click',()=>{
        window.location.href = urlBase.project;
    });
}