import UnityEngine.UI;

#pragma strict

var count:float = 0;

var monstertextconnt:Text;
var intrudertextconnt:Text;
var selecttextconnt:Text;



function Start () {

}

function Update () {
	count+= 1;

	if(monstertextconnt !=null){
		//monstertextconnt.text = count.ToString();
	}

	if(intrudertextconnt !=null){
		//intrudertextconnt.text = count.ToString();
	}

	if(selecttextconnt !=null){
		//selecttextconnt.text = count.ToString();
	}


	if(count > 100){
		count = 0;
	}

}