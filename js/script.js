window.addEventListener("load",()=>{
    document.querySelector('.main').classList.remove("hidden");
    document.querySelector('.home_part').classList.add('active');
    document.querySelector('.page_loader').classList.add('fade-out');
    setTimeout(() => {
        document.querySelector('.page_loader').style.display = "none";
    }, 600);
})

/*------------------------------------------------ 
toggle navbar
-------------------------------------------------*/
const navToggler = document.querySelector(".nav_toggler");
navToggler.addEventListener("click",(e)=>{
    hideSection();
    toggleNavbar();
    document.body.classList.toggle('hide_scrolling');
})
function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavbar(){
    document.querySelector(".header_part").classList.toggle('active');
}
/*------------------------------------------- 
active section
----------------------------------------------*/
document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("link_item") && e.target.hash !== ""){
        // active the overlay to prevent multiple clicks
        document.querySelector(".overlay").classList.add("active");
        navToggler.classList.add('hide');
        if(e.target.classList.contains("nav_item")){
            toggleNavbar();
        }else{
            hideSection();
            document.body.classList.add('hide_scrolling');
        }
        setTimeout(() => {
            document.querySelector('section.active').classList.remove("active","fade-out");
            document.querySelector(e.target.hash).classList.add('active');
            window.scrollTo(0,0);
            document.body.classList.remove('hide_scrolling');
            navToggler.classList.remove('hide');
            document.querySelector(".overlay").classList.remove("active");
        }, 500);
    }
})
/*---------------------------------------
About Tabs
-----------------------------------------*/
const tabsContainer = document.querySelector(".about_tabs");
const about_section = document.querySelector('.about_part');

tabsContainer.addEventListener("click",(e)=>{
    // console.log(e.target)
    if(e.target.classList.contains("tab_item") && !e.target.classList.contains('active')){
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add('active');
        const target = e.target.getAttribute("data-target");
        about_section.querySelector(".tab-content.active").classList.remove("active");
        about_section.querySelector(target).classList.add("active");
    }
})


/*------------------------------------------- 
Portfolio Item Details Popup
---------------------------------------------*/
document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("view_project_btn")){
        togglePortfolioPopup();
        document.querySelector(".portfolio_popup").scrollTo(0,0);
        portfolioItemDetails(e.target.parentElement);
    }
})

function togglePortfolioPopup(){
    document.querySelector(".portfolio_popup").classList.toggle("open");
    document.body.classList.toggle("hide_scrolling");
    document.querySelector(".main").classList.toggle('fade-out');
}

document.querySelector(".pp_close").addEventListener("click",togglePortfolioPopup);

// hide popup when clicking outsite of it

document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("pp_inner")){
        togglePortfolioPopup();
    }
})

function portfolioItemDetails(portfolioItem){
    document.querySelector('.pp_thumbnail img').src = 
    portfolioItem.querySelector(".portfolio_item_thumbnail img").src;

    document.querySelector('.pp_header h3').innerHTML = 
    portfolioItem.querySelector(".portfolio_item_title").innerHTML;

    document.querySelector(".pp_body").innerHTML = 
    portfolioItem.querySelector('.portfolio_item_details').innerHTML;
}

