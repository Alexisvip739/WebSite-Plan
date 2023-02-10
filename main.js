
const accordionItems=document.querySelectorAll('.questions__item');
accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector('.questions__header')

    accordionHeader.addEventListener('click', () =>{
        const openItem = document.querySelector('.accordion-open')
        console.log(openItem);
        toggleItem(item)

        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
})

// slide in te card
const toggleItem = (item) =>{
    const accordionContent = item.querySelector('.questions__content')

    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }

}

// function mode dark 
function enableDarkMode(){
    let dark_mode=document.body;
    let checkbox=document.getElementById('checkitem');
    dark_mode.classList.toggle('dark-mode')

    if(checkbox.checked==true){

        document.querySelectorAll('.items-instruccion').forEach(item=>{
           item.style.backgroundColor="#252525"
        })
        document.getElementById('faqs').style.backgroundColor="#1c5b4f"
        document.getElementById('faqs').style.color="#252525"

    }else{
        console.log('desable')
        document.querySelectorAll('.items-instruccion').forEach(item=>{
            item.style.backgroundColor="#ffffff"
        })
    
    }
    
    
}

