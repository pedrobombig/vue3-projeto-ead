<template>
        <form>
            <div class="groupForm">
                <i class="far fa-envelope"></i>
                <input type="email" name="email" placeholder="Email" v-model="email" required>
            </div>
            
            <button 
                :class="['btn', 'primary', loading ? 'loading' : '']" 
                type="submit" 
                @click.prevent="forgetPassword"
            >
                <span v-if="loading">Enviando...</span>
                <span v-else>Recuperar</span>
            </button>
        </form>
        <span>
            <p class="fontSmall">
                Acessar
                <router-link :to="{name: 'auth'}" class="link primary">Clique Aqui</router-link>
            </p>
        </span>
</template>

<script>
    import { ref } from 'vue'
    import { useStore } from 'vuex'
    import { notify } from "@kyvg/vue3-notification";

    export default {
        name: "ForgetPasswordView",

        setup() {
            const store = useStore()
            const email = ref('')
            const loading = ref(false)

            const forgetPassword = () => {
                loading.value = true
                store
                    .dispatch('forgetPassword', { email: email.value })
                    .then(() => {
                        notify({title: 'Sucesso', text: 'Confira o seu e-mail!', type: "success" });
                    })
                    .catch(() => {
                        notify({title: 'Error', text: 'Falha ao recuperar usuário!', type: "error" });
                    })
                    .finally(() => loading.value = false)
            }

            return {
                email,
                forgetPassword,
                loading
            }
        }

    }
</script>