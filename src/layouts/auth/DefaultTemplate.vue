<template>
    <section 
        id="loginPage" 
        :style="{
            backgroundImage: 'url(' + require('@/assets/images/bgLogin.jpg') + ')'
        }"
    >
        <div class="loginContent">
            <div class="loginCard">
                <content-left-component />
                <content-right-component />
            </div>
        </div>
    </section>
</template>

<script>
    import { onBeforeMount } from 'vue'
    import contentLeftComponent from './components/contentLeftComponent.vue'
    import ContentRightComponent from './components/ContentRightComponent.vue'

    export default {
        name:'DefaultTemplate',

        setup() {
            onBeforeMount(() => {
                document.title = "Curso EAD com Vue.js 3"
            })
        },

        components: {
            contentLeftComponent,
            ContentRightComponent,
        }
    }
</script>