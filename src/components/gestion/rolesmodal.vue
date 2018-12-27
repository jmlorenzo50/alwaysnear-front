<template>
  <div>
    <b-button @click="mostrarModal()"
              variant="outline-primary"
              v-b-popover.hover="'Crea un nuevo rol'"
              title="Ayuda">Nuevo</b-button>
    <b-modal ref="myModalRef"
             title="Ficha del rol"
             header-bg-variant="primary"
             header-text-variant="light"
    >
      <b-container fluid>
         <b-row class="mb-1 text-center">
           <b-col cols="4"><b>Nombre</b></b-col>
           <b-col><b>Descripción</b></b-col>
         </b-row>

         <b-row class="mb-1">
           <b-col cols="4">Nombre</b-col>
           <b-col>
             <b-form-input type="text"
                           required
                           v-model="nombre"
                           placeholder="Escribe un nombre del rol"/>
           </b-col>
         </b-row>

         <b-row class="mb-1">
           <b-col cols="4">Descripción</b-col>
           <b-col>
             <b-form-input type="text"
                           required
                           v-model="descripcion"
                           placeholder="Escribe la descripción del rol"/>
           </b-col>
         </b-row>

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
export default {
  data () {
    return {
      modalShow: false,
      nombre: '',
      descripcion: '',
      fcbaja: ''
    }
  },
  methods: {
    mostrarModal () {
      console.log('mostrarModal ' + this.modalShow)
      this.nombre = ''
      this.descripcion = ''
      this.fcbaja = ''
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
