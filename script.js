const selectButton = document.querySelector('select')
const image = document.querySelector('img')
const link = document.querySelector('a')


const clickWeCare = ()=>{
if(selectButton.value === 'easy-shopping'){
  image.src = './img/easyShopping.png'
  link.href = 'https://easyshoppingdev.netlify.app/'
}

else if(selectButton.value === 'wide-coverage'){
  image.src = './img/wideCoverage.png'
  link.href = 'https://desafio-css01.netlify.app/'
}

else if(selectButton.value === 'currencyConverter'){
  image.src = './img/currencyConverter.png'  
  link.href = 'https://currencyconverterdev13.netlify.app/'}

else if(selectButton.value === 'drawer'){
  image.src = './img/drawer.png'  
  link.href = 'https://drawerdev13.netlify.app/'}

else if(selectButton.value === 'stopwatch'){
  image.src = './img/stopwatch.png'  
  link.href = 'https://stopwatchdev13.netlify.app/'}

else if(selectButton.value === 'jokenpo'){
  image.src = './img/jokenpo.png'  
  link.href = 'https://jokenpodev13.netlify.app/'}
  
else if(selectButton.value === 'project-presentation'){
  image.src = './img/projectPresentation.png'  
  link.href = 'https://fasstburguerdev13.netlify.app/'}  
    
else if(selectButton.value === 'iphone-page'){
  image.src = './img/iphonePage.png'  
  link.href='https://iphone-site1.netlify.app/'
}     
}





selectButton.addEventListener('click',clickWeCare)