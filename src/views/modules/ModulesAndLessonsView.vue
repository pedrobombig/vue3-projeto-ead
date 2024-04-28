<template>
    <div>
      <page-title-view :title="course.name" />

        <div class="content">
            <div class="container">

                <modules-view />

                <div class="right">
                    <div class="content">
                        <player-view />

                        <supports-lessons-view />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { useStore } from 'vuex'
    import { computed } from 'vue'
    import ModulesView from './components/ModulesView.vue'
    import PlayerView from './components/PlayerView.vue'
    import SupportsLessonsView from './components/SupportsView.vue'
    import PageTitleView from '@/components/PageTitleView.vue'
    import router from '@/router'

    export default {
        name: "ModulesAndLessonsView",
        setup() {
            const store = useStore()
            const course = computed(() => store.state.courses.courseSelected)
            
            if (course.value.id === '') {
                router.push({name: 'campus.home'})
            }

            return {
                course
            }
        },
        components: {
            ModulesView,
            PlayerView,
            SupportsLessonsView,
            PageTitleView
        }
    }
</script>