window.onload = function () {
    const canvas = document.createElement('canvas');
    // Permet de créer l'élément Canvas
    canvas.width = 1420;
    canvas.height = 800;
    canvas.style.border = "5px solid green";
    // Attribution du style de mon canvas
    document.body.appendChild(canvas);
    // Ici on rattache le canvas au body du docuement html

    var context = canvas.getContext('2d')
    // Permet d'écrire dans le context en 2D
    context.fillStyle = "#ff0000"
    // Permet de choisir la couleur avec laquelle je vais dessiner
    context.fillRect(30, 30, 100, 50)
    // Création du rectangle
}