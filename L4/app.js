console.log("Hello Bhagwaan ji Mata ji");
function addHandle(a, b, cb) {
    var result = a + b;
    cb(result);
}
// addHandle(25,89,(result)=>{
//     console.log(result);
// })
addHandle(25, 54, function (result) {
    console.log(result);
});
