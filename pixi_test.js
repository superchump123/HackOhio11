import { Application, Assets, Sprite } from "pixi.js";

const app = new Application;

document.body.appendChild(app.view);

const texture1 = await Assets.load();

const first_floor = new Sprite(texture);

first_floor.x = app.renderer.width / 2;
first_floor.y = app.renderer.height / 2;

app.stage.addChild(first_floor);