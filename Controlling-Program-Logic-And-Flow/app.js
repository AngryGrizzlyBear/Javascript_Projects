// if (1 === 1 ) {
//     console.log("It's True!")
// }

// // Performance Review
// // 3 - superstar 
// // 2 - meets expectations
// // 1 - needs improvement
// // anything else - wtf?

// let rating = 3;

// if (rating === 3) {
//     console.log('YOU ARE A SUPERSTAR!')
// }
// else if (rating === 2) {
//     console.log("MEETS EXPECTATIONS")
// } else if (rating === 1) {
//     console.log('NEEDS IMPROVEMENT')
// } else {
//     console.log("You need re-evaluation")
// }

// let password = 'kitty';

// if (password.length >= 6){
//     if(password.indexOf(' ') === -1){
//      console.log('Valid Password!')   
//     } else {
//         console.log('Password is long enough, but cannot contain spaces');
//     }
// } else {
//     console.log("Password must be longer")
// }

function validPassword (password, username){
    if (password.length == 8 &&  password != "" && password != username){
        return true
    }
    return false
}

function teacherValidPassword(){
    if(password.length < 8){
        return false
    }
    if(password.indexOf(' ') !== -1){
        return false
    } 
    if(password.indexOf(username) !== -1){
        return false
    }
    return true
}

function average(arr){
    let total = 0;

    for(let num of arr){
        total += num;
    }
    let res = total / arr.length;
    // return res;
}