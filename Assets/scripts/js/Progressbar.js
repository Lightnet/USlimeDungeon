//#pragma strict

//var foregroundImage : UnityEngine.Transform;
var foregroundImage:UnityEngine.UI.Image;
var count :Number = 0;

function Start () {
    foregroundImage = gameObject.GetComponent(UnityEngine.UI.Image) as UnityEngine.UI.Image;
    Value(0);
}

function Value(value){
    
    if(foregroundImage !=null){
        foregroundImage.fillAmount = value/100;
        print(foregroundImage);    
    return (parseInt)(foregroundImage.fillAmount*100);	
    }
    else
    {
        return 0;
    }
}

function Update(){
    count += 0.01;
    if(count > 1){
        count = 0;
    }
    Value(count);
    
}
