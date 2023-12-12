let mobile = document.getElementById('mobile');
let year = document.getElementById('year');
console.log(mobile)
console.log(year)
console.log(mobile.value)

const handle = ()=>{
    console.log("handle called");
    if (mobile.value.length < 10)
    {
        alert("mobile number invalid");
        return;
    }
    else if (year.value.length > 2 || year.value.length === 1)
    {
        alert("Year is invalid");
    }
}