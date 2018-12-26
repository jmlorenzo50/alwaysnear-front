<template>
  <div id="app">
    <encabezado :version="valorversion" :authenticated="authenticated" @authenticated="setAuthenticated" @modulo="setModulo" :modulo="modulo" :rol="rol" @rol="setRol"></encabezado>
    <router-view @authenticated="setAuthenticated" :authenticated="authenticated" @modulo="setModulo" :modulo="modulo" :rol="rol" @rol="setRol"></router-view>
  </div>
</template>

<script>
import Encabezado from './components/encabezado.vue'

export default {
  components: {
    Encabezado
  },
  data () {
    return {
      name: 'app',
      valorversion: '0.1b',
      authenticated: false,
      rol: null,
      modulo: 'panelcontrol'
    }
  },
  methods: {
    setAuthenticated (status) {
      console.log('App setAuthenticated: ' + status)
      this.authenticated = status
    },
    setModulo (modulo) {
      console.log('App setModulo: ' + modulo)
      this.modulo = modulo
    },
    setRol (selrol) {
      console.log('App setRol: ' + selrol)
      this.rol = selrol
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
