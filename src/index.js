import 'phaser';

import { SimpleScene } from 'src/scenes/simple-scene';
import { Socket } from 'socket.io/lib/socket';

const gameConfig = {
    width: 680,
    height: 400,
    scene: SimpleScene
};

// commont
new Phaser.Game(gameConfig);