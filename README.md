![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | Canvas Race Car

## Introduction

We are ready to start making some games with `canvas` help, so in this first exercise, we will a **Car Race** using some basic animations we learned today.

Remember, you have the Learning Units to check any concept you might need. We are working with the `2D` context, so you should think the canvas is a cartesian plane, where you can move elements changing their position in any of the `axis`.

## Requirements

- Fork this repo
- Clone this repo

## Submission

- Upon completion, run the following commands:

  ```
  git add .
  git commit -m "done"
  git push origin master
  ```

- Create Pull Request so your TAs can check up your work.

## Instructions

### Iteration 1: Draw the game board

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_ab5a6ba28003829bd3d8d485feeee649.png)

The first thing we need is to create our board. The left side of the image is already on the HTML file, but when we click on the **Start Game** button, we need to create the canvas and display the road.

The canvas HTML element is already part of the HTML starter code provided in the `index.html` file. In the `images` folder, you can find the image of the road.

The *intrisic* dimensions of the `<canvas>` **should be 1000x1600**

You should add your drawing instructions inside the `js/main.js` `function draw() {}`.

### Iteration 2: Draw the car

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_9a8f35a079a1343f39cee4028ab8a081.png)

Once we have our road, we need the player's car. The same as for the raod, in the `images` folder, you will find a `.png` file you should use.

You should use the `Car` class:
- in the constructor, once image is loaded, assign `this.w`, `this.h`, `this.x` and `this.y`:
- `this.w` should be 100 units as width
- `this.h` should be computed thanks to `imgRatio` and `this.w`
- Then implement the `draw()` method

Once our `Car` class is ready, in `js/main.js` don't forget to create a new car 🚗 when `startGame()`! Don't also forget to draw it !

### Iteration 3: Make the car move right and left

In our game, the player will only be able to move the car to the right and left. Using `left` and `right` arrows, the player should be able to move the car.

For that you should implement the 2 methods `moveLeft()` and `moveRight` of the `Car` class.

NB: Use `document.onkeydown = function (e) {...}` already defined in `js/main.js` to detect the key pressed.

:bulb: Remember the boundaries!

### Iteration 4: Create obstacles

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_618fa6bbeed08f1e74b9457af1ecaf4c.png)

Now let's make this interesting. We should create obstacles that show up every specific amount of time.

They will always start in the position **0** of the `y` axis (the obstacles will be coming from the top of the canvas), but you should make them appear in a random place of the `x` axis.

[![](https://docs.google.com/drawings/d/e/2PACX-1vQp911dTXZuulGIzKAYlNdPjTb7h52l7FYgtaB6mQar322DnQFyUw6JfzxIWn-EjjDOgzJQDcEYc9Yx/pub?w=781&h=542)](https://docs.google.com/drawings/d/1f09QFPmbExntlXncpn1IXpgoTgUTD9BoIYhJqjP4DZg/edit?usp=sharing)

You should use the `Obstacle` class:
- in the `constructor()`, assign `this.w`, `this.h`, `this.x` and `this.h`
- then implement the `draw()` method

NB: Implement a utility `random(from, to)` function, to help you get random numbers for your obstacles.

NB: For moving the obstacles, we need to update our `canvas` continuously. In this iteration, you need to continually change the position of the obstacles in every update, making them move down the road.

### Iteration 5: Collisions

Implement the `hits()` method into `Obstacle` class:
- it takes the car as parameter
- it should return a boolean wether the obstacle hits the car (or not).

[![](https://docs.google.com/drawings/d/e/2PACX-1vSlqRxHRvi1S7_Cn_QdawnlEl-RoLGKBbxteUPuMS0DK5m-BCUkK1_UrsStmHLNQGut2rAgH1vseeE1/pub?w=626&h=409)]()

NB: car hits an obstacle when car is in-between obstacle horizontally and vertically :)

Once `hits()` implemented, test it against each obstacle in `js/main.js`.

If one hits the car, pass `gameover` to `true` so it won't call `requestAnimationFrame` next frame, ie: stop the gameloop.

### Iteration 6: Points, points, points

Oh! If we want to challenge somebody, we need to quantify who is making it better. So we need to add a **score**. Go ahead and add a method to count points while you keep the car avoiding obstacles.

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_e4b1a09cee1b1a827a2c68023d0d2b1f.png)

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_4e64a09180fd0add2766f7e28ebce6bf.png)

<br>

**Happy coding!** :heart:
