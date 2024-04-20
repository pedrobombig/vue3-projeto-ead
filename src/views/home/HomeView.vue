<template>
  <div>
      <page-title-view title="Meus Cursos" />

      <div class="content">
          <ul class="listCourses">
            <card-course-view
              :title="'Curso de Laravel com Vue.js'"
              :image="''"
              :bgName="'laravel'"
            >
            </card-course-view>
          </ul>
      </div>
  </div>
</template>

<script>
  import CardCourseView from './components/CardCourseView.vue'
  import PageTitleView from '@/components/PageTitleView.vue'

  export default {
    name: 'HomeView',
    components: {
      CardCourseView,
      PageTitleView
    }
  }
</script>
