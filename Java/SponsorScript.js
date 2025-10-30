window.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('mur-sponsors');
  if (!container) {
    console.error('❌ Elément #mur-sponsors introuvable');
    return;
  }

  const logos = Array.from(container.querySelectorAll('.sponsor-img'));
  if (logos.length === 0) {
    console.warn('⚠️ Aucun .sponsor-img trouvé à l’intérieur de #mur-sponsors');
    return;
  }

  container.innerHTML = '';

  let index = 0;
  let toggle = true; // alterne 3 -> 4

  while (index < logos.length) {
    const wanted = toggle ? 3 : 4;
    const row = document.createElement('div');
    row.className = 'row-sponsors';

    for (let i = 0; i < wanted && index < logos.length; i++, index++) {
      row.appendChild(logos[index]);
    }

    const actual = row.children.length || 1;
    row.style.setProperty('--count', actual);
    console.log(`ligne créée - souhaitée: ${wanted}, réelle: ${actual}`);

    container.appendChild(row);
    toggle = !toggle;
  }

  console.log('%c✅ Mur de sponsors construit', 'color:green;font-weight:700');
});
