import UnityEngine.UI;

#pragma strict

var count:float = 0;

var monstertextconnt:Text;
var intrudertextconnt:Text;
var selecttextconnt:Text;

var _whiteTexture:Texture2D;

var isSelecting:boolean = false;

var mousePosition1:Vector3;

var maincamera: Camera;

var prefabcreartures:CreatureStats[];


function Start () {
	_whiteTexture = new Texture2D( 1, 1 );
    _whiteTexture.SetPixel( 0, 0, Color.white );
    _whiteTexture.Apply();

    maincamera = GetComponent.<Camera>();
}

function DrawScreenRect( rect, color )
{
    GUI.color = color;
    GUI.DrawTexture( rect, _whiteTexture );
    GUI.color = Color.white;
}

function DrawScreenRectBorder( rect:Rect, thickness:float, color:Color )
{
    // Top
    DrawScreenRect( new Rect( rect.xMin, rect.yMin, rect.width, thickness ), color );
    // Left
    DrawScreenRect( new Rect( rect.xMin, rect.yMin, thickness, rect.height ), color );
    // Right
    DrawScreenRect( new Rect( rect.xMax - thickness, rect.yMin, thickness, rect.height ), color);
    // Bottom
    DrawScreenRect( new Rect( rect.xMin, rect.yMax - thickness, rect.width, thickness ), color );
}

function GetScreenRect( screenPosition1:Vector3,  screenPosition2:Vector3 )
{
    // Move origin from bottom left to top left
    screenPosition1.y = Screen.height - screenPosition1.y;
    screenPosition2.y = Screen.height - screenPosition2.y;
    // Calculate corners
    var topLeft = Vector3.Min( screenPosition1, screenPosition2 );
    var bottomRight = Vector3.Max( screenPosition1, screenPosition2 );
    // Create Rect
    return Rect.MinMaxRect( topLeft.x, topLeft.y, bottomRight.x, bottomRight.y );
}

function SelectUnitRange( screenPosition1:Vector3,  screenPosition2:Vector3 ){

	var v1 = new Camera.main.ScreenToWorldPoint( new Vector3(screenPosition1.x, screenPosition1.y, 10) );
	print(v1);

	var v2 = new Camera.main.ScreenToWorldPoint( new Vector3(screenPosition2.x, screenPosition2.y, 10) );

	var min = Vector3.Min( v1, v2 );
    var max = Vector3.Max( v1, v2 );

    prefabcreartures = GameObject.FindObjectsOfType(CreatureStats);

    //print(prefabcreartures.length);

    for(var creature:CreatureStats in prefabcreartures ){
    	//print(creature.transform.position.x);
    	if( (min.x < creature.transform.position.x) && (max.x > creature.transform.position.x) &&
    		(min.y < creature.transform.position.y) && (max.y > creature.transform.position.y)
    	  ){
    	  	print(creature.transform.name);
			print("found");
		}
    }







	//print(screenPosition1 + " " +screenPosition2);

	//screenPosition1.z = -10;
	//screenPosition2.z = -10;
	//var v1 = new Camera.main.ScreenToViewportPoint( screenPosition1 );
    //var v2 = new Camera.main.ScreenToViewportPoint( screenPosition2 );
    //print(v1 + " " + v2);

    //print(Input.mousePosition);
    //var min = Vector3.Min( v1, v2 );
    //var max = Vector3.Max( v1, v2 );
    //print(min + " : " + max);

    //prefabcreartures = GameObject.FindObjectsOfType(CreatureStats);

    //print(prefabcreartures.length);

    //for(var creature:CreatureStats in prefabcreartures ){
    	//print(creature.transform.position.x);
    	//if( (min.x < creature.transform.position.x) && (max.x > creature.transform.position.x) ){
			//print("found");
		//}
    //}

    //prefabcreartures

    //foreach (GameObject creaturestats in ){
		//if( (min.x <  creature.transform.position.x) && (max.x > creature.transform.position.x) ){
			//print("found");
		//}
	//}
    
    //min.z = camera.nearClipPlane;
    //max.z = camera.farClipPlane;

    //min.z = 1;
    //max.z = 1;

    //var p1: Vector3 = new Camera.main.ScreenToWorldPoint(new Vector3(min.x, min.y, -10));
    //print(p1);
    //var p2: Vector3 = new Camera.main.ScreenToWorldPoint(new Vector3(max.x, max.y, -10));
    //print(p2);

    //if(maincamera !=null){
    	//var screenPos: Vector3 = maincamera.WorldToScreenPoint(max);
    	//Debug.Log("target is " + screenPos.x + " pixels from the left");

    	//Debug.Log(Camera.main.ScreenToWorldPoint(new Vector3(max.x,
   															//max.y,
   															//Camera.main.nearClipPlane)));

   		//var minpos: Vector3 = new Camera.main.ScreenToWorldPoint(new Vector3(min.x, min.y, 1));
 		//var maxpos: Vector3 = new Camera.main.ScreenToWorldPoint(new Vector3(max.x, max.y, 1));
   		//print(minpos + " " + maxpos);

   		//var mousepos: Vector3 = new Camera.main.ScreenToWorldPoint(new Vector3(Input.mousePosition.x, Input.mousePosition.y, 1));
   		//print(mousepos);
    //}

    //print(p1 + " " +p2);


}

function Trace2DWorld(screenPosition1:Vector3){
	var v1 = new Camera.main.ScreenToWorldPoint( new Vector3(screenPosition1.x, screenPosition1.y, 10) );
	print(v1);

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


	//if(count > 100){
		//count = 0;
	//}


	if (Input.GetMouseButtonDown(0))
     {
         //lastPosition = Input.mousePosition;

         //var hit:RaycastHit2D = Physics2D.Raycast(Camera.main.transform.position, Input.mousePosition);

         var ray:Ray = Camera.main.ScreenPointToRay(Input.mousePosition);


         var hit:RaycastHit2D = Physics2D.Raycast(ray.origin, ray.direction);


         if(hit != null && hit.collider != null){
             //isHit = false;
             //Destroy(GameObject.Find(hit.collider.gameObject.name));
             //print(hit.collider.gameObject.name);
             //print(hit.point);
         }else{
         	print("miss");
         }

     }


     	// If we press the left mouse button, save mouse location and begin selection
        if( Input.GetMouseButtonDown( 0 ) )
        {
            isSelecting = true;
            mousePosition1 = Input.mousePosition;
        }
        // If we let go of the left mouse button, end selection
        if( Input.GetMouseButtonUp( 0 ) ){
            isSelecting = false;
            SelectUnitRange(mousePosition1, Input.mousePosition);
		}

		//SelectUnitRange(mousePosition1, Input.mousePosition);

		//Trace2DWorld(Input.mousePosition);



}

 function OnGUI()
	{
		//simple green sqaure
    	//DrawScreenRect( new Rect( 32, 32, 256, 128 ), Color.green );
    	//green
    	//DrawScreenRectBorder( new Rect( 32, 32, 256, 128 ), 2, Color.green );


    	if( isSelecting )
        {
            // Create a rect from both mouse positions
            var rect = GetScreenRect( mousePosition1, Input.mousePosition );
            DrawScreenRect( rect, new Color( 0.8f, 0.8f, 0.95f, 0.25f ) );
            DrawScreenRectBorder( rect, 2, new Color( 0.8f, 0.8f, 0.95f ) );
        }

	}


/*
function OnDrawGizmosSelected() {
	var camera: Camera = GetComponent.<Camera>();
	//var p: Vector3 = camera.ScreenToWorldPoint(new Vector3(100, 100, camera.nearClipPlane));
	var p: Vector3 = camera.ScreenToWorldPoint(Input.mousePosition);
	Gizmos.color = Color.yellow;
	Gizmos.DrawSphere(p, 0.1F);
}
*/