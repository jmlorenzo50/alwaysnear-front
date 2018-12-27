<template>
  <b-row class="mb-1">
    <b-col cols="4">{{label}}</b-col>
    <b-col>
      <b-form-select ref="combo" v-model="valor" selected="value == 2" :options="listado" class="mb-3" @input="cambiarSeleccion"/>
    </b-col>
  </b-row>
</template>

<script>

export default {
  props: ['label', 'tipo', 'value'],

  data () {
    return {
      listado: null,
      valor: null
    }
  },

  created () {
    console.log('El valor LABEL es ' + this.label)
    console.log('El valor TIPO es ' + this.tipo)
    if (this.tipo === 'ambito') {
      this.listado = [
        { value: null, text: '-- seleccione un ámbito --' },
        { value: 'ES', text: 'España' },
        { value: 'RUS', text: 'Rusia' },
        { value: 'GEO', text: 'Georgia' }
      ]
    } else if (this.tipo === 'rol') {
      this.listado = [
        { value: null, text: '-- seleccione un rol --' },
        { value: '1', text: 'Administrador' },
        { value: '2', text: 'Usuario' },
        { value: '3', text: 'Franquicia' }
      ]
    } else if (this.tipo === 'tpcliente') {
      this.listado = [
        { value: null, text: '-- seleccione un tipo --' },
        { value: '1', text: 'Cliente' },
        { value: '2', text: 'Cliente V.I.P.' },
        { value: '3', text: 'Franquicia' }
      ]
    } else if (this.tipo === 'pais') {
      this.listado = [
        { value: null, text: '-- seleccione un país --' },
        { value: 'ES', text: 'España' },
        { value: 'RUS', text: 'Rusia' },
        { value: 'GEO', text: 'Georgia' }
      ]
    } else if (this.tipo === 'monedas') {
      this.listado = [
        { value: null, text: '-- seleccione una moneda --' },
        { value: 'EUR', text: 'Euro' },
        { value: 'DLR', text: 'Dolar' },
        { value: 'BRL', text: 'Real brasileño' }
      ]
    } else if (this.tipo === 'idiomas') {
      this.listado = [
        { value: null, text: '-- seleccione el idioma --' },
        { value: 'ESP', text: 'Español' },
        { value: 'BRL', text: 'Brasileño' },
        { value: 'RUS', text: 'Ruso' }
      ]
    } else {
      this.listado = [
        { value: null, text: '-- sin registros --' }
      ]
    }
  },

  methods: {
    cambiarSeleccion (evt) {
      console.log('El valor seleccionado es ' + this.valor)
      this.$emit('input', this.valor)
    }
  }

}

</script>
