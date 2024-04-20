import AuthService from "@/services/auth.service"

export default
{
    state: {
        user: {name: '', email: ''},
        loggedIn: false
    },

    getters: {
    },

    mutations: {
        SET_USER (state){
            state.user
            state.loggedIn = true
        },
        LOGOUT (state) {
            state.user = {name: '', email: ''}
            state.loggedIn = false
        }
    },

    actions: {
        auth (_, params) {
            AuthService.auth(params)
        }
    },
}