import * as m from 'mithril';
import { Page, State } from "./page";

var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

export class Players extends Page {

    oncreate(){ console.log("create"); }
    oninit(){ console.log("init"); }

    toString() { return "Players"; }

}

    // var Canvas = {};
    //
    // Canvas.view = function() {
    //     return m("canvas", {width: WIDTH, height: HEIGHT - 60});
    // };
    //
    // Canvas.oncreate = function() {
    //     var canvas = document.querySelector("canvas");
    //
    //     canvas.addEventListener("touchstart", function(e) {
    //         e.preventDefault();
    //     });
    //
    //     // canvas.addEventListener("click", function(e) {
    //     // });
    //
    //
    //     window.requestAnimationFrame(Canvas.draw);
    // };
    //
    // Canvas.draw = function() {
    //     var canvas = document.querySelector("canvas");
    //
    //     if (canvas) {
    //         var ctx = canvas.getContext("2d");
    //
    //         ctx.clearRect(0, 0, WIDTH, HEIGHT);
    //
    //         ctx.textAlign = "center";
    //         ctx.fillText("Each player places a finger on the screen", WIDTH/2, 200);
    //
    //         ctx.fillStyle = "green";
    //         ctx.fillRect(10, 10, 100, 100);
    //
    //         window.requestAnimationFrame(Canvas.draw);
    //     }
    //
    //
    // }
