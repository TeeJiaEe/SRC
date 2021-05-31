
function getdet()
{
var d = new Date();
var name = prompt ("Enter your name:","John Doe");
document.getElementById("dispname").value = name;
document.getElementById('date').value = d;
}

function Process(){
    var Grade;
    var HOT1 =( document.getElementById("H1M").value/60)*15;
    var HOT2 =(document.getElementById("H2M").value/80)*10;
    var ASS = (document.getElementById("AM").value/30)*5;
    var MP = (document.getElementById("MPM").value/60)*30;
    var FE = (document.getElementById("FEM").value/100)*40;
    
    document.getElementById("H1P").value = HOT1;
    document.getElementById("H2P").value = HOT2;
    document.getElementById("AP").value = ASS;
    document.getElementById("MPP").value = MP;
    document.getElementById("FEP").value = FE;
    
    if(Number.isNaN(HOT1 && HOT2 && ASS && MP && FE) == true)
    {
        window.alert("Please key in number!");
    }
    else
    {
        var total= HOT1 +HOT2+ASS+MP+FE;
        document.getElementById("TM").value =total;
    }

    
    if( total >= 80 && total<=100)
                    {
                    Grade = "A";
                    }
        else if( total >= 70 && total <=79 )
                    {
                    Grade = "B";
                    }
        else if( total >= 60 && total <=69 )
                    {
                    Grade = "C";
                    }
        else if( total >= 50 && total<=59 )
                    {
                    Grade = "D";
                    }
        else if( total <= 49 )
                    {
                    Grade = "E";
                    }
    document.getElementById("Grade").value= Grade;
    }
    





