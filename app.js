window.onload = () =>
{
     const buttons = document.querySelectorAll('.numbers');
     const textbox = document.querySelector('.textbox');
     const equals = document.querySelector('#btn-equals');
     const clear = document.querySelector('#btnclear');

    //  console.log(document.querySelectorAll('.numbers'));

    buttons.forEach(buttons=>{
        buttons.addEventListener('click',(e)=>{
            textbox.value += e.target.innerHTML.trim();
            //console.log(e.target.innerHTML,textbox.value);
            // console.log(trim(textbox.value));
        })
    })

    equals.addEventListener('click', (e)=>{
        if(!textbox.value)
        {
            textbox.value = "Enter value"
        } else{
            console.log(textbox.value);
            textbox.value = eval(textbox.value);
        }
    })
    clear.addEventListener('click', () =>{
        textbox.value = "";
    })
}