class ToggleMenu{

    constructor(menuContainer, btnToggle){
        this.menuContainer = document.querySelector(menuContainer);
        this.btnToggle = document.querySelector(btnToggle);
        this.toggleEvent();
        
    }

    toggleEvent(){
      
       this.btnToggle.addEventListener("click", () => {
          
        this.menuContainer.classList.toggle('navigation--show-items');
          
           });
    }


}



new ToggleMenu(".navigation", ".header__btn-toggle");