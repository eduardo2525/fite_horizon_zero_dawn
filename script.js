document.querySelector('a[href="#Sobre"]').addEventListener('click', function (e) {
    e.preventDefault();
    setTimeout(function() {
        document.getElementById('container').scrollIntoView({ behavior: 'smooth' });
    }, 500)
    
});

document.querySelector('a[href="#Saiba-mais"]').addEventListener('click', function (e) {
    e.preventDefault();
    setTimeout(function() {
        document.getElementById('Saiba-mais').scrollIntoView({ behavior: 'smooth'});
    }, 500)
    
})

document.querySelector('a[href="#esperiencia"]').addEventListener('click', function (e) {
    e.preventDefault();
    setTimeout(function() {
        document.getElementById('esperiencia').scrollIntoView({ behavior: 'smooth'});
    }, 500)
})