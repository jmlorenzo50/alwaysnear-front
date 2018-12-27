<template>
  <div style="margin-top: 20px;">
    <b-container fluid>
        <b-row>

            <b-col>
              <b-card title="Usuarios"
                      img-src="/static/panelcontrol01.png"
                      img-alt="Usuarios 3D"
                      img-top
                      style="max-width: 20rem;"
                      class="mb-2"
                      @click="navegar('usuarios')">
                <p class="card-text">
                  Gestiona los usuarios del sistema. Es necesario crear los roles primero.
                </p>
                <b-button href="#" variant="primary">ir a Usuarios</b-button>
              </b-card>
            </b-col>

            <b-col>
              <b-card title="Roles"
                      img-src="/static/panelcontrol02.png"
                      img-alt="Roles 3D"
                      img-top
                      style="max-width: 20rem;"
                      class="mb-2"
                      @click="navegar('roles')">
                <p class="card-text">
                  Gestiona los roles de los usuarios del sistema de una forma sencilla.
                </p>
                <b-button href="#" variant="primary">ir a Roles</b-button>
              </b-card>
            </b-col>

            <b-col>
              <b-card title="Ámbitos"
                      img-src="/static/panelcontrol03.png"
                      img-alt="Roles 3D"
                      img-top
                      style="max-width: 20rem;"
                      class="mb-2"
                      @click="navegar('ambito')">
                <p class="card-text">
                  Define los dominios de actuación del sistema indican el idioma y la moneda.
                </p>
                <b-button href="#" variant="primary">ir a Ámbitos</b-button>
              </b-card>
            </b-col>

        </b-row>

        <b-row>
          <b-col>
            <b-card title="Clientes"
                    img-src="/static/panelcontrol04.png"
                    img-alt="Clientes 3D"
                    img-top
                    style="max-width: 20rem;"
                    class="mb-2"
                    @click="navegar('clientes')">
              <p class="card-text">
                Almacena los datos de los clientes o franquiciados.
              </p>
              <b-button href="#" variant="primary">ir a Clientes</b-button>
            </b-card>
          </b-col>

          <b-col>
            <b-card title="Productos"
                    img-src="/static/panelcontrol05.png"
                    img-alt="Productos 3D"
                    img-top
                    style="max-width: 20rem;"
                    class="mb-2"
                    @click="navegar('productos')">
              <p class="card-text">
                Crea productos innovadores y anuncialos para llegar al éxito.
              </p>
              <b-button href="#" variant="primary">ir a Productos</b-button>
            </b-card>
          </b-col>

          <b-col>
            <b-card title="Pedidos"
                    img-src="/static/panelcontrol06.png"
                    img-alt="Pedidos 3D"
                    img-top
                    style="max-width: 20rem;"
                    class="mb-2"
                    @click="navegar('pedidos')">
              <p class="card-text">
                Haz seguimiento y toma notas de las necesidades de tus clientes.
              </p>
              <b-button href="#" variant="primary">ir a Pedidos</b-button>
            </b-card>
          </b-col>


        </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      baseUrl: process.env.BASE_URL
    }
  },

  methods: {
    navegar (modulo) {
      this.$emit('modulo', modulo)
    }
  }

}
</script>
