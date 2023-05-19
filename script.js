document.querySelector('a[href="#Sobre"]').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('container').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('a[href="#Saiba-mais"]').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('Saiba-mais').scrollIntoView({ behavior: 'smooth'});
})

document.querySelector('a[href="#esperiencia"]').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('esperiencia').scrollIntoView({ behavior: 'smooth'});
})