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
                        <li>Todos</li>
                        <li>Aguardando Minha Resposta</li>
                        <li>Aguardando Professor</li>
                        <li>Finalizados</li>
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
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import SupportsView from '@/components/SupportsView.vue'
  import PageTitleView from '@/components/PageTitleView.vue'

  export default {
    name: 'MySupportsView',
    components: {
      SupportsView,
      PageTitleView,
    }
  }
</script>
