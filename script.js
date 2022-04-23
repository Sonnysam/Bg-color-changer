const btn = document.getElementById('btn');



btn.addEventListener('click', () => {
    const color = document.getElementById("color");
document.body.style.backgroundColor = color.value;

});