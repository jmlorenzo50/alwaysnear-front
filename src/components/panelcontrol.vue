<template>
  <div class="container">
    <display v-if="modulo=='panelcontrol'"></display>
    <usuarios v-if="modulo == 'usuarios'"></usuarios>
    <roles v-if="modulo == 'roles'"></roles>
    <ambito v-if="modulo == 'ambito'"></ambito>
    <clientes v-if="modulo == 'clientes'"></clientes>
    <productos v-if="modulo == 'productos'"></productos>
    <pedidos v-if="modulo == 'pedidos'"></pedidos>
  </div>
</template>

<script>
import Display from './panelcontroldisplay.vue'
import Usuarios from './gestion/usuarios.vue'
import Roles from './gestion/roles.vue'
import Ambito from './gestion/ambito.vue'
import Clientes from './gestion/clientes.vue'
import Productos from './gestion/productos.vue'
import Pedidos from './gestion/pedidos.vue'

export default {
  components: {
    Display,
    Usuarios,
    Roles,
    Ambito,
    Clientes,
    Productos,
    Pedidos
  },

  props: ['authenticated', 'modulo'],

  created () {
    if (!this.authenticated) {
      this.$router.push('/')
    }
  }

}
</script>

<style>
</style>
