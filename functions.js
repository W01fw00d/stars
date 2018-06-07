$(document).ready(init);

function init() 
{
    canvas = document.getElementById("stars");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
        
    createUniverse();
}

function createUniverse()
{
    var canvas = document.getElementById("stars");
    var context = canvas.getContext("2d");
    
    paintAllCanvasBlack(canvas, context);
    smoothPixels(context);
    createStars(canvas, context);
}

function createStars(canvas, context)
{
    var white = '#FFFFFF';
    
    for (var i = 0; i < calculateNStars(); i++) {
        drawRandomPositionStar(canvas, context, white);
    }
}

function calculateNStars()
{
    var max_stars = 800;
    var n_stars = Math.floor(Math.random() * max_stars);
    return n_stars < (max_stars / 2) ? 
	   max_stars / 2 : 
	   n_stars;
}

function paintAllCanvasBlack(canvas, context)
{
    context.fillStyle = '#000000';
    context.fillRect(0, 0, canvas.width, canvas.height);
}

function smoothPixels(context)
{
	context.translate(1, 1);
    context.lineWidth = .5;
}

function drawRandomPositionStar(canvas, context, color)
{
	var x = Math.floor(Math.random() * canvas.width);
	var y = Math.floor(Math.random() * canvas.height);
	
	drawStar(context, x, y, 1, color);
}

function drawStar(context, x, y, size, color)
{
    context.fillStyle = color;
    context.fillRect(x, y, size, size);
}

function makeRandomColor() 
{
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    
    return color;
}

function drawBigStar(context, x, y, size)
{
	context.fillStyle = '#FFFFFF';
	context.fillRect(x, y, size, size);
	context.fillStyle = makeRandomColor();
	context.fillRect(x + 1, y, size, size);
	context.fillRect(x, y + 1, size, size);
	context.fillRect(x - 1, y, size, size);
	context.fillRect(x, y - 1, size, size);
}