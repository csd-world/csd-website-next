import { useToast, POSITION } from 'vue-toastification'

export default function useSubmitForm() {
  const isLoading = ref(false)
  const toast = useToast()
  const router = useRouter()

  async function handleSubmit(value: any) {
    isLoading.value = true
    const response = await $fetch('/api/form', {
      method: 'POST',
      body: {
        data: value,
      },
    })
      .catch((e) => {
        isLoading.value = false
        toast.error('提交失败，请联系管理员！', {
          position: POSITION.BOTTOM_CENTER,
          hideProgressBar: true,
        })
        throw e
      })
      .then(() => {
        router.push('/apply/success')
      })

    console.log('fronz ~ handleSubmit ~ response', response)
    isLoading.value = false
  }

  return { isLoading, handleSubmit }
}
