var s_HelloWorld = "HelloWorld.jpg";
var s_CloseNormal = "CloseNormal.png";
var s_CloseSelected = "CloseSelected.png";

var g_resources = [
    //image
    s_HelloWorld,
    s_CloseNormal,
    s_CloseSelected

    //plist

    //fnt

    //tmx

    //bgm

    //effect
];
var res = {
    s_HelloWorld : "HelloWorld.jpg",
    s_CloseNormal : "CloseNormal.png",
    s_CloseSelected : "CloseSelected.png"
};


var resources = [];
for (var i in res) {
    resources.push(res[i]);
}