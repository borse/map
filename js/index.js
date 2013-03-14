// JavaScript Document
 //object ,  http://www.youtube.com/watch?feature=player_detailpage&v=9s733mQqxgE#t=432s


 




 
 //Variables: =============================================== --- VARIABLES--- =======================================

		 var res=
		  {
			  //create an empty div.. class = "div_animation_loader"
			  loader: $('<div />',{class: 'div_animation_loader'}),
				
				//select the container of this div
			  container: $('#div_print_table') 
			  
		  }//end of res
		 
		 
		//row max = size of row/
		 var row_max, random_num;
		 
		 
		//draw 2d array, fill it with zeros 
		arrayz=Create2DArray(10,10);
		 
		 
		//add squars to array
		/* arrayz[0][0]=2	;
		 arrayz[0][2]=1;
		 arrayz[0][3]=5;
		 arrayz[2][2]=1;
		 arrayz[5][7]=3;
		 arrayz[6][2]=5;
		 arrayz[3][0]=3;
		 arrayz[2][3]=4;
		 arrayz[8][6]=2;
		*/

//Events: ===================================================== --- EVENTS--- =======================================
 
 
 	
  	$(document).ready(function() {
 		
		  next();
		draw_map();
	 
 
	 });//$(document).ready(function() {
	 
	 $("#refresh").click(function() {
		  draw_map();
		 
	 });// $("refresh").onclick(function(){

//functions: =============================================== --- FUNCTIONS--- =======================================
 function position_element(element_id,x,y) 
 {
	 //get the element
	 
	 var element=document.getElementById(element_id);
 		element.style.position="absolute";
	 element.style.left=x+"px";
	 element.style.top=y+"px";
	 
	 //$("#div_status_change").animate({ 
     //   Left: "+=" +mouseLeft + "px",
    //}, 1000 );
	 
	 
	 
		
    //$('element').style.position = "absolute";
	//$('element').style.top += mouseTop  	;
	//$('element').style.left += mouseLeft   ;
 
}

function Create2DArray(rows,fields) {
	
	//bascially an array of arrays, each element of this array, contains an array
  var arr = [];

  for (var y=0;y<rows;y++) {
     arr[y] = [];
	  
	  for (var x=0;x<fields;x++)
	  {
	  arr[y][x]=-1;
	  }
  }

  return arr;
}

//draws appartment div in map
function insert_appartment(size,app_id,x,y)
{
	switch(size)
			{
				case 1:
				
						//add appartment div, give it app_id, which is is the appartment counter,.. and finally add class
					  $("#map").append('<div id= "app_'+ app_id +'" class="square_1"></div>');
						//position the div in the right place...  
					  position_element('app_'+app_id,x,y) ;
						
					
					  break;
					  
			 
			
				case 2:
				
					
					  $("#map").append('<div id= "app_'+ app_id +'" class="square_2"></div>');
					  position_element('app_'+app_id,x,y) ;
						
					
					  break;	
				case 3:
				
					
					  $("#map").append('<div id= "app_'+ app_id +'" class="square_3"></div>');
					  position_element('app_'+app_id,x,y) ;
						
					
					  break;
					  
			 
			
				case 4:
				
					
					  $("#map").append('<div id= "app_'+ app_id +'" class="square_4"></div>');
					  position_element('app_'+app_id,x,y) ;
						
					
					  break;		
				case 5:
				
					
					  $("#map").append('<div id= "app_'+ app_id +'" class="square_5"></div>');
					  position_element('app_'+app_id,x,y) ;
						
					
					  break;
					  
			 
			
				 
				  
				default:
					//push element 100px and draw nothing
			}//end of switch
	
	
}
  	 	
		
function check_block( x,y,random_num)
//this function checks if there is overlaping divs in the array
{
	for(var i=0;i<random_num;i++)
	{
		//check intital place
		if(arrayz[y][x]==0)
		{
			//divs overlap
			return false
		}//if(map[y][x]==0)
		
		//check skips for the  rest of the block
		if(arrayz[y][x+i]==0)
		{
			//divs overalap
			return false;
		}//if
 
	}//for
	
	//loop ended with no overlapping
	return true;
}//check_block


function insert_block( x,y,random_num)
//inserts new divs to array, 
{
	for (var i=0;i<random_num;i++)
	{
		if(i==0)
		{
			//insert the size of the random num
			arrayz[y][x]=random_num;

			if(random_num!=1)
			{
				//insert a # under it
				arrayz[y+1][x]=0;
			}//if

		}else  
		{//i is bigger than zero
			
			//add skips to the rest of the block
			arrayz[y][x+i]=0;

			if(random_num!=1)
			{
				arrayz[y+1][x+i]=0;

			}//if
		}//else
	}//for
}//insert_block


function next()
{
	for(var y=0;y<=8;y++)
		{
			//loop x axis
			for(var x=0;x<10;)//no increment for x
			{//nested
				
				if(arrayz[y][x]==0)
				{
					//skip this index
					x++;
					continue;
				}
				else
				{
					//generate random number between 1 and 5
					 random_num=randomlink();
					 
					 //if x + random number is smaller or eqaul to 10
					 if(x+random_num <= 10)
					 {
						 //check that no divs overlaps
						 if(check_block(x,y,random_num))
						 {//if true, its okay to insert divs
							 
							 insert_block(x,y,random_num);
							 //increment x
							 x+=random_num
						 }// if(check_block(x,y,random_num))
					 }//if(x+random_num <= 10)
					 
				}//else if if(map[y][x]==0)
			}//for x
		}//for y
		
}//next()
function draw_map()
{
	
	
	//get maps coordients, top left corner of map , map 0,0
 	var Mapx = $("#map").offset().left;
	var Mapy = $("#map").offset().top;
	
	//px is the pointer for appartments
	var Px =Mapx;
	var Py = Mapy;

	console.log('x: ' + Px + ' y: ' + Py);
	
	//counter for appartments
	var app_counter=0;
	
	//go through array, , each number = 100px.. 
	for (var y=0;y<10;y++) 
	{
     
		for (var x=0;x<10;x++)
		{
			
			var app_size= arrayz[y][x];
	 
			 //if size is bigger than 0, draw app div
			if(app_size>0)
			 {
				 
				 //appartment counter is used to name the div_id
				 app_counter++;
				 insert_appartment(app_size,app_counter,Px,Py);
					
				//altho size of appartment maybe greater than 100px.. we only skip 100px here, because there will be a bunch of zeros behind it, to 
				//to crosspond for its size
				Px=Px+100;
				 
				 
			 
			 }if(arrayz[y][x]==-1 || arrayz[y][x]==0 )
			 {
				//if zero skip on step to the right
				 Px=Px+100;
			 }//end of if
				 
		 	
		}//end of for x
		
		//row done,
		//go down one row
		Py+=100;
		//rest x positoin to far left
		Px = Mapx;
		
   }//end of for y
}//drawmap