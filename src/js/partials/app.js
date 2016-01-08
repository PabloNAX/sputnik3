
//Trianglify background generator


var pattern = Trianglify({
    width: window.innerWidth,
    height: 650,
    cell_size: 40,
    x_colors: 'random'
});
document.body.appendChild(pattern.canvas());