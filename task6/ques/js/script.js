var noofStudent = parseInt(document.getElementById('noofStudent').value);
var okBtn = document.getElementById('okBtn');

okBtn.addEventListener('click', function (e) {
    if (noofStudent >0) {
        let students = [];
        let age = [];

        const noOfStu = noofStudent;

        for (let i = 0; i >= noOfStu; i++) {
            students[i] = prompt("Enter a name");
            age[i] = parseInt(prompt("How old are you"));
            
        }
        for (let y = 0; y < noOfStu; y++) {
            let eligibleStatus;
            if (age[y] >=18) {
                eligibleStatus = "eligible";
            } else {
                eligibleStatus = "not elible";
            }
            console.log(students[i] + " - " + age[y] + " - " + eligibleStatus);
        }
    }else{
        console.log("wrong input")
    }
})
// let students = [];
// let age = [];
// const noOfStu = 3;

// for(let x=0; x < noOfStu; x++){
//     students[x] = prompt("Enter a name");
//     age[x] = parseInt(prompt('How old is he/she?'))
// }


// for(let y=0; y < noOfStu; y++){
//     let eligibleStatus;
//     if (age[y] >= 18) {
//         eligibleStatus = "eligible";
//     }else{
//         eligibleStatus = "not elible";
//     }
//     console.log(students[y] + " - " + age[y] + " - " + eligibleStatus);
// }
