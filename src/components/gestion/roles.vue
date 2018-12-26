<template>
  <div>
    <div class="botonera">
      <ficha-roles></ficha-roles>
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

import FichaRoles from './rolesmodal.vue'

const items = [
  {nombre: 'Administrador', descripcion: 'Administrador del Sistema', fcbaja: null},
  {nombre: 'Cliente', descripcion: 'Cliente particular', fcbaja: null},
  {nombre: 'Franquiciado', descripcion: 'Franquiciado', fcbaja: null},
  {nombre: 'Always Near', descripcion: 'Always Near', fcbaja: '01-12-2019'}
]

export default {
  components: {
    FichaRoles
  },

  data () {
    return {
      items: items,
      fields: [
             { key: 'nombre', label: 'Nombre', sortable: true, sortDirection: 'desc' },
             { key: 'descripcion', label: 'Descripción', sortable: true, sortDirection: 'desc' },
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
