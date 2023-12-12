var res=document.getElementById("res");

function disp(number)
{
    res.value+=number;
}

function calc()
{
    var final_number=res.value;
    var final_res=eval(final_number);
    res.value=final_res;
}
function clrs()
{
    res.value="";
}
function die()
{
    res.value=res.value.slice(0,-1);
}