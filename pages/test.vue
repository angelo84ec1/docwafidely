<template>
    <div class="bg-gray-50">
      <!-- Header -->
      <header class="gradient-bg shadow-lg sticky top-0 z-50">
        <div class="container mx-auto px-4 py-4 flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <!-- Logo -->
            <div class="bg-white p-2 rounded-lg shadow-md">
              <svg class="w-8 h-8 text-wafidely-green" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
              </svg>
            </div>
            <div>
              <h1 class="text-2xl font-bold text-white">Wafidely</h1>
              <p class="text-green-100 text-sm">Documentación</p>
            </div>
          </div>
          
          <!-- Mobile menu button -->
          <button @click="toggleMobileMenu" class="md:hidden bg-white bg-opacity-20 p-2 rounded-lg">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </header>
  
      <div class="flex min-h-screen">
        <!-- Sidebar -->
        <aside 
          :class="[
            'bg-white shadow-lg w-64 fixed h-full z-40 transition-transform duration-300 ease-in-out',
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
          ]"
        >
          <nav class="p-6 mt-4">
            <ul class="space-y-3">
              <li>
                <a 
                  href="#enlazar-whatsapp" 
                  @click="navigateToSection('enlazar-whatsapp')"
                  :class="[
                    'nav-link flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors duration-200',
                    activeSection === 'enlazar-whatsapp' ? 'sidebar-active' : ''
                  ]"
                >
                  <svg class="w-5 h-5 mr-3 text-wafidely-green" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.372 2.094a10.003 10.003 0 0 0-6.745 17.518l-1.396 4.346 4.56-1.374a10.003 10.003 0 0 0 17.13-7.377c.006-5.543-4.497-10.053-10.041-10.059a9.997 9.997 0 0 0-3.508.946zm5.94 14.228c-.27.758-.98 1.414-1.653 1.616-.46.138-.85.203-2.729-.596-1.925-.818-3.29-2.157-4.154-3.275-.432-.559-1.406-1.866-1.406-3.559 0-1.693.89-2.527 1.207-2.873.315-.346.687-.433.918-.433.23 0 .46.002.66.012.212.01.497-.081.777.591.287.688.98 2.395 1.068 2.567.087.172.145.373.029.604-.116.23-.173.374-.346.576-.173.202-.363.45-.52.604-.173.173-.353.36-.152.705.202.346.898 1.481 1.928 2.397 1.326 1.178 2.446 1.541 2.793 1.713.346.173.549.144.75-.087.201-.23.865-1.009 1.098-1.354.23-.346.462-.288.779-.173.318.116 2.021 1.011 2.367 1.198.346.187.577.278.66.433.087.159.087.923-.183 1.68z"/>
                  </svg>
                  Enlazar WhatsApp Business
                </a>
              </li>
              <li>
                <a 
                  href="#primer-flujo" 
                  @click="navigateToSection('primer-flujo')"
                  :class="[
                    'nav-link flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors duration-200',
                    activeSection === 'primer-flujo' ? 'sidebar-active' : ''
                  ]"
                >
                  <svg class="w-5 h-5 mr-3 text-wafidely-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                    <line x1="12" y1="22.08" x2="12" y2="12"/>
                  </svg>
                  Crear Primer Flujo
                </a>
              </li>
              <li>
                <a 
                  href="#generar-token" 
                  @click="navigateToSection('generar-token')"
                  :class="[
                    'nav-link flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors duration-200',
                    activeSection === 'generar-token' ? 'sidebar-active' : ''
                  ]"
                >
                  <svg class="w-5 h-5 mr-3 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="m7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                  Generar Token OpenAI
                </a>
              </li>
              <li>
                <a 
                  href="#crear-cuenta" 
                  @click="navigateToSection('crear-cuenta')"
                  :class="[
                    'nav-link flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors duration-200',
                    activeSection === 'crear-cuenta' ? 'sidebar-active' : ''
                  ]"
                >
                  <svg class="w-5 h-5 mr-3 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="4" width="18" height="16" rx="2" ry="2"/>
                    <circle cx="9" cy="10" r="2"/>
                    <path d="M7 18v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"/>
                    <line x1="15" y1="8" x2="17" y2="8"/>
                    <line x1="15" y1="12" x2="17" y2="12"/>
                    <circle cx="17" cy="5" r="1" fill="currentColor"/>
                  </svg>
                  Crear Cuenta
                </a>
              </li>
            </ul>
          </nav>
        </aside>
  
        <!-- Overlay for mobile -->
        <div 
          v-if="mobileMenuOpen" 
          @click="toggleMobileMenu"
          class="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
        ></div>
  
        <!-- Main Content -->
        <main class="flex-1 md:ml-64 p-6">
          <!-- Introduction Section -->
          <section class="mb-12 fade-in">
            <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <div class="text-center mb-8">
                <h2 class="text-4xl font-bold text-wafidely-dark mb-4">Bienvenido a Wafidely</h2>
                <p class="text-xl text-wafidely-gray max-w-3xl mx-auto leading-relaxed">
                  La plataforma más completa para automatizar tu WhatsApp Business con inteligencia artificial. 
                  Gestiona citas, recordatorios y agentes IA de manera profesional.
                </p>
              </div>
              
              <div class="grid md:grid-cols-3 gap-6">
                <div class="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200 hover-scale">
                  <div class="w-12 h-12 bg-wafidely-green rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <h3 class="text-lg font-semibold text-wafidely-dark mb-2">Fácil Configuración</h3>
                  <p class="text-wafidely-gray">Configura tu WhatsApp Business en minutos con nuestra guía paso a paso.</p>
                </div>
                
                <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 hover-scale">
                  <div class="w-12 h-12 bg-wafidely-blue rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                    </svg>
                  </div>
                  <h3 class="text-lg font-semibold text-wafidely-dark mb-2">Automatización Inteligente</h3>
                  <p class="text-wafidely-gray">Crea flujos de conversación automatizados con IA para mejorar la experiencia del cliente.</p>
                </div>
                
                <div class="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl border border-yellow-200 hover-scale">
                  <div class="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h3 class="text-lg font-semibold text-wafidely-dark mb-2">Soporte Premium</h3>
                  <p class="text-wafidely-gray">Obtén ayuda especializada para maximizar el potencial de tu negocio.</p>
                </div>
              </div>
            </div>
          </section>
  
          <!-- Crear Cuenta Section -->
          <section id="crear-cuenta" class="mb-12 fade-in">
            <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="4" width="18" height="16" rx="2" ry="2"/>
                    <circle cx="9" cy="10" r="2"/>
                    <path d="M7 18v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"/>
                    <line x1="15" y1="8" x2="17" y2="8"/>
                    <line x1="15" y1="12" x2="17" y2="12"/>
                    <circle cx="17" cy="5" r="1" fill="currentColor"/>
                  </svg>
                </div>
                <h2 class="text-3xl font-bold text-wafidely-dark">Crear tu Cuenta en Wafidely</h2>
              </div>
  
              <div class="space-y-8">
                <div class="bg-purple-50 border border-purple-200 rounded-xl p-6">
                  <h3 class="text-xl font-semibold text-wafidely-dark mb-4">¿Por qué crear una cuenta en Wafidely?</h3>
                  <p class="text-wafidely-gray mb-4">
                    Con una cuenta de Wafidely tendrás acceso completo a todas las herramientas de automatización de WhatsApp Business, 
                    gestión de clientes y inteligencia artificial para tu negocio.
                  </p>
                  <div class="grid md:grid-cols-2 gap-4">
                    <div class="bg-white p-4 rounded-lg border border-purple-200">
                      <h4 class="font-semibold text-wafidely-dark mb-2">🚀 Automatización Completa</h4>
                      <p class="text-sm text-gray-600">Bots inteligentes, flujos personalizados y respuestas automáticas</p>
                    </div>
                    <div class="bg-white p-4 rounded-lg border border-purple-200">
                      <h4 class="font-semibold text-wafidely-dark mb-2">📊 Analytics Avanzados</h4>
                      <p class="text-sm text-gray-600">Métricas detalladas y reportes de conversaciones</p>
                    </div>
                    <div class="bg-white p-4 rounded-lg border border-purple-200">
                      <h4 class="font-semibold text-wafidely-dark mb-2">🤖 IA Integrada</h4>
                      <p class="text-sm text-gray-600">ChatGPT y modelos de IA para respuestas naturales</p>
                    </div>
                    <div class="bg-white p-4 rounded-lg border border-purple-200">
                      <h4 class="font-semibold text-wafidely-dark mb-2">📱 Multi-canal</h4>
                      <p class="text-sm text-gray-600">WhatsApp, Telegram, y más plataformas</p>
                    </div>
                  </div>
                </div>
  
                <div class="space-y-6">
                  <h3 class="text-xl font-semibold text-wafidely-dark">Pasos para Crear tu Cuenta</h3>
                  
                  <div class="space-y-4">
                    <div class="border border-gray-200 rounded-lg p-6">
                      <div class="flex items-start">
                        <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</span>
                        <div class="flex-1">
                          <h4 class="font-semibold text-wafidely-dark mb-2">Registro Inicial</h4>
                          <p class="text-wafidely-gray mb-3">Visita nuestro sitio web y completa el formulario de registro:</p>
                          <a href="https://www.wafidely.com/registro" target="_blank" class="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"/>
                            </svg>
                            Crear Cuenta Gratis
                          </a>
                        </div>
                      </div>
                    </div>
  
                    <div class="border border-gray-200 rounded-lg p-6">
                      <div class="flex items-start">
                        <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</span>
                        <div class="flex-1">
                          <h4 class="font-semibold text-wafidely-dark mb-2">Verificación de Email</h4>
                          <p class="text-wafidely-gray mb-3">Datos requeridos para el registro:</p>
                          <ul class="list-disc list-inside text-sm text-gray-600 space-y-1 ml-4">
                            <li>Nombre completo</li>
                            <li>Email corporativo</li>
                            <li>Número de teléfono</li>
                            <li>Nombre de tu empresa</li>
                            <li>Sector/industria</li>
                          </ul>
                        </div>
                      </div>
                    </div>
  
                    <div class="border border-gray-200 rounded-lg p-6">
                      <div class="flex items-start">
                        <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</span>
                        <div class="flex-1">
                          <h4 class="font-semibold text-wafidely-dark mb-2">Configuración del Perfil</h4>
                          <p class="text-wafidely-gray mb-3">Personaliza tu cuenta y configura:</p>
                          <div class="space-y-2">
                            <div class="bg-blue-50 border border-blue-200 rounded-lg p-3">
                              <h5 class="font-medium text-wafidely-dark mb-1">Perfil de Empresa</h5>
                              <p class="text-sm text-gray-600">Logo, descripción, y datos de contacto</p>
                            </div>
                            <div class="bg-green-50 border border-green-200 rounded-lg p-3">
                              <h5 class="font-medium text-wafidely-dark mb-1">Preferencias</h5>
                              <p class="text-sm text-gray-600">Idioma, zona horaria, y notificaciones</p>
                            </div>
                            <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                              <h5 class="font-medium text-wafidely-dark mb-1">Plan de Suscripción</h5>
                              <p class="text-sm text-gray-600">Selecciona el plan que mejor se adapte a tu negocio</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
  
                    <div class="border border-gray-200 rounded-lg p-6">
                      <div class="flex items-start">
                        <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</span>
                        <div class="flex-1">
                          <h4 class="font-semibold text-wafidely-dark mb-2">Onboarding y Configuración</h4>
                          <p class="text-wafidely-gray mb-3">Una vez creada tu cuenta:</p>
                          <ol class="list-decimal list-inside text-sm text-gray-600 space-y-2 ml-4">
                            <li>Conecta tu <strong>WhatsApp Business API</strong></li>
                            <li>Configura tu <strong>token de OpenAI</strong></li>
                            <li>Crea tu <strong>primer flujo de conversación</strong></li>
                            <li>Personaliza mensajes y respuestas automáticas</li>
                            <li>¡Comienza a automatizar tu negocio!</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
                <div class="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 class="text-xl font-semibold text-wafidely-dark mb-4">Planes Disponibles</h3>
                  <div class="grid md:grid-cols-3 gap-4">
                    <div class="bg-white p-4 rounded-lg border border-green-200">
                      <h4 class="font-semibold text-wafidely-dark mb-2">🆓 Plan Gratuito</h4>
                      <ul class="text-sm text-gray-600 space-y-1">
                        <li>• 100 mensajes/mes</li>
                        <li>• 1 bot básico</li>
                        <li>• Soporte por email</li>
                      </ul>
                    </div>
                    <div class="bg-white p-4 rounded-lg border border-green-200 ring-2 ring-wafidely-blue">
                      <h4 class="font-semibold text-wafidely-dark mb-2">⭐ Plan Pro</h4>
                      <ul class="text-sm text-gray-600 space-y-1">
                        <li>• 5,000 mensajes/mes</li>
                        <li>• Múltiples bots con IA</li>
                        <li>• Analytics avanzados</li>
                        <li>• Soporte prioritario</li>
                      </ul>
                    </div>
                    <div class="bg-white p-4 rounded-lg border border-green-200">
                      <h4 class="font-semibold text-wafidely-dark mb-2">🚀 Plan Enterprise</h4>
                      <ul class="text-sm text-gray-600 space-y-1">
                        <li>• Mensajes ilimitados</li>
                        <li>• API personalizada</li>
                        <li>• Integraciones custom</li>
                        <li>• Soporte dedicado</li>
                      </ul>
                    </div>
                  </div>
                </div>
  
                <div class="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
                  <h3 class="text-xl font-semibold text-wafidely-dark mb-4">¿Necesitas Ayuda?</h3>
                  <p class="text-wafidely-gray mb-4">
                    Nuestro equipo está listo para ayudarte con la configuración inicial y responder todas tus preguntas.
                  </p>
                  <div class="space-x-4">
                    <a href="https://wa.me/1234567890" target="_blank" class="inline-flex items-center px-4 py-2 bg-wafidely-green text-white rounded-lg hover:bg-wafidely-dark-green transition-colors">
                      <svg class="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
                      </svg>
                      Chat WhatsApp
                    </a>
                    <a href="mailto:soporte@wafidely.com" class="inline-flex items-center px-4 py-2 bg-wafidely-blue text-white rounded-lg hover:bg-wafidely-dark-blue transition-colors">
                      <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                      Email Soporte
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
  
          <!-- WhatsApp Business Integration -->
          <section id="enlazar-whatsapp" class="mb-12 fade-in">
            <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-wafidely-green rounded-lg flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
                  </svg>
                </div>
                <h2 class="text-3xl font-bold text-wafidely-dark">Enlazar WhatsApp Business a Wafidely</h2>
              </div>
  
              <div class="space-y-8">
                <div class="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 class="text-xl font-semibold text-wafidely-dark mb-4">Requisitos Previos</h3>
                  <ul class="space-y-2">
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-wafidely-green mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                      </svg>
                      Cuenta de WhatsApp Business activa
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-wafidely-green mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                      </svg>
                      Verificación comercial aprobada por Meta
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-wafidely-green mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                      </svg>
                      Acceso de administrador a Facebook Business Manager
                    </li>
                  </ul>
                </div>
  
                <div class="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 class="text-xl font-semibold text-wafidely-dark mb-4">Paso 1: Configuración Inicial</h3>
                    <div class="space-y-4">
                      <div class="flex items-start">
                        <span class="bg-wafidely-green text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">1</span>
                        <div>
                          <p class="text-wafidely-gray">Accede a tu cuenta de <strong>Meta Business Manager</strong></p>
                          <p class="text-sm text-gray-500 mt-1">business.facebook.com</p>
                        </div>
                      </div>
                      <div class="flex items-start">
                        <span class="bg-wafidely-green text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">2</span>
                        <p class="text-wafidely-gray">Navega a <strong>WhatsApp Business API</strong> en el menú lateral</p>
                      </div>
                      <div class="flex items-start">
                        <span class="bg-wafidely-green text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">3</span>
                        <p class="text-wafidely-gray">Selecciona tu <strong>cuenta comercial de WhatsApp</strong></p>
                      </div>
                    </div>
                  </div>
  
                  <div>
                    <h3 class="text-xl font-semibold text-wafidely-dark mb-4">Paso 2: Obtener Credenciales</h3>
                    <div class="space-y-4">
                      <div class="flex items-start">
                        <span class="bg-wafidely-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">1</span>
                        <p class="text-wafidely-gray">Genera un <strong>Token de acceso permanente</strong></p>
                      </div>
                      <div class="flex items-start">
                        <span class="bg-wafidely-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">2</span>
                        <p class="text-wafidely-gray">Copia el <strong>ID del número de teléfono</strong></p>
                      </div>
                      <div class="flex items-start">
                        <span class="bg-wafidely-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">3</span>
                        <p class="text-wafidely-gray">Guarda el <strong>Webhook Verify Token</strong></p>
                      </div>
                    </div>
                  </div>
                </div>
  
                <div class="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 class="text-xl font-semibold text-wafidely-dark mb-4">Configuración en Wafidely</h3>
                  <p class="text-wafidely-gray mb-4">Una vez que tengas todas las credenciales, ingrésalas en tu panel de Wafidely:</p>
                  
                  <div class="code-block relative">
                    <pre class="text-green-400 text-sm"><code>// Ejemplo de configuración
  const config = {
    access_token: "TU_TOKEN_DE_ACCESO_PERMANENTE",
    phone_number_id: "ID_DE_TU_NUMERO",
    webhook_verify_token: "TU_WEBHOOK_TOKEN",
    business_account_id: "ID_DE_CUENTA_COMERCIAL"
  }</code></pre>
                    <button 
                      @click="copyToClipboard(`const config = {
    access_token: 'TU_TOKEN_DE_ACCESO_PERMANENTE',
    phone_number_id: 'ID_DE_TU_NUMERO',
    webhook_verify_token: 'TU_WEBHOOK_TOKEN',
    business_account_id: 'ID_DE_CUENTA_COMERCIAL'
  }`)"
                      class="absolute top-2 right-2 bg-gray-600 hover:bg-gray-500 text-white px-3 py-1 rounded text-sm transition-colors"
                    >
                      Copiar
                    </button>
                  </div>
                </div>
  
                <div class="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                  <div class="flex items-start">
                    <svg class="w-6 h-6 text-yellow-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"/>
                    </svg>
                    <div>
                      <h4 class="font-semibold text-wafidely-dark mb-2">Importante</h4>
                      <p class="text-wafidely-gray">Mantén tus credenciales seguras y nunca las compartas. El token de acceso permite control total sobre tu cuenta de WhatsApp Business.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
  
          <!-- First Flow Creation -->
          <section id="primer-flujo" class="mb-12 fade-in">
            <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-wafidely-blue rounded-lg flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                    <line x1="12" y1="22.08" x2="12" y2="12"/>
                  </svg>
                </div>
                <h2 class="text-3xl font-bold text-wafidely-dark">Crear tu Primer Flujo de Conversación</h2>
              </div>
  
              <div class="space-y-8">
                <div class="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 class="text-xl font-semibold text-wafidely-dark mb-4">¿Qué es un Flujo de Conversación?</h3>
                  <p class="text-wafidely-gray mb-4">
                    Un flujo de conversación es una secuencia automatizada de mensajes que guía a tus clientes a través de 
                    diferentes etapas de interacción, desde la consulta inicial hasta la conversión o resolución de problemas.
                  </p>
                  <div class="grid md:grid-cols-3 gap-4 mt-6">
                    <div class="text-center">
                      <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg class="w-8 h-8 text-wafidely-blue" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                          <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                        </svg>
                      </div>
                      <h4 class="font-semibold text-wafidely-dark">Bienvenida</h4>
                      <p class="text-sm text-gray-500">Saludo inicial</p>
                    </div>
                    <div class="text-center">
                      <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg class="w-8 h-8 text-wafidely-blue" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                          <path d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
                        </svg>
                      </div>
                      <h4 class="font-semibold text-wafidely-dark">Calificación</h4>
                      <p class="text-sm text-gray-500">Evalúa necesidades</p>
                    </div>
                    <div class="text-center">
                      <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg class="w-8 h-8 text-wafidely-blue" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      </div>
                      <h4 class="font-semibold text-wafidely-dark">Conversión</h4>
                      <p class="text-sm text-gray-500">Cierra la venta</p>
                    </div>
                  </div>
                </div>
  
                <div class="space-y-6">
                  <h3 class="text-xl font-semibold text-wafidely-dark">Pasos para Crear tu Primer Flujo</h3>
                  
                  <div class="space-y-4">
                    <div class="border border-gray-200 rounded-lg p-4">
                      <div class="flex items-start">
                        <span class="bg-wafidely-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</span>
                        <div class="flex-1">
                          <h4 class="font-semibold text-wafidely-dark mb-2">Definir el Objetivo</h4>
                          <p class="text-wafidely-gray mb-3">Antes de crear el flujo, define claramente qué quieres lograr:</p>
                          <ul class="list-disc list-inside text-sm text-gray-600 space-y-1 ml-4">
                            <li>¿Es para generar leads?</li>
                            <li>¿Para agendar citas?</li>
                            <li>¿Para brindar soporte?</li>
                            <li>¿Para vender productos?</li>
                          </ul>
                        </div>
                      </div>
                    </div>
  
                    <div class="border border-gray-200 rounded-lg p-4">
                      <div class="flex items-start">
                        <span class="bg-wafidely-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</span>
                        <div class="flex-1">
                          <h4 class="font-semibold text-wafidely-dark mb-2">Crear el Mensaje de Bienvenida</h4>
                          <p class="text-wafidely-gray mb-3">Este es el primer mensaje que verán tus clientes:</p>
                          <div class="bg-gray-50 border border-gray-200 rounded-lg p-4">
                            <p class="text-sm text-gray-700 italic">
                              "¡Hola! 👋 Bienvenido a [Tu Empresa]. Estoy aquí para ayudarte. 
                              Por favor, selecciona una opción:"<br><br>
                              1️⃣ Información sobre productos<br>
                              2️⃣ Agendar una cita<br>
                              3️⃣ Hablar con un agente
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
  
                    <div class="border border-gray-200 rounded-lg p-4">
                      <div class="flex items-start">
                        <span class="bg-wafidely-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</span>
                        <div class="flex-1">
                          <h4 class="font-semibold text-wafidely-dark mb-2">Configurar Respuestas Automáticas</h4>
                          <p class="text-wafidely-gray mb-3">Define las respuestas para cada opción del menú:</p>
                          
                          <div class="space-y-3">
                            <div class="bg-blue-50 border border-blue-200 rounded-lg p-3">
                              <h5 class="font-medium text-wafidely-dark mb-1">Opción 1: Información</h5>
                              <p class="text-sm text-gray-600">Envía catálogo de productos, precios, o información relevante</p>
                            </div>
                            <div class="bg-green-50 border border-green-200 rounded-lg p-3">
                              <h5 class="font-medium text-wafidely-dark mb-1">Opción 2: Agendar</h5>
                              <p class="text-sm text-gray-600">Conecta con tu sistema de citas o solicita datos del cliente</p>
                            </div>
                            <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                              <h5 class="font-medium text-wafidely-dark mb-1">Opción 3: Agente</h5>
                              <p class="text-sm text-gray-600">Transfiere la conversación a un humano</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
  
                    <div class="border border-gray-200 rounded-lg p-4">
                      <div class="flex items-start">
                        <span class="bg-wafidely-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</span>
                        <div class="flex-1">
                          <h4 class="font-semibold text-wafidely-dark mb-2">Configurar Palabras Clave</h4>
                          <p class="text-wafidely-gray mb-3">Define palabras que activen respuestas específicas:</p>
                          
                          <div class="code-block relative">
                            <pre class="text-green-400 text-sm"><code>// Ejemplo de configuración de palabras clave
  const keywords = {
    "hola": "¡Hola! ¿En qué puedo ayudarte?",
    "precio": "Te envío nuestra lista de precios...",
    "horario": "Nuestros horarios son: Lunes a Viernes 9am-6pm",
    "ubicación": "Nos ubicamos en [Tu dirección]"
  }</code></pre>
                            <button 
                              @click="copyToClipboard(`const keywords = {
    'hola': '¡Hola! ¿En qué puedo ayudarte?',
    'precio': 'Te envío nuestra lista de precios...',
    'horario': 'Nuestros horarios son: Lunes a Viernes 9am-6pm',
    'ubicación': 'Nos ubicamos en [Tu dirección]'
  }`)"
                              class="absolute top-2 right-2 bg-gray-600 hover:bg-gray-500 text-white px-3 py-1 rounded text-sm transition-colors"
                            >
                              Copiar
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
                <div class="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 class="text-xl font-semibold text-wafidely-dark mb-4">Mejores Prácticas</h3>
                  <div class="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 class="font-medium text-wafidely-dark mb-2">✅ Hacer</h4>
                      <ul class="text-sm text-gray-600 space-y-1">
                        <li>• Mantén los mensajes cortos y claros</li>
                        <li>• Usa emojis para hacerlo más amigable</li>
                        <li>• Ofrece opciones limitadas (3-4 máximo)</li>
                        <li>• Incluye una opción para hablar con humano</li>
                      </ul>
                    </div>
                    <div>
                      <h4 class="font-medium text-wafidely-dark mb-2">❌ Evitar</h4>
                      <ul class="text-sm text-gray-600 space-y-1">
                        <li>• Mensajes muy largos o complicados</li>
                        <li>• Demasiadas opciones que confundan</li>
                        <li>• Respuestas genéricas sin personalización</li>
                        <li>• Flujos que no tengan salida clara</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
  
          <!-- OpenAI Token Generation -->
          <section id="generar-token" class="mb-12 fade-in">
            <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="m7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </div>
                <h2 class="text-3xl font-bold text-wafidely-dark">Generar Token de OpenAI</h2>
              </div>
  
              <div class="space-y-8">
                <div class="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                  <h3 class="text-xl font-semibold text-wafidely-dark mb-4">¿Por qué necesitas un Token de OpenAI?</h3>
                  <p class="text-wafidely-gray mb-4">
                    El token de OpenAI permite que Wafidely acceda a los modelos de inteligencia artificial 
                    para crear respuestas inteligentes y naturales en tus conversaciones de WhatsApp.
                  </p>
                  <div class="grid md:grid-cols-3 gap-4">
                    <div class="bg-white p-4 rounded-lg border border-yellow-200">
                      <h4 class="font-semibold text-wafidely-dark mb-2">🤖 IA Conversacional</h4>
                      <p class="text-sm text-gray-600">Respuestas naturales y contextuales</p>
                    </div>
                    <div class="bg-white p-4 rounded-lg border border-yellow-200">
                      <h4 class="font-semibold text-wafidely-dark mb-2">📝 Procesamiento de Texto</h4>
                      <p class="text-sm text-gray-600">Análisis y comprensión de mensajes</p>
                    </div>
                    <div class="bg-white p-4 rounded-lg border border-yellow-200">
                      <h4 class="font-semibold text-wafidely-dark mb-2">🎯 Personalización</h4>
                      <p class="text-sm text-gray-600">Adaptación al tono de tu marca</p>
                    </div>
                  </div>
                </div>
  
                <div class="space-y-6">
                  <h3 class="text-xl font-semibold text-wafidely-dark">Pasos para Generar tu Token</h3>
                  
                  <div class="space-y-4">
                    <div class="border border-gray-200 rounded-lg p-6">
                      <div class="flex items-start">
                        <span class="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</span>
                        <div class="flex-1">
                          <h4 class="font-semibold text-wafidely-dark mb-2">Crear Cuenta en OpenAI</h4>
                          <p class="text-wafidely-gray mb-3">Si no tienes una cuenta, regístrate en:</p>
                          <a href="https://platform.openai.com" target="_blank" class="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"/>
                            </svg>
                            platform.openai.com
                          </a>
                        </div>
                      </div>
                    </div>
  
                    <div class="border border-gray-200 rounded-lg p-6">
                      <div class="flex items-start">
                        <span class="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</span>
                        <div class="flex-1">
                          <h4 class="font-semibold text-wafidely-dark mb-2">Acceder a la Sección API Keys</h4>
                          <p class="text-wafidely-gray mb-3">Una vez en tu cuenta:</p>
                          <ol class="list-decimal list-inside text-sm text-gray-600 space-y-1 ml-4">
                            <li>Haz clic en tu perfil (esquina superior derecha)</li>
                            <li>Selecciona "View API keys"</li>
                            <li>O navega directamente a: platform.openai.com/api-keys</li>
                          </ol>
                        </div>
                      </div>
                    </div>
  
                    <div class="border border-gray-200 rounded-lg p-6">
                      <div class="flex items-start">
                        <span class="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</span>
                        <div class="flex-1">
                          <h4 class="font-semibold text-wafidely-dark mb-2">Crear Nueva API Key</h4>
                          <p class="text-wafidely-gray mb-3">En la página de API Keys:</p>
                          <ol class="list-decimal list-inside text-sm text-gray-600 space-y-2 ml-4">
                            <li>Haz clic en <strong>"Create new secret key"</strong></li>
                            <li>Asigna un nombre descriptivo (ej: "Wafidely-Bot")</li>
                            <li>Selecciona los permisos adecuados</li>
                            <li>Haz clic en <strong>"Create secret key"</strong></li>
                          </ol>
                        </div>
                      </div>
                    </div>
  
                    <div class="border border-gray-200 rounded-lg p-6">
                      <div class="flex items-start">
                        <span class="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</span>
                        <div class="flex-1">
                          <h4 class="font-semibold text-wafidely-dark mb-2">Copiar y Guardar el Token</h4>
                          <p class="text-wafidely-gray mb-3">⚠️ <strong>Importante:</strong> El token solo se mostrará una vez.</p>
                          <div class="bg-red-50 border border-red-200 rounded-lg p-4">
                            <div class="flex items-start">
                              <svg class="w-5 h-5 text-red-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"/>
                              </svg>
                              <div>
                                <h5 class="font-semibold text-red-800 mb-1">Copia inmediatamente</h5>
                                <p class="text-sm text-red-700">Una vez que cierres la ventana, no podrás ver el token nuevamente. Guárdalo en un lugar seguro.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
                <div class="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 class="text-xl font-semibold text-wafidely-dark mb-4">Configurar Token en Wafidely</h3>
                  <p class="text-wafidely-gray mb-4">Una vez que tengas tu token de OpenAI:</p>
                  
                  <div class="space-y-4">
                    <div class="flex items-start">
                      <span class="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">1</span>
                      <p class="text-wafidely-gray">Ve a tu <strong>Panel de Wafidely</strong></p>
                    </div>
                    <div class="flex items-start">
                      <span class="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">2</span>
                      <p class="text-wafidely-gray">Navega a <strong>Configuración → Integraciones</strong></p>
                    </div>
                    <div class="flex items-start">
                      <span class="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">3</span>
                      <p class="text-wafidely-gray">Pega tu token en el campo <strong>"OpenAI API Key"</strong></p>
                    </div>
                    <div class="flex items-start">
                      <span class="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">4</span>
                      <p class="text-wafidely-gray">Haz clic en <strong>"Guardar y Probar Conexión"</strong></p>
                    </div>
                  </div>
  
                  <div class="mt-6 p-4 bg-white border border-blue-200 rounded-lg">
                    <h4 class="font-semibold text-wafidely-dark mb-2">Formato del Token</h4>
                    <p class="text-sm text-gray-600 mb-2">Tu token debe verse similar a esto:</p>
                    <div class="code-block relative">
                      <pre class="text-green-400 text-sm"><code>sk-proj-aBcDeFgHiJkLmNoPqRsTuVwXyZ1234567890abcdefghijklmnop</code></pre>
                      <button 
                        @click="copyToClipboard('sk-proj-aBcDeFgHiJkLmNoPqRsTuVwXyZ1234567890abcdefghijklmnop')"
                        class="absolute top-2 right-2 bg-gray-600 hover:bg-gray-500 text-white px-3 py-1 rounded text-sm transition-colors"
                      >
                        Copiar
                      </button>
                    </div>
                  </div>
                </div>
  
                <div class="bg-green-50 border border-green-200 rounded-xl p-6">
                  <div class="flex items-start">
                    <svg class="w-6 h-6 text-green-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                    </svg>
                    <div>
                      <h4 class="font-semibold text-wafidely-dark mb-2">¡Listo para usar IA!</h4>
                      <p class="text-wafidely-gray">Una vez configurado el token, tus bots de WhatsApp podrán usar inteligencia artificial para generar respuestas más naturales y útiles para tus clientes.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
  
      <!-- Toast Notification -->
      <Transition name="fade">
        <div 
          v-if="showNotification" 
          class="fixed top-4 right-4 bg-wafidely-green text-white px-4 py-2 rounded-lg shadow-lg z-50"
        >
          {{ notificationMessage }}
        </div>
      </Transition>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted, nextTick } from 'vue'
  
  // Meta tags y SEO
  useHead({
    title: 'Documentación - Wafidely',
    meta: [
      { name: 'description', content: 'Guía completa para configurar WhatsApp Business con Wafidely. Aprende a crear flujos de conversación y usar IA en tus chats automáticamente.' },
      { name: 'keywords', content: 'wafidely, whatsapp business, documentación, bot whatsapp, ia, openai, automatización' },
      { property: 'og:title', content: 'Documentación - Wafidely' },
      { property: 'og:description', content: 'La plataforma más completa para automatizar tu WhatsApp Business con inteligencia artificial.' },
      { property: 'og:type', content: 'website' }
    ]
  })
  
  // Variables reactivas
  const mobileMenuOpen = ref(false)
  const activeSection = ref('')
  const showNotification = ref(false)
  const notificationMessage = ref('')
  
  // Métodos
  const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value
  }
  
  const navigateToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
    activeSection.value = sectionId
    
    // Cerrar menú móvil si está abierto
    if (mobileMenuOpen.value) {
      toggleMobileMenu()
    }
  }
  
  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text)
      notificationMessage.value = '¡Código copiado!'
      showNotification.value = true
      
      setTimeout(() => {
        showNotification.value = false
      }, 2000)
    } catch (err) {
      console.error('Error al copiar:', err)
      notificationMessage.value = 'Error al copiar'
      showNotification.value = true
      
      setTimeout(() => {
        showNotification.value = false
      }, 2000)
    }
  }
  
  // Observador de intersección para navegación automática
  let observer = null
  
  onMounted(() => {
    // Scroll automático a la sección crear-cuenta al cargar la página
    nextTick(() => {
      const crearCuentaElement = document.getElementById('crear-cuenta')
      if (crearCuentaElement) {
        crearCuentaElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    })
  
    // Configurar observador de intersección
    const sections = document.querySelectorAll('section[id]')
    
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.getAttribute('id')
        }
      })
    }, {
      rootMargin: '-20% 0px -70% 0px'
    })
  
    sections.forEach(section => {
      observer.observe(section)
    })
  
    // Animaciones de entrada
    const fadeElements = document.querySelectorAll('.fade-in')
    const fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
        }
      })
    })
  
    fadeElements.forEach(element => {
      element.style.opacity = '0'
      element.style.transform = 'translateY(20px)'
      element.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
      fadeObserver.observe(element)
    })
  })
  
  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })
  </script>
  
  <style scoped>
  .gradient-bg {
    background: linear-gradient(135deg, #25D366 0%, #2563EB 100%);
  }
  
  .hover-scale {
    transition: transform 0.2s ease-in-out;
  }
  
  .hover-scale:hover {
    transform: scale(1.05);
  }
  
  .sidebar-active {
    background: linear-gradient(135deg, #25D366 0%, #2563EB 100%);
    color: white;
  }
  
  .code-block {
    background: #1f2937;
    border-radius: 0.5rem;
    padding: 1rem;
    overflow-x: auto;
  }
  
  .fade-in {
    animation: fadeIn 0.5s ease-in-out;
  }
  
  @keyframes fadeIn {
    from { 
      opacity: 0; 
      transform: translateY(20px); 
    }
    to { 
      opacity: 1; 
      transform: translateY(0); 
    }
  }
  
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
  </style>