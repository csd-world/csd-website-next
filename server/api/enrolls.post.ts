export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig()
  const { apiBase } = runtimeConfig
  const body = await useBody(event)
  const response = await $fetch(`${apiBase}/api/enrolls`, {
    method: 'POST',
    body,
  })
  return response
})
