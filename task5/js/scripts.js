// var select = document.querySelectorAll('.currency');
// var input_currency = document.getElementById('input_currency');
// var output_currency = document.getElementById('output_currency');

var submitBtn = document.getElementById('submitBtn');
var resetBtn = document.getElementById('resetBtn');


resetBtn.addEventListener('click', function (ev) {
    alert("connected")
})
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

    if(from == 'USD') output = input * dollar_rate;
    if(from == 'Naira') output=  input / dollar_rate
    output_currency.value= output.toLocaleString('en', 5);
  
})



