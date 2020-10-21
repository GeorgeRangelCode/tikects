<!-- 
  Template para visualizar el formulario
  de edición de Tikect
-->
<template>
  <div class="row">
    <div class="col s12 m12 l12">
      <div class="card">
        <!-- 
          formulario que captura los datos del formulario 
          y son eviados al método updateTikect 
        -->
        <form v-on:submit.prevent="updateTikect">
          <div class="card-content">
            <h4 class="center-align">Editar datos de Tikect</h4>

            <div class="row">
              <div class="input-field col s12 m6 l6">
                <i class="material-icons prefix">account_circle</i>
                <input
                  id=""
                  type="text"
                  v-model="user.name_event"
                  placeholder="Nombre Evento"
                  class="validate"
                  required
                />
              </div>

              <div class="input-field col s12 m6 l6">
                <i class="material-icons prefix">account_circle</i>
                <input
                  id="icon_prefix"
                  type="text"
                  v-model="user.name_person"
                  placeholder="Nombre Persona"
                  class="validate"
                  required
                />
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12 m6 l6">
                <i class="material-icons prefix">directions</i>
                <input
                  id="icon_prefix"
                  type="text"
                  v-model="user.address"
                  placeholder="Dirección"
                  class="validate"
                  required
                />
              </div>

              <div class="input-field col s12 m6 l6">
                <i class="material-icons prefix">location_city</i>
                <input
                  id="icon_prefix"
                  type="text"
                  v-model="user.city"
                  placeholder="Ciudad"
                  class="validate"
                  required
                />
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12 m6 l6">
                <i class="material-icons prefix">place</i>
                <input
                  id="icon_prefix"
                  type="text"
                  v-model="user.state"
                  placeholder="Departamento"
                  class="validate"
                  required
                />
              </div>

              <div class="input-field col s12 m6 l6">
                <i class="material-icons prefix">public</i>
                <input
                  id="icon_prefix"
                  type="text"
                  v-model="user.country"
                  placeholder="País"
                  class="validate"
                  required
                />
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12 m6 l4">
                <i class="material-icons prefix">phone</i>
                <input
                  id="icon_telephone"
                  type="tel"
                  v-model="user.phone"
                  placeholder="Teléfono"
                  class="validate"
                  required
                />
              </div>
              <div class="input-field col s12 m6 l4">
                <i class="small material-icons">calendar-today</i>
                <date-picker
                  v-model="user.date"
                  format="dd/MM/yyyy"
                  editable
                  lang="es"
                  placeholder="Fecha de nacimiento"
                  required
                ></date-picker>
              </div>
            </div>
          </div>
          <div class="card-action">
            <div class="row">
              <div class="col s12">
                <button
                  class="btn waves-effect waves-light deep-purple darken-4"
                  type="submit"
                >
                  Actualizar Tikect
                  <i class="material-icons right">sync</i>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * Importa componente Datapicker
 * para el campo fecha
 */

import DatePicker from "vue2-datepicker";

export default {
  components: { DatePicker },

  data() {
    return {
      user: {},
      shortcuts: [
        {
          start: new Date(),
          end: new Date(),
        },
      ],
    };
  },

  created() {
    this.updateTikect();
  },

  // Métodos del componente EditTikect
  methods: {
    /**
     * Método que obtiene los datos del tikect
     * de acuerdo al ID del tikect
     */
    updateTikect() {
      this.axios.get("/tikect/" + this.$route.params.id).then((res) => {
        this.user = res.data;
        console.log(this.user);
      });
    },
    /**
     * Método que toma los datos del updateTikect
     * y son enviados al verbo REST PUT
     * para que se acutalice en la base de datos
     * después de recibir respuesta redirecciona
     * al componente DisplayTikects
     */
    updatedUser() {
      this.axios
        .put("/tikect/" + this.$route.params.id, this.user)
        .then((res) => {
          console.log(res);
          this.$router.replace({ name: "DisplayTikect" });
        });
    },
  },
};
</script>
