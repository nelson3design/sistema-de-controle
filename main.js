 var pro= document.querySelector('.pro')
 var subMenu= document.querySelector('.sub-menu')
 var icon1= document.querySelector('.icon1')


  var cat= document.querySelector('.cat')
 var subMenu2= document.querySelector('.sub-menu-2')
 var icon2= document.querySelector('.icon2')

 
  var subcat= document.querySelector('.subcat')
 var subMenu3= document.querySelector('.sub-menu-3')
 var icon3= document.querySelector('.icon3')

 
  var marca= document.querySelector('.marca')
 var subMenu4= document.querySelector('.sub-menu-4')
 var icon4= document.querySelector('.icon4')


 pro.addEventListener('mouseover',mouseover)
 pro.addEventListener('mouseout',mouseout)
 

 function mouseover(){
     pro.classList.add('hover')
     
 }

 
 function mouseout(){
     pro.classList.remove('hover')
 }

 

 icon1.addEventListener('click',()=>{
 
    subMenu.classList.toggle('show')
    if(subMenu.classList.contains('show')){

       pro.classList.add('hover')
          pro.removeEventListener('mouseover',mouseover)
    subMenu2.classList.remove('show')
    subMenu3.classList.remove('show')
    subMenu4.classList.remove('show')
      cat.classList.remove('hover')
         subcat.classList.remove('hover')
          marca.classList.remove('hover')

 pro.removeEventListener('mouseout',mouseout)
 
    }else{
       
       pro.classList.remove('hover')
         
    
           pro.addEventListener('mouseover',mouseover)
   

 pro.addEventListener('mouseout',mouseout)
 
    }
 
 })


 
 cat.addEventListener('mouseover',mouseover2)
 cat.addEventListener('mouseout',mouseout2)
 

 function mouseover2(){
     cat.classList.add('hover')
     
 }

 
 function mouseout2(){
     cat.classList.remove('hover')
 }

 

 icon2.addEventListener('click',()=>{
 
    subMenu2.classList.toggle('show')
    if(subMenu2.classList.contains('show')){

       cat.classList.add('hover')
          cat.removeEventListener('mouseover',mouseover2)
     subMenu.classList.remove('show')
     subMenu3.classList.remove('show')
     subMenu4.classList.remove('show')
        pro.classList.remove('hover')
           subcat.classList.remove('hover')
            marca.classList.remove('hover')

 cat.removeEventListener('mouseout',mouseout2)
 
    }else{
       
       cat.classList.remove('hover')
  
           cat.addEventListener('mouseover',mouseover2)
   

 cat.addEventListener('mouseout',mouseout2)
 
    }


 })




 
 subcat.addEventListener('mouseover',mouseover3)
 subcat.addEventListener('mouseout',mouseout3)
 

 function mouseover3(){
     subcat.classList.add('hover')
     
 }

 
 function mouseout3(){
     subcat.classList.remove('hover')
 }

 

 icon3.addEventListener('click',()=>{
 
    subMenu3.classList.toggle('show')
    if(subMenu3.classList.contains('show')){

       subcat.classList.add('hover')
          subcat.removeEventListener('mouseover',mouseover3)
     subMenu.classList.remove('show')
     subMenu2.classList.remove('show')
      subMenu4.classList.remove('show')

        pro.classList.remove('hover')
         cat.classList.remove('hover')
           marca.classList.remove('hover')

 subcat.removeEventListener('mouseout',mouseout3)
 
    }else{
       
       subcat.classList.remove('hover')
           subcat.addEventListener('mouseover',mouseover3)
   

 subcat.addEventListener('mouseout',mouseout3)
 
    }


 })

 

  
 marca.addEventListener('mouseover',mouseover4)
 marca.addEventListener('mouseout',mouseout4)
 

 function mouseover4(){
     marca.classList.add('hover')
     
 }

 
 function mouseout4(){
     marca.classList.remove('hover')
 }

 

 icon4.addEventListener('click',()=>{
 
    subMenu4.classList.toggle('show')
    if(subMenu4.classList.contains('show')){

       marca.classList.add('hover')
          marca.removeEventListener('mouseover',mouseover4)
     subMenu.classList.remove('show')
     subMenu2.classList.remove('show')
      subMenu3.classList.remove('show')

        pro.classList.remove('hover')
         cat.classList.remove('hover')
          subcat.classList.remove('hover')

 marca.removeEventListener('mouseout',mouseout4)
 
    }else{
       
       marca.classList.remove('hover')
           marca.addEventListener('mouseover',mouseover4)
   

 marca.addEventListener('mouseout',mouseout4)
 
    }


 })

 

 

