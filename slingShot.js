class slingShot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:15,
            stiffness:0.05
        }
        this.chain=Constraint.create(options);
        World.add(world,this.chain);
    }  
    display(){
        if(this.chain.bodyA!==null){
            var A=this.chain.bodyA.position;
            var B=this.chain.pointB;
            strokeWeight(3);
            line(A.x,A.y,B.x,B.y);
        }
        
        
    }
    fly(){
        this.chain.bodyA=null;
    }
    attatch(body){
        this.chain.bodyA=body;
    }
}