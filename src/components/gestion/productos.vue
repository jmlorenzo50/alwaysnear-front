<template>
  <div>
    <div class="botonera">
      <ficha-producto></ficha-producto>
    </div>

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

import FichaProducto from './productosmodal.vue'

const items = [
  { nombre: 'Token y licencia', descripcion: 'Token para culto', duracion: '1 año', precio: '15', ambito: 'ESP', tipocliente: 'Todos', fcbaja: null },
  { nombre: 'Token y licencia', descripcion: 'Token para culto', duracion: '2 años', precio: '28', ambito: 'ESP', tipocliente: 'Todos', fcbaja: null },
  { nombre: 'Token y licencia', descripcion: 'x10 Token para culto', duracion: '1 año', precio: '120', ambito: 'ESP', tipocliente: 'Franquiciado', fcbaja: null }
]

export default {
  components: {
    FichaProducto
  },

  data () {
    return {
      items: items,
      fields: [
             { key: 'nombre', label: 'Nombre', sortable: true, sortDirection: 'desc' },
             { key: 'descripcion', label: 'Descripción', sortable: true, sortDirection: 'desc' },
             { key: 'duracion', label: 'Duración', sortable: true, sortDirection: 'desc' },
             { key: 'precio', label: 'Precio', sortable: true, sortDirection: 'desc' },
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
