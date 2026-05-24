// header.js
document.addEventListener("DOMContentLoaded", () => {
  // Insertar estilos en <head>
  const style = document.createElement("style");
  style.textContent = `
     :root {
            --primary: #6366f1;
            --dark: white;
            --light: #f8fafc;
      }

        * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Segoe UI', sans-serif;    
            list-style: none; /* Elimina puntos de todas las listas */
            text-decoration: none;}

        .navbar {
            position: fixed; top: 0; width: 100%; height: 70px;
           background: linear-gradient(145deg, #1c1c1c, #0f0f0f);
display: flex; align-items: center;
            justify-content: space-between; padding: 0 5%;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1); z-index: 1000;
        }

        .logo { font-size: 1.5rem; font-weight: 800; color: var(--primary); text-decoration: none; }

        .menu-btn { font-size: 1.8rem; background: none; border: none; cursor: pointer; display: none; }

        /* NAVEGACIÓN BASE */
        .nav-links { display: flex; list-style: none; gap: 10px; }
        .nav-item { position: relative; list-style: none; }
        .nav-link {
            text-decoration: none; color: var(--dark); font-weight: 600;
            padding: 15px 20px; display: flex; justify-content: space-between; align-items: center;
            cursor: pointer; border-radius: 8px;
        }

        /* SUBMENÚS (DESKTOP) */
        .submenu {
            position: absolute; top: 100%; left: 0; background: white;
            min-width: 200px; box-shadow: 0 8px 20px rgba(0,0,0,0.1);
            border-radius: 10px; display: none; padding: 10px 0;
        }

        /* SEGUNDO NIVEL (Instagram -> Facebook) */
        .sub-submenu {
            position: absolute; top: 0; left: 100%; background: white;
            min-width: 200px; box-shadow: 0 8px 20px rgba(0,0,0,0.1);
            border-radius: 10px; display: none; padding: 10px 0;
        }

        /* MOSTRAR EN DESKTOP */
        @media (min-width: 993px) {
            .nav-item:hover > .submenu { display: block; }
            .nav-item:hover > .sub-submenu { display: block; }
            .nav-link:hover { background: var(--light); color: var(--primary); }
        }

        /* --- ESTILOS MÓVIL (CORREGIDO) --- */
        @media (max-width: 992px) {
            .menu-btn { display: block;color:white; }
            .nav-links {
                position: fixed; top: 70px; right: -100%; width: 100%; height: calc(100vh - 70px);
                background: white; flex-direction: column; overflow-y: auto;
                padding: 20px; transition: 0.4s;
            }
            .nav-links.active { right: 0; }
            .nav-item { width: 100%; }
            .nav-link { color:black;border-bottom: 1px solid #f1f5f9; padding: 18px 10px; }

            /* En móvil, los submenús son acordeones */
            .submenu, .sub-submenu {
                position: static; box-shadow: none; width: 100%; 
                background: #fdfdfd; padding-left: 20px; border-left: 3px solid var(--primary);
            }
            
            .show-mobile { display: block !important; }
            .arrow { transition: 0.3s; }
            .rotate { transform: rotate(180deg); }
        }

        .arrow { font-size: 0.7rem; margin-left: 8px; }
         

    /* Footer moderno */
   :root {
            --footer-bg: #0f172a; /* Azul noche profundo */
     --footer-bg: #0f172a;
            --footer-text: #94a3b8;
            --footer-heading: #ffffff;
            --accent: #6366f1;
        }
 /* ESTILO DEL FOOTER */
main {
  flex: 1; /* ocupa el espacio disponible */
}

.main-footer {
  background-color: var(--footer-bg);
  color: var(--footer-text);
  padding: 60px 5% 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  width: 100%;
}


    .footer-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 40px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .footer-section h3 {
      color: var(--footer-heading);
      margin-bottom: 20px;
      font-size: 1.2rem;
      position: relative;
    }

    /* Línea decorativa bajo el título */
    .footer-section h3::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -8px;
      width: 40px;
      height: 2px;
      background: var(--accent);
    }

    .footer-section p {
      line-height: 1.6;
      font-size: 0.95rem;
    }

    .footer-links {
      list-style: none;
    }

    .footer-links li {
      margin-bottom: 12px;
    }

    .footer-links a {
      color: var(--footer-text);
      text-decoration: none;
      transition: 0.3s;
      font-size: 0.95rem;
    }

    .footer-links a:hover {
      color: var(--accent);
      padding-left: 5px;
    }

    /* REDES SOCIALES */
    .social-icons {
      display: flex;
      gap: 15px;
      margin-top: 20px;
    }

    .social-icon {
      width: 40px;
      height: 40px;
      background: rgba(255, 255, 255, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      color: white;
      text-decoration: none;
      transition: 0.3s;
    }

    .social-icon:hover {
      background: var(--accent);
      transform: translateY(-5px);
    }

    /* BARRA INFERIOR DE COPYRIGHT */
    .footer-bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      margin-top: 50px;
      padding-top: 20px;
      text-align: center;
      font-size: 0.85rem;
    }

    /* ADAPTACIÓN MÓVIL */
    @media (max-width: 768px) {
      .main-footer {
        padding: 40px 20px 20px;
        text-align: center;
      }
      .footer-section h3::after {
        left: 50%;
        transform: translateX(-50%);
      }
      .social-icons {
        justify-content: center;
      }
    }
  `;
  document.head.appendChild(style);

  // Insertar navbar en <body>
  document.body.insertAdjacentHTML("afterbegin", `
    <nav class="navbar">
      <a href="#" class="logo">Gieovanny Frías personal</a>
      <button class="menu-btn" id="m-btn">☰</button>
      <ul class="nav-links" id="m-menu">
        <li class="nav-item"><a href="index.html" class="nav-link">Inicio</a></li>
        <li class="nav-item has-drop">
          <a class="nav-link">Info <span class="arrow">▼</span></a>
          <ul class="submenu">
            <li class="nav-item has-drop">
              <a href="/Instagram/" class="nav-link" target="_blank">Doc <span class="arrow">▶</span></a>
              <ul class="sub-submenu">
                <li><a href="/Bolsa_de_empleo/" target="_blank" class="nav-link">Bolsa de trabajo</a></li>
              </ul>
            </li>
            <li><a href="/Eventos/" class="nav-link">Eventos</a></li>
          </ul>
        </li>
        <li class="nav-item"><a href="/Premios/" class="nav-link">Premios</a></li>
        <li class="nav-item"><a href="/Contactos/" class="nav-link">Contacto</a></li>
      </ul>
    </nav>
  `);

  // Insertar footer moderno con enlaces extra
  document.body.insertAdjacentHTML("beforeend", `
<div class="footer_1">
<footer class="main-footer">
    <div class="footer-container">
      
      <!-- Sobre mí -->
      <div class="footer-section">
        <h3>Gieovanny Frías personal</h3>
        <p>Inversionita | Empresario | Emprendedor | CEO | Director</p>
        <div class="social-icons">
          <a href="https://www.facebook.com/jovanicamachofrias" class="social-icon">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg> 
</a>
          <a href="https://www.instagram.com/jovanicamachofrias" class="social-icon">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg>  
</a>
          <a href="https://www.youtube.com/@jovanicamachofrias" class="social-icon">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
</svg>
</a>
          <a href="https://www.threads.com/jovanicamachofrias" class="social-icon">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-threads-fill" viewBox="0 0 16 16">
  <path d="M6.81 9.204c0-.41.197-1.062 1.727-1.062.469 0 .758.034 1.146.121-.124 1.606-.91 1.818-1.674 1.818-.418 0-1.2-.218-1.2-.877Z"/>
  <path d="M2.59 16h10.82A2.59 2.59 0 0 0 16 13.41V2.59A2.59 2.59 0 0 0 13.41 0H2.59A2.59 2.59 0 0 0 0 2.59v10.82A2.59 2.59 0 0 0 2.59 16M5.866 5.91c.567-.81 1.315-1.126 2.35-1.126.73 0 1.351.246 1.795.711.443.466.696 1.132.754 1.983q.368.154.678.363c.832.559 1.29 1.395 1.29 2.353 0 2.037-1.67 3.806-4.692 3.806-2.595 0-5.291-1.51-5.291-6.004C2.75 3.526 5.361 2 8.033 2c1.234 0 4.129.182 5.217 3.777l-1.02.264c-.842-2.56-2.607-2.968-4.224-2.968-2.675 0-4.187 1.628-4.187 5.093 0 3.107 1.69 4.757 4.222 4.757 2.083 0 3.636-1.082 3.636-2.667 0-1.079-.906-1.595-.953-1.595-.177.925-.651 2.482-2.733 2.482-1.213 0-2.26-.838-2.26-1.936 0-1.568 1.488-2.136 2.663-2.136.44 0 .97.03 1.247.086 0-.478-.404-1.296-1.426-1.296-.911 0-1.16.288-1.45.624l-.024.027c-.202-.135-.875-.601-.875-.601Z"/>
</svg>
</a>
        </div>
      </div>

      <!-- Enlaces Rápidos -->
      <div class="footer-section">
        <h3>Navegación</h3>
        <ul class="footer-links">
          <li><a href="index.html">Inicio</a></li>
          <li><a href="Bolsa_de_empleo">Bolsa de empleo</a></li>
          <li><a href="Eventos.html">Eventos</a></li>
          <li><a href="Premios.html">Premios</a></li>
          <li><a href="Contacto.html">Contacto</a></li>
        </ul>
      </div>

      <!-- Contacto e Info -->
      <div class="footer-section">
        <h3>Contacto</h3>
        <ul class="footer-links">
          <li>Email: contacto@gieovannyfrias.com</li>
          <li>Ubicación:México, Ciudad de México</li>
          <li><a href="documentacion-proyecto/docs/legales/Politica_cookies.pdf">Politicas de cookies</a></li>
          <li><a href="documentacion-proyecto/docs/legales/Politicas_de_privacidad.pdf">Política de Privacidad</a></li>
          <li><a href="documentacion-proyecto/docs/legales/Terminos_y_condiciones.pdf">Términos y Condiciones</a></li>
        </ul>
      </div>

    </div>

    <div class="footer-bottom">
      <p>&copy; <span class="year"></span> Gieovanny Frías. Todos los derechos reservados.</p>
    </div>
  </footer>
  </div>
  `);

  // Lógica JS
  const mBtn = document.getElementById("m-btn");
  const mMenu = document.getElementById("m-menu");

  mBtn.addEventListener("click", () => {
    mMenu.classList.toggle("active");
    mBtn.innerText = mMenu.classList.contains("active") ? "✕" : "☰";
  });
  
  // Obtener el año actual
const currentYear = new Date().getFullYear();

// Seleccionar todos los elementos con la clase "year"
const yearElements = document.querySelectorAll(".year");

// Insertar el año en cada uno
yearElements.forEach(el => {
  el.textContent = currentYear;
});

  document.querySelectorAll(".has-drop > .nav-link").forEach(link => {
    link.addEventListener("click", e => {
      if (window.innerWidth <= 992) {
        e.preventDefault();
        const sub = link.nextElementSibling;
        const arrow = link.querySelector(".arrow");
        sub.classList.toggle("show-mobile");
        arrow.classList.toggle("rotate");
      }
    });
  });
});
