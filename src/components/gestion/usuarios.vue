<template>
  <div>
    <div class="botonera">
      <nuevo-usuario></nuevo-usuario>
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

import NuevoUsuario from './usuariomodal.vue'

const items = [
  {login: 'usuario01', password: '123456', rol: 'Usuario', fcbaja: null},
  {login: 'usuario02', password: '123456', rol: 'Usuario', fcbaja: '01-12-2019'},
  {login: 'usuario03', password: '123456', rol: 'Usuario', fcbaja: null},
  {login: 'usuario04', password: '123456', rol: 'Usuario', fcbaja: null},
  {login: 'usuario05', password: '123456', rol: 'Usuario', fcbaja: '01-12-2019'},
  {login: 'usuario06', password: '123456', rol: 'Usuario', fcbaja: null},
  {login: 'usuario07', password: '123456', rol: 'Usuario', fcbaja: null},
  {login: 'usuario08', password: '123456', rol: 'Usuario', fcbaja: null},
  {login: 'usuario09', password: '123456', rol: 'Usuario', fcbaja: null},
  {login: 'usuario10', password: '123456', rol: 'Usuario', fcbaja: null},
  {login: 'usuario11', password: '123456', rol: 'Usuario', fcbaja: null},
  {login: 'usuario12', password: '123456', rol: 'Usuario', fcbaja: null},
  {login: 'usuario13', password: '123456', rol: 'Usuario', fcbaja: null},
  {login: 'usuario14', password: '123456', rol: 'Usuario', fcbaja: '01-12-2019'},
  {login: 'usuario15', password: '123456', rol: 'Usuario', fcbaja: null},
  {login: 'usuario16', password: '123456', rol: 'Usuario', fcbaja: null},
  {login: 'usuario17', password: '123456', rol: 'Usuario', fcbaja: null},
  {login: 'usuario18', password: '123456', rol: 'Usuario', fcbaja: null},
  {login: 'usuario19', password: '123456', rol: 'Usuario', fcbaja: null},
  {login: 'usuario20', password: '123456', rol: 'Usuario', fcbaja: null},
  {login: 'usuario21', password: '123456', rol: 'Usuario', fcbaja: null},
  {login: 'usuario22', password: '123456', rol: 'Usuario', fcbaja: '01-12-2019'},
  {login: 'usuario23', password: '123456', rol: 'Usuario', fcbaja: null},
  {login: 'usuario24', password: '123456', rol: 'Usuario', fcbaja: null},
  {login: 'usuario25', password: '123456', rol: 'Usuario', fcbaja: null}
]

export default {
  components: {
    NuevoUsuario
  },

  data () {
    return {
      items: items,
      fields: [
             { key: 'login', label: 'Login del usuario', sortable: true, sortDirection: 'desc' },
             { key: 'rol', label: 'Rol del usuario', sortable: true, sortDirection: 'desc' },
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
