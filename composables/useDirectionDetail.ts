import { useToast, POSITION } from 'vue-toastification'
import { Attributes } from '../types'

export default function useDirectionDetail() {
  const toast = useToast()
  const detailAtb = reactive<Attributes>({
    title: '',
    content: '',
    createdAt: '',
    updatedAt: '',
    publishedAt: '',
  })

  async function handleFetchDetail(id: number) {
    await $fetch(`/api/articles/${id}`, { method: 'GET' })
      .then((res) => {
        Object.assign(detailAtb, res.data.attributes)
      })
      .catch((e) => {
        toast.error('获取文章失败，请联系管理员！', {
          position: POSITION.BOTTOM_CENTER,
          hideProgressBar: true,
        })
        throw e
      })
  }

  return { handleFetchDetail, detailAtb }
}
