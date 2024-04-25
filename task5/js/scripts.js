// var select = document.querySelectorAll('.currency');
// var input_currency = document.getElementById('input_currency');
// var output_currency = document.getElementById('output_currency');

    var submitBtn = document.getElementById('submitBtn');
    var resetBtn = document.getElementById('resetBtn');
 
    submitBtn.addEventListener('click', function(e){
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const input = document.getElementById('input_currency').value;
    const output_currency = document.getElementById('output_currency');
    const dollar_rate = 1194.37;
    let output = 0;

 
    if(!from || !to || !input){
        alert("Please provide the necessary data");
        return;
    }

    if(from == 'USD' && to == 'Naira') {
        output = input * dollar_rate;
        }else if(from == 'USD' && to == 'USD'){
            output = input
            } else if(from == 'Select' || to == 'Select'){
                alert("Invalid option selected")

    }
    if(from == 'Naira' && to == 'USD') {
        output=  input / dollar_rate;
        }else if(from == 'Naira' && to == 'Naira') {
            output=  input ;
    }
    
    output_currency.value= output.toLocaleString('en', 5);
  
})
resetBtn.addEventListener('click', function(){
    document.getElementById('from').value ="Select";
    document.getElementById('to').value ="Select";
    document.getElementById('input_currency').value = "";
    document.getElementById('output_currency').value="";

    // const from = document.getElementById('from').value;
    // const to = document.getElementById('to').value;
    // const input_currency = document.getElementById('input_currency').value;
    // const output_currency = document.getElementById('output_currency').value;
    
    // from.reset();
    // to.reset();
    // input_currency.reset();
    // output_currency.reset();
})



