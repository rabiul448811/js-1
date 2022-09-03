let togglerBtn = document.querySelector('nav .togglerBtn');
togglerBtn.addEventListener('click', sidebarOpen);

function sidebarOpen(){
    let Sidebar = document.querySelector('.sidebar');
    console.log('sidebar');
    Sidebar.classList.toggle('activeSideBar');
}