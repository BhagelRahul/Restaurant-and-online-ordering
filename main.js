const counters =document.querySelectorAll('.number');
 console.log(counters);

 counters.forEach(number => {
    number.innerText='0';
    let target=+number.getAttribute('data-target');
    console.log(target);
    
    let count=0;

    function incrementcounter(){
        if(count<target){
            count++;
            number.innerText=count;
            setInterval(incrementcounter,100);
        }else{
            number.innerText=target;
    }
   
    }
    incrementcounter();
    
});



//validation form

function data1() {

    var a = document.getElementById('name1').value;
    var b = document.getElementById('phone1').value;
    var c = document.getElementById('mail1').value;
   
    if (!a.match(/^[A-Za-z]+$/)) {
        alert("Only alphabets are allowed for UserName");
        return false;
    }

    else if (!b.length<10) {
        alert("invalid phone number");
        return false;
    }


    else if (!c.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        alert("Enter a valid email id");
        return false;
    }
   
    return true;
}

//submit///

function submit(){
    let jama =document.getElementById('jama');
    alert("Submitted Successfully");
}

   

 
   
