<template>
    <div>
      <page-title-view title="Minhas Dúvidas" />
      
        <div class="content">
            <div class="container">
              <div class="left">
                  <div class="card">
                    <div class="title bg-laravel">
                      <span class="text">Filtros</span>
                    </div>
                    
                    <div class="modules">
                      <ul class="classes">
                        <li
                          :class="{active : status === ''}"
                          @click.prevent="getMySupportsWithStatus('')"
                        >
                          Todos
                        </li>
                        <li
                          :class="{active : status === 'A'}"
                          @click.prevent="getMySupportsWithStatus('A')"
                        >
                          Aguardando Minha Resposta
                        </li>
                        <li
                          :class="{active : status === 'P'}"
                          @click.prevent="getMySupportsWithStatus('P')"
                        >
                          Aguardando Professor
                        </li>
                        <li
                          :class="{active : status === 'C'}"
                          @click.prevent="getMySupportsWithStatus('C')"
                        >
                          Finalizados
                        </li>
                      </ul>
                    </div>
                  </div>
              </div>

                <div class="right">
                    <div class="content">
                        <div class="comments">
                          <supports-view />
                        </div>
                    </div>

                    <pagination-view 
                      :pagination="mySupports"
                      @changePage="changePage"
                    />

                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import { computed, onMounted, ref } from 'vue'
  import { useStore } from 'vuex'
  import SupportsView from '@/components/SupportsView.vue'
  import PageTitleView from '@/components/PageTitleView.vue'
  import PaginationView from '@/components/PaginationView.vue'

  export default {
    name: 'MySupportsView',
    components: {
      SupportsView,
      PageTitleView,
      PaginationView
    },
    setup() {
      const store = useStore()
      const status = ref('')
      const mySupports = computed(() => store.state.supports.supports)

      onMounted(() => store.dispatch('getMySupports', {status:status.value}))


      const getMySupportsWithStatus = (newStatus) => {
        status.value = newStatus

        store.dispatch('getMySupports', {status: newStatus})
      }

      const changePage = (page) => store.dispatch('getMySupports', {
        status: status.value,
        page
      })

      return {
        status,
        getMySupportsWithStatus,
        mySupports,
        changePage
      }
    }
  }
</script>
