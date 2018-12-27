<template>
  <div>
    <!--b-navbar toggleable="md" type="dark" variant="info" class="navbar navbar-dark bg-dark" -->
    <b-navbar type="dark" variant="dark" toggleable>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#">
        <img src="../assets/logo64.png" alt="" width="64px" height="64px"  @click="navegar('panelcontrol')"/>
      </b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav v-if="authenticated">
          <b-nav-item-dropdown text="Gestión">
               <b-dropdown-item href="#" @click="navegar('usuarios')">Usuarios</b-dropdown-item>
               <b-dropdown-item href="#" @click="navegar('roles')">Roles</b-dropdown-item>
               <b-dropdown-item href="#" @click="navegar('ambito')">Ámbitos</b-dropdown-item>
               <b-dropdown-item href="#" @click="navegar('clientes')">Clientes</b-dropdown-item>
               <b-dropdown-item href="#" @click="navegar('productos')">Productos</b-dropdown-item>
               <b-dropdown-item href="#" @click="navegar('pedidos')">Pedidos</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-text v-if="authenticated" right>Rol: <b>{{rol.nombre}}</b></b-nav-text>

          <b-nav-text v-if="authenticated" right>Ámbito: <b>{{rol.ambito}}</b></b-nav-text>

          <b-nav-form v-if="authenticated" @submit="onLogout" right>
            <b-button type="submit" variant="primary">Logout</b-button>
          </b-nav-form>

          <b-nav-text v-if="authenticated" right>v{{version}}</b-nav-text>

        </b-navbar-nav>
      </b-collapse>

    </b-navbar>


  </div>
</template>

<script>
  export default {
    props: ['version', 'authenticated', 'modulo', 'rol'],

    methods: {
      onLogout (evt) {
        this.$emit('authenticated', false)
        this.$router.push('/')
      },
      navegar (modulo) {
        console.log('Modulo:' + modulo)
        this.$emit('modulo', modulo)
      }
    }
  }

</script>

<style>
.navbar-text {
  padding-right: 5em;
}
.form-inline {
  padding-right: 1em;
}
nav {
  font-weight: normal;
  font-size: .80em;
}

</style>
