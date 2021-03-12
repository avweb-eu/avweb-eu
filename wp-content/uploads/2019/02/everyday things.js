(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"everyday things_atlas_", frames: [[970,1557,440,440],[1108,603,892,650],[0,1205,968,636],[0,603,1106,600],[0,0,1441,601],[1412,1557,440,440],[970,1255,720,300],[1443,0,440,440]]},
		{name:"everyday things_atlas_2", frames: [[432,699,41,64],[432,765,41,64],[442,0,46,126],[432,442,71,127],[442,354,47,64],[475,699,31,65],[500,571,2,1],[0,442,430,430],[442,255,49,97],[432,571,35,126],[469,571,29,126],[442,128,44,125],[0,0,440,440]]}
];


// symbols:



(lib.basket = function() {
	this.initialize(ss["everyday things_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_100 = function() {
	this.initialize(ss["everyday things_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_101 = function() {
	this.initialize(ss["everyday things_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_102 = function() {
	this.initialize(ss["everyday things_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_103 = function() {
	this.initialize(ss["everyday things_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_104 = function() {
	this.initialize(ss["everyday things_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_105 = function() {
	this.initialize(ss["everyday things_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_106 = function() {
	this.initialize(ss["everyday things_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_107 = function() {
	this.initialize(ss["everyday things_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_108 = function() {
	this.initialize(ss["everyday things_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_109 = function() {
	this.initialize(ss["everyday things_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_110 = function() {
	this.initialize(ss["everyday things_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_95 = function() {
	this.initialize(ss["everyday things_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_96 = function() {
	this.initialize(ss["everyday things_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_97 = function() {
	this.initialize(ss["everyday things_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_98 = function() {
	this.initialize(ss["everyday things_atlas_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_99 = function() {
	this.initialize(ss["everyday things_atlas_2"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.ceramic = function() {
	this.initialize(ss["everyday things_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.counter_top = function() {
	this.initialize(ss["everyday things_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.dip_bowl = function() {
	this.initialize(ss["everyday things_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.wood_bowl = function() {
	this.initialize(ss["everyday things_atlas_2"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.textbox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_110();
	this.instance.parent = this;
	this.instance.setTransform(-107.5,-107.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.5,-107.5,215,215);


(lib.Scene_1_counter_top = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// counter_top
	this.instance = new lib.counter_top();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(215));

}).prototype = p = new cjs.MovieClip();


(lib.products_wood_bowl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// wood_bowl
	this.instance = new lib.wood_bowl();
	this.instance.parent = this;
	this.instance.setTransform(-221,-219);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(190));

}).prototype = p = new cjs.MovieClip();


(lib.products_dip_bowl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dip_bowl
	this.instance = new lib.dip_bowl();
	this.instance.parent = this;
	this.instance.setTransform(-221,-217);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(130));

}).prototype = p = new cjs.MovieClip();


(lib.products_ceramic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ceramic
	this.instance = new lib.ceramic();
	this.instance.parent = this;
	this.instance.setTransform(-222,-218);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(250));

}).prototype = p = new cjs.MovieClip();


(lib.headlinetext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("ON\nSALE\nEVERY\nDAY", "47px 'OSP-DIN'", "#FFFFFF");
	this.text.lineHeight = 39;
	this.text.lineWidth = 186;
	this.text.parent = this;
	this.text.setTransform(-92.75,-168.4);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.7,-170.4,189.5,340.8);


(lib.everydaythings_logosvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// everydaythings_logo_svg
	this.instance = new lib.CachedTexturedBitmap_106();
	this.instance.parent = this;
	this.instance.setTransform(118.15,31.85,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_105();
	this.instance_1.parent = this;
	this.instance_1.setTransform(105.95,31.1,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_104();
	this.instance_2.parent = this;
	this.instance_2.setTransform(118.25,0,0.5,0.5);

	this.instance_3 = new lib.CachedTexturedBitmap_103();
	this.instance_3.parent = this;
	this.instance_3.setTransform(82.9,0.05,0.5,0.5);

	this.instance_4 = new lib.CachedTexturedBitmap_102();
	this.instance_4.parent = this;
	this.instance_4.setTransform(16.7,0,0.5,0.5);

	this.instance_5 = new lib.CachedTexturedBitmap_101();
	this.instance_5.parent = this;
	this.instance_5.setTransform(136.95,0,0.5,0.5);

	this.instance_6 = new lib.CachedTexturedBitmap_100();
	this.instance_6.parent = this;
	this.instance_6.setTransform(76.15,0,0.5,0.5);

	this.instance_7 = new lib.CachedTexturedBitmap_99();
	this.instance_7.parent = this;
	this.instance_7.setTransform(57.1,0.05,0.5,0.5);

	this.instance_8 = new lib.CachedTexturedBitmap_98();
	this.instance_8.parent = this;
	this.instance_8.setTransform(40.75,0,0.5,0.5);

	this.instance_9 = new lib.CachedTexturedBitmap_97();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,157.5,63.6);


(lib.CTA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ARROW
	this.instance = new lib.CachedTexturedBitmap_96();
	this.instance.parent = this;
	this.instance.setTransform(49.25,-33.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// TEXT
	this.text = new cjs.Text("SHOP\nNOW", "30px 'OSP-DIN'", "#FFFFFF");
	this.text.textAlign = "right";
	this.text.lineHeight = 27;
	this.text.lineWidth = 91;
	this.text.parent = this;
	this.text.setTransform(45.5,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.5,-40.5,121.3,81.1);


(lib.button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_95();
	this.instance.parent = this;
	this.instance.setTransform(-360.35,-150.25,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-360.3,-150.2,720.5,300.5);


(lib.basket_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.basket();
	this.instance.parent = this;
	this.instance.setTransform(-220,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-220,-220,440,440);


(lib.Scene_1_TEXT_BOX = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// TEXT_BOX
	this.instance = new lib.textbox("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(831.45,107.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(26).to({startPosition:0},0).to({x:612.45},21,cjs.Ease.get(1)).wait(168));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.everydaythings_logosvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(104.8,67.8,1,1,0,0,0,78.8,31.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(215));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_HEADLINE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// HEADLINE
	this.instance = new lib.headlinetext("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(645,7.85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(96).to({startPosition:0},0).to({y:197.85},20,cjs.Ease.get(1)).wait(99));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_CTA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// CTA
	this.instance = new lib.CTA("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(420,266.35);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(187).to({_off:false},0).to({x:598.5},19,cjs.Ease.get(1)).wait(9));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_BUTTON = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// BUTTON
	this.btn_main_link = new lib.button();
	this.btn_main_link.name = "btn_main_link";
	this.btn_main_link.parent = this;
	this.btn_main_link.setTransform(359.1,150.3);
	new cjs.ButtonHelper(this.btn_main_link, 0, 1, 2, false, new lib.button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_main_link).wait(215));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_basket = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// basket
	this.instance = new lib.basket_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-242.5,251.45,1,1,-135,0,0,-2.5,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:0,x:329.5,y:251.5},39,cjs.Ease.get(1)).wait(176));

}).prototype = p = new cjs.MovieClip();


(lib.products = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_249 = function() {
		this.___loopingOver___ = true;
		this.gotoAndPlay(9);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(249).call(this.frame_249).wait(1));

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_1 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_2 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_3 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_4 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_5 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_6 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_7 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_8 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_9 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_10 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_11 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_12 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_13 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_14 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_15 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_16 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_17 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_18 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_19 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_20 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_21 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_22 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_23 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_24 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_25 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_26 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_27 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_28 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_29 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_30 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_31 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_32 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_33 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_34 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_35 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_36 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_37 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_38 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_39 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_40 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_41 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_42 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_43 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_44 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_45 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_46 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_47 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_48 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_49 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_50 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_51 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_52 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_53 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_54 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_55 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_56 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_57 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_58 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_59 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_60 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_61 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_62 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_63 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_64 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_65 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_66 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_67 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_68 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_69 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_70 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_71 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_72 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_73 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_74 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_75 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_76 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_77 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_78 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_79 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_80 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_81 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_82 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_83 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_84 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_85 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_86 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_87 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_88 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_89 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_90 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_91 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_92 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_93 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_94 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_95 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_96 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_97 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_98 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_99 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_100 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_101 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_102 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_103 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_104 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_105 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_106 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_107 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_108 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_109 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_110 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_111 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_112 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_113 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_114 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_115 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_116 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_117 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_118 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_119 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_120 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_121 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_122 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_123 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_124 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_125 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_126 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_127 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_128 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_129 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_130 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_131 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_132 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_133 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_134 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_135 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_136 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_137 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_138 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_139 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_140 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_141 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_142 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_143 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_144 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_145 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_146 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_147 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_148 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_149 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_150 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_151 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_152 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_153 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_154 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_155 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_156 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_157 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_158 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_159 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_160 = new cjs.Graphics().p("A7Z3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_161 = new cjs.Graphics().p("A8p3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_162 = new cjs.Graphics().p("A953bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_163 = new cjs.Graphics().p("A/J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_164 = new cjs.Graphics().p("EggZgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_165 = new cjs.Graphics().p("EghpgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_166 = new cjs.Graphics().p("Egi5gXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_167 = new cjs.Graphics().p("EgkJgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_168 = new cjs.Graphics().p("EglZgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_169 = new cjs.Graphics().p("EgmpgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_170 = new cjs.Graphics().p("Egn5gXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_171 = new cjs.Graphics().p("EgpJgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_172 = new cjs.Graphics().p("EgqZgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_173 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_174 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_175 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_176 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_177 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_178 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_179 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_180 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_181 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_182 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_183 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_184 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_185 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_186 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_187 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_188 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_189 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_190 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_191 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_192 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_193 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_194 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_195 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_196 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_197 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_198 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_199 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_200 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_201 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_202 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_203 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_204 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_205 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_206 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_207 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_208 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_209 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_210 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_211 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_212 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_213 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_214 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_215 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_216 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_217 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_218 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_219 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_220 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_221 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_222 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_223 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_224 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_225 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_226 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_227 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_228 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_229 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_230 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_231 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_232 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_233 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_234 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_235 = new cjs.Graphics().p("EgrMgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_236 = new cjs.Graphics().p("EgqZgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_237 = new cjs.Graphics().p("EgpJgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_238 = new cjs.Graphics().p("Egn5gXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_239 = new cjs.Graphics().p("EgmpgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_240 = new cjs.Graphics().p("EglZgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_241 = new cjs.Graphics().p("EgkJgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_242 = new cjs.Graphics().p("Egi5gXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_243 = new cjs.Graphics().p("EghpgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_244 = new cjs.Graphics().p("EggZgXbMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_245 = new cjs.Graphics().p("A/J3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_246 = new cjs.Graphics().p("A953bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_247 = new cjs.Graphics().p("A8p3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_248 = new cjs.Graphics().p("A7Z3bMBWZAAAMAAAAu3MhWZAAAg");
	var mask_graphics_249 = new cjs.Graphics().p("A6J3bMBWZAAAMAAAAu3MhWZAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_1,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_2,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_3,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_4,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_5,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_6,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_7,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_8,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_9,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_10,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_11,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_12,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_13,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_14,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_15,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_16,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_17,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_18,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_19,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_20,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_21,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_22,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_23,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_24,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_25,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_26,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_27,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_28,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_29,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_30,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_31,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_32,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_33,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_34,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_35,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_36,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_37,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_38,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_39,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_40,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_41,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_42,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_43,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_44,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_45,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_46,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_47,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_48,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_49,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_50,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_51,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_52,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_53,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_54,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_55,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_56,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_57,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_58,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_59,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_60,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_61,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_62,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_63,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_64,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_65,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_66,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_67,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_68,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_69,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_70,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_71,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_72,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_73,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_74,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_75,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_76,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_77,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_78,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_79,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_80,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_81,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_82,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_83,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_84,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_85,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_86,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_87,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_88,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_89,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_90,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_91,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_92,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_93,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_94,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_95,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_96,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_97,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_98,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_99,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_100,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_101,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_102,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_103,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_104,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_105,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_106,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_107,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_108,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_109,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_110,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_111,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_112,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_113,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_114,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_115,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_116,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_117,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_118,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_119,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_120,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_121,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_122,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_123,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_124,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_125,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_126,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_127,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_128,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_129,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_130,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_131,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_132,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_133,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_134,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_135,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_136,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_137,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_138,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_139,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_140,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_141,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_142,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_143,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_144,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_145,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_146,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_147,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_148,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_149,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_150,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_151,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_152,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_153,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_154,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_155,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_156,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_157,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_158,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_159,x:385.575,y:-71.9}).wait(1).to({graphics:mask_graphics_160,x:377.575,y:-71.9}).wait(1).to({graphics:mask_graphics_161,x:369.575,y:-71.9}).wait(1).to({graphics:mask_graphics_162,x:361.575,y:-71.9}).wait(1).to({graphics:mask_graphics_163,x:353.575,y:-71.9}).wait(1).to({graphics:mask_graphics_164,x:345.575,y:-71.9}).wait(1).to({graphics:mask_graphics_165,x:337.575,y:-71.9}).wait(1).to({graphics:mask_graphics_166,x:329.575,y:-71.9}).wait(1).to({graphics:mask_graphics_167,x:321.575,y:-71.9}).wait(1).to({graphics:mask_graphics_168,x:313.575,y:-71.9}).wait(1).to({graphics:mask_graphics_169,x:305.575,y:-71.9}).wait(1).to({graphics:mask_graphics_170,x:297.575,y:-71.9}).wait(1).to({graphics:mask_graphics_171,x:289.575,y:-71.9}).wait(1).to({graphics:mask_graphics_172,x:281.575,y:-71.9}).wait(1).to({graphics:mask_graphics_173,x:270.65,y:-71.9}).wait(1).to({graphics:mask_graphics_174,x:254.65,y:-71.9}).wait(1).to({graphics:mask_graphics_175,x:238.65,y:-71.9}).wait(1).to({graphics:mask_graphics_176,x:222.65,y:-71.9}).wait(1).to({graphics:mask_graphics_177,x:206.65,y:-71.9}).wait(1).to({graphics:mask_graphics_178,x:190.65,y:-71.9}).wait(1).to({graphics:mask_graphics_179,x:174.65,y:-71.9}).wait(1).to({graphics:mask_graphics_180,x:158.65,y:-71.9}).wait(1).to({graphics:mask_graphics_181,x:142.65,y:-71.9}).wait(1).to({graphics:mask_graphics_182,x:126.65,y:-71.9}).wait(1).to({graphics:mask_graphics_183,x:110.65,y:-71.9}).wait(1).to({graphics:mask_graphics_184,x:94.65,y:-71.9}).wait(1).to({graphics:mask_graphics_185,x:78.65,y:-71.9}).wait(1).to({graphics:mask_graphics_186,x:62.65,y:-71.9}).wait(1).to({graphics:mask_graphics_187,x:46.65,y:-71.9}).wait(1).to({graphics:mask_graphics_188,x:30.65,y:-71.9}).wait(1).to({graphics:mask_graphics_189,x:14.65,y:-71.9}).wait(1).to({graphics:mask_graphics_190,x:14.65,y:-71.9}).wait(1).to({graphics:mask_graphics_191,x:14.65,y:-71.9}).wait(1).to({graphics:mask_graphics_192,x:14.65,y:-71.9}).wait(1).to({graphics:mask_graphics_193,x:14.65,y:-71.9}).wait(1).to({graphics:mask_graphics_194,x:14.65,y:-71.9}).wait(1).to({graphics:mask_graphics_195,x:14.65,y:-71.9}).wait(1).to({graphics:mask_graphics_196,x:14.65,y:-71.9}).wait(1).to({graphics:mask_graphics_197,x:14.65,y:-71.9}).wait(1).to({graphics:mask_graphics_198,x:14.65,y:-71.9}).wait(1).to({graphics:mask_graphics_199,x:14.65,y:-71.9}).wait(1).to({graphics:mask_graphics_200,x:14.65,y:-71.9}).wait(1).to({graphics:mask_graphics_201,x:14.65,y:-71.9}).wait(1).to({graphics:mask_graphics_202,x:14.65,y:-71.9}).wait(1).to({graphics:mask_graphics_203,x:14.65,y:-71.9}).wait(1).to({graphics:mask_graphics_204,x:14.65,y:-71.9}).wait(1).to({graphics:mask_graphics_205,x:14.65,y:-71.9}).wait(1).to({graphics:mask_graphics_206,x:14.65,y:-71.9}).wait(1).to({graphics:mask_graphics_207,x:14.65,y:-71.9}).wait(1).to({graphics:mask_graphics_208,x:14.65,y:-71.9}).wait(1).to({graphics:mask_graphics_209,x:14.65,y:-71.9}).wait(1).to({graphics:mask_graphics_210,x:14.65,y:-71.9}).wait(1).to({graphics:mask_graphics_211,x:14.65,y:-71.9}).wait(1).to({graphics:mask_graphics_212,x:14.65,y:-71.9}).wait(1).to({graphics:mask_graphics_213,x:14.65,y:-71.9}).wait(1).to({graphics:mask_graphics_214,x:14.65,y:-71.9}).wait(1).to({graphics:mask_graphics_215,x:14.65,y:-71.9}).wait(1).to({graphics:mask_graphics_216,x:14.65,y:-71.9}).wait(1).to({graphics:mask_graphics_217,x:14.65,y:-71.9}).wait(1).to({graphics:mask_graphics_218,x:14.65,y:-71.9}).wait(1).to({graphics:mask_graphics_219,x:14.65,y:-71.9}).wait(1).to({graphics:mask_graphics_220,x:30.65,y:-71.9}).wait(1).to({graphics:mask_graphics_221,x:46.65,y:-71.9}).wait(1).to({graphics:mask_graphics_222,x:62.65,y:-71.9}).wait(1).to({graphics:mask_graphics_223,x:78.65,y:-71.9}).wait(1).to({graphics:mask_graphics_224,x:94.65,y:-71.9}).wait(1).to({graphics:mask_graphics_225,x:110.65,y:-71.9}).wait(1).to({graphics:mask_graphics_226,x:126.65,y:-71.9}).wait(1).to({graphics:mask_graphics_227,x:142.65,y:-71.9}).wait(1).to({graphics:mask_graphics_228,x:158.65,y:-71.9}).wait(1).to({graphics:mask_graphics_229,x:174.65,y:-71.9}).wait(1).to({graphics:mask_graphics_230,x:190.65,y:-71.9}).wait(1).to({graphics:mask_graphics_231,x:206.65,y:-71.9}).wait(1).to({graphics:mask_graphics_232,x:222.65,y:-71.9}).wait(1).to({graphics:mask_graphics_233,x:238.65,y:-71.9}).wait(1).to({graphics:mask_graphics_234,x:254.65,y:-71.9}).wait(1).to({graphics:mask_graphics_235,x:270.65,y:-71.9}).wait(1).to({graphics:mask_graphics_236,x:281.575,y:-71.9}).wait(1).to({graphics:mask_graphics_237,x:289.575,y:-71.9}).wait(1).to({graphics:mask_graphics_238,x:297.575,y:-71.9}).wait(1).to({graphics:mask_graphics_239,x:305.575,y:-71.9}).wait(1).to({graphics:mask_graphics_240,x:313.575,y:-71.9}).wait(1).to({graphics:mask_graphics_241,x:321.575,y:-71.9}).wait(1).to({graphics:mask_graphics_242,x:329.575,y:-71.9}).wait(1).to({graphics:mask_graphics_243,x:337.575,y:-71.9}).wait(1).to({graphics:mask_graphics_244,x:345.575,y:-71.9}).wait(1).to({graphics:mask_graphics_245,x:353.575,y:-71.9}).wait(1).to({graphics:mask_graphics_246,x:361.575,y:-71.9}).wait(1).to({graphics:mask_graphics_247,x:369.575,y:-71.9}).wait(1).to({graphics:mask_graphics_248,x:377.575,y:-71.9}).wait(1).to({graphics:mask_graphics_249,x:385.575,y:-71.9}).wait(1));

	// ceramic_obj_
	this.ceramic = new lib.products_ceramic();
	this.ceramic.name = "ceramic";
	this.ceramic.parent = this;
	this.ceramic.setTransform(-2,2,1,1,0,0,0,-2,2);
	this.ceramic.depth = 0;
	this.ceramic.isAttachedToCamera = 0
	this.ceramic.isAttachedToMask = 0
	this.ceramic.layerDepth = 0
	this.ceramic.layerIndex = 0
	this.ceramic.maskLayerName = 0

	var maskedShapeInstanceList = [this.ceramic];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.ceramic).wait(250));

	// mask_idn (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("EglyAY1MAAAgxpMBLlAAAMAAAAxpg");
	var mask_1_graphics_1 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_2 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_3 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_4 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_5 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_6 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_7 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_8 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_9 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_10 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_11 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_12 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_13 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_14 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_15 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_16 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_17 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_18 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_19 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_20 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_21 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_22 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_23 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_24 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_25 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_26 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_27 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_28 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_29 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_30 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_31 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_32 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_33 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_34 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_35 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_36 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_37 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_38 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_39 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_40 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_41 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_42 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_43 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_44 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_45 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_46 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_47 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_48 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_49 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_50 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_51 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_52 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_53 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_54 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_55 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_56 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_57 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_58 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_59 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_60 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_61 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_62 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_63 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_64 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_65 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_66 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_67 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_68 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_69 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_70 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_71 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_72 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_73 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_74 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_75 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_76 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_77 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_78 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_79 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_80 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_81 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_82 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_83 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_84 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_85 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_86 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_87 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_88 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_89 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_90 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_91 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_92 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_93 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_94 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_95 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_96 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_97 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_98 = new cjs.Graphics().p("EglyAHzMAAAgxqMBLlAAAMAAAAxqg");
	var mask_1_graphics_99 = new cjs.Graphics().p("Eglzgp3MBLnAAAMAAAAxsMhLnAAAg");
	var mask_1_graphics_100 = new cjs.Graphics().p("EglzgpBMBLnAAAMAAAAxrMhLnAAAg");
	var mask_1_graphics_101 = new cjs.Graphics().p("EglzgoMMBLnAAAMAAAAxrMhLnAAAg");
	var mask_1_graphics_102 = new cjs.Graphics().p("EglzgnWMBLnAAAMAAAAxrMhLnAAAg");
	var mask_1_graphics_103 = new cjs.Graphics().p("EglzgmhMBLnAAAMAAAAxrMhLnAAAg");
	var mask_1_graphics_104 = new cjs.Graphics().p("EglzglsMBLnAAAMAAAAxrMhLnAAAg");
	var mask_1_graphics_105 = new cjs.Graphics().p("Eglzgk2MBLnAAAMAAAAxrMhLnAAAg");
	var mask_1_graphics_106 = new cjs.Graphics().p("EglzgkBMBLnAAAMAAAAxrMhLnAAAg");
	var mask_1_graphics_107 = new cjs.Graphics().p("EglzgjMMBLnAAAMAAAAxrMhLnAAAg");
	var mask_1_graphics_108 = new cjs.Graphics().p("EglzgiWMBLnAAAMAAAAxrMhLnAAAg");
	var mask_1_graphics_109 = new cjs.Graphics().p("EglzghhMBLnAAAMAAAAxrMhLnAAAg");
	var mask_1_graphics_110 = new cjs.Graphics().p("EglzggsMBLnAAAMAAAAxrMhLnAAAg");
	var mask_1_graphics_111 = new cjs.Graphics().p("Eglzgf2MBLnAAAMAAAAxrMhLnAAAg");
	var mask_1_graphics_112 = new cjs.Graphics().p("EglzgfBMBLnAAAMAAAAxrMhLnAAAg");
	var mask_1_graphics_113 = new cjs.Graphics().p("EglzgeMMBLnAAAMAAAAxrMhLnAAAg");
	var mask_1_graphics_114 = new cjs.Graphics().p("EglzgdWMBLnAAAMAAAAxrMhLnAAAg");
	var mask_1_graphics_115 = new cjs.Graphics().p("EglzgchMBLnAAAMAAAAxrMhLnAAAg");
	var mask_1_graphics_116 = new cjs.Graphics().p("EglzgbsMBLnAAAMAAAAxrMhLnAAAg");
	var mask_1_graphics_117 = new cjs.Graphics().p("Eglzga2MBLnAAAMAAAAxrMhLnAAAg");
	var mask_1_graphics_118 = new cjs.Graphics().p("EglzgaBMBLnAAAMAAAAxrMhLnAAAg");
	var mask_1_graphics_119 = new cjs.Graphics().p("EglzgZMMBLnAAAMAAAAxrMhLnAAAg");
	var mask_1_graphics_120 = new cjs.Graphics().p("EglzgY1MBLnAAAMAAAAxrMhLnAAAg");
	var mask_1_graphics_121 = new cjs.Graphics().p("EglzgY1MBLnAAAMAAAAxrMhLnAAAg");
	var mask_1_graphics_122 = new cjs.Graphics().p("EglzgY1MBLnAAAMAAAAxrMhLnAAAg");
	var mask_1_graphics_123 = new cjs.Graphics().p("EglzgY1MBLnAAAMAAAAxrMhLnAAAg");
	var mask_1_graphics_124 = new cjs.Graphics().p("EglzgY1MBLnAAAMAAAAxrMhLnAAAg");
	var mask_1_graphics_125 = new cjs.Graphics().p("EglzgY1MBLnAAAMAAAAxrMhLnAAAg");
	var mask_1_graphics_126 = new cjs.Graphics().p("EglzgY1MBLnAAAMAAAAxrMhLnAAAg");
	var mask_1_graphics_127 = new cjs.Graphics().p("EglzgY1MBLnAAAMAAAAxrMhLnAAAg");
	var mask_1_graphics_128 = new cjs.Graphics().p("EglzgY1MBLnAAAMAAAAxrMhLnAAAg");
	var mask_1_graphics_129 = new cjs.Graphics().p("EglyAY1MAAAgxpMBLlAAAMAAAAxpg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:1.05,y:-376.975}).wait(1).to({graphics:mask_1_graphics_1,x:1.05,y:-267.9503}).wait(1).to({graphics:mask_1_graphics_2,x:1.05,y:-267.9505}).wait(1).to({graphics:mask_1_graphics_3,x:1.05,y:-267.9508}).wait(1).to({graphics:mask_1_graphics_4,x:1.05,y:-267.951}).wait(1).to({graphics:mask_1_graphics_5,x:1.05,y:-267.9513}).wait(1).to({graphics:mask_1_graphics_6,x:1.05,y:-267.9515}).wait(1).to({graphics:mask_1_graphics_7,x:1.05,y:-267.9518}).wait(1).to({graphics:mask_1_graphics_8,x:1.05,y:-267.952}).wait(1).to({graphics:mask_1_graphics_9,x:1.05,y:-267.9523}).wait(1).to({graphics:mask_1_graphics_10,x:1.05,y:-267.9525}).wait(1).to({graphics:mask_1_graphics_11,x:1.05,y:-267.9528}).wait(1).to({graphics:mask_1_graphics_12,x:1.05,y:-267.953}).wait(1).to({graphics:mask_1_graphics_13,x:1.05,y:-267.9533}).wait(1).to({graphics:mask_1_graphics_14,x:1.05,y:-267.9535}).wait(1).to({graphics:mask_1_graphics_15,x:1.05,y:-267.9538}).wait(1).to({graphics:mask_1_graphics_16,x:1.05,y:-267.954}).wait(1).to({graphics:mask_1_graphics_17,x:1.05,y:-267.9543}).wait(1).to({graphics:mask_1_graphics_18,x:1.05,y:-267.9545}).wait(1).to({graphics:mask_1_graphics_19,x:1.05,y:-267.9548}).wait(1).to({graphics:mask_1_graphics_20,x:1.05,y:-267.9551}).wait(1).to({graphics:mask_1_graphics_21,x:1.05,y:-267.9553}).wait(1).to({graphics:mask_1_graphics_22,x:1.05,y:-267.9556}).wait(1).to({graphics:mask_1_graphics_23,x:1.05,y:-267.9558}).wait(1).to({graphics:mask_1_graphics_24,x:1.05,y:-267.9561}).wait(1).to({graphics:mask_1_graphics_25,x:1.05,y:-267.9563}).wait(1).to({graphics:mask_1_graphics_26,x:1.05,y:-267.9566}).wait(1).to({graphics:mask_1_graphics_27,x:1.05,y:-267.9568}).wait(1).to({graphics:mask_1_graphics_28,x:1.05,y:-267.9571}).wait(1).to({graphics:mask_1_graphics_29,x:1.05,y:-267.9573}).wait(1).to({graphics:mask_1_graphics_30,x:1.05,y:-267.9576}).wait(1).to({graphics:mask_1_graphics_31,x:1.05,y:-267.9578}).wait(1).to({graphics:mask_1_graphics_32,x:1.05,y:-267.9581}).wait(1).to({graphics:mask_1_graphics_33,x:1.05,y:-267.9583}).wait(1).to({graphics:mask_1_graphics_34,x:1.05,y:-267.9586}).wait(1).to({graphics:mask_1_graphics_35,x:1.05,y:-267.9588}).wait(1).to({graphics:mask_1_graphics_36,x:1.05,y:-267.9591}).wait(1).to({graphics:mask_1_graphics_37,x:1.05,y:-267.9593}).wait(1).to({graphics:mask_1_graphics_38,x:1.05,y:-267.9596}).wait(1).to({graphics:mask_1_graphics_39,x:1.05,y:-267.9598}).wait(1).to({graphics:mask_1_graphics_40,x:1.05,y:-267.9601}).wait(1).to({graphics:mask_1_graphics_41,x:1.05,y:-267.9604}).wait(1).to({graphics:mask_1_graphics_42,x:1.05,y:-267.9606}).wait(1).to({graphics:mask_1_graphics_43,x:1.05,y:-267.9609}).wait(1).to({graphics:mask_1_graphics_44,x:1.05,y:-267.9611}).wait(1).to({graphics:mask_1_graphics_45,x:1.05,y:-267.9614}).wait(1).to({graphics:mask_1_graphics_46,x:1.05,y:-267.9616}).wait(1).to({graphics:mask_1_graphics_47,x:1.05,y:-267.9619}).wait(1).to({graphics:mask_1_graphics_48,x:1.05,y:-267.9621}).wait(1).to({graphics:mask_1_graphics_49,x:1.05,y:-267.9624}).wait(1).to({graphics:mask_1_graphics_50,x:1.05,y:-267.9626}).wait(1).to({graphics:mask_1_graphics_51,x:1.05,y:-267.9629}).wait(1).to({graphics:mask_1_graphics_52,x:1.05,y:-267.9631}).wait(1).to({graphics:mask_1_graphics_53,x:1.05,y:-267.9634}).wait(1).to({graphics:mask_1_graphics_54,x:1.05,y:-267.9636}).wait(1).to({graphics:mask_1_graphics_55,x:1.05,y:-267.9639}).wait(1).to({graphics:mask_1_graphics_56,x:1.05,y:-267.9641}).wait(1).to({graphics:mask_1_graphics_57,x:1.05,y:-267.9644}).wait(1).to({graphics:mask_1_graphics_58,x:1.05,y:-267.9646}).wait(1).to({graphics:mask_1_graphics_59,x:1.05,y:-267.9649}).wait(1).to({graphics:mask_1_graphics_60,x:1.05,y:-267.9652}).wait(1).to({graphics:mask_1_graphics_61,x:1.05,y:-267.9654}).wait(1).to({graphics:mask_1_graphics_62,x:1.05,y:-267.9657}).wait(1).to({graphics:mask_1_graphics_63,x:1.05,y:-267.9659}).wait(1).to({graphics:mask_1_graphics_64,x:1.05,y:-267.9662}).wait(1).to({graphics:mask_1_graphics_65,x:1.05,y:-267.9664}).wait(1).to({graphics:mask_1_graphics_66,x:1.05,y:-267.9667}).wait(1).to({graphics:mask_1_graphics_67,x:1.05,y:-267.9669}).wait(1).to({graphics:mask_1_graphics_68,x:1.05,y:-267.9672}).wait(1).to({graphics:mask_1_graphics_69,x:1.05,y:-267.9674}).wait(1).to({graphics:mask_1_graphics_70,x:1.05,y:-267.9677}).wait(1).to({graphics:mask_1_graphics_71,x:1.05,y:-267.9679}).wait(1).to({graphics:mask_1_graphics_72,x:1.05,y:-267.9682}).wait(1).to({graphics:mask_1_graphics_73,x:1.05,y:-267.9684}).wait(1).to({graphics:mask_1_graphics_74,x:1.05,y:-267.9687}).wait(1).to({graphics:mask_1_graphics_75,x:1.05,y:-267.9689}).wait(1).to({graphics:mask_1_graphics_76,x:1.05,y:-267.9692}).wait(1).to({graphics:mask_1_graphics_77,x:1.05,y:-267.9694}).wait(1).to({graphics:mask_1_graphics_78,x:1.05,y:-267.9697}).wait(1).to({graphics:mask_1_graphics_79,x:1.05,y:-267.9699}).wait(1).to({graphics:mask_1_graphics_80,x:1.05,y:-267.9702}).wait(1).to({graphics:mask_1_graphics_81,x:1.05,y:-267.9705}).wait(1).to({graphics:mask_1_graphics_82,x:1.05,y:-267.9707}).wait(1).to({graphics:mask_1_graphics_83,x:1.05,y:-267.971}).wait(1).to({graphics:mask_1_graphics_84,x:1.05,y:-267.9712}).wait(1).to({graphics:mask_1_graphics_85,x:1.05,y:-267.9715}).wait(1).to({graphics:mask_1_graphics_86,x:1.05,y:-267.9717}).wait(1).to({graphics:mask_1_graphics_87,x:1.05,y:-267.972}).wait(1).to({graphics:mask_1_graphics_88,x:1.05,y:-267.9722}).wait(1).to({graphics:mask_1_graphics_89,x:1.05,y:-267.9725}).wait(1).to({graphics:mask_1_graphics_90,x:1.05,y:-267.9727}).wait(1).to({graphics:mask_1_graphics_91,x:1.05,y:-267.973}).wait(1).to({graphics:mask_1_graphics_92,x:1.05,y:-267.9732}).wait(1).to({graphics:mask_1_graphics_93,x:1.05,y:-267.9735}).wait(1).to({graphics:mask_1_graphics_94,x:1.05,y:-267.9737}).wait(1).to({graphics:mask_1_graphics_95,x:1.05,y:-267.974}).wait(1).to({graphics:mask_1_graphics_96,x:1.05,y:-267.9742}).wait(1).to({graphics:mask_1_graphics_97,x:1.05,y:-267.9745}).wait(1).to({graphics:mask_1_graphics_98,x:1.05,y:-267.9747}).wait(1).to({graphics:mask_1_graphics_99,x:1.15,y:-267.95}).wait(1).to({graphics:mask_1_graphics_100,x:1.15,y:-262.6158}).wait(1).to({graphics:mask_1_graphics_101,x:1.15,y:-257.2817}).wait(1).to({graphics:mask_1_graphics_102,x:1.15,y:-251.9475}).wait(1).to({graphics:mask_1_graphics_103,x:1.15,y:-246.6133}).wait(1).to({graphics:mask_1_graphics_104,x:1.15,y:-241.2792}).wait(1).to({graphics:mask_1_graphics_105,x:1.15,y:-235.945}).wait(1).to({graphics:mask_1_graphics_106,x:1.15,y:-230.6108}).wait(1).to({graphics:mask_1_graphics_107,x:1.15,y:-225.2767}).wait(1).to({graphics:mask_1_graphics_108,x:1.15,y:-219.9425}).wait(1).to({graphics:mask_1_graphics_109,x:1.15,y:-214.6083}).wait(1).to({graphics:mask_1_graphics_110,x:1.15,y:-209.2742}).wait(1).to({graphics:mask_1_graphics_111,x:1.15,y:-203.94}).wait(1).to({graphics:mask_1_graphics_112,x:1.15,y:-198.6058}).wait(1).to({graphics:mask_1_graphics_113,x:1.15,y:-193.2717}).wait(1).to({graphics:mask_1_graphics_114,x:1.15,y:-187.9375}).wait(1).to({graphics:mask_1_graphics_115,x:1.15,y:-182.6033}).wait(1).to({graphics:mask_1_graphics_116,x:1.15,y:-177.2692}).wait(1).to({graphics:mask_1_graphics_117,x:1.15,y:-171.935}).wait(1).to({graphics:mask_1_graphics_118,x:1.15,y:-166.6008}).wait(1).to({graphics:mask_1_graphics_119,x:1.15,y:-161.2667}).wait(1).to({graphics:mask_1_graphics_120,x:1.15,y:-152.865}).wait(1).to({graphics:mask_1_graphics_121,x:1.15,y:-142.1967}).wait(1).to({graphics:mask_1_graphics_122,x:1.15,y:-131.5283}).wait(1).to({graphics:mask_1_graphics_123,x:1.15,y:-120.86}).wait(1).to({graphics:mask_1_graphics_124,x:1.15,y:-110.1917}).wait(1).to({graphics:mask_1_graphics_125,x:1.15,y:-99.5233}).wait(1).to({graphics:mask_1_graphics_126,x:1.15,y:-88.855}).wait(1).to({graphics:mask_1_graphics_127,x:1.15,y:-78.1867}).wait(1).to({graphics:mask_1_graphics_128,x:1.15,y:-67.5183}).wait(1).to({graphics:mask_1_graphics_129,x:1.05,y:-56.975}).wait(121));

	// wood_bowl_obj_
	this.wood_bowl = new lib.products_wood_bowl();
	this.wood_bowl.name = "wood_bowl";
	this.wood_bowl.parent = this;
	this.wood_bowl.setTransform(-1,1,1,1,0,0,0,-1,1);
	this.wood_bowl.depth = 0;
	this.wood_bowl.isAttachedToCamera = 0
	this.wood_bowl.isAttachedToMask = 0
	this.wood_bowl.layerDepth = 0
	this.wood_bowl.layerIndex = 1
	this.wood_bowl.maskLayerName = 0

	var maskedShapeInstanceList = [this.wood_bowl];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.wood_bowl).to({_off:true},190).wait(60));

	// mask_idn (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("Egi0AZaMAAAgyzMBFpAAAMAAAAyzg");
	var mask_2_graphics_1 = new cjs.Graphics().p("Egi0AZaMAAAgyzMBFpAAAMAAAAyzg");
	var mask_2_graphics_2 = new cjs.Graphics().p("Egi0AZaMAAAgyzMBFpAAAMAAAAyzg");
	var mask_2_graphics_3 = new cjs.Graphics().p("Egi0AZaMAAAgyzMBFpAAAMAAAAyzg");
	var mask_2_graphics_4 = new cjs.Graphics().p("Egi0AZaMAAAgyzMBFpAAAMAAAAyzg");
	var mask_2_graphics_5 = new cjs.Graphics().p("Egi0AZaMAAAgyzMBFpAAAMAAAAyzg");
	var mask_2_graphics_6 = new cjs.Graphics().p("Egi0AZaMAAAgyzMBFpAAAMAAAAyzg");
	var mask_2_graphics_7 = new cjs.Graphics().p("Egi0AZaMAAAgyzMBFpAAAMAAAAyzg");
	var mask_2_graphics_8 = new cjs.Graphics().p("Egi0AZaMAAAgyzMBFpAAAMAAAAyzg");
	var mask_2_graphics_9 = new cjs.Graphics().p("Egi0AZaMAAAgyzMBFpAAAMAAAAyzg");
	var mask_2_graphics_10 = new cjs.Graphics().p("Egi0AZaMAAAgyzMBFpAAAMAAAAyzg");
	var mask_2_graphics_11 = new cjs.Graphics().p("Egi0AZaMAAAgyzMBFpAAAMAAAAyzg");
	var mask_2_graphics_12 = new cjs.Graphics().p("Egi0AZaMAAAgyzMBFpAAAMAAAAyzg");
	var mask_2_graphics_13 = new cjs.Graphics().p("Egi0AZaMAAAgyzMBFpAAAMAAAAyzg");
	var mask_2_graphics_14 = new cjs.Graphics().p("Egi0AZaMAAAgyzMBFpAAAMAAAAyzg");
	var mask_2_graphics_15 = new cjs.Graphics().p("Egi0AZaMAAAgyzMBFpAAAMAAAAyzg");
	var mask_2_graphics_16 = new cjs.Graphics().p("Egi0AZaMAAAgyzMBFpAAAMAAAAyzg");
	var mask_2_graphics_17 = new cjs.Graphics().p("Egi0AZaMAAAgyzMBFpAAAMAAAAyzg");
	var mask_2_graphics_18 = new cjs.Graphics().p("Egi0AZaMAAAgyzMBFpAAAMAAAAyzg");
	var mask_2_graphics_19 = new cjs.Graphics().p("Egi0AZaMAAAgyzMBFpAAAMAAAAyzg");
	var mask_2_graphics_20 = new cjs.Graphics().p("Egi0AZaMAAAgyzMBFpAAAMAAAAyzg");
	var mask_2_graphics_21 = new cjs.Graphics().p("Egi0AZaMAAAgyzMBFpAAAMAAAAyzg");
	var mask_2_graphics_22 = new cjs.Graphics().p("Egi0AZaMAAAgyzMBFpAAAMAAAAyzg");
	var mask_2_graphics_23 = new cjs.Graphics().p("Egi0AZaMAAAgyzMBFpAAAMAAAAyzg");
	var mask_2_graphics_24 = new cjs.Graphics().p("Egi0AZaMAAAgyzMBFpAAAMAAAAyzg");
	var mask_2_graphics_25 = new cjs.Graphics().p("Egi0AZaMAAAgyzMBFpAAAMAAAAyzg");
	var mask_2_graphics_26 = new cjs.Graphics().p("Egi0AZaMAAAgyzMBFpAAAMAAAAyzg");
	var mask_2_graphics_27 = new cjs.Graphics().p("Egi0AZaMAAAgyzMBFpAAAMAAAAyzg");
	var mask_2_graphics_28 = new cjs.Graphics().p("Egi0AZaMAAAgyzMBFpAAAMAAAAyzg");
	var mask_2_graphics_29 = new cjs.Graphics().p("Egi0AZaMAAAgyzMBFpAAAMAAAAyzg");
	var mask_2_graphics_30 = new cjs.Graphics().p("Egi0AZaMAAAgyzMBFpAAAMAAAAyzg");
	var mask_2_graphics_31 = new cjs.Graphics().p("Egi0AZaMAAAgyzMBFpAAAMAAAAyzg");
	var mask_2_graphics_32 = new cjs.Graphics().p("Egi0AZaMAAAgyzMBFpAAAMAAAAyzg");
	var mask_2_graphics_33 = new cjs.Graphics().p("Egi0AZaMAAAgyzMBFpAAAMAAAAyzg");
	var mask_2_graphics_34 = new cjs.Graphics().p("Egi0AZaMAAAgyzMBFpAAAMAAAAyzg");
	var mask_2_graphics_35 = new cjs.Graphics().p("Egi0AZaMAAAgyzMBFpAAAMAAAAyzg");
	var mask_2_graphics_36 = new cjs.Graphics().p("Egi0AZaMAAAgyzMBFpAAAMAAAAyzg");
	var mask_2_graphics_37 = new cjs.Graphics().p("Egi0AZaMAAAgyzMBFpAAAMAAAAyzg");
	var mask_2_graphics_38 = new cjs.Graphics().p("Egi0AZaMAAAgyzMBFpAAAMAAAAyzg");
	var mask_2_graphics_39 = new cjs.Graphics().p("Eg0LgZYMBFsAAAMAAAAyxMhFsAAAg");
	var mask_2_graphics_40 = new cjs.Graphics().p("EgzBgZYMBFrAAAMAAAAyxMhFrAAAg");
	var mask_2_graphics_41 = new cjs.Graphics().p("Egx4gZYMBFrAAAMAAAAyxMhFrAAAg");
	var mask_2_graphics_42 = new cjs.Graphics().p("EgwvgZYMBFsAAAMAAAAyxMhFsAAAg");
	var mask_2_graphics_43 = new cjs.Graphics().p("EgvlgZYMBFrAAAMAAAAyxMhFrAAAg");
	var mask_2_graphics_44 = new cjs.Graphics().p("EgucgZYMBFrAAAMAAAAyxMhFrAAAg");
	var mask_2_graphics_45 = new cjs.Graphics().p("EgtTgZYMBFsAAAMAAAAyxMhFsAAAg");
	var mask_2_graphics_46 = new cjs.Graphics().p("EgsJgZYMBFrAAAMAAAAyxMhFrAAAg");
	var mask_2_graphics_47 = new cjs.Graphics().p("EgrAgZYMBFrAAAMAAAAyxMhFrAAAg");
	var mask_2_graphics_48 = new cjs.Graphics().p("Egp3gZYMBFsAAAMAAAAyxMhFsAAAg");
	var mask_2_graphics_49 = new cjs.Graphics().p("EgotgZYMBFrAAAMAAAAyxMhFrAAAg");
	var mask_2_graphics_50 = new cjs.Graphics().p("EgnkgZYMBFrAAAMAAAAyxMhFrAAAg");
	var mask_2_graphics_51 = new cjs.Graphics().p("EgmbgZYMBFsAAAMAAAAyxMhFsAAAg");
	var mask_2_graphics_52 = new cjs.Graphics().p("EglRgZYMBFrAAAMAAAAyxMhFrAAAg");
	var mask_2_graphics_53 = new cjs.Graphics().p("EgkIgZYMBFrAAAMAAAAyxMhFrAAAg");
	var mask_2_graphics_54 = new cjs.Graphics().p("Egi/gZYMBFsAAAMAAAAyxMhFsAAAg");
	var mask_2_graphics_55 = new cjs.Graphics().p("Egi1gZYMBFrAAAMAAAAyxMhFrAAAg");
	var mask_2_graphics_56 = new cjs.Graphics().p("Egi1gZYMBFrAAAMAAAAyxMhFrAAAg");
	var mask_2_graphics_57 = new cjs.Graphics().p("Egi1gZYMBFrAAAMAAAAyxMhFrAAAg");
	var mask_2_graphics_58 = new cjs.Graphics().p("Egi1gZYMBFrAAAMAAAAyxMhFrAAAg");
	var mask_2_graphics_59 = new cjs.Graphics().p("Egi1gZYMBFrAAAMAAAAyxMhFrAAAg");
	var mask_2_graphics_60 = new cjs.Graphics().p("Egi1gZYMBFrAAAMAAAAyxMhFrAAAg");
	var mask_2_graphics_61 = new cjs.Graphics().p("Egi1gZYMBFrAAAMAAAAyxMhFrAAAg");
	var mask_2_graphics_62 = new cjs.Graphics().p("Egi1gZYMBFrAAAMAAAAyxMhFrAAAg");
	var mask_2_graphics_63 = new cjs.Graphics().p("Egi1gZYMBFrAAAMAAAAyxMhFrAAAg");
	var mask_2_graphics_64 = new cjs.Graphics().p("Egi1gZYMBFrAAAMAAAAyxMhFrAAAg");
	var mask_2_graphics_65 = new cjs.Graphics().p("Egi1gZYMBFrAAAMAAAAyxMhFrAAAg");
	var mask_2_graphics_66 = new cjs.Graphics().p("Egi1gZYMBFrAAAMAAAAyxMhFrAAAg");
	var mask_2_graphics_67 = new cjs.Graphics().p("Egi1gZYMBFrAAAMAAAAyxMhFrAAAg");
	var mask_2_graphics_68 = new cjs.Graphics().p("Egi1gZYMBFrAAAMAAAAyxMhFrAAAg");
	var mask_2_graphics_69 = new cjs.Graphics().p("Egi1gZYMBFrAAAMAAAAyxMhFrAAAg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:-445,y:-68.5}).wait(1).to({graphics:mask_2_graphics_1,x:-445,y:-68.5}).wait(1).to({graphics:mask_2_graphics_2,x:-445,y:-68.5}).wait(1).to({graphics:mask_2_graphics_3,x:-445,y:-68.5}).wait(1).to({graphics:mask_2_graphics_4,x:-445,y:-68.5}).wait(1).to({graphics:mask_2_graphics_5,x:-445,y:-68.5}).wait(1).to({graphics:mask_2_graphics_6,x:-445,y:-68.5}).wait(1).to({graphics:mask_2_graphics_7,x:-445,y:-68.5}).wait(1).to({graphics:mask_2_graphics_8,x:-445,y:-68.5}).wait(1).to({graphics:mask_2_graphics_9,x:-445,y:-68.5}).wait(1).to({graphics:mask_2_graphics_10,x:-445,y:-68.5}).wait(1).to({graphics:mask_2_graphics_11,x:-445,y:-68.5}).wait(1).to({graphics:mask_2_graphics_12,x:-445,y:-68.5}).wait(1).to({graphics:mask_2_graphics_13,x:-445,y:-68.5}).wait(1).to({graphics:mask_2_graphics_14,x:-445,y:-68.5}).wait(1).to({graphics:mask_2_graphics_15,x:-445,y:-68.5}).wait(1).to({graphics:mask_2_graphics_16,x:-445,y:-68.5}).wait(1).to({graphics:mask_2_graphics_17,x:-445,y:-68.5}).wait(1).to({graphics:mask_2_graphics_18,x:-445,y:-68.5}).wait(1).to({graphics:mask_2_graphics_19,x:-445,y:-68.5}).wait(1).to({graphics:mask_2_graphics_20,x:-445,y:-68.5}).wait(1).to({graphics:mask_2_graphics_21,x:-445,y:-68.5}).wait(1).to({graphics:mask_2_graphics_22,x:-445,y:-68.5}).wait(1).to({graphics:mask_2_graphics_23,x:-445,y:-68.5}).wait(1).to({graphics:mask_2_graphics_24,x:-445,y:-68.5}).wait(1).to({graphics:mask_2_graphics_25,x:-445,y:-68.5}).wait(1).to({graphics:mask_2_graphics_26,x:-445,y:-68.5}).wait(1).to({graphics:mask_2_graphics_27,x:-445,y:-68.5}).wait(1).to({graphics:mask_2_graphics_28,x:-445,y:-68.5}).wait(1).to({graphics:mask_2_graphics_29,x:-445,y:-68.5}).wait(1).to({graphics:mask_2_graphics_30,x:-445,y:-68.5}).wait(1).to({graphics:mask_2_graphics_31,x:-445,y:-68.5}).wait(1).to({graphics:mask_2_graphics_32,x:-445,y:-68.5}).wait(1).to({graphics:mask_2_graphics_33,x:-445,y:-68.5}).wait(1).to({graphics:mask_2_graphics_34,x:-445,y:-68.5}).wait(1).to({graphics:mask_2_graphics_35,x:-445,y:-68.5}).wait(1).to({graphics:mask_2_graphics_36,x:-445,y:-68.5}).wait(1).to({graphics:mask_2_graphics_37,x:-445,y:-68.5}).wait(1).to({graphics:mask_2_graphics_38,x:-445,y:-68.5}).wait(1).to({graphics:mask_2_graphics_39,x:-333.95,y:-68.6}).wait(1).to({graphics:mask_2_graphics_40,x:-326.6167,y:-68.6}).wait(1).to({graphics:mask_2_graphics_41,x:-319.2833,y:-68.6}).wait(1).to({graphics:mask_2_graphics_42,x:-311.95,y:-68.6}).wait(1).to({graphics:mask_2_graphics_43,x:-304.6167,y:-68.6}).wait(1).to({graphics:mask_2_graphics_44,x:-297.2833,y:-68.6}).wait(1).to({graphics:mask_2_graphics_45,x:-289.95,y:-68.6}).wait(1).to({graphics:mask_2_graphics_46,x:-282.6167,y:-68.6}).wait(1).to({graphics:mask_2_graphics_47,x:-275.2833,y:-68.6}).wait(1).to({graphics:mask_2_graphics_48,x:-267.95,y:-68.6}).wait(1).to({graphics:mask_2_graphics_49,x:-260.6167,y:-68.6}).wait(1).to({graphics:mask_2_graphics_50,x:-253.2833,y:-68.6}).wait(1).to({graphics:mask_2_graphics_51,x:-245.95,y:-68.6}).wait(1).to({graphics:mask_2_graphics_52,x:-238.6167,y:-68.6}).wait(1).to({graphics:mask_2_graphics_53,x:-231.2833,y:-68.6}).wait(1).to({graphics:mask_2_graphics_54,x:-223.95,y:-68.6}).wait(1).to({graphics:mask_2_graphics_55,x:-210.2333,y:-68.6}).wait(1).to({graphics:mask_2_graphics_56,x:-195.5667,y:-68.6}).wait(1).to({graphics:mask_2_graphics_57,x:-180.9,y:-68.6}).wait(1).to({graphics:mask_2_graphics_58,x:-166.2333,y:-68.6}).wait(1).to({graphics:mask_2_graphics_59,x:-151.5667,y:-68.6}).wait(1).to({graphics:mask_2_graphics_60,x:-136.9,y:-68.6}).wait(1).to({graphics:mask_2_graphics_61,x:-122.2333,y:-68.6}).wait(1).to({graphics:mask_2_graphics_62,x:-107.5667,y:-68.6}).wait(1).to({graphics:mask_2_graphics_63,x:-92.9,y:-68.6}).wait(1).to({graphics:mask_2_graphics_64,x:-78.2333,y:-68.6}).wait(1).to({graphics:mask_2_graphics_65,x:-63.5667,y:-68.6}).wait(1).to({graphics:mask_2_graphics_66,x:-48.9,y:-68.6}).wait(1).to({graphics:mask_2_graphics_67,x:-34.2333,y:-68.6}).wait(1).to({graphics:mask_2_graphics_68,x:-19.5667,y:-68.6}).wait(1).to({graphics:mask_2_graphics_69,x:-4.9,y:-68.6}).wait(181));

	// dip_bowl_obj_
	this.dip_bowl = new lib.products_dip_bowl();
	this.dip_bowl.name = "dip_bowl";
	this.dip_bowl.parent = this;
	this.dip_bowl.setTransform(-1,3,1,1,0,0,0,-1,3);
	this.dip_bowl.depth = 0;
	this.dip_bowl.isAttachedToCamera = 0
	this.dip_bowl.isAttachedToMask = 0
	this.dip_bowl.layerDepth = 0
	this.dip_bowl.layerIndex = 2
	this.dip_bowl.maskLayerName = 0

	var maskedShapeInstanceList = [this.dip_bowl];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.dip_bowl).to({_off:true},130).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-222,-219,441,321);


(lib.Scene_1_products = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// products
	this.instance = new lib.products();
	this.instance.parent = this;
	this.instance.setTransform(332,240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(215));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.everydaythings = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.btn_main_link = this.BUTTON.btn_main_link;
		this.btn_main_link.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("http://melodystyleproduction.myartsonline.com", "_blank");
		}
	}
	this.frame_209 = function() {
		this.stop();
	}
	this.frame_214 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(209).call(this.frame_209).wait(5).call(this.frame_214).wait(1));

	// BUTTON_obj_
	this.BUTTON = new lib.Scene_1_BUTTON();
	this.BUTTON.name = "BUTTON";
	this.BUTTON.parent = this;
	this.BUTTON.setTransform(359,150.3,1,1,0,0,0,359,150.3);
	this.BUTTON.depth = 0;
	this.BUTTON.isAttachedToCamera = 0
	this.BUTTON.isAttachedToMask = 0
	this.BUTTON.layerDepth = 0
	this.BUTTON.layerIndex = 0
	this.BUTTON.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.BUTTON).wait(215));

	// HEADLINE_obj_
	this.HEADLINE = new lib.Scene_1_HEADLINE();
	this.HEADLINE.name = "HEADLINE";
	this.HEADLINE.parent = this;
	this.HEADLINE.setTransform(645,7.9,1,1,0,0,0,645,7.9);
	this.HEADLINE.depth = 0;
	this.HEADLINE.isAttachedToCamera = 0
	this.HEADLINE.isAttachedToMask = 0
	this.HEADLINE.layerDepth = 0
	this.HEADLINE.layerIndex = 1
	this.HEADLINE.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.HEADLINE).wait(215));

	// products_obj_
	this.products = new lib.Scene_1_products();
	this.products.name = "products";
	this.products.parent = this;
	this.products.setTransform(383.6,83.5,1,1,0,0,0,383.6,83.5);
	this.products.depth = 0;
	this.products.isAttachedToCamera = 0
	this.products.isAttachedToMask = 0
	this.products.layerDepth = 0
	this.products.layerIndex = 2
	this.products.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.products).wait(215));

	// CTA_obj_
	this.CTA = new lib.Scene_1_CTA();
	this.CTA.name = "CTA";
	this.CTA.parent = this;
	this.CTA.depth = 0;
	this.CTA.isAttachedToCamera = 0
	this.CTA.isAttachedToMask = 0
	this.CTA.layerDepth = 0
	this.CTA.layerIndex = 3
	this.CTA.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.CTA).wait(215));

	// basket_obj_
	this.basket = new lib.Scene_1_basket();
	this.basket.name = "basket";
	this.basket.parent = this;
	this.basket.setTransform(-252.4,257.9,1,1,0,0,0,-252.4,257.9);
	this.basket.depth = 0;
	this.basket.isAttachedToCamera = 0
	this.basket.isAttachedToMask = 0
	this.basket.layerDepth = 0
	this.basket.layerIndex = 4
	this.basket.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.basket).wait(215));

	// TEXT_BOX_obj_
	this.TEXT_BOX = new lib.Scene_1_TEXT_BOX();
	this.TEXT_BOX.name = "TEXT_BOX";
	this.TEXT_BOX.parent = this;
	this.TEXT_BOX.setTransform(831.5,107.5,1,1,0,0,0,831.5,107.5);
	this.TEXT_BOX.depth = 0;
	this.TEXT_BOX.isAttachedToCamera = 0
	this.TEXT_BOX.isAttachedToMask = 0
	this.TEXT_BOX.layerDepth = 0
	this.TEXT_BOX.layerIndex = 5
	this.TEXT_BOX.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.TEXT_BOX).wait(215));

	// Logo_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgvhANNIAA3uMAxgAAAIAAEyQpeB9nSHQQkdEdidFSg");
	var mask_graphics_1 = new cjs.Graphics().p("EgtPANJIAA3vMAxgAAAIAAEyQpeB+nSHQQkdEdidFSg");
	var mask_graphics_2 = new cjs.Graphics().p("EgrBANEIAA3uMAxgAAAIAAEyQpeB9nSHRQkdEdidFRg");
	var mask_graphics_3 = new cjs.Graphics().p("Ego3ANAIAA3uMAxgAAAIAAEyQpdB9nTHRQkcEdieFRg");
	var mask_graphics_4 = new cjs.Graphics().p("EgmwAM8IAA3uMAxgAAAIAAEyQpfB9nRHRQkdEdidFRg");
	var mask_graphics_5 = new cjs.Graphics().p("EgktAM4IAA3uMAxgAAAIAAEyQpfB9nRHRQkdEdidFRg");
	var mask_graphics_6 = new cjs.Graphics().p("EgivAM0IAA3tMAxgAAAIAAEyQpeB8nRHRQkdEdidFRg");
	var mask_graphics_7 = new cjs.Graphics().p("Egg0AMxIAA3uMAxgAAAIAAEyQpeB9nRHRQkdEdidFRg");
	var mask_graphics_8 = new cjs.Graphics().p("A+8MuIAA3uMAxgAAAIAAExQpeB+nTHQQkbEdieFSg");
	var mask_graphics_9 = new cjs.Graphics().p("A9JMqIAA3uMAxhAAAIAAEyQpfB9nSHQQkcEdidFSg");
	var mask_graphics_10 = new cjs.Graphics().p("A7ZMnIAA3uMAxgAAAIAAEyQpeB9nSHQQkdEdicFSg");
	var mask_graphics_11 = new cjs.Graphics().p("A5tMkIAA3uMAxgAAAIAAEyQpeB8nSHRQkdEdidFSg");
	var mask_graphics_12 = new cjs.Graphics().p("A4wMhIAA3vMAxhAAAIAAEyQpfB9nSHRQkdEdidFSg");
	var mask_graphics_13 = new cjs.Graphics().p("A4vMdIAA3uMAxgAAAIAAEyQpfB+nSHQQkdEdidFRg");
	var mask_graphics_14 = new cjs.Graphics().p("A4vMbIAA3uMAxgAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_15 = new cjs.Graphics().p("A4vMYIAA3uMAxfAAAIAAEyQpeB9nSHQQkdEdidFSg");
	var mask_graphics_16 = new cjs.Graphics().p("A4vMVIAA3uMAxgAAAIAAEyQpfB9nSHRQkdEdidFRg");
	var mask_graphics_17 = new cjs.Graphics().p("A4wMTIAA3uMAxgAAAIAAEyQpeB9nSHQQkdEdidFSg");
	var mask_graphics_18 = new cjs.Graphics().p("A4wMQIAA3tMAxgAAAIAAEyQpeB8nSHRQkdEdidFRg");
	var mask_graphics_19 = new cjs.Graphics().p("A4wMOIAA3uMAxgAAAIAAEyQpeB9nSHQQkdEdidFSg");
	var mask_graphics_20 = new cjs.Graphics().p("A4wMMIAA3uMAxhAAAIAAEyQpfB9nSHRQkdEcidFSg");
	var mask_graphics_21 = new cjs.Graphics().p("A4wMKIAA3uMAxgAAAIAAEyQpeB9nSHQQkdEdidFSg");
	var mask_graphics_22 = new cjs.Graphics().p("A4wMIIAA3uMAxgAAAIAAEyQpeB9nSHRQkdEcidFSg");
	var mask_graphics_23 = new cjs.Graphics().p("A4wMGIAA3uMAxgAAAIAAEyQpeB9nSHQQkdEdidFSg");
	var mask_graphics_24 = new cjs.Graphics().p("A4vMEIAA3uMAxgAAAIAAEyQpfB9nSHRQkdEdidFRg");
	var mask_graphics_25 = new cjs.Graphics().p("A4vMDIAA3uMAxfAAAIAAEyQpeB9nSHQQkdEdidFSg");
	var mask_graphics_26 = new cjs.Graphics().p("A4vMBIAA3uMAxgAAAIAAEyQpfB9nSHRQkdEdidFRg");
	var mask_graphics_27 = new cjs.Graphics().p("A4vMAIAA3uMAxgAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_28 = new cjs.Graphics().p("A4wL+IAA3tMAxgAAAIAAEyQpeB8nSHRQkdEdidFRg");
	var mask_graphics_29 = new cjs.Graphics().p("A4wL9IAA3uMAxgAAAIAAEyQpeB9nSHRQkdEdidFRg");
	var mask_graphics_30 = new cjs.Graphics().p("A4wL8IAA3uMAxgAAAIAAEyQpeB9nSHRQkdEdidFRg");
	var mask_graphics_31 = new cjs.Graphics().p("A4wL7IAA3uMAxgAAAIAAEyQpeB9nSHRQkdEdidFRg");
	var mask_graphics_32 = new cjs.Graphics().p("A4wL6IAA3tMAxgAAAIAAEyQpeB8nSHRQkdEdidFRg");
	var mask_graphics_33 = new cjs.Graphics().p("A4vL6IAA3uMAxgAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_34 = new cjs.Graphics().p("A4wL5IAA3uMAxhAAAIAAEyQpfB9nSHRQkdEdidFRg");
	var mask_graphics_35 = new cjs.Graphics().p("A4wL5IAA3uMAxgAAAIAAEyQpeB9nSHQQkdEdidFSg");
	var mask_graphics_36 = new cjs.Graphics().p("A4vL4IAA3uMAxgAAAIAAEyQpfB9nSHRQkdEdidFRg");
	var mask_graphics_37 = new cjs.Graphics().p("A4vL4IAA3uMAxgAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_38 = new cjs.Graphics().p("A4wL4IAA3uMAxgAAAIAAEyQpeB9nSHQQkdEdidFSg");
	var mask_graphics_39 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_40 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_41 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_42 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_43 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_44 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_45 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_46 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_47 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_48 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_49 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_50 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_51 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_52 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_53 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_54 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_55 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_56 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_57 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_58 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_59 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_60 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_61 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_62 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_63 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_64 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_65 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_66 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_67 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_68 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_69 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_70 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_71 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_72 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_73 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_74 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_75 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_76 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_77 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_78 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_79 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_80 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_81 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_82 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_83 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_84 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_85 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_86 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_87 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_88 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_89 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_90 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_91 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_92 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_93 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_94 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_95 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_96 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_97 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_98 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_99 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_100 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_101 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_102 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_103 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_104 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_105 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_106 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_107 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_108 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_109 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_110 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_111 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_112 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_113 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_114 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_115 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_116 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_117 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_118 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_119 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_120 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_121 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_122 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_123 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_124 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_125 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_126 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_127 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_128 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_129 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_130 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_131 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_132 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_133 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_134 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_135 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_136 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_137 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_138 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_139 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_140 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_141 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_142 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_143 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_144 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_145 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_146 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_147 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_148 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_149 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_150 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_151 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_152 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_153 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_154 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_155 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_156 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_157 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_158 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_159 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_160 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_161 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_162 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_163 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_164 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_165 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_166 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_167 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_168 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_169 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_170 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_171 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_172 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_173 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_174 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_175 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_176 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_177 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_178 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_179 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_180 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_181 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_182 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_183 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_184 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_185 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_186 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_187 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_188 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_189 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_190 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_191 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_192 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_193 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_194 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_195 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_196 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_197 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_198 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_199 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_200 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_201 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_202 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_203 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_204 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_205 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_206 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_207 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_208 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_209 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_210 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_211 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_212 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_213 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");
	var mask_graphics_214 = new cjs.Graphics().p("A4wL4IAA3uMAxhAAAIAAEyQpfB9nSHQQkdEdidFSg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-304.225,y:84.475}).wait(1).to({graphics:mask_graphics_1,x:-289.625,y:84.05}).wait(1).to({graphics:mask_graphics_2,x:-275.425,y:83.625}).wait(1).to({graphics:mask_graphics_3,x:-261.6,y:83.225}).wait(1).to({graphics:mask_graphics_4,x:-248.125,y:82.825}).wait(1).to({graphics:mask_graphics_5,x:-235.05,y:82.425}).wait(1).to({graphics:mask_graphics_6,x:-222.375,y:82.05}).wait(1).to({graphics:mask_graphics_7,x:-210.05,y:81.7}).wait(1).to({graphics:mask_graphics_8,x:-198.1,y:81.35}).wait(1).to({graphics:mask_graphics_9,x:-186.55,y:81}).wait(1).to({graphics:mask_graphics_10,x:-175.375,y:80.675}).wait(1).to({graphics:mask_graphics_11,x:-164.575,y:80.35}).wait(1).to({graphics:mask_graphics_12,x:-149.85,y:80.05}).wait(1).to({graphics:mask_graphics_13,x:-129.75,y:79.75}).wait(1).to({graphics:mask_graphics_14,x:-110.4,y:79.475}).wait(1).to({graphics:mask_graphics_15,x:-91.85,y:79.2}).wait(1).to({graphics:mask_graphics_16,x:-74.05,y:78.925}).wait(1).to({graphics:mask_graphics_17,x:-57,y:78.675}).wait(1).to({graphics:mask_graphics_18,x:-40.7,y:78.45}).wait(1).to({graphics:mask_graphics_19,x:-25.15,y:78.2}).wait(1).to({graphics:mask_graphics_20,x:-10.35,y:78}).wait(1).to({graphics:mask_graphics_21,x:3.65,y:77.775}).wait(1).to({graphics:mask_graphics_22,x:16.9,y:77.6}).wait(1).to({graphics:mask_graphics_23,x:29.4,y:77.4}).wait(1).to({graphics:mask_graphics_24,x:41.15,y:77.225}).wait(1).to({graphics:mask_graphics_25,x:52.15,y:77.075}).wait(1).to({graphics:mask_graphics_26,x:62.4,y:76.925}).wait(1).to({graphics:mask_graphics_27,x:71.85,y:76.775}).wait(1).to({graphics:mask_graphics_28,x:80.6,y:76.65}).wait(1).to({graphics:mask_graphics_29,x:88.55,y:76.525}).wait(1).to({graphics:mask_graphics_30,x:95.75,y:76.425}).wait(1).to({graphics:mask_graphics_31,x:102.2,y:76.325}).wait(1).to({graphics:mask_graphics_32,x:107.9,y:76.25}).wait(1).to({graphics:mask_graphics_33,x:112.8,y:76.175}).wait(1).to({graphics:mask_graphics_34,x:117,y:76.125}).wait(1).to({graphics:mask_graphics_35,x:120.4,y:76.075}).wait(1).to({graphics:mask_graphics_36,x:123.05,y:76.025}).wait(1).to({graphics:mask_graphics_37,x:124.95,y:76}).wait(1).to({graphics:mask_graphics_38,x:126.05,y:75.975}).wait(1).to({graphics:mask_graphics_39,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_40,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_41,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_42,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_43,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_44,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_45,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_46,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_47,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_48,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_49,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_50,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_51,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_52,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_53,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_54,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_55,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_56,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_57,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_58,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_59,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_60,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_61,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_62,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_63,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_64,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_65,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_66,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_67,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_68,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_69,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_70,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_71,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_72,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_73,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_74,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_75,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_76,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_77,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_78,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_79,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_80,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_81,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_82,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_83,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_84,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_85,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_86,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_87,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_88,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_89,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_90,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_91,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_92,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_93,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_94,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_95,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_96,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_97,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_98,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_99,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_100,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_101,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_102,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_103,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_104,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_105,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_106,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_107,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_108,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_109,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_110,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_111,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_112,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_113,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_114,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_115,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_116,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_117,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_118,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_119,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_120,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_121,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_122,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_123,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_124,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_125,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_126,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_127,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_128,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_129,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_130,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_131,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_132,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_133,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_134,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_135,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_136,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_137,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_138,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_139,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_140,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_141,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_142,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_143,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_144,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_145,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_146,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_147,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_148,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_149,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_150,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_151,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_152,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_153,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_154,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_155,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_156,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_157,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_158,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_159,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_160,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_161,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_162,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_163,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_164,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_165,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_166,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_167,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_168,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_169,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_170,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_171,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_172,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_173,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_174,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_175,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_176,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_177,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_178,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_179,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_180,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_181,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_182,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_183,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_184,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_185,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_186,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_187,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_188,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_189,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_190,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_191,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_192,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_193,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_194,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_195,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_196,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_197,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_198,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_199,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_200,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_201,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_202,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_203,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_204,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_205,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_206,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_207,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_208,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_209,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_210,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_211,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_212,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_213,x:126.45,y:75.975}).wait(1).to({graphics:mask_graphics_214,x:126.45,y:75.975}).wait(1));

	// logo_obj_
	this.logo = new lib.Scene_1_logo();
	this.logo.name = "logo";
	this.logo.parent = this;
	this.logo.setTransform(104.7,67.8,1,1,0,0,0,104.7,67.8);
	this.logo.depth = 0;
	this.logo.isAttachedToCamera = 0
	this.logo.isAttachedToMask = 0
	this.logo.layerDepth = 0
	this.logo.layerIndex = 6
	this.logo.maskLayerName = 0

	var maskedShapeInstanceList = [this.logo];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(215));

	// counter_top_obj_
	this.counter_top = new lib.Scene_1_counter_top();
	this.counter_top.name = "counter_top";
	this.counter_top.parent = this;
	this.counter_top.setTransform(360,150,1,1,0,0,0,360,150);
	this.counter_top.depth = 0;
	this.counter_top.isAttachedToCamera = 0
	this.counter_top.isAttachedToMask = 0
	this.counter_top.layerDepth = 0
	this.counter_top.layerIndex = 7
	this.counter_top.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.counter_top).wait(215));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-203.5,-145.9,1306.7,714.9);
// library properties:
lib.properties = {
	id: '2833B3EC71814B45BB2B09A062F7DFBA',
	width: 720,
	height: 300,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/everyday things_atlas_.png", id:"everyday things_atlas_"},
		{src:"images/everyday things_atlas_2.png", id:"everyday things_atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['2833B3EC71814B45BB2B09A062F7DFBA'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;