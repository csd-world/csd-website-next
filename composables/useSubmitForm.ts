import { useToast, POSITION } from 'vue-toastification'
import { FormModel } from '~~/types'

export default function useSubmitForm(form: FormModel, hcaptChaToken?: Ref<string>) {
  const isLoading = ref(false)
  const toast = useToast()
  const router = useRouter()

  async function handleSubmit() {
    // if (!hcaptChaToken?.value) {
    //   toast.warning('请先进行人机验证！', {
    //     position: POSITION.BOTTOM_CENTER,
    //     hideProgressBar: true,
    //   })
    //   return
    // }
    // const config = useRuntimeConfig()
    // const a =config.public.apiBase;
    // const b = config.public.apiToken;
    const runtimeConfig = useRuntimeConfig()
    const { apiBase, apiToken, secretKey } = runtimeConfig.public
    console.log(apiBase,apiToken);
    console.log(runtimeConfig);
    // console.log(a,b);

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
        console.log(1)
        router.push('/apply/success')

      })

    isLoading.value = false
  }

  return { isLoading, handleSubmit }
}
