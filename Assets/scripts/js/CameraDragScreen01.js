#pragma strict

 public var mouseSensitivity : float = 0.1;
 private var lastPosition : Vector3;
 
 function Update()
 {

 	var mwheel = Input.GetAxis("Mouse ScrollWheel");

		if (mwheel > 0f)
		{
			// scroll up
			Camera.main.fieldOfView += 1;
			if (Camera.main.fieldOfView > 56) {
				Camera.main.fieldOfView = 56;
			}
		}
		else if (mwheel < 0f)
		{
			// scroll down
			Camera.main.fieldOfView -= 1;
			if (Camera.main.fieldOfView < 8) {
				Camera.main.fieldOfView = 8;
			}
		}


     if (Input.GetMouseButtonDown(1))
     {
         lastPosition = Input.mousePosition;
     }
 
     if (Input.GetMouseButton(1))
     {
         var delta : Vector3 = Input.mousePosition - lastPosition;
         transform.Translate( (delta.x * mouseSensitivity) * -1, (delta.y * mouseSensitivity) * -1, 0);
         lastPosition = Input.mousePosition;
     }
 }