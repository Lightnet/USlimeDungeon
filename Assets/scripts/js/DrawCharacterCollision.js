#pragma strict

//function Start () {

//}

//function Update () {

//}

#if UNITY_EDITOR
 
 function OnDrawGizmos()
 {
     Gizmos.color = Color.yellow;
     
     //var col : BoxCollider = GetComponent.< BoxCollider >();
     var col : CapsuleCollider = GetComponent.< CapsuleCollider >();
     
     if ( col )
     {
         Gizmos.matrix = transform.localToWorldMatrix;
         //Gizmos.DrawWireCube( Vector3.zero + col.center, col.size );
         //Gizmos.DrawWireCube( Vector3.zero + col.center, col.radius );
         //Gizmos.DrawWireCube( Vector3.zero + col.center, 1 );
         //Gizmos.DrawWireCube( col.center, new Vector3(1,1,1) );
         //Gizmos.DrawSphere(col.center,col.radius);
         Gizmos.DrawWireSphere(col.center,col.radius);

     }
 }
     
 #endif