// Event Handler Function Code Start from Here(PL Code Start From Here)
function btnPlus_Click(){
    var no1=document.getElementById('txtNo1');
    var no2=document.getElementById('txtNo2');
    var result=document.getElementById('txtResult');
    var value_no1= parseInt( no1.value);
    var value_no2=parseInt( no2.value);
   var res= sum(value_no1,value_no2);
   result.value=res;
}

function btnSub_Click(){
    var no1=document.getElementById('txtNo1');
    var no2=document.getElementById('txtNo2');
    var result=document.getElementById('txtResult');
    var value_no1= parseInt( no1.value);
    var value_no2=parseInt( no2.value);
   var res= sub(value_no1,value_no2);
   result.value=res;
}

function btnmultiply_Click(){
    var no1=document.getElementById('txtNo1');
    var no2=document.getElementById('txtNo2');
    var result=document.getElementById('txtResult');
    var value_no1= parseInt( no1.value);
    var value_no2=parseInt( no2.value);
   var res= multiply(value_no1,value_no2);
   result.value=res;
}


function btndivide_Click(){
    var no1=document.getElementById('txtNo1');
    var no2=document.getElementById('txtNo2');
    var result=document.getElementById('txtResult');
    var value_no1= parseInt( no1.value);
    var value_no2=parseInt( no2.value);
   var res=divide(value_no1,value_no2);
   result.value=res;
}



// Event Handler Function Code Ends  Here(PL Code Ends  Here)

// Normal Function Code Start from Here(BLL Code Start From Here)
function sum(no1,no2){
    var res=no1+no2;
    return res;
}
function sub(no1,no2){
    var res=no1-no2;
    return res;
}
function multiply(no1,no2){
    var res=no1*no2;
    return res;
}
function divide(no1,no2){
    var res=no1/no2;
    return res;
}

// Normal Function Code Ends  Here(BLL Code Ends  Here)