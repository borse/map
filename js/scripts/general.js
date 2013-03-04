// JavaScript Document
//================================= Wrappers====================================
 
//================================= ANIMATION FUNCTIONS===================

function hide_element(element,speed)
  {
	  $('#'+element).hide(speed);
  }//end of function_hide element
  
function show_element(element,speed)
  {
	  $('#'+element).show(speed);
  }//end of function_show element
  
  
  function toggle_element(element,speed)
  {
	  $('#'+element).toggle(speed);
  }//end of toggle_element element
  
  
  
  function fade_out_element(element, speed)
  {
		$('#'+element).fadeOut(speed, function() {
		
		hide_element(element,speed);
		});
		
		
  }//end of function fade_out_elemnt
  
  function fade_in_element(element, speed)
  {
		$('#'+element).fadein(speed);
  }//end of function fade_in_elemnt
  
  
  
  //move any element to the clicked position
  function move_element(element_id) 
 {
	 //get the element
	 
	 var element=document.getElementById(element_id);
	 element.style.position="absolute";
	 element.style.left=mLeft+"px";
	 element.style.top=mTop+"px";
	 
	 //$("#div_status_change").animate({ 
     //   Left: "+=" +mouseLeft + "px",
    //}, 1000 );
	 
	 
	 
		
    //$('element').style.position = "absolute";
	//$('element').style.top += mouseTop  	;
	//$('element').style.left += mouseLeft   ;
 
}

