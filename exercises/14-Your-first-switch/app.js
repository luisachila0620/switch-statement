function getColor(selection)
{
	switch(selection){
        //Add more options here
        case 1:
        getColor = "Red";
        break;
        return true

        case 2:
        getColor = "green";
        break;
        return true

        case 3:
        getColor = "blue";
        break;
        return true
        
    default :
	}
    return false;//returns false because the user picked an unavailable color
	    // break;               
}

var colorname = window.prompt('What color do you want?');
var isAvailable = getColor(colorname);
if(isAvailable) console.log('Good news! That color is available');
else console.log('We are sorry, that color is not available');