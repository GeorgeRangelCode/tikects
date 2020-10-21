<!--
  Template en la cual se cargarán los componentes 
  DisplayTikect y CreateTikect
-->
<template>
  <div class="row">
    <div>
      <nav>
        <div class="nav-wrapper deep-purple darken-4">
          <router-link :to="{ name: 'DisplayTikect' }" class="brand-logo center">
            Tikects
          </router-link>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger"
            ><i class="material-icons">menu</i></a
          >
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <a>
                <router-link :to="{ name: 'CreateTikect' }">
                  Crear tikect
                </router-link>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <ul class="sidenav" id="mobile-demo">
        <li>
          <a>
            <router-link
              :to="{ name: 'CreateTikect' }"
              class="deep-purple-text darken-4"
            >
              Crear tikect
            </router-link>
          </a>
        </li>
      </ul>
    </div>
    <div class="row">
      <router-view class="col s12 m12 l12"></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<script>
/**
 * script que carga la funcionalidad de la barra de navegación
 */
$(document).ready(function () {
  $(".sidenav").sidenav();
});
</script>
