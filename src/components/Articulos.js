// ARCHIVO: noticias.js
document.addEventListener('DOMContentLoaded', () => {
  
  // 1. INYECCIÓN DINÁMICA DE ESTILOS CSS PREMIUM
  const premiumStyles = document.createElement('style');
  premiumStyles.textContent = `
    * { margin: 0; padding: 0; box-sizing: border-box; }
    :root {
      --bg-premium: #090a0f;
      --surface-premium: #12131a;
      --border-soft: rgba(255, 255, 255, 0.06);
      --accent-gold: #d4af37;
      --text-main: #f3f4f6;
      --text-muted: #8e939e;
      --premium-bezier: cubic-bezier(0.16, 1, 0.3, 1);
    }
    body {
      background-color: var(--bg-premium);
      color: var(--text-main);
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      line-height: 1.6;
      padding: 40px 20px;
    }
    .container { max-width: 1200px; margin: 0 auto; padding-top:100px;}
    
    .news-header { text-align: center; border-bottom: 1px solid var(--border-soft); padding-bottom: 40px; margin-bottom: 40px; }
    .news-header .brand {
      font-family: 'Playfair Display', serif; font-size: 3rem; font-weight: 700; letter-spacing: -0.03em; text-transform: uppercase;
      background: linear-gradient(180deg, #ffffff 0%, #b5bac9 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 10px;
    }
       .news-meta-info { 
      font-size: 0.75rem; 
      text-transform: uppercase; 
      letter-spacing: 0.2em; 
      color: var(--text-muted); 
      display: flex; 
      justify-content: center; 
      align-items: center; /* Alinea verticalmente los textos y el punto */
      gap: 20px; 
    }
    .news-meta-info span strong { color: var(--accent-gold); }

    /* Contenedor del temporizador con el punto rojo en vivo */
    .news-meta-info span:has(#update-timer) {
      display: inline-flex;
      align-items: center;
      gap: 8px; /* Distancia entre el punto rojo y el texto */
    }

    /* Creación del indicador de pulso rojo */
    .news-meta-info span:has(#update-timer)::before {
      content: '';
      width: 8px;
      height: 8px;
      background-color: #ef4444; /* Rojo vivo */
      border-radius: 50%;
      display: inline-block;
      box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7);
      animation: pulsePremium 2s infinite cubic-bezier(0.66, 0, 0, 1);
    }

    /* Animación premium de parpadeo y expansión */
    @keyframes pulsePremium {
      0% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7);
      }
      70% {
        transform: scale(1);
        box-shadow: 0 0 0 8px rgba(239, 68, 68, 0);
      }
      100% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(239, 68, 68, 0);
      }
    }

    
    .category-filter { display: flex; justify-content: center; gap: 15px; margin-bottom: 40px; }
    .filter-btn {
      background: transparent; border: 1px solid var(--border-soft); color: var(--text-muted); padding: 10px 24px; border-radius: 30px;
      cursor: pointer; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.1em; transition: all 0.4s var(--premium-bezier);
    }
    .filter-btn.active, .filter-btn:hover { color: #000000; background-color: #ffffff; border-color: #ffffff; box-shadow: 0 10px 20px rgba(255,255,255,0.1); }
    
    .news-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: 30px; }
    .news-card {
      background-color: var(--surface-premium); border: 1px solid var(--border-soft); border-radius: 20px; overflow: hidden;
      display: flex; flex-direction: column; box-shadow: 0 20px 40px rgba(0,0,0,0.3); transition: all 0.6s var(--premium-bezier);
    }
    .card-featured { grid-column: span 8; flex-direction: row; height: 450px; }
    .card-secondary { grid-column: span 4; }
    .card-standard { grid-column: span 4; }
    
    .news-image-wrapper { position: relative; overflow: hidden; background-color: #1a1c23; height: 220px; }
    .card-featured .news-image-wrapper { width: 55%; height: 100%; }
    .card-featured .news-content { width: 45%; padding: 40px; }
    .news-image-wrapper img { width: 100%; height: 100%; object-fit: cover; opacity: 0.7; transition: all 0.8s var(--premium-bezier); }
    
    .news-tag {
      position: absolute; top: 20px; left: 20px; background: rgba(12, 13, 26, 0.8); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
      border: 1px solid rgba(255,255,255,0.1); padding: 6px 14px; border-radius: 30px; font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.15em; color: var(--text-main);
    }
    .news-content { padding: 30px; display: flex; flex-direction: column; flex-grow: 1; }
    .news-date { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--accent-gold); margin-bottom: 12px; }
    .news-title { font-size: 1.3rem; font-weight: 400; line-height: 1.3; margin-bottom: 15px; letter-spacing: -0.01em; transition: color 0.3s ease; }
    .card-featured .news-title { font-size: 2rem; line-height: 1.2; }
    .news-excerpt { color: var(--text-muted); font-size: 0.9rem; margin-bottom: 20px; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
    
    .news-footer { margin-top: auto; display: flex; align-items: center; justify-content: space-between; border-top: 1px solid var(--border-soft); padding-top: 20px; font-size: 0.75rem; color: var(--text-muted); }
    .read-more { color: var(--text-main); text-decoration: none; font-weight: 500; display: flex; align-items: center; gap: 6px; transition: color 0.3s ease; }
    
    .news-card:hover { transform: translateY(-8px); border-color: rgba(255, 255, 255, 0.15); box-shadow: 0 30px 60px rgba(0,0,0,0.6); }
    .news-card:hover .news-image-wrapper img { transform: scale(1.05); opacity: 0.9; }
    .news-card:hover .news-title { color: var(--accent-gold); }
    .read-more:hover { color: var(--accent-gold); }
    
    @media (max-width: 1024px) {
      .card-featured, .card-secondary, .card-standard { grid-column: span 12; }
      .card-featured { flex-direction: column; height: auto; }
      .card-featured .news-image-wrapper, .card-featured .news-content { width: 100%; }
      .card-featured .news-image-wrapper { height: 260px; }
    }
  `;
  document.head.appendChild(premiumStyles);

  // 2. MATRICES DE DATOS (ARTÍCULOS Y CATEGORÍAS DE GRUPO JCF)
  const articlesData = [
    {
      id: 1,
      type: 'card-featured',
      category: 'people',
      tag: 'Manipulación',
      image: 'https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000',
      section: 'Estrategia difamación',
      title: 'Titulo - No disponible',
      excerpt: 'Descripción - No disponible',
      readingTime: '5 min',
      url: '/Leer_articulo'
    },
    {
      id: 2,
      type: 'card-secondary',
      category: 'tech',
      tag: 'Tendencia',
      image: 'https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000',
      section: 'Reciente',
      title: 'Titulo - No disponible',
      excerpt: 'Descripción - No disponible',
      readingTime: '3 min',
      url: '/Leer_articulo_1'
    },
    {
      id: 3,
      type: 'card-standard',
      category: 'controversies',
      tag: 'Problemas',
      image: 'https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000',
      section: 'Justificado',
      title: 'Titulo - No disponible',
      excerpt: 'Descripción - No disponible',
      readingTime: '4 min',
      url: '/Leer_articulo_2'
    },
    {
      id: 4,
      type: 'card-standard',
      category: 'people',
      tag: 'Aprobado',
      image: 'https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000',
      section: 'Sin pruebas',
    title: 'Titulo - No disponible',
      excerpt: 'Descripción - No disponible',
      readingTime: '6 min',
      url: '/Leer_articulo_3'
    },
    {
      id: 5,
      type: 'card-standard',
      category: 'tech',
      tag: 'Moderno',
      image: 'https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000',
      section: 'Aprobado',
    title: 'Titulo - No disponible',
      excerpt: 'Descripción - No disponible',
      readingTime: '5 min',
      url: '/Leer_articulo_4'
    },   
    {
      id: 6,
      type: 'card-standard',
      category: 'tech',
      tag: 'Moderno',
      image: 'https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000',
      section: 'Aprobado',
     title: 'Titulo - No disponible',
      excerpt: 'Descripción - No disponible',
      readingTime: '5 min',
      url: '/Leer_articulo_5'
    }, 
    {
      id: 7,
      type: 'card-standard',
      category: 'tech',
      tag: 'Moderno',
      image: 'https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000',
      section: 'Aprobado',
     title: 'Titulo - No disponible',
      excerpt: 'Descripción - No disponible',
      readingTime: '5 min',
      url: '/Leer_articulo_6'
    },   
    {
      id: 8,
      type: 'card-standard',
      category: 'tech',
      tag: 'Moderno',
      image: 'https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000',
      section: 'Aprobado',
     title: 'Titulo - No disponible',
      excerpt: 'Descripción - No disponible',
      readingTime: '5 min',
      url: '/Leer_articulo_7'
    },
        {
      id: 9,
      type: 'card-standard',
      category: 'tech',
      tag: 'Moderno',
      image: 'https://lh3.googleusercontent.com/d/1ZKVltJP559XoWmaAtCDgkFKV_uqWAwz8=w1000',
      section: 'Aprobado',
     title: 'Titulo - No disponible',
      excerpt: 'Descripción - No disponible',
      readingTime: '5 min',
      url: '/Leer_articulo_7'
    }
  ];

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'people', label: 'Personas' },
    { id: 'tech', label: 'Tecnología' },
    { id: 'controversies', label: 'Polémicas' }
  ];

  // 3. ESTRUCTURACIÓN DEL DOM DENTRO DEL CONTENEDOR PRINCIPAL
  const body = document.body;
  const container = document.createElement('div');
  container.className = 'container';

  // Inyección segura respetando un posible footer existente en tu plantilla
  const existingFooter = document.querySelector('.footer_1');
  if (existingFooter) {
    body.insertBefore(container, existingFooter);
  } else {
    body.appendChild(container);
  }

  // Creación del Encabezado fijo
  const header = document.createElement('header');
  header.className = 'news-header';
  header.innerHTML = `
    <h1 class="brand">Noticias recientes</h1>
    <div class="news-meta-info">
      <span id="live-date"></span>
    
      <span>Actualización: <strong id="update-timer">Hace un momento</strong></span>
    </div>
  `;
  container.appendChild(header);

  // Creación de la Barra Navegadora de Filtros fija
  const filterNav = document.createElement('nav');
  filterNav.className = 'category-filter';
  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = `filter-btn ${cat.id === 'all' ? 'active' : ''}`;
    btn.setAttribute('data-category', cat.id);
    btn.textContent = cat.label;
    filterNav.appendChild(btn);
  });
  container.appendChild(filterNav);

  // Definición de la etiqueta MAIN para la Rejilla de contenido general
  const mainGrid = document.createElement('main');
  mainGrid.className = 'news-grid';
  container.appendChild(mainGrid);

  // 4. FUNCIÓN DE RENDERIZADO DE TARJETAS (Aislada de elementos estáticos)
  function renderArticles() {
    mainGrid.innerHTML = ''; // Limpia el contenido mutable sin destruir el header ni los botones externos
    
    articlesData.forEach(art => {
      const article = document.createElement('article');
      article.className = `news-card ${art.type}`;
      article.setAttribute('data-category', art.category);
      
      // ... Viene de: article.setAttribute('data-category', art.category);

      article.innerHTML = `
        <div class="news-image-wrapper">
          <span class="news-tag">${art.tag}</span>
          <img src="${art.image}" alt="${art.title}" loading="lazy">
        </div>
        <div class="news-content">
          <div class="news-date">${art.section}</div>
          <h2 class="news-title">${art.title}</h2>
          <p class="news-excerpt">${art.excerpt}</p>
          <div class="news-footer">
            <span>Lectura: ${art.readingTime}</span>
            <a href="${art.url}" target="_blank" rel="noopener noreferrer" class="read-more">Leer artículo ↗</a>
          </div>
        </div>
      `;
      mainGrid.appendChild(article);
    });
  }

  // Renderizado inicial
  renderArticles();

  // 5. SISTEMA DINÁMICO DE FILTRADO (VINCULACIÓN DE EVENTOS DE CLIC)
  const filterButtons = filterNav.querySelectorAll('.filter-btn');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const targetCategory = button.getAttribute('data-category');
      const newsCards = mainGrid.querySelectorAll('.news-card');

      newsCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');

        if (targetCategory === 'all' || cardCategory === targetCategory) {
          card.style.display = 'flex';
          
          // Corrección del layout Grid para mantener consistencia visual premium
          if (card.classList.contains('card-featured')) {
            card.style.gridColumn = window.innerWidth > 1024 ? 'span 8' : 'span 12';
          } else {
            card.style.gridColumn = window.innerWidth > 1024 ? 'span 4' : 'span 12';
          }

          requestAnimationFrame(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1) translateY(0)';
          });
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95) translateY(10px)';

          card.addEventListener('transitionend', function handler(e) {
            if (e.propertyName === 'opacity' && card.style.opacity === '0') {
              card.style.display = 'none';
              card.style.gridColumn = 'none'; // Desacopla de la rejilla para que el resto se reacomode libremente
              card.removeEventListener('transitionend', handler);
            }
          });
        }
      });
    });
  });

  // 6. TIEMPO, FECHAS EN VIVO Y CONTADORES
  const dateElement = document.getElementById('live-date');
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  dateElement.textContent = new Date().toLocaleDateString('es-ES', dateOptions);

  let minutesElapsed = 0;
  const timerElement = document.getElementById('update-timer');

  setInterval(() => {
    minutesElapsed++;
    if (minutesElapsed < 60) {
      timerElement.textContent = `Hace ${minutesElapsed} min`;
    } else {
      const hours = Math.floor(minutesElapsed / 60);
      timerElement.textContent = hours === 1 ? `Hace 1 hora` : `Hace ${hours} horas`;
    }
  }, 60000);
});
