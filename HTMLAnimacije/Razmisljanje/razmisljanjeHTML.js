(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Usta = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.2)").ss(4.9).p("AsJiCIAFAIQAGAIAIADQD/BuA4AUQESBjC5ACQDaADEmhsQCTg1Bng2");
	this.shape.setTransform(51.9604,8.555,0.6577,0.6577);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAOB9Qi5gCkShjQg4gVj/htQgIgDgGgIIgFgIIYPAmQhnA2iTA1QkfBqjXAAIgKgBg");
	this.shape_1.setTransform(51.8251,8.1962,0.6577,0.6577);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AmaBkQlYh3gRgdQgNgXAAhHQAAhDAJgNIYTAAIAEBWQADBbgMAUQgQAbkxBsQk7BuhfADIgEAAQhlAAldh7g");
	this.shape_2.setTransform(51.59,16.1542,0.6578,0.6578);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Usta, new cjs.Rectangle(-1.6,-2.5,111.8,33.3), null);


(lib.upitnik = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(50,50,50,0)").s().p("AgjB0IAAg4IA+AAIAAA4gAghAsIAAgFQAAgPADgKQADgJAHgHQAHgIAXgUQAMgKAAgIQAAgJgFgFQgFgEgKAAQgKgBgHAIQgIAHgCATIg8gIQADghAVgVQAVgUArgBQAiAAAVAPQAcATAAAgQAAAOgHAMQgHAMgXARQgQAMgEAIQgEAHAAAMg");
	this.shape.setTransform(47.475,25.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.upitnik, new cjs.Rectangle(0,0,95,49.1), null);


(lib.torzo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.004,1],-0.4,-24.6,0,0.7,-1.5,38.6).s().p("AgHGZQhHgDgegNQgvgVgohDQgmg/gHjbIAAjMQABgOAGgWQAKgqAWgkQBEhxCWAAQBWAAA7A1QAzAuASBIQAPA/gHDOQgIDVgYA4QgWA1hAAeQg2AZhAAAIgKAAg");
	this.shape.setTransform(32.8727,55.9369,0.6578,0.6578);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0.2)","rgba(0,0,0,0)"],[0,1],-24.8,1.6,7.5,-0.5).s().p("AgHGZQhHgDgegNQgvgVgohDQgmg/gHjbIAAjMQABgOAGgWQAKgqAWgkQBEhxCWAAQBWAAA7A1QAzAuASBIQAPA/gHDOQgIDVgYA4QgWA1hAAeQg2AZhAAAIgKAAg");
	this.shape_1.setTransform(32.8727,55.9369,0.6578,0.6578);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AgHGZQhHgDgegNQgvgVgohDQgmg/gHjbIAAjMQABgOAGgWQAKgqAWgkQBEhxCWAAQBWAAA7A1QAzAuASBIQAPA/gHDOQgIDVgYA4QgWA1hAAeQg2AZhAAAIgKAAg");
	this.shape_2.setTransform(32.8727,55.9369,0.6578,0.6578);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.337,1],-0.4,-55.3,-0.2,-33.1).s().p("AluGaQhRhCgehCQgJgTgNh0QgOiEgChwQgBiIAniYIAoh8IA9gCIAbApQAjAyApApQCCCFCHACQCFABCNiJQBHhEArhFIA+AAIAmBqQAnCHgDCOQgDBsgWCSQgTCFgNAZQglBLhbBCQiQBojKADIgLAAQjIAAiMhwg");
	this.shape_3.setTransform(33.8665,34.3072,0.6578,0.6578);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["rgba(255,255,255,0.698)","rgba(255,255,255,0)"],[0.141,1],6.3,-7,0,3,-7,69.7).s().p("AluGaQhRhCgehCQgJgTgNh0QgOiEgChwQgBiIAniYIAoh8IA9gCIAbApQAjAyApApQCCCFCHACQCFABCNiJQBHhEArhFIA+AAIAmBqQAnCHgDCOQgDBsgWCSQgTCFgNAZQglBLhbBCQiQBojKADIgLAAQjIAAiMhwg");
	this.shape_4.setTransform(33.8665,34.3072,0.6578,0.6578);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(0,0,0,0.298)","rgba(0,0,0,0)"],[0,1],-56.7,6.3,34.2,-8.2).s().p("AluGaQhRhCgehCQgJgTgNh0QgOiEgChwQgBiIAniYIAoh8IA9gCIAbApQAjAyApApQCCCFCHACQCFABCNiJQBHhEArhFIA+AAIAmBqQAnCHgDCOQgDBsgWCSQgTCFgNAZQglBLhbBCQiQBojKADIgLAAQjIAAiMhwg");
	this.shape_5.setTransform(33.8665,34.3072,0.6578,0.6578);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AluGaQhRhCgehCQgJgTgNh0QgOiEgChwQgBiIAniYIAoh8IA9gCIAbApQAjAyApApQCCCFCHACQCFABCNiJQBHhEArhFIA+AAIAmBqQAnCHgDCOQgDBsgWCSQgTCFgNAZQglBLhbBCQiQBojKADIgLAAQjIAAiMhwg");
	this.shape_6.setTransform(33.8665,34.3072,0.6578,0.6578);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.torzo, new cjs.Rectangle(0,0,67.8,82.9), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("AiGFkIAAh7IC9AAIAAB7gAh6CpIAAieQAhgJAbgIQAbgKAdgVQAbgTAQgZQAPgZAAgfQAAgvgegUQgdgUg3AAQgiAAgqAPQgqAOgkAXIgSAAIAAiPQAegNA+gNQA+gOBBAAQByAABEAzQBEAzAABSQAAAwgNAkQgOAlgaAbQgZAZgjAVQgkAWgsARIAABrg");
	this.shape.setTransform(32.425,62.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,144,120.7), null);


(lib.noga_desno = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.004)","rgba(0,0,0,0.2)","rgba(0,0,0,0)"],[0,0.318,0.388,1],-24.7,-3.3,-37.8,-2.1).s().p("ABVEjQkogIgigLQglgLhKkfQhBj8ANgNQAGgGEgAIIEdAJIA9BkQBCByAaBAQBwEWggAOQgMAFhdAAQhOAAiIgEg");
	this.shape.setTransform(26.9987,19.341,0.6578,0.6578);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.667,0.769],34.8,-0.1,16.6,-0.3).s().p("ABVEjQkogIgigLQglgLhKkfQhBj8ANgNQAGgGEgAIIEdAJIA9BkQBCByAaBAQBwEWggAOQgMAFhdAAQhOAAiIgEg");
	this.shape_1.setTransform(26.9987,19.341,0.6578,0.6578);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("ABVEjQkogIgigLQglgLhKkfQhBj8ANgNQAGgGEgAIIEdAJIA9BkQBCByAaBAQBwEWggAOQgMAFhdAAQhOAAiIgEg");
	this.shape_2.setTransform(26.9987,19.341,0.6578,0.6578);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.noga_desno, new cjs.Rectangle(0,0,54.1,38.8), null);


(lib.noga = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0.188)","rgba(255,255,255,0)"],[0.353,0.4,0.949,1],21.9,-2.2,35,-3.4).s().p("Ak6EoQglgOAJkcQAChCAYh0IAXhnQIygVAOALQARANAdEBQAgElggAMQgeAMkmAIQiCAEhOAAQhhAAgOgGg");
	this.shape.setTransform(22.6113,19.7671,0.6578,0.6578);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.212)","rgba(0,0,0,0.2)","rgba(0,0,0,0)"],[0,0.055,0.592,0.651],-36.7,-0.3,-18.5,-0.1).s().p("Ak6EoQglgOAJkcQAChCAYh0IAXhnQIygVAOALQARANAdEBQAgElggAMQgeAMkmAIQiCAEhOAAQhhAAgOgGg");
	this.shape_1.setTransform(22.6113,19.7671,0.6578,0.6578);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("Ak6EoQglgOAJkcQAChCAYh0IAXhnQIygVAOALQARANAdEBQAgElggAMQgeAMkmAIQiCAEhOAAQhhAAgOgGg");
	this.shape_2.setTransform(22.6113,19.7671,0.6578,0.6578);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.noga, new cjs.Rectangle(0,0,45.3,39.6), null);


(lib.Lijevo_oko = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0)","rgba(0,0,0,0.098)","rgba(0,0,0,0)"],[0.702,0.847,0.937],12.1,-20.5,0,-0.4,0,57.2).s().p("AlrFsQiXiXAAjVQAAjUCXiXQCXiWDUAAQDVAACXCWQCXCXAADUQAADViXCXQiXCWjVAAQjUAAiXiWg");
	this.shape.setTransform(33.8004,33.8223,0.6578,0.6578);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E6E6E6").s().p("AlrFsQiXiXAAjVQAAjUCXiXQCXiWDUAAQDVAACXCWQCXCXAADUQAADViXCXQiXCWjVAAQjUAAiXiWg");
	this.shape_1.setTransform(33.8004,33.8223,0.6578,0.6578);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(0,0,0,0.698)").ss(8.3).p("AIDAAQAADViXCXQiXCXjVAAQjUAAiXiXQiXiXAAjVQAAjUCXiXQCXiWDUAAQDVAACXCWQCXCXAADUg");
	this.shape_2.setTransform(33.8004,33.8223,0.6578,0.6578);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Lijevo_oko, new cjs.Rectangle(-4.1,-4.1,75.89999999999999,93.89999999999999), null);


(lib.Lijeva_zjenica = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.8)","rgba(255,255,255,0)"],[0.761,0.82],22.6,-13,0,22.6,-13,14.7).s().p("AiyCzQhKhKAAhpQAAhoBKhKQBKhKBoAAQBpAABKBKQBKBKAABoQAABphKBKQhKBKhpAAQhoAAhKhKg");
	this.shape.setTransform(16.6184,16.6498,0.6578,0.6578);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.302,0.341],8.8,-4.2,0,8.8,-4.2,14.7).s().p("AiyCzQhKhKAAhpQAAhoBKhKQBKhKBoAAQBpAABKBKQBKBKAABoQAABphKBKQhKBKhpAAQhoAAhKhKg");
	this.shape_1.setTransform(16.6184,16.6498,0.6578,0.6578);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#000000","rgba(0,0,0,0)"],[0.596,0.608],0,0,0,0,0,25.3).s().p("AiyCzQhKhKAAhpQAAhoBKhKQBKhKBoAAQBpAABKBKQBKBKAABoQAABphKBKQhKBKhpAAQhoAAhKhKg");
	this.shape_2.setTransform(16.6184,16.6498,0.6578,0.6578);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0071BC").s().p("AiyCzQhKhKAAhpQAAhoBKhKQBKhKBoAAQBpAABKBKQBKBKAABoQAABphKBKQhKBKhpAAQhoAAhKhKg");
	this.shape_3.setTransform(16.6184,16.6498,0.6578,0.6578);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Lijeva_zjenica, new cjs.Rectangle(0,0,33.3,33.3), null);


(lib.koljeno_desno = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.2)","rgba(0,0,0,0)"],[0,0.514,1],-6.4,0,-7.8,0).s().p("AgdB2IhYjrICTAAIBYDrg");
	this.shape.setTransform(12.8975,7.7346,0.6578,0.6578);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.298)","rgba(255,255,255,0)"],[0,0.514,1],8.4,0,5.9,0).s().p("AgdB2IhYjrICTAAIBYDrg");
	this.shape_1.setTransform(12.8975,7.7346,0.6578,0.6578);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.498)","rgba(0,0,0,0)","rgba(0,0,0,0.498)"],[0,0.231,0.745,1],0.2,-9.6,0.2,10.7).s().p("AgdB2IhYjrICTAAIBYDrg");
	this.shape_2.setTransform(12.8975,7.7346,0.6578,0.6578);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2F668A").s().p("AgdB2IhYjrICTAAIBYDrg");
	this.shape_3.setTransform(12.8975,7.7346,0.6578,0.6578);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.298)","rgba(0,0,0,0)"],[0,0.514,1],-13.1,0,-16,0).s().p("AhsB2IhYjrIExAAIBYDrg");
	this.shape_4.setTransform(12.8975,7.7346,0.6578,0.6578);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.2)","rgba(255,255,255,0)"],[0,0.514,1],15.7,0,12.8,0).s().p("AhsB2IhYjrIExAAIBYDrg");
	this.shape_5.setTransform(12.8975,7.7346,0.6578,0.6578);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4D4D4D").s().p("AhsB2IhYjrIExAAIBYDrg");
	this.shape_6.setTransform(12.8975,7.7346,0.6578,0.6578);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.koljeno_desno, new cjs.Rectangle(0,0,25.9,15.6), null);


(lib.koljeno = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.2)","rgba(255,255,255,0)"],[0,0.514,1],6.4,0,7.8,0).s().p("AhJB5IAAjxICTAAIAADxg");
	this.shape.setTransform(9.9725,7.9077,0.6578,0.6578);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.298)","rgba(0,0,0,0)"],[0,0.514,1],-8.4,0,-5.9,0).s().p("AhJB5IAAjxICTAAIAADxg");
	this.shape_1.setTransform(9.9725,7.9077,0.6578,0.6578);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.498)","rgba(0,0,0,0)","rgba(0,0,0,0.498)"],[0,0.231,0.745,1],0,10.7,0,-9.6).s().p("AhJB5IAAjxICTAAIAADxg");
	this.shape_2.setTransform(9.9725,7.9077,0.6578,0.6578);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2F668A").s().p("AhJB5IAAjxICTAAIAADxg");
	this.shape_3.setTransform(9.9725,7.9077,0.6578,0.6578);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.2)","rgba(255,255,255,0)"],[0,0.514,1],13.2,0,16.1,0).s().p("AiYB5IAAjxIExAAIAADxg");
	this.shape_4.setTransform(9.9725,7.9077,0.6578,0.6578);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.298)","rgba(0,0,0,0)"],[0,0.514,1],-15.6,0,-12.7,0).s().p("AiYB5IAAjxIExAAIAADxg");
	this.shape_5.setTransform(9.9725,7.9077,0.6578,0.6578);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4D4D4D").s().p("AiYB5IAAjxIExAAIAADxg");
	this.shape_6.setTransform(9.9725,7.9077,0.6578,0.6578);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.koljeno, new cjs.Rectangle(0,0,20.1,15.9), null);


(lib.Path_14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.8)","rgba(255,255,255,0)"],[0.004,1],41.6,38.6,-12.2,-17.7).s().p("AhKJpQiZgshxhRQhvhQhbh/Qg+hVgMglQgEgKBMhrQBVh2B5iWQCtjXDxjPQAJgGELCrQCGBWCDBWQgfBZgvB0QheDlhRCFQhkCkhWByQhQBqgVABIgHAAQgtAAhjgcg");
	this.shape.setTransform(61.7173,64.5009);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_14, new cjs.Rectangle(0,0,123.5,129), null);


(lib.Path_13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.2)","rgba(255,255,255,0)"],[0,0.514,1],-8.2,-9.2,14,3.9).s().p("AkDCbQAAgMCbjnQBNh0BMhyIAlAOQAqAOAbgCQBCgEAaAoQANAVAAAVIkKIVg");
	this.shape.setTransform(26.025,31.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_13, new cjs.Rectangle(0,0,52.1,63.8), null);


(lib.Path_12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.8)","rgba(255,255,255,0)"],[0.004,1],43.9,-22.3,-25,10.3).s().p("AhbJzQgNgBhQhmQhhh7hdibQhZiTg5jUQgdhsgNhZQgCgKDjiaQByhNByhLQA6AqBMBDQCaCHBfB6QB3CXBbCNQBUCFgFATQgLApg+BWQhYB6htBGQhsBGiPAiQhVAUgnAAIgJAAg");
	this.shape.setTransform(56.3381,62.7173);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_12, new cjs.Rectangle(0,0,112.7,125.5), null);


(lib.Path_10_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(229,226,223,0.698)","rgba(222,217,214,0.698)","#CFCBC8","#A8A5A3","#6A6968","rgba(77,77,77,0.698)","rgba(243,244,244,0.698)","#E5E5E6","#C0BEC0","#858085","rgba(128,123,128,0.698)","rgba(209,211,212,0.698)","rgba(167,169,172,0.698)"],[0,0,0.031,0.09,0.173,0.208,0.537,0.596,0.71,0.867,0.875,1,1],-0.6,14.5,0.6,-12.7).s().p("AmMBiIAKjmIMPAiIgLDng");
	this.shape.setTransform(39.675,13.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10_1, new cjs.Rectangle(0,0,79.4,26.7), null);


(lib.Path_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(228,229,229,0)","#E4E5E5","#BEBEBE","#808080","rgba(102,102,102,0.498)","rgba(242,242,242,0.498)"],[0,0.569,0.569,0.647,0.749,0.792,0.965],-21.8,0,26,0).s().p("AiWEcQgVgSgSgUIgOgSIAAo1IGXAAIAAI1QgMAbgfAcQhAA2hhABIAAAAQhQAAhGg2g");
	this.shape.setTransform(20.4,33.8252);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(229,226,223,0.498)","rgba(222,217,214,0.498)","#B5B2B0","#7D7C7B","#5A5A5A","rgba(77,77,77,0.498)","#525252","#616161","#797979","#9B9B9B","#C6C6C6","rgba(243,244,244,0.498)","#E4E5E5","rgba(228,229,229,0)","rgba(0,0,0,0)"],[0,0,0.047,0.114,0.169,0.196,0.239,0.29,0.349,0.408,0.471,0.529,0.569,0.569,1],-21.8,0,26,0).s().p("AiWEcQgVgSgSgUIgOgSIAAo1IGXAAIAAI1QgMAbgfAcQhAA2hhABIAAAAQhQAAhGg2g");
	this.shape_1.setTransform(20.4,33.8252);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8, new cjs.Rectangle(0,0,40.8,67.7), null);


(lib.Path_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.004,1],4.9,-8,0,3.1,-6.7,18).s().p("AilCoQhEhGAAhiQAAhhBEhFQBFhGBgAAQBhAABFBGQBEBFAABhQAABihEBGQhFBFhhAAQhgAAhFhFg");
	this.shape.setTransform(23.425,23.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7, new cjs.Rectangle(0,0,46.9,47.3), null);


(lib.Path_6_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.004,1],-5.1,-8,0,-3.3,-6.7,18).s().p("AilCoQhEhGAAhiQAAhhBEhFQBFhGBgAAQBhAABFBGQBEBFAABhQAABihEBGQhFBFhhAAQhgAAhFhFg");
	this.shape.setTransform(23.425,23.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_1, new cjs.Rectangle(0,0,46.9,47.3), null);


(lib.Path_6_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.498)","rgba(0,0,0,0)"],[0.188,0.337,1],-21.3,-0.8,-28.3,-0.7).s().p("ABfFYQjrgDgOgMQgOgMhikqQhhkmADgRQADgVAQgOIG+gRIATAJQAWANATAaQAUAcBADGQA5CuAaBiIAcBpQAFAcgRAFQgRAFh8AAIhwgBg");
	this.shape.setTransform(36.1287,34.4597);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_0, new cjs.Rectangle(0,0,72.3,68.9), null);


(lib.Path_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0.333,0.384,1],21,-0.7,28,-0.8).s().p("AjeFbQgTgEgFgdIgLhrQgKhmgIiwQgJjLAJgcQAJgaASgOQAIgHAHgCIHFARIAMAKQANAMAHANQAIASANEtQANEwgKANQgJAMjrACIhvABQh8AAgTgFg");
	this.shape.setTransform(28.0235,35.2097);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(0,0,56.1,70.4), null);


(lib.Path_5_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(222,217,214,0.498)","rgba(229,226,223,0.498)","#D6D3D1","#AFADAB","#71706F","rgba(77,77,77,0.498)","rgba(255,255,255,0.498)","#F0F0F0","#C9C9C9","#8B8B8B","rgba(102,102,102,0.498)"],[0,0.047,0.078,0.137,0.22,0.263,0.639,0.682,0.769,0.882,0.945],-1.3,44.5,2.2,-47.9).s().p("Ag4GZQhagIgagkQghgtAPh2IAOhmQAIg9AAgnQAAiQAJhHQAOhzArgyQAYgcBRgCQAsgCBGAEQAvAAAUCAQASB0gJClQgKCngfBzQgjCAgvAAQhoAAgWgCg");
	this.shape.setTransform(19.6404,41.1545);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_1, new cjs.Rectangle(0.1,0,39.199999999999996,82.3), null);


(lib.Path_5_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.004,1],2.9,4.6,0,1.9,3.9,10.6).s().p("AhbBhQgpgpgCg4QgCg4AmgoQAngoA4AAQA3AAApAoQApAoABA4QACA4gmApQgmAog4AAQg3AAgpgog");
	this.shape.setTransform(13.525,13.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_0, new cjs.Rectangle(0,0,27.1,27.4), null);


(lib.Path_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.004,1],-3,4.6,0,-1.9,3.9,10.3).s().p("AhfBhQgogpAAg4QAAg4AogoQAogoA3AAQA4AAAoAoQAoAogBA4QABA4goApQgoAog4AAQg3AAgogog");
	this.shape.setTransform(13.55,13.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,27.1,27.4), null);


(lib.Path_4_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(222,217,214,0.498)","rgba(229,226,223,0.498)","#D6D3D1","#AFADAB","#71706F","rgba(77,77,77,0.498)","rgba(255,255,255,0.498)","#F0F0F0","#C9C9C9","#8B8B8B","rgba(102,102,102,0.498)"],[0,0.047,0.078,0.137,0.22,0.263,0.639,0.682,0.769,0.882,0.945],1.2,-48,-2.3,44.5).s().p("AiyEdQgZh0gBioQgBimAYh0QAbiBAvAAIBxgCQBSACAYAcQArAyAOBzQAJBIAACPQAAAnAIA+IAPBlQAOB2ggAtQgaAkhwAKQgqAEhqAAQguAAgdiAg");
	this.shape.setTransform(20.5467,41.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_1, new cjs.Rectangle(0.1,0.1,41,82.60000000000001), null);


(lib.Path_3_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.298)","rgba(255,255,255,0)"],[0.004,1],2.7,93.3,0,2.7,93.3,89.8).s().p("AAAQkQlnALmEh4QjDg7h6g+QgMhBgNhmQgajMAAi5QAAjpASikQAUi3AkgoQBth0Dhi6QE2kADjhvQBcgtBTABQBVAABXAwQDfBnE9ETQCiCMCTCTQAqAnAZCvQAaCvgEDjQgCCrggDUQgQBpgQBIQh2A+i+A7QlcBtlMAAIg9AAg");
	this.shape.setTransform(111.5711,106.0461);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_8, new cjs.Rectangle(0,0,223.2,212.1), null);


(lib.Path_3_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.698)","rgba(255,255,255,0)"],[0,0.376,1],0,-46.2,0,87.4).s().p("AAAQkQlnALmEh4QjDg7h6g+QgMhBgNhmQgajMAAi5QAAjpASikQAUi3AkgoQBth0Dhi6QE2kADjhvQBcgtBTABQBVAABXAwQDfBnE9ETQCiCMCTCTQAqAnAZCvQAaCvgEDjQgCCrggDUQgQBpgQBIQh2A+i+A7QlcBtlMAAIg9AAg");
	this.shape.setTransform(111.5711,106.0461);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_7, new cjs.Rectangle(0,0,223.2,212.1), null);


(lib.Path_3_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0.004,1],-8.1,-0.6,0,0.3,2.5,14.7).s().p("AAaDdQg5gBhBg1QgtgkgSgcQgHgLBIiaQBHiaAKgCQAkgIBIAkQAlATAdATQgLBegXBcQgtC7g4AAIAAAAg");
	this.shape.setTransform(16.0229,22.0782);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_5, new cjs.Rectangle(0,0,32.1,44.2), null);


(lib.Path_3_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0.004,1],-9,-4.1,0,-1.4,2.1,16).s().p("AgaDpQhDgZg9g3Qg5g0AAgdQgBglCBiKQB+iGAOADQAqAGA8A/QAfAgAWAeQgkBdgwBXQhWCeg3AAQgHAAgGgCg");
	this.shape.setTransform(21.2499,23.519);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_4, new cjs.Rectangle(0,0,42.5,47.1), null);


(lib.Path_3_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0.004,1],-6.3,-4.3,0,-1.3,1.9,13.1).s().p("AiCCeQhEgmgNg5QgNg6ChhkQBPgzBTgmIA4A0QA3A7ADAlQABANh0BmQh2BqggAAIgFAAQgZAAgwgbg");
	this.shape.setTransform(21.2982,18.518);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_3, new cjs.Rectangle(0,0,42.6,37.1), null);


(lib.Path_3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0.004,1],-2.6,7.6,0,1.7,0.3,13.9).s().p("AhOBSQiHhnAAgKQgBglAug8QAYgeAXgXQBYAgBVArQCrBXgKA0QgKA3g+AyQgrAigdAKIgBAAQgQAAiChkg");
	this.shape.setTransform(21.4015,18.2074);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_1, new cjs.Rectangle(0,0,42.8,36.4), null);


(lib.Path_2_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0.004,1],-6.9,3.1,0,0.2,1,12.1).s().p("AgMDGQhNgNgniqQgThTgFhSQAdgQAkgOQBHgcAiAMQAKADBACZQBCCZgFAWQgEATgwAZQgrAWgqAAQgPAAgNgDg");
	this.shape.setTransform(15.2927,20.032);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_0, new cjs.Rectangle(0,0,30.6,40.1), null);


(lib.Path_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.514,1],0.8,-21.2,-0.3,8.3).s().p("AgJDaQgfgCgVgXQgVgXABgfIANkcQABgfAXgVQAXgVAfABQAfACAVAXQAVAXgBAfIgNEcQgBAfgXAVQgWAUgcAAIgEAAg");
	this.shape.setTransform(8.225,21.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0.1,0,16.299999999999997,43.6), null);


(lib.Path_1_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.3).p("ABlA1QgGgxhRgeQhKgdgoAO");
	this.shape.setTransform(10.275,5.2478);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_6, new cjs.Rectangle(-0.8,-0.4,22.2,11.9), null);


(lib.Path_1_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.3).p("ABnBMQgfg2hAgnQgtgehFgZ");
	this.shape.setTransform(10.9393,7.9149);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_5, new cjs.Rectangle(-0.8,-0.3,23.1,16.8), null);


(lib.Path_1_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.3).p("ABDBbQgMgxgjgwQgng1gzga");
	this.shape.setTransform(7.3547,9.1985);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_4, new cjs.Rectangle(-0.7,-0.4,15.799999999999999,19.7), null);


(lib.Path_1_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0.004,1],-6.3,7.4,0,0.9,1.6,15).s().p("AAdDeQgjgJhtibQhriVAFgNQANgmBGgrQAjgWAggOQBSA4BMBDQCZCEgfAyQgjA6g+AsQgzAkgcAAIgIAAg");
	this.shape.setTransform(21.82,22.2436);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_2, new cjs.Rectangle(0,0,43.7,44.5), null);


(lib.Path_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0.169,0.596,1],18.5,-12.7,0,18.5,-12.7,78.9).s().p("Akrk+QAGgFASgEQAigIA5AHQAvAGA2gsQAbgVARgXIFTJ9Ij7C4g");
	this.shape.setTransform(29.95,41.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_1, new cjs.Rectangle(0,0,59.9,82.2), null);


(lib.Path_1_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.514,1],0.8,-21.2,-0.3,8.3).s().p("AgJDaQgfgCgVgXQgVgXABgfIANkcQABgfAXgVQAXgVAfABQAfABAVAYQAVAXgBAfIgNEbQgBAggXAVQgXAUgcAAIgDAAg");
	this.shape.setTransform(8.225,21.7723);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_0, new cjs.Rectangle(0.1,0,16.299999999999997,43.6), null);


(lib.Path_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0.004,0.522],37.3,-6.4,22.8,-3.6).s().p("AlDCXQgegEgSh/QgRh6ANgMQAQgPBPgMQBmgQCCAHQB6AGCQA5QBIAdAvAaIAhBTQAaBVglAGQgrAIkxADIi6ABQh+AAgWgDg");
	this.shape.setTransform(37.9506,15.3497);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(-0.1,0,76.19999999999999,30.7), null);


(lib.Path_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.698)","rgba(255,255,255,0)"],[0,0.514,1],1.5,-19.2,-0.3,6.6).s().p("AlDCXQgegEgSh/QgRh6ANgMQAQgPBPgMQBmgQCCAHQB6AGCQA5QBIAdAvAaIAhBTQAaBVglAGQgrAIkxADIi6ABQh+AAgWgDg");
	this.shape.setTransform(37.9506,15.3497);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(-0.1,0,76.19999999999999,30.7), null);


(lib.Path = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.698)","rgba(255,255,255,0)"],[0,0.514,1],-1.5,-17.7,0.1,8.3).s().p("AAZCcQkygDgtgIQgogGgFhXQgDgrAFgpQAlgcA+gdQB6g6B5gHQB9gHBtARQBUANAVAOQASANAcB9QAdCBgcAEQgVADh0AAIjFgBg");
	this.shape.setTransform(37.3211,15.6807);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,74.7,31.4), null);


(lib.Desno_oko = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0)","rgba(0,0,0,0.098)","rgba(0,0,0,0)"],[0.702,0.847,0.937],8,-13.8,0,-0.4,0,38.6).s().p("Aj1D2QhlhmgBiQQABiPBlhlQBmhnCPABQCQgBBmBnQBlBlAACPQAACQhlBmQhmBmiQAAQiPAAhmhmg");
	this.shape.setTransform(22.7731,22.8198,0.6578,0.6578);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E6E6E6").s().p("Aj1D2QhlhmgBiQQABiPBlhlQBmhnCPABQCQgBBmBnQBlBlAACPQAACQhlBmQhmBmiQAAQiPAAhmhmg");
	this.shape_1.setTransform(22.7731,22.8198,0.6578,0.6578);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(0,0,0,0.698)").ss(5.6).p("AFcAAQAACQhmBmQhmBmiQAAQiPAAhlhmQhnhmAAiQQAAiPBnhlQBlhnCPAAQCQAABmBnQBmBlAACPg");
	this.shape_2.setTransform(22.7731,22.8198,0.6578,0.6578);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Desno_oko, new cjs.Rectangle(-2.8,-2.8,51.199999999999996,51.3), null);


(lib.Desna_zjenica = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.8)","rgba(255,255,255,0)"],[0.761,0.82],15.3,-8.8,0,15.3,-8.8,9.9).s().p("Ah4B5QgygyAAhHQAAhGAygyQAygyBGAAQBHAAAyAyQAyAyAABGQAABHgyAyQgyAyhHAAQhGAAgygyg");
	this.shape.setTransform(11.1947,11.1944,0.6578,0.6578);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.302,0.341],6,-2.8,0,6,-2.8,9.9).s().p("Ah4B5QgygyAAhHQAAhGAygyQAygyBGAAQBHAAAyAyQAyAyAABGQAABHgyAyQgyAyhHAAQhGAAgygyg");
	this.shape_1.setTransform(11.1947,11.1944,0.6578,0.6578);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#000000","rgba(0,0,0,0)"],[0.596,0.608],0,0,0,0,0,17.1).s().p("Ah4B5QgygyAAhHQAAhGAygyQAygyBGAAQBHAAAyAyQAyAyAABGQAABHgyAyQgyAyhHAAQhGAAgygyg");
	this.shape_2.setTransform(11.1947,11.1944,0.6578,0.6578);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0071BC").s().p("Ah4B5QgygyAAhHQAAhGAygyQAygyBGAAQBHAAAyAyQAyAyAABGQAABHgyAyQgyAyhHAAQhGAAgygyg");
	this.shape_3.setTransform(11.1947,11.1944,0.6578,0.6578);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Desna_zjenica, new cjs.Rectangle(0,0,22.5,22.5), null);


(lib.vrat = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0.498)","rgba(0,0,0,0)"],[0,1],-0.7,-29.3,0.2,-0.6).s().p("AiWEcQgVgSgTgUIgNgSIAAo1IGXAAIAAI1QgMAbggAcQg/A2hhABIAAAAQhQAAhGg2g");
	this.shape.setTransform(13.3487,22.1992,0.6578,0.6578);

	this.instance = new lib.Path_8();
	this.instance.setTransform(13.4,22.2,0.6578,0.6578,0,0,0,20.4,33.8);
	this.instance.compositeOperation = "overlay";

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AiWEcQgVgSgTgUIgNgSIAAo1IGXAAIAAI1QgMAbggAcQg/A2hhABIAAAAQhQAAhGg2g");
	this.shape_1.setTransform(13.3487,22.1992,0.6578,0.6578);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.vrat, new cjs.Rectangle(0,0,26.9,44.5), null);


(lib.Tween12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Desna_zjenica();
	this.instance.setTransform(29.55,4.35,1,1,0,0,0,11.2,11.2);

	this.instance_1 = new lib.Lijeva_zjenica();
	this.instance_1.setTransform(-24.2,-0.05,1,1,0,0,0,16.6,16.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.8,-16.6,81.6,33.3);


(lib.stopalo_Denso = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path_1();
	this.instance.setTransform(25.15,24.85,0.6578,0.6578,0,0,0,38.2,15.9);
	this.instance.compositeOperation = "overlay";

	this.instance_1 = new lib.Path_0();
	this.instance_1.setTransform(25.15,24.85,0.6578,0.6578,0,0,0,38.2,15.9);
	this.instance_1.compositeOperation = "overlay";

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","#000000","rgba(0,0,0,0)"],[0,0.514,1],0,11.5,0,16.6).s().p("AlDCXQgegEgSh+QgRh7ANgMQAPgPBQgMQBmgRCCAIQB6AGCQA5QBIAdAvAbIAhBSQAaBVglAGQgrAIkxACIi6ACQh9AAgXgDg");
	this.shape.setTransform(24.9971,24.9938,0.6578,0.6578);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AlDCXQgegEgSh+QgRh7ANgMQAPgPBQgMQBmgRCCAIQB6AGCQA5QBIAdAvAbIAhBSQAaBVglAGQgrAIkxACIi6ACQh9AAgXgDg");
	this.shape_1.setTransform(24.9971,24.9938,0.6578,0.6578);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.2)","rgba(0,0,0,0)"],[0,0.514,1],-7.2,0,-8.7,0).s().p("AgkB8Ihcj3IClAAIBcD3g");
	this.shape_2.setTransform(16.511,8.0883,0.6578,0.6578);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.298)","rgba(255,255,255,0)"],[0,0.514,1],9.4,0,6.6,0).s().p("AgkB8Ihcj3IClAAIBcD3g");
	this.shape_3.setTransform(16.511,8.0883,0.6578,0.6578);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.498)","rgba(0,0,0,0)","rgba(0,0,0,0.498)"],[0,0.231,0.745,1],0.2,-10,0.2,11.2).s().p("AgkB8Ihcj3IClAAIBcD3g");
	this.shape_4.setTransform(16.511,8.0883,0.6578,0.6578);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2F668A").s().p("AgkB8Ihcj3IClAAIBcD3g");
	this.shape_5.setTransform(16.511,8.0883,0.6578,0.6578);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.298)","rgba(0,0,0,0)"],[0,0.514,1],-14.7,0,-17.9,0).s().p("Ah8B8Ihcj3IFVAAIBcD3g");
	this.shape_6.setTransform(16.511,8.0883,0.6578,0.6578);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.2)","rgba(255,255,255,0)"],[0,0.514,1],17.5,0,14.3,0).s().p("Ah8B8Ihcj3IFVAAIBcD3g");
	this.shape_7.setTransform(16.511,8.0883,0.6578,0.6578);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4D4D4D").s().p("Ah8B8Ihcj3IFVAAIBcD3g");
	this.shape_8.setTransform(16.511,8.0883,0.6578,0.6578);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stopalo_Denso, new cjs.Rectangle(-0.1,0,50.2,35.1), null);


(lib.stopalo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path();
	this.instance.setTransform(24.6,25.6,0.6578,0.6578,0,0,0,37.4,16.2);
	this.instance.compositeOperation = "overlay";

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","#000000","rgba(0,0,0,0)"],[0,0.514,1],0,11.7,0,16.9).s().p("AAYCcQkxgDgtgIQgogGgGhXIADhUIAagSQAigVAmgSQB7g6B4gHQB+gHBtARQBUANAVAOQARANAdB9QAdCBgcAEQgVADh0AAIjGgBg");
	this.shape.setTransform(24.526,25.5207,0.6578,0.6578);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AAYCcQkxgDgtgIQgogGgGhXIADhUIAagSQAigVAmgSQB7g6B4gHQB+gHBtARQBUANAVAOQARANAdB9QAdCBgcAEQgVADh0AAIjGgBg");
	this.shape_1.setTransform(24.526,25.5207,0.6578,0.6578);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.2)","rgba(255,255,255,0)"],[0,0.514,1],7.2,0,8.7,0).s().p("AhSB/IAAj9IClAAIAAD9g");
	this.shape_2.setTransform(25.3564,8.2495,0.6578,0.6578);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.298)","rgba(0,0,0,0)"],[0,0.514,1],-9.4,0,-6.6,0).s().p("AhSB/IAAj9IClAAIAAD9g");
	this.shape_3.setTransform(25.3564,8.2495,0.6578,0.6578);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.498)","rgba(0,0,0,0)","rgba(0,0,0,0.498)"],[0,0.231,0.745,1],0,11.2,0,-10.1).s().p("AhSB/IAAj9IClAAIAAD9g");
	this.shape_4.setTransform(25.3564,8.2495,0.6578,0.6578);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2F668A").s().p("AhSB/IAAj9IClAAIAAD9g");
	this.shape_5.setTransform(25.3564,8.2495,0.6578,0.6578);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.2)","rgba(255,255,255,0)"],[0,0.514,1],14.7,0,17.9,0).s().p("AiqB/IAAj9IFVAAIAAD9g");
	this.shape_6.setTransform(25.3564,8.2495,0.6578,0.6578);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.298)","rgba(0,0,0,0)"],[0,0.514,1],-17.5,0,-14.3,0).s().p("AiqB/IAAj9IFVAAIAAD9g");
	this.shape_7.setTransform(25.3564,8.2495,0.6578,0.6578);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4D4D4D").s().p("AiqB/IAAj9IFVAAIAAD9g");
	this.shape_8.setTransform(25.3564,8.2495,0.6578,0.6578);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stopalo, new cjs.Rectangle(0,-0.1,49.1,36), null);


(lib.ramelijevo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path_6_1();
	this.instance.setTransform(15.5,15.6,0.6578,0.6578,0,0,0,23.6,23.8);
	this.instance.compositeOperation = "overlay";

	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0)","rgba(0,0,0,0.298)","rgba(0,0,0,0)"],[0.435,0.824,0.965],-3.8,-7.2,0,-1.1,-5.2,26.6).s().p("AilCoQhEhGAAhiQAAhhBEhFQBFhFBgAAQBhAABFBFQBEBFAABhQAABihEBGQhFBFhhgBQhgABhFhFg");
	this.shape.setTransform(15.3783,15.5047,0.6578,0.6578);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AilCoQhEhGAAhiQAAhhBEhFQBFhFBgAAQBhAABFBFQBEBFAABhQAABihEBGQhFBFhhgBQhgABhFhFg");
	this.shape_1.setTransform(15.3783,15.5047,0.6578,0.6578);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ramelijevo, new cjs.Rectangle(0,0,30.8,31.1), null);


(lib.ramedesno = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path_7();
	this.instance.setTransform(15.45,15.6,0.6578,0.6578,0,0,0,23.5,23.8);
	this.instance.compositeOperation = "overlay";

	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0)","rgba(0,0,0,0.298)","rgba(0,0,0,0)"],[0.435,0.824,0.965],3.6,-7.2,0,1,-5.2,26.6).s().p("AilCoQhEhGAAhiQAAhhBEhFQBFhFBgAAQBhAABFBFQBEBFAABhQAABihEBGQhFBFhhgBQhgABhFhFg");
	this.shape.setTransform(15.3505,15.5047,0.6578,0.6578);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AilCoQhEhGAAhiQAAhhBEhFQBFhFBgAAQBhAABFBFQBEBFAABhQAABihEBGQhFBFhhgBQhgABhFhFg");
	this.shape_1.setTransform(15.3505,15.5047,0.6578,0.6578);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ramedesno, new cjs.Rectangle(0,0,30.8,31.1), null);


(lib.prst1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path_3_1();
	this.instance.setTransform(14.1,11.95,0.6578,0.6578,0,0,0,21.4,18.2);
	this.instance.compositeOperation = "overlay";

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D4D4D").s().p("AhOBSQiHhnAAgKQgBglAug8QAYgeAXgXIA3AVQBBAbA1AbQCrBXgKA0QgKA3g+AyQgrAigdAKIgBAAQgQAAiChkg");
	this.shape.setTransform(14.009,11.9234,0.6578,0.6578);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.prst1, new cjs.Rectangle(0,0,28.2,24), null);


(lib.lijevi_prst_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path_1_4();
	this.instance.setTransform(16.1,10.8,0.6579,0.6579,0,0,0,7.2,9.5);
	this.instance.alpha = 0.5;
	this.instance.compositeOperation = "overlay";

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.3).p("ABEBfQgNg6gog1Qgog2gugT");
	this.shape.setTransform(15.5539,11.3171,0.6579,0.6579);

	this.instance_1 = new lib.Path_3_3();
	this.instance_1.setTransform(14.1,12.2,0.6578,0.6578,0,0,0,21.4,18.6);
	this.instance_1.compositeOperation = "overlay";

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4D4D4D").s().p("AiCCeQhEgmgNg5QgNg6ChhkQAyggA9ggIAzgZIA4A0QA3A7ADAlQABANh0BmQh2BqggAAIgFAAQgZAAgwgbg");
	this.shape_1.setTransform(13.9846,12.1438,0.6578,0.6578);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lijevi_prst_3, new cjs.Rectangle(0,0,28,24.4), null);


(lib.lijevi_prst_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path_1_5();
	this.instance.setTransform(15.8,14.1,0.6579,0.6579,0,0,0,10.7,8.2);
	this.instance.alpha = 0.5;
	this.instance.compositeOperation = "overlay";

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.3).p("ABrBPQgjg7hCgqQg4gmg9gO");
	this.shape.setTransform(15.3348,14.8884,0.6579,0.6579);

	this.instance_1 = new lib.Path_3_4();
	this.instance_1.setTransform(14.1,15.45,0.6578,0.6578,0,0,0,21.4,23.6);
	this.instance_1.compositeOperation = "overlay";

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4D4D4D").s().p("AgaDpQhDgZg9g3Qg5g0AAgdQgBglCBiKQB9iGAPADQAqAGA8A/QAfAgAXAeIgZA5QgeBEgeA3QhWCeg3AAQgHAAgGgCg");
	this.shape_1.setTransform(13.9631,15.4041,0.6578,0.6578);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lijevi_prst_2, new cjs.Rectangle(0,0,28,30.9), null);


(lib.lijevi_prst_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path_1_6();
	this.instance.setTransform(12,12.35,0.6579,0.6579,0,0,0,10.2,5.5);
	this.instance.alpha = 0.5;
	this.instance.compositeOperation = "overlay";

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.3).p("ABlA4QgRg8hMgeQhCgZgqAP");
	this.shape.setTransform(11.5736,13.3972,0.6579,0.6579);

	this.instance_1 = new lib.Path_3_5();
	this.instance_1.setTransform(10.6,14.5,0.6578,0.6578,0,0,0,16.1,22.1);
	this.instance_1.compositeOperation = "overlay";

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4D4D4D").s().p("AAaDdQg5gBhBg1QgtgkgSgcQgHgLBIiaQBHiaAKgCQAkgIBIAkQAlATAdATIgJA7QgLBGgOA5QgtC7g4AAIAAAAg");
	this.shape_1.setTransform(10.5266,14.4787,0.6578,0.6578);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lijevi_prst_1, new cjs.Rectangle(0,0,21.1,29), null);


(lib.Lijevi_lakat = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path_14();
	this.instance.setTransform(40.7,42.45,0.6578,0.6578,0,0,0,61.9,64.6);
	this.instance.compositeOperation = "overlay";

	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0)","rgba(0,0,0,0.09)","rgba(0,0,0,0)"],[0.796,0.835,1],22.8,10.9,0,22.8,10.9,124.6).s().p("AhKJpQiZgshxhRQhvhQhbh/Qg+hVgMglQgEgKBMhrQBVh2B5iWQCtjXDxjPQAJgGELCrQCGBWCDBWIhODNQheDlhRCFQhkCkhWByQhQBqgVABIgHAAQgtAAhjgcg");
	this.shape.setTransform(40.5823,42.3769,0.6578,0.6578);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AhKJpQiZgshxhRQhvhQhbh/Qg+hVgMglQgEgKBMhrQBVh2B5iWQCtjXDxjPQAJgGELCrQCGBWCDBWIhODNQheDlhRCFQhkCkhWByQhQBqgVABIgHAAQgtAAhjgcg");
	this.shape_1.setTransform(40.5823,42.3769,0.6578,0.6578);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Lijevi_lakat, new cjs.Rectangle(0,0,81.2,84.8), null);


(lib.lijeva_ruka = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path_13();
	this.instance.setTransform(17.15,20.95,0.6578,0.6578,0,0,0,26.1,31.9);
	this.instance.compositeOperation = "overlay";

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F668A").s().p("AkDCbQAAgMCbjnQBNh0BMhyIAlAOQAqAOAbgCQBCgEAaAoQANAVAAAVIkKIVg");
	this.shape.setTransform(17.0922,20.9186,0.6578,0.6578);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lijeva_ruka, new cjs.Rectangle(0,0,34.3,41.9), null);


(lib.kukovi = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.298)","rgba(0,0,0,0)"],[0,0.514,1],-0.8,26.3,-0.1,3.4).s().p("AgJDaQgfgCgVgXQgVgXABgfIANkcQABgfAXgVQAXgVAfABQAfACAVAXQAVAXgBAfIgNEcQgBAfgXAVQgWAUgcAAIgEAAg");
	this.shape.setTransform(57.3723,16.5895,0.6578,0.6578);

	this.instance = new lib.Path_2();
	this.instance.setTransform(57.5,16.6,0.6578,0.6578,0,0,0,8.7,22.2);
	this.instance.compositeOperation = "overlay";

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4D4D4D").s().p("AgJDaQgfgCgVgXQgVgXABgfIANkcQABgfAXgVQAXgVAfABQAfACAVAXQAVAXgBAfIgNEcQgBAfgXAVQgWAUgcAAIgEAAg");
	this.shape_1.setTransform(57.3723,16.5895,0.6578,0.6578);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.298)","rgba(0,0,0,0)"],[0,0.514,1],-0.8,26.2,-0.1,3.3).s().p("AgJDaQgfgCgVgXQgVgXABgfIANkcQABgfAXgVQAXgVAfABQAfABAVAYQAVAXgBAfIgNEbQgBAggXAVQgXAUgcAAIgDAAg");
	this.shape_2.setTransform(5.3069,14.2854,0.6578,0.6578);

	this.instance_1 = new lib.Path_1_0();
	this.instance_1.setTransform(5.4,14.35,0.6578,0.6578,0,0,0,8.3,21.8);
	this.instance_1.compositeOperation = "overlay";

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4D4D4D").s().p("AgJDaQgfgCgVgXQgVgXABgfIANkcQABgfAXgVQAXgVAfABQAfABAVAYQAVAXgBAfIgNEbQgBAggXAVQgXAUgcAAIgDAAg");
	this.shape_3.setTransform(5.3069,14.2854,0.6578,0.6578);

	this.instance_2 = new lib.Path_10_1();
	this.instance_2.setTransform(31.95,15.6,0.6578,0.6578,0,0,0,40.1,13.8);
	this.instance_2.compositeOperation = "overlay";

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4D4D4D").s().p("AmMBiIAKjmIMPAiIgLDng");
	this.shape_4.setTransform(31.8823,15.4712,0.6578,0.6578);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(0,0,0,0.498)","rgba(0,0,0,0)"],[0.376,1],0.1,-8.4,-0.6,8.9).s().p("ADpBmQhAgBilgHQiqgIhRgHQg3gFgOhXQgFgcAAghIABgbIKCAcIAAAcQgBAhgHAaQgTBYg9AAIgBAAg");
	this.shape_5.setTransform(30.8627,27.4269,0.6578,0.6578);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4D4D4D").s().p("ADpBmQhAgBilgHQiqgIhRgHQg3gFgOhXQgFgcAAghIABgbIKCAcIAAAcQgBAhgHAaQgTBYg9AAIgBAAg");
	this.shape_6.setTransform(30.8627,27.4269,0.6578,0.6578);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance_2},{t:this.shape_3},{t:this.instance_1},{t:this.shape_2},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kukovi, new cjs.Rectangle(0,0,62.8,34.2), null);


(lib.kuklijevi = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path_5();
	this.instance.setTransform(8.95,9,0.6578,0.6578,0,0,0,13.6,13.7);
	this.instance.compositeOperation = "overlay";

	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0)","rgba(0,0,0,0.298)","rgba(0,0,0,0)"],[0.435,0.824,0.965],-2.3,4.1,0,-0.7,3,15.4).s().p("AheBhQgpgpAAg4QAAg4ApgoQAngoA3AAQA4AAAoAoQAnAoAAA4QAAA4gnApQgoAog4AAQg3AAgngog");
	this.shape.setTransform(8.8695,8.9488,0.6578,0.6578);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AheBhQgpgpAAg4QAAg4ApgoQAngoA3AAQA4AAAoAoQAnAoAAA4QAAA4gnApQgoAog4AAQg3AAgngog");
	this.shape_1.setTransform(8.8695,8.9488,0.6578,0.6578);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kuklijevi, new cjs.Rectangle(0,0,17.9,18), null);


(lib.kuk = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path_5_0();
	this.instance.setTransform(8.95,9,0.6578,0.6578,0,0,0,13.6,13.7);
	this.instance.compositeOperation = "overlay";

	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0)","rgba(0,0,0,0.298)","rgba(0,0,0,0)"],[0.435,0.824,0.965],2.2,4.2,0,0.6,3.1,15.6).s().p("AhbBhQgpgpgCg4QgCg3AmgpQAngoA4AAQA3AAApAoQApApABA3QACA4gmApQgmAog4AAQg3AAgpgog");
	this.shape.setTransform(8.8459,8.961,0.6578,0.6578);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhbBhQgpgpgCg4QgCg3AmgpQAngoA4AAQA3AAApAoQApApABA3QACA4gmApQgmAog4AAQg3AAgpgog");
	this.shape_1.setTransform(8.8459,8.961,0.6578,0.6578);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kuk, new cjs.Rectangle(0,0,17.8,18), null);


(lib.Glavaiusi = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0.847,0.91,1],-36.7,30.6,0,-36.7,30.6,165).s().p("AAAQkQlnALmEh4Qh6glhtguIhWgmQgMhBgNhmQgajMAAi5QAAjpASikQAUi3AkgoQBth0Dhi6QE2kADjhvQBcgtBTABQBVAABXAwQDfBnE9ETQCiCMCTCTQAqAnAZCvQAaCvgEDjQgCCrggDUQgQBpgQBIQh2A+i+A7QlcBtlMAAIg9AAg");
	this.shape.setTransform(88.498,56.0684,0.6578,0.5283);

	this.instance = new lib.Path_3_8();
	this.instance.setTransform(88.55,56.15,0.6578,0.5283,0,0,0,112,106.4);
	this.instance.compositeOperation = "overlay";

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.376,1],-72.9,-69.6,-61.2,-54.2).s().p("AAAQkQlnALmEh4Qh6glhtguIhWgmQgMhBgNhmQgajMAAi5QAAjpASikQAUi3AkgoQBth0Dhi6QE2kADjhvQBcgtBTABQBVAABXAwQDfBnE9ETQCiCMCTCTQAqAnAZCvQAaCvgEDjQgCCrggDUQgQBpgQBIQh2A+i+A7QlcBtlMAAIg9AAg");
	this.shape_1.setTransform(88.498,56.0684,0.6578,0.5283);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.376,1],73.1,-70.1,60.5,-53.7).s().p("AAAQkQlnALmEh4Qh6glhtguIhWgmQgMhBgNhmQgajMAAi5QAAjpASikQAUi3AkgoQBth0Dhi6QE2kADjhvQBcgtBTABQBVAABXAwQDfBnE9ETQCiCMCTCTQAqAnAZCvQAaCvgEDjQgCCrggDUQgQBpgQBIQh2A+i+A7QlcBtlMAAIg9AAg");
	this.shape_2.setTransform(88.498,56.0684,0.6578,0.5283);

	this.instance_1 = new lib.Path_3_7();
	this.instance_1.setTransform(88.55,56.15,0.6578,0.5283,0,0,0,112,106.4);
	this.instance_1.compositeOperation = "overlay";

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B3B3B3").s().p("AAAQkQlnALmEh4Qh6glhtguIhWgmQgMhBgNhmQgajMAAi5QAAjpASikQAUi3AkgoQBth0Dhi6QE2kADjhvQBcgtBTABQBVAABXAwQDfBnE9ETQCiCMCTCTQAqAnAZCvQAaCvgEDjQgCCrggDUQgQBpgQBIQh2A+i+A7QlcBtlMAAIg9AAg");
	this.shape_3.setTransform(88.498,56.0684,0.6578,0.5283);

	this.instance_2 = new lib.Path_4_1();
	this.instance_2.setTransform(13.55,68.05,0.6578,0.6578,0,0,0,20.6,41.9);
	this.instance_2.compositeOperation = "overlay";

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AiyEdQgZh0gBioQgBimAYh0QAbiBAvAAIBxgCQBSACAYAcQArAyAOBzQAJBIAACPQAAAnAIA+IAPBlQAOB2ggAtQgaAkhwAKQgqAEhqAAQguAAgdiAg");
	this.shape_4.setTransform(13.4591,68.0206,0.6578,0.6578);

	this.instance_3 = new lib.Path_5_1();
	this.instance_3.setTransform(165.3,69.25,0.6578,0.6578,0,0,0,20.2,41.8);
	this.instance_3.compositeOperation = "overlay";

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("Ag4GZQhagIgagkQghgtAPh2IAOhmQAIg9AAgnQAAiQAJhHQAPhzAqgyQAYgcBRgCQAsgCBGAEQAvAAAUCAQASB0gJClQgKCngfBzQgjCAgvAAQhoAAgWgCg");
	this.shape_5.setTransform(165.1123,69.1254,0.6578,0.6578);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.instance_3},{t:this.shape_4},{t:this.instance_2},{t:this.shape_3},{t:this.instance_1},{t:this.shape_2},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Glavaiusi, new cjs.Rectangle(0,0,178,112.1), null);


(lib.desni_prst2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path_1_2();
	this.instance.setTransform(14.4,14.6,0.6578,0.6578,0,0,0,21.9,22.2);
	this.instance.compositeOperation = "overlay";

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D4D4D").s().p("AAdDeQgjgJhtibQhriVAFgNQANgmBGgrQAjgWAggOIAzAkQA7AtAwAqQCZCEgfAyQgjA6g+AsQgzAkgcAAIgIAAg");
	this.shape.setTransform(14.2506,14.5793,0.6578,0.6578);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.desni_prst2, new cjs.Rectangle(-0.1,0,28.8,29.3), null);


(lib.desni_prst_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path_2_0();
	this.instance.setTransform(10.15,13.3,0.6578,0.6578,0,0,0,15.5,20.2);
	this.instance.compositeOperation = "overlay";

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D4D4D").s().p("AgMDGQhNgNgniqQgMg0gHg+IgFgzIBBgeQBHgcAiAMQAKADBACZQBCCZgFAWQgEATgwAZQgrAWgqAAQgPAAgNgDg");
	this.shape.setTransform(9.9749,13.151,0.6578,0.6578);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.desni_prst_3, new cjs.Rectangle(-0.1,0,20.200000000000003,26.4), null);


(lib.Desna_ruka = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path_1_1();
	this.instance.setTransform(19.75,27.1,0.6578,0.6578,0,0,0,30.1,41.2);
	this.instance.compositeOperation = "overlay";

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F668A").s().p("Akrk+IAXgJQAjgIA5AHQAvAGA1grQAbgWASgXIFSJ+Ij6C3g");
	this.shape.setTransform(19.6241,26.9973,0.6578,0.6578);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Desna_ruka, new cjs.Rectangle(0,0,39.4,54.1), null);


(lib.Desna_lakat = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path_12();
	this.instance.setTransform(37.2,41.25,0.6578,0.6578,0,0,0,56.6,62.8);
	this.instance.compositeOperation = "overlay";

	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0)","rgba(0,0,0,0.09)","rgba(0,0,0,0)"],[0.851,0.882,1],23.5,-1.7,0,23.5,-1.7,119.4).s().p("AhbJzQgNgBhQhmQhhh7hdibQhZiTg5jUQgShDgNhFIgLg9QgCgKDjiaQByhNByhLICGBtQCaCHBfB6QB3CXBbCNQBUCFgFATQgLApg+BWQhYB6htBGQhsBGiPAiQhVAUgnAAIgJAAg");
	this.shape.setTransform(36.9861,41.1954,0.6578,0.6578);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AhbJzQgNgBhQhmQhhh7hdibQhZiTg5jUQgShDgNhFIgLg9QgCgKDjiaQByhNByhLICGBtQCaCHBfB6QB3CXBbCNQBUCFgFATQgLApg+BWQhYB6htBGQhsBGiPAiQhVAUgnAAIgJAAg");
	this.shape_1.setTransform(36.9861,41.1954,0.6578,0.6578);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Desna_lakat, new cjs.Rectangle(0,0,74.1,82.5), null);


(lib.butka = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.859,0.953],29.6,0,18.4,0.1).s().p("ABfFYQjrgDgOgMQgOgMhikqQhhkmADgRQACgNAIgMIAJgKIG+gRIATAJQAWANATAaQAUAcBADGQA5CuAaBiIAcBpQAFAcgRAFQgRAFh8AAIhwgBg");
	this.shape.setTransform(23.7074,22.6395,0.6578,0.6578);

	this.instance = new lib.Path_6_0();
	this.instance.setTransform(23.55,22.7,0.6578,0.6578,0,0,0,35.8,34.6);
	this.instance.compositeOperation = "overlay";

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("ABfFYQjrgDgOgMQgOgMhikqQhhkmADgRQACgNAIgMIAJgKIG+gRIATAJQAWANATAaQAUAcBADGQA5CuAaBiIAcBpQAFAcgRAFQgRAFh8AAIhwgBg");
	this.shape_1.setTransform(23.7074,22.6395,0.6578,0.6578);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.butka, new cjs.Rectangle(0,0,47.6,45.3), null);


(lib.but = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path_6();
	this.instance.setTransform(18.5,23.1,0.6578,0.6578,0,0,0,28.1,35.2);
	this.instance.compositeOperation = "overlay";

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.2)","rgba(0,0,0,0.039)","rgba(0,0,0,0)"],[0,0.6,0.667,0.827],-27.6,0.1,-18.2,0.1).s().p("AjeFbQgTgEgFgdIgLhrQgKhmgIiwQgJjLAJgcQAJgaASgOIAPgJIHFARIAMAKQANAMAHANQAIASANEtQANEwgKANQgJAMjrACIhvABQh8AAgTgFg");
	this.shape.setTransform(18.4049,23.1212,0.6578,0.6578);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AjeFbQgTgEgFgdIgLhrQgKhmgIiwQgJjLAJgcQAJgaASgOIAPgJIHFARIAMAKQANAMAHANQAIASANEtQANEwgKANQgJAMjrACIhvABQh8AAgTgFg");
	this.shape_1.setTransform(18.4049,23.1212,0.6578,0.6578);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.but, new cjs.Rectangle(0,0,36.9,46.3), null);


(lib.prts3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.3).p("AA+hTQgNASgwBBQgmA2gYAe");
	this.shape.setTransform(13.1705,11.3093,0.6579,0.6579);

	this.instance = new lib.prst1();
	this.instance.setTransform(14.1,12,1,1,0,0,0,14.1,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.prts3, new cjs.Rectangle(0,0,28.2,24), null);


(lib.prst3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.3).p("ABsgbQhQARgdAHQg6AOgrAR");
	this.shape.setTransform(8.7761,12.236,0.6579,0.6579);

	this.instance = new lib.desni_prst_3();
	this.instance.setTransform(10.05,13.25,1,1,0,0,0,10,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.prst3, new cjs.Rectangle(0,0,20.2,26.5), null);


(lib.prst2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.3).p("ABbhUQguAkg6A6QhHBGgGAF");
	this.shape.setTransform(13.8916,13.6646,0.6579,0.6579);

	this.instance = new lib.desni_prst2();
	this.instance.setTransform(14.35,14.7,1,1,0,0,0,14.3,14.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.prst2, new cjs.Rectangle(0,0,28.8,29.3), null);


(lib.glavakomplet = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Desno_oko();
	this.instance.setTransform(121.5,63.45,1,1,0,0,0,22.8,16.9);

	this.instance_1 = new lib.Lijevo_oko();
	this.instance_1.setTransform(63.75,65.9,1,1,0,0,0,37.5,29.3);

	this.instance_2 = new lib.Glavaiusi();
	this.instance_2.setTransform(85.5,107.75,1,1,0,0,0,85.5,107.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(60));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,178,126.4);


// stage content:
(lib.razmisljanjeHTML = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol2();
	this.instance.setTransform(613.9,259.3,0.0833,0.0833,0,0,0,73.8,61.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:72,regY:60.3,scaleX:1,scaleY:1,rotation:360,x:572.95,y:108.15,alpha:1},29,cjs.Ease.get(0.01)).to({rotation:389.9999,x:572.9,y:108.1},4).to({rotation:330.0001,y:108.15},4).to({regX:73.8,regY:61.9,scaleX:0.0833,scaleY:0.0833,rotation:-360,x:613.9,y:259.3,alpha:0},22).to({_off:true},1).wait(15));

	// Layer_5
	this.instance_1 = new lib.upitnik();
	this.instance_1.setTransform(615.75,288.75,1,1,0,0,0,47.5,24.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({regX:47.3,regY:24.2,scaleX:3.2947,scaleY:3.2941,rotation:676.0003,x:480.15,y:103.5,alpha:1},28).to({rotation:676.0003,alpha:0},30,cjs.Ease.elasticOut).to({_off:true},1).wait(15));

	// Layer_4
	this.instance_2 = new lib.Tween12("synched",0);
	this.instance_2.setTransform(618.15,198.15);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-9.9999,x:612.4,y:205.4},29).to({regY:0.1,rotation:0,x:619.75,y:205.1},15).to({regX:0.1,rotation:-6.9994,x:615.25},15).to({regX:0,regY:0,rotation:0,x:618.15,y:198.15},15).wait(1));

	// Armature_3
	this.ikNode_1 = new lib.torzo();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(618.9,330.95,1,1,0,0,0,33.9,41.5);

	this.ikNode_2 = new lib.ramedesno();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(658,306.35,0.9998,0.9998,-3.4352,0,0,15.6,15.4);

	this.ikNode_4 = new lib.ramelijevo();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(580.55,306.4,0.9996,0.9996,-24.6356,0,0,15.6,15.7);

	this.ikNode_8 = new lib.Desna_lakat();
	this.ikNode_8.name = "ikNode_8";
	this.ikNode_8.setTransform(699.95,355.7,0.9997,0.9997,20.6243,0,0,21.4,22.9);

	this.ikNode_6 = new lib.Desna_ruka();
	this.ikNode_6.name = "ikNode_6";
	this.ikNode_6.setTransform(657.85,306.55,0.9997,0.9997,-14.8945,0,0,4.2,-8.1);

	this.ikNode_10 = new lib.Lijevi_lakat();
	this.ikNode_10.name = "ikNode_10";
	this.ikNode_10.setTransform(553.7,359.6,0.9996,0.9996,-7.4466,0,0,56.8,18.4);

	this.ikNode_12 = new lib.prst3();
	this.ikNode_12.name = "ikNode_12";
	this.ikNode_12.setTransform(698.85,427.45,0.9997,0.9997,20.6243,0,0,10.2,13.4);

	this.ikNode_14 = new lib.prst2();
	this.ikNode_14.name = "ikNode_14";
	this.ikNode_14.setTransform(720.65,427.7,0.9997,0.9997,20.6243,0,0,14.5,15.1);

	this.ikNode_16 = new lib.prts3();
	this.ikNode_16.name = "ikNode_16";
	this.ikNode_16.setTransform(738.35,418.1,0.9997,0.9997,20.6243,0,0,14,12.2);

	this.ikNode_18 = new lib.lijeva_ruka();
	this.ikNode_18.name = "ikNode_18";
	this.ikNode_18.setTransform(580.55,306.7,0.9997,0.9997,-6.3003,0,0,31.6,-7);

	this.ikNode_21 = new lib.lijevi_prst_3();
	this.ikNode_21.name = "ikNode_21";
	this.ikNode_21.setTransform(508.15,411.15,0.9997,0.9997,-6.3003,0,0,20.1,8);

	this.ikNode_23 = new lib.lijevi_prst_2();
	this.ikNode_23.name = "ikNode_23";
	this.ikNode_23.setTransform(521.9,422.55,0.9997,0.9997,-6.3003,0,0,20.9,7.5);

	this.ikNode_25 = new lib.lijevi_prst_1();
	this.ikNode_25.name = "ikNode_25";
	this.ikNode_25.setTransform(543.65,429.75,0.9998,0.9998,-1.143,0,0,16.1,7.6);

	this.ikNode_27 = new lib.kukovi();
	this.ikNode_27.name = "ikNode_27";
	this.ikNode_27.setTransform(618.15,377.5,1,1,0,0,0,31.5,25.9);

	this.ikNode_29 = new lib.kuk();
	this.ikNode_29.name = "ikNode_29";
	this.ikNode_29.setTransform(636.1,386.8,0.9998,0.9998,0.5701,0,0,9,9.2);

	this.ikNode_31 = new lib.kuklijevi();
	this.ikNode_31.name = "ikNode_31";
	this.ikNode_31.setTransform(607.7,394.5,0.9998,0.9998,5.1542,0,0,9,9.2);

	this.ikNode_33 = new lib.but();
	this.ikNode_33.name = "ikNode_33";
	this.ikNode_33.setTransform(606.9,409.9,0.9998,0.9998,2.2891,0,0,20.4,16.5);

	this.ikNode_35 = new lib.koljeno();
	this.ikNode_35.name = "ikNode_35";
	this.ikNode_35.setTransform(607.25,445.85,0.9998,0.9998,2.2891,0,0,10.2,8.2);

	this.ikNode_37 = new lib.noga();
	this.ikNode_37.name = "ikNode_37";
	this.ikNode_37.setTransform(607.1,465.2,0.9998,0.9998,2.2891,0,0,25.5,12.8);

	this.ikNode_39 = new lib.stopalo();
	this.ikNode_39.name = "ikNode_39";
	this.ikNode_39.setTransform(606.75,497.1,0.9998,0.9998,2.2891,0,0,24.7,18.4);

	this.ikNode_41 = new lib.butka();
	this.ikNode_41.name = "ikNode_41";
	this.ikNode_41.setTransform(646.15,408.85,0.9997,0.9997,6.8726,0,0,23.9,22.9);

	this.ikNode_43 = new lib.koljeno_desno();
	this.ikNode_43.name = "ikNode_43";
	this.ikNode_43.setTransform(649.5,437.8,0.9997,0.9997,6.8726,0,0,13,8.1);

	this.ikNode_45 = new lib.noga_desno();
	this.ikNode_45.name = "ikNode_45";
	this.ikNode_45.setTransform(653.9,455,0.9997,0.9997,6.8726,0,0,20.6,10.2);

	this.ikNode_47 = new lib.stopalo_Denso();
	this.ikNode_47.name = "ikNode_47";
	this.ikNode_47.setTransform(664.45,489.65,0.9997,0.9997,6.8726,0,0,25.1,17.6);

	this.ikNode_51 = new lib.Usta();
	this.ikNode_51.name = "ikNode_51";
	this.ikNode_51.setTransform(614.95,259.95,0.9997,0.9997,-1.2384,0,0,51.9,15.6);

	this.ikNode_53 = new lib.glavakomplet();
	this.ikNode_53.name = "ikNode_53";
	this.ikNode_53.setTransform(618.45,237.25,0.9997,0.9997,-0.2125,0,0,90.2,100.7);

	this.ikNode_49 = new lib.vrat();
	this.ikNode_49.name = "ikNode_49";
	this.ikNode_49.setTransform(618.6,295.85,0.9997,0.9997,-0.9664,0,0,14.8,31.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_49,p:{rotation:-0.9664,y:295.85,x:618.6,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_53,p:{scaleX:0.9997,scaleY:0.9997,rotation:-0.2125,x:618.45,y:237.25,regY:100.7}},{t:this.ikNode_51,p:{regX:51.9,rotation:-1.2384,x:614.95,y:259.95,scaleX:0.9997,scaleY:0.9997,regY:15.6}},{t:this.ikNode_47,p:{rotation:6.8726,x:664.45,y:489.65,regX:25.1,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.2,rotation:6.8726,x:653.9,y:455,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13,rotation:6.8726,x:649.5,y:437.8}},{t:this.ikNode_41,p:{rotation:6.8726,x:646.15,y:408.85}},{t:this.ikNode_39,p:{scaleX:0.9998,scaleY:0.9998,rotation:2.2891,x:606.75,y:497.1,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9998,scaleY:0.9998,rotation:2.2891,x:607.1,y:465.2,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9998,scaleY:0.9998,rotation:2.2891,x:607.25,y:445.85,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9998,scaleY:0.9998,rotation:2.2891,x:606.9,y:409.9}},{t:this.ikNode_31,p:{regX:9,scaleX:0.9998,scaleY:0.9998,rotation:5.1542,x:607.7,y:394.5}},{t:this.ikNode_29,p:{rotation:0.5701,x:636.1,y:386.8}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.6,scaleX:0.9998,scaleY:0.9998,rotation:-1.143,x:543.65,y:429.75,regX:16.1}},{t:this.ikNode_23,p:{regX:20.9,rotation:-6.3003,x:521.9,y:422.55,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:-6.3003,x:508.15,y:411.15,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.6,rotation:-6.3003,x:580.55,y:306.7}},{t:this.ikNode_16,p:{rotation:20.6243,x:738.35,y:418.1,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.2}},{t:this.ikNode_14,p:{rotation:20.6243,x:720.65,y:427.7,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.1}},{t:this.ikNode_12,p:{regY:13.4,rotation:20.6243,x:698.85,y:427.45,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9996,scaleY:0.9996,rotation:-7.4466,x:553.7,y:359.6}},{t:this.ikNode_6,p:{scaleX:0.9997,scaleY:0.9997,rotation:-14.8945,x:657.85,y:306.55,regY:-8.1}},{t:this.ikNode_8,p:{regY:22.9,rotation:20.6243,x:699.95,y:355.7,regX:21.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-24.6356,x:580.55,y:306.4,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.6,rotation:-3.4352,x:658,y:306.35,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1}]}).to({state:[{t:this.ikNode_49,p:{rotation:-1.0898,y:295.75,x:618.6,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:0.2003,x:618.3,y:237.45,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:-1.4336,x:615,y:259.85,scaleX:0.9997,scaleY:0.9997,regY:15.6}},{t:this.ikNode_47,p:{rotation:5.2266,x:664.4,y:489.85,regX:25.1,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.7,regY:10.3,rotation:7.0739,x:653.95,y:455.35,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.8844,x:649.6,y:437.9}},{t:this.ikNode_41,p:{rotation:6.8756,x:646.25,y:408.85}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:4.5391,x:604.55,y:497,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:4.5391,x:606,y:465.15,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:4.5391,x:607,y:445.85,regY:8.2}},{t:this.ikNode_33,p:{regY:16.6,scaleX:0.9997,scaleY:0.9997,rotation:2.7917,x:606.75,y:410}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.151,x:607.75,y:394.55}},{t:this.ikNode_29,p:{rotation:0.5684,x:636.05,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:2.6499,x:539,y:429.35,regX:16.1}},{t:this.ikNode_23,p:{regX:21,rotation:-2.5028,x:518.05,y:420.8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:-2.5028,x:504.95,y:408.45,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-6.467,x:580.4,y:306.95}},{t:this.ikNode_16,p:{rotation:7.8536,x:756.4,y:403.2,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.2}},{t:this.ikNode_14,p:{rotation:7.8536,x:741.2,y:416.45,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.1}},{t:this.ikNode_12,p:{regY:13.5,rotation:7.8536,x:719.75,y:421.2,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.7,scaleX:0.9995,scaleY:0.9995,rotation:-3.6481,x:553.45,y:360}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-21.073,x:658,y:306.6,regY:-8.1}},{t:this.ikNode_8,p:{regY:23,rotation:7.8536,x:705,y:351.05,regX:21.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-25.1187,x:580.5,y:306.75,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4353,x:658.1,y:306.45,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-1.2131,y:295.8,x:618.55,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:0.6219,x:618.15,y:237.45,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:-1.6278,x:614.9,y:259.85,scaleX:0.9996,scaleY:0.9996,regY:15.6}},{t:this.ikNode_47,p:{rotation:3.5775,x:664.25,y:489.8,regX:25.1,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.3,rotation:7.2741,x:653.85,y:455.3,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.8952,x:649.55,y:437.8}},{t:this.ikNode_41,p:{rotation:6.8783,x:646.25,y:408.9}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:6.7899,x:602.2,y:496.7,regY:18.3,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:6.7899,x:604.95,y:465.15,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:6.7899,x:606.75,y:445.85,regY:8.2}},{t:this.ikNode_33,p:{regY:16.4,scaleX:0.9997,scaleY:0.9997,rotation:3.2935,x:606.8,y:409.75}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1466,x:607.85,y:394.55}},{t:this.ikNode_29,p:{rotation:0.5658,x:636.05,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:6.4503,x:534.4,y:428.7,regX:16.1}},{t:this.ikNode_23,p:{regX:21.1,rotation:1.2927,x:514.15,y:418.75,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:1.2927,x:501.8,y:405.55,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-6.6334,x:580.3,y:307.25}},{t:this.ikNode_16,p:{rotation:-4.9123,x:771.2,y:385.2,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.2}},{t:this.ikNode_14,p:{rotation:-4.9123,x:759.25,y:401.5,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.1}},{t:this.ikNode_12,p:{regY:13.5,rotation:-4.9123,x:739.35,y:410.9,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.7,scaleX:0.9995,scaleY:0.9995,rotation:0.1469,x:553.5,y:360.35}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-27.2488,x:658,y:306.6,regY:-8.1}},{t:this.ikNode_8,p:{regY:22.9,rotation:-4.9123,x:709.3,y:345.65,regX:21.3,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-25.6008,x:580.3,y:307.1,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4353,x:658.05,y:306.45,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-1.3365,y:295.8,x:618.55,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.0426,x:618,y:237.45,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:-1.8221,x:614.8,y:259.85,scaleX:0.9996,scaleY:0.9996,regY:15.6}},{t:this.ikNode_47,p:{rotation:1.9305,x:664.15,y:489.9,regX:25.1,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.3,rotation:7.4759,x:653.8,y:455.3,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.9064,x:649.6,y:437.85}},{t:this.ikNode_41,p:{rotation:6.881,x:646.2,y:408.85}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:9.0399,x:599.9,y:496.7,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:9.0399,x:603.95,y:465.1,regX:25.6}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:9.0399,x:606.3,y:445.85,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:3.7938,x:606.75,y:409.85}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1421,x:607.85,y:394.55}},{t:this.ikNode_29,p:{rotation:0.5632,x:636.1,y:386.8}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:10.2484,x:529.85,y:427.65,regX:16.1}},{t:this.ikNode_23,p:{regX:21,rotation:5.0921,x:510.2,y:416.35,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:5.0921,x:498.85,y:402.35,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.6,rotation:-6.7989,x:579.9,y:307.55}},{t:this.ikNode_16,p:{rotation:-17.6852,x:782.35,y:364.8,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.2}},{t:this.ikNode_14,p:{rotation:-17.6852,x:774.3,y:383.25,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.1}},{t:this.ikNode_12,p:{regY:13.5,rotation:-17.6852,x:756.9,y:396.8,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9995,scaleY:0.9995,rotation:3.9471,x:553.55,y:360.75}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-33.4254,x:658,y:306.55,regY:-8.1}},{t:this.ikNode_8,p:{regY:23,rotation:-17.6852,x:713.4,y:339.95,regX:21.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-26.0843,x:580.05,y:307.4,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4353,x:658.05,y:306.45,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-1.4616,y:295.8,x:618.45,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4634,x:617.85,y:237.45,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:-2.0163,x:614.7,y:259.85,scaleX:0.9996,scaleY:0.9996,regY:15.6}},{t:this.ikNode_47,p:{rotation:0.2816,x:664,y:489.95,regX:25.1,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.3,rotation:7.6753,x:653.8,y:455.25,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.918,x:649.55,y:437.9}},{t:this.ikNode_41,p:{rotation:6.8835,x:646.25,y:408.9}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:11.2912,x:597.6,y:496.4,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:11.2912,x:602.8,y:465,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:11.2912,x:606.1,y:445.85,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:4.2962,x:606.75,y:409.95}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1377,x:607.85,y:394.5}},{t:this.ikNode_29,p:{rotation:0.5606,x:636.1,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:14.0483,x:525.35,y:426.35,regX:16.1}},{t:this.ikNode_23,p:{regX:21,rotation:8.8914,x:506.6,y:413.85,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:8.8914,x:496.2,y:399.1,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-6.9672,x:579.8,y:307.95}},{t:this.ikNode_16,p:{rotation:-30.4557,x:789.3,y:342.85,regX:13.9,scaleX:0.9997,scaleY:0.9997,regY:12.2}},{t:this.ikNode_14,p:{rotation:-30.4557,x:785.55,y:362.55,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.1}},{t:this.ikNode_12,p:{regY:13.5,rotation:-30.4557,x:771.65,y:379.7,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.7,scaleX:0.9995,scaleY:0.9995,rotation:7.7461,x:553.35,y:361.2}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-39.6029,x:658,y:306.55,regY:-8.1}},{t:this.ikNode_8,p:{regY:23,rotation:-30.4557,x:716.6,y:333.7,regX:21.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-26.5666,x:579.9,y:307.75,regY:15.8,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4345,x:658.05,y:306.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-1.5849,y:295.85,x:618.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.8834,x:617.65,y:237.4,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:-2.2106,x:614.6,y:259.9,scaleX:0.9996,scaleY:0.9996,regY:15.6}},{t:this.ikNode_47,p:{rotation:-1.3618,x:663.85,y:490,regX:25.1,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.3,rotation:7.8767,x:653.85,y:455.25,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.9293,x:649.5,y:437.9}},{t:this.ikNode_41,p:{rotation:6.8871,x:646.25,y:408.85}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:13.5412,x:595.3,y:496.05,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:13.5412,x:601.7,y:464.75,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:13.5412,x:605.8,y:445.85,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9998,scaleY:0.9998,rotation:4.7978,x:606.75,y:409.95}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1344,x:607.85,y:394.45}},{t:this.ikNode_29,p:{rotation:0.5579,x:636.05,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:17.8475,x:520.95,y:424.7,regX:16}},{t:this.ikNode_23,p:{regX:21,rotation:12.6909,x:503.15,y:410.95,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:12.6909,x:493.75,y:395.6,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-7.1328,x:579.65,y:308.25}},{t:this.ikNode_16,p:{rotation:-43.2298,x:792.05,y:320,regX:14,scaleX:0.9996,scaleY:0.9996,regY:12.2}},{t:this.ikNode_14,p:{rotation:-43.2298,x:792.75,y:340.05,scaleX:0.9996,scaleY:0.9996,regX:14.5,regY:15.1}},{t:this.ikNode_12,p:{regY:13.5,rotation:-43.2298,x:783,y:359.8,scaleX:0.9996,scaleY:0.9996,regX:10.2}},{t:this.ikNode_10,p:{regX:56.7,scaleX:0.9995,scaleY:0.9995,rotation:11.5453,x:553.3,y:361.55}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-45.7793,x:658,y:306.6,regY:-8}},{t:this.ikNode_8,p:{regY:23,rotation:-43.2298,x:719.15,y:327.3,regX:21.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-27.0478,x:579.75,y:308.05,regY:15.8,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4345,x:658.05,y:306.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-1.7083,y:295.7,x:618.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:2.3044,x:617.5,y:237.5,regY:100.8}},{t:this.ikNode_51,p:{regX:52,rotation:-2.4032,x:614.5,y:259.85,scaleX:0.9997,scaleY:0.9997,regY:15.6}},{t:this.ikNode_47,p:{rotation:-3.009,x:663.7,y:490,regX:25.1,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.3,rotation:8.077,x:653.8,y:455.25,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.9392,x:649.55,y:437.9}},{t:this.ikNode_41,p:{rotation:6.8897,x:646.2,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:15.7913,x:593,y:495.5,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:15.7913,x:600.7,y:464.65,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:15.7913,x:605.4,y:445.8,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:5.2993,x:606.8,y:409.85}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1299,x:607.85,y:394.45}},{t:this.ikNode_29,p:{rotation:0.5553,x:636.1,y:386.7}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.6,scaleX:0.9997,scaleY:0.9997,rotation:21.6478,x:517,y:422.8,regX:16.1}},{t:this.ikNode_23,p:{regX:21,rotation:16.4901,x:499.95,y:407.95,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:16.4901,x:491.55,y:392,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-7.2996,x:579.4,y:308.5}},{t:this.ikNode_16,p:{rotation:-56.0004,x:790.5,y:297.35,regX:14,scaleX:0.9996,scaleY:0.9996,regY:12.2}},{t:this.ikNode_14,p:{rotation:-56.0004,x:795.6,y:316.8,scaleX:0.9996,scaleY:0.9996,regX:14.5,regY:15.1}},{t:this.ikNode_12,p:{regY:13.5,rotation:-56.0004,x:790.5,y:338.15,scaleX:0.9996,scaleY:0.9996,regX:10.3}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9995,scaleY:0.9995,rotation:15.3446,x:553.45,y:362.05}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-51.956,x:657.95,y:306.55,regY:-8.1}},{t:this.ikNode_8,p:{regY:23,rotation:-56.0004,x:721,y:320.5,regX:21.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-27.5321,x:579.45,y:308.35,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4345,x:658.05,y:306.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-1.8317,y:295.75,x:618.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:2.7246,x:617.3,y:237.45,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:-2.5984,x:614.35,y:260,scaleX:0.9996,scaleY:0.9996,regY:15.7}},{t:this.ikNode_47,p:{rotation:-4.6569,x:663.65,y:490.05,regX:25.1,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.3,rotation:8.2786,x:653.8,y:455.25,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.9505,x:649.55,y:437.9}},{t:this.ikNode_41,p:{rotation:6.8923,x:646.2,y:408.85}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:18.0417,x:590.75,y:495,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:18.0417,x:599.65,y:464.4,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:18.0417,x:605.1,y:445.8,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:5.801,x:606.8,y:409.85}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1255,x:607.9,y:394.45}},{t:this.ikNode_29,p:{rotation:0.5527,x:636.1,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:25.4472,x:512.95,y:420.7,regX:16.1}},{t:this.ikNode_23,p:{regX:21,rotation:20.2907,x:497,y:404.75,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:20.2907,x:489.7,y:388.25,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-7.4653,x:579.25,y:308.9}},{t:this.ikNode_16,p:{rotation:-68.772,x:784.75,y:275.65,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.2}},{t:this.ikNode_14,p:{rotation:-68.772,x:794.1,y:293.45,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.1}},{t:this.ikNode_12,p:{regY:13.5,rotation:-68.772,x:793.85,y:315.55,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9995,scaleY:0.9995,rotation:19.1425,x:553.4,y:362.35}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-58.1334,x:657.9,y:306.5,regY:-8.1}},{t:this.ikNode_8,p:{regY:23.1,rotation:-68.772,x:722.2,y:313.65,regX:21.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-28.0141,x:579.2,y:308.75,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4345,x:658.05,y:306.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-1.9551,y:295.75,x:618.3,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:3.1449,x:617.2,y:237.4,regY:100.7}},{t:this.ikNode_51,p:{regX:51.9,rotation:-2.7919,x:614.15,y:259.85,scaleX:0.9996,scaleY:0.9996,regY:15.6}},{t:this.ikNode_47,p:{rotation:-6.3052,x:663.6,y:490.1,regX:25.2,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.3,rotation:8.4783,x:653.8,y:455.3,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.9621,x:649.5,y:437.85}},{t:this.ikNode_41,p:{rotation:6.8952,x:646.2,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:20.2921,x:588.45,y:494.35,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:20.2921,x:598.6,y:464.15,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:20.2921,x:604.7,y:445.9,regY:8.3}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:6.3031,x:606.75,y:409.9}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1211,x:607.85,y:394.45}},{t:this.ikNode_29,p:{rotation:0.5501,x:636.05,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:29.2463,x:509.15,y:418.35,regX:16.1}},{t:this.ikNode_23,p:{regX:21,rotation:24.0893,x:494.25,y:401.25,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:24.0893,x:488.15,y:384.4,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.6,rotation:-7.6329,x:578.9,y:309.25}},{t:this.ikNode_16,p:{rotation:-81.544,x:775.2,y:255.75,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.2}},{t:this.ikNode_14,p:{rotation:-81.544,x:788.3,y:271,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.1}},{t:this.ikNode_12,p:{regY:13.5,rotation:-81.544,x:792.8,y:292.65,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9995,scaleY:0.9995,rotation:22.9438,x:553.35,y:362.9}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-64.3111,x:657.9,y:306.45,regY:-8.1}},{t:this.ikNode_8,p:{regY:23,rotation:-81.544,x:722.55,y:306.8,regX:21.3,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-28.4967,x:579.1,y:309,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4345,x:658.05,y:306.35,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-2.0785,y:295.7,x:618.35,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:3.5647,x:617,y:237.4,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:-2.9864,x:614.15,y:259.9,scaleX:0.9996,scaleY:0.9996,regY:15.6}},{t:this.ikNode_47,p:{rotation:-7.9535,x:663.45,y:490.05,regX:25.1,scaleX:0.9996,scaleY:0.9996,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.3,rotation:8.679,x:653.75,y:455.25,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.9726,x:649.55,y:437.85}},{t:this.ikNode_41,p:{rotation:6.8975,x:646.15,y:408.85}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:22.5416,x:586.3,y:493.6,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:22.5416,x:597.6,y:463.85,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:22.5416,x:604.45,y:445.75,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:6.8048,x:606.8,y:409.9}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1168,x:607.9,y:394.45}},{t:this.ikNode_29,p:{rotation:0.5474,x:636.1,y:386.7}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:33.0456,x:505.55,y:415.75,regX:16.1}},{t:this.ikNode_23,p:{regX:21,rotation:27.8883,x:491.8,y:397.7,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:27.8883,x:486.75,y:380.45,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-7.7996,x:578.85,y:309.55}},{t:this.ikNode_16,p:{rotation:-94.3112,x:762.3,y:238.6,regX:13.9,scaleX:0.9997,scaleY:0.9997,regY:12.2}},{t:this.ikNode_14,p:{rotation:-94.3112,x:778.4,y:250.4,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.1}},{t:this.ikNode_12,p:{regY:13.5,rotation:-94.3112,x:787.6,y:270.55,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.7,scaleX:0.9995,scaleY:0.9995,rotation:26.7426,x:553.15,y:363.2}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-70.488,x:657.8,y:306.55,regY:-8.1}},{t:this.ikNode_8,p:{regY:23.1,rotation:-94.3112,x:722.3,y:299.65,regX:21.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-28.9786,x:578.95,y:309.45,regY:15.8,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4345,x:658.05,y:306.35,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-2.2018,y:295.75,x:618.3,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:3.9854,x:616.75,y:237.35,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:-3.1799,x:614.1,y:259.85,scaleX:0.9996,scaleY:0.9996,regY:15.6}},{t:this.ikNode_47,p:{rotation:-9.6014,x:663.35,y:490.1,regX:25.2,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.3,rotation:8.8791,x:653.75,y:455.2,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.9841,x:649.55,y:437.85}},{t:this.ikNode_41,p:{rotation:6.9004,x:646.2,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:24.7927,x:584.15,y:492.9,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:24.7927,x:596.55,y:463.6,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:24.7927,x:604.1,y:445.9,regY:8.3}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:7.3063,x:606.8,y:409.9}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1123,x:607.85,y:394.5}},{t:this.ikNode_29,p:{rotation:0.5448,x:636.1,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.6,scaleX:0.9996,scaleY:0.9996,rotation:36.8459,x:502.05,y:412.75,regX:16}},{t:this.ikNode_23,p:{regX:21,rotation:31.6881,x:489.6,y:394,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:31.6881,x:485.75,y:376.4,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-7.9656,x:578.75,y:309.9}},{t:this.ikNode_16,p:{rotation:-107.083,x:746.65,y:224.15,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.2}},{t:this.ikNode_14,p:{rotation:-107.083,x:764.95,y:232.35,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.1}},{t:this.ikNode_12,p:{regY:13.5,rotation:-107.083,x:778.35,y:249.9,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9995,scaleY:0.9995,rotation:30.5422,x:553.25,y:363.7}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-76.6638,x:657.75,y:306.5,regY:-8.1}},{t:this.ikNode_8,p:{regY:23.1,rotation:-107.083,x:721.1,y:292.75,regX:21.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-29.4621,x:578.75,y:309.7,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4345,x:658.05,y:306.35,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-2.3244,y:295.75,x:618.3,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:4.4063,x:616.55,y:237.4,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:-3.3743,x:614,y:259.85,scaleX:0.9997,scaleY:0.9997,regY:15.6}},{t:this.ikNode_47,p:{rotation:-11.2499,x:663.15,y:490.1,regX:25.1,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.7,regY:10.3,rotation:9.08,x:653.9,y:455.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.9946,x:649.5,y:437.8}},{t:this.ikNode_41,p:{rotation:6.9031,x:646.2,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:27.0426,x:582,y:492.1,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:27.0426,x:595.55,y:463.25,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:27.0426,x:603.9,y:445.75,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:7.8074,x:606.7,y:409.85}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1088,x:607.9,y:394.45}},{t:this.ikNode_29,p:{rotation:0.5422,x:636.1,y:386.7}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:40.6441,x:498.85,y:409.65,regX:16}},{t:this.ikNode_23,p:{regX:21,rotation:35.4875,x:487.75,y:390.1,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:35.4875,x:485,y:372.3,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-8.1316,x:578.45,y:310.2}},{t:this.ikNode_16,p:{rotation:-119.855,x:729.05,y:213.5,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.2}},{t:this.ikNode_14,p:{rotation:-119.855,x:748.65,y:217.4,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.1}},{t:this.ikNode_12,p:{regY:13.5,rotation:-119.855,x:765.6,y:231.6,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9995,scaleY:0.9995,rotation:34.3417,x:553.25,y:364.15}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-82.8403,x:657.8,y:306.5,regY:-8.1}},{t:this.ikNode_8,p:{regY:23.1,rotation:-119.855,x:719.25,y:286.05,regX:21.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-29.9448,x:578.5,y:309.95,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4345,x:658.05,y:306.35,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-2.4478,y:295.75,x:618.3,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:4.8257,x:616.45,y:237.4,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:-3.5689,x:613.85,y:259.9,scaleX:0.9996,scaleY:0.9996,regY:15.6}},{t:this.ikNode_47,p:{rotation:-12.8973,x:663,y:490.2,regX:25.1,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.2,rotation:9.2803,x:653.75,y:455.1,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:7.0061,x:649.55,y:437.85}},{t:this.ikNode_41,p:{rotation:6.9056,x:646.2,y:408.85}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:29.2932,x:579.85,y:491.15,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:29.2932,x:594.55,y:462.8,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:29.2932,x:603.55,y:445.7,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:8.3101,x:606.8,y:409.85}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1045,x:607.85,y:394.45}},{t:this.ikNode_29,p:{rotation:0.5396,x:636.1,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:44.4447,x:496,y:406.45,regX:16.1}},{t:this.ikNode_23,p:{regX:21,rotation:39.2863,x:486.15,y:386.15,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:39.2863,x:484.6,y:368.2,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-8.2979,x:578.3,y:310.65}},{t:this.ikNode_16,p:{rotation:-132.6265,x:710.1,y:206.65,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.2}},{t:this.ikNode_14,p:{rotation:-132.6265,x:730.15,y:206.15,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.1}},{t:this.ikNode_12,p:{regY:13.5,rotation:-132.6265,x:749.9,y:216.1,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9995,scaleY:0.9995,rotation:38.1404,x:553.2,y:364.5}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-89.0169,x:657.75,y:306.5,regY:-8.1}},{t:this.ikNode_8,p:{regY:22.9,rotation:-132.6265,x:716.5,y:279.65,regX:21.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-30.4258,x:578.35,y:310.4,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4345,x:658.05,y:306.35,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-2.5713,y:295.75,x:618.2,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:5.2463,x:616.3,y:237.4,regY:100.7}},{t:this.ikNode_51,p:{regX:51.9,rotation:-3.7626,x:613.6,y:259.9,scaleX:0.9996,scaleY:0.9996,regY:15.6}},{t:this.ikNode_47,p:{rotation:-14.546,x:662.85,y:490.2,regX:25.1,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.3,rotation:9.4816,x:653.75,y:455.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:7.0175,x:649.55,y:437.8}},{t:this.ikNode_41,p:{rotation:6.9093,x:646.2,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:31.5434,x:577.75,y:490.15,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:31.5434,x:593.55,y:462.5,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:31.5434,x:603.2,y:445.7,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:8.8113,x:606.75,y:409.85}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1,x:607.85,y:394.45}},{t:this.ikNode_29,p:{rotation:0.5369,x:636.1,y:386.7}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:48.2447,x:493.3,y:403.05,regX:16.1}},{t:this.ikNode_23,p:{regX:21.1,rotation:43.0869,x:484.85,y:382.1,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_21,p:{rotation:43.0869,x:484.35,y:364.15,regY:8.1,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_18,p:{regX:31.7,rotation:-8.465,x:578.15,y:310.95}},{t:this.ikNode_16,p:{rotation:-145.3993,x:691,y:203.65,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.2}},{t:this.ikNode_14,p:{rotation:-145.3993,x:710.25,y:198.8,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.1}},{t:this.ikNode_12,p:{regY:13.4,rotation:-145.3993,x:731.65,y:204.2,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9995,scaleY:0.9995,rotation:41.9401,x:553.2,y:364.95}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-95.1898,x:657.75,y:306.45,regY:-8.1}},{t:this.ikNode_8,p:{regY:23,rotation:-145.3993,x:713.3,y:273.4,regX:21.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-30.9093,x:578.15,y:310.7,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4345,x:658.05,y:306.35,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-2.6956,y:295.75,x:618.2,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:5.6672,x:616.05,y:237.35,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:-3.9572,x:613.75,y:259.9,scaleX:0.9996,scaleY:0.9996,regY:15.6}},{t:this.ikNode_47,p:{rotation:-16.1939,x:662.75,y:490.25,regX:25.1,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.3,rotation:9.6819,x:653.7,y:455.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:7.0281,x:649.5,y:437.8}},{t:this.ikNode_41,p:{rotation:6.9118,x:646.15,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:33.7939,x:575.65,y:489.1,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:33.7939,x:592.65,y:462.1,regX:25.6}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:33.7939,x:602.9,y:445.6,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:9.3135,x:606.85,y:409.9}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.0958,x:607.9,y:394.4}},{t:this.ikNode_29,p:{rotation:0.5343,x:636.1,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9996,scaleY:0.9996,rotation:52.0429,x:490.9,y:399.3,regX:16}},{t:this.ikNode_23,p:{regX:21,rotation:46.8859,x:483.85,y:377.8,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_21,p:{rotation:46.8859,x:484.65,y:359.85,regY:8,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_18,p:{regX:31.7,rotation:-8.6313,x:577.95,y:311.25}},{t:this.ikNode_16,p:{rotation:-158.1713,x:672.15,y:204.6,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.2}},{t:this.ikNode_14,p:{rotation:-158.1713,x:689.95,y:195.45,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.1}},{t:this.ikNode_12,p:{regY:13.5,rotation:-158.1713,x:712.1,y:196.05,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9995,scaleY:0.9995,rotation:45.7391,x:553.15,y:365.3}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-101.3655,x:657.75,y:306.5,regY:-8.1}},{t:this.ikNode_8,p:{regY:23,rotation:-158.1713,x:709.45,y:267.65,regX:21.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-31.392,x:578,y:311,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4336,x:658.05,y:306.35,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-2.559,y:295.75,x:618.25,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:4.8679,x:616.25,y:237.4,regY:100.7}},{t:this.ikNode_51,p:{regX:51.9,rotation:-3.7468,x:613.7,y:259.9,scaleX:0.9996,scaleY:0.9996,regY:15.6}},{t:this.ikNode_47,p:{rotation:-14.6552,x:662.9,y:490.2,regX:25.2,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.3,rotation:9.4941,x:653.75,y:455.15,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:7.0175,x:649.55,y:437.8}},{t:this.ikNode_41,p:{rotation:6.9093,x:646.15,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:31.6934,x:577.65,y:490.05,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:31.6934,x:593.65,y:462.55,regX:25.6}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:31.6934,x:603.25,y:445.65,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:8.8451,x:606.75,y:409.95}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1,x:607.85,y:394.45}},{t:this.ikNode_29,p:{rotation:0.5361,x:636,y:386.7}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:48.498,x:493.05,y:402.75,regX:16}},{t:this.ikNode_23,p:{regX:21,rotation:43.3399,x:484.75,y:381.75,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_21,p:{rotation:43.3399,x:484.45,y:363.8,regY:8,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_18,p:{regX:31.7,rotation:-8.4755,x:578.15,y:310.95}},{t:this.ikNode_16,p:{rotation:-158.9448,x:672,y:205.85,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.2}},{t:this.ikNode_14,p:{rotation:-158.9448,x:689.6,y:196.65,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.1}},{t:this.ikNode_12,p:{regY:13.5,rotation:-158.9448,x:711.8,y:196.95,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9995,scaleY:0.9995,rotation:42.1934,x:553.1,y:365}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-100.3998,x:657.95,y:306.45,regY:-8}},{t:this.ikNode_8,p:{regY:23,rotation:-158.9448,x:710.1,y:268.5,regX:21.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-30.9416,x:578.15,y:310.65,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4336,x:658.05,y:306.35,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-2.4242,y:295.7,x:618.3,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:4.0687,x:616.45,y:237.35,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:-3.5391,x:613.95,y:259.85,scaleX:0.9996,scaleY:0.9996,regY:15.6}},{t:this.ikNode_47,p:{rotation:-13.1182,x:663,y:490.15,regX:25.1,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.3,rotation:9.306,x:653.75,y:455.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:7.0069,x:649.55,y:437.8}},{t:this.ikNode_41,p:{rotation:6.9056,x:646.15,y:408.85}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:29.5928,x:579.55,y:490.95,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:29.5928,x:594.4,y:462.9,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:29.5928,x:603.5,y:445.75,regY:8.2}},{t:this.ikNode_33,p:{regY:16.4,scaleX:0.9997,scaleY:0.9997,rotation:8.3763,x:606.8,y:409.75}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1035,x:607.9,y:394.45}},{t:this.ikNode_29,p:{rotation:0.5387,x:636.05,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9996,scaleY:0.9996,rotation:44.9524,x:495.6,y:406,regX:16.1}},{t:this.ikNode_23,p:{regX:21,rotation:39.7938,x:485.9,y:385.6,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_21,p:{rotation:39.7938,x:484.55,y:367.65,regY:8,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_18,p:{regX:31.7,rotation:-8.3209,x:578.3,y:310.6}},{t:this.ikNode_16,p:{rotation:-159.7187,x:671.75,y:207.3,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.2}},{t:this.ikNode_14,p:{rotation:-159.7187,x:689.3,y:197.8,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.1}},{t:this.ikNode_12,p:{regY:13.5,rotation:-159.7187,x:711.45,y:197.75,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.7,scaleX:0.9995,scaleY:0.9995,rotation:38.6467,x:553.05,y:364.5}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-99.434,x:657.8,y:306.45,regY:-8.1}},{t:this.ikNode_8,p:{regY:23,rotation:-159.7187,x:710.65,y:269.45,regX:21.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-30.4905,x:578.3,y:310.35,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4336,x:658.05,y:306.35,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-2.2885,y:295.7,x:618.3,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:3.2693,x:616.6,y:237.4,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:-3.3296,x:614.05,y:259.85,scaleX:0.9997,scaleY:0.9997,regY:15.6}},{t:this.ikNode_47,p:{rotation:-11.5792,x:663.2,y:490.15,regX:25.2,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.2,rotation:9.1181,x:653.8,y:455.05,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.9965,x:649.55,y:437.85}},{t:this.ikNode_41,p:{rotation:6.9031,x:646.15,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:27.4916,x:581.55,y:491.8,regY:18.3,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:27.4916,x:595.25,y:463.15,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:27.4916,x:603.75,y:445.7,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:7.9071,x:606.8,y:409.9}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1071,x:607.85,y:394.4}},{t:this.ikNode_29,p:{rotation:0.5404,x:636.05,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:41.4047,x:498.3,y:409.15,regX:16.1}},{t:this.ikNode_23,p:{regX:21,rotation:36.2482,x:487.4,y:389.25,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_21,p:{rotation:36.2482,x:484.85,y:371.6,regY:8.1,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_18,p:{regX:31.7,rotation:-8.1652,x:578.45,y:310.3}},{t:this.ikNode_16,p:{rotation:-160.4944,x:671.5,y:208.75,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.2}},{t:this.ikNode_14,p:{rotation:-160.4944,x:689.05,y:199.05,scaleX:0.9997,scaleY:0.9997,regX:14.4,regY:15.1}},{t:this.ikNode_12,p:{regY:13.4,rotation:-160.4944,x:711,y:198.7,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.7,scaleX:0.9995,scaleY:0.9995,rotation:35.1012,x:553.05,y:364.1}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-98.467,x:657.8,y:306.45,regY:-8.1}},{t:this.ikNode_8,p:{regY:23,rotation:-160.4944,x:711.45,y:270.35,regX:21.3,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-30.0401,x:578.45,y:310.05,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4336,x:658.05,y:306.35,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-2.1537,y:295.7,x:618.35,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:2.4707,x:616.8,y:237.35,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:-3.1194,x:614.15,y:259.85,scaleX:0.9997,scaleY:0.9997,regY:15.6}},{t:this.ikNode_47,p:{rotation:-10.0425,x:663.2,y:490.1,regX:25.1,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.3,rotation:8.9322,x:653.75,y:455.15,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.9857,x:649.55,y:437.85}},{t:this.ikNode_41,p:{rotation:6.9004,x:646.15,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:25.3916,x:583.45,y:492.6,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:25.3916,x:596.25,y:463.45,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:25.3916,x:604.05,y:445.65,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:7.4385,x:606.75,y:409.9}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1106,x:607.9,y:394.4}},{t:this.ikNode_29,p:{rotation:0.5431,x:636.05,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:37.8599,x:501.25,y:412.1,regX:16.1}},{t:this.ikNode_23,p:{regX:21,rotation:32.7033,x:489.05,y:392.95,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_21,p:{rotation:32.7033,x:485.45,y:375.35,regY:8,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_18,p:{regX:31.7,rotation:-8.009,x:578.65,y:309.95}},{t:this.ikNode_16,p:{rotation:-161.268,x:671.35,y:210.05,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.3}},{t:this.ikNode_14,p:{rotation:-161.268,x:688.5,y:200.2,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.1}},{t:this.ikNode_12,p:{regY:13.5,rotation:-161.268,x:710.7,y:199.6,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9995,scaleY:0.9995,rotation:31.5557,x:553.25,y:363.75}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-97.5009,x:657.8,y:306.45,regY:-8.1}},{t:this.ikNode_8,p:{regY:23,rotation:-161.268,x:712.05,y:271.25,regX:21.3,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-29.5903,x:578.65,y:309.75,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4336,x:658.05,y:306.35,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-2.0181,y:295.7,x:618.3,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.6716,x:617,y:237.35,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:-2.911,x:614.2,y:259.85,scaleX:0.9996,scaleY:0.9996,regY:15.6}},{t:this.ikNode_47,p:{rotation:-8.5047,x:663.35,y:490.05,regX:25.1,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.3,rotation:8.7446,x:653.75,y:455.25,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.9753,x:649.5,y:437.85}},{t:this.ikNode_41,p:{rotation:6.8975,x:646.1,y:408.85}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:23.2905,x:585.55,y:493.4,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:23.2905,x:597.2,y:463.8,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:23.2905,x:604.25,y:445.85,regY:8.3}},{t:this.ikNode_33,p:{regY:16.4,scaleX:0.9997,scaleY:0.9997,rotation:6.9706,x:606.75,y:409.75}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1151,x:607.85,y:394.4}},{t:this.ikNode_29,p:{rotation:0.5448,x:636.05,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:34.3144,x:504.35,y:414.75,regX:16.1}},{t:this.ikNode_23,p:{regX:21.1,rotation:29.157,x:491.1,y:396.55,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:29.157,x:486.3,y:379.15,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-7.8526,x:578.75,y:309.65}},{t:this.ikNode_16,p:{rotation:-162.043,x:671.1,y:211.7,regX:13.9,scaleX:0.9997,scaleY:0.9997,regY:12.2}},{t:this.ikNode_14,p:{rotation:-162.043,x:688.2,y:201.45,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.1}},{t:this.ikNode_12,p:{regY:13.5,rotation:-162.043,x:710.35,y:200.55,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9995,scaleY:0.9995,rotation:28.0086,x:553.2,y:363.35}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-96.5342,x:657.7,y:306.45,regY:-8.1}},{t:this.ikNode_8,p:{regY:23,rotation:-162.043,x:712.5,y:272.1,regX:21.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-29.1395,x:578.75,y:309.35,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4336,x:658.05,y:306.35,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-1.8824,y:295.7,x:618.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:0.8729,x:617.15,y:237.35,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:-2.7026,x:614.35,y:259.85,scaleX:0.9996,scaleY:0.9996,regY:15.6}},{t:this.ikNode_47,p:{rotation:-6.9664,x:663.5,y:490,regX:25.1,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.3,rotation:8.5571,x:653.7,y:455.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.9646,x:649.55,y:437.85}},{t:this.ikNode_41,p:{rotation:6.8952,x:646.15,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:21.1905,x:587.55,y:494.1,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:21.1905,x:598.05,y:464.05,regX:25.4}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:21.1905,x:604.6,y:445.9,regY:8.3}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:6.5021,x:606.75,y:409.95}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1185,x:607.9,y:394.45}},{t:this.ikNode_29,p:{rotation:0.5474,x:636.05,y:386.7}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.6,scaleX:0.9997,scaleY:0.9997,rotation:30.7682,x:507.7,y:417.3,regX:16.1}},{t:this.ikNode_23,p:{regX:21,rotation:25.6115,x:493.2,y:399.8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:25.6115,x:487.45,y:382.85,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-7.6982,x:578.9,y:309.3}},{t:this.ikNode_16,p:{rotation:-162.818,x:670.85,y:213.1,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.2}},{t:this.ikNode_14,p:{rotation:-162.818,x:687.8,y:202.7,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.1}},{t:this.ikNode_12,p:{regY:13.5,rotation:-162.818,x:709.85,y:201.4,scaleX:0.9997,scaleY:0.9997,regX:10.3}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9995,scaleY:0.9995,rotation:24.4628,x:553.25,y:363}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-95.5668,x:657.8,y:306.45,regY:-8.1}},{t:this.ikNode_8,p:{regY:23,rotation:-162.818,x:713.05,y:273.05,regX:21.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-28.6889,x:579.05,y:309,regY:15.7,regX:15.7}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4336,x:658.05,y:306.35,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-1.7468,y:295.65,x:618.35,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:0.0717,x:617.4,y:237.35,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:-2.4934,x:614.5,y:259.95,scaleX:0.9996,scaleY:0.9996,regY:15.7}},{t:this.ikNode_47,p:{rotation:-5.4286,x:663.55,y:490.05,regX:25.1,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.3,rotation:8.3704,x:653.7,y:455.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.9542,x:649.45,y:437.8}},{t:this.ikNode_41,p:{rotation:6.8923,x:646.15,y:408.85}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:19.089,x:589.8,y:494.75,regY:18.4,regX:24.8}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:19.089,x:599.1,y:464.35,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:19.089,x:604.9,y:445.8,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:6.0331,x:606.75,y:409.9}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.122,x:607.8,y:394.45}},{t:this.ikNode_29,p:{rotation:0.5492,x:636.05,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:27.2225,x:511.1,y:419.7,regX:16.1}},{t:this.ikNode_23,p:{regX:21,rotation:22.065,x:495.65,y:403.1,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:22.065,x:488.8,y:386.45,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-7.5411,x:579.15,y:309}},{t:this.ikNode_16,p:{rotation:-163.5935,x:670.55,y:214.7,regX:14,scaleX:0.9996,scaleY:0.9996,regY:12.2}},{t:this.ikNode_14,p:{rotation:-163.5935,x:687.4,y:203.9,scaleX:0.9996,scaleY:0.9996,regX:14.5,regY:15.2}},{t:this.ikNode_12,p:{regY:13.5,rotation:-163.5935,x:709.45,y:202.45,scaleX:0.9996,scaleY:0.9996,regX:10.2}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9995,scaleY:0.9995,rotation:20.9183,x:553.3,y:362.6}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-94.6018,x:657.75,y:306.45,regY:-8.1}},{t:this.ikNode_8,p:{regY:23,rotation:-163.5935,x:713.6,y:273.95,regX:21.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-28.2384,x:579.15,y:308.7,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.6,rotation:-3.4327,x:657.95,y:306.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-1.612,y:295.75,x:618.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:-0.7207,x:617.6,y:237.35,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:-2.2841,x:614.6,y:260,scaleX:0.9997,scaleY:0.9997,regY:15.7}},{t:this.ikNode_47,p:{rotation:-3.8895,x:663.65,y:490,regX:25.1,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.7,regY:10.3,rotation:8.1823,x:653.85,y:455.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.9435,x:649.5,y:437.85}},{t:this.ikNode_41,p:{rotation:6.8889,x:646.05,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:16.989,x:591.75,y:495.2,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:16.989,x:600.1,y:464.55,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:16.989,x:605.25,y:445.95,regY:8.3}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:5.5646,x:606.75,y:409.9}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1264,x:607.85,y:394.4}},{t:this.ikNode_29,p:{rotation:0.5518,x:636.05,y:386.7}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:23.6767,x:514.75,y:421.8,regX:16.1}},{t:this.ikNode_23,p:{regX:20.9,rotation:18.519,x:498.15,y:406.15,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:18.519,x:490.45,y:390.15,regY:8.1,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-7.3869,x:579.3,y:308.7}},{t:this.ikNode_16,p:{rotation:-164.367,x:670.3,y:216.25,regX:14,scaleX:0.9996,scaleY:0.9996,regY:12.2}},{t:this.ikNode_14,p:{rotation:-164.367,x:687,y:205.25,scaleX:0.9996,scaleY:0.9996,regX:14.5,regY:15.1}},{t:this.ikNode_12,p:{regY:13.5,rotation:-164.367,x:709.15,y:203.5,scaleX:0.9996,scaleY:0.9996,regX:10.2}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9995,scaleY:0.9995,rotation:17.3713,x:553.35,y:362.15}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-93.6355,x:657.8,y:306.4,regY:-8.1}},{t:this.ikNode_8,p:{regY:23,rotation:-164.367,x:714.15,y:274.9,regX:21.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-27.7884,x:579.3,y:308.5,regY:15.8,regX:15.6}},{t:this.ikNode_2,p:{regX:15.6,rotation:-3.4327,x:657.95,y:306.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-1.4764,y:295.75,x:618.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:-1.5203,x:617.85,y:237.35,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:-2.075,x:614.6,y:259.8,scaleX:0.9996,scaleY:0.9996,regY:15.6}},{t:this.ikNode_47,p:{rotation:-2.3524,x:663.7,y:489.95,regX:25.1,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.3,rotation:7.9949,x:653.75,y:455.1,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.933,x:649.45,y:437.85}},{t:this.ikNode_41,p:{rotation:6.8863,x:646.1,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:14.8881,x:593.8,y:495.7,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:14.8881,x:601.05,y:464.65,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:14.8881,x:605.55,y:445.75,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:5.0965,x:606.75,y:409.9}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1299,x:607.8,y:394.4}},{t:this.ikNode_29,p:{rotation:0.5536,x:636.05,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:20.1307,x:518.45,y:423.6,regX:16}},{t:this.ikNode_23,p:{regX:21,rotation:14.9736,x:501.15,y:409.1,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:14.9736,x:492.25,y:393.5,regY:8.1,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-7.2298,x:579.45,y:308.4}},{t:this.ikNode_16,p:{rotation:-165.1422,x:670.05,y:217.65,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.3}},{t:this.ikNode_14,p:{rotation:-165.1422,x:686.6,y:206.65,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.1}},{t:this.ikNode_12,p:{regY:13.5,rotation:-165.1422,x:708.6,y:204.5,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9995,scaleY:0.9995,rotation:13.8256,x:553.35,y:361.75}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-92.6684,x:657.75,y:306.45,regY:-8.1}},{t:this.ikNode_8,p:{regY:22.9,rotation:-165.1422,x:714.6,y:275.9,regX:21.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-27.338,x:579.45,y:308.15,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.6,rotation:-3.4327,x:657.95,y:306.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-1.34,y:295.7,x:618.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:-2.3192,x:618,y:237.35,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:-1.8658,x:614.75,y:259.85,scaleX:0.9996,scaleY:0.9996,regY:15.6}},{t:this.ikNode_47,p:{rotation:-0.8142,x:663.95,y:489.9,regX:25.1,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.3,rotation:7.8068,x:653.75,y:455.15,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.9234,x:649.5,y:437.8}},{t:this.ikNode_41,p:{rotation:6.8835,x:646.1,y:408.85}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:12.7873,x:596.1,y:496.15,regY:18.4,regX:24.8}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:12.7873,x:602,y:464.85,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:12.7873,x:605.85,y:445.8,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:4.6277,x:606.75,y:409.9}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1334,x:607.8,y:394.45}},{t:this.ikNode_29,p:{rotation:0.5553,x:636.05,y:386.7}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:16.5858,x:522.4,y:425.3,regX:16.1}},{t:this.ikNode_23,p:{regX:21,rotation:11.4283,x:504.2,y:411.95,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:11.4283,x:494.4,y:396.95,regY:8.1,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-7.0748,x:579.7,y:308.15}},{t:this.ikNode_16,p:{rotation:-165.9171,x:669.8,y:219.15,regX:14,scaleX:0.9996,scaleY:0.9996,regY:12.3}},{t:this.ikNode_14,p:{rotation:-165.9171,x:686.15,y:207.9,scaleX:0.9996,scaleY:0.9996,regX:14.5,regY:15.1}},{t:this.ikNode_12,p:{regY:13.5,rotation:-165.9171,x:708.05,y:205.55,scaleX:0.9996,scaleY:0.9996,regX:10.3}},{t:this.ikNode_10,p:{regX:56.7,scaleX:0.9995,scaleY:0.9995,rotation:10.2803,x:553.25,y:361.35}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-91.7022,x:657.75,y:306.45,regY:-8.1}},{t:this.ikNode_8,p:{regY:23,rotation:-165.9171,x:715.2,y:276.8,regX:21.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-26.8866,x:579.7,y:307.8,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.6,rotation:-3.4327,x:657.95,y:306.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-1.2044,y:295.7,x:618.45,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:-3.1178,x:618.15,y:237.35,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:-1.6567,x:614.9,y:259.85,scaleX:0.9996,scaleY:0.9996,regY:15.6}},{t:this.ikNode_47,p:{rotation:0.7189,x:664.15,y:489.9,regX:25.2,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.3,rotation:7.6199,x:653.75,y:455.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.9118,x:649.55,y:437.85}},{t:this.ikNode_41,p:{rotation:6.881,x:646.05,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:10.6873,x:598.05,y:496.45,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:10.6873,x:603,y:465,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:10.6873,x:606.1,y:445.8,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:4.1585,x:606.75,y:409.9}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1377,x:607.8,y:394.45}},{t:this.ikNode_29,p:{rotation:0.5579,x:636,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:13.0389,x:526.5,y:426.75,regX:16.1}},{t:this.ikNode_23,p:{regX:21,rotation:7.8809,x:507.45,y:414.5,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:7.8809,x:496.8,y:399.95,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-6.9187,x:579.8,y:307.85}},{t:this.ikNode_16,p:{rotation:-166.6913,x:669.5,y:220.9,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.2}},{t:this.ikNode_14,p:{rotation:-166.6913,x:685.75,y:209.2,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.2}},{t:this.ikNode_12,p:{regY:13.5,rotation:-166.6913,x:707.7,y:206.6,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9995,scaleY:0.9995,rotation:6.7331,x:553.4,y:361}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-90.7356,x:657.75,y:306.4,regY:-8.1}},{t:this.ikNode_8,p:{regY:22.9,rotation:-166.6913,x:715.7,y:277.9,regX:21.3,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-26.4367,x:579.8,y:307.5,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.6,rotation:-3.4327,x:657.95,y:306.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-1.0688,y:295.7,x:618.45,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:-3.9178,x:618.35,y:237.3,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:-1.4476,x:615,y:259.8,scaleX:0.9996,scaleY:0.9996,regY:15.6}},{t:this.ikNode_47,p:{rotation:2.2569,x:664.05,y:489.95,regX:25.1,scaleX:0.9997,scaleY:0.9997,regY:17.7}},{t:this.ikNode_45,p:{regX:20.6,regY:10.3,rotation:7.4318,x:653.7,y:455.15,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.9013,x:649.5,y:437.8}},{t:this.ikNode_41,p:{rotation:6.8782,x:646.1,y:408.85}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:8.5866,x:600.25,y:496.7,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:8.5866,x:604,y:465.1,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:8.5866,x:606.45,y:445.8,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:3.6904,x:606.75,y:409.85}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1412,x:607.85,y:394.45}},{t:this.ikNode_29,p:{rotation:0.5597,x:636.05,y:386.7}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:9.4928,x:530.6,y:427.9,regX:16.1}},{t:this.ikNode_23,p:{regX:21.1,rotation:4.3348,x:510.95,y:416.85,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:4.3348,x:499.3,y:402.95,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-6.7638,x:580,y:307.45}},{t:this.ikNode_16,p:{rotation:-167.4657,x:669.2,y:222.5,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.2}},{t:this.ikNode_14,p:{rotation:-167.4657,x:685.3,y:210.6,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.2}},{t:this.ikNode_12,p:{regY:13.4,rotation:-167.4657,x:707.15,y:207.8,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9995,scaleY:0.9995,rotation:3.1881,x:553.45,y:360.6}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-89.7735,x:657.75,y:306.4,regY:-8.1}},{t:this.ikNode_8,p:{regY:23,rotation:-167.4657,x:716.15,y:278.75,regX:21.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-25.9853,x:580,y:307.15,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.6,rotation:-3.4327,x:657.95,y:306.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-0.9341,y:295.75,x:618.45,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:-4.717,x:618.55,y:237.35,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:-1.2376,x:615.05,y:259.95,scaleX:0.9997,scaleY:0.9997,regY:15.7}},{t:this.ikNode_47,p:{rotation:3.7948,x:664.35,y:489.8,regX:25.2,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.3,rotation:7.245,x:653.75,y:455.15,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.8906,x:649.55,y:437.75}},{t:this.ikNode_41,p:{rotation:6.8756,x:646.1,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:6.4862,x:602.5,y:496.9,regY:18.4,regX:24.8}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:6.4862,x:605,y:465.15,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:6.4862,x:606.65,y:445.8,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:3.2225,x:606.7,y:409.9}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1449,x:607.8,y:394.4}},{t:this.ikNode_29,p:{rotation:0.5623,x:636.05,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:5.9471,x:534.9,y:428.7,regX:16.1}},{t:this.ikNode_23,p:{regX:21,rotation:0.7897,x:514.5,y:418.95,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:0.7897,x:502.15,y:406.05,regY:8.1,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-6.6078,x:580.2,y:307.15}},{t:this.ikNode_16,p:{rotation:-168.2405,x:668.85,y:224.1,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.2}},{t:this.ikNode_14,p:{rotation:-168.2405,x:684.85,y:212,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.2}},{t:this.ikNode_12,p:{regY:13.5,rotation:-168.2405,x:706.65,y:208.8,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.7,scaleX:0.9995,scaleY:0.9995,rotation:-0.3534,x:553.35,y:360.25}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-88.807,x:657.8,y:306.45,regY:-8.1}},{t:this.ikNode_8,p:{regY:23,rotation:-168.2405,x:716.6,y:279.75,regX:21.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-25.5354,x:580.15,y:306.85,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.6,rotation:-3.4327,x:657.95,y:306.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-0.7994,y:295.75,x:618.5,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:-5.516,x:618.75,y:237.45,regY:100.8}},{t:this.ikNode_51,p:{regX:52,rotation:-1.0303,x:615.15,y:259.8,scaleX:0.9996,scaleY:0.9996,regY:15.6}},{t:this.ikNode_47,p:{rotation:5.3329,x:664.3,y:489.75,regX:25.1,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.7,regY:10.3,rotation:7.0572,x:653.85,y:455.1,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.8802,x:649.5,y:437.8}},{t:this.ikNode_41,p:{rotation:6.8731,x:646.1,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:4.3848,x:604.55,y:497,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:4.3848,x:605.85,y:465.2,regX:25.4}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:4.3848,x:606.85,y:445.75,regY:8.2}},{t:this.ikNode_33,p:{regY:16.6,scaleX:0.9997,scaleY:0.9997,rotation:2.7532,x:606.7,y:410}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1483,x:607.8,y:394.4}},{t:this.ikNode_29,p:{rotation:0.5641,x:636.05,y:386.7}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:2.4013,x:539.3,y:429.35,regX:16.1}},{t:this.ikNode_23,p:{regX:20.9,rotation:-2.7524,x:518.1,y:420.9,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:-2.7524,x:505.05,y:408.75,regY:8.1,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-6.4521,x:580.4,y:306.85}},{t:this.ikNode_16,p:{rotation:-169.0166,x:668.55,y:225.8,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.2}},{t:this.ikNode_14,p:{rotation:-169.0166,x:684.35,y:213.55,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.1}},{t:this.ikNode_12,p:{regY:13.5,rotation:-169.0166,x:706.15,y:209.95,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9996,scaleY:0.9996,rotation:-3.9005,x:553.55,y:359.85}},{t:this.ikNode_6,p:{scaleX:0.9997,scaleY:0.9997,rotation:-87.8402,x:657.75,y:306.4,regY:-8.1}},{t:this.ikNode_8,p:{regY:22.9,rotation:-169.0166,x:717.05,y:280.85,regX:21.3,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-25.0851,x:580.35,y:306.55,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.6,rotation:-3.4318,x:657.95,y:306.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-0.6638,y:295.75,x:618.5,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:-6.3162,x:618.85,y:237.35,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:-0.8213,x:615.25,y:259.8,scaleX:0.9996,scaleY:0.9996,regY:15.6}},{t:this.ikNode_47,p:{rotation:6.8703,x:664.4,y:489.75,regX:25.1,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.2,rotation:6.8703,x:653.85,y:454.95,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.8703,x:649.55,y:437.75}},{t:this.ikNode_41,p:{rotation:6.8703,x:646.1,y:408.85}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2857,x:606.7,y:497.05,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2857,x:607,y:465.15,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2857,x:607.2,y:445.8,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:2.2857,x:606.8,y:409.85}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1527,x:607.75,y:394.4}},{t:this.ikNode_29,p:{rotation:0.5667,x:636.05,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:-1.1396,x:543.55,y:429.8,regX:16.1}},{t:this.ikNode_23,p:{regX:20.9,rotation:-6.297,x:522,y:422.55,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:-6.297,x:508.2,y:411.15,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-6.297,x:580.6,y:306.65}},{t:this.ikNode_16,p:{rotation:-169.7907,x:668.25,y:227.45,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.2}},{t:this.ikNode_14,p:{rotation:-169.7907,x:683.95,y:215,scaleX:0.9997,scaleY:0.9997,regX:14.4,regY:15.1}},{t:this.ikNode_12,p:{regY:13.5,rotation:-169.7907,x:705.65,y:211.1,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9996,scaleY:0.9996,rotation:-7.446,x:553.6,y:359.5}},{t:this.ikNode_6,p:{scaleX:0.9997,scaleY:0.9997,rotation:-86.8745,x:657.75,y:306.4,regY:-8.1}},{t:this.ikNode_8,p:{regY:23.1,rotation:-169.7907,x:717.5,y:281.6,regX:21.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-24.635,x:580.55,y:306.25,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.6,rotation:-3.4318,x:657.95,y:306.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-0.635,y:295.75,x:618.5,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:-5.4958,x:618.95,y:237.3,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:-0.7609,x:615.3,y:259.8,scaleX:0.9996,scaleY:0.9996,regY:15.6}},{t:this.ikNode_47,p:{rotation:5.3434,x:664.35,y:489.8,regX:25.1,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.7,regY:10.3,rotation:7.0607,x:653.85,y:455.15,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.8712,x:649.55,y:437.75}},{t:this.ikNode_41,p:{rotation:6.8712,x:646.1,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2857,x:606.7,y:497.05,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2857,x:607,y:465.15,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2857,x:607.2,y:445.8,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:2.2857,x:606.8,y:409.85}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1527,x:607.75,y:394.45}},{t:this.ikNode_29,p:{rotation:0.5667,x:636.05,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:-1.1396,x:543.55,y:429.8,regX:16.1}},{t:this.ikNode_23,p:{regX:20.9,rotation:-6.297,x:522,y:422.55,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:-6.297,x:508.2,y:411.15,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-6.297,x:580.6,y:306.65}},{t:this.ikNode_16,p:{rotation:-169.0139,x:668.55,y:225.8,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.2}},{t:this.ikNode_14,p:{rotation:-169.0139,x:684.35,y:213.55,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.1}},{t:this.ikNode_12,p:{regY:13.5,rotation:-169.0139,x:706.15,y:210,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9996,scaleY:0.9996,rotation:-7.446,x:553.6,y:359.5}},{t:this.ikNode_6,p:{scaleX:0.9997,scaleY:0.9997,rotation:-87.8428,x:657.7,y:306.4,regY:-8.1}},{t:this.ikNode_8,p:{regY:22.9,rotation:-169.0139,x:717.1,y:280.85,regX:21.3,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-24.635,x:580.55,y:306.25,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.6,rotation:-3.4327,x:657.95,y:306.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-0.6052,y:295.75,x:618.5,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:-4.6766,x:619,y:237.3,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:-0.7006,x:615.35,y:259.8,scaleX:0.9997,scaleY:0.9997,regY:15.6}},{t:this.ikNode_47,p:{rotation:3.8151,x:664.35,y:489.8,regX:25.2,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.3,rotation:7.2529,x:653.75,y:455.1,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.8712,x:649.55,y:437.75}},{t:this.ikNode_41,p:{rotation:6.8712,x:646.1,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2866,x:606.7,y:497.05,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2866,x:607.05,y:465.15,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2866,x:607.2,y:445.8,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:2.2866,x:606.8,y:409.85}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1528,x:607.75,y:394.45}},{t:this.ikNode_29,p:{rotation:0.5667,x:636.05,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:-1.1396,x:543.55,y:429.8,regX:16.1}},{t:this.ikNode_23,p:{regX:20.9,rotation:-6.2979,x:522,y:422.5,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:-6.2979,x:508.25,y:411.1,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-6.2979,x:580.6,y:306.65}},{t:this.ikNode_16,p:{rotation:-168.2352,x:668.9,y:224.15,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.2}},{t:this.ikNode_14,p:{rotation:-168.2352,x:684.85,y:212.05,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.2}},{t:this.ikNode_12,p:{regY:13.5,rotation:-168.2352,x:706.65,y:208.85,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9996,scaleY:0.9996,rotation:-7.446,x:553.6,y:359.5}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-88.8131,x:657.8,y:306.45,regY:-8.1}},{t:this.ikNode_8,p:{regY:23,rotation:-168.2352,x:716.6,y:279.75,regX:21.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-24.635,x:580.55,y:306.25,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.6,rotation:-3.4327,x:657.95,y:306.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-0.5755,y:295.75,x:618.5,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:-3.8565,x:619.15,y:237.45,regY:100.8}},{t:this.ikNode_51,p:{regX:52,rotation:-0.6402,x:615.35,y:259.75,scaleX:0.9996,scaleY:0.9996,regY:15.6}},{t:this.ikNode_47,p:{rotation:2.2876,x:664.1,y:489.9,regX:25.1,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.3,rotation:7.4434,x:653.7,y:455.1,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.8712,x:649.55,y:437.75}},{t:this.ikNode_41,p:{rotation:6.8712,x:646.1,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2866,x:606.7,y:497.05,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2866,x:607.05,y:465.2,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2866,x:607.2,y:445.8,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:2.2866,x:606.8,y:409.85}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1528,x:607.75,y:394.45}},{t:this.ikNode_29,p:{rotation:0.5676,x:636.05,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:-1.1405,x:543.6,y:429.8,regX:16.1}},{t:this.ikNode_23,p:{regX:20.9,rotation:-6.2979,x:522,y:422.5,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:-6.2979,x:508.25,y:411.1,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-6.2979,x:580.6,y:306.65}},{t:this.ikNode_16,p:{rotation:-167.4595,x:669.2,y:222.45,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.2}},{t:this.ikNode_14,p:{rotation:-167.4595,x:685.3,y:210.6,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.2}},{t:this.ikNode_12,p:{regY:13.4,rotation:-167.4595,x:707.2,y:207.75,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9996,scaleY:0.9996,rotation:-7.446,x:553.65,y:359.5}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-89.784,x:657.75,y:306.45,regY:-8.1}},{t:this.ikNode_8,p:{regY:23,rotation:-167.4595,x:716.1,y:278.75,regX:21.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-24.635,x:580.55,y:306.25,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.6,rotation:-3.4327,x:657.95,y:306.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-0.5466,y:295.8,x:618.5,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:-3.0364,x:619.15,y:237.3,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:-0.579,x:615.4,y:259.85,scaleX:0.9997,scaleY:0.9997,regY:15.7}},{t:this.ikNode_47,p:{rotation:0.7609,x:664,y:489.9,regX:25.1,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.3,rotation:7.6357,x:653.75,y:455.15,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.8712,x:649.55,y:437.75}},{t:this.ikNode_41,p:{rotation:6.8712,x:646.1,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2866,x:606.7,y:497.05,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2866,x:607.05,y:465.2,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2866,x:607.2,y:445.8,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:2.2866,x:606.8,y:409.85}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1537,x:607.75,y:394.45}},{t:this.ikNode_29,p:{rotation:0.5676,x:636.05,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:-1.1405,x:543.6,y:429.8,regX:16.1}},{t:this.ikNode_23,p:{regX:20.9,rotation:-6.2979,x:522,y:422.5,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:-6.2979,x:508.25,y:411.1,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-6.2979,x:580.6,y:306.65}},{t:this.ikNode_16,p:{rotation:-166.6833,x:669.5,y:220.95,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.2}},{t:this.ikNode_14,p:{rotation:-166.6833,x:685.75,y:209.15,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.2}},{t:this.ikNode_12,p:{regY:13.5,rotation:-166.6833,x:707.7,y:206.55,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9996,scaleY:0.9996,rotation:-7.446,x:553.65,y:359.5}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-90.7469,x:657.8,y:306.4,regY:-8.1}},{t:this.ikNode_8,p:{regY:22.9,rotation:-166.6833,x:715.75,y:277.85,regX:21.3,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-24.635,x:580.55,y:306.25,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4336,x:658.05,y:306.35,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-0.5169,y:295.75,x:618.55,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:-2.2177,x:619.15,y:237.35,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:-0.5186,x:615.35,y:259.9,scaleX:0.9996,scaleY:0.9996,regY:15.7}},{t:this.ikNode_47,p:{rotation:-0.7626,x:664,y:489.95,regX:25.2,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.3,rotation:7.8262,x:653.8,y:455.15,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.8713,x:649.55,y:437.75}},{t:this.ikNode_41,p:{rotation:6.8713,x:646.1,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2875,x:606.7,y:497.05,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2875,x:607.05,y:465.2,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2875,x:607.2,y:445.8,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:2.2875,x:606.8,y:409.85}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1537,x:607.75,y:394.45}},{t:this.ikNode_29,p:{rotation:0.5676,x:636.05,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:-1.1413,x:543.6,y:429.8,regX:16.1}},{t:this.ikNode_23,p:{regX:20.9,rotation:-6.2996,x:522,y:422.5,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:-6.2996,x:508.25,y:411.1,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-6.2996,x:580.55,y:306.6}},{t:this.ikNode_16,p:{rotation:-165.9054,x:669.7,y:219.25,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.2}},{t:this.ikNode_14,p:{rotation:-165.9054,x:686.3,y:207.95,scaleX:0.9997,scaleY:0.9997,regX:14.4,regY:15.1}},{t:this.ikNode_12,p:{regY:13.5,rotation:-165.9054,x:708.05,y:205.55,scaleX:0.9997,scaleY:0.9997,regX:10.3}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9996,scaleY:0.9996,rotation:-7.446,x:553.65,y:359.5}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-91.7179,x:657.7,y:306.45,regY:-8.1}},{t:this.ikNode_8,p:{regY:23,rotation:-165.9054,x:715.15,y:276.8,regX:21.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-24.6354,x:580.55,y:306.3,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4336,x:658.05,y:306.35,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-0.4871,y:295.7,x:618.45,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:-1.3969,x:619.2,y:237.4,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:-0.4583,x:615.4,y:259.8,scaleX:0.9997,scaleY:0.9997,regY:15.6}},{t:this.ikNode_47,p:{rotation:-2.2911,x:663.75,y:490,regX:25.1,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.3,rotation:8.0169,x:653.8,y:455.15,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.8713,x:649.55,y:437.75}},{t:this.ikNode_41,p:{rotation:6.8713,x:646.1,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2875,x:606.7,y:497.05,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2875,x:607.05,y:465.2,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2875,x:607.2,y:445.8,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:2.2875,x:606.8,y:409.85}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1537,x:607.75,y:394.45}},{t:this.ikNode_29,p:{rotation:0.5684,x:636.05,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:-1.1413,x:543.6,y:429.8,regX:16.1}},{t:this.ikNode_23,p:{regX:20.9,rotation:-6.2996,x:522,y:422.5,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:-6.2996,x:508.25,y:411.1,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-6.2996,x:580.55,y:306.6}},{t:this.ikNode_16,p:{rotation:-165.1286,x:670,y:217.6,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.3}},{t:this.ikNode_14,p:{rotation:-165.1286,x:686.55,y:206.6,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.1}},{t:this.ikNode_12,p:{regY:13.5,rotation:-165.1286,x:708.6,y:204.5,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9996,scaleY:0.9996,rotation:-7.446,x:553.65,y:359.5}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-92.6877,x:657.7,y:306.45,regY:-8.1}},{t:this.ikNode_8,p:{regY:23,rotation:-165.1286,x:714.65,y:275.85,regX:21.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-24.6354,x:580.55,y:306.3,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4336,x:658.05,y:306.35,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-0.4583,y:295.75,x:618.5,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:-0.5764,x:619.25,y:237.35,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:-0.3979,x:615.45,y:259.85,scaleX:0.9996,scaleY:0.9996,regY:15.6}},{t:this.ikNode_47,p:{rotation:-3.8177,x:663.65,y:490,regX:25.1,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.7,regY:10.3,rotation:8.2095,x:653.9,y:455.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.8713,x:649.55,y:437.75}},{t:this.ikNode_41,p:{rotation:6.8713,x:646.1,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2875,x:606.7,y:497.05,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2875,x:607.05,y:465.2,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2875,x:607.2,y:445.8,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:2.2875,x:606.8,y:409.85}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1537,x:607.75,y:394.45}},{t:this.ikNode_29,p:{rotation:0.5684,x:636.05,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:-1.1413,x:543.6,y:429.8,regX:16.1}},{t:this.ikNode_23,p:{regX:20.9,rotation:-6.2996,x:522,y:422.5,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:-6.2996,x:508.25,y:411.1,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-6.2996,x:580.55,y:306.6}},{t:this.ikNode_16,p:{rotation:-164.3517,x:670.3,y:216.2,regX:14,scaleX:0.9996,scaleY:0.9996,regY:12.2}},{t:this.ikNode_14,p:{rotation:-164.3517,x:687,y:205.3,scaleX:0.9996,scaleY:0.9996,regX:14.5,regY:15.1}},{t:this.ikNode_12,p:{regY:13.5,rotation:-164.3517,x:709.1,y:203.45,scaleX:0.9996,scaleY:0.9996,regX:10.2}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9996,scaleY:0.9996,rotation:-7.446,x:553.65,y:359.5}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-93.6565,x:657.8,y:306.4,regY:-8.1}},{t:this.ikNode_8,p:{regY:23,rotation:-164.3517,x:714.15,y:274.9,regX:21.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-24.6354,x:580.55,y:306.35,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4345,x:658.05,y:306.35,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-0.4285,y:295.75,x:618.55,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:0.2362,x:619.25,y:237.4,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:-0.3376,x:615.45,y:259.85,scaleX:0.9997,scaleY:0.9997,regY:15.6}},{t:this.ikNode_47,p:{rotation:-5.3469,x:663.65,y:489.95,regX:25.2,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.3,rotation:8.3996,x:653.75,y:455.15,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.8713,x:649.55,y:437.75}},{t:this.ikNode_41,p:{rotation:6.8713,x:646.1,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2883,x:606.7,y:497.05,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2883,x:607.05,y:465.2,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2883,x:607.2,y:445.8,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:2.2883,x:606.8,y:409.85}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1537,x:607.75,y:394.45}},{t:this.ikNode_29,p:{rotation:0.5684,x:636.05,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:-1.1422,x:543.65,y:429.8,regX:16.1}},{t:this.ikNode_23,p:{regX:20.9,rotation:-6.2996,x:522,y:422.5,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:-6.2996,x:508.25,y:411.1,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-6.2996,x:580.55,y:306.6}},{t:this.ikNode_16,p:{rotation:-163.5755,x:670.6,y:214.65,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.2}},{t:this.ikNode_14,p:{rotation:-163.5755,x:687.4,y:203.85,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.2}},{t:this.ikNode_12,p:{regY:13.5,rotation:-163.5755,x:709.45,y:202.4,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9996,scaleY:0.9996,rotation:-7.446,x:553.65,y:359.5}},{t:this.ikNode_6,p:{scaleX:0.9997,scaleY:0.9997,rotation:-94.6254,x:657.8,y:306.4,regY:-8.1}},{t:this.ikNode_8,p:{regY:23,rotation:-163.5755,x:713.6,y:273.95,regX:21.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-24.6354,x:580.55,y:306.35,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4345,x:658.05,y:306.35,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-0.3988,y:295.75,x:618.55,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.0575,x:619.35,y:237.4,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:-0.2772,x:615.55,y:259.75,scaleX:0.9996,scaleY:0.9996,regY:15.6}},{t:this.ikNode_47,p:{rotation:-6.8731,x:663.4,y:490,regX:25.1,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.3,rotation:8.5916,x:653.8,y:455.25,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.8731,x:649.55,y:437.75}},{t:this.ikNode_41,p:{rotation:6.8731,x:646.1,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2883,x:606.7,y:497.05,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2883,x:607.05,y:465.2,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2883,x:607.2,y:445.8,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:2.2883,x:606.8,y:409.85}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1537,x:607.75,y:394.45}},{t:this.ikNode_29,p:{rotation:0.5693,x:636.05,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:-1.1422,x:543.65,y:429.8,regX:16.1}},{t:this.ikNode_23,p:{regX:20.9,rotation:-6.2996,x:522,y:422.5,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:-6.2996,x:508.25,y:411.1,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-6.2996,x:580.55,y:306.6}},{t:this.ikNode_16,p:{rotation:-162.7981,x:670.85,y:213.05,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.2}},{t:this.ikNode_14,p:{rotation:-162.7981,x:687.8,y:202.65,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.1}},{t:this.ikNode_12,p:{regY:13.5,rotation:-162.7981,x:709.9,y:201.45,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9996,scaleY:0.9996,rotation:-7.446,x:553.65,y:359.5}},{t:this.ikNode_6,p:{scaleX:0.9997,scaleY:0.9997,rotation:-95.5957,x:657.8,y:306.45,regY:-8.1}},{t:this.ikNode_8,p:{regY:22.9,rotation:-162.7981,x:713,y:273.1,regX:21.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-24.6354,x:580.55,y:306.35,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4345,x:658.05,y:306.35,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-0.3691,y:295.75,x:618.55,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.8773,x:619.35,y:237.4,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:-0.2169,x:615.55,y:259.75,scaleX:0.9997,scaleY:0.9997,regY:15.6}},{t:this.ikNode_47,p:{rotation:-8.4022,x:663.3,y:490.05,regX:25.1,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.7,regY:10.3,rotation:8.7827,x:653.9,y:455.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.8731,x:649.55,y:437.75}},{t:this.ikNode_41,p:{rotation:6.8731,x:646.1,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2883,x:606.7,y:497.05,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2883,x:607.05,y:465.2,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2883,x:607.2,y:445.8,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:2.2883,x:606.8,y:409.85}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1537,x:607.75,y:394.45}},{t:this.ikNode_29,p:{rotation:0.5693,x:636.05,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:-1.1422,x:543.65,y:429.8,regX:16.1}},{t:this.ikNode_23,p:{regX:20.9,rotation:-6.2996,x:522,y:422.5,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:-6.2996,x:508.25,y:411.1,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-6.2996,x:580.55,y:306.6}},{t:this.ikNode_16,p:{rotation:-162.0208,x:671.15,y:211.65,regX:13.9,scaleX:0.9997,scaleY:0.9997,regY:12.2}},{t:this.ikNode_14,p:{rotation:-162.0208,x:688.2,y:201.4,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.1}},{t:this.ikNode_12,p:{regY:13.5,rotation:-162.0208,x:710.35,y:200.45,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9996,scaleY:0.9996,rotation:-7.446,x:553.65,y:359.5}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-96.565,x:657.75,y:306.5,regY:-8.1}},{t:this.ikNode_8,p:{regY:23,rotation:-162.0208,x:712.45,y:272.1,regX:21.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-24.6354,x:580.55,y:306.35,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4345,x:658.05,y:306.35,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-0.3402,y:295.75,x:618.55,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:2.6966,x:619.4,y:237.45,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:-0.1566,x:615.5,y:259.8,scaleX:0.9996,scaleY:0.9996,regY:15.6}},{t:this.ikNode_47,p:{rotation:-9.9289,x:663.2,y:490.1,regX:25.1,scaleX:0.9996,scaleY:0.9996,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.2,rotation:8.9739,x:653.8,y:455.1,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.8731,x:649.55,y:437.75}},{t:this.ikNode_41,p:{rotation:6.8731,x:646.1,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2883,x:606.7,y:497.05,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2883,x:607.05,y:465.2,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2883,x:607.25,y:445.8,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:2.2883,x:606.8,y:409.85}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1537,x:607.75,y:394.45}},{t:this.ikNode_29,p:{rotation:0.5693,x:636.05,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:-1.1422,x:543.65,y:429.8,regX:16.1}},{t:this.ikNode_23,p:{regX:20.9,rotation:-6.2996,x:522,y:422.5,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:-6.2996,x:508.25,y:411.1,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-6.2996,x:580.55,y:306.6}},{t:this.ikNode_16,p:{rotation:-161.244,x:671.35,y:210.05,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.3}},{t:this.ikNode_14,p:{rotation:-161.244,x:688.6,y:200.15,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.1}},{t:this.ikNode_12,p:{regY:13.5,rotation:-161.244,x:710.65,y:199.55,scaleX:0.9997,scaleY:0.9997,regX:10.3}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9996,scaleY:0.9996,rotation:-7.446,x:553.65,y:359.5}},{t:this.ikNode_6,p:{scaleX:0.9997,scaleY:0.9997,rotation:-97.5352,x:657.75,y:306.45,regY:-8.1}},{t:this.ikNode_8,p:{regY:22.9,rotation:-161.244,x:711.95,y:271.25,regX:21.3,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-24.6354,x:580.55,y:306.35,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4345,x:658.05,y:306.35,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-0.3105,y:295.75,x:618.55,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:3.5156,x:619.55,y:237.45,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:-0.0962,x:615.6,y:259.8,scaleX:0.9996,scaleY:0.9996,regY:15.6}},{t:this.ikNode_47,p:{rotation:-11.458,x:663.15,y:490.1,regX:25.1,scaleX:0.9996,scaleY:0.9996,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.3,rotation:9.1643,x:653.8,y:455.25,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.8731,x:649.55,y:437.75}},{t:this.ikNode_41,p:{rotation:6.8731,x:646.1,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2883,x:606.7,y:497.05,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2883,x:607.05,y:465.2,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2883,x:607.25,y:445.8,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:2.2883,x:606.8,y:409.85}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1537,x:607.75,y:394.45}},{t:this.ikNode_29,p:{rotation:0.5693,x:636.05,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:-1.1422,x:543.65,y:429.8,regX:16.1}},{t:this.ikNode_23,p:{regX:20.9,rotation:-6.2996,x:522,y:422.5,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:-6.2996,x:508.25,y:411.1,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-6.2996,x:580.55,y:306.6}},{t:this.ikNode_16,p:{rotation:-160.4676,x:671.55,y:208.65,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.2}},{t:this.ikNode_14,p:{rotation:-160.4676,x:689,y:198.85,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.2}},{t:this.ikNode_12,p:{regY:13.5,rotation:-160.4676,x:711.05,y:198.7,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9996,scaleY:0.9996,rotation:-7.446,x:553.65,y:359.5}},{t:this.ikNode_6,p:{scaleX:0.9997,scaleY:0.9997,rotation:-98.5033,x:657.9,y:306.45,regY:-8}},{t:this.ikNode_8,p:{regY:23,rotation:-160.4676,x:711.4,y:270.35,regX:21.3,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-24.6354,x:580.6,y:306.35,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4345,x:658.05,y:306.35,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-0.2807,y:295.8,x:618.6,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:4.3361,x:619.55,y:237.4,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:-0.035,x:615.55,y:259.75,scaleX:0.9996,scaleY:0.9996,regY:15.6}},{t:this.ikNode_47,p:{rotation:-12.9856,x:662.95,y:490.15,regX:25.1,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.3,rotation:9.3558,x:653.75,y:455.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.8731,x:649.5,y:437.75}},{t:this.ikNode_41,p:{rotation:6.8731,x:646.15,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.7,y:497.05,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.05,y:465.15,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.25,y:445.8,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.8,y:409.85}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1537,x:607.75,y:394.45}},{t:this.ikNode_29,p:{rotation:0.5693,x:636.05,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:-1.1422,x:543.65,y:429.8,regX:16.1}},{t:this.ikNode_23,p:{regX:20.9,rotation:-6.3008,x:522,y:422.5,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:-6.3008,x:508.25,y:411.1,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-6.3008,x:580.55,y:306.6}},{t:this.ikNode_16,p:{rotation:-159.6907,x:671.7,y:207.25,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.2}},{t:this.ikNode_14,p:{rotation:-159.6907,x:689.3,y:197.7,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.1}},{t:this.ikNode_12,p:{regY:13.5,rotation:-159.6907,x:711.45,y:197.7,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9996,scaleY:0.9996,rotation:-7.446,x:553.65,y:359.55}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-99.473,x:657.75,y:306.45,regY:-8.1}},{t:this.ikNode_8,p:{regY:23,rotation:-159.6907,x:710.8,y:269.4,regX:21.3,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-24.6354,x:580.6,y:306.35,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4353,x:658.05,y:306.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-0.2519,y:295.8,x:618.6,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:5.155,x:619.6,y:237.45,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:0.0201,x:615.6,y:259.75,scaleX:0.9996,scaleY:0.9996,regY:15.6}},{t:this.ikNode_47,p:{rotation:-14.5127,x:662.85,y:490.2,regX:25.1,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.3,rotation:9.5473,x:653.75,y:455.2,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.8731,x:649.55,y:437.75}},{t:this.ikNode_41,p:{rotation:6.8731,x:646.15,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.7,y:497.05,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.05,y:465.15,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.25,y:445.8,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.8,y:409.85}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1545,x:607.75,y:394.45}},{t:this.ikNode_29,p:{rotation:0.5702,x:636.05,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:-1.1431,x:543.65,y:429.8,regX:16.1}},{t:this.ikNode_23,p:{regX:20.9,rotation:-6.3017,x:522,y:422.5,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:-6.3017,x:508.25,y:411.1,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-6.3017,x:580.55,y:306.6}},{t:this.ikNode_16,p:{rotation:-158.9155,x:671.95,y:205.85,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.2}},{t:this.ikNode_14,p:{rotation:-158.9155,x:689.65,y:196.6,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.1}},{t:this.ikNode_12,p:{regY:13.5,rotation:-158.9155,x:711.75,y:196.9,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9996,scaleY:0.9996,rotation:-7.446,x:553.65,y:359.55}},{t:this.ikNode_6,p:{scaleX:0.9997,scaleY:0.9997,rotation:-100.4442,x:657.9,y:306.4,regY:-8}},{t:this.ikNode_8,p:{regY:23,rotation:-158.9155,x:709.95,y:268.5,regX:21.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-24.6354,x:580.6,y:306.35,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4353,x:658.05,y:306.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-0.2221,y:295.85,x:618.55,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:5.9749,x:619.55,y:237.45,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:0.0805,x:615.7,y:259.75,scaleX:0.9996,scaleY:0.9996,regY:15.6}},{t:this.ikNode_47,p:{rotation:-16.0403,x:662.7,y:490.25,regX:25.1,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.3,rotation:9.7379,x:653.75,y:455.25,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.8731,x:649.55,y:437.75}},{t:this.ikNode_41,p:{rotation:6.8731,x:646.15,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.7,y:497.05,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.05,y:465.15,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.3,y:445.8,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.85,y:409.85}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1545,x:607.8,y:394.45}},{t:this.ikNode_29,p:{rotation:0.5702,x:636.05,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:-1.1431,x:543.65,y:429.8,regX:16.1}},{t:this.ikNode_23,p:{regX:20.9,rotation:-6.3017,x:522,y:422.5,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:-6.3017,x:508.25,y:411.1,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-6.3017,x:580.55,y:306.6}},{t:this.ikNode_16,p:{rotation:-158.1375,x:672.15,y:204.55,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.2}},{t:this.ikNode_14,p:{rotation:-158.1375,x:689.95,y:195.45,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.1}},{t:this.ikNode_12,p:{regY:13.5,rotation:-158.1375,x:712.1,y:196.05,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9996,scaleY:0.9996,rotation:-7.446,x:553.65,y:359.55}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-101.412,x:657.75,y:306.5,regY:-8.1}},{t:this.ikNode_8,p:{regY:23,rotation:-158.1375,x:709.4,y:267.6,regX:21.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-24.637,x:580.6,y:306.35,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4353,x:658.05,y:306.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-0.2624,y:295.8,x:618.6,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:5.2682,x:619.55,y:237.6,regY:100.8}},{t:this.ikNode_51,p:{regX:52,rotation:0.028,x:615.65,y:259.9,scaleX:0.9996,scaleY:0.9996,regY:15.7}},{t:this.ikNode_47,p:{rotation:-14.5127,x:662.85,y:490.2,regX:25.1,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.3,rotation:9.5482,x:653.75,y:455.2,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.8731,x:649.55,y:437.75}},{t:this.ikNode_41,p:{rotation:6.8731,x:646.15,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.7,y:497.05,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.05,y:465.15,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.25,y:445.8,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.8,y:409.85}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1545,x:607.75,y:394.45}},{t:this.ikNode_29,p:{rotation:0.5702,x:636.05,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:-1.1431,x:543.65,y:429.8,regX:16.1}},{t:this.ikNode_23,p:{regX:20.9,rotation:-6.3017,x:522,y:422.5,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:-6.3017,x:508.25,y:411.1,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-6.3017,x:580.55,y:306.6}},{t:this.ikNode_16,p:{rotation:-158.9398,x:671.95,y:205.85,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.2}},{t:this.ikNode_14,p:{rotation:-158.9398,x:689.55,y:196.6,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.1}},{t:this.ikNode_12,p:{regY:13.5,rotation:-158.9398,x:711.75,y:196.9,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9996,scaleY:0.9996,rotation:-7.446,x:553.65,y:359.55}},{t:this.ikNode_6,p:{scaleX:0.9997,scaleY:0.9997,rotation:-100.4576,x:657.9,y:306.4,regY:-8}},{t:this.ikNode_8,p:{regY:23,rotation:-158.9398,x:710.05,y:268.45,regX:21.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-24.637,x:580.6,y:306.35,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4353,x:658.05,y:306.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-0.3026,y:295.75,x:618.55,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:4.5633,x:619.55,y:237.45,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:-0.0192,x:615.6,y:259.85,scaleX:0.9996,scaleY:0.9996,regY:15.6}},{t:this.ikNode_47,p:{rotation:-12.9845,x:662.95,y:490.15,regX:25.1,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.3,rotation:9.3558,x:653.8,y:455.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.8731,x:649.5,y:437.75}},{t:this.ikNode_41,p:{rotation:6.8731,x:646.15,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.7,y:497.05,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.05,y:465.15,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.25,y:445.8,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.8,y:409.85}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1545,x:607.75,y:394.45}},{t:this.ikNode_29,p:{rotation:0.5702,x:636.05,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:-1.1431,x:543.65,y:429.8,regX:16.1}},{t:this.ikNode_23,p:{regX:20.9,rotation:-6.3017,x:522,y:422.5,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:-6.3017,x:508.25,y:411.1,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-6.3017,x:580.55,y:306.6}},{t:this.ikNode_16,p:{rotation:-159.7411,x:671.65,y:207.15,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.3}},{t:this.ikNode_14,p:{rotation:-159.7411,x:689.3,y:197.75,scaleX:0.9997,scaleY:0.9997,regX:14.4,regY:15.1}},{t:this.ikNode_12,p:{regY:13.5,rotation:-159.7411,x:711.35,y:197.7,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9996,scaleY:0.9996,rotation:-7.446,x:553.65,y:359.55}},{t:this.ikNode_6,p:{scaleX:0.9997,scaleY:0.9997,rotation:-99.5021,x:657.8,y:306.45,regY:-8.1}},{t:this.ikNode_8,p:{regY:23,rotation:-159.7411,x:710.65,y:269.35,regX:21.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-24.637,x:580.6,y:306.35,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4353,x:658.05,y:306.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-0.3428,y:295.75,x:618.6,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:3.8565,x:619.45,y:237.45,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:-0.0717,x:615.55,y:259.8,scaleX:0.9996,scaleY:0.9996,regY:15.6}},{t:this.ikNode_47,p:{rotation:-11.4571,x:663.1,y:490.1,regX:25.1,scaleX:0.9996,scaleY:0.9996,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.3,rotation:9.1653,x:653.8,y:455.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.8731,x:649.5,y:437.75}},{t:this.ikNode_41,p:{rotation:6.8731,x:646.1,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.7,y:497.05,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.05,y:465.15,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.25,y:445.8,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.8,y:409.85}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1545,x:607.75,y:394.45}},{t:this.ikNode_29,p:{rotation:0.5702,x:636.05,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:-1.1431,x:543.65,y:429.8,regX:16.1}},{t:this.ikNode_23,p:{regX:20.9,rotation:-6.3017,x:522,y:422.5,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:-6.3017,x:508.25,y:411.1,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-6.3017,x:580.55,y:306.6}},{t:this.ikNode_16,p:{rotation:-160.5437,x:671.4,y:208.75,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.2}},{t:this.ikNode_14,p:{rotation:-160.5437,x:688.95,y:198.95,scaleX:0.9997,scaleY:0.9997,regX:14.4,regY:15.1}},{t:this.ikNode_12,p:{regY:13.5,rotation:-160.5437,x:711,y:198.6,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9996,scaleY:0.9996,rotation:-7.446,x:553.65,y:359.5}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-98.5467,x:657.95,y:306.45,regY:-8}},{t:this.ikNode_8,p:{regY:23,rotation:-160.5437,x:711.25,y:270.15,regX:21.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-24.637,x:580.6,y:306.35,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4353,x:658.05,y:306.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-0.3839,y:295.8,x:618.55,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:3.1511,x:619.4,y:237.4,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:-0.1242,x:615.5,y:259.8,scaleX:0.9997,scaleY:0.9997,regY:15.6}},{t:this.ikNode_47,p:{rotation:-9.928,x:663.2,y:490.1,regX:25.1,scaleX:0.9996,scaleY:0.9996,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.2,rotation:8.9748,x:653.8,y:455.05,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.8731,x:649.5,y:437.75}},{t:this.ikNode_41,p:{rotation:6.8731,x:646.1,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.7,y:497.05,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.05,y:465.15,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.25,y:445.8,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.8,y:409.85}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1545,x:607.75,y:394.45}},{t:this.ikNode_29,p:{rotation:0.5702,x:636.05,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:-1.1431,x:543.65,y:429.8,regX:16.1}},{t:this.ikNode_23,p:{regX:20.9,rotation:-6.3017,x:522,y:422.5,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:-6.3017,x:508.25,y:411.1,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-6.3017,x:580.55,y:306.6}},{t:this.ikNode_16,p:{rotation:-161.3446,x:671.15,y:210.15,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.2}},{t:this.ikNode_14,p:{rotation:-161.3446,x:688.45,y:200.1,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.1}},{t:this.ikNode_12,p:{regY:13.5,rotation:-161.3446,x:710.5,y:199.5,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9996,scaleY:0.9996,rotation:-7.446,x:553.65,y:359.5}},{t:this.ikNode_6,p:{scaleX:0.9997,scaleY:0.9997,rotation:-97.5934,x:657.75,y:306.45,regY:-8.1}},{t:this.ikNode_8,p:{regY:23.1,rotation:-161.3446,x:711.9,y:270.95,regX:21.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-24.637,x:580.6,y:306.35,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4353,x:658.05,y:306.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-0.4242,y:295.75,x:618.55,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:2.4444,x:619.4,y:237.4,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:-0.1767,x:615.5,y:259.85,scaleX:0.9997,scaleY:0.9997,regY:15.6}},{t:this.ikNode_47,p:{rotation:-8.4013,x:663.25,y:490.05,regX:25.1,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.7,regY:10.3,rotation:8.7835,x:653.9,y:455.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.8731,x:649.5,y:437.75}},{t:this.ikNode_41,p:{rotation:6.8731,x:646.1,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.7,y:497.05,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.05,y:465.15,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.25,y:445.8,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.8,y:409.85}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1545,x:607.75,y:394.45}},{t:this.ikNode_29,p:{rotation:0.5702,x:636.05,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:-1.1431,x:543.65,y:429.8,regX:16.1}},{t:this.ikNode_23,p:{regX:20.9,rotation:-6.3017,x:522,y:422.5,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:-6.3017,x:508.25,y:411.15,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-6.3017,x:580.55,y:306.6}},{t:this.ikNode_16,p:{rotation:-162.1478,x:670.9,y:211.65,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.2}},{t:this.ikNode_14,p:{rotation:-162.1478,x:688.05,y:201.45,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.1}},{t:this.ikNode_12,p:{regY:13.5,rotation:-162.1478,x:710.1,y:200.4,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9996,scaleY:0.9996,rotation:-7.446,x:553.65,y:359.5}},{t:this.ikNode_6,p:{scaleX:0.9997,scaleY:0.9997,rotation:-96.6372,x:657.75,y:306.5,regY:-8.1}},{t:this.ikNode_8,p:{regY:23.1,rotation:-162.1478,x:712.5,y:271.9,regX:21.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-24.637,x:580.55,y:306.35,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4353,x:658.05,y:306.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-0.4644,y:295.75,x:618.55,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.739,x:619.3,y:237.4,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:-0.2291,x:615.45,y:259.85,scaleX:0.9996,scaleY:0.9996,regY:15.6}},{t:this.ikNode_47,p:{rotation:-6.873,x:663.4,y:490,regX:25.1,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.3,rotation:8.5924,x:653.75,y:455.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.8731,x:649.5,y:437.75}},{t:this.ikNode_41,p:{rotation:6.8731,x:646.1,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.7,y:497.05,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.05,y:465.15,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.25,y:445.8,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.8,y:409.85}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1545,x:607.75,y:394.45}},{t:this.ikNode_29,p:{rotation:0.5702,x:636.05,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:-1.1431,x:543.65,y:429.8,regX:16.1}},{t:this.ikNode_23,p:{regX:20.9,rotation:-6.3017,x:522,y:422.5,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:-6.3017,x:508.25,y:411.15,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-6.3017,x:580.55,y:306.6}},{t:this.ikNode_16,p:{rotation:-162.9497,x:670.6,y:213.15,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.2}},{t:this.ikNode_14,p:{rotation:-162.9497,x:687.6,y:202.5,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.2}},{t:this.ikNode_12,p:{regY:13.5,rotation:-162.9497,x:709.7,y:201.35,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9996,scaleY:0.9996,rotation:-7.446,x:553.65,y:359.5}},{t:this.ikNode_6,p:{scaleX:0.9997,scaleY:0.9997,rotation:-95.6819,x:657.8,y:306.4,regY:-8.1}},{t:this.ikNode_8,p:{regY:23,rotation:-162.9497,x:713,y:272.9,regX:21.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-24.637,x:580.55,y:306.35,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4353,x:658.05,y:306.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-0.5046,y:295.75,x:618.6,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.0321,x:619.25,y:237.4,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:-0.2816,x:615.4,y:259.8,scaleX:0.9996,scaleY:0.9996,regY:15.6}},{t:this.ikNode_47,p:{rotation:-5.3452,x:663.65,y:489.95,regX:25.2,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.3,rotation:8.4015,x:653.75,y:455.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.8731,x:649.5,y:437.75}},{t:this.ikNode_41,p:{rotation:6.8731,x:646.1,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.7,y:497.05,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.05,y:465.15,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.25,y:445.8,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.8,y:409.85}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1545,x:607.75,y:394.45}},{t:this.ikNode_29,p:{rotation:0.5702,x:636.05,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:-1.1431,x:543.65,y:429.8,regX:16.1}},{t:this.ikNode_23,p:{regX:20.9,rotation:-6.3017,x:522,y:422.5,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:-6.3017,x:508.25,y:411.15,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-6.3017,x:580.55,y:306.6}},{t:this.ikNode_16,p:{rotation:-163.7524,x:670.3,y:214.7,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.2}},{t:this.ikNode_14,p:{rotation:-163.7524,x:687.15,y:203.9,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.1}},{t:this.ikNode_12,p:{regY:13.4,rotation:-163.7524,x:709.2,y:202.45,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9996,scaleY:0.9996,rotation:-7.446,x:553.65,y:359.5}},{t:this.ikNode_6,p:{scaleX:0.9997,scaleY:0.9997,rotation:-94.7281,x:657.75,y:306.4,regY:-8.1}},{t:this.ikNode_8,p:{regY:22.9,rotation:-163.7524,x:713.5,y:273.9,regX:21.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-24.637,x:580.55,y:306.35,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4353,x:658.05,y:306.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-0.5449,y:295.75,x:618.55,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:0.3262,x:619.25,y:237.4,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:-0.3341,x:615.4,y:259.8,scaleX:0.9996,scaleY:0.9996,regY:15.6}},{t:this.ikNode_47,p:{rotation:-3.8159,x:663.7,y:489.95,regX:25.1,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.7,regY:10.3,rotation:8.2106,x:653.9,y:455.15,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.8731,x:649.5,y:437.75}},{t:this.ikNode_41,p:{rotation:6.8731,x:646.1,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.7,y:497.05,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.05,y:465.15,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.25,y:445.8,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.8,y:409.85}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1545,x:607.75,y:394.45}},{t:this.ikNode_29,p:{rotation:0.5702,x:636.05,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:-1.1431,x:543.65,y:429.8,regX:16.1}},{t:this.ikNode_23,p:{regX:20.9,rotation:-6.3017,x:522,y:422.55,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:-6.3017,x:508.25,y:411.15,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-6.3017,x:580.55,y:306.6}},{t:this.ikNode_16,p:{rotation:-164.5541,x:670.05,y:216.2,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.2}},{t:this.ikNode_14,p:{rotation:-164.5541,x:686.65,y:205.25,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.1}},{t:this.ikNode_12,p:{regY:13.5,rotation:-164.5541,x:708.8,y:203.35,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9996,scaleY:0.9996,rotation:-7.446,x:553.65,y:359.5}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-93.7722,x:657.75,y:306.5,regY:-8.1}},{t:this.ikNode_8,p:{regY:23,rotation:-164.5541,x:714.05,y:274.75,regX:21.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-24.637,x:580.55,y:306.35,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4353,x:658.05,y:306.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-0.586,y:295.75,x:618.5,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:-0.3743,x:619.15,y:237.35,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:-0.3866,x:615.35,y:259.8,scaleX:0.9997,scaleY:0.9997,regY:15.6}},{t:this.ikNode_47,p:{rotation:-2.2893,x:663.75,y:489.95,regX:25.1,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.3,rotation:8.0206,x:653.75,y:455.15,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.8731,x:649.5,y:437.75}},{t:this.ikNode_41,p:{rotation:6.8731,x:646.1,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.7,y:497.05,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.05,y:465.15,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.25,y:445.8,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.8,y:409.85}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1545,x:607.75,y:394.45}},{t:this.ikNode_29,p:{rotation:0.5702,x:636.05,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:-1.1431,x:543.65,y:429.8,regX:16.1}},{t:this.ikNode_23,p:{regX:20.9,rotation:-6.3017,x:522,y:422.55,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:-6.3017,x:508.25,y:411.15,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-6.3017,x:580.55,y:306.6}},{t:this.ikNode_16,p:{rotation:-165.3565,x:669.75,y:217.75,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.2}},{t:this.ikNode_14,p:{rotation:-165.3565,x:686.25,y:206.55,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.1}},{t:this.ikNode_12,p:{regY:13.5,rotation:-165.3565,x:708.25,y:204.4,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9996,scaleY:0.9996,rotation:-7.446,x:553.65,y:359.5}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-92.8182,x:657.8,y:306.4,regY:-8.1}},{t:this.ikNode_8,p:{regY:23,rotation:-165.3565,x:714.55,y:275.7,regX:21.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-24.637,x:580.55,y:306.3,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4353,x:658.05,y:306.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-0.6262,y:295.75,x:618.55,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:-1.0811,x:619.1,y:237.35,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:-0.439,x:615.25,y:259.85,scaleX:0.9996,scaleY:0.9996,regY:15.6}},{t:this.ikNode_47,p:{rotation:-0.76,x:664,y:489.85,regX:25.2,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.3,rotation:7.8281,x:653.75,y:455.15,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.8731,x:649.5,y:437.75}},{t:this.ikNode_41,p:{rotation:6.8731,x:646.1,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.7,y:497.05,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.05,y:465.15,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.25,y:445.8,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.8,y:409.85}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1545,x:607.75,y:394.45}},{t:this.ikNode_29,p:{rotation:0.5702,x:636.05,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:-1.1431,x:543.65,y:429.8,regX:16.1}},{t:this.ikNode_23,p:{regX:20.9,rotation:-6.3017,x:522,y:422.55,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:-6.3017,x:508.25,y:411.15,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-6.3017,x:580.55,y:306.6}},{t:this.ikNode_16,p:{rotation:-166.1587,x:669.45,y:219.25,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.3}},{t:this.ikNode_14,p:{rotation:-166.1587,x:685.75,y:207.9,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.1}},{t:this.ikNode_12,p:{regY:13.5,rotation:-166.1587,x:707.8,y:205.45,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9996,scaleY:0.9996,rotation:-7.446,x:553.65,y:359.5}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-91.8623,x:657.75,y:306.45,regY:-8.1}},{t:this.ikNode_8,p:{regY:23,rotation:-166.1587,x:715.2,y:276.7,regX:21.3,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-24.637,x:580.55,y:306.3,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4353,x:658.05,y:306.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-0.6665,y:295.75,x:618.5,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:-1.7871,x:619.05,y:237.35,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:-0.4915,x:615.35,y:259.85,scaleX:0.9997,scaleY:0.9997,regY:15.6}},{t:this.ikNode_47,p:{rotation:0.7626,x:664,y:489.85,regX:25.1,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.3,rotation:7.6374,x:653.75,y:455.15,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.8731,x:649.5,y:437.75}},{t:this.ikNode_41,p:{rotation:6.8731,x:646.1,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.7,y:497.05,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.05,y:465.15,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.25,y:445.8,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.8,y:409.85}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1545,x:607.75,y:394.45}},{t:this.ikNode_29,p:{rotation:0.5702,x:636.05,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:-1.1431,x:543.65,y:429.8,regX:16.1}},{t:this.ikNode_23,p:{regX:20.9,rotation:-6.3017,x:522,y:422.55,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:-6.3017,x:508.25,y:411.15,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-6.3017,x:580.55,y:306.6}},{t:this.ikNode_16,p:{rotation:-166.9607,x:669.1,y:220.95,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.2}},{t:this.ikNode_14,p:{rotation:-166.9607,x:685.35,y:209.3,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.1}},{t:this.ikNode_12,p:{regY:13.5,rotation:-166.9607,x:707.25,y:206.45,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9996,scaleY:0.9996,rotation:-7.446,x:553.65,y:359.5}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-90.9079,x:657.75,y:306.45,regY:-8.1}},{t:this.ikNode_8,p:{regY:23,rotation:-166.9607,x:715.55,y:277.6,regX:21.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-24.637,x:580.55,y:306.3,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4353,x:658.05,y:306.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-0.7067,y:295.7,x:618.55,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:-2.4935,x:619.1,y:237.35,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:-0.544,x:615.3,y:259.8,scaleX:0.9997,scaleY:0.9997,regY:15.6}},{t:this.ikNode_47,p:{rotation:2.2902,x:664.1,y:489.85,regX:25.1,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.3,rotation:7.4459,x:653.75,y:455.1,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.8731,x:649.5,y:437.75}},{t:this.ikNode_41,p:{rotation:6.8731,x:646.1,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.7,y:497.05,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.05,y:465.15,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.25,y:445.8,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.8,y:409.85}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1545,x:607.75,y:394.45}},{t:this.ikNode_29,p:{rotation:0.5702,x:636.05,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:-1.1431,x:543.65,y:429.8,regX:16.1}},{t:this.ikNode_23,p:{regX:20.9,rotation:-6.3017,x:522,y:422.55,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:-6.3017,x:508.25,y:411.15,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-6.3017,x:580.55,y:306.6}},{t:this.ikNode_16,p:{rotation:-167.763,x:668.8,y:222.6,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.2}},{t:this.ikNode_14,p:{rotation:-167.763,x:684.85,y:210.7,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.1}},{t:this.ikNode_12,p:{regY:13.5,rotation:-167.763,x:706.75,y:207.55,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9996,scaleY:0.9996,rotation:-7.446,x:553.65,y:359.5}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-89.9571,x:657.7,y:306.4,regY:-8.1}},{t:this.ikNode_8,p:{regY:22.9,rotation:-167.763,x:716.05,y:278.65,regX:21.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-24.637,x:580.55,y:306.3,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4353,x:658.05,y:306.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-0.7469,y:295.75,x:618.5,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:-3.1993,x:618.9,y:237.35,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:-0.5965,x:615.2,y:259.8,scaleX:0.9996,scaleY:0.9996,regY:15.6}},{t:this.ikNode_47,p:{rotation:3.8176,x:664.4,y:489.8,regX:25.2,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.3,rotation:7.2564,x:653.75,y:455.1,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.8731,x:649.5,y:437.75}},{t:this.ikNode_41,p:{rotation:6.8731,x:646.1,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.7,y:497.05,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607,y:465.15,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.25,y:445.8,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.8,y:409.85}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1545,x:607.75,y:394.45}},{t:this.ikNode_29,p:{rotation:0.5702,x:636.05,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:-1.1431,x:543.65,y:429.8,regX:16.1}},{t:this.ikNode_23,p:{regX:20.9,rotation:-6.3017,x:522,y:422.55,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:-6.3017,x:508.25,y:411.15,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-6.3017,x:580.55,y:306.6}},{t:this.ikNode_16,p:{rotation:-168.5654,x:668.55,y:224.25,regX:13.9,scaleX:0.9997,scaleY:0.9997,regY:12.2}},{t:this.ikNode_14,p:{rotation:-168.5654,x:684.35,y:212.1,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.1}},{t:this.ikNode_12,p:{regY:13.5,rotation:-168.5654,x:706.1,y:208.6,scaleX:0.9997,scaleY:0.9997,regX:10.3}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9996,scaleY:0.9996,rotation:-7.446,x:553.6,y:359.5}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-89.0029,x:657.7,y:306.4,regY:-8.1}},{t:this.ikNode_8,p:{regY:23.1,rotation:-168.5654,x:716.55,y:279.4,regX:21.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-24.637,x:580.55,y:306.3,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4353,x:658.05,y:306.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-0.7871,y:295.75,x:618.45,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:-3.9065,x:618.95,y:237.3,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:-0.649,x:615.25,y:259.85,scaleX:0.9996,scaleY:0.9996,regY:15.6}},{t:this.ikNode_47,p:{rotation:5.3461,x:664.3,y:489.75,regX:25.1,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.7,regY:10.3,rotation:7.0643,x:653.9,y:455.1,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.8731,x:649.5,y:437.75}},{t:this.ikNode_41,p:{rotation:6.8731,x:646.1,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.7,y:497.05,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607,y:465.15,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.25,y:445.8,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.75,y:409.85}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1545,x:607.75,y:394.4}},{t:this.ikNode_29,p:{rotation:0.5702,x:636.05,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:-1.1431,x:543.65,y:429.8,regX:16.1}},{t:this.ikNode_23,p:{regX:20.9,rotation:-6.3017,x:522,y:422.55,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:-6.3017,x:508.2,y:411.15,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-6.3017,x:580.55,y:306.6}},{t:this.ikNode_16,p:{rotation:-169.3676,x:668.1,y:225.8,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.2}},{t:this.ikNode_14,p:{rotation:-169.3676,x:683.85,y:213.6,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.1}},{t:this.ikNode_12,p:{regY:13.5,rotation:-169.3676,x:705.7,y:209.85,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9996,scaleY:0.9996,rotation:-7.446,x:553.6,y:359.5}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-88.0475,x:657.7,y:306.4,regY:-8.1}},{t:this.ikNode_8,p:{regY:23,rotation:-169.3676,x:716.85,y:280.5,regX:21.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-24.637,x:580.55,y:306.3,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4353,x:658.05,y:306.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-0.8283,y:295.75,x:618.45,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:-4.6125,x:618.85,y:237.35,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:-0.7014,x:615.2,y:259.85,scaleX:0.9997,scaleY:0.9997,regY:15.6}},{t:this.ikNode_47,p:{rotation:6.8731,x:664.35,y:489.65,regX:25.1,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.2,rotation:6.8731,x:653.8,y:454.9,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.8731,x:649.5,y:437.75}},{t:this.ikNode_41,p:{rotation:6.8731,x:646.1,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.7,y:497.05,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607,y:465.15,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.2,y:445.8,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.75,y:409.85}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1545,x:607.75,y:394.4}},{t:this.ikNode_29,p:{rotation:0.5702,x:636.05,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:-1.1431,x:543.65,y:429.8,regX:16.1}},{t:this.ikNode_23,p:{regX:20.9,rotation:-6.3017,x:522,y:422.55,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:-6.3017,x:508.2,y:411.15,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-6.3017,x:580.55,y:306.6}},{t:this.ikNode_16,p:{rotation:-170.1699,x:667.8,y:227.55,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.2}},{t:this.ikNode_14,p:{rotation:-170.1699,x:683.35,y:215.1,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.1}},{t:this.ikNode_12,p:{regY:13.5,rotation:-170.1699,x:705.05,y:211,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9996,scaleY:0.9996,rotation:-7.446,x:553.6,y:359.5}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-87.0934,x:657.7,y:306.4,regY:-8.1}},{t:this.ikNode_8,p:{regY:23,rotation:-170.1699,x:717.35,y:281.5,regX:21.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-24.637,x:580.55,y:306.3,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4353,x:658.05,y:306.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-0.8493,y:295.75,x:618.5,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:-4.3046,x:618.85,y:237.35,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:-0.7312,x:615.15,y:259.85,scaleX:0.9996,scaleY:0.9996,regY:15.6}},{t:this.ikNode_47,p:{rotation:6.8731,x:664.4,y:489.7,regX:25.1,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.2,rotation:6.8731,x:653.8,y:454.95,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.8731,x:649.5,y:437.75}},{t:this.ikNode_41,p:{rotation:6.8731,x:646.1,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.7,y:497.05,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607,y:465.15,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.25,y:445.8,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.75,y:409.85}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1545,x:607.75,y:394.45}},{t:this.ikNode_29,p:{rotation:0.5702,x:636.05,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:-1.1431,x:543.65,y:429.8,regX:16.1}},{t:this.ikNode_23,p:{regX:20.9,rotation:-6.3017,x:522,y:422.55,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:-6.3017,x:508.25,y:411.15,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-6.3017,x:580.55,y:306.6}},{t:this.ikNode_16,p:{rotation:-158.0281,x:681,y:223,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.2}},{t:this.ikNode_14,p:{rotation:-158.7646,x:698.7,y:213.85,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.1}},{t:this.ikNode_12,p:{regY:13.5,rotation:-158.7646,x:720.9,y:214.1,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9996,scaleY:0.9996,rotation:-7.446,x:553.6,y:359.5}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-83.1002,x:657.7,y:306.5,regY:-8.1}},{t:this.ikNode_8,p:{regY:23.1,rotation:-158.7646,x:718.95,y:285.7,regX:21.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-24.637,x:580.55,y:306.3,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4353,x:658.05,y:306.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-0.8694,y:295.8,x:618.55,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:-3.9968,x:618.85,y:237.3,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:-0.7609,x:615.15,y:259.85,scaleX:0.9996,scaleY:0.9996,regY:15.6}},{t:this.ikNode_47,p:{rotation:6.8731,x:664.4,y:489.7,regX:25.1,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.2,rotation:6.8731,x:653.8,y:454.95,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.8731,x:649.5,y:437.75}},{t:this.ikNode_41,p:{rotation:6.8731,x:646.1,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.7,y:497.05,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607,y:465.15,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.25,y:445.8,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.75,y:409.85}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1545,x:607.75,y:394.45}},{t:this.ikNode_29,p:{rotation:0.5702,x:636.05,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:-1.1431,x:543.65,y:429.8,regX:16.1}},{t:this.ikNode_23,p:{regX:20.9,rotation:-6.3017,x:522,y:422.55,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:-6.3017,x:508.25,y:411.15,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-6.3017,x:580.6,y:306.6}},{t:this.ikNode_16,p:{rotation:-145.8857,x:695.55,y:221.05,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.2}},{t:this.ikNode_14,p:{rotation:-147.3593,x:714.7,y:215.6,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.1}},{t:this.ikNode_12,p:{regY:13.5,rotation:-147.3593,x:736.3,y:220.3,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9996,scaleY:0.9996,rotation:-7.446,x:553.65,y:359.5}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-79.107,x:657.75,y:306.45,regY:-8.1}},{t:this.ikNode_8,p:{regY:23,rotation:-147.3593,x:720.35,y:290.15,regX:21.3,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-24.637,x:580.55,y:306.3,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4353,x:658.05,y:306.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-0.8912,y:295.75,x:618.5,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:-3.6899,x:618.9,y:237.35,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:-0.7906,x:615.05,y:259.85,scaleX:0.9996,scaleY:0.9996,regY:15.6}},{t:this.ikNode_47,p:{rotation:6.8731,x:664.4,y:489.7,regX:25.1,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.2,rotation:6.8731,x:653.8,y:454.95,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.8731,x:649.5,y:437.75}},{t:this.ikNode_41,p:{rotation:6.8731,x:646.15,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.7,y:497.05,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.05,y:465.15,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.25,y:445.8,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.75,y:409.85}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1545,x:607.75,y:394.45}},{t:this.ikNode_29,p:{rotation:0.5702,x:636.05,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:-1.1431,x:543.65,y:429.8,regX:16.1}},{t:this.ikNode_23,p:{regX:20.9,rotation:-6.3017,x:522,y:422.55,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:-6.3017,x:508.25,y:411.15,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-6.3017,x:580.6,y:306.6}},{t:this.ikNode_16,p:{rotation:-133.7427,x:710.8,y:222,regX:13.9,scaleX:0.9996,scaleY:0.9996,regY:12.2}},{t:this.ikNode_14,p:{rotation:-135.9549,x:730.6,y:220.3,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.1}},{t:this.ikNode_12,p:{regY:13.5,rotation:-135.9549,x:750.8,y:229.2,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9996,scaleY:0.9996,rotation:-7.446,x:553.65,y:359.5}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-75.1163,x:657.8,y:306.4,regY:-8.1}},{t:this.ikNode_8,p:{regY:23.1,rotation:-135.9549,x:721.3,y:294.4,regX:21.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-24.637,x:580.55,y:306.3,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4353,x:658.05,y:306.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-0.9113,y:295.8,x:618.5,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:-3.3815,x:618.75,y:237.5,regY:100.8}},{t:this.ikNode_51,p:{regX:52,rotation:-0.8195,x:615.1,y:259.8,scaleX:0.9996,scaleY:0.9996,regY:15.6}},{t:this.ikNode_47,p:{rotation:6.8731,x:664.4,y:489.7,regX:25.1,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.2,rotation:6.8731,x:653.8,y:454.95,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.8731,x:649.5,y:437.75}},{t:this.ikNode_41,p:{rotation:6.8731,x:646.15,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.7,y:497.05,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.05,y:465.15,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.25,y:445.8,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.75,y:409.85}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1545,x:607.75,y:394.45}},{t:this.ikNode_29,p:{rotation:0.5702,x:636.05,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:-1.1431,x:543.65,y:429.8,regX:16.1}},{t:this.ikNode_23,p:{regX:20.9,rotation:-6.3017,x:522,y:422.55,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:-6.3017,x:508.25,y:411.15,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-6.3017,x:580.6,y:306.6}},{t:this.ikNode_16,p:{rotation:-121.6009,x:726.05,y:225.7,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.3}},{t:this.ikNode_14,p:{rotation:-124.5483,x:745.8,y:228.1,scaleX:0.9996,scaleY:0.9996,regX:14.5,regY:15.1}},{t:this.ikNode_12,p:{regY:13.5,rotation:-124.5483,x:763.75,y:240.8,scaleX:0.9996,scaleY:0.9996,regX:10.2}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9996,scaleY:0.9996,rotation:-7.446,x:553.65,y:359.5}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-71.1225,x:657.8,y:306.45,regY:-8.1}},{t:this.ikNode_8,p:{regY:23.1,rotation:-124.5483,x:722,y:298.9,regX:21.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-24.637,x:580.55,y:306.35,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4353,x:658.05,y:306.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-0.9324,y:295.75,x:618.5,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:-3.0741,x:618.8,y:237.35,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:-0.8493,x:615.05,y:260,scaleX:0.9996,scaleY:0.9996,regY:15.7}},{t:this.ikNode_47,p:{rotation:6.8731,x:664.4,y:489.7,regX:25.1,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.2,rotation:6.8731,x:653.8,y:454.95,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.8731,x:649.5,y:437.75}},{t:this.ikNode_41,p:{rotation:6.8731,x:646.15,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.7,y:497.05,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.05,y:465.15,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.25,y:445.8,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.75,y:409.85}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1545,x:607.75,y:394.45}},{t:this.ikNode_29,p:{rotation:0.5702,x:636.05,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:-1.1431,x:543.65,y:429.8,regX:16.1}},{t:this.ikNode_23,p:{regX:20.9,rotation:-6.3017,x:522,y:422.55,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:-6.3017,x:508.25,y:411.15,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-6.3017,x:580.6,y:306.6}},{t:this.ikNode_16,p:{rotation:-109.4583,x:740.8,y:232.5,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.2}},{t:this.ikNode_14,p:{rotation:-113.1435,x:759.7,y:238.6,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.1}},{t:this.ikNode_12,p:{regY:13.4,rotation:-113.1435,x:774.8,y:254.75,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9996,scaleY:0.9996,rotation:-7.446,x:553.65,y:359.5}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-67.1307,x:657.9,y:306.55,regY:-8}},{t:this.ikNode_8,p:{regY:23,rotation:-113.1435,x:722.4,y:303.4,regX:21.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-24.637,x:580.6,y:306.35,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4353,x:658.05,y:306.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-0.9542,y:295.8,x:618.5,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:-2.7657,x:618.75,y:237.4,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:-0.879,x:615.1,y:259.85,scaleX:0.9996,scaleY:0.9996,regY:15.6}},{t:this.ikNode_47,p:{rotation:6.8731,x:664.4,y:489.7,regX:25.1,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.2,rotation:6.8731,x:653.8,y:454.95,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.8731,x:649.55,y:437.75}},{t:this.ikNode_41,p:{rotation:6.8731,x:646.2,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.7,y:497.05,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.05,y:465.15,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.25,y:445.8,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.8,y:409.85}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1545,x:607.75,y:394.45}},{t:this.ikNode_29,p:{rotation:0.5702,x:636.05,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:-1.1431,x:543.65,y:429.8,regX:16.1}},{t:this.ikNode_23,p:{regX:20.9,rotation:-6.3017,x:522,y:422.55,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:-6.3017,x:508.25,y:411.15,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-6.3017,x:580.6,y:306.6}},{t:this.ikNode_16,p:{rotation:-97.3154,x:754.55,y:242,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.2}},{t:this.ikNode_14,p:{rotation:-101.738,x:771.85,y:251.9,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.1}},{t:this.ikNode_12,p:{regY:13.5,rotation:-101.738,x:783.5,y:270.45,scaleX:0.9997,scaleY:0.9997,regX:10.3}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9996,scaleY:0.9996,rotation:-7.446,x:553.65,y:359.55}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-63.1385,x:657.9,y:306.45,regY:-8.1}},{t:this.ikNode_8,p:{regY:23,rotation:-101.738,x:722.4,y:307.9,regX:21.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-24.637,x:580.6,y:306.35,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4353,x:658.05,y:306.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-0.9743,y:295.75,x:618.6,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:-2.4584,x:618.7,y:237.4,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:-0.9087,x:615.1,y:260,scaleX:0.9996,scaleY:0.9996,regY:15.7}},{t:this.ikNode_47,p:{rotation:6.8731,x:664.4,y:489.7,regX:25.1,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.2,rotation:6.8731,x:653.85,y:455,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.8731,x:649.55,y:437.75}},{t:this.ikNode_41,p:{rotation:6.8731,x:646.2,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.7,y:497.05,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.05,y:465.15,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.25,y:445.8,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.8,y:409.85}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1545,x:607.75,y:394.45}},{t:this.ikNode_29,p:{rotation:0.5702,x:636.05,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:-1.1431,x:543.65,y:429.8,regX:16.1}},{t:this.ikNode_23,p:{regX:20.9,rotation:-6.3017,x:522,y:422.55,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:-6.3017,x:508.25,y:411.15,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-6.3017,x:580.6,y:306.6}},{t:this.ikNode_16,p:{rotation:-85.1772,x:766.8,y:254.3,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.2}},{t:this.ikNode_14,p:{rotation:-90.3323,x:781.75,y:267.25,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.1}},{t:this.ikNode_12,p:{regY:13.5,rotation:-90.3323,x:789.55,y:287.75,scaleX:0.9997,scaleY:0.9997,regX:10.3}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9996,scaleY:0.9996,rotation:-7.446,x:553.65,y:359.55}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-59.1453,x:657.9,y:306.5,regY:-8.1}},{t:this.ikNode_8,p:{regY:23.1,rotation:-90.3323,x:722.35,y:312.4,regX:21.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-24.637,x:580.6,y:306.35,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4353,x:658.05,y:306.45,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-0.9953,y:295.75,x:618.6,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:-2.1521,x:618.75,y:237.4,regY:100.7}},{t:this.ikNode_51,p:{regX:51.9,rotation:-0.9384,x:614.95,y:259.85,scaleX:0.9997,scaleY:0.9997,regY:15.6}},{t:this.ikNode_47,p:{rotation:6.8731,x:664.4,y:489.7,regX:25.1,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.2,rotation:6.8731,x:653.85,y:455,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.8731,x:649.55,y:437.75}},{t:this.ikNode_41,p:{rotation:6.8731,x:646.2,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.75,y:497.05,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.05,y:465.15,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.3,y:445.8,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.8,y:409.85}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1545,x:607.8,y:394.45}},{t:this.ikNode_29,p:{rotation:0.5702,x:636.05,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:-1.1431,x:543.65,y:429.8,regX:16.1}},{t:this.ikNode_23,p:{regX:20.9,rotation:-6.3017,x:522.05,y:422.55,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:-6.3017,x:508.25,y:411.15,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-6.3017,x:580.6,y:306.6}},{t:this.ikNode_16,p:{rotation:-73.0349,x:776.85,y:268.65,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.2}},{t:this.ikNode_14,p:{rotation:-78.9319,x:788.95,y:284.4,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.1}},{t:this.ikNode_12,p:{regY:13.5,rotation:-78.9319,x:792.5,y:306.15,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9996,scaleY:0.9996,rotation:-7.446,x:553.65,y:359.55}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-55.1535,x:657.9,y:306.5,regY:-8.1}},{t:this.ikNode_8,p:{regY:23,rotation:-78.9319,x:721.65,y:316.95,regX:21.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-24.637,x:580.6,y:306.35,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4353,x:658.05,y:306.45,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-1.0163,y:295.8,x:618.55,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:-1.8432,x:618.7,y:237.4,regY:100.7}},{t:this.ikNode_51,p:{regX:51.9,rotation:-0.9673,x:614.9,y:259.8,scaleX:0.9996,scaleY:0.9996,regY:15.6}},{t:this.ikNode_47,p:{rotation:6.8731,x:664.4,y:489.7,regX:25.1,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.2,rotation:6.8731,x:653.85,y:455,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.8731,x:649.55,y:437.75}},{t:this.ikNode_41,p:{rotation:6.8731,x:646.25,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.75,y:497.05,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.05,y:465.15,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.3,y:445.8,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.8,y:409.85}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1545,x:607.8,y:394.45}},{t:this.ikNode_29,p:{rotation:0.5702,x:636.05,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:-1.1431,x:543.65,y:429.8,regX:16.1}},{t:this.ikNode_23,p:{regX:20.9,rotation:-6.3017,x:522.05,y:422.55,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:-6.3017,x:508.3,y:411.15,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-6.3017,x:580.6,y:306.6}},{t:this.ikNode_16,p:{rotation:-60.8931,x:784.4,y:285.05,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.2}},{t:this.ikNode_14,p:{rotation:-67.5264,x:793.2,y:302.7,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.1}},{t:this.ikNode_12,p:{regY:13.4,rotation:-67.5264,x:792.35,y:324.75,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9996,scaleY:0.9996,rotation:-7.446,x:553.65,y:359.55}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-51.1617,x:658,y:306.55,regY:-8}},{t:this.ikNode_8,p:{regY:23,rotation:-67.5264,x:720.8,y:321.45,regX:21.3,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-24.637,x:580.6,y:306.35,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4353,x:658.05,y:306.45,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-1.0373,y:295.8,x:618.55,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:-1.536,x:618.7,y:237.4,regY:100.7}},{t:this.ikNode_51,p:{regX:51.9,rotation:-0.9971,x:614.8,y:259.9,scaleX:0.9996,scaleY:0.9996,regY:15.6}},{t:this.ikNode_47,p:{rotation:6.8731,x:664.45,y:489.7,regX:25.1,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.2,rotation:6.8731,x:653.85,y:455.05,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.8731,x:649.55,y:437.75}},{t:this.ikNode_41,p:{rotation:6.8731,x:646.25,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.75,y:497.05,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.05,y:465.15,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.3,y:445.8,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.8,y:409.85}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1545,x:607.8,y:394.45}},{t:this.ikNode_29,p:{rotation:0.5702,x:636.05,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:-1.1431,x:543.65,y:429.8,regX:16.1}},{t:this.ikNode_23,p:{regX:20.9,rotation:-6.3017,x:522.05,y:422.6,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:-6.3017,x:508.3,y:411.15,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-6.3017,x:580.6,y:306.6}},{t:this.ikNode_16,p:{rotation:-48.7502,x:789.25,y:302.75,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.2}},{t:this.ikNode_14,p:{rotation:-56.1219,x:794.3,y:321.75,scaleX:0.9996,scaleY:0.9996,regX:14.5,regY:15.1}},{t:this.ikNode_12,p:{regY:13.5,rotation:-56.1219,x:789.1,y:343.3,scaleX:0.9996,scaleY:0.9996,regX:10.2}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9996,scaleY:0.9996,rotation:-7.446,x:553.65,y:359.55}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-47.1694,x:657.95,y:306.5,regY:-8.1}},{t:this.ikNode_8,p:{regY:23,rotation:-56.1219,x:719.6,y:325.75,regX:21.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-24.637,x:580.6,y:306.35,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4353,x:658.05,y:306.45,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-1.0583,y:295.85,x:618.6,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:-1.2281,x:618.65,y:237.4,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:-1.0268,x:615,y:259.9,scaleX:0.9996,scaleY:0.9996,regY:15.6}},{t:this.ikNode_47,p:{rotation:6.8731,x:664.45,y:489.7,regX:25.1,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.2,rotation:6.8731,x:653.85,y:455.05,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.8731,x:649.55,y:437.75}},{t:this.ikNode_41,p:{rotation:6.8731,x:646.25,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.75,y:497.05,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.05,y:465.15,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.3,y:445.8,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.8,y:409.85}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1545,x:607.8,y:394.45}},{t:this.ikNode_29,p:{rotation:0.5702,x:636.05,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:-1.1431,x:543.65,y:429.8,regX:16.1}},{t:this.ikNode_23,p:{regX:20.9,rotation:-6.3017,x:522.05,y:422.6,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:-6.3017,x:508.3,y:411.15,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-6.3017,x:580.6,y:306.6}},{t:this.ikNode_16,p:{rotation:-36.6079,x:791,y:321.35,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.3}},{t:this.ikNode_14,p:{rotation:-44.7168,x:792,y:341,scaleX:0.9996,scaleY:0.9996,regX:14.4,regY:15.1}},{t:this.ikNode_12,p:{regY:13.5,rotation:-44.7168,x:782.85,y:361,scaleX:0.9996,scaleY:0.9996,regX:10.2}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9996,scaleY:0.9996,rotation:-7.446,x:553.65,y:359.55}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-43.1772,x:658.05,y:306.6,regY:-8}},{t:this.ikNode_8,p:{regY:23.1,rotation:-44.7168,x:718.25,y:330.1,regX:21.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-24.637,x:580.65,y:306.4,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4353,x:658.05,y:306.45,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-1.0802,y:295.75,x:618.6,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:-0.9201,x:618.55,y:237.4,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:-1.0566,x:614.9,y:259.9,scaleX:0.9996,scaleY:0.9996,regY:15.6}},{t:this.ikNode_47,p:{rotation:6.8731,x:664.45,y:489.7,regX:25.1,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.2,rotation:6.8731,x:653.85,y:455.05,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.8731,x:649.6,y:437.8}},{t:this.ikNode_41,p:{rotation:6.8731,x:646.3,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.75,y:497.05,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.05,y:465.15,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.3,y:445.8,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.8,y:409.85}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1545,x:607.8,y:394.45}},{t:this.ikNode_29,p:{rotation:0.5702,x:636.05,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:-1.1431,x:543.65,y:429.8,regX:16.1}},{t:this.ikNode_23,p:{regX:20.9,rotation:-6.3017,x:522.05,y:422.6,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:-6.3017,x:508.3,y:411.15,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-6.3017,x:580.6,y:306.6}},{t:this.ikNode_16,p:{rotation:-24.465,x:789.5,y:340,regX:14,scaleX:0.9996,scaleY:0.9996,regY:12.2}},{t:this.ikNode_14,p:{rotation:-33.3117,x:786.7,y:359.5,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.1}},{t:this.ikNode_12,p:{regY:13.5,rotation:-33.3117,x:773.6,y:377.25,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9996,scaleY:0.9996,rotation:-7.446,x:553.65,y:359.55}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-39.1835,x:658,y:306.5,regY:-8.1}},{t:this.ikNode_8,p:{regY:23.1,rotation:-33.3117,x:716.5,y:334.25,regX:21.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-24.637,x:580.65,y:306.4,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4353,x:658.05,y:306.45,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-1.1012,y:295.8,x:618.55,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:-0.6122,x:618.55,y:237.5,regY:100.7}},{t:this.ikNode_51,p:{regX:52,rotation:-1.0863,x:614.95,y:259.85,scaleX:0.9996,scaleY:0.9996,regY:15.6}},{t:this.ikNode_47,p:{rotation:6.8731,x:664.45,y:489.7,regX:25.1,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.2,rotation:6.8731,x:653.85,y:455.1,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.8731,x:649.6,y:437.8}},{t:this.ikNode_41,p:{rotation:6.8731,x:646.3,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.75,y:497.05,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.05,y:465.15,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.3,y:445.8,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.8,y:409.85}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1545,x:607.8,y:394.45}},{t:this.ikNode_29,p:{rotation:0.5702,x:636.05,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:-1.1431,x:543.65,y:429.8,regX:16.1}},{t:this.ikNode_23,p:{regX:20.9,rotation:-6.3017,x:522.05,y:422.6,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:-6.3017,x:508.3,y:411.15,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-6.3017,x:580.6,y:306.6}},{t:this.ikNode_16,p:{rotation:-12.3238,x:784.75,y:358.4,regX:13.9,scaleX:0.9996,scaleY:0.9996,regY:12.2}},{t:this.ikNode_14,p:{rotation:-21.9052,x:778.3,y:376.95,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.1}},{t:this.ikNode_12,p:{regY:13.5,rotation:-21.9052,x:762.05,y:391.75,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9996,scaleY:0.9996,rotation:-7.446,x:553.65,y:359.55}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-35.1918,x:658.05,y:306.6,regY:-8.1}},{t:this.ikNode_8,p:{regY:23.1,rotation:-21.9052,x:714.35,y:338.25,regX:21.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-24.637,x:580.65,y:306.4,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4353,x:658.05,y:306.45,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-1.1222,y:295.8,x:618.55,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:-0.3044,x:618.6,y:237.4,regY:100.7}},{t:this.ikNode_51,p:{regX:51.9,rotation:-1.1152,x:614.75,y:259.9,scaleX:0.9996,scaleY:0.9996,regY:15.6}},{t:this.ikNode_47,p:{rotation:6.8731,x:664.45,y:489.7,regX:25.1,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.2,rotation:6.8731,x:653.9,y:455.1,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.8731,x:649.6,y:437.8}},{t:this.ikNode_41,p:{rotation:6.8731,x:646.3,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.75,y:497.05,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.05,y:465.15,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.3,y:445.8,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.8,y:409.85}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1545,x:607.8,y:394.45}},{t:this.ikNode_29,p:{rotation:0.5702,x:636.05,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:-1.1431,x:543.65,y:429.8,regX:16.1}},{t:this.ikNode_23,p:{regX:20.9,rotation:-6.3017,x:522.05,y:422.6,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:-6.3017,x:508.3,y:411.15,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-6.3017,x:580.6,y:306.6}},{t:this.ikNode_16,p:{rotation:-0.1802,x:777.15,y:375.8,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.2}},{t:this.ikNode_14,p:{rotation:-10.5,x:767,y:392.75,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.1}},{t:this.ikNode_12,p:{regY:13.5,rotation:-10.5,x:748.15,y:404,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9996,scaleY:0.9996,rotation:-7.446,x:553.65,y:359.55}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-31.2003,x:658.05,y:306.6,regY:-8.1}},{t:this.ikNode_8,p:{regY:23,rotation:-10.5,x:712.05,y:342.05,regX:21.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-24.637,x:580.65,y:306.45,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4353,x:658.1,y:306.45,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_49,p:{rotation:-1.1432,y:295.85,x:618.6,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_53,p:{scaleX:0.9996,scaleY:0.9996,rotation:-0.0009,x:618.5,y:237.45,regY:100.7}},{t:this.ikNode_51,p:{regX:51.9,rotation:-1.144,x:614.8,y:259.9,scaleX:0.9996,scaleY:0.9996,regY:15.6}},{t:this.ikNode_47,p:{rotation:6.8731,x:664.45,y:489.7,regX:25.1,scaleX:0.9997,scaleY:0.9997,regY:17.6}},{t:this.ikNode_45,p:{regX:20.6,regY:10.2,rotation:6.8731,x:653.9,y:455.1,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_43,p:{regX:13.1,rotation:6.8731,x:649.6,y:437.8}},{t:this.ikNode_41,p:{rotation:6.8731,x:646.3,y:408.8}},{t:this.ikNode_39,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.8,y:497.05,regY:18.4,regX:24.7}},{t:this.ikNode_37,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.05,y:465.15,regX:25.5}},{t:this.ikNode_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:607.3,y:445.8,regY:8.2}},{t:this.ikNode_33,p:{regY:16.5,scaleX:0.9997,scaleY:0.9997,rotation:2.2892,x:606.8,y:409.85}},{t:this.ikNode_31,p:{regX:9.1,scaleX:0.9997,scaleY:0.9997,rotation:5.1545,x:607.85,y:394.45}},{t:this.ikNode_29,p:{rotation:0.5702,x:636.1,y:386.75}},{t:this.ikNode_27},{t:this.ikNode_25,p:{regY:7.7,scaleX:0.9997,scaleY:0.9997,rotation:-1.1431,x:543.7,y:429.8,regX:16.1}},{t:this.ikNode_23,p:{regX:20.9,rotation:-6.3017,x:522.05,y:422.6,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_21,p:{rotation:-6.3017,x:508.3,y:411.15,regY:8,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_18,p:{regX:31.7,rotation:-6.3017,x:580.6,y:306.6}},{t:this.ikNode_16,p:{rotation:11.9579,x:766.55,y:391.85,regX:14,scaleX:0.9997,scaleY:0.9997,regY:12.3}},{t:this.ikNode_14,p:{rotation:0.9008,x:753.35,y:406.45,scaleX:0.9997,scaleY:0.9997,regX:14.5,regY:15.2}},{t:this.ikNode_12,p:{regY:13.5,rotation:0.9008,x:732.6,y:413.65,scaleX:0.9997,scaleY:0.9997,regX:10.2}},{t:this.ikNode_10,p:{regX:56.8,scaleX:0.9996,scaleY:0.9996,rotation:-7.446,x:553.65,y:359.55}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:-27.2069,x:658.05,y:306.65,regY:-8.1}},{t:this.ikNode_8,p:{regY:23,rotation:0.9008,x:709.5,y:345.8,regX:21.4,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-24.637,x:580.65,y:306.45,regY:15.7,regX:15.6}},{t:this.ikNode_2,p:{regX:15.7,rotation:-3.4353,x:658.1,y:306.45,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(952.6,297,-195.30000000000007,218.5);
// library properties:
lib.properties = {
	id: 'A014AC68B5EFD449A7D9C34EBE8FB766',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
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
an.compositions['A014AC68B5EFD449A7D9C34EBE8FB766'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;