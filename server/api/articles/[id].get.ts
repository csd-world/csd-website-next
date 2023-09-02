export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig()
  const id = getRouterParam(event, 'id')
  const { apiBase } = runtimeConfig
  const response = await $fetch(`${apiBase}/api/articles/${id}`, {
    method: 'GET',
  })
  return response
})
