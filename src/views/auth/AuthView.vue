<template>
        <form>
            <div class="groupForm">
                <i class="far fa-envelope"></i>
                <input type="email" name="email" placeholder="Email" v-model="email" required>
            </div>

            <div class="groupForm">
                <i class="far fa-key"></i>
                <input :type="typePassword" name="password" placeholder="Senha" v-model="password" required>
                <i class="far fa-eye buttom" @click.prevent="toggleShowPassword"></i>
            </div>

            <button 
                :class="['btn', 'primary', (loading || loadingStore) ? 'disabled' : '']" 
                type="submit" 
                @click.prevent="auth"
            >
                <span v-if="loading">Enviando...</span>
                <span v-else-if="loadingStore">Validando acesso...</span>
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
    import { computed, ref, watch } from 'vue'
    import { notify } from "@kyvg/vue3-notification";

    export default {
        name: "AuthView",
        
        setup() {
            const store = useStore()
            const email = ref('admin@example.com')
            const password = ref('admin')
            const loading = ref(false)
            const typePassword = ref('password')

            const loadingStore = computed(() => store.state.loading)

            watch (
                () => store.state.users.loggedIn,
                (loggedIn) => {
                    if (loggedIn) {
                        router.push({name: 'campus.home'})
                    }
                }
            )
            
            const toggleShowPassword = () => {
                typePassword.value = (typePassword.value == 'password')
                    ? 'text'
                    : 'password'
            }

            const auth = () => {
                loading.value = true
                store.dispatch('auth', {
                     email: email.value, 
                     password: password.value, 
                     device_name: 'desktop' 
                })
                .then(() => {
                    notify({title: 'Sucesso', text: 'Login efetuado com sucesso!', type: "success" });
                    router.push({name: 'campus.home'})
                })
                .catch(error => {
                    let msgError = 'Falha na requisição'

                    if (error.status === 422) msgError = 'Dados Inválidos!'
                    if (error.status === 404) msgError = 'Usuário Não Encontrado!'

                    notify({title: 'Falha ao autenticar', text: msgError, type: "error" });
                })
                .finally(() => loading.value = false)
            }

            return {
                auth,
                email,
                password,
                loading,
                typePassword,
                toggleShowPassword,
                loadingStore
            }
        }
    }
</script>