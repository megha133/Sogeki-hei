var bg,s1,s2,s3,s4,s5,s6,s7,s8,p1,p2,p3,p4,n1,n2,n3,n4,gun1,target1,bullet1;

function setup() {
  createCanvas(1894,920);
  target1 = createSprite(1000,500);
  target1.addImage(target_1);
  target1.scale = 0.9;

  gun1 = createSprite(970,780);
  gun1.addImage(gun_1);
  gun1.scale = 1.1;

  bullet1 = createSprite(1000,496);
  bullet1.addImage(b_1);
  bullet1.scale = 0.7;

  p1 = createSprite(130,615);
  p1.addImage(p_1);
  p1.scale = 0.7;

  s1 = createSprite(150,680);
  s1.addImage(s_1);
  s1.scale = 0.7;

  p2 = createSprite(410,606);
  p2.addImage(p_2);
  p2.scale =  0.7;

  s2 = createSprite(450,670);
  s2.addImage(s_2);
  s2.scale = 1.2;

  p3 = createSprite(335,540);
  p3.addImage(p_3);
  p3.scale =  0.7;

  s3 = createSprite(350,600);
  s3.addImage(s_3);
  s3.scale = 1.2;

  p4 = createSprite(600,550);
  p4.addImage(p_4);
  p4.scale =  0.7;

  s4 = createSprite(600,600);
  s4.addImage(s_4);
  s4.scale = 1.2;

  n5 = createSprite(1430,710);
  n5.addImage(n_1);
  n5.scale =  0.7;

  s5 = createSprite(1450,780);
  s5.addImage(s_5);
  s5.scale = 1.3;

  n6 = createSprite(1410,550);
  n6.addImage(n_2);
  n6.scale =  0.7;

  s6 = createSprite(1400,600);
  s6.addImage(s_6);
  s6.scale = 1.2;

  n7 = createSprite(1510,550);
  n7.addImage(n_3);
  n7.scale =  0.7;

  s7 = createSprite(1500,620);
  s7.addImage(s_7);
  s7.scale = 1.2;

  n8 = createSprite(1800,510);
  n8.addImage(n_4);
  n8.scale =  0.7;

  s8 = createSprite(1780,550);
  s8.addImage(s_8);
  s8.scale = 0.8;

}

function preload(){
  bg = loadImage("images/bg.jpg");
  s_1 = loadImage("images/sol1.png");
  s_2 = loadImage("images/sol2.png")
  s_3 = loadImage("images/sol3.png")
  s_4 = loadImage("images/sol4.png")
  s_5 = loadImage("images/sol5.png")
  s_6 = loadImage("images/sol6.png")
  s_7 = loadImage("images/sol7.png")
  s_8 = loadImage("images/sol8.png")
  p_1  = loadImage("images/pos.png")
  p_2  = loadImage("images/pos.png")
  p_3  = loadImage("images/pos.png")
  p_4  = loadImage("images/pos.png")
  n_1  = loadImage("images/neg.png")
  n_2  = loadImage("images/neg.png")
  n_3  = loadImage("images/neg.png")
  n_4  = loadImage("images/neg.png")
  gun_1 = loadImage("images/gun1.png")
  target_1 = loadImage("images/target.png")
  b_1 = loadImage("images/bullet.png")
}

function draw() {
  background(bg);  
  drawSprites();
}