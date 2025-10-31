import { defineConfig } from 'checkly'

const config = defineConfig({
  projectName: 'client-certs-multistep-check-groups',
  logicalId: 'client-certs-multistep-check-groups',
  checks: {
    runtimeId: '2025.04',
    frequency: 1440,
    checkMatch: '**/__checks__/**/*.check.ts',
  },
})

export default config
