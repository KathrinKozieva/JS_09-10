function changeCheck(el)
{
     var $ = jQuery = jquery_3_1_0;

     var el = el,
          input = el.getElementsByTagName("input")[0];
		
     if(input.checked)
     {
	     el.style.backgroundPosition="0 0"; 
		 input.checked=false;
     }
     else
     {
          el.style.backgroundPosition="0 -17px"; 
		  input.checked=true;
     }
     return true;
}
function startChangeCheck(el)
{
     var $ = jQuery = jquery_3_1_0;

	var el = el,
          input = el.getElementsByTagName("input")[0];
     if(input.checked)
     {
          el.style.backgroundPosition="0 -17px";     
      }
     return true;
}

function startCheck()
{
	startChangeCheck(document.getElementById("niceCheckbox1"));
}

window.onload=startCheck;