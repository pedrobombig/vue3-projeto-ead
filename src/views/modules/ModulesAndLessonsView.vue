<template>
    <div>
      <page-title-view title="LaraFood" />

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
    import ModulesView from './components/ModulesView.vue'
    import PlayerView from './components/PlayerView.vue'
    import SupportsLessonsView from './components/SupportsView.vue'
    import PageTitleView from '@/components/PageTitleView.vue'

    export default {
        name: "ModulesAndLessonsView",
        components: {
            ModulesView,
            PlayerView,
            SupportsLessonsView,
            PageTitleView
        }
    }
</script>