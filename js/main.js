let output = document.getElementById("cal") ; 

function display(num)
{
    output.style.color = 'rgb(19, 96, 177)'; 
    output.value += num  ; 
}

function Clear()
{
    output.value = "" ;  
}

function Delete()
{
    if(output.value === "Syntax ERROR") output.value="" ; 
    output.value = output.value.slice(0,-1) ; 
}

function Calc()
{
    try
    {
        output.value =  eval(output.value); 
        output.style.color ='#157220'; 
    }
    catch(err)
    {
        output.value ="Syntax ERROR" ; 
        if(output.value === "Syntax ERROR") 
        {
            output.style.color = 'rgba(228, 37, 37, 0.827)'; 
            setInterval(function(){output.value +='.'},500)
            setTimeout(function(){location.reload();},2000)
        }
}
}