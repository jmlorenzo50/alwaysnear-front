<template>
  <div>
    <b-button @click="mostrarModal()"
              variant="outline-primary"
              v-b-popover.hover="'Crea un nuevo cliente'"
              title="Ayuda">Nuevo</b-button>
    <b-modal ref="myModalRef"
             size="lg"
             title="Ficha de cliente"
             header-bg-variant="primary"
             header-text-variant="light"
    >
      <b-card no-body>
      <b-tabs pills card>
        <b-tab title="Datos personales" active>
          <b-container class="text-left" fluid>
             <b-row class="mb-1 text-center">
               <b-col cols="4"><b>Campo</b></b-col>
               <b-col><b>Valor</b></b-col>
             </b-row>

             <b-row class="mb-1">
               <b-col cols="4">Nombre</b-col>
               <b-col>
                 <b-form-input type="text"
                               required
                               v-model="cliente.nombre"
                               placeholder="Escribe un nombre del cliente"/>
               </b-col>
             </b-row>

             <b-row class="mb-1">
               <b-col cols="4">Documento identificación</b-col>
               <b-col>
                 <b-form-input type="text"
                               required
                               v-model="cliente.documento"
                               placeholder="Escribe el documento de identificación"/>
               </b-col>
             </b-row>

             <catalogo :label="'País'" :tipo="'pais'" v-model="cliente.pais"></catalogo>

             <catalogo :label="'Tipo cliente'" :tipo="'tpcliente'" v-model="cliente.tipo"></catalogo>

             <b-row class="mb-1">
               <b-col cols="4">Nombre Contacto</b-col>
               <b-col>
                 <b-form-input type="text"
                               required
                               v-model="cliente.contacto.nombre"
                               placeholder="Escribe un nombre de contacto"/>
               </b-col>
             </b-row>

             <b-row class="mb-1">
               <b-col cols="4">Teléfono Contacto</b-col>
               <b-col>
                 <b-form-input type="text"
                               required
                               v-model="cliente.contacto.telefono"
                               placeholder="Escribe un teléfono"/>
               </b-col>
             </b-row>

             <b-row class="mb-1">
               <b-col cols="4">Email Contacto</b-col>
               <b-col>
                 <b-form-input type="text"
                               required
                               v-model="cliente.contacto.email"
                               placeholder="Escribe un correo electrónico"/>
               </b-col>
             </b-row>

             <b-row class="mb-1">
               <b-col cols="4">Dirección de Contacto</b-col>
               <b-col>
                 <b-form-input type="text"
                               required
                               v-model="cliente.contacto.direccion"
                               placeholder="Escribe la dirección de contacto"/>
               </b-col>
             </b-row>

             <catalogo :label="'Ámbito'" :tipo="'ambito'" v-model="cliente.ambito"></catalogo>

             <b-row>
               <b-col cols="4">Fecha baja</b-col>
               <b-col><b-form-input type="date" v-model="fcbaja" /></b-col>
             </b-row>
           </b-container>
        </b-tab>

        <b-tab title="Licencias">

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

                  <template slot="fcactivacion" slot-scope="row">
                    <button v-if="row.item.fcactivacion == null && row.item.fcbaja == null" type="button" class="btn btn-secondary btn-xs">Activar</button>
                    <p v-if="row.item.fcactivacion != null">{{row.item.fcactivacion}}</p>
                  </template>

                  <template slot="fcrenovacion" slot-scope="row">
                    <button v-if="row.item.fcactivacion != null && row.item.fcrenovacion == null && row.item.fcbaja == null" type="button" class="btn btn-secondary btn-xs">Renovar</button>
                    <p v-if="row.item.fcrenovacion != null">{{row.item.fcrenovacion}}</p>
                  </template>

                  <template slot="actions" slot-scope="row">
                    <button v-if="row.item.fcbaja != null" type="button" class="btn btn-secondary btn-xs btnPlus"></button>
                    <button v-if="row.item.fcbaja == null" type="button" class="btn btn-danger btn-xs btnRemove"></button>
                  </template>
              </b-table>

              <div style="float: right;">
                  <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0 texo-azul" />
              </div>
          </div>

        </b-tab>
      </b-tabs>
      </b-card>

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

const items = [
  { licencia: 'AAABBB-001', fcactivacion: '01-01-2015', fcrenovacion: '01-01-2015', fcbaja: '01-01-2015' },
  { licencia: 'AAABBB-002', fcactivacion: '01-01-2015', fcrenovacion: '01-01-2015', fcbaja: null },
  { licencia: 'AAABBB-003', fcactivacion: '01-01-2015', fcrenovacion: null, fcbaja: null },
  { licencia: 'AAABBB-004', fcactivacion: null, fcrenovacion: null, fcbaja: null }
]

import Catalogo from '../sistema/catalogo.vue'

export default {
  components: {
    Catalogo
  },
  data () {
    return {
      modalShow: false,
      items: items,
      fields: [
             { key: 'licencia', label: 'Licencias' },
             { key: 'fcactivacion', label: 'Activación' },
             { key: 'fcrenovacion', label: 'Renovación' },
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

      cliente: {
        nombre: null,
        documento: null,
        pais: null,
        tipo: null,
        ambito: null,
        contacto: {
          nombre: null,
          telefono: null,
          email: null,
          direccion: null
        },
        licencias: [
          {codigo: null, fcactivacion: null, fcrenovacion: null, fcbaja: null},
          {codigo: null, fcactivacion: null, fcrenovacion: null, fcbaja: null},
          {codigo: null, fcactivacion: null, fcrenovacion: null, fcbaja: null}
        ]
      },
      rol: null,
      fcbaja: '',
      tipos: [
        { value: null, text: '-- seleccione un tipo --' },
        { value: '1', text: 'Cliente' },
        { value: '2', text: 'Cliente V.I.P.' },
        { value: '3', text: 'Franquicia' }
      ],
      paises: [
        { value: null, text: '-- seleccione un país --' },
        { value: 'ES', text: 'España' },
        { value: 'RUS', text: 'Rusia' },
        { value: 'GEO', text: 'Georgia' }
      ],
      ambitos: [
        { value: null, text: '-- seleccione un ámbito --' },
        { value: 'ES', text: 'España' },
        { value: 'RUS', text: 'Rusia' },
        { value: 'GEO', text: 'Georgia' }
      ]
    }
  },

  methods: {
    mostrarModal () {
      console.log('mostrarModal ' + this.modalShow)

      this.cliente.nombre = null
      this.cliente.documento = null
      this.cliente.pais = null
      this.cliente.tipo = null
      this.cliente.ambito = null
      this.cliente.contacto.nombre = null
      this.cliente.contacto.telefono = null
      this.cliente.contacto.email = null
      this.cliente.contacto.direccion = null
      this.cliente.fcbaja = ''
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
