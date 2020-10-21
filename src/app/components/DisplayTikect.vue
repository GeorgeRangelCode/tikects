<!--
  Template en que se visualizará el listado de los tikects
  registrados en la base de datos
-->
<template>
  <div>
    <h3 class="center-align">Listado de Tikects</h3>
    <table class="striped centered responsive-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre Evento</th>
          <th>Nombre Persona</th>
          <th>Dirección</th>
          <th>Ciudad</th>
          <th>Departamento</th>
          <th>País</th>
          <th>Teléfono</th>
          <th>Fecha</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(tikect, index) in tikects" :key="tikect._id">
          <td>{{ index + 1 }}</td>
          <td>{{ tikect.name_event }}</td>
          <td>{{ tikect.name_person }}</td>
          <td>{{ tikect.address }}</td>
          <td>{{ tikect.city }}</td>
          <td>{{ tikect.state }}</td>
          <td>{{ tikect.country }}</td>
          <td>{{ tikect.phone }}</td>
          <td>{{ fecha(tikect.date) }}</td>
          <div class="row mt2">
            <router-link
              :to="{ name: 'EditTikect', params: { id: tikect._id } }"
              class="btn waves-effect waves-light green accent-2 col l12 m12 s12"
            >
              Editar
              <i class="small material-icons">edit</i>
            </router-link>
          </div>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
/**
 * importa libreria moment.js
 * para parsear y dar formato a las fechas
 */
import moment from "moment";

export default {
  data() {
    return {
      tikects: [],
    };
  },
  created() {
    this.fetchTikects();
  },

  // métodos del componente DisplayTikects
  methods: {
    fecha: function (date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },

    fetchTikects() {
      this.axios
        .get("/tikect")
        .then((res) => {
          this.tikects = res.data;
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
