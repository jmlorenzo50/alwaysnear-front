<template>
  <div>
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

         <b-row class="mb-1">
           <b-col cols="4">Rol</b-col>
           <b-col>
             <b-form-select required v-model="rol" :options="roles" class="mb-3" />
           </b-col>
         </b-row>

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
export default {
  data () {
    return {
      modalShow: false,
      login: '',
      password: '',
      rol: null,
      fcbaja: '',
      roles: [
        { value: null, text: '-- seleccione un rol --' },
        { value: '1', text: 'Administrador' },
        { value: '2', text: 'Usuario' },
        { value: '3', text: 'Franquicia' }
      ],
      ambito: null
    }
  },

  methods: {
    mostrarModal () {
      console.log('mostrarModal ' + this.modalShow)
      this.login = ''
      this.password = ''
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
