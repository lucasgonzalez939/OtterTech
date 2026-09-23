// Centralización absoluta de contenidos e información de OtterTech
const otterTechContent = {
    // Información de Marca e Historia
    branding: {
        titlePart1: "Otter",
        titlePart2: "Tech",
        slogan: "Soluciones informáticas aún cuando las aguas son dificiles",
        story: "Las nutrias marinas se toman de la mano para que la corriente no las lleve, en <strong>OtterTech</strong> nos aseguramos de que nuestros clientes nunca queden atrás. Cuidamos tus equipos con la confianza y el compromiso que te merecés."
    },
    
    // Configuración de Canales de Contacto
    contact: {
        whatsappPhone: "5491100000000", // REEMPLAZAR con tu número real (sin el +)
        whatsappMessage: "Hola, OtterTech! Necesito ayuda con una computadora.",
        email: "info@ottertech.com.ar",
        buttonText: "¿Necesitás ayuda con tu PC? Escribinos",
        copyright: `© ${new Date().getFullYear()} OtterTech. Todos los derechos reservados.`
    },
    
    // Listado de Servicios (Fase 1: Residencial)
    servicesSectionTitle: "Nuestros Servicios para el Hogar",
    services: [
        {
            titulo: "🌐 Servicio Stream",
            descripcion: "Configuración y optimización de redes hogareñas WiFi y Cable. Chau problemas de señal o cortes en medio de tus llamadas o streaming."
        },
        {
            titulo: "🛠️ Servicio River",
            descripcion: "Limpieza profunda de virus, optimización de sistema y asistencia rápida si tu computadora no arranca o está muy lenta."
        },
        {
            titulo: "⚙️ Servicio Ocean",
            descripcion: "Asesoramiento, armado de PCs a medida y cambio de componentes de hardware (discos SSD, memoria RAM) para revivir o renovar tu equipo."
        }
    ]
};

// Renderizado dinámico al cargar el documento
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Renderizar la sección Hero (Cabecera)
    const heroContainer = document.getElementById("hero-container");
    heroContainer.innerHTML = `
        <h1 class="brand-title">${otterTechContent.branding.titlePart1}<span class="tech-highlight">${otterTechContent.branding.titlePart2}</span></h1>
        <h2>${otterTechContent.branding.slogan}</h2>
        <p class="story-snippet">${otterTechContent.branding.story}</p>
        <button id="cta-btn" class="btn-primary">${otterTechContent.contact.buttonText}</button>
    `;

    // 2. Renderizar Título y Grilla de Servicios
    document.getElementById("services-title").textContent = otterTechContent.servicesSectionTitle;
    const servicesGrid = document.getElementById("services-grid");
    
    otterTechContent.services.forEach(servicio => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h4>${servicio.titulo}</h4>
            <p>${servicio.descripcion}</p>
        `;
        servicesGrid.appendChild(card);
    });

    // 3. Renderizar el Footer
    const footerContainer = document.getElementById("footer-container");
    footerContainer.innerHTML = `
        <p>${otterTechContent.contact.copyright}</p>
        <p>Contacto: <a href="mailto:${otterTechContent.contact.email}">${otterTechContent.contact.email}</a></p>
    `;

    // 4. Asignar evento al botón de WhatsApp generado dinámicamente
    const ctaBtn = document.getElementById("cta-btn");
    ctaBtn.addEventListener("click", () => {
        const urlWhatsApp = `https://wa.me{otterTechContent.contact.whatsappPhone}?text=${encodeURIComponent(otterTechContent.contact.whatsappMessage)}`;
        window.open(urlWhatsApp, "_blank");
    });
});
