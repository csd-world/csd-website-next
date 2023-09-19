const enrollsPost =  defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig()
  const { apiBase, apiToken } = runtimeConfig
  const body = await readBody(event)
  const response = await $fetch<unknown>(`${apiBase}/api/enrolls`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiToken}`,
    },
    body,
  })
  return response
})

export default enrollsPost