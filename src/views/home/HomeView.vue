<template>
  <div>
      <page-title-view title="Meus Cursos" />

      <div class="content">
          <ul class="listCourses">
            <card-course-view
              class="animate__animated animate__headShake"
              v-for="course in courses"
              :key="course.id"
              :course="course"
              :bgName="'laravel'"
            >
            </card-course-view>
          </ul>
      </div>
  </div>
</template>

<script>
  import { onMounted, computed } from 'vue'
  import { useStore } from 'vuex'
  import CardCourseView from './components/CardCourseView.vue'
  import PageTitleView from '@/components/PageTitleView.vue'

  export default {
    name: 'HomeView',
    setup() {
      const store = useStore()
      const courses = computed(() => store.state.courses.myCourses )
      
      onMounted(() => store.dispatch('getCourses'))

      return {
        courses
      }
    },
    components: {
      CardCourseView,
      PageTitleView
    }
  }
</script>
