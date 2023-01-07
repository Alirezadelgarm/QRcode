const generateBtn=document.querySelector('form button');
const qrCodeBox=document.querySelector('.qr-code');
const qrInput=document.querySelector('form input');
const qrImage=document.querySelector('.qr-code img');
const loading=document.querySelector(".loading")
let sppiner=`<div class="spinner-border text-primary" role="status"> </div>`


generateBtn.addEventListener('click',()=>{
   let qrValue=qrInput.value
   if(!qrValue){
    return alert("yek chizi vared kon")
   }

    generateBtn.innerText="production process QR code"
    qrImage.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`
    
   

    loading. insertAdjacentHTML('afterbegin',sppiner)
    

    qrImage.addEventListener('load',()=>{
        qrCodeBox.classList.remove('hidden')
    generateBtn.innerText="generate QR code"
     let elem =document.querySelector(".spinner-border")
     elem.remove()
   
    })
})


qrInput.addEventListener('keyup',()=>{
    if(!qrInput.value){
        qrCodeBox.classList.add("hidden")
    }
})

