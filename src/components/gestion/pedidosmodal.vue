<template>
  <div>
    <b-button @click="mostrarModal()"
              variant="outline-primary"
              v-b-popover.hover="'Crea un nuevo pedido'"
              title="Ayuda">Nuevo</b-button>
    <b-modal ref="myModalRef"
             title="Ficha del pedido"
             header-bg-variant="primary"
             header-text-variant="light"
             size="lg"
    >
      <b-card no-body>
        <b-tabs pills card>
          <b-tab title="Selección del producto" active>
          </b-tab>
          <b-tab title="Selección del cliente">
          </b-tab>
          <b-tab title="Detalle pedido">
          </b-tab>
        </b-tabs>
      </b-card>

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
