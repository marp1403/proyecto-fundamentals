class Tooltip{
     
    constructor(){
           this.container = document.querySelector('.article__demo-tooltip');
      
           this.btn = document.querySelector('.button');
           
           this.createTooltip = this.createTooltip.bind(this);
           this.removeTooltip = this.removeTooltip.bind(this);

           this.tooltipContainer = null;

           this.eventInit();

           
              

    }

    
      
    createTooltip(){

     let valueDataSet = this.btn.dataset.tooltip;

       if(!this.tooltipContainer){
         this.tooltipContainer = document.createElement('div');
         this.tooltipContainer.className = 'article__container-tooltip';

         this.tooltipContainer.innerHTML = `<p>${valueDataSet}</p>`;

         this.container.insertBefore(this.tooltipContainer, this.container.firstChild);
         
       }

     
    }

    removeTooltip(){
         
         if(this.tooltipContainer){
              this.container.removeChild(this.tooltipContainer);
              this.tooltipContainer = null;
              
         }
    }

    eventInit(){

       let time = null;  
      
       this.btn.addEventListener('mouseover', () =>{
           time = setTimeout(this.createTooltip, 300);
           console.log(time);
       });

       this.btn.addEventListener('mouseout', () =>{

              if(time){
                clearTimeout(time);
                time = null;
              }

              this.removeTooltip();

              
       });

      
    
          
     }


}

new Tooltip();