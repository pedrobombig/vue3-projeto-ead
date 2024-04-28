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
                :class="['btn', 'primary', loading ? 'loading' : '']" 
                type="submit" 
                @click.prevent="auth"
            >
                <span v-if="loading">Enviando...</span>
                <span v-else>Atualizar Senha</span>
            </button>
        </form>
</template>
<script>
    import router from '@/router'
    import { ref } from 'vue'
    import ResetPasswordService from '@/services/password.reset.service'
    import { notify } from "@kyvg/vue3-notification";

    export default {
        name: "ResetPasswordView",
        props: {
            token: {
                require: true
            }
        },
        setup(props) {
            const email = ref('')
            const password = ref('')
            const loading = ref(false)
            const typePassword = ref('password')
            
            const toggleShowPassword = () => {
                typePassword.value = (typePassword.value == 'password')
                    ? 'text'
                    : 'password'
            }

            const auth = () => {
                loading.value = true
                ResetPasswordService.reset({
                     email: email.value, 
                     password: password.value, 
                     token: props.token
                })
                .then(() => {
                    notify({title: 'Sucesso', text: 'Senha Atualizada com sucesso!', type: "success" });
                    router.push({name: 'auth'})
                })
                .catch(() => {
                    notify({title: 'Error', text: 'Falha ao recuperar usuário!', type: "error" });
                })
                .finally(() => loading.value = false)
            }

            return {
                auth,
                email,
                password,
                loading,
                typePassword,
                toggleShowPassword
            }
        }
    }
</script>