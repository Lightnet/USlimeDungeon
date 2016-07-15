#pragma strict

var speed:float = 1;
var rd2d:Rigidbody2D;
var anim:Animator;

function Start () {
        rd2d = GetComponent(Rigidbody2D);
}

function Update () {

}

function FixedUpdate()
{
        var moveHorizontal:float  = Input.GetAxis("Horizontal");
        var moveVertical:float = Input.GetAxis("Vertical");

        var movement:Vector2 = new Vector2(moveHorizontal, moveVertical);
       
        rd2d.AddForce(movement * speed);

        if(anim !=null){
        print(movement.x);
        	anim.SetFloat("dirx",movement.x);
        	anim.SetFloat("diry",movement.y);
        }
}