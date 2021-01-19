window.onload = function () {

    var canvasWidth = 1420;
    var canvasHeight = 800;
    var blockSize = 30;
    var context;
    var delay = 100;
    var Aoda;

    init();

    function init() {
        var canvas = document.createElement('canvas');
        // Permet de créer l'élément Canvas
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        canvas.style.border = "5px solid black";
        // Attribution du style de mon canvas
        document.body.appendChild(canvas);
        // Ici on rattache le canvas au body du docuement html      
        context = canvas.getContext('2d')
        // Permet d'écrire dans le context en 2D
        Aoda = new Snake([[6, 4], [5, 4], [4, 4]])
        refreshCanvas();
        }

    function refreshCanvas () {
        context.clearRect(0, 0, canvasWidth, canvasHeight);
        // Permet d'effacer le rectangle avant de le recréer, ce qui donne une impression de mouvement.
        // Création du rectangle
        Aoda.draw();
        Aoda.advance();
        setTimeout(refreshCanvas, delay)

         
    }

    function drawBlock (context, position) {
        var x = position[0] * blockSize;
        var y = position[1] * blockSize;
        context.fillRect(x, y, blockSize, blockSize);
    }

    function Snake(body) {
        this.body = body;
        this.draw = function() {
            context.save();
            context.fillStyle = "#ff0000";
            // Permet de choisir la couleur avec laquelle je vais dessiner
            for(var i = 0; i < this.body.length; i++) {
                drawBlock(context, this.body[i]);
            }
            // au-dessus je dessine mon serpent, en dessous je le reinitialise.
            context.restore();
        }
        this.advance = function() {
            var nextPosition = this.body[0].slice();
            nextPosition[0] += 1;
            this.body.unshift(nextPosition);
            // Je créer un élement sur mon serpent - dans mon tableau
            this.body.pop();
            // Je supprime le dernier élément de mon serpent - dans mon tableau
        }
    }


}