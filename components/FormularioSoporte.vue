<template>
  <div style="width: 100%;">
    <div class="spacer"></div>
    <p class="ml-12  font-semibold inline-block sm:inline text-gray-700">
      Estaremos gustos de enviarte mayor información sin compromiso
    </p>
    <div class="spacer"></div>
    
    <form @submit.prevent="sendMail" class="formcontact w-full max-w-2xl mx-auto mt-[40px] p-6">
      <!-- Campo Nombres -->
      <div class="form-group mb-6 relative">
        <input 
          v-model="formData.nombre" 
          type="text" 
          id="nombre" 
          name="nombre" 
          class="form-input peer w-full px-4 py-3 bg-transparent border-0 border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-[#232c4d] transition-colors duration-300"
          placeholder="Nombres"
          @focus="setFocusField('nombre')"
          @blur="removeFocusField('nombre')"
        >
        <label 
          for="nombre" 
          class="form-label absolute left-4 -top-2.5 text-gray-600 text-sm transition-all duration-300 transform peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#232c4d]"
        >
          Nombres
        </label>
      </div>

            <!-- Campo Empresa -->
            <div class="form-group mb-6 relative">
        <input 
          v-model="formData.empresa" 
          type="text" 
          id="empresa" 
          name="empresa" 
          class="form-input peer w-full px-4 py-3 bg-transparent border-0 border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-[#232c4d] transition-colors duration-300"
          placeholder="Empresa"
          @focus="setFocusField('empresa')"
          @blur="removeFocusField('empresa')"
        >
        <label 
          for="empresa" 
          class="form-label absolute left-4 -top-2.5 text-gray-600 text-sm transition-all duration-300 transform peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#232c4d]"
        >
          Empresa
        </label>
      </div>


       

      <!-- Campo Teléfono -->
      <div class="form-group mb-6 relative">
        <input 
        v-model="formData.telefono" 
        type="tel" 
        id="telefono" 
        name="telefono" 
       class="form-input peer w-full px-4 py-3 bg-transparent border-0 border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-500 transition-colors duration-300"
       placeholder="Teléfono"
       @focus="setFocusField('telefono')"
       @blur="removeFocusField('telefono')"
       @input="formData.telefono = formData.telefono.replace(/\D/g, '')"
        />
        <label 
          for="telefono" 
          class="form-label absolute left-4 -top-2.5 text-gray-600 text-sm transition-all duration-300 transform peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#232c4d]"
        >
          Whatsapp
        </label>
      </div>

      <!-- Campo Correo -->
      <div class="form-group mb-6 relative">
        <input 
          v-model="formData.correo" 
          type="email" 
          id="correo" 
          name="correo" 
          class="form-input peer w-full px-4 py-3 bg-transparent border-0 border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-500 transition-colors duration-300"
          placeholder="Correo"
          @focus="setFocusField('correo')"
          @blur="removeFocusField('correo')"
        >
        <label 
          for="correo" 
          class="form-label absolute left-4 -top-2.5 text-gray-600 text-sm transition-all duration-300 transform peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#232c4d]"
        >
          Correo electrónico
        </label>
      </div>

      <!-- Select de Servicios -->
      <div class="form-group mb-6 relative">
        <select 
          v-model="formData.servicio" 
          id="servicio" 
          name="servicio" 
          class="form-select peer w-full px-4 py-2 bg-transparent border-0 border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 transition-colors duration-300 appearance-none cursor-pointer"
          @focus="setFocusField('servicio')"
          @blur="removeFocusField('servicio')"
        >
          <option value="" disabled selected hidden></option>
          <option value="Desarrollo-web">Desarrollo Web a la Medida</option>
          <option value="Desarrollo-apps">Desarrollo de Apps</option>
          <option value="Entrenamiento-ia">Entrenamiento Agentes IA</option>
          <option value="Bot-whatsapp">Bots LLM con IA para Whatsapp</option>
          <option value="Ecommerce-medida">Ecommerce a la medida en React - Next - Strapi</option>
          <option value="Ecommerce-cms">Ecommerce CMS - Webflow - Shopify - Woocommerce</option>
          <option value="Integracion apis">Integración Apis a Erps - Crm - Sap B1</option>
          <option value="Solucion-bugs">Solución Bugs Apps - Web - IA</option>
          <option value="Landing-page">Landing Page (Embudo de Ventas)</option>
          
        </select>
        <label 
          for="servicio" 
          class="form-label absolute left-4 -top-2.5 text-gray-600 text-sm transition-all duration-300 transform peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#232c4d]"
          :class="formData.servicio ? 'text-sm -top-2.5 text-blue-500' : 'text-base text-gray-400 top-3'"
        >

        
          Servicio de interés
        </label>
        <!-- Icono de flecha personalizada -->
        <div class="absolute inset-y-0 right-4 flex items-center pointer-events-none">
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>


       <!-- Select de Presupuesto -->
       <div class="form-group mb-6 relative">
        <select 
          v-model="formData.presupuesto" 
          id="presupuesto" 
          name="presupuesto" 
          class="form-select peer w-full px-4 py-2 bg-transparent border-0 border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 transition-colors duration-300 appearance-none cursor-pointer"
          @focus="setFocusField('Presupuesto')"
          @blur="removeFocusField('Presupuesto')"
        >
          <option value="" disabled selected hidden></option>
          <option value="$499">$499 - $999</option>
          <option value="$999">$999 - $4999</option>
          <option value="$1999">$4999- $9999</option>
          <option value="$2999">$9999 - $19999</option>
          <option value="$3999">$19999 - $49999</option>
          <option value="$4999">$49999 - $99999</option>
          <option value="$7999">$99999 - $499999</option>
          <option value="$9999">$499999 - $1M</option>
          <option value="$19999">+$1M</option>
yar
        </select>
        <label 
          for="presupuesto" 
          class="form-label absolute left-4 -top-2.5 text-gray-600 text-sm transition-all duration-300 transform peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#232c4d]"
          :class="formData.presupuesto ? 'text-sm -top-2.5 text-blue-500' : 'text-base text-gray-400 top-3'"
        >

        
          Presupuesto
        </label>
        <!-- Icono de flecha personalizada -->
        <div class="absolute inset-y-0 right-4 flex items-center pointer-events-none">
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>


        <!-- Select de Pais -->
        <div class="form-group mb-6 relative">
        <select 
          v-model="formData.pais" 
          id="pais" 
          name="pais" 
          class="form-select peer w-full px-4 py-2 bg-transparent border-0 border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 transition-colors duration-300 appearance-none cursor-pointer"
          @focus="setFocusField('Pais')"
          @blur="removeFocusField('Pais')"
        >
          <option value="" disabled selected hidden></option>
          <option value="Argentina">Argentina</option>
          <option value="Brasil">Brasil</option>
          <option value="Chile">Chile</option>
          <option value="Colombia">Colombia</option>
          <option value="Ecuador">Ecuador</option>
          <option value="Espania">España</option>
          <option value="Usa">Estados Unidos</option>
          <option value="Mexico">México</option>
          <option value="Panama">Panamá</option>
          <option value="Paraguay">Paraguay</option>
          <option value="Peru">Perú</option>
          <option value="Republica-dominicana">República Dominicana</option>
          <option value="Ueuropea">Unión Europea</option>
          <option value="Otro">Otro</option>
        </select>
        <label 
          for="pais" 
          class="form-label absolute left-4 -top-2.5 text-gray-600 text-sm transition-all duration-300 transform peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#232c4d]"
          :class="formData.pais ? 'text-sm -top-2.5 text-blue-500' : 'text-base text-gray-400 top-3'"
        >

        
          Pais
        </label>
        <!-- Icono de flecha personalizada -->
        <div class="absolute inset-y-0 right-4 flex items-center pointer-events-none">
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>


      <!-- Campo Requerimiento -->
      <div class="form-group mb-8 relative">
        <textarea 
          v-model="formData.requerimiento" 
          id="requerimiento" 
          name="requerimiento" 
          rows="4"
          class="form-textarea peer w-full px-4 py-3 bg-transparent border-0 border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-500 transition-colors duration-300 resize-none"
          placeholder="Requerimiento"
          @focus="setFocusField('requerimiento')"
          @blur="removeFocusField('requerimiento')"
        ></textarea>
        <label 
          for="requerimiento" 
          class="form-label absolute left-4 -top-2.5 text-gray-600 text-sm transition-all duration-300 transform peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#232c4d]"
        >
          Requerimiento
        </label>
      </div>

      <!-- Botón de envío -->
      <div class="flex justify-center">
        <button 
          type="submit" 
          class="submit-button bg-[#38f5b3]  text-gray-900 font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#232c4d] focus:ring-opacity-50"
        >
          <span class="flex items-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            Enviar Solicitud
          </span>
        </button>
      </div>
    </form>
  </div>

</template>

  
  <script>

  import { useToast } from 'vue-toastification';
  const {
  public: { baseURL, MAILTO },
} = useRuntimeConfig();
const toast = useToast();
export default {
  name: 'FormularioColumna',
  data() {
    return {
      formData: {
        nombre: '',
        empresa: '',
        telefono: '',
        correo: '',
        servicio: '',
        presupuesto: '',
        pais: '',
        requerimiento: ''
      }
    }
  },
  methods: {
    sendMail() {
      // All form data should be written as mail body


      if (
        !this.formData.nombre.trim() ||
        !this.formData.empresa.trim() ||
        !this.formData.telefono.trim() ||
        !this.formData.correo.trim() ||
        !this.formData.servicio.trim() ||
        !this.formData.presupuesto.trim() ||
        !this.formData.pais.trim() ||
        !this.formData.requerimiento.trim()
      ) {
        toast.error('Completa todos los campos');
        return;
      }


      const emailData = {
        to: "websecuador.net@gmail.com",
        subject: 'Formulario de contacto App Web WAPPIAD',
        text: `
          Nombre persona: ${this.formData.nombre}
          Empresa: ${this.formData.empresa}
          Whatsapp: ${this.formData.telefono}
          Correo: ${this.formData.correo}
          Servicio: ${this.formData.servicio}
          Presupuesto: ${this.formData.presupuesto}
          Pais: ${this.formData.pais}
          Descripción requerimiento: ${this.formData.requerimiento}
        `,
      };

      // Use strapi email plugin to send email
      fetch(`${baseURL}/email/`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      })
        .then((res) => {
          if (res.ok) {
            toast.success('Correo enviado');
            this.formData = {
              nombre: '',
              empresa: '',
              telefono: '',
              correo: '',
              servicio: '',
              presupuesto: '',
              pais: '',
              requerimiento: ''
            }
          } else {
            toast.error('Error al enviar el correo');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  
};
  </script>
 <style scoped>
 .spacer {
   height: 45px;
 }
 
 .formcontact {
   background: rgba(255, 255, 255, 0.95);
   backdrop-filter: blur(10px);
   border-radius: 16px;
   box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
 }
 
 .form-group {
   position: relative;
 }
 
 /* Animación para el borde inferior */
 .form-input:focus,
 .form-select:focus,
 .form-textarea:focus {
   border-bottom-color: #38f5b3;
   box-shadow: 0 2px 0 0 #38f5b3;
 }
 
 /* Estilos para el select personalizado */
 .form-select {
   background-image: none;
 }
 
 /* Animación del botón */
 .submit-button {
   position: relative;
   overflow: hidden;
 }
 
 .submit-button::before {
   content: '';
   position: absolute;
   top: 0;
   left: -100%;
   width: 100%;
   height: 100%;
   background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
   transition: left 0.5s;
 }
 
 .submit-button:hover::before {
   left: 100%;
 }
 
 /* Mejoras responsivas */
 @media (max-width: 640px) {
   .formcontact {
     margin: 0 1rem;
     padding: 1.5rem;
   }
 }
 
 /* Animación suave para todos los elementos */
 * {
   transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
 }
 </style>

 


