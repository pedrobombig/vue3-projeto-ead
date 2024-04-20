<template>
        <form>
            <div class="groupForm">
                <i class="far fa-envelope"></i>
                <input type="email" name="email" placeholder="Email" v-model="email" required>
            </div>

            <div class="groupForm">
                <i class="far fa-key"></i>
                <input type="password" name="password" placeholder="Senha" v-model="password" required>
                <i class="far fa-eye buttom"></i>
            </div>

            <button 
                :class="['btn', 'primary', loading ? 'loading' : '']" 
                type="submit" 
                @click.prevent="auth"
            >
                <span v-if="loading">Enviando...</span>
                <span v-else>Login</span>
            </button>
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
    import { useStore } from 'vuex'
    import { ref } from 'vue'

    export default {
        name: "AuthView",
        
        setup() {
            const store = useStore()
            const email = ref('pedro.bombig@gmail.com')
            const password = ref('password')
            const loading = ref(false)

            const auth = () => {
                loading.value = true
                store.dispatch('auth', {
                     email: email.value, 
                     password: password.value, 
                     device_name: 'desktop' 
                })
                .then(() => router.push({name: 'campus.home'}))
                .catch(error => alert(error))
                .finally(() => loading.value = false)
            }

            return {
                auth,
                email,
                password,
                loading,
            }
        }
    }
</script>