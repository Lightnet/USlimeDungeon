#pragma strict

var barDisplay : float = 0;
var pos : Vector2 = new Vector2(-16,80);
var size : Vector2 = new Vector2(32,10);
var progressBarEmpty : Texture2D;
var progressBarFull : Texture2D;
 
 function OnGUI()
 {
 
     // draw the background:
     //GUI.BeginGroup (new Rect (pos.x, pos.y, size.x, size.y));
         //GUI.Box (Rect (0,0, size.x, size.y),progressBarEmpty);
 
         // draw the filled-in part:
         //GUI.BeginGroup (new Rect (0, 0, size.x * barDisplay, size.y));
             //GUI.Box (Rect (0,0, size.x, size.y),progressBarFull);
         //GUI.EndGroup ();
 
     //GUI.EndGroup ();
     //transform.position
     //var wantedPos = Camera.main.WorldToScreenPoint (new Vector3(transform.position.x,transform.position.y * -1,transform.position.z ));//2d
     var wantedPos = Camera.main.WorldToScreenPoint (new Vector3(transform.position.x,transform.position.y ,transform.position.z *-1));//3d
     //var wantedPos = Camera.main.WorldToScreenPoint( transform.position);
     //GUI.Box (Rect (wantedPos.x,wantedPos.y, size.x, size.y),progressBarFull);

     GUI.DrawTexture(new Rect(wantedPos.x + pos.x,wantedPos.y+ pos.y, size.x, size.y), progressBarFull);
 } 
 
 function Update()
 {
     // for this example, the bar display is linked to the current time,
     // however you would set this value based on your desired display
     // eg, the loading progress, the player's health, or whatever.
     barDisplay = Time.time * 0.05;
 }