<template>
  <div class="min-h-screen flex items-stretch">
    <!-- Left Side - Image & Branding -->
    <div class="hidden lg:flex lg:w-1/2 relative bg-dark-bg overflow-hidden">
      <!-- Background Image -->
      <img src="/images/login-bg.png" alt="Data Impetus Workspace" class="absolute inset-0 w-full h-full object-cover" />
      
      <!-- Overlay Gradient -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

      <!-- Branding Text -->
      <div class="relative z-10 w-full p-12 flex flex-col justify-between h-full">
        <div>
          <h1 class="text-4xl font-bold text-white tracking-widest uppercase font-serif">
            IMOVEL OS
          </h1>
          <div class="h-1 w-24 bg-primary-500 mt-2 rounded-sm shadow-luxury"></div>
        </div>

        <div class="space-y-4">
          <p class="text-gray-300 text-lg max-w-md leading-relaxed">
            Gestão exclusiva de imóveis de alto padrão. Acesse seu portfólio de luxo.
          </p>
        </div>
      </div>
    </div>

    <!-- Right Side - Login Form -->
    <div class="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 bg-white dark:bg-dark-bg transition-colors duration-300 relative">
      <!-- Theme Toggle (Absolute Top Right) -->
      <div class="absolute top-6 right-6">
        <ThemeToggle />
      </div>

      <div class="w-full max-w-md space-y-8">
        <!-- Feedback Message -->
        <div v-if="feedback.message" 
             :class="[
               'p-4 rounded-lg text-center font-bold mb-4 transition-all duration-300',
               feedback.type === 'error' ? 'bg-red-500/10 text-red-500 border border-red-500/20' : 'bg-primary-500/10 text-primary-500 border border-primary-500/20'
             ]">
          {{ feedback.message }}
        </div>

        <!-- Header -->
        <div class="text-center space-y-2">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Criar Conta</h2>
          <p class="text-gray-500 dark:text-dark-muted">Insira seus dados para acessar a plataforma</p>
        </div>

        <!-- Form -->
        <form @submit.prevent="handleRegister" class="space-y-6">
          <div class="space-y-5">
            <BaseInput 
              v-model="form.fullName"
              label="Nome Completo"
              placeholder="Ex: João Silva"
              type="text"
              :disabled="loading"
            />
            
            <BaseInput 
              v-model="form.email"
              label="Endereço de E-mail"
              placeholder="nome@empresa.com"
              type="email"
              :disabled="loading"
            />
            
            <BaseInput 
              v-model="form.password"
              label="Senha"
              placeholder="••••••••"
              type="password"
              :disabled="loading"
            />
          </div>

          <BaseButton variant="primary" class="w-full py-3 text-lg pointer-events-auto" :disabled="loading">
            <span v-if="loading">Criando conta...</span>
            <span v-else>Criar Conta</span>
          </BaseButton>
        </form>

        <!-- Footer -->
        <div class="text-center text-sm text-gray-500 dark:text-dark-muted">
          Já tem uma conta? 
          <NuxtLink to="/login" class="font-bold text-primary-500 hover:text-primary-600 transition-colors">Entrar</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Simple entrance animation */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.w-full.max-w-md {
  animation: fadeInUp 0.6s ease-out forwards;
}
</style>

<script setup lang="ts">
const router = useRouter()

const form = reactive({
  fullName: '',
  email: '',
  password: ''
})

const loading = ref(false)
const feedback = reactive({
  type: '' as 'error' | 'success' | '',
  message: ''
})

const handleRegister = async () => {
  loading.value = true
  feedback.message = ''
  feedback.type = ''

  try {
    // Simulate API call for mock registration
    await new Promise(resolve => setTimeout(resolve, 800))

    // Mock success
    feedback.type = 'success'
    feedback.message = 'Conta criada com SUCESSO! Redirecionando...'
    
    setTimeout(() => {
      router.push('/dashboard')
    }, 1500)
  } catch (error: any) {
    console.error('Registration Error:', error)
    feedback.type = 'error'
    feedback.message = error.message || 'Erro ao criar conta. Tente novamente.'
  } finally {
    loading.value = false
  }
}
</script>
