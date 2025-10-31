import { test, expect, request } from "@playwright/test"

const certBase64 = process.env[process.env.CERT_VAR_NAME]
const certPassphrase = process.env[process.env.CERT_PASSPHRASE_VAR_NAME]
let certBuffer

test("Using a client cert", async () => {
  if (certBase64) {
    certBuffer = Buffer.from(certBase64, "base64")
  } else {
    throw new Error('No certificate found.')
  }

  const context = await request.newContext({
    clientCertificates: [{
      origin: 'https://client.badssl.com',
      cert: certBuffer,
      key: certBuffer,
      passphrase: certPassphrase ?? null
    }],
  })

  await test.step('GET client.badssl.com', async () => {
    const response = await context.get('https://client.badssl.com/')
    await expect(response.status()).toBe(200)
  })
})