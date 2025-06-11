/*=============== EMAIL JS ===============*/
const contactForm=document.getElementById('contact-form'),
      contactMessage=document.getElementById('contact-message')

const sendEmail =(e) =>{
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_6awpxya','template_n9mu7xg','#contact-form','XtVD9-A1KhSnivm5F')
    .then(()=>{
        //show sent message
        contactMessage.textContent=' Message sent successfully ✅'

        // Remove message after five seconds
        setTimeout(()=>{
            contactMessage.textContent=''
        },5000)//3andou 7a9 yektb 5000 caracteres.

        // Clear input fields
        contactForm.reset()//bech eli ktebtou ki tab3thou yetfasa5
    },()=>{
        // Show error message
        contactMessage.textContent='Message not sent (service error) ❌'//hathi ki tji erreur fil code
    })

}
contactForm.addEventListener('submit',sendEmail)