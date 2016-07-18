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


var selectunits = new Array();

var bshifkey:boolean = false;

function Start () {
	_whiteTexture = new Texture2D( 1, 1 );
    _whiteTexture.SetPixel( 0, 0, Color.white );
    _whiteTexture.Apply();

    maincamera = GetComponent.<Camera>();
    selectunits = new Array();
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
	//print(v1);

	var v2 = new Camera.main.ScreenToWorldPoint( new Vector3(screenPosition2.x, screenPosition2.y, 10) );

	var min = Vector3.Min( v1, v2 );
    var max = Vector3.Max( v1, v2 );

    prefabcreartures = GameObject.FindObjectsOfType(CreatureStats);

    //print(prefabcreartures.length);

    if(screenPosition1 == screenPosition2){
    	//print("same?");
    	var ray:Ray;
    	var hit:RaycastHit2D;
    	ray = Camera.main.ScreenPointToRay(new Vector3(screenPosition2.x, screenPosition2.y, 10));
		hit = Physics2D.Raycast(ray.origin, ray.direction);
		var unit1:CreatureStats;
		var ounitray;

		if(hit != null && hit.collider != null){
				//isHit = false;
	            //Destroy(GameObject.Find(hit.collider.gameObject.name));
	            print(hit.collider.gameObject.name);
	            unit1 = hit.collider.gameObject.GetComponent(CreatureStats);
	            if(unit1 !=null){
					var bfoundunit1:boolean = false;
		    	  	for(var ounit:CreatureStats in selectunits){
						if(unit1 == ounit){
		    	  			bfoundunit1 = true;
		    	  			break;
		    	  		}
		    	  	}
		    	  	if(bfoundunit1 == false){
		    	  		//selectunits.Push(creature);
		    	  		ounitray = unit1;
		    	  	}
	             }
				//print(hit.point);
	         }else{
	         	print("miss");
	         }
    	if(bshifkey){
			//var ray:Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
			if(ounitray !=null){
				selectunits.Push(ounitray);
			}
    	}else{
    		selectunits = new Array();
    		print("clear units");
    		selectunits.Push(unit1);
    	}
    }else{
    	if(bshifkey == false){
    		selectunits = new Array();
    	}
    	for(var creature:CreatureStats in prefabcreartures ){
	    	//print(creature.transform.position.x);
	    	if( (min.x < creature.transform.position.x) && (max.x > creature.transform.position.x) &&
	    		(min.y < creature.transform.position.y) && (max.y > creature.transform.position.y)
	    	  ){
	    	  	var bfoundunit:boolean = false;
	    	  	for(var ounit:CreatureStats in selectunits){
	    	  		if(creature == ounit){
	    	  			bfoundunit = true;
	    	  			break;
	    	  		}
	    	  	}

	    	  	if(bfoundunit == false){
					selectunits.Push(creature);
	    	  	}
	    	  	//print(creature.transform.name);
				//print("found");
			}
	    }

    }



    print(selectunits.length);
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
         //var ray:Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
         //var hit:RaycastHit2D = Physics2D.Raycast(ray.origin, ray.direction);
         //if(hit != null && hit.collider != null){
             //isHit = false;
             //Destroy(GameObject.Find(hit.collider.gameObject.name));
             //print(hit.collider.gameObject.name);
             //print(hit.point);
         //}else{
         	//print("miss");
         //}
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

		if(Input.GetKeyDown(KeyCode.LeftShift)){
			bshifkey = true;
		}

		if(Input.GetKeyUp(KeyCode.LeftShift)){
			bshifkey = false;
		}
		//print(shifkey);
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

