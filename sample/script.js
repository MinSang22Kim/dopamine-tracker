let cube = document.querySelector('.cube');
let x = 0;
let y = 0;

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp') {
        x -= 90;
    } else if (event.key === 'ArrowDown') {
        x += 90;
    } else if (event.key === 'ArrowLeft') {
        y -= 90;
    } else if (event.key === 'ArrowRight') {
        y += 90;
    }
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
});
