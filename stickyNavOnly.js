 window.addEventListener("load",function set_sticky_nav(){
   var stick_height, navbar;
   var breadcrumbs=document.getElementById("page-navbar");
   navbar=document.getElementById("section-0");
   stick_height=breadcrumbs.offsetTop;
   stick_height-=15;
	var nav_drawer=document.getElementById("nav-drawer");

	var nav_drawer_top=nav_drawer.offsetTop;
  if(window.pageYOffset>=stick_height){
    nav_drawer.setAttribute("data-region2","drawer");
    navbar.classList.add("sticky");

  }else{
    nav_drawer.removeAttribute("data-region2");
    nav_drawer.style.top=nav_drawer_top;
    navbar.classList.remove("sticky");
  }
});
