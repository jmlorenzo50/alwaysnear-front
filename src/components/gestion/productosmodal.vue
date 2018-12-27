<template>
  <div style="text-align: left">
    <b-button @click="mostrarModal()"
              variant="outline-primary"
              v-b-popover.hover="'Crea un nuevo producto'"
              title="Ayuda">Nuevo</b-button>
    <b-modal ref="myModalRef"
             title="Ficha del rol"
             header-bg-variant="primary"
             header-text-variant="light"
             size="lg"
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
                           placeholder="Escribe un nombre del producto"/>
           </b-col>
         </b-row>

         <b-row class="mb-1">
           <b-col cols="4">Descripción</b-col>
           <b-col>
             <b-form-input type="text"
                           required
                           v-model="descripcion"
                           placeholder="Escribe la descripción del producto"/>
           </b-col>
         </b-row>

         <b-row class="mb-1">
           <b-col cols="4">Precio</b-col>
           <b-col>
             <b-form-input type="number"
                           required
                           v-model="precio"
                           placeholder="Escribe el precio del producto"/>
           </b-col>
         </b-row>

         <b-row class="mb-1">
           <b-col cols="4">Duración {{duracion}} años</b-col>
           <b-col>
             <b-form-input type="range"
                           required
                           min = 1
                           max = 10
                           step = 1
                           v-model="duracion"/>
           </b-col>
         </b-row>

         <b-row class="mb-1">
           <b-col cols="4">Tipo cliente</b-col>
           <b-col>
             <b-form-select required v-model="tipocliente.id" :options="tipos" class="mb-3" />
           </b-col>
         </b-row>

         <b-row class="mb-1">
           <b-col cols="4">Ámbito</b-col>
           <b-col>
             <b-form-select required v-model="ambito.id" :options="ambitos" class="mb-3" />
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
      duracion: 1,
      precio: null,
      ambito: {id: null, descripcion: null},
      tipocliente: {id: null, descripcion: null},
      fcbaja: null,
      tipos: [
        { value: null, text: '-- seleccione un tipo --' },
        { value: '1', text: 'Cliente' },
        { value: '2', text: 'Cliente V.I.P.' },
        { value: '3', text: 'Franquicia' }
      ],
      ambitos: [
        { value: null, text: '-- seleccione un ámbito --' },
        { value: 'ES', text: 'España' },
        { value: 'RUS', text: 'Rusia' },
        { value: 'GEO', text: 'Georgia' }
      ]
    }
  },
  methods: {
    mostrarModal () {
      console.log('mostrarModal ' + this.modalShow)
      this.nombre = ''
      this.descripcion = ''
      this.duracion = 1
      this.precio = null
      this.ambito.id = null
      this.ambito.descripcion = null
      this.tipocliente.id = null
      this.tipocliente.descripcion = null
      this.fcbaja = null
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
