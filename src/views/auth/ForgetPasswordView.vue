<template>
        <form action="/dist/index.html" method="">
            <div class="groupForm">
                <i class="far fa-envelope"></i>
                <input type="email" name="email" placeholder="Email" required>
            </div>
            
            <button class="btn primary" type="submit">Recuperar</button>
        </form>
        <span>
            <p class="fontSmall">
                Acessar
                <router-link :to="{name: 'auth'}" class="link primary">Clique Aqui</router-link>
            </p>
        </span>
</template>

<script>
    export default {
        name: "ForgetPasswordView"        
    }
</script>