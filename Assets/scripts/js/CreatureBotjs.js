#pragma strict

var body2d:Rigidbody2D;

var controller:CharacterController;
var agent:NavMeshAgent;

function Start () {
	body2d = GetComponent(Rigidbody2D);
	controller = GetComponent(CharacterController);
	agent = GetComponent(NavMeshAgent);
}

function Update () {
	var rot = transform.rotation;
	rot.x = 0;
    rot.z = 0;
    rot.y = 0;
    transform.rotation = rot; 

}

function MoveTo(pos:Vector3){
	print("Move?" + pos);
	//if(body2d !=null){
		//body2d.MovePosition(pos);
	//}
	//if(controller !=null){
		//controller.Move(pos);
	//}

	if(agent !=null){
		agent.SetDestination(pos);
	}
}