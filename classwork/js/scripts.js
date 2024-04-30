var saveBtn = document.getElementById('saveBtn');
var resetBtn = document.getElementById('resetBtn');
var details = document.getElementById('customer_details');
var image = document.getElementById('image');
const form = document.getElementById("reg-form");
let grids;
let dataForm = document.forms['frmImg'];


 

var customers = [];
//     {  name: "Udeme John",
//        Phone: "07064110450",
//        Email:  "udemejohn26@gmail.com",
//        Gender: "Male",
//        Address: "Naze Owerri"
//     },
//     {  name: "Emma Jozy",
//        Phone: "08068650450",
//        Email:  "emmajozy6@gmail.com",
//        Gender: "Male",
//        Address: "Nekede Owerri"
//     },
//     {  name: "Chris Igbo",
//        Phone: "08053420450",
//        Email:  "chrisigbo6@gmail.com",
//        Gender: "Male",
//        Address: "Wetheral Owerri"
//     },
//     {   name: "Austin Igbo",
//         Phone: "0807252420",
//         Email:  "austineigbo@gmail.com",
//         Gender: "Male",
//         Address: "Naze Owerri"

//     },
//     {  
//         name: "bassey James",
//         Phone: "0807252420",
//         Email:  "austineigbo@gmail.com",
//         Gender: "Female",
//         Address: "Nekede Owerri"
//     },
    
// ];


// function displayImage() {
//     var img = document.createElement('img');
//     img.src = customer.image;
//     document.body.appendChild(img);

// }
resetBtn.addEventListener("click", function(e){
    // e.preventDefault();
    // alert("Am working")
    // fName.value = "";
    // phoneNo.value ="";
    // email.value = "";
    // address.value ="";
    // gender.value="Select";
    form.reset();
})

form.addEventListener("submit", function(ev){
    ev.preventDefault();
     let fName=document.getElementById('fName').value;
     let phoneNo = document.getElementById('phoneNo').value;
     let email = document.getElementById('email').value;
     let address = document.getElementById('address').value;
     let gender = document.getElementById('gender').value;
    //  let image = document.getElementById('image').value;
    let imageFile = dataForm['images'].files[0];

    let imageUrl = converFiletoUrl(imageFile);
    

    //  let image = document.files[image];


    // let image = document.form_name.imagetag.src=document.form_name.filetag.value;
    
    //  const customer = {
    //     name:document.getElementById('fName').value,
    //     PerformanceEntryhone: document.getElementById('phoneNo').value,
    //     Email: document.getElementById('email').value,
    //     Address: document.getElementById('address').value,
    //     Gender:document.getElementById('gender').value
    //  }

     
     const customer = {  
        name: fName,
        Phone: phoneNo,
        Email: email,
        Gender: gender,
        Address: address,
        image: imageUrl
        
    };
    customers.push(customer);
    form.reset();

   let grids = `<div class="items-item" >
                    <div class="details">
                        <div><img src="${customer.image}" class ="cus_Image"/></div>
                        <div>Name: ${customer.name} </div>
                        <div>Phone: ${customer.Phone} </div>
                        <div>Email: ${customer.Email} </div>
                        <div>Gender: ${customer.Gender} </div>
                        <div>Address: ${customer.Address} </div>
                    </div>
                    <div class="icons">
                        <span>
                            <i id="deleteIcon" class="fa-regular fa-trash-can" style="cursor: pointer;"></i>
                        </span>
                    </div>
                </div>`
//    <div class="items-item" >
//                     <div class="details">
//                         <div><img src="${customer.image}" class ="cus_Image"/></div>
//                         <div>Name: ${customer.name} </div>
//                         <div>Phone: ${customer.Phone} </div>
//                         <div>Email: ${customer.Email} </div>
//                         <div>Gender: ${customer.Gender} </div>
//                         <div>Address: ${customer.Address} </div>
//                     </div>
//                     <div class="icons">
//                         <div>
//                             <span>
//                                 <i id="deleteIcon" class="fa-regular fa-trash-can" style="cursor: pointer;"></i>
//                             </span>
//                         </div>
//                     </div>
//                 </div>
    details.insertAdjacentHTML('afterbegin', grids)
    console.log(customers);
// details.innerHTML+= grids;


 
    
})

let converFiletoUrl = (file) => {
    let imageUrl = URL.createObjectURL(file);
    return imageUrl;
}
// deleteIcon.addEventListener("click", function(e){
//         alert(e + " Are you sure you wanna delete it?")
// })


// grids = '';
// customers.forEach((customer) => {
//    grids += `<div class="items-item" >
//                 <div>Name: ${customer.name} </div>
//                 <div>Phone: ${customer.Phone} </div>
//                 <div>Email: ${customer.Email} </div>
//                 <div>Gender: ${customer.Gender} </div>
//                 <div>Address: ${customer.Address} </div>
//             </div>`
// })
// details.innerHTML= grids;

details.addEventListener('click', function(event){
   const response =  confirm("are you sure you wanna delete?") ;
    if(response){        
        const targetId = event.target.getAttribute('id');
        if(targetId == 'deleteIcon'){
            const childElement = event.target.parentNode.parentNode.parentNode;
            details.removeChild(childElement);
        }  
    }
})


// var a = 0;

// function fun(a) {
//     console.log(a);
//     var a = 5;
// }
// fun(10)

// i =100
// while (i <=20) {
//     console.log(i);
    
// }i+=20

// for (let i = 100; i <=200; i+=20) {
//     console.log(i);
    
// }