
let red = document.querySelector(".red")
let orange = document.querySelector('.orange')
let green = document.querySelector('.green')
let grey = document.querySelector('.grey')
let btn  = document.querySelector('.btn')



 function chgColor(){
     setTimeout(vert, 2000);
     setTimeout(caca, 4000);
     setTimeout(rouge , 6000);
 }


        function vert(){
            green.classList.add('grey')
            orange.classList.remove('grey')
        }

        function caca(){
            orange.classList.add('grey')
            red.classList.remove('grey')
        }

        function rouge(){
            red.classList.add('grey')
            green.classList.remove('grey')
     
        }
        
    
        

           