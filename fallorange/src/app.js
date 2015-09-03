var char01;
var char02;
var bomb;
var ground;
var groundHeight = 40;
var score = 0;
var heart = 3;
var bgm;


var StageLayer = cc.Layer.extend({
    //初期化
    init:function(){
        this._super();
        var size = cc.winSize;
        
        //char設定
        char01 = cc.Sprite(res.char01_png);
        char01.setPosition(0, 640-groundHeight);
        this.addchild(char01, 10);
        
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

