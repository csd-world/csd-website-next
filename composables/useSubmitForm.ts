import { useToast, POSITION } from 'vue-toastification'
import { FormModel } from '~~/types'

export default function useSubmitForm(form: FormModel) {
  const isLoading = ref(false)
  const toast = useToast()
  const router = useRouter()

  async function handleSubmit() {
    if (isLoading.value) return
    isLoading.value = true
    const response = await $fetch('/api/enrolls', {
      method: 'POST',
      body: {
        data: form,
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

    isLoading.value = false
  }

  return { isLoading, handleSubmit }
}
