import UnityEngine.UI; // Force unity to laungh the UI components
#pragma strict

//var foregroundImage : UnityEngine.Transform;
var foregroundImage:UnityEngine.UI.Image;
var count :float = 0;
var bcount: boolean = true;

function Start () {
    //foregroundImage = gameObject.GetComponent(UnityEngine.UI.Image) as UnityEngine.UI.Image;
    foregroundImage = gameObject.GetComponent(Image) as Image;
    Value(0);
}

function Value(value){
    
    if(foregroundImage !=null){
        foregroundImage.fillAmount = value;
        //print(foregroundImage);
        //print(foregroundImage.fillAmount);
        //print(value);
        //return (foregroundImage.fillAmount = value);
        return value;
    }
    else
    {
        return 0;
    }
}

function Update(){
	if(bcount){
	    count += 0.01;
	    if(count > 1){
	        count = 0;
	    }
	    Value(count);
    }
}
