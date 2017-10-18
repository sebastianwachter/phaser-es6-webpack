/* globals window document */
import 'pixi';
import 'p2';
import Phaser from 'phaser';

import BootState from './states/Boot';
import SplashState from './states/Splash';
import GameState from './states/Game';

import config from './config';
import './styles.css';

class Game extends Phaser.Game {
  constructor() {
    const doc = document.documentElement;
    const width = doc.clientWidth > config.gameWidth ? config.gameWidth : doc.clientWidth;
    const height = doc.clientHeight > config.gameHeight ? config.gameHeight : doc.clientHeight;

    super(width, height, Phaser.CANVAS, 'content', null);

    this.state.add('Boot', BootState, false);
    this.state.add('Splash', SplashState, false);
    this.state.add('Game', GameState, false);

    this.state.start('Boot');
  }
}

window.game = new Game();
