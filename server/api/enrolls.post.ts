interface ReCaptchaResponse {
  success: boolean;
  challenge_ts: string;
  hostname: string;
  credit?: boolean;
  'error-codes'?: string[];
  score?: number;
  score_reason?: string[];
}

const enrollsPost = defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig()
  const { apiBase, apiToken, secretKey } = runtimeConfig
  const body = await readBody<{
    data: any
    hcaptChaToken: string
  }>(event)

  // const verifyRes: ReCaptchaResponse = await $fetch('https://api.hcaptcha.com/siteverify', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //   },
  //   body: new URLSearchParams({
  //     response: body.hcaptChaToken,
  //     secret: secretKey,
  //   }),
  // })
  const verifyRes: ReCaptchaResponse = await $fetch('http://116.198.204.233:2024/api/enroll', {
    method: 'POST',
    headers: {
      Authorization: `Bearer 0ab4bbbd36f39c9c2b408836b336dc11539671002aada9a1ac2ad9f72764d382bdcb1083d997f04a4ba21157ff5e9235d7a4d04a2fc93af67256edacd6198d8f5aa77e712f1da36619758d70b435a0b9a0d769abf5e87cccdeaf56b127b8ca4faf7956c41e56ca2e019177972c4ec31cf12a1946067038f8819666733d3a6aae`,
    },
    body: {
      data: body.data
    },
  })

  // if (verifyRes.success) {  
  //   const response = await $fetch<unknown>(`http://116.198.204.233:1337/api/enrolls`, {
  //     method: 'POST',
  //     headers: {
  //       Authorization: `Bearer ${apiToken}`,
  //     },
  //     body: {
  //       data: body.data
  //     },
  //   })

  //   return response
  // } else {
    return verifyRes
  // }
})

export default enrollsPost
