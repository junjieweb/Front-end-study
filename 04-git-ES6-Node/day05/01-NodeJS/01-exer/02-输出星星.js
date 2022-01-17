for (let i = 1; i <= 5; i++) {
    // console.log('*'.repeat(i));
}
// *
// **
// ***
// ****
// *****

for (let i = 1; i <= 5; i++) {
    let str = '';
    for (let j = 1; j <= 2 * i - 1; j++) {
        str += '*';
    }
    // console.log(str);
}
// *
// ***
// *****
// *******
// *********


for (let i = 1; i <= 5; i++) {
    let str = '';
    for (let j = 5; j > i; j--) {
        str += ' ';
    }
    for (let k = 0; k < 2 * i - 1; k++) {
        str += '*';
    }

    console.log(str);
}
// i    1       j   4
// i    2       j   3
// i    3       j   2
// i    4       j   1
//     *
//    ***
//   *****
//  *******
// *********