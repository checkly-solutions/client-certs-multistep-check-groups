import { MultiStepCheck, CheckGroupV2 } from 'checkly/constructs'

const group1 = new CheckGroupV2('check-group-1', {
  name: 'badssl.com Group',
  environmentVariables: [
    // BADSSL_CERT refers to a global env secret that contains the base64-encoded certificate
    { key: 'CERT_VAR_NAME', value: 'BADSSL_CERT' }, 
    // BADSSL_PASSPHRASE to a global env secret that contains the passphrase for the cert (if it's encrypted)
    { key: 'CERT_PASSPHRASE_VAR_NAME', value: 'BADSSL_PASSPHRASE' } 
  ]
})

new MultiStepCheck('multistep-check-1', {
  name: 'badssl.com Multistep Check',
  group: group1,
  code: {
    entrypoint: './api.spec.ts'
  },
})

/**
 * Here is what a second group might look like, with a different client cert.
 * 
const group2 = new CheckGroupV2('check-group-2', {
  name: 'my.example-site.com Group',
  environmentVariables: [
    // EXAMPLE_SITE_CERT refers to a global env secret that contains the base64-encoded certificate
    { key: 'CERT_VAR_NAME', value: 'EXAMPLE_SITE_CERT' }, 
    // EXAMPLE_SITE_PASSPHRASE to a global env secret that contains the passphrase for the cert (if it's encrypted)
    { key: 'CERT_PASSPHRASE_VAR_NAME', value: 'EXAMPLE_SITE_PASSPHRASE' } 
  ]
})

new MultiStepCheck('multistep-check-2', {
  name: 'example-site.com Multistep Check',
  group: group1,
  code: {
    entrypoint: path.join(__dirname, 'example-site.spec.ts')
  },
})
**/