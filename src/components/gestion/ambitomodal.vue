<template>
  <div style="text-align: left"> 
    <b-button @click="mostrarModal()"
              variant="outline-primary"
              v-b-popover.hover="'Crea un nuevo ámbito'"
              title="Ayuda">Nuevo</b-button>
    <b-modal ref="myModalRef"
             title="Ficha ámbito"
             header-bg-variant="primary"
             header-text-variant="light"
    >
      <b-container fluid>
         <b-row class="mb-1 text-center">
           <b-col cols="4"><b>Campo</b></b-col>
           <b-col><b>Valor</b></b-col>
         </b-row>
         <b-row class="mb-1">
           <b-col cols="4">Nombre</b-col>
           <b-col>
             <b-form-input type="text"
                           required
                           v-model="nombre"
                           placeholder="Escribe un nombre para el ámbito"/>
           </b-col>
         </b-row>
         <b-row class="mb-1">
           <b-col cols="4">Descripción</b-col>
           <b-col>
             <b-form-textarea id="textarea1"
                                  v-model="descripcion"
                                  placeholder="Escribe una descripción"
                                  :rows="3"
                                  :max-rows="6"
                                  required
                                  >
             </b-form-textarea>
           </b-col>
         </b-row>

         <catalogo :label="'Idioma'" :tipo="'idiomas'" v-model="idioma"></catalogo>

         <catalogo :label="'Moneda'" :tipo="'monedas'" v-model="moneda"></catalogo>

         <b-row>
           <b-col cols="4">Fecha baja</b-col>
           <b-col><b-form-input type="date" v-model="fcbaja" /></b-col>
         </b-row>
       </b-container>

       <div slot="modal-footer" class="w-100" style="text-align: center">
         <b-btn size="sm" style="width: 100px; margin-left: 25px; margin-right: 25px;" variant="primary" @click="btnAceptar">
           Aceptar
         </b-btn>
         <b-btn size="sm" style="width: 100px; margin-left: 25px; margin-right: 25px;" variant="outline-primary" @click="btnCancelar" >
           Cancelar
         </b-btn>
       </div>

    </b-modal>
  </div>
</template>

<script>
import Catalogo from '../sistema/catalogo.vue'

export default {
  components: {
    Catalogo
  },
  data () {
    return {
      modalShow: false,
      nombre: '',
      descripcion: '',
      idioma: null,
      moneda: null,
      fcbaja: '',
      monedas: [
        { value: null, text: '-- seleccione una moneda --' },
        { value: 'EUR', text: 'Euro' },
        { value: 'DLR', text: 'Dolar' },
        { value: 'BRL', text: 'Real brasileño' }
      ],
      idiomas: [
        { value: null, text: '-- seleccione el idioma --' },
        { value: 'ESP', text: 'Español' },
        { value: 'BRL', text: 'Brasileño' },
        { value: 'RUS', text: 'Ruso' }
      ]
    }
  },

  methods: {
    mostrarModal () {
      console.log('mostrarModal ' + this.modalShow)
      this.nombre = ''
      this.descripcion = ''
      this.fcbaja = ''
      this.idioma = null
      this.moneda = null
      this.$refs.myModalRef.show()
    },
    btnAceptar () {
      this.$refs.myModalRef.hide()
    },
    btnCancelar () {
      this.$refs.myModalRef.hide()
    }
  }
}
</script>
