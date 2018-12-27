<template>
  <div>
      <b-container fluid>
          <div class="botoneraL">
            <catalogo :label="'País'" :tipo="'pais'" v-model="filtropais"></catalogo>
          </div>
          <div class="botoneraL">
           <button  type="button" class="btn btn-primary btn-xs">Buscar</button>
          </div>
          <div class="botonera">
            <nuevo-cliente></nuevo-cliente>
          </div>
      </b-container>

    <div class="panel panel-default">
        <b-table show-empty
                 stacked="md"
                 :items="items"
                 :fields="fields"
                 :current-page="currentPage"
                 :per-page="perPage"
                 :filter="filter"
                 :sort-by.sync="sortBy"
                 :sort-desc.sync="sortDesc"
                 :sort-direction="sortDirection"
        >
            <template slot="actions" slot-scope="row">
              <button                                type="button" class="btn btn-secondary btn-xs btnEdit"></button>
              <button v-if="row.item.fcbaja != null" type="button" class="btn btn-secondary btn-xs btnPlus"></button>
              <button v-if="row.item.fcbaja == null" type="button" class="btn btn-danger btn-xs btnRemove"></button>
            </template>
        </b-table>

        <div style="float: right;">
            <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0 texo-azul" />
        </div>
    </div>
  </div>

</template>


<script>

import NuevoCliente from './clientesmodal.vue'
import Catalogo from '../sistema/catalogo.vue'

const items = [
  { nombre: 'cliente01', tipoCliente: 'distribuidor', pais: 'Georgia', contacto: 'Pabloski', email: 'email@gmail.com', direccion: 'España, Madrid, C/Pez 1', fcbaja: null },
  { nombre: 'cliente02', tipoCliente: 'distribuidor', pais: 'Georgia', contacto: 'Pabloski', email: 'email@gmail.com', direccion: 'España, Madrid, C/Pez 1', fcbaja: '01-12-2019' },
  { nombre: 'cliente03', tipoCliente: 'cliente', pais: 'Rusia', contacto: 'Iván', email: 'email@gmail.com', direccion: 'España, Madrid, C/Pez 1', fcbaja: '01-12-2019' },
  { nombre: 'cliente04', tipoCliente: 'cliente', pais: 'Brasil', contacto: 'Ronaldo', email: 'email@gmail.com', direccion: 'España, Madrid, C/Pez 1', fcbaja: null }
]

export default {
  components: {
    NuevoCliente,
    Catalogo
  },

  data () {
    return {
      items: items,
      fields: [
             { key: 'nombre', label: 'Login del usuario', sortable: true, sortDirection: 'desc' },
             { key: 'tipoCliente', label: 'Rol del usuario', sortable: true, sortDirection: 'desc' },
             { key: 'pais', label: 'Rol del usuario', sortable: true, sortDirection: 'desc' },
             { key: 'fcbaja', label: 'Fecha de baja' },
             { key: 'actions', label: 'Acciones' }
      ],
      currentPage: 1,
      perPage: 8,
      totalRows: items.length,
      pageOptions: [ 5, 10, 15 ],
      sortBy: null,
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
      filtropais: null,
      computed: {
        sortOptions () {
          // Create an options list from our fields
          return this.fields
          .filter(f => f.sortable)
          .map(f => { return { text: f.label, value: f.key } })
        }
      }
    }
  }
}
</script>

<style>
  .botonera {
    float: right;
    padding-top: 1em;
    padding-bottom: 1em;
  }
  .botoneraL {
    float: left;
    padding-top: 1em;
    padding-left: 1em;
    padding-bottom: 1em;
  }
  .btnEdit {
    background-image: url('../../assets/png/edit.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 1.5em;
    height: 1.5em;
  }
  .btnRemove {
    background-image: url('../../assets/png/remove.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 1.5em;
    height: 1.5em;
  }
  .btnPlus {
    background-image: url('../../assets/png/plus.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 1.5em;
    height: 1.5em;
  }

</style>
