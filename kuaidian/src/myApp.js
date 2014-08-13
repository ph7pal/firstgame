var firstLayer=cc.Layer.extend({
    init:function(){
        this._super();
        var size = cc.director.getWinSize();

        this.helloLabel = cc.LabelTTF.create("HAHAHAHA", "宋体", 38);
        this.helloLabel.setPosition(size.width / 2, size.height-40);
        this.addChild(this.helloLabel, 5);

        this._bgLayer = cc.LayerColor.create(cc.color(255, 255, 255, 255));
        this._bgLayer.setPosition(cc.p(0, 0));
        this.addChild(this._bgLayer, 0);
    }
});




var MyScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new firstLayer();
        this.addChild(layer);
        layer.init();
    }
});
