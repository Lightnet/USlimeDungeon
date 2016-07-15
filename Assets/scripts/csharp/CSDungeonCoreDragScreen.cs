using UnityEngine;
using System.Collections;

public class CSDungeonCoreDragScreen : MonoBehaviour {

	private Vector3 dragOrigin;
	private bool bdrag = false;
	public bool bdragcamera = true;
	public float dragSpeed = 2;

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {

		float mwheel = Input.GetAxis("Mouse ScrollWheel");

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



		if (Input.GetMouseButtonDown (1)) {
			transform.position = new Vector3 (0, 0, transform.position.z);
		}

		if (Input.GetMouseButtonDown (0)) {
			//dragOrigin = Input.mousePosition;
			bdrag = true;
			//print ("press");
			dragOrigin = Input.mousePosition;
		} else {
			
			//print ("release");
		}

		if (Input.GetMouseButtonUp (0)) {
			bdrag = false;
			//print ("release");
		}
			
		if (bdrag == true) {
			Vector2 diff = Input.mousePosition - dragOrigin;
			//print (Input.mousePosition);
			//print (diff);
			//Vector3 move = new Vector3(diff.x,diff.y, 0);
			//print (move);
			//transform.Translate(move, Space.World);
			Vector3 pos = Camera.main.ScreenToViewportPoint (diff);
			Vector3 move = new Vector3(pos.x * dragSpeed, pos.y * dragSpeed, 0);
			if ((move.x > 0f) || (move.y > 0f)) {
				//if(this.transform.position.x < outerRight)
				//{
				transform.Translate (move, Space.World);
				//}
			} else {
				if ((move.x < 0f) || (move.y < 0f)) {
					//if(this.transform.position.x < outerRight)
					//{
					transform.Translate (move, Space.World);
				}
			}

		}
			
	}
}
