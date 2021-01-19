window.onload = function () {

    var canvas;
    var context;
    var delay = 100;
    var xPosition = 0;
    var Yposition = 0;

    init();

    function init() {
         canvas = document.createElement('canvas');
        // Permet de créer l'élément Canvas
        canvas.width = 1420;
        canvas.height = 800;
        canvas.style.border = "5px solid black";
        // Attribution du style de mon canvas
        document.body.appendChild(canvas);
        // Ici on rattache le canvas au body du docuement html      
        context = canvas.getContext('2d')
        // Permet d'écrire dans le context en 2D
        refreshCanvas();
        }

    function refreshCanvas () {
        xPosition += 2;
        Yposition += 2;

        context.fillStyle = "#ff0000"
        // Permet de choisir la couleur avec laquelle je vais dessiner
        context.clearRect(0, 0, canvas.width, canvas.height);
        // Permet d'effacer le rectangle avant de le recréer, ce qui donne une impression de mouvement.
        context.fillRect(xPosition, Yposition, 100, 50);
        // Création du rectangle
        setTimeout(refreshCanvas, delay)
    }


}