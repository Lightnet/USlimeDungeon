#pragma strict

var barDisplay : float = 0;
var pos : Vector2 = new Vector2(-16,80);
var size : Vector2 = new Vector2(32,10);
 
function OnGUI()
{
     //var wantedPos = Camera.main.WorldToScreenPoint (new Vector3(transform.position.x,transform.position.y * -1,transform.position.z )); //2d
     //var wantedPos = Camera.main.WorldToScreenPoint (new Vector3(transform.position.x,transform.position.y,transform.position.z * -1)); //3d
     //var wantedPos = Camera.main.WorldToScreenPoint (new Vector3(transform.position.x,transform.position.y,transform.position.z)); //3d
     //var wantedPos = Camera.main.WorldToViewportPoint (transform.position);
     //var wantedPos = Camera.main.WorldToViewportPoint (new Vector3(transform.position.x,transform.position.y,transform.position.z)); //3d
     //var wantedPos = Camera.main.WorldToScreenPoint( transform.position);
     //GUI.Box (Rect (wantedPos.x,wantedPos.y, size.x, size.y),progressBarFull);
     var wantedPos = Camera.main.WorldToScreenPoint (new Vector3(transform.position.x,transform.position.y,transform.position.z));//3d
     GUI.Label(new Rect(wantedPos.x + pos.x,Screen.height+(wantedPos.y*-1)+ pos.y, size.x, size.y), "Name:");
     //print(wantedPos);
} 
 
 function Update()
 {
     // for this example, the bar display is linked to the current time,
     // however you would set this value based on your desired display
     // eg, the loading progress, the player's health, or whatever.
     barDisplay = Time.time * 0.05;
 }