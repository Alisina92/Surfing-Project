function onClickMenu(){
    document.getElementById("ham-menu").classList.toggle("change");
    document.getElementById("nav-menu").classList.toggle("change");
    
}
function validateForm(){
    let theForm = document.getElementById('register');
    let theName = document.getElementById('fName');
    let theEmail = document.getElementById('email');
    let theMessage = document.getElementById('message');
    let theDate = document.getElementById('birthday');
    let errorElement = document.getElementById('error');

    theForm.addEventListener('submit',(event)=>{
        let message =[];
        if(theName.value===''){
           message.push('The name is required');
        } 
        if(theEmail.value===''|| !theEmail.includes('@')){
            message.push('The email is required'); 
        }else{
            message.push('The "@" is required'); 
        }
        if(theMessage.value ===''){
            message.push('message is required');
        } 
        if(theDate.value ===undefined){
            message.push('Enter your date of Birth');
        }
        if(message.length>0){
            event.preventDefault();
            errorElement.innerHTML =message.join(' , ')
        }
        
    });
}
