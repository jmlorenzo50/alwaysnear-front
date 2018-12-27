<template>
  <div>
    <div class="botonera">
      <ficha-pedido></ficha-pedido>
    </div>

    <div class="panel panel-default" style="text-align: left">
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

import FichaPedido from './pedidosmodal.vue'

const items = [
  {articulo: {id: '1', nombre: 'Token y licencia', descripcion: 'Token y licencia por 1 año'}, cantidad: '1', estado: 'Enviado', cliente: '1', fcpedido: '01-01-2018', fcbaja: null},
  {articulo: {id: '1', nombre: 'Token y licencia', descripcion: 'Token y licencia por 1 año'}, cantidad: '1', estado: 'Atendido', cliente: '2', fcpedido: '01-01-2018', fcbaja: null},
  {articulo: {id: '1', nombre: 'Token y licencia', descripcion: '10x Token y licencia por 1 año'}, cantidad: '1', estado: 'Sin pagar', cliente: '3', fcpedido: '01-01-2018', fcbaja: null},
  {articulo: {id: '1', nombre: 'Token y licencia', descripcion: 'Token y licencia por 1 año'}, cantidad: '100', estado: 'Sin atender', cliente: '4', fcpedido: '01-01-2018', fcbaja: null}
]

export default {
  components: {
    FichaPedido
  },

  data () {
    return {
      items: items,
      fields: [
             { key: 'articulo.descripcion', label: 'Descripción', sortable: true, sortDirection: 'desc' },
             { key: 'cantidad', label: 'Cantidad', sortable: true, sortDirection: 'desc' },
             { key: 'estado', label: 'Estado', sortable: true, sortDirection: 'desc' },
             { key: 'fcpedido', label: 'Fc. Pedido', sortable: true, sortDirection: 'desc' },
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
