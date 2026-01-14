function displaymenu(){
    document.getElementsByClassName("head1button")[0].classList.toggle("show");
}

document.getElementById("bars").addEventListener("click", displaymenu);

function displaylinks(){
    document.getElementsByClassName("header-section2")[0].classList.toggle("show");
    const icon = document.querySelector('.bars i');
    if (document.getElementsByClassName("header-section2")[0].classList.contains("show")) {
        icon.classList.replace('fa-angle-down', 'fa-angle-up');
    } else {
        icon.classList.replace('fa-angle-up', 'fa-angle-down');
    }
}
document.getElementsByClassName("bars")[0].addEventListener("click", displaylinks);
