 var pro= document.querySelector('.pro')
 var subMenu= document.querySelector('.sub-menu')
 var icon= document.querySelector('.fas')

//  subMenu.style.display='none'
 pro.addEventListener('mouseover',()=>{
    pro.classList.add('hover')

 })

 pro.addEventListener('mouseout',()=>{
    pro.classList.remove('hover')

 })

 icon.addEventListener('click',()=>{
     if( pro.classList.contains('hover')){
         
         subMenu.classList.add('show')
         
          pro.addEventListener('mouseout',()=>{
            pro.classList.add('hover')


           })
     }else{
        subMenu.classList.remove('show')
        pro.classList.remove('hover')

     }
    
 })

 