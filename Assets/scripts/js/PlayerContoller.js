#pragma strict

var speed:float = 1;
//var rd2d:Rigidbody2D;
var rb:Rigidbody;
var anim:Animator;
var agent:NavMeshAgent;

function Start () {
        //rd2d = GetComponent(Rigidbody2D);
        //rb = GetComponent(Rigidbody);
        //agent = GetComponent(NavMeshAgent);
        //rb.freezeRotation = true;
}

function Update () {

}

function FixedUpdate()
{
        var moveHorizontal:float  = Input.GetAxis("Horizontal");
        var moveVertical:float = Input.GetAxis("Vertical");

        var movement:Vector3 = new Vector3(moveHorizontal,0,moveVertical);
       
        //rd2d.AddForce(movement * speed);
        //rb.AddForce(movement * speed);

        if(anim !=null){
        //print(movement.x);
        	anim.SetFloat("dirx",movement.x);
        	anim.SetFloat("diry",movement.y);
        }
}