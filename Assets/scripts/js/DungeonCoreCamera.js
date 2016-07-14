#pragma strict

var speed:float = 1;

var bcontrol:boolean = true;

var camera_min_fov:float = 1;
var camera_max_fov:float = 56.2;
var bdragmouse:boolean = false;
var dragSpeed:float = 2;
var dragOrigin:Vector3;

function Start () {

	

}

function Update () {

	if (Input.GetMouseButtonDown(0))
        {            
            bdragmouse = true;
        }else{
        	dragOrigin = Input.mousePosition;
        	bdragmouse = false;
        }
 
        //if (!Input.GetMouseButton(0)) return;
 		if(bdragmouse){
 			print("drag");
        	var pos:Vector3 = Camera.main.ScreenToViewportPoint(Input.mousePosition - dragOrigin);
        	var move:Vector3 = new Vector3(pos.x * dragSpeed, 0, pos.y * dragSpeed);
        	//transform.Translate(move, Space.World);
        	print(pos);
        	transform.Translate(move);
        }






        /*

	if (Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Moved) {
         var touchDeltaPosition:Vector2 = Input.GetTouch(0).deltaPosition;
         transform.Translate(-touchDeltaPosition.x * speed, -touchDeltaPosition.y * speed, 0);
     }
     */

     //if(Input.GetKey(KeyCode.RightArrow))
     //{
     //}
     /*

     if(Input.GetKey(KeyCode.RightArrow))
     {
         transform.Translate(new Vector3(speed * Time.deltaTime,0,0));
     }
     if(Input.GetKey(KeyCode.LeftArrow))
     {
         transform.Translate(new Vector3(-speed * Time.deltaTime,0,0));
     }
     if(Input.GetKey(KeyCode.DownArrow))
     {
         transform.Translate(new Vector3(0,-speed * Time.deltaTime,0));
     }
     if(Input.GetKey(KeyCode.UpArrow))
     {
         transform.Translate(new Vector3(0,speed * Time.deltaTime,0));
     }

     */



     /*
	if(Input.GetKey("a")){
		print("A");
	}

	if(Input.GetKey("a")){
		print("A");
	}
	*/

}