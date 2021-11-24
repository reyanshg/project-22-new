function setup() {
    canvas=createCanvas(windowWidth,windoHeight);
    engine=Engine.create();
    world=engine.world;
    angleMode(DEGREES);

    var options={
        isStatic:true
    };
    playerBase=Bodies.rectangle(200,350,180,150,options);
    World.add(world, playerBase);

    player=Bodies.rectangle(250,playerBase.position.y-160,50,180,options);
    World.add(world,player)
}
