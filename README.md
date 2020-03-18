# my Canvas

A very hacky app that exposes a canvas so you can draw and plot things with [JavaScript Canvas Code](https://www.w3schools.com/html/html5_canvas.asp).

![screenshot](screenshot.png)

[Live Version](https://victorribeiro.com/myCanvas)

## About

Some times I really need a canvas to plot or draw something, so I came up with this very hacky way of exposing a canvas as an app. Hope is usefull to you.

## How to use it

Type code as you would type when programming a canvas application. Hit enter to execute the code.

Copy and paste the code below to recreate the beautiful artpiece of the screenshot:
```
clearRect(0,0,1400,700)
fillStyle = 'lightblue'
fillRect(0,0,900,500)
fillStyle = 'green'
fillRect(0,500,900,50)
beginPath()
arc(100,100,30,0,2*Math.PI)
fillStyle = 'gold'
fill()
fillStyle = 'gray'
strokeStyle = 'black'
fillRect(700,430,150,100)
strokeRect(700,430,150,100)
fillStyle = 'brown'
fillRect(725,460,30,30)
strokeRect(725,460,30,30)
fillRect(780,460,40,70)
strokeRect(780,460,40,70)
beginPath()
moveTo(700,430)
lineTo(850,430)
lineTo(775,370)
lineTo(700,430)
fillStyle = 'red'
fill()
stroke()
```
