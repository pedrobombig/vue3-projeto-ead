<template>
    <div class="login">
        <div class="content">
            <span class="logo">
                <img class="logo" :src="require('@/assets/images/logoDark.svg')" alt="EspecializaTi">
            </span>

            <span>
                <p>Seja muito bem vindo!</p>
            </span>

            <span class="dots">
                <span></span>
                <span></span>
                <span></span>
            </span>
            
            <span class="description">
                Acesse nossa plataforma e desfrute de cursos completos para sua especialização.
            </span>
            
            <router-view></router-view>
        </div>

        <span class="copyright fontSmall">
            Todos os Direitos reservados - <b>Especializati</b>
        </span>
    </div>
</template>

<script>
    export default {
        name: 'content-right-component'
    }
</script>