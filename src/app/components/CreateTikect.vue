<!-- 
  Template para visualizar el formulario
  de creación de tikect
-->
<template>
  <div class="row">
    <div class="col s12 m12 l12">
      <div class="card">
        <!-- 
          formulario que captura los datos ingresados 
          y son eviados al método addTikect 
        -->
        <form v-on:submit.prevent="addTikect">
          <div class="card-content">
            <h4 class="center-align">Creación de Tikect</h4>

            <div class="row">
              <div class="input-field col s12 m6 l6">
                <i class="material-icons prefix">account_circle</i>
                <input
                  id="icon_prefix"
                  type="text"
                  v-model="tikect.name_event"
                  class="validate"
                  required
                />
                <label for="icon_prefix">Nombre Evento</label>
              </div>

              <div class="input-field col s12 m6 l6">
                <i class="material-icons prefix">account_circle</i>
                <input
                  id="icon_prefix"
                  type="text"
                  v-model="tikect.name_person"
                  class="validate"
                  required
                />
                <label for="icon_prefix">Nombre Persona</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12 m6 l6">
                <i class="material-icons prefix">directions</i>
                <input
                  id="icon_prefix"
                  type="text"
                  v-model="tikect.address"
                  class="validate"
                  required
                />
                <label for="icon_prefix">Dirección</label>
              </div>

              <div class="input-field col s12 m6 l6">
                <i class="material-icons prefix">location_city</i>
                <input
                  id="icon_prefix"
                  type="text"
                  v-model="tikect.city"
                  class="validate"
                  required
                />
                <label for="icon_prefix">Ciudad</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12 m6 l6">
                <i class="material-icons prefix">place</i>
                <input
                  id="icon_prefix"
                  type="text"
                  v-model="tikect.state"
                  class="validate"
                  required
                />
                <label for="icon_prefix">Departamento</label>
              </div>

              <div class="input-field col s12 m6 l6">
                <i class="material-icons prefix">public</i>
                <input
                  id="icon_prefix"
                  type="text"
                  v-model="tikect.country"
                  class="validate"
                  required
                />
                <label for="icon_prefix">País</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12 m6 l4">
                <i class="material-icons prefix">phone</i>
                <input
                  id="icon_telephone"
                  type="tel"
                  v-model="tikect.phone"
                  class="validate"
                  required
                />
                <label for="icon_telephone">Teléfono</label>
              </div>
              <div class="input-field col s12 m6 l4">
                <i class="material-icons">calendar-today</i>
                <date-picker
                  v-model="tikect.date"
                  format="dd/MM/yyyy"
                  editable
                  lang="es"
                  placeholder="Fecha"
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
                  Agregar Tikect
                  <i class="material-icons right">send</i>
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
      tikect: {},
      shortcuts: [
        {
          start: new Date(),
          end: new Date(),
        },
      ],
    };
  },

  // Métodos del componente CreateTikect
  methods: {
    /**
     * Método que envia los datos obtenidos en el formulario
     * después de recibir respuesta redirecciona
     * al componente DisplayTikects
     */

    addTikect() {
      this.axios
        .post("/tikect", this.tikect)
        .then((res) => {
          this.$router.replace({ name: "DisplayTikect" });
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
