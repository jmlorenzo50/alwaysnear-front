<template>
  <div class="container" id="ventanaContenedora">
    <br><br><br><br><br>


    <div class="jumbotron">
            <b-form @submit="onSubmit" @reset="onReset">
              <b-form-group id="loginInputG"
                            label="Login:"
                            label-for="loginInput">
                <b-form-input id="loginInput"
                              type="text"
                              v-model="username"
                              required
                              placeholder="Introduce el usuario"
                              maxlength="10">
                </b-form-input>
              </b-form-group>
              <b-form-group id="nombrePasswordG"
                            label="Password:"
                            label-for="nombrePassword">
                <b-form-input id="nombrePassword"
                              type="password"
                              v-model="password"
                              required
                              placeholder="Introduce el password"
                              maxlength="10"
                              >
                </b-form-input>
              </b-form-group>
              <b-button type="submit" variant="primary">Login</b-button>
              <b-button type="reset" variant="danger">Limpiar</b-button>
            </b-form>
            <br>
            <b-alert :show="dismissCountDown"
                   dismissible
                   variant="danger"
                   @dismissed="dismissCountDown=0"
                   @dismiss-count-down="countDownChanged">
            <p>Usuario o clave incorrecta</p>
            <b-progress variant="danger"
                        :max="dismissSecs"
                        :value="dismissCountDown"
                        height="4px">
            </b-progress>
          </b-alert>

    </div>
  </div>
  </div>
</template>

<script>
    // import Vue from 'vue'

    export default {
      data () {
        return {
          autentificado: false,
          username: '',
          password: '',
          dismissCountDown: 0,
          dismissSecs: 10,
          mockingrol: {
            nombre: 'Administrador',
            ambito: 'España'
          }
        }
      },
      methods: {
        onSubmit (evt) {
          evt.preventDefault()
          this.irAPanelControl(this.mockingrol)
          /*
          this.$http.get(Vue.prototype.serverrest + '/login/' + this.username + '/' + this.password + '/')
          .then(response => (
              this.irAPanelControl(response)
            )).catch(error => (
              this.mostrarError(error)
            ))
          */
        },
        irAPanelControl (response) {
          this.$emit('authenticated', true)
          this.$emit('rol', response)
          this.$router.push('/panelcontrol')
          /* console.log(response.bodyText)
          console.log(response.bodyText.length)
          if (response.bodyText.length > 0) {
            this.$emit('authenticated', true)
            this.$emit('rol', response)
            this.$router.push('/panelcontrol')
          } else {
            this.dismissCountDown = this.dismissSecs
          } */
        },
        mostrarError (error) {
          console.log(error)
          this.dismissCountDown = this.dismissSecs
        },
        onReset (evt) {
          evt.preventDefault()
          this.username = ''
          this.password = ''
        },
        countDownChanged (dismissCountDown) {
          this.dismissCountDown = dismissCountDown
        }
      }
    }
</script>

<style>
  #ventanaContenedora {
      max-width: 500px;
  }
</style>
