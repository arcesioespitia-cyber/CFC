const FACTOR_C_WHATSAPP = '573052933792';

const unions = [
  {
    name: 'SINTRACLÍNICA Medellín',
    sector: 'salud',
    city: 'Medellín, Antioquia',
    keywords: 'clínica medellín quirónsalud salud enfermería administración hospital trabajadores clínica medellín',
    description: 'Sindicato de trabajadoras y trabajadores de la Clínica Medellín, orientado a la defensa del trabajo digno en el sector salud.',
    logo: 'sintraclinica.png',
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent('Hola, quiero orientación sobre SINTRACLÍNICA Medellín.')}`
  },
  {
    name: 'SINTRAMUNE',
    sector: 'publico',
    city: 'Envigado, Antioquia',
    keywords: 'municipio envigado entidad pública servidores públicos descentralizadas trabajadores municipales',
    description: 'Organización sindical de trabajadoras y trabajadores municipales y entidades descentralizadas.',
    logo: 'sintramune.jpg',
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent('Hola, quiero orientación sobre SINTRAMUNE.')}`
  },
  {
    name: 'SINTRASASS Subdirectiva Medellín',
    sector: 'salud',
    city: 'Medellín, Antioquia',
    keywords: 'clínica hospital salud seguridad social prado las vegas trabajadores salud',
    description: 'Organización de trabajadoras y trabajadores del sector salud y la seguridad social.',
    logo: 'sintrasass-transparente.png',
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent('Hola, quiero orientación sobre SINTRASASS Subdirectiva Medellín.')}`
  },
  {
    name: 'SINTRABECÓLICAS Subdirectiva Medellín',
    sector: 'industria',
    city: 'Medellín, Antioquia',
    keywords: 'licorera fábrica licores antioquia industria bebidas producción trabajadores bebidas alcohólicas',
    description: 'Sindicato del sector industrial con énfasis en negociación colectiva y defensa del trabajo digno.',
    logo: 'sintrabecolicas.jpg',
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent('Hola, quiero orientación sobre SINTRABECÓLICAS Subdirectiva Medellín.')}`
  },
  {
    name: 'SINDESENA',
    sector: 'educacion',
    city: 'Colombia',
    keywords: 'sena educación formación profesional instructores aprendices servidores sindicato del sena público',
    description: 'Sindicato del SENA para la defensa de los derechos laborales, la formación pública y el diálogo social.',
    logo: 'sindesena.jpeg',
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent('Hola, quiero orientación sobre SINDESENA.')}`
  },
  {
    name: 'SINTRAINVIMA',
    sector: 'publico',
    city: 'Colombia / INVIMA',
    keywords: 'invima salud pública medicamentos alimentos vigilancia sanitaria servidores públicos sintrainvima instituto nacional',
    description: 'Sindicato nacional de trabajadoras y trabajadores del INVIMA, orientado a la defensa del empleo público y la salud pública.',
    logo: 'sintrainvima.png',
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent('Hola, quiero orientación sobre SINTRAINVIMA.')}`
  },
  {
    name: 'SUNET Subdirectiva Medellín',
    sector: 'publico',
    city: 'Medellín, Antioquia',
    keywords: 'sindicato unitario nacional trabajadores estado sunet subdirectiva medellín medellin servidores públicos estado sector público',
    description: 'SUNET Subdirectiva Medellín: organización sindical del sector estatal orientada a la unidad, la organización y la defensa del empleo público.',
    logo: 'sunet.jpeg',
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent('Hola, quiero orientación sobre SUNET Subdirectiva Medellín.')}`
  },

  {
    name: 'Unión Sindical Salud Comfenalco',
    sector: 'salud',
    city: 'Antioquia / Comfenalco',
    keywords: 'unión sindical salud comfenalco sindicato salud caja compensación trabajadores salud comfenalco',
    description: 'Organización sindical de trabajadoras y trabajadores del sector salud vinculados a Comfenalco, orientada a la defensa del trabajo digno y la organización colectiva.',
    logo: 'union-sindical-salud-comfenalco.png',
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent('Hola, quiero orientación sobre Unión Sindical Salud Comfenalco.')}`
  },
  {
    name: 'Sindicato por crear o fortalecer',
    sector: 'servicios',
    city: 'Colombia',
    keywords: 'call center vigilancia aseo tercerización servicios generales bpo crear sindicato afiliación organización sindical',
    description: 'Si en tu empresa no hay sindicato, CFC puede orientarte sobre organización, afiliación y rutas jurídicas.',
    logo: 'logo-redondo-cfc.png',
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent('Hola, quiero orientación para crear o fortalecer un sindicato.')}`
  }
];

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.addEventListener('click', (event) => {
    if (event.target.matches('a')) {
      navMenu.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

const accordion = document.querySelector('[data-accordion]');
if (accordion) {
  accordion.addEventListener('click', (event) => {
    const trigger = event.target.closest('.accordion-trigger');
    if (!trigger) return;

    const item = trigger.closest('.accordion-item');
    const isOpen = item.classList.contains('is-open');

    accordion.querySelectorAll('.accordion-item').forEach((entry) => {
      entry.classList.remove('is-open');
      entry.querySelector('.accordion-trigger').setAttribute('aria-expanded', 'false');
    });

    if (!isOpen) {
      item.classList.add('is-open');
      trigger.setAttribute('aria-expanded', 'true');
    }
  });
}

const sectorFilter = document.querySelector('#sectorFilter');
const cityFilter = document.querySelector('#cityFilter');
const keywordFilter = document.querySelector('#keywordFilter');
const unionResults = document.querySelector('#unionResults');

function normalize(text) {
  return String(text).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function renderUnions() {
  if (!unionResults || !sectorFilter || !cityFilter || !keywordFilter) return;

  const sector = sectorFilter.value;
  const city = normalize(cityFilter.value || '');
  const keyword = normalize(keywordFilter.value || '');

  const filtered = unions.filter((union) => {
    const matchesSector = sector === 'todos' || union.sector === sector;
    const cityText = normalize(union.city);
    const searchText = normalize(`${union.name} ${union.description} ${union.keywords} ${union.city}`);
    const matchesCity = !city || cityText.includes(city) || searchText.includes(city);
    const matchesKeyword = !keyword || searchText.includes(keyword);
    return matchesSector && matchesCity && matchesKeyword;
  });

  if (!filtered.length) {
    unionResults.innerHTML = `
      <div class="no-results">
        <h3>No encontramos coincidencias exactas.</h3>
        <p>Escríbenos y revisamos tu caso: puede existir un sindicato por empresa, por industria, por oficio o una ruta para organizar uno nuevo.</p>
        <a class="text-link" href="https://wa.me/${FACTOR_C_WHATSAPP}" target="_blank" rel="noopener">Pedir orientación →</a>
      </div>
    `;
    return;
  }

  unionResults.innerHTML = filtered.map((union) => `
    <article class="union-card">
      <span class="badge">${union.sector}</span>
      <div class="union-card-header">
        <img class="union-card-logo" src="${union.logo}" alt="Logo ${union.name}" loading="lazy" />
        <h3>${union.name}</h3>
      </div>
      <p>${union.description}</p>
      <footer>
        <span>${union.city}</span>
        <a href="${union.contact}" target="_blank" rel="noopener">Orientarme →</a>
      </footer>
    </article>
  `).join('');
}

[sectorFilter, cityFilter, keywordFilter].forEach((control) => {
  if (control) control.addEventListener('input', renderUnions);
});
renderUnions();

const contactForm = document.querySelector('#contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.querySelector('#contactName')?.value.trim() || 'Sin nombre';
    const info = document.querySelector('#contactInfo')?.value.trim() || 'Sin dato de contacto';
    const message = document.querySelector('#contactMessage')?.value.trim() || 'Quiero recibir orientación de Corporación Factor C.';
    const text = `Hola Corporación Factor C. Mi nombre es ${name}. Mi contacto es ${info}. Necesito: ${message}`;
    window.open(`https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
