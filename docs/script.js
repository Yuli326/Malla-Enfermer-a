document.querySelectorAll('.ramo').forEach(ramo => {
  ramo.addEventListener('click', () => {
    ramo.classList.toggle('aprobado');

    const id = ramo.dataset.id;
    const dependientes = document.querySelectorAll(`.ramo[data-requiere~="${id}"]`);

    dependientes.forEach(dep => {
      if (ramo.classList.contains('aprobado')) {
        dep.classList.add('dependiente');
      } else {
        dep.classList.remove('dependiente');
      }
    });
  });
});
