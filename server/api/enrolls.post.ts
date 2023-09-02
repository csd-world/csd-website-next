export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig()
  const { apiBase, apiToken } = runtimeConfig
  const body = await useBody(event)
  const response = await $fetch(`${apiBase}/api/enrolls`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiToken}`,
    },
    body,
  })
  return response
})
