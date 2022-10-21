/* Navbar feature */
document.addEventListener("click", (ele) => {
  const isDropdownButton = ele.target.matches("[data-dropdown-button]");
  if (!isDropdownButton && ele.target.closest("[data-dropdown]") != null)
    return;

  let currentDropdown;
  if (isDropdownButton) {
    currentDropdown = ele.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle("active");
  }

  document.querySelectorAll("[data-dropdown].active").forEach((dropDown) => {
    if (dropDown === currentDropdown) return;
    dropDown.classList.remove("active");
  });
});
//////////////////////////////////////////////////////////////

/* Area default focus button */
document.querySelector("#all").classList.add("defaultFocus")
/* Area of interest cards */
document.querySelectorAll("[data-button]").forEach((ele) =>{
   ele.addEventListener("click",function(){
    const target = ele.dataset.button;
    let focus = document.querySelectorAll("[data-button]");
    let filterCard;
    switch(target){
      case "all" : for(let i=0;i<focus.length;i++){
                      if(focus[i].dataset.button == "all"){
                      focus[i].classList.add("defaultFocus");
                    }else{
                      focus[i].classList.remove("defaultFocus");
                    }
                  };
                    filterCard = document.querySelectorAll("[data-name]");
                    for(let i=0;i<filterCard.length;i++){
                      filterCard[i].classList.remove("cardsCls");
                    }
                    break;
      case "seo" :  for(let i=0;i<focus.length;i++){
                      if(focus[i].dataset.button == "seo"){
                      focus[i].classList.add("defaultFocus");
                    }else{
                      focus[i].classList.remove("defaultFocus");
                    }
                  };
                  filterCard = document.querySelectorAll("[data-name]");
                    for(let i=0;i<filterCard.length;i++){
                      if(filterCard[i].dataset.name != "seo"){
                      filterCard[i].classList.add("cardsCls");
                    }else{
                      filterCard[i].classList.remove("cardsCls");
                    }
                  };
                    break;
      case "content" : for(let i=0;i<focus.length;i++){
                      if(focus[i].dataset.button == "content"){
                      focus[i].classList.add("defaultFocus");
                    }else{
                      focus[i].classList.remove("defaultFocus");
                    }
                  };
                    filterCard = document.querySelectorAll("[data-name]");
                    for(let i=0;i<filterCard.length;i++){
                      if(filterCard[i].dataset.name != "content"){
                      filterCard[i].classList.add("cardsCls");
                    }else{
                      filterCard[i].classList.remove("cardsCls");
                    }
                  };
                    break;
      case "market" : for(let i=0;i<focus.length;i++){
                      if(focus[i].dataset.button == "market"){
                      focus[i].classList.add("defaultFocus");
                    }else{
                      focus[i].classList.remove("defaultFocus");
                    }
                  };
                    filterCard = document.querySelectorAll("[data-name]");
                    for(let i=0;i<filterCard.length;i++){
                      if(filterCard[i].dataset.name != "market"){
                      filterCard[i].classList.add("cardsCls");
                    }else{
                      filterCard[i].classList.remove("cardsCls");
                    }
                  };
                    break;
      case "advert" :  for(let i=0;i<focus.length;i++){
                      if(focus[i].dataset.button == "advert"){
                      focus[i].classList.add("defaultFocus");
                    }else{
                      focus[i].classList.remove("defaultFocus");
                    }
                  };
                    filterCard = document.querySelectorAll("[data-name]");
                    for(let i=0;i<filterCard.length;i++){
                      if(filterCard[i].dataset.name != "advert"){
                      filterCard[i].classList.add("cardsCls");
                    }else{
                      filterCard[i].classList.remove("cardsCls");
                    }
                  };
                    break;
      case "smm" :  for(let i=0;i<focus.length;i++){
                      if(focus[i].dataset.button == "smm"){
                      focus[i].classList.add("defaultFocus");
                    }else{
                      focus[i].classList.remove("defaultFocus");
                    }
                  };
                    filterCard = document.querySelectorAll("[data-name]");
                    for(let i=0;i<filterCard.length;i++){
                      if(filterCard[i].dataset.name != "smm"){
                      filterCard[i].classList.add("cardsCls");
                    }else{
                      filterCard[i].classList.remove("cardsCls");
                    }
                  };
                    break;
      default : break;
                    
    }
});
});