/* ============================================================
   JAVASCRIPT PRINCIPAL - SITIO WEB B&M
   Puedes activar/desactivar funciones buscando cada sección
   ============================================================ */

/* ============================================================
   SISTEMA DE TRADUCCIONES
   Para editar textos, busca el idioma y cambia el valor
   ============================================================ */
const traducciones = {
    es: {
        'nav-inicio':       'Inicio',
        'nav-nosotros':     'Nosotros',
        'nav-servicios':    'Servicios',
        'nav-contacto':     'Contacto',
        'hero-titulo':      'Agencia Marítima Servicios con <span>Independencia, Pasión e Innovación</span>',
        'hero-subtitulo':   '30 años de liderazgo en agenciamiento marítimo, practicaje y servicios marítimos en Chile, Perú, Argentina y Uruguay.',
        'hero-btn1':        'Nuestros Servicios',
        'hero-btn2':        'Contáctenos',
        'stat1-label':      'Años de Experiencia',
        'stat2-label':      'Países de Operación',
        'stat3-label':      'Buques al Año',
        'stat4-label':      'Puertos Atendidos',
        'nosotros-titulo':  '¿Quiénes Somos?',
        'nosotros-p1':      'B&M es una empresa independiente fundada en 1997 por Hans Bugge y Ansgar Müschen. Desde nuestra oficina central en Santiago de Chile coordinamos todas las operaciones y gestiones administrativas, brindando un servicio marítimo ágil, confiable y personalizado.',
        'nosotros-p2':      'Nuestra amplia experiencia en el mercado naviero nacional e internacional nos permite atender todo tipo de embarcaciones en puertos de Chile, Perú, Argentina y Uruguay. Además, coordinamos servicios de practicaje en el Estrecho de Magallanes, asegurando una gestión eficiente en cada etapa de la operación.',
        'nosotros-p3':      'Cada servicio es supervisado directamente por nuestra oficina central y cuenta con el respaldo en terreno de nuestros capitanes de puerto itinerantes. En B&M combinamos experiencia, presencia operativa y atención personalizada para responder con eficiencia a las necesidades de cada cliente.',
        'valores-titulo':   'Nuestros Valores',
        'valor1-titulo':    'Profesionalismo',
        'valor1-desc':      'Abordamos cada proyecto con absoluto profesionalismo con el fin de alcanzar la excelencia.',
        'valor2-titulo':    'Innovación',
        'valor2-desc':      'Usamos tecnología de punta para crear soluciones.',
        'valor3-titulo':    'Compromiso',
        'valor3-desc':      'El objetivo del cliente lo hacemos propio, y trabajamos para ser un verdadero socio estratégico y cumplir con cada una de sus expectativas.',
        'valor4-titulo':    'Confianza',
        'valor4-desc':      'Construimos lazos basados en la confianza, transparencia y seguridad garantizando la confidencialidad de los datos de nuestros clientes.',
        'mision-titulo':    'Misión',
        'mision-texto':     'Ser una agencia naviera 100 % independiente, capaz de proteger, representar y orientar en todo momento a nuestros clientes en todos los ámbitos del mercado marítimo y portuario.',
        'vision-titulo':    'Visión',
        'vision-texto':     'Ser reconocidos como una agencia naviera líder, destacada por sus altos estándares de servicio, atención cercana y dedicación permanente, inspirando confianza y credibilidad, y ofreciendo soluciones competitivas.',
        'nosotros-li1':     'Equipo de profesionales altamente capacitados',
        'nosotros-li2':     'Cobertura en puertos de Chile, Perú y Argentina',
        'nosotros-li3':     'Disponibilidad 24/7 para atención de buques',
        'nosotros-li4':     'Gestión eficiente de documentación portuaria',
        'nosotros-li5':     'Relaciones sólidas con autoridades marítimas',
        'nosotros-btn':          'Hablemos',
        'nosotros-btn-equipo':   'Equipo',
        'nosotros-badge':   'Años de<br>Experiencia',
        'servicios-titulo': 'Nuestros Servicios',
        'servicios-desc':   'B&M cuenta con más de 26 años de experiencia como agente naviero. Si bien esta actividad continúa siendo el centro de nuestro negocio, a lo largo de los años hemos incorporado diversos servicios para responder integralmente a las necesidades de nuestros clientes.',
        'servicios-desc2':  'Al trabajar con B&M, descubrirá nuestra pasión por el servicio y el compromiso que ponemos en todo lo que hacemos.',
        'servicios-desc3':  'Viva la experiencia B&M. Descubra la inteligencia B&M.',
        'serv1-titulo':     'Agenciamiento Naviero',
        'serv1-desc':       'Representación integral de buques en puertos, coordinando todas las operaciones portuarias, documentación y servicios necesarios para la escala del buque.',
        'serv2-titulo':     'Practicaje y Canal de Magallanes',
        'serv2-desc':       'Servicio de pilotaje especializado para la navegación por el Estrecho de Magallanes, canales australes y aguas restringidas, con prácticos certificados.',
        'serv3-titulo':     'Prefixture, Inteligencia de Mercado',
        'serv3-desc':       'Servicios de prefijación y análisis de mercado, proporcionando información estratégica para la toma de decisiones en el sector naviero.',
        'serv4-titulo':     'Owners Matters',
        'serv4-desc':       'Gestión integral de asuntos de armadores: aprovisionamiento, reparaciones, repatriaciones de tripulación y atención de siniestros en puertos.',
        'serv5-titulo':     'Gestión Aduanera',
        'serv5-desc':       'Tramitación eficiente de documentos aduaneros, manifiestos de carga y coordinación con autoridades portuarias y aduaneras locales.',
        'serv6-titulo':     'Servicios Portuarios',
        'serv6-desc':       'Coordinación de practicaje, remolcadores, lanchaje, aprovisionamiento de combustible y todos los servicios portuarios necesarios para la operación del buque.',
        'contacto-titulo':  'Contáctenos',
        'contacto-desc':    'Estamos disponibles para atender sus consultas y brindarle la mejor solución para sus necesidades marítimas.',
        'ci-titulo':        'Información de Contacto',
        'ci-p':             'Nuestro equipo está disponible las 24 horas para atender emergencias y operaciones navales en los puertos que atendemos.',
        'ci1-label':        'Oficina Santiago (Casa Matriz)',
        'ci2-label':        'Teléfono Santiago',
        'ci3-label':        'Email General',
        'ci4-label':        'Oficina Lima, Perú',
        'ci5-label':        'Oficina Buenos Aires, Argentina',
        'form-titulo':          'Envíenos un Mensaje',
        'form-nombre-label':    'Nombre Completo *',
        'form-nombre-ph':       'Juan Pérez',
        'form-empresa-label':   'Empresa',
        'form-empresa-ph':      'Nombre de su empresa',
        'form-email-label':     'Email *',
        'form-email-ph':        'juan@empresa.com',
        'form-telefono-label':  'Teléfono',
        'form-mensaje-label':   'Mensaje *',
        'form-mensaje-ph':      'Cuéntenos sobre su consulta o requerimiento...',
        'form-pais-label':       'País',
        'form-servicio-label':  'Servicio de Interés',
        'form-btn':             'Enviar Mensaje',
        'form-exito':           '✓ ¡Mensaje enviado con éxito! Le contactaremos a la brevedad.',
        'footer-desc':          'Empresa independiente especializada en servicios marítimos integrales, operando en puertos de Chile, Perú y Argentina desde 1997.',
        'footer-nav-titulo':    'Navegación',
        'footer-serv-titulo':   'Servicios',
        'footer-contacto-titulo': 'Contacto',
        'footer-copy':          '© 2026 B&M Agencia Marítima S.A. Todos los derechos reservados.',
        'footer-design':        'Diseño web profesional',
        'nav-equipo':           'Equipo',
        'equipo-titulo':        'Nuestro Equipo',
        'equipo-intro':         'En B&M creemos que contar con un equipo apasionado por lo que hace es lo que marca la diferencia en el servicio que entregamos. Estamos disponibles 24/7.',
        'modal1-titulo':        'Agenciamiento Naviero',
        'modal1-texto':         'B&M gestiona un amplio volumen de escalas portuarias en Sudamérica. Actuamos como agentes portuarios para todo tipo de buques —desde graneleros convencionales hasta petroleros— y gestionamos escalas especializadas, tales como operaciones de <em>bunkering</em> y cargas de proyectos, entre otras. Asimismo, prestamos servicios de agencia de protección (<em>protective agency</em>) siempre que nuestros clientes lo requieren. Independientemente del servicio que llevemos a cabo, nuestra prioridad es la eficiencia de costes, la agilidad en la operativa y la protección constante de los intereses de nuestros clientes.',
        'modal2-titulo':        'Magellan, Channel &amp; Port Pilotage',
        'modal2-texto':         'Para los buques que navegan por los canales australes de Chile y el Estrecho de Magallanes, que realizan maniobras en diversos puertos de Perú o que navegan por ríos en Argentina, estamos a su entera disposición para gestionar de manera oportuna y eficiente los servicios de practicaje necesarios. Consúltenos sobre los costos y los distintos requisitos conforme a la normativa vigente. ¡Somos expertos y estaremos encantados de ayudarle!',
        'modal3-titulo':        'Inteligencia de Mercado',
        'modal3-p1':            'Entendemos que el mercado de fletamentos opera en un entorno altamente competitivo, donde disponer de información precisa y oportuna marca la diferencia al momento de concretar nuevos negocios.',
        'modal3-p2':            'Por esta razón, creamos nuestra área de Prefijación, enfocada en entregar —en menos de una hora— toda la información relevante para la toma de decisiones, incluyendo costos portuarios, condiciones operativas, restricciones y requisitos. Así, nuestros clientes pueden negociar desde una posición privilegiada.',
        'modal3-p3':            'Sin embargo, sabemos que los costos y las restricciones son solo una parte del proceso. Por ello, contamos con un dinámico equipo comercial dedicado a recopilar, analizar y compartir información estratégica del sector. Nuestra inteligencia de mercado incluye informes personalizados, programación de naves en puerto y seguimiento permanente de los temas relevantes para cada cliente.',
        'modal4-titulo':        'Owners Matters',
        'modal4-p1':            'Nuestra área de Servicios para Armadores ofrece una atención integral, orientada a satisfacer los requerimientos de las embarcaciones y sus tripulaciones.',
        'modal4-p2':            'Entre nuestros principales servicios se incluyen:',
        'modal4-li1':           'Gestión de traslados de tripulantes, visitantes y técnicos: trámites migratorios, pasajes aéreos, asistencia en aeropuertos, reservas de hoteles y coordinación de transporte, entre otros.',
        'modal4-li2':           'Asistencia médica para los miembros de la tripulación.',
        'modal4-li3':           'Gestión logística de repuestos enviados por vía aérea o marítima, desde o hacia Chile, incluyendo consolidación y desconsolidación de contenedores.',
        'modal4-li4':           'Servicios de mensajería y coordinación logística para la entrega de provisiones a bordo.',
        'modal4-li5':           'Entrega de efectivo al capitán (Cash to Master).',
        'modal4-li6':           'Suministro de cartas náuticas del Almirantazgo Británico (BA) o locales, publicaciones marítimas, avisos a los navegantes (NTM), banderas y otros elementos requeridos.',
        'modal2-leyenda-azul':  '<strong>Azul:</strong> obligatorio para todos los buques.',
        'presencia-titulo':     'Nuestra Presencia',
        'presencia-desc':       'Operamos en los principales puertos de Chile, Perú, Argentina y Uruguay, brindando soluciones marítimas integrales en el Cono Sur.',
        'modal2-leyenda-rojo':  '<strong>Rojo:</strong> obligatorio para todos los buques que hacen escala en puertos chilenos.',
        'select-pais': [
            { value: '',           text: 'Seleccione un país...' },
            { value: 'chile',      text: 'Chile' },
            { value: 'peru',       text: 'Perú' },
            { value: 'argentina',  text: 'Argentina' },
            { value: 'uruguay',    text: 'Uruguay' },
        ],
        'select-servicio': [
            { value: '',               text: 'Seleccione un servicio...' },
            { value: 'agenciamiento',  text: 'Agenciamiento Naviero' },
            { value: 'practicaje',     text: 'Practicaje / Canal de Magallanes' },
            { value: 'inteligencia',   text: 'Inteligencia de Mercado' },
            { value: 'owners',         text: 'Owners Matters' },
            { value: 'aduanera',       text: 'Gestión Aduanera' },
            { value: 'portuarios',     text: 'Servicios Portuarios' },
            { value: 'otro',           text: 'Otro' },
        ],
    },

    en: {
        'nav-inicio':       'Home',
        'nav-nosotros':     'About',
        'nav-servicios':    'Services',
        'nav-contacto':     'Contact',
        'hero-titulo':      'Maritime Agency Services with <span>Independence, Passion &amp; Innovation</span>',
        'hero-subtitulo':   '30 years of leadership in maritime agency, pilotage and maritime services in Chile, Peru, Argentina and Uruguay.',
        'hero-btn1':        'Our Services',
        'hero-btn2':        'Contact Us',
        'stat1-label':      'Years of Experience',
        'stat2-label':      'Countries of Operation',
        'stat3-label':      'Vessels per Year',
        'stat4-label':      'Ports Served',
        'nosotros-titulo':  'Who We Are',
        'nosotros-p1':      'B&M is an independent company founded in 1997 by Hans Bugge and Ansgar Müschen. From our headquarters in Santiago, Chile, we coordinate all operations and administrative processes, providing agile, reliable and personalized maritime services.',
        'nosotros-p2':      'Our extensive experience in the national and international shipping market allows us to serve all types of vessels at ports in Chile, Peru, Argentina and Uruguay. We also coordinate pilotage services in the Strait of Magellan, ensuring efficient management at every stage of the operation.',
        'nosotros-p3':      'Every service is directly supervised by our headquarters and supported on the ground by our itinerant harbour masters. At B&M we combine experience, operational presence and personalized attention to efficiently meet the needs of each client.',
        'valores-titulo':   'Our Values',
        'valor1-titulo':    'Professionalism',
        'valor1-desc':      'We approach every project with absolute professionalism in order to achieve excellence.',
        'valor2-titulo':    'Innovation',
        'valor2-desc':      'We use cutting-edge technology to create solutions.',
        'valor3-titulo':    'Commitment',
        'valor3-desc':      'We make the client\'s objective our own, and we work to be a true strategic partner and fulfill each of their expectations.',
        'valor4-titulo':    'Trust',
        'valor4-desc':      'We build relationships based on trust, transparency and security, guaranteeing the confidentiality of our clients\' data.',
        'mision-titulo':    'Mission',
        'mision-texto':     'To be a 100% independent ship agency, capable of protecting, representing and guiding our clients at all times across all areas of the maritime and port market.',
        'vision-titulo':    'Vision',
        'vision-texto':     'To be recognized as a leading ship agency, distinguished by its high service standards, close attention and permanent dedication, inspiring trust and credibility, and offering competitive solutions.',
        'nosotros-li1':     'Highly trained professional team',
        'nosotros-li2':     'Coverage at ports in Chile, Peru and Argentina',
        'nosotros-li3':     '24/7 availability for vessel attendance',
        'nosotros-li4':     'Efficient management of port documentation',
        'nosotros-li5':     'Solid relationships with maritime authorities',
        'nosotros-btn':          "Let's Talk",
        'nosotros-btn-equipo':   'Team',
        'nosotros-badge':   'Years of<br>Experience',
        'servicios-titulo': 'Our Services',
        'servicios-desc':   'B&M has more than 26 years of experience as a ship agent. While this activity continues to be the core of our business, over the years we have incorporated various services to comprehensively respond to our clients\' needs.',
        'servicios-desc2':  'When working with B&M, you will discover our passion for service and the commitment we put into everything we do.',
        'servicios-desc3':  'Live the B&M experience. Discover B&M intelligence.',
        'serv1-titulo':     'Ship Agency',
        'serv1-desc':       'Comprehensive representation of vessels at ports, coordinating all port operations, documentation and services necessary for the vessel\'s call.',
        'serv2-titulo':     'Pilotage & Magellan Strait',
        'serv2-desc':       'Specialized pilotage service for navigation through the Strait of Magellan, southern channels and restricted waters, with certified pilots.',
        'serv3-titulo':     'Prefixture, Market Intelligence',
        'serv3-desc':       'Pre-fixture and market analysis services, providing strategic information for decision-making in the shipping sector.',
        'serv4-titulo':     'Owners Matters',
        'serv4-desc':       'Comprehensive management of shipowner affairs: provisioning, repairs, crew repatriation and claims handling at ports.',
        'serv5-titulo':     'Customs Management',
        'serv5-desc':       'Efficient processing of customs documents, cargo manifests and coordination with local port and customs authorities.',
        'serv6-titulo':     'Port Services',
        'serv6-desc':       'Coordination of pilotage, tugs, launch services, fuel supply and all port services necessary for vessel operations.',
        'contacto-titulo':  'Contact Us',
        'contacto-desc':    'We are available to answer your inquiries and provide you with the best solution for your maritime needs.',
        'ci-titulo':        'Contact Information',
        'ci-p':             'Our team is available 24 hours a day to handle emergencies and naval operations at the ports we serve.',
        'ci1-label':        'Santiago Office (Headquarters)',
        'ci2-label':        'Santiago Phone',
        'ci3-label':        'General Email',
        'ci4-label':        'Lima, Peru Office',
        'ci5-label':        'Buenos Aires, Argentina Office',
        'form-titulo':          'Send Us a Message',
        'form-nombre-label':    'Full Name *',
        'form-nombre-ph':       'John Smith',
        'form-empresa-label':   'Company',
        'form-empresa-ph':      'Your company name',
        'form-email-label':     'Email *',
        'form-email-ph':        'john@company.com',
        'form-telefono-label':  'Phone',
        'form-mensaje-label':   'Message *',
        'form-mensaje-ph':      'Tell us about your inquiry or requirement...',
        'form-pais-label':       'Country',
        'form-servicio-label':  'Service of Interest',
        'form-btn':             'Send Message',
        'form-exito':           '✓ Message sent successfully! We will contact you shortly.',
        'footer-desc':          'Independent company specialized in comprehensive maritime services, operating at ports in Chile, Peru and Argentina since 1997.',
        'footer-nav-titulo':    'Navigation',
        'footer-serv-titulo':   'Services',
        'footer-contacto-titulo': 'Contact',
        'footer-copy':          '© 2026 B&M Maritime Agency S.A. All rights reserved.',
        'footer-design':        'Professional web design',
        'nav-equipo':           'Team',
        'equipo-titulo':        'Our Team',
        'equipo-intro':         'At B&M we believe that having a team passionate about what they do is what makes the difference in the service we deliver. We are available 24/7.',
        'modal1-titulo':        'Ship Agency',
        'modal1-texto':         'B&M manages a large volume of port calls in South America. We act as port agents for all types of vessels —from conventional bulk carriers to oil tankers— and manage specialized port calls, such as <em>bunkering</em> operations and project cargo, among others. We also provide <em>protective agency</em> services whenever our clients require them. Regardless of the service we carry out, our priority is cost efficiency, operational agility and the constant protection of our clients\' interests.',
        'modal2-titulo':        'Magellan, Channel &amp; Port Pilotage',
        'modal2-texto':         'For vessels navigating through the southern channels of Chile and the Strait of Magellan, performing maneuvers at various ports in Peru, or navigating rivers in Argentina, we are at your complete disposal to promptly and efficiently manage the necessary pilotage services. Please consult us regarding costs and the various requirements in accordance with current regulations. We are experts and will be delighted to assist you!',
        'modal3-titulo':        'Market Intelligence',
        'modal3-p1':            'We understand that the freight market operates in a highly competitive environment, where having accurate and timely information makes the difference when closing new business.',
        'modal3-p2':            'For this reason, we created our Pre-fixture area, focused on delivering —in less than one hour— all relevant information for decision-making, including port costs, operational conditions, restrictions and requirements. This way, our clients can negotiate from a privileged position.',
        'modal3-p3':            'However, we know that costs and restrictions are only part of the process. Therefore, we have a dynamic commercial team dedicated to collecting, analyzing and sharing strategic sector information. Our market intelligence includes personalized reports, vessel scheduling at port and permanent monitoring of topics relevant to each client.',
        'modal4-titulo':        'Owners Matters',
        'modal4-p1':            'Our Owners\' Services area offers comprehensive assistance, aimed at meeting the requirements of vessels and their crews.',
        'modal4-p2':            'Our main services include:',
        'modal4-li1':           'Management of crew, visitor and technician transfers: immigration procedures, air tickets, airport assistance, hotel reservations and transportation coordination, among others.',
        'modal4-li2':           'Medical assistance for crew members.',
        'modal4-li3':           'Logistics management of spare parts sent by air or sea, to or from Chile, including container consolidation and deconsolidation.',
        'modal4-li4':           'Courier services and logistics coordination for the delivery of provisions on board.',
        'modal4-li5':           'Cash delivery to the captain (Cash to Master).',
        'modal4-li6':           'Supply of British Admiralty (BA) or local nautical charts, maritime publications, Notices to Mariners (NTM), flags and other required items.',
        'modal2-leyenda-azul':  '<strong>Blue:</strong> mandatory for all vessels.',
        'presencia-titulo':     'Our Presence',
        'presencia-desc':       'We operate in the main ports of Chile, Peru, Argentina and Uruguay, providing comprehensive maritime solutions across the Southern Cone.',
        'modal2-leyenda-rojo':  '<strong>Red:</strong> mandatory for all vessels calling at Chilean ports.',
        'select-pais': [
            { value: '',           text: 'Select a country...' },
            { value: 'chile',      text: 'Chile' },
            { value: 'peru',       text: 'Peru' },
            { value: 'argentina',  text: 'Argentina' },
            { value: 'uruguay',    text: 'Uruguay' },
        ],
        'select-servicio': [
            { value: '',               text: 'Select a service...' },
            { value: 'agenciamiento',  text: 'Ship Agency' },
            { value: 'practicaje',     text: 'Pilotage / Magellan Strait' },
            { value: 'inteligencia',   text: 'Market Intelligence' },
            { value: 'owners',         text: 'Owners Matters' },
            { value: 'aduanera',       text: 'Customs Management' },
            { value: 'portuarios',     text: 'Port Services' },
            { value: 'otro',           text: 'Other' },
        ],
    },

    de: {
        'nav-inicio':       'Startseite',
        'nav-nosotros':     'Über uns',
        'nav-servicios':    'Dienstleistungen',
        'nav-contacto':     'Kontakt',
        'hero-titulo':      'Schifffahrtsagentur Dienste mit <span>Unabhängigkeit, Leidenschaft &amp; Innovation</span>',
        'hero-subtitulo':   '30 Jahre Führung in Schiffsagentur, Lotsen und maritimen Dienstleistungen in Chile, Peru, Argentinien und Uruguay.',
        'hero-btn1':        'Unsere Dienstleistungen',
        'hero-btn2':        'Kontakt aufnehmen',
        'stat1-label':      'Jahre Erfahrung',
        'stat2-label':      'Länder im Einsatz',
        'stat3-label':      'Schiffe pro Jahr',
        'stat4-label':      'Bediente Häfen',
        'nosotros-titulo':  'Wer wir sind',
        'nosotros-p1':      'B&M ist ein unabhängiges Unternehmen, das 1997 von Hans Bugge und Ansgar Müschen gegründet wurde. Von unserem Hauptsitz in Santiago, Chile, koordinieren wir alle Betriebsabläufe und Verwaltungsprozesse und bieten agile, zuverlässige und persönliche Seeverkehrsdienstleistungen.',
        'nosotros-p2':      'Unsere umfangreiche Erfahrung auf dem nationalen und internationalen Schifffahrtsmarkt ermöglicht es uns, alle Arten von Schiffen in Häfen in Chile, Peru, Argentinien und Uruguay zu bedienen. Darüber hinaus koordinieren wir Lotsendienste in der Magellanstraße und gewährleisten ein effizientes Management in jeder Phase der Operation.',
        'nosotros-p3':      'Jeder Service wird direkt von unserem Hauptsitz überwacht und vor Ort von unseren reisenden Hafenkapitänen unterstützt. Bei B&M verbinden wir Erfahrung, operative Präsenz und persönliche Betreuung, um die Bedürfnisse jedes Kunden effizient zu erfüllen.',
        'valores-titulo':   'Unsere Werte',
        'valor1-titulo':    'Professionalität',
        'valor1-desc':      'Wir gehen jedes Projekt mit absolutem Professionalismus an, um Exzellenz zu erreichen.',
        'valor2-titulo':    'Innovation',
        'valor2-desc':      'Wir nutzen modernste Technologie, um Lösungen zu schaffen.',
        'valor3-titulo':    'Engagement',
        'valor3-desc':      'Das Ziel des Kunden machen wir uns zu eigen und arbeiten daran, ein echter strategischer Partner zu sein und jede seiner Erwartungen zu erfüllen.',
        'valor4-titulo':    'Vertrauen',
        'valor4-desc':      'Wir bauen Beziehungen auf der Grundlage von Vertrauen, Transparenz und Sicherheit auf und gewährleisten die Vertraulichkeit der Daten unserer Kunden.',
        'mision-titulo':    'Mission',
        'mision-texto':     'Eine 100% unabhängige Schiffsagentur zu sein, die unsere Kunden jederzeit in allen Bereichen des Schifffahrts- und Hafenmarktes schützen, vertreten und beraten kann.',
        'vision-titulo':    'Vision',
        'vision-texto':     'Als führende Schiffsagentur anerkannt zu werden, die sich durch hohe Servicestandards, persönliche Betreuung und dauerhafte Hingabe auszeichnet, Vertrauen und Glaubwürdigkeit inspiriert und wettbewerbsfähige Lösungen anbietet.',
        'nosotros-li1':     'Hochqualifiziertes Fachteam',
        'nosotros-li2':     'Abdeckung in Häfen in Chile, Peru und Argentinien',
        'nosotros-li3':     '24/7 Verfügbarkeit für Schiffsbetreuung',
        'nosotros-li4':     'Effizientes Management der Hafendokumentation',
        'nosotros-li5':     'Solide Beziehungen zu Seebehörden',
        'nosotros-btn':          'Sprechen Sie mit uns',
        'nosotros-btn-equipo':   'Team',
        'nosotros-badge':   'Jahre<br>Erfahrung',
        'servicios-titulo': 'Unsere Dienstleistungen',
        'servicios-desc':   'B&M verfügt über mehr als 26 Jahre Erfahrung als Schiffsagentur. Obwohl diese Tätigkeit weiterhin das Kerngeschäft bildet, haben wir im Laufe der Jahre verschiedene Dienstleistungen integriert, um die Bedürfnisse unserer Kunden umfassend zu erfüllen.',
        'servicios-desc2':  'Bei der Zusammenarbeit mit B&M werden Sie unsere Leidenschaft für den Service und das Engagement entdecken, das wir in alles einbringen, was wir tun.',
        'servicios-desc3':  'Erleben Sie die B&M-Erfahrung. Entdecken Sie die B&M-Intelligenz.',
        'serv1-titulo':     'Schiffsagentur',
        'serv1-desc':       'Umfassende Vertretung von Schiffen in Häfen, Koordinierung aller Hafenoperationen, Dokumentation und Dienstleistungen für den Schiffsanlauf.',
        'serv2-titulo':     'Lotsen & Magellanstraße',
        'serv2-desc':       'Spezialisierter Lotsendienst für die Navigation durch die Magellanstraße, südliche Kanäle und eingeschränkte Gewässer mit zertifizierten Lotsen.',
        'serv3-titulo':     'Prefixture, Marktintelligenz',
        'serv3-desc':       'Vorausplanung und Marktanalysedienste mit strategischen Informationen für die Entscheidungsfindung im Schifffahrtssektor.',
        'serv4-titulo':     'Reedereiangelegenheiten',
        'serv4-desc':       'Umfassendes Management von Reedereifragen: Versorgung, Reparaturen, Besatzungsrückführung und Schadenbearbeitung in Häfen.',
        'serv5-titulo':     'Zollabwicklung',
        'serv5-desc':       'Effiziente Abwicklung von Zolldokumenten, Frachtmanifesten und Koordinierung mit lokalen Hafen- und Zollbehörden.',
        'serv6-titulo':     'Hafendienstleistungen',
        'serv6-desc':       'Koordinierung von Lotsen, Schleppern, Beibootdiensten, Kraftstoffversorgung und allen für den Schiffsbetrieb erforderlichen Hafendienstleistungen.',
        'contacto-titulo':  'Kontaktieren Sie uns',
        'contacto-desc':    'Wir stehen für Ihre Anfragen zur Verfügung und bieten Ihnen die beste Lösung für Ihre maritimen Bedürfnisse.',
        'ci-titulo':        'Kontaktinformationen',
        'ci-p':             'Unser Team ist rund um die Uhr für Notfälle und Schifffahrtsoperationen in den von uns betreuten Häfen verfügbar.',
        'ci1-label':        'Büro Santiago (Hauptsitz)',
        'ci2-label':        'Telefon Santiago',
        'ci3-label':        'Allgemeine E-Mail',
        'ci4-label':        'Büro Lima, Peru',
        'ci5-label':        'Büro Buenos Aires, Argentinien',
        'form-titulo':          'Senden Sie uns eine Nachricht',
        'form-nombre-label':    'Vollständiger Name *',
        'form-nombre-ph':       'Max Mustermann',
        'form-empresa-label':   'Unternehmen',
        'form-empresa-ph':      'Name Ihres Unternehmens',
        'form-email-label':     'E-Mail *',
        'form-email-ph':        'max@unternehmen.de',
        'form-telefono-label':  'Telefon',
        'form-mensaje-label':   'Nachricht *',
        'form-mensaje-ph':      'Beschreiben Sie Ihre Anfrage oder Ihr Anliegen...',
        'form-pais-label':       'Land',
        'form-servicio-label':  'Gewünschte Dienstleistung',
        'form-btn':             'Nachricht senden',
        'form-exito':           '✓ Nachricht erfolgreich gesendet! Wir melden uns in Kürze.',
        'footer-desc':          'Unabhängiges Unternehmen für maritime Dienstleistungen in Häfen in Chile, Peru und Argentinien seit 1997.',
        'footer-nav-titulo':    'Navigation',
        'footer-serv-titulo':   'Dienstleistungen',
        'footer-contacto-titulo': 'Kontakt',
        'footer-copy':          '© 2026 B&M Maritime Agentur S.A. Alle Rechte vorbehalten.',
        'footer-design':        'Professionelles Webdesign',
        'nav-equipo':           'Team',
        'equipo-titulo':        'Unser Team',
        'equipo-intro':         'Bei B&M glauben wir, dass ein Team, das für seine Arbeit brennt, den Unterschied in unserem Service ausmacht. Wir sind 24/7 für Sie erreichbar.',
        'select-pais': [
            { value: '',           text: 'Land auswählen...' },
            { value: 'chile',      text: 'Chile' },
            { value: 'peru',       text: 'Peru' },
            { value: 'argentina',  text: 'Argentinien' },
            { value: 'uruguay',    text: 'Uruguay' },
        ],
        'select-servicio': [
            { value: '',               text: 'Dienstleistung auswählen...' },
            { value: 'agenciamiento',  text: 'Schiffsagentur' },
            { value: 'practicaje',     text: 'Lotsen / Magellanstraße' },
            { value: 'inteligencia',   text: 'Marktintelligenz' },
            { value: 'owners',         text: 'Reedereiangelegenheiten' },
            { value: 'aduanera',       text: 'Zollabwicklung' },
            { value: 'portuarios',     text: 'Hafendienstleistungen' },
            { value: 'otro',           text: 'Sonstiges' },
        ],
        'modal1-titulo':        'Schiffsagentur',
        'modal1-texto':         'B&M verwaltet ein großes Volumen an Hafenanlaufvorgängen in Südamerika. Wir agieren als Hafenagenten für alle Schiffstypen —von konventionellen Massengutfrachtern bis hin zu Tankern— und verwalten spezialisierte Hafenanlaufvorgänge, wie <em>Bunkeroperationen</em> und Projektladungen, unter anderem. Außerdem erbringen wir Schutzagenturdienste (<em>Protective Agency</em>), wann immer unsere Kunden dies benötigen. Unabhängig vom erbrachten Dienst sind unsere Prioritäten Kosteneffizienz, operative Agilität und der kontinuierliche Schutz der Interessen unserer Kunden.',
        'modal2-titulo':        'Magellan, Channel &amp; Port Pilotage',
        'modal2-texto':         'Für Schiffe, die durch die südlichen Kanäle Chiles und die Magellanstraße fahren, Manöver in verschiedenen peruanischen Häfen durchführen oder auf argentinischen Flüssen navigieren, stehen wir Ihnen vollständig zur Verfügung, um die erforderlichen Lotsendienste zeitnah und effizient zu verwalten. Fragen Sie uns nach Kosten und den verschiedenen Anforderungen gemäß den geltenden Vorschriften. Wir sind Experten und freuen uns, Ihnen zu helfen!',
        'modal3-titulo':        'Marktintelligenz',
        'modal3-p1':            'Wir verstehen, dass der Frachtmarkt in einem hochkompetitiven Umfeld operiert, in dem präzise und zeitnahe Informationen den Unterschied beim Abschluss neuer Geschäfte ausmachen.',
        'modal3-p2':            'Aus diesem Grund haben wir unseren Bereich Vorausplanung gegründet, der darauf ausgerichtet ist, in weniger als einer Stunde alle relevanten Entscheidungsinformationen zu liefern, einschließlich Hafenkosten, Betriebsbedingungen, Einschränkungen und Anforderungen. So können unsere Kunden aus einer privilegierten Position heraus verhandeln.',
        'modal3-p3':            'Wir wissen jedoch, dass Kosten und Einschränkungen nur ein Teil des Prozesses sind. Daher verfügen wir über ein dynamisches Vertriebsteam, das sich der Sammlung, Analyse und dem Austausch strategischer Brancheninformationen widmet. Unsere Marktintelligenz umfasst personalisierte Berichte, Schiffsplanung im Hafen und permanente Überwachung der für jeden Kunden relevanten Themen.',
        'modal4-titulo':        'Reedereiangelegenheiten',
        'modal4-p1':            'Unser Bereich Reedereidienstleistungen bietet umfassende Unterstützung, die darauf ausgerichtet ist, die Anforderungen der Schiffe und ihrer Besatzungen zu erfüllen.',
        'modal4-p2':            'Zu unseren wichtigsten Dienstleistungen gehören:',
        'modal4-li1':           'Management der Transfers von Besatzungsmitgliedern, Besuchern und Technikern: Einwanderungsverfahren, Flugtickets, Flughafenunterstützung, Hotelreservierungen und Transportkoordination, unter anderem.',
        'modal4-li2':           'Medizinische Unterstützung für Besatzungsmitglieder.',
        'modal4-li3':           'Logistikmanagement von Ersatzteilen, die per Luft oder See von oder nach Chile gesendet werden, einschließlich Container-Konsolidierung und -Dekonsolidierung.',
        'modal4-li4':           'Kurierdienste und Logistikkoordination für die Lieferung von Vorräten an Bord.',
        'modal4-li5':           'Bargeldübergabe an den Kapitän (Cash to Master).',
        'modal4-li6':           'Lieferung von Seekarten des Britischen Admiralitätsamtes (BA) oder lokalen Seekarten, maritimen Veröffentlichungen, Bekanntmachungen für Seefahrer (NTM), Flaggen und anderen erforderlichen Elementen.',
        'modal2-leyenda-azul':  '<strong>Blau:</strong> für alle Schiffe obligatorisch.',
        'presencia-titulo':     'Unsere Präsenz',
        'presencia-desc':       'Wir sind in den wichtigsten Häfen von Chile, Peru, Argentinien und Uruguay tätig und bieten umfassende maritime Lösungen im südlichen Südamerika.',
        'modal2-leyenda-rojo':  '<strong>Rot:</strong> obligatorisch für alle Schiffe, die chilenische Häfen anlaufen.',
    },

    zh: {
        'nav-inicio':       '首页',
        'nav-nosotros':     '关于我们',
        'nav-servicios':    '服务',
        'nav-contacto':     '联系',
        'hero-titulo':      '海事代理服务：<span>独立、激情与创新</span>',
        'hero-subtitulo':   '30年来在智利、秘鲁、阿根廷和乌拉圭船舶代理、引航及海事服务领域的卓越领导力。',
        'hero-btn1':        '我们的服务',
        'hero-btn2':        '联系我们',
        'stat1-label':      '年经验',
        'stat2-label':      '运营国家',
        'stat3-label':      '每年船舶数',
        'stat4-label':      '服务港口',
        'nosotros-titulo':  '关于我们',
        'nosotros-p1':      'B&M是一家由Hans Bugge和Ansgar Müschen于1997年创立的独立公司。我们从位于智利圣地亚哥的总部协调所有运营和行政管理工作，提供敏捷、可靠和个性化的海事服务。',
        'nosotros-p2':      '我们在国内外航运市场的丰富经验使我们能够在智利、秘鲁、阿根廷和乌拉圭的港口为各类船舶提供服务。此外，我们还协调麦哲伦海峡的引航服务，确保每个操作阶段的高效管理。',
        'nosotros-p3':      '每项服务都由我们的总部直接监督，并由我们的巡回港务长在现场提供支持。在B&M，我们将经验、运营存在和个性化关注相结合，高效满足每位客户的需求。',
        'valores-titulo':   '我们的价值观',
        'valor1-titulo':    '专业精神',
        'valor1-desc':      '我们以绝对的专业精神处理每个项目，以实现卓越。',
        'valor2-titulo':    '创新',
        'valor2-desc':      '我们使用尖端技术创造解决方案。',
        'valor3-titulo':    '承诺',
        'valor3-desc':      '我们将客户的目标视为己任，努力成为真正的战略合作伙伴，履行客户的每一项期望。',
        'valor4-titulo':    '信任',
        'valor4-desc':      '我们建立基于信任、透明度和安全性的关系，确保客户数据的保密性。',
        'mision-titulo':    '使命',
        'mision-texto':     '成为一家100%独立的船务代理，能够在所有时刻、在海运和港口市场的所有领域保护、代表和指导我们的客户。',
        'vision-titulo':    '愿景',
        'vision-texto':     '被公认为领先的船务代理，以其高服务标准、贴心的关注和持续的奉献而著称，激发信任和信誉，并提供具有竞争力的解决方案。',
        'nosotros-li1':     '高素质专业团队',
        'nosotros-li2':     '覆盖智利、秘鲁和阿根廷港口',
        'nosotros-li3':     '全天候24小时船舶服务',
        'nosotros-li4':     '高效管理港口文件',
        'nosotros-li5':     '与海事当局建立稳固关系',
        'nosotros-btn':          '联系我们',
        'nosotros-btn-equipo':   '团队',
        'nosotros-badge':   '年<br>经验',
        'servicios-titulo': '我们的服务',
        'servicios-desc':   'B&M拥有超过26年的船务代理经验。虽然这项业务仍是我们的核心，但多年来我们已融入多种服务，以全面满足客户需求。',
        'servicios-desc2':  '与B&M合作，您将发现我们对服务的热情以及我们在所做的一切中所付出的承诺。',
        'servicios-desc3':  '体验B&M体验。发现B&M智慧。',
        'serv1-titulo':     '船舶代理',
        'serv1-desc':       '全面代表船舶在港口的运营，协调所有港口作业、文件及船舶挂靠所需服务。',
        'serv2-titulo':     '引航与麦哲伦海峡',
        'serv2-desc':       '专业引航服务，用于麦哲伦海峡、南部水道和限制水域的航行，配备持证引航员。',
        'serv3-titulo':     'Prefixture，市场情报',
        'serv3-desc':       '预租赁和市场分析服务，为航运部门决策提供战略信息。',
        'serv4-titulo':     '船东事务',
        'serv4-desc':       '全面管理船东事务：供给、维修、船员遣返及港口索赔处理。',
        'serv5-titulo':     '海关管理',
        'serv6-titulo':     '港口服务',
        'contacto-titulo':  '联系我们',
        'contacto-desc':    '我们随时准备回答您的咨询，为您的海事需求提供最佳解决方案。',
        'ci-titulo':        '联系信息',
        'ci-p':             '我们的团队全天候24小时处理我们所服务港口的紧急情况和海上作业。',
        'ci1-label':        '圣地亚哥办公室（总部）',
        'ci2-label':        '圣地亚哥电话',
        'ci3-label':        '通用电子邮件',
        'ci4-label':        '利马，秘鲁办公室',
        'ci5-label':        '布宜诺斯艾利斯，阿根廷办公室',
        'form-titulo':          '给我们留言',
        'form-nombre-label':    '全名 *',
        'form-nombre-ph':       '张伟',
        'form-empresa-label':   '公司',
        'form-empresa-ph':      '公司名称',
        'form-email-label':     '电子邮件 *',
        'form-email-ph':        'zhang@company.com',
        'form-telefono-label':  '电话',
        'form-mensaje-label':   '留言 *',
        'form-mensaje-ph':      '请描述您的咨询或需求...',
        'form-pais-label':       '国',
        'form-servicio-label':  '感兴趣的服务',
        'form-btn':             '发送消息',
        'form-exito':           '✓ 消息发送成功！我们将尽快与您联系。',
        'footer-desc':          '独立海事服务公司，自1997年起在智利、秘鲁和阿根廷港口运营。',
        'footer-nav-titulo':    '导航',
        'footer-serv-titulo':   '服务',
        'footer-contacto-titulo': '联系',
        'footer-copy':          '© 2026 B&M海事代理有限公司。版权所有。',
        'footer-design':        '专业网页设计',
        'nav-equipo':           '团队',
        'equipo-titulo':        '我们的团队',
        'equipo-intro':         '在B&M，我们相信拥有一支热爱工作的团队是我们服务卓越的关键。我们全天候24/7为您服务。',
        'modal1-titulo':        '船舶代理',
        'modal1-texto':         'B&M管理南美大量的港口挂靠业务。我们为各类船舶——从传统散货船到油轮——担任港口代理，并管理专业挂靠作业，如<em>加油作业</em>和项目货物等。只要客户需要，我们还提供<em>保护代理</em>服务。无论提供何种服务，我们的首要任务始终是降低成本、提高运营效率，并持续保护客户的利益。',
        'modal2-titulo':        '麦哲伦海峡与港口引航',
        'modal2-texto':         '对于在智利南部水道和麦哲伦海峡航行的船舶、在秘鲁各港口进行操作的船舶或在阿根廷河流中航行的船舶，我们完全可以及时有效地管理所需的引航服务。请向我们咨询费用及根据现行法规的各项要求。我们是专家，很乐意为您提供帮助！',
        'modal3-titulo':        '市场情报',
        'modal3-p1':            '我们深知租船市场在高度竞争的环境中运营，在洽谈新业务时，准确及时的信息至关重要。',
        'modal3-p2':            '为此，我们创建了预租船部门，专注于在一小时内提供所有决策相关信息，包括港口费用、运营条件、限制和要求。这样，我们的客户可以从优势地位进行谈判。',
        'modal3-p3':            '然而，我们知道费用和限制只是流程的一部分。因此，我们拥有一支充满活力的商业团队，专门负责收集、分析和共享行业战略信息。我们的市场情报包括个性化报告、港口船舶调度以及对每位客户相关主题的持续监控。',
        'modal4-titulo':        '船东事务',
        'modal4-p1':            '我们的船东服务部门提供全面的综合服务，旨在满足船舶及船员的各项需求。',
        'modal4-p2':            '我们的主要服务包括：',
        'modal4-li1':           '管理船员、访客和技术人员的转运：移民手续、机票、机场协助、酒店预订和交通协调等。',
        'modal4-li2':           '为船员提供医疗援助。',
        'modal4-li3':           '管理从智利发往或接收的航空或海运备件的物流，包括集装箱拼箱和拆箱。',
        'modal4-li4':           '为船上物资交付提供快递服务和物流协调。',
        'modal4-li5':           '向船长交付现金（Cash to Master）。',
        'modal4-li6':           '供应英国海军部（BA）或本地海图、海事出版物、航海通告（NTM）、船旗及其他所需物品。',
        'modal2-leyenda-azul':  '<strong>蓝色：</strong>所有船舶必须遵守。',
        'presencia-titulo':     '我们的业务范围',
        'presencia-desc':       '我们在智利、秘鲁、阿根廷和乌拉圭的主要港口开展业务，为南锥体地区提供全面的海事解决方案。',
        'modal2-leyenda-rojo':  '<strong>红色：</strong>在智利港口挂靠的所有船舶必须遵守。',
        'select-pais': [
            { value: '',           text: '选择国家...' },
            { value: 'chile',      text: '智利' },
            { value: 'peru',       text: '秘鲁' },
            { value: 'argentina',  text: '阿根廷' },
            { value: 'uruguay',    text: '乌拉圭' },
        ],
        'select-servicio': [
            { value: '',               text: '选择服务...' },
            { value: 'agenciamiento',  text: '船舶代理' },
            { value: 'practicaje',     text: '引航/麦哲伦海峡' },
            { value: 'inteligencia',   text: '市场情报' },
            { value: 'owners',         text: '船东事务' },
            { value: 'aduanera',       text: '海关管理' },
            { value: 'portuarios',     text: '港口服务' },
            { value: 'otro',           text: '其他' },
        ],
    },

    pt: {
        'nav-inicio':       'Início',
        'nav-nosotros':     'Sobre Nós',
        'nav-servicios':    'Serviços',
        'nav-contacto':     'Contato',
        'hero-titulo':      'Agência Marítima Serviços com <span>Independência, Paixão e Inovação</span>',
        'hero-subtitulo':   '30 anos de liderança em agência marítima, praticagem e serviços marítimos no Chile, Peru, Argentina e Uruguai.',
        'hero-btn1':        'Nossos Serviços',
        'hero-btn2':        'Fale Conosco',
        'stat1-label':      'Anos de Experiência',
        'stat2-label':      'Países de Operação',
        'stat3-label':      'Navios por Ano',
        'stat4-label':      'Portos Atendidos',
        'nosotros-titulo':  'Quem Somos',
        'nosotros-p1':      'A B&M é uma empresa independente fundada em 1997 por Hans Bugge e Ansgar Müschen. A partir de nossa sede em Santiago do Chile, coordenamos todas as operações e gestões administrativas, prestando um serviço marítimo ágil, confiável e personalizado.',
        'nosotros-p2':      'Nossa ampla experiência no mercado naviero nacional e internacional nos permite atender todos os tipos de embarcações nos portos do Chile, Peru, Argentina e Uruguai. Além disso, coordenamos serviços de praticagem no Estreito de Magalhães, garantindo uma gestão eficiente em cada etapa da operação.',
        'nosotros-p3':      'Cada serviço é supervisionado diretamente pela nossa sede e conta com o apoio em campo de nossos capitães de porto itinerantes. Na B&M combinamos experiência, presença operacional e atendimento personalizado para responder com eficiência às necessidades de cada cliente.',
        'valores-titulo':   'Nossos Valores',
        'valor1-titulo':    'Profissionalismo',
        'valor1-desc':      'Abordamos cada projeto com absoluto profissionalismo com o objetivo de alcançar a excelência.',
        'valor2-titulo':    'Inovação',
        'valor2-desc':      'Usamos tecnologia de ponta para criar soluções.',
        'valor3-titulo':    'Compromisso',
        'valor3-desc':      'O objetivo do cliente tornamos nosso, e trabalhamos para ser um verdadeiro parceiro estratégico e cumprir cada uma de suas expectativas.',
        'valor4-titulo':    'Confiança',
        'valor4-desc':      'Construímos laços baseados na confiança, transparência e segurança, garantindo a confidencialidade dos dados de nossos clientes.',
        'mision-titulo':    'Missão',
        'mision-texto':     'Ser uma agência naviera 100% independente, capaz de proteger, representar e orientar nossos clientes a qualquer momento em todos os âmbitos do mercado marítimo e portuário.',
        'vision-titulo':    'Visão',
        'vision-texto':     'Ser reconhecidos como uma agência naviera líder, destacada por seus altos padrões de serviço, atenção próxima e dedicação permanente, inspirando confiança e credibilidade, e oferecendo soluções competitivas.',
        'nosotros-li1':     'Equipe de profissionais altamente qualificados',
        'nosotros-li2':     'Cobertura em portos do Chile, Peru e Argentina',
        'nosotros-li3':     'Disponibilidade 24/7 para atendimento de navios',
        'nosotros-li4':     'Gestão eficiente de documentação portuária',
        'nosotros-li5':     'Relações sólidas com autoridades marítimas',
        'nosotros-btn':          'Fale Conosco',
        'nosotros-btn-equipo':   'Equipe',
        'nosotros-badge':   'Anos de<br>Experiência',
        'servicios-titulo': 'Nossos Serviços',
        'servicios-desc':   'A B&M conta com mais de 26 anos de experiência como agente naviero. Embora esta atividade continue sendo o centro do nosso negócio, ao longo dos anos incorporamos diversos serviços para responder integralmente às necessidades dos nossos clientes.',
        'servicios-desc2':  'Ao trabalhar com a B&M, descobrirá nossa paixão pelo serviço e o compromisso que colocamos em tudo o que fazemos.',
        'servicios-desc3':  'Viva a experiência B&M. Descubra a inteligência B&M.',
        'serv1-titulo':     'Agência Marítima',
        'serv1-desc':       'Representação integral de navios em portos, coordenando todas as operações portuárias, documentação e serviços necessários para a escala do navio.',
        'serv2-titulo':     'Praticagem e Canal de Magalhães',
        'serv2-desc':       'Serviço de praticagem especializado para navegação pelo Estreito de Magalhães, canais austrais e águas restritas, com práticos certificados.',
        'serv3-titulo':     'Prefixture, Inteligência de Mercado',
        'serv3-desc':       'Serviços de pré-fixação e análise de mercado, fornecendo informações estratégicas para tomada de decisões no setor naval.',
        'serv4-titulo':     'Assuntos de Armadores',
        'serv4-desc':       'Gestão integral de assuntos de armadores: abastecimento, reparos, repatriação de tripulação e atendimento de sinistros em portos.',
        'serv5-titulo':     'Gestão Aduaneira',
        'serv5-desc':       'Tramitação eficiente de documentos aduaneiros, manifestos de carga e coordenação com autoridades portuárias e aduaneiras locais.',
        'serv6-titulo':     'Serviços Portuários',
        'serv6-desc':       'Coordenação de praticagem, rebocadores, lancha, abastecimento de combustível e todos os serviços portuários necessários para a operação do navio.',
        'contacto-titulo':  'Contato',
        'contacto-desc':    'Estamos disponíveis para atender suas consultas e oferecer a melhor solução para suas necessidades marítimas.',
        'ci-titulo':        'Informações de Contato',
        'ci-p':             'Nossa equipe está disponível 24 horas para atender emergências e operações navais nos portos que atendemos.',
        'ci1-label':        'Escritório Santiago (Sede)',
        'ci2-label':        'Telefone Santiago',
        'ci3-label':        'E-mail Geral',
        'ci4-label':        'Escritório Lima, Peru',
        'ci5-label':        'Escritório Buenos Aires, Argentina',
        'form-titulo':          'Envie-nos uma Mensagem',
        'form-nombre-label':    'Nome Completo *',
        'form-nombre-ph':       'João Silva',
        'form-empresa-label':   'Empresa',
        'form-empresa-ph':      'Nome da sua empresa',
        'form-email-label':     'E-mail *',
        'form-email-ph':        'joao@empresa.com.br',
        'form-telefono-label':  'Telefone',
        'form-mensaje-label':   'Mensagem *',
        'form-mensaje-ph':      'Conte-nos sobre sua consulta ou necessidade...',
        'form-pais-label':       'País',
        'form-servicio-label':  'Serviço de Interesse',
        'form-btn':             'Enviar Mensagem',
        'form-exito':           '✓ Mensagem enviada com sucesso! Entraremos em contato em breve.',
        'footer-desc':          'Empresa independente especializada em serviços marítimos integrais, operando em portos do Chile, Peru e Argentina desde 1997.',
        'footer-nav-titulo':    'Navegação',
        'footer-serv-titulo':   'Serviços',
        'footer-contacto-titulo': 'Contato',
        'footer-copy':          '© 2026 B&M Agência Marítima S.A. Todos os direitos reservados.',
        'footer-design':        'Design web profissional',
        'nav-equipo':           'Equipe',
        'equipo-titulo':        'Nossa Equipe',
        'equipo-intro':         'Na B&M acreditamos que ter uma equipe apaixonada pelo que faz é o que faz a diferença no serviço que entregamos. Estamos disponíveis 24/7.',
        'modal1-titulo':        'Agência Marítima',
        'modal1-texto':         'A B&M gerencia um grande volume de escalas portuárias na América do Sul. Atuamos como agentes portuários para todos os tipos de navios — de graneleiros convencionais a petroleiros — e gerenciamos escalas especializadas, como operações de <em>bunkering</em> e cargas de projetos, entre outras. Também prestamos serviços de agência de proteção (<em>protective agency</em>) sempre que nossos clientes necessitarem. Independentemente do serviço prestado, nossa prioridade é a eficiência de custos, a agilidade operacional e a proteção constante dos interesses de nossos clientes.',
        'modal2-titulo':        'Praticagem no Canal de Magalhães e Portos',
        'modal2-texto':         'Para os navios que navegam pelos canais austrais do Chile e pelo Estreito de Magalhães, que realizam manobras em vários portos do Peru ou que navegam em rios da Argentina, estamos inteiramente à sua disposição para gerenciar de forma oportuna e eficiente os serviços de praticagem necessários. Consulte-nos sobre os custos e os diversos requisitos de acordo com a regulamentação vigente. Somos especialistas e teremos prazer em ajudá-lo!',
        'modal3-titulo':        'Inteligência de Mercado',
        'modal3-p1':            'Entendemos que o mercado de fretamento opera em um ambiente altamente competitivo, onde ter informações precisas e oportunas faz a diferença no momento de fechar novos negócios.',
        'modal3-p2':            'Por isso, criamos nossa área de Pré-fixação, focada em entregar —em menos de uma hora— todas as informações relevantes para a tomada de decisões, incluindo custos portuários, condições operacionais, restrições e requisitos. Assim, nossos clientes podem negociar de uma posição privilegiada.',
        'modal3-p3':            'No entanto, sabemos que os custos e as restrições são apenas uma parte do processo. Por isso, contamos com uma dinâmica equipe comercial dedicada a coletar, analisar e compartilhar informações estratégicas do setor. Nossa inteligência de mercado inclui relatórios personalizados, programação de navios no porto e acompanhamento permanente dos temas relevantes para cada cliente.',
        'modal4-titulo':        'Assuntos de Armadores',
        'modal4-p1':            'Nossa área de Serviços para Armadores oferece assistência integral, orientada a atender os requisitos das embarcações e suas tripulações.',
        'modal4-p2':            'Nossos principais serviços incluem:',
        'modal4-li1':           'Gestão de transferências de tripulantes, visitantes e técnicos: procedimentos de imigração, passagens aéreas, assistência em aeroportos, reservas de hotéis e coordenação de transporte, entre outros.',
        'modal4-li2':           'Assistência médica para membros da tripulação.',
        'modal4-li3':           'Gestão logística de peças de reposição enviadas por via aérea ou marítima, de ou para o Chile, incluindo consolidação e desconsolidação de contêineres.',
        'modal4-li4':           'Serviços de courier e coordenação logística para entrega de provisões a bordo.',
        'modal4-li5':           'Entrega de dinheiro ao capitão (Cash to Master).',
        'modal4-li6':           'Fornecimento de cartas náuticas do Almirantado Britânico (BA) ou locais, publicações marítimas, avisos aos navegantes (NTM), bandeiras e outros itens necessários.',
        'modal2-leyenda-azul':  '<strong>Azul:</strong> obrigatório para todos os navios.',
        'presencia-titulo':     'Nossa Presença',
        'presencia-desc':       'Operamos nos principais portos do Chile, Peru, Argentina e Uruguai, oferecendo soluções marítimas integrais no Cone Sul.',
        'modal2-leyenda-rojo':  '<strong>Vermelho:</strong> obrigatório para todos os navios que fazem escala em portos chilenos.',
        'select-pais': [
            { value: '',           text: 'Selecione um país...' },
            { value: 'chile',      text: 'Chile' },
            { value: 'peru',       text: 'Peru' },
            { value: 'argentina',  text: 'Argentina' },
            { value: 'uruguay',    text: 'Uruguai' },
        ],
        'select-servicio': [
            { value: '',               text: 'Selecione um serviço...' },
            { value: 'agenciamiento',  text: 'Agência Marítima' },
            { value: 'practicaje',     text: 'Praticagem / Canal de Magalhães' },
            { value: 'inteligencia',   text: 'Inteligência de Mercado' },
            { value: 'owners',         text: 'Assuntos de Armadores' },
            { value: 'aduanera',       text: 'Gestão Aduaneira' },
            { value: 'portuarios',     text: 'Serviços Portuários' },
            { value: 'outro',          text: 'Outro' },
        ],
    },

    fr: {
        'nav-inicio':       'Accueil',
        'nav-nosotros':     'À Propos',
        'nav-servicios':    'Services',
        'nav-contacto':     'Contact',
        'hero-titulo':      'Agence Maritime Services avec <span>Indépendance, Passion et Innovation</span>',
        'hero-subtitulo':   '30 ans de leadership en agence maritime, pilotage et services maritimes au Chili, Pérou, Argentine et Uruguay.',
        'hero-btn1':        'Nos Services',
        'hero-btn2':        'Contactez-nous',
        'stat1-label':      'Ans d\'Expérience',
        'stat2-label':      'Pays d\'Opération',
        'stat3-label':      'Navires par An',
        'stat4-label':      'Ports Desservis',
        'nosotros-titulo':  'Qui Sommes-Nous',
        'nosotros-p1':      'B&M est une entreprise indépendante fondée en 1997 par Hans Bugge et Ansgar Müschen. Depuis notre siège à Santiago du Chili, nous coordonnons toutes les opérations et gestions administratives, en offrant un service maritime agile, fiable et personnalisé.',
        'nosotros-p2':      'Notre vaste expérience sur le marché maritime national et international nous permet de servir tous types de navires dans les ports du Chili, du Pérou, de l\'Argentine et de l\'Uruguay. Nous coordonnons également des services de pilotage dans le détroit de Magellan, assurant une gestion efficace à chaque étape de l\'opération.',
        'nosotros-p3':      'Chaque service est supervisé directement par notre siège et bénéficie du soutien sur le terrain de nos capitaines de port itinérants. Chez B&M, nous combinons expérience, présence opérationnelle et attention personnalisée pour répondre efficacement aux besoins de chaque client.',
        'valores-titulo':   'Nos Valeurs',
        'valor1-titulo':    'Professionnalisme',
        'valor1-desc':      'Nous abordons chaque projet avec un professionnalisme absolu dans le but d\'atteindre l\'excellence.',
        'valor2-titulo':    'Innovation',
        'valor2-desc':      'Nous utilisons une technologie de pointe pour créer des solutions.',
        'valor3-titulo':    'Engagement',
        'valor3-desc':      'Nous faisons nôtre l\'objectif du client et travaillons pour être un véritable partenaire stratégique et répondre à chacune de ses attentes.',
        'valor4-titulo':    'Confiance',
        'valor4-desc':      'Nous construisons des relations basées sur la confiance, la transparence et la sécurité, garantissant la confidentialité des données de nos clients.',
        'mision-titulo':    'Mission',
        'mision-texto':     'Être une agence maritime 100 % indépendante, capable de protéger, représenter et orienter nos clients à tout moment dans tous les domaines du marché maritime et portuaire.',
        'vision-titulo':    'Vision',
        'vision-texto':     'Être reconnus comme une agence maritime leader, distinguée par ses hauts standards de service, une attention personnalisée et un dévouement permanent, inspirant confiance et crédibilité, et offrant des solutions compétitives.',
        'nosotros-li1':     'Équipe de professionnels hautement qualifiés',
        'nosotros-li2':     'Couverture dans les ports du Chili, Pérou et Argentine',
        'nosotros-li3':     'Disponibilité 24h/7j pour l\'assistance aux navires',
        'nosotros-li4':     'Gestion efficace de la documentation portuaire',
        'nosotros-li5':     'Relations solides avec les autorités maritimes',
        'nosotros-btn':          'Parlons-en',
        'nosotros-btn-equipo':   'Équipe',
        'nosotros-badge':   'Ans<br>d\'Expérience',
        'servicios-titulo': 'Nos Services',
        'servicios-desc':   'B&M possède plus de 26 ans d\'expérience en tant qu\'agent maritime. Bien que cette activité reste au cœur de notre activité, au fil des années nous avons intégré divers services pour répondre intégralement aux besoins de nos clients.',
        'servicios-desc2':  'En travaillant avec B&M, vous découvrirez notre passion pour le service et l\'engagement que nous mettons dans tout ce que nous faisons.',
        'servicios-desc3':  'Vivez l\'expérience B&M. Découvrez l\'intelligence B&M.',
        'serv1-titulo':     'Agence Maritime',
        'serv1-desc':       'Représentation complète des navires dans les ports, coordination de toutes les opérations portuaires, documentation et services nécessaires à l\'escale du navire.',
        'serv2-titulo':     'Pilotage et Détroit de Magellan',
        'serv2-desc':       'Service de pilotage spécialisé pour la navigation dans le Détroit de Magellan, les canaux australs et les eaux restreintes, avec des pilotes certifiés.',
        'serv3-titulo':     'Prefixture, Intelligence de Marché',
        'serv3-desc':       'Services de pré-affrètement et d\'analyse de marché, fournissant des informations stratégiques pour la prise de décision dans le secteur maritime.',
        'serv4-titulo':     'Affaires des Armateurs',
        'serv4-desc':       'Gestion complète des affaires des armateurs : approvisionnement, réparations, rapatriement d\'équipage et gestion des sinistres dans les ports.',
        'serv5-titulo':     'Gestion Douanière',
        'serv5-desc':       'Traitement efficace des documents douaniers, manifestes de fret et coordination avec les autorités portuaires et douanières locales.',
        'serv6-titulo':     'Services Portuaires',
        'serv6-desc':       'Coordination du pilotage, des remorqueurs, du service de vedette, de l\'approvisionnement en carburant et de tous les services portuaires nécessaires à l\'exploitation du navire.',
        'contacto-titulo':  'Contactez-nous',
        'contacto-desc':    'Nous sommes disponibles pour répondre à vos demandes et vous fournir la meilleure solution pour vos besoins maritimes.',
        'ci-titulo':        'Informations de Contact',
        'ci-p':             'Notre équipe est disponible 24 heures sur 24 pour gérer les urgences et les opérations navales dans les ports que nous desservons.',
        'ci1-label':        'Bureau de Santiago (Siège Social)',
        'ci2-label':        'Téléphone Santiago',
        'ci3-label':        'E-mail Général',
        'ci4-label':        'Bureau de Lima, Pérou',
        'ci5-label':        'Bureau de Buenos Aires, Argentine',
        'form-titulo':          'Envoyez-nous un Message',
        'form-nombre-label':    'Nom Complet *',
        'form-nombre-ph':       'Jean Dupont',
        'form-empresa-label':   'Entreprise',
        'form-empresa-ph':      'Nom de votre entreprise',
        'form-email-label':     'E-mail *',
        'form-email-ph':        'jean@entreprise.fr',
        'form-telefono-label':  'Téléphone',
        'form-mensaje-label':   'Message *',
        'form-mensaje-ph':      'Décrivez votre demande ou besoin...',
        'form-pais-label':       'Pays',
        'form-servicio-label':  'Service d\'Intérêt',
        'form-btn':             'Envoyer le Message',
        'form-exito':           '✓ Message envoyé avec succès ! Nous vous contacterons prochainement.',
        'footer-desc':          'Entreprise indépendante spécialisée dans les services maritimes complets, opérant dans les ports du Chili, Pérou et Argentine depuis 1997.',
        'footer-nav-titulo':    'Navigation',
        'footer-serv-titulo':   'Services',
        'footer-contacto-titulo': 'Contact',
        'footer-copy':          '© 2026 B&M Agence Maritime S.A. Tous droits réservés.',
        'footer-design':        'Conception web professionnelle',
        'nav-equipo':           'Équipe',
        'equipo-titulo':        'Notre Équipe',
        'equipo-intro':         'Chez B&M, nous croyons qu\'avoir une équipe passionnée par son travail fait toute la différence dans le service que nous offrons. Nous sommes disponibles 24h/24, 7j/7.',
        'modal1-titulo':        'Agence Maritime',
        'modal1-texto':         'B&M gère un grand volume d\'escales portuaires en Amérique du Sud. Nous agissons en tant qu\'agents portuaires pour tous types de navires — des vraquiers conventionnels aux pétroliers — et gérons des escales spécialisées, telles que les opérations de <em>soutage</em> et les cargaisons de projet, entre autres. Nous fournissons également des services d\'<em>agence de protection</em> chaque fois que nos clients en ont besoin. Quel que soit le service fourni, notre priorité est l\'efficacité des coûts, l\'agilité opérationnelle et la protection constante des intérêts de nos clients.',
        'modal2-titulo':        'Pilotage Magellan, Canaux &amp; Ports',
        'modal2-texto':         'Pour les navires naviguant dans les canaux australs du Chili et le Détroit de Magellan, effectuant des manœuvres dans divers ports du Pérou, ou naviguant sur des rivières en Argentine, nous sommes entièrement à votre disposition pour gérer en temps opportun et efficacement les services de pilotage nécessaires. Consultez-nous sur les coûts et les différentes exigences conformément à la réglementation en vigueur. Nous sommes des experts et serons ravis de vous aider !',
        'modal3-titulo':        'Intelligence de Marché',
        'modal3-p1':            'Nous comprenons que le marché de l\'affrètement opère dans un environnement hautement compétitif, où disposer d\'informations précises et opportunes fait la différence au moment de conclure de nouvelles affaires.',
        'modal3-p2':            'C\'est pourquoi nous avons créé notre département de Pré-fixation, axé sur la livraison —en moins d\'une heure— de toutes les informations pertinentes pour la prise de décision, notamment les coûts portuaires, les conditions opérationnelles, les restrictions et les exigences. Ainsi, nos clients peuvent négocier depuis une position privilégiée.',
        'modal3-p3':            'Cependant, nous savons que les coûts et les restrictions ne sont qu\'une partie du processus. C\'est pourquoi nous disposons d\'une équipe commerciale dynamique dédiée à la collecte, l\'analyse et le partage d\'informations stratégiques du secteur. Notre intelligence de marché comprend des rapports personnalisés, la programmation des navires au port et le suivi permanent des sujets pertinents pour chaque client.',
        'modal4-titulo':        'Affaires des Armateurs',
        'modal4-p1':            'Notre département de Services aux Armateurs offre une assistance complète, visant à satisfaire les besoins des navires et de leurs équipages.',
        'modal4-p2':            'Nos principaux services comprennent :',
        'modal4-li1':           'Gestion des transferts d\'équipages, de visiteurs et de techniciens : procédures d\'immigration, billets d\'avion, assistance en aéroport, réservations d\'hôtels et coordination des transports, entre autres.',
        'modal4-li2':           'Assistance médicale pour les membres de l\'équipage.',
        'modal4-li3':           'Gestion logistique des pièces de rechange envoyées par voie aérienne ou maritime, depuis ou vers le Chili, y compris la consolidation et la déconsolidation de conteneurs.',
        'modal4-li4':           'Services de messagerie et coordination logistique pour la livraison de provisions à bord.',
        'modal4-li5':           'Remise d\'espèces au capitaine (Cash to Master).',
        'modal4-li6':           'Fourniture de cartes nautiques de l\'Amirauté britannique (BA) ou locales, publications maritimes, avis aux navigateurs (NTM), pavillons et autres éléments requis.',
        'modal2-leyenda-azul':  '<strong>Bleu :</strong> obligatoire pour tous les navires.',
        'presencia-titulo':     'Notre Présence',
        'presencia-desc':       'Nous opérons dans les principaux ports du Chili, du Pérou, de l\'Argentine et de l\'Uruguay, en fournissant des solutions maritimes complètes dans le Cône Sud.',
        'modal2-leyenda-rojo':  '<strong>Rouge :</strong> obligatoire pour tous les navires faisant escale dans les ports chiliens.',
        'select-pais': [
            { value: '',           text: 'Sélectionnez un pays...' },
            { value: 'chile',      text: 'Chili' },
            { value: 'peru',       text: 'Pérou' },
            { value: 'argentina',  text: 'Argentine' },
            { value: 'uruguay',    text: 'Uruguay' },
        ],
        'select-servicio': [
            { value: '',               text: 'Sélectionnez un service...' },
            { value: 'agenciamiento',  text: 'Agence Maritime' },
            { value: 'practicaje',     text: 'Pilotage / Détroit de Magellan' },
            { value: 'inteligencia',   text: 'Intelligence de Marché' },
            { value: 'owners',         text: 'Affaires des Armateurs' },
            { value: 'aduanera',       text: 'Gestion Douanière' },
            { value: 'portuarios',     text: 'Services Portuaires' },
            { value: 'autre',          text: 'Autre' },
        ],
    },

    ja: {
        'nav-inicio':       'ホーム',
        'nav-nosotros':     '会社概要',
        'nav-servicios':    'サービス',
        'nav-contacto':     'お問い合わせ',
        'hero-titulo':      '海事代理店のサービス：<span>独立性、情熱、革新</span>',
        'hero-subtitulo':   'チリ、ペルー、アルゼンチン、ウルグアイにおける海事代理店、水先案内、海事サービス分野での30年のリーダーシップ。',
        'hero-btn1':        '当社のサービス',
        'hero-btn2':        'お問い合わせ',
        'stat1-label':      '年の実績',
        'stat2-label':      '事業展開国',
        'stat3-label':      '年間取扱船舶数',
        'stat4-label':      '対応港湾数',
        'nosotros-titulo':  '会社概要',
        'nosotros-p1':      'B&MはHans BuggeとAnsgar Müschenによって1997年に設立された独立系企業です。チリのサンティアゴにある本社から、すべての業務と管理プロセスを調整し、機敏で信頼性が高く、パーソナライズされた海事サービスを提供しています。',
        'nosotros-p2':      '国内外の海運市場における豊富な経験により、チリ、ペルー、アルゼンチン、ウルグアイの港湾であらゆる種類の船舶に対応することができます。また、マゼラン海峡での水先案内サービスも調整し、各段階での効率的な管理を確保しています。',
        'nosotros-p3':      'すべてのサービスは本社が直接監督し、巡回港湾キャプテンが現地でサポートします。B&Mでは、経験、運営上のプレゼンス、パーソナライズされたアテンションを組み合わせて、各クライアントのニーズに効率的に対応しています。',
        'valores-titulo':   '私たちの価値観',
        'valor1-titulo':    'プロフェッショナリズム',
        'valor1-desc':      '卓越性を達成するために、すべてのプロジェクトに絶対的なプロフェッショナリズムで取り組みます。',
        'valor2-titulo':    'イノベーション',
        'valor2-desc':      '最先端の技術を使用してソリューションを創造します。',
        'valor3-titulo':    'コミットメント',
        'valor3-desc':      'クライアントの目標を自分たちのものとし、真の戦略的パートナーとなり、すべての期待に応えるために取り組みます。',
        'valor4-titulo':    '信頼',
        'valor4-desc':      '信頼、透明性、安全性に基づく関係を構築し、クライアントデータの機密性を保証します。',
        'mision-titulo':    'ミッション',
        'mision-texto':     '100%独立した海事代理店として、海運および港湾市場のあらゆる分野においていつでもクライアントを保護し、代理し、指導することができる存在であること。',
        'vision-titulo':    'ビジョン',
        'vision-texto':     '高いサービス標準、きめ細かな対応、そして永続的な献身によって際立ち、信頼と信用を呼び起こし、競争力のあるソリューションを提供する、業界をリードする海事代理店として認められること。',
        'nosotros-li1':     '高度に訓練されたプロフェッショナルチーム',
        'nosotros-li2':     'チリ、ペルー、アルゼンチンの港湾をカバー',
        'nosotros-li3':     '船舶対応24時間365日対応',
        'nosotros-li4':     '港湾書類の効率的な管理',
        'nosotros-li5':     '海事当局との強固な関係',
        'nosotros-btn':          'お問い合わせ',
        'nosotros-btn-equipo':   'チーム',
        'nosotros-badge':   '年の<br>実績',
        'servicios-titulo': '当社のサービス',
        'servicios-desc':   'B&Mは26年以上の船舶代理店としての経験を有しています。この業務は引き続き事業の中核ですが、長年にわたりお客様のニーズに総合的に応えるためにさまざまなサービスを取り入れてきました。',
        'servicios-desc2':  'B&Mと協力することで、私たちのサービスへの情熱とすべてに注ぐコミットメントを発見していただけるでしょう。',
        'servicios-desc3':  'B&Mのエクスペリエンスを体験してください。B&Mのインテリジェンスをご覧ください。',
        'serv1-titulo':     '船舶代理',
        'serv1-desc':       '港湾での船舶の包括的な代理業務、全港湾オペレーション、書類手続き、船舶寄港に必要なサービスを調整します。',
        'serv2-titulo':     '水先案内・マゼラン海峡',
        'serv2-desc':       'マゼラン海峡、南部水路、制限水域の航行に特化した水先案内サービスを認定水先人が提供します。',
        'serv3-titulo':     'Prefixture，マーケットインテリジェンス',
        'serv3-desc':       '海運分野の意思決定のための戦略的情報を提供する、プレ・フィクスチャー及び市場分析サービス。',
        'serv4-titulo':     '船主業務',
        'serv4-desc':       '船主業務の包括的な管理：補給、修繕、乗組員の送還、港湾での損害賠償処理。',
        'serv5-titulo':     '税関管理',
        'serv5-desc':       '税関書類、貨物マニフェストの効率的な処理、地域の港湾・税関当局との調整。',
        'serv6-titulo':     '港湾サービス',
        'serv6-desc':       '水先案内、タグボート、ランチサービス、燃料補給、船舶運航に必要な全港湾サービスの調整。',
        'contacto-titulo':  'お問い合わせ',
        'contacto-desc':    'お客様のご質問にお答えし、海事ニーズに最適なソリューションを提供できるよう準備しています。',
        'ci-titulo':        'お問い合わせ先',
        'ci-p':             '当社チームは、当社が対応する港湾での緊急事態や海上オペレーションに24時間対応しています。',
        'ci1-label':        'サンティアゴオフィス（本社）',
        'ci2-label':        'サンティアゴ電話',
        'ci3-label':        'メールアドレス',
        'ci4-label':        'リマオフィス（ペルー）',
        'ci5-label':        'ブエノスアイレスオフィス（アルゼンチン）',
        'form-titulo':          'メッセージを送る',
        'form-nombre-label':    'お名前 *',
        'form-nombre-ph':       '山田太郎',
        'form-empresa-label':   '会社名',
        'form-empresa-ph':      '会社名を入力してください',
        'form-email-label':     'メールアドレス *',
        'form-email-ph':        'yamada@company.co.jp',
        'form-telefono-label':  '電話番号',
        'form-mensaje-label':   'メッセージ *',
        'form-mensaje-ph':      'お問い合わせ内容をお書きください...',
        'form-pais-label':       '国',
        'form-servicio-label':  'ご希望のサービス',
        'form-btn':             'メッセージを送信',
        'form-exito':           '✓ メッセージが送信されました！近日中にご連絡いたします。',
        'footer-desc':          '1997年よりチリ、ペルー、アルゼンチンの港湾で運営する海事サービス専門の独立系企業。',
        'footer-nav-titulo':    'ナビゲーション',
        'footer-serv-titulo':   'サービス',
        'footer-contacto-titulo': 'お問い合わせ',
        'footer-copy':          '© 2026 B&M海事代理店 株式会社. 全著作権所有。',
        'footer-design':        'プロフェッショナルなウェブデザイン',
        'nav-equipo':           'チーム',
        'equipo-titulo':        '私たちのチーム',
        'equipo-intro':         'B&Mでは、仕事に情熱を持つチームがサービスの差を生むと信じています。私たちは24時間365日対応可能です。',
        'modal1-titulo':        '船舶代理',
        'modal1-texto':         'B&Mは南米で多数の港湾寄港を管理しています。在来型バルカーから油槽船まで、あらゆる種類の船舶の港湾代理人として、<em>バンカリング</em>作業やプロジェクト貨物などの特殊な寄港も管理しています。また、顧客が必要とする際には常に<em>保護代理</em>サービスも提供しています。提供するサービスにかかわらず、コスト効率、業務の迅速性、顧客利益の継続的な保護を優先しています。',
        'modal2-titulo':        'マゼラン海峡・水路・港湾水先案内',
        'modal2-texto':         'チリの南部水路やマゼラン海峡を航行する船舶、ペルーの各港でマヌーバーを行う船舶、アルゼンチンの河川を航行する船舶に対して、必要な水先案内サービスを迅速かつ効率的に手配するために全力でサポートします。費用及び現行規制に基づく各種要件についてはお問い合わせください。私たちは専門家であり、喜んでお手伝いします！',
        'modal3-titulo':        'マーケットインテリジェンス',
        'modal3-p1':            '傭船市場は非常に競争の激しい環境で運営されており、新規ビジネスを成約する際に正確でタイムリーな情報を持つことが差別化の鍵となることを私たちは理解しています。',
        'modal3-p2':            'そのため、私たちはプレフィクスチャー部門を設立しました。この部門は、港湾コスト、運営条件、制限、要件など、意思決定に関連するすべての情報を1時間以内に提供することに特化しています。これにより、クライアントは有利な立場から交渉することができます。',
        'modal3-p3':            'しかし、コストと制限はプロセスの一部に過ぎないことも理解しています。そのため、業界の戦略的情報の収集、分析、共有に専念するダイナミックな営業チームを擁しています。私たちのマーケットインテリジェンスには、パーソナライズされたレポート、港湾での船舶スケジューリング、各クライアントに関連するトピックの継続的なモニタリングが含まれます。',
        'modal4-titulo':        '船主業務',
        'modal4-p1':            '船主サービス部門では、船舶と乗組員の要件を満たすことを目的とした包括的なサポートを提供しています。',
        'modal4-p2':            '主なサービスは以下のとおりです：',
        'modal4-li1':           '乗組員、訪問者、技術者の移送管理：入国手続き、航空券、空港でのサポート、ホテル予約、交通手段の調整など。',
        'modal4-li2':           '乗組員への医療支援。',
        'modal4-li3':           'チリへの/チリからの航空または海上輸送によるスペアパーツのロジスティクス管理（コンテナの混載・デバンニングを含む）。',
        'modal4-li4':           '船上への物資納品のための宅配サービスとロジスティクス調整。',
        'modal4-li5':           '船長への現金手渡し（Cash to Master）。',
        'modal4-li6':           '英国海軍省（BA）または国内海図、海事刊行物、航行通報（NTM）、旗、その他必要な物品の供給。',
        'modal2-leyenda-azul':  '<strong>青：</strong>全船舶に義務付けられています。',
        'presencia-titulo':     '事業エリア',
        'presencia-desc':       'チリ、ペルー、アルゼンチン、ウルグアイの主要港で事業を展開し、南米南部地域に包括的な海事ソリューションを提供しています。',
        'modal2-leyenda-rojo':  '<strong>赤：</strong>チリの港に寄港する全船舶に義務付けられています。',
        'select-pais': [
            { value: '',           text: '国を選択...' },
            { value: 'chile',      text: 'チリ' },
            { value: 'peru',       text: 'ペルー' },
            { value: 'argentina',  text: 'アルゼンチン' },
            { value: 'uruguay',    text: 'ウルグアイ' },
        ],
        'select-servicio': [
            { value: '',               text: 'サービスを選択...' },
            { value: 'agenciamiento',  text: '船舶代理' },
            { value: 'practicaje',     text: '水先案内/マゼラン海峡' },
            { value: 'inteligencia',   text: 'マーケットインテリジェンス' },
            { value: 'owners',         text: '船主業務' },
            { value: 'aduanera',       text: '税関管理' },
            { value: 'portuarios',     text: '港湾サービス' },
            { value: 'otro',           text: 'その他' },
        ],
    },
};

function cambiarIdioma(lang) {
    const t = traducciones[lang];
    if (!t) return;

    // Traduce elementos con data-i18n (innerHTML para soportar <span>)
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (t[key] !== undefined) el.innerHTML = t[key];
    });

    // Traduce placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        if (t[key] !== undefined) el.placeholder = t[key];
    });

    // Traduce opciones del select
    document.querySelectorAll('[data-i18n-select]').forEach(select => {
        const key = 'select-' + select.dataset.i18nSelect;
        if (t[key]) {
            select.innerHTML = t[key].map(op =>
                `<option value="${op.value}">${op.text}</option>`
            ).join('');
        }
    });

    // Marca el botón activo y actualiza el código del globo
    document.querySelectorAll('.idioma-btn').forEach(btn => {
        btn.classList.toggle('activo', btn.dataset.lang === lang);
    });
    const activeBtn = document.querySelector(`.idioma-btn[data-lang="${lang}"]`);
    const codeDisplay = document.querySelector('.lang-code-display');
    if (activeBtn && codeDisplay) {
        codeDisplay.textContent = activeBtn.dataset.code || lang.toUpperCase();
    }

    // Guarda preferencia y actualiza atributo html lang
    localStorage.setItem('idioma', lang);
    document.documentElement.lang = lang;
}

function iniciarIdiomas() {
    const selector = document.getElementById('lang-selector');
    const toggle   = document.getElementById('lang-toggle');
    const dropdown = document.getElementById('lang-dropdown');

    document.querySelectorAll('.idioma-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            cambiarIdioma(btn.dataset.lang);
            if (selector) selector.classList.remove('open');
        });
    });

    if (toggle) {
        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            if (selector) selector.classList.toggle('open');
        });
    }

    if (dropdown) dropdown.addEventListener('click', e => e.stopPropagation());

    document.addEventListener('click', () => {
        if (selector) selector.classList.remove('open');
    });

    // Aplica idioma guardado o español por defecto
    const idiomaGuardado = localStorage.getItem('idioma') || 'es';
    cambiarIdioma(idiomaGuardado);
}

/* ============================================================
   SLIDER / CARRUSEL DEL HERO
   Cambia el tiempo entre slides (en milisegundos)
   ============================================================ */
const CONFIG_SLIDER = {
    intervalo: 5000,    // Tiempo entre cada slide (5000ms = 5 segundos)
    transicion: 1000,   // Duración de la transición en ms
};

let slideActual = 0;
let intervalSlider;

function iniciarSlider() {
    const slides = document.querySelectorAll('.slide');
    const puntos = document.querySelectorAll('.slide-punto');

    if (slides.length === 0) return;

    function mostrarSlide(n) {
        slides.forEach(s => s.classList.remove('activo'));
        puntos.forEach(p => p.classList.remove('activo'));
        slideActual = (n + slides.length) % slides.length;
        slides[slideActual].classList.add('activo');
        if (puntos[slideActual]) puntos[slideActual].classList.add('activo');

        // Sincronizar el fondo de Misión/Visión con el slide activo
        const mvSeccion = document.getElementById('mision-vision');
        if (mvSeccion) {
            const bgActivo = window.getComputedStyle(slides[slideActual]).backgroundImage;
            mvSeccion.style.backgroundImage = bgActivo;
        }
    }

    function siguiente() {
        mostrarSlide(slideActual + 1);
    }

    // Navegación por puntos
    puntos.forEach((punto, i) => {
        punto.addEventListener('click', () => {
            clearInterval(intervalSlider);
            mostrarSlide(i);
            intervalSlider = setInterval(siguiente, CONFIG_SLIDER.intervalo);
        });
    });

    // Auto-avance
    intervalSlider = setInterval(siguiente, CONFIG_SLIDER.intervalo);
    mostrarSlide(0);
}

/* ============================================================
   NAVEGACIÓN - Header fijo con cambio al hacer scroll
   ============================================================ */
function iniciarNavegacion() {
    const header = document.querySelector('header');
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    const enlaces = document.querySelectorAll('nav a');

    // Header compacto al hacer scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            header.classList.add('compacto');
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.55)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.06)';
        } else {
            header.classList.remove('compacto');
            header.style.backgroundColor = 'rgba(255, 255, 255, 1)';
            header.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.08)';
        }
    }, { passive: true });

    // Menú hamburguesa (móvil)
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('abierto');
            hamburger.classList.toggle('activo');
        });
    }

    // Cerrar menú al hacer click en un enlace (móvil)
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', () => {
            nav.classList.remove('abierto');
        });
    });

    // Marcar enlace activo según sección visible
    const secciones = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        let posicion = window.scrollY + 100;

        secciones.forEach(seccion => {
            const top = seccion.offsetTop;
            const altura = seccion.offsetHeight;
            const id = seccion.getAttribute('id');
            const enlace = document.querySelector(`nav a[href="#${id}"]`);

            if (enlace) {
                if (posicion >= top && posicion < top + altura) {
                    document.querySelectorAll('nav a').forEach(e => e.classList.remove('activo'));
                    enlace.classList.add('activo');
                }
            }
        });
    }, { passive: true });
}

/* ============================================================
   ANIMACIONES AL HACER SCROLL
   Los elementos con clase "animar" aparecen al hacerse visibles
   ============================================================ */
function iniciarAnimaciones() {
    const elementos = document.querySelectorAll('.animar');

    if (!elementos.length) return;

    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    elementos.forEach(el => observador.observe(el));
}

/* ============================================================
   CONTADORES ANIMADOS (estadísticas)
   Los números cuentan desde 0 hasta el valor final
   ============================================================ */
function animarContadores() {
    const contadores = document.querySelectorAll('.estadistica-numero');

    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting && !entrada.target.dataset.contado) {
                entrada.target.dataset.contado = 'true';
                const objetivo = parseInt(entrada.target.dataset.objetivo);
                const sufijo = entrada.target.dataset.sufijo || '';
                const duracion = 2000; // 2 segundos
                const inicio = performance.now();

                function actualizar(ahora) {
                    const progreso = Math.min((ahora - inicio) / duracion, 1);
                    const easing = 1 - Math.pow(1 - progreso, 3); // ease-out cubic
                    entrada.target.textContent = Math.round(easing * objetivo) + sufijo;
                    if (progreso < 1) {
                        requestAnimationFrame(actualizar);
                    } else if (objetivo === 30) {
                        entrada.target.classList.add('estadistica-resaltado');
                        setTimeout(() => entrada.target.classList.remove('estadistica-resaltado'), 3100);
                    }
                }

                requestAnimationFrame(actualizar);
            }
        });
    }, { threshold: 0.5 });

    contadores.forEach(c => observador.observe(c));
}

/* ============================================================
   FORMULARIO DE CONTACTO
   Cambia la URL del action en el HTML para enviar los datos
   ============================================================ */
function iniciarFormularioReclamaciones() {
    const form = document.getElementById('form-reclamaciones-peru');
    if (!form) return;
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const btn = form.querySelector('.modal-form-submit');
        const exito = document.getElementById('reclamacion-exito');
        btn.disabled = true;
        btn.textContent = 'Enviando...';
        setTimeout(() => {
            form.reset();
            btn.style.display = 'none';
            if (exito) exito.style.display = 'block';
        }, 1000);
    });
}

function iniciarFormulario() {
    const formulario = document.getElementById('formulario-contacto');
    if (!formulario) return;

    // Endpoints Formspree por destino de email
    // Chile       → Rolando.horzella@bm-maritima.cl
    // Arg/Ury     → carl.lessau@bm-maritima.cl
    // Perú        → Carlos.Garcia@bm-maritima.pe
    const ENDPOINTS = {
        chile:     'https://formspree.io/f/CHILE_FORM_ID',
        argentina: 'https://formspree.io/f/ARGURY_FORM_ID',
        uruguay:   'https://formspree.io/f/ARGURY_FORM_ID',
        peru:      'https://formspree.io/f/PERU_FORM_ID',
    };

    formulario.addEventListener('submit', function(e) {
        e.preventDefault();

        const btn       = formulario.querySelector('button[type="submit"]');
        const exito     = document.getElementById('mensaje-exito');
        const paisSel   = formulario.pais ? formulario.pais.value : '';
        const selectPais = document.getElementById('pais');

        // Validación: país requerido
        if (!paisSel) {
            if (selectPais) {
                selectPais.style.borderColor = '#e53e3e';
                selectPais.focus();
                selectPais.addEventListener('change', () => {
                    selectPais.style.borderColor = '';
                }, { once: true });
            }
            return;
        }

        const endpoint = ENDPOINTS[paisSel];
        btn.disabled = true;
        btn.textContent = 'Enviando...';

        fetch(endpoint, {
            method: 'POST',
            body: new FormData(formulario),
            headers: { 'Accept': 'application/json' },
        })
        .then(res => {
            if (res.ok) {
                formulario.reset();
                if (exito) {
                    exito.style.display = 'block';
                    setTimeout(() => { exito.style.display = 'none'; }, 5000);
                }
            } else {
                return res.json().then(data => {
                    const msg = (data.errors || []).map(err => err.message).join(', ');
                    alert('Error al enviar: ' + (msg || 'intente nuevamente.'));
                });
            }
        })
        .catch(() => {
            alert('Error de conexión. Por favor intente nuevamente.');
        })
        .finally(() => {
            btn.disabled = false;
            btn.textContent = 'Enviar Mensaje';
        });
    });
}

/* ============================================================
   SCROLL SUAVE al hacer clic en enlaces de navegación
   ============================================================ */
function iniciarScrollSuave() {
    document.querySelectorAll('a[href^="#"]').forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            const id = this.getAttribute('href');
            if (id === '#') return;
            const destino = document.querySelector(id);
            if (destino) {
                e.preventDefault();
                const offset = 75; // Altura del header fijo
                const posicion = destino.offsetTop - offset;
                window.scrollTo({ top: posicion, behavior: 'smooth' });
            }
        });
    });
}

/* ============================================================
   INICIALIZACIÓN - Se ejecuta cuando carga la página
   ============================================================ */
/* ============================================================
   MAPA INTERACTIVO - Leaflet + OpenStreetMap
   Coordenadas: Rosario Norte 100, Las Condes, Santiago
   ============================================================ */
const MAPA_CONFIG = {
    lat: -33.4077081,  // Latitud  — Rosario Norte 100, Las Condes (Google Maps)
    lng: -70.5717023,  // Longitud — Rosario Norte 100, Las Condes (Google Maps)
    zoom: 17,
    nombre: 'B&M Agencia Marítima',
    direccion: 'Rosario Norte 100<br>Las Condes, Santiago',
};

let mapaLeaflet = null;

function iniciarMapa() {
    document.querySelectorAll('.trigger-mapa').forEach(item => {
        item.addEventListener('click', () => {
            const modal = document.getElementById('modal-mapa');
            modal.classList.add('abierto');
            document.body.style.overflow = 'hidden';

            // Leaflet necesita que el contenedor sea visible antes de inicializar
            setTimeout(() => {
                if (!mapaLeaflet) {
                    mapaLeaflet = L.map('mapa-leaflet').setView(
                        [MAPA_CONFIG.lat, MAPA_CONFIG.lng],
                        MAPA_CONFIG.zoom
                    );

                    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
                        maxZoom: 19,
                    }).addTo(mapaLeaflet);

                    // Marcador personalizado con popup
                    L.marker([MAPA_CONFIG.lat, MAPA_CONFIG.lng])
                        .addTo(mapaLeaflet)
                        .bindPopup(
                            `<b>${MAPA_CONFIG.nombre}</b><br>${MAPA_CONFIG.direccion}`,
                            { maxWidth: 220 }
                        )
                        .openPopup();
                } else {
                    // Recalcula el tamaño si ya existía
                    mapaLeaflet.invalidateSize();
                    mapaLeaflet.setView([MAPA_CONFIG.lat, MAPA_CONFIG.lng], MAPA_CONFIG.zoom);
                }
            }, 150);
        });
    });

    // Cierre del modal del mapa
    const modalMapa = document.getElementById('modal-mapa');
    if (modalMapa) {
        modalMapa.querySelector('.modal-cerrar').addEventListener('click', () => {
            modalMapa.classList.remove('abierto');
            _liberarScrollModal();
        });
        modalMapa.addEventListener('click', e => {
            if (e.target === modalMapa) {
                modalMapa.classList.remove('abierto');
                _liberarScrollModal();
            }
        });
    }
}

/* ============================================================
   MODALES / POPUPS
   Abre el modal al hacer clic en tarjetas con data-modal
   ============================================================ */
function iniciarModales() {
    // Abrir modal al hacer clic en la tarjeta
    document.querySelectorAll('[data-modal]').forEach(trigger => {
        trigger.addEventListener('click', () => {
            const modal = document.getElementById(trigger.dataset.modal);
            if (modal) modal.classList.add('abierto');
        });
    });

    // Cerrar con botón X
    document.querySelectorAll('.modal-cerrar').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.modal-overlay').classList.remove('abierto');
            _liberarScrollModal();
        });
    });

    // Cerrar haciendo clic fuera del cuadro
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', e => {
            if (e.target === overlay) {
                overlay.classList.remove('abierto');
                _liberarScrollModal();
            }
        });
    });

    // Cerrar con tecla Escape
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal-overlay.abierto').forEach(m => m.classList.remove('abierto'));
            _liberarScrollModal();
        }
    });
}

/* ============================================================
   FONDO PARALLAX - imagen aparece progresivamente con el scroll
   Opacidad máxima: 0.12 (muy traslúcida para no tapar contenido)
   ============================================================ */
function iniciarFondoParallax() {
    const estilo = document.createElement('style');
    estilo.id = 'estilo-fondo-dinamico';
    document.head.appendChild(estilo);

    const OPACIDAD_MAX = 0.35;   // ← sube este valor para que se vea más (máx 1)
    const INICIO_SCROLL = 200;   // px de scroll antes de que empiece a aparecer
    const TOTAL_SCROLL  = 800;   // px de scroll para llegar a opacidad máxima

    window.addEventListener('scroll', () => {
        const scroll = window.scrollY;
        const progreso = Math.min(Math.max((scroll - INICIO_SCROLL) / TOTAL_SCROLL, 0), 1);
        const opacidad = progreso * OPACIDAD_MAX;
        estilo.textContent = `body::before { opacity: ${opacidad}; }`;
    }, { passive: true });
}


/* ============================================================
   HELPERS GLOBALES - abrirModal / cerrarModal
   Permiten abrir y cerrar modales desde atributos onclick
   ============================================================ */
function abrirModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.classList.add('abierto');
        document.body.style.overflow = 'hidden';
    }
}

function cerrarModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.remove('abierto');
    if (!document.querySelector('.modal-overlay.abierto')) document.body.style.overflow = '';
}

function _liberarScrollModal() {
    if (!document.querySelector('.modal-overlay.abierto')) document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', function() {
    iniciarIdiomas();
    iniciarSlider();
    iniciarNavegacion();
    iniciarAnimaciones();
    animarContadores();
    iniciarFormulario();
    iniciarFormularioReclamaciones();
    iniciarScrollSuave();
    iniciarModales();
    iniciarMapa();
    iniciarFondoParallax();
});

