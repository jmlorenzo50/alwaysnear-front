<template>
  <div style="text-align: left  ">
    <b-button @click="mostrarModal()"
              variant="outline-primary"
              v-b-popover.hover="'Crea un nuevo usuario'"
              title="Ayuda">Nuevo</b-button>
    <b-modal ref="myModalRef"
             title="Ficha usuario"
             header-bg-variant="primary"
             header-text-variant="light"
    >
      <b-container fluid>
         <b-row class="mb-1 text-center">
           <b-col cols="4"><b>Campo</b></b-col>
           <b-col><b>Valor</b></b-col>
         </b-row>

         <b-row class="mb-1">
           <b-col cols="4">Login</b-col>
           <b-col>
             <b-form-input type="text"
                           required
                           v-model="login"
                           placeholder="Escribe un login"/>
           </b-col>
         </b-row>

         <b-row class="mb-1">
           <b-col cols="4">Password</b-col>
           <b-col>
             <b-form-input type="password"
                           required
                           v-model="password"
                           placeholder="Escribe un password"/>
           </b-col>
         </b-row>

         <catalogo :label="'Rol'" :tipo="'rol'" v-model="rol"></catalogo>

         <b-form-group label="Ambitos:">
             <b-form-checkbox-group name="chkambito" v-model="ambito">
               <b-form-checkbox value="GEO">Georia</b-form-checkbox>
               <b-form-checkbox value="RUS">Rusia</b-form-checkbox>
               <b-form-checkbox value="ESP">España</b-form-checkbox>
               <b-form-checkbox value="BRA">Brasil</b-form-checkbox>
             </b-form-checkbox-group>
        </b-form-group>

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
      login: '',
      password: '',
      rol: null,
      fcbaja: '',
      ambito: null
    }
  },

  methods: {
    mostrarModal () {
      console.log('mostrarModal ' + this.modalShow)
      this.login = ''
      this.password = ''
      this.rol = '1'
      this.fcbaja = ''
      this.$refs.myModalRef.show()
    },
    btnAceptar () {
      this.$refs.myModalRef.hide()
    },
    btnCancelar () {
      this.$refs.myModalRef.hide()
    },
    setRol (value) {
      this.rol = value
    }
  }
}
</script>
