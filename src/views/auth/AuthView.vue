<template>
        <form action="/dist/index.html" method="">
            <div class="groupForm">
                <i class="far fa-envelope"></i>
                <input type="email" name="email" placeholder="Email" required>
            </div>
            <div class="groupForm">
                <i class="far fa-key"></i>
                <input type="password" name="password" placeholder="Senha" required>
                <i class="far fa-eye buttom"></i>
            </div>
            <button class="btn primary" type="submit" @click.prevent="login">Login</button>
        </form>
        <span>
            <p class="fontSmall">
                Esqueceu sua senha? 
                <router-link :to="{name: 'forget.password'}" class="link primary">Clique Aqui</router-link>
            </p>
        </span>
</template>
<script>
    import router from '@/router'

    export default {
        name: "AuthView",
        
        setup() {
            const login = () => router.push({name: 'campus.home'})

            return {
                login
            }
        }
    }
</script>