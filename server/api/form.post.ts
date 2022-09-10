export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig()
  const { apiBase, apiToken } = runtimeConfig
  const body = await useBody(event)
  const response = await $fetch(`${apiBase}/forms`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiToken}`,
    },
    body,
  })
  return response
})
