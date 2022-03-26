Vue.component('error', {
    props: ['showError'],
    template: `<div class="error" v-if="showError">
                   <p>Ошибка загрузки данных!</p>
               </div>`
});
