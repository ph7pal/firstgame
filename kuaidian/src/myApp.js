var firstLayer=cc.Layer.extend({
    w : null,
    ctor : function(){
        this._super();

        var winSize = cc.director.getWinSize();

        var bgLayer = cc.LayerColor.create(cc.color(255, 255, 255, 255));
        bgLayer.setPosition(cc.p(0, 0));
        this.addChild(bgLayer, 0);

        var space=5;
        w=(winSize.width-2*9*space)/9;
        for(var r=0;r<9;r++){
            for(var c=0;c<9;c++){
                var layer = cc.LayerColor.create(cc.color(255, 0, 0, 128), w, w);
                layer.ignoreAnchorPointForPosition(false);
                var _left=(2*c+1)*(space+w/2);
                var _top=(2*r+1)*(space+w/2);
                layer.setPosition(_left, _top);
                this.addChild(layer, 1, 1);
            }
        }
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ALL_AT_ONCE,
            onTouchesBegan: function (touches, event) {
                var touch=touches[0]
                var target = event.getCurrentTarget();
                var locationInNode = target.convertToNodeSpace(touch.getLocation());
                var s = target.getContentSize();
                var rect = cc.rect(0, 0, s.width, s.height);

                var layer = cc.LayerColor.create(cc.color(0, 0, 0, 0), s.width, s.height);
                layer.ignoreAnchorPointForPosition(false);
                layer.setPosition(0, 0);
                cc.Layer.addChild(layer, 2, 1);


                if(cc.rectContainsPoint(rect, locationInNode)){
                    cc.log('yes');
                }else{
                    cc.log('no');
                }
                //return cc.rectContainsPoint(myRect,pos);

            }
        }, this);

    }




//    init:function(){
//        this._super();
//        var winSize = cc.director.getWinSize();
//
////        this.helloLabel = cc.LabelTTF.create("HAHAHAHA", "宋体", 38);
////        this.helloLabel.setPosition(size.width / 2, size.height-40);
////        this.addChild(this.helloLabel, 5);
//
//        this._bgLayer = cc.LayerColor.create(cc.color(255, 255, 255, 255));
//        this._bgLayer.setPosition(cc.p(0, 0));
//        this.addChild(this._bgLayer, 0);
//
//        var layer = cc.LayerColor.create(cc.c4b(255, 0, 0, 128), 200, 200);
//        layer.ignoreAnchorPointForPosition(false);
//        layer.setPosition(winSize.width / 2, winSize.height / 2);
//        this.addChild(layer, 1, 1);
//
//    }
});




var MyScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new firstLayer();
        this.addChild(layer);
        layer.init();
    }
});
