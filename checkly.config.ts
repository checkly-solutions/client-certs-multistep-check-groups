import { defineConfig } from 'checkly'

const config = defineConfig({
  projectName: 'Client certs for groups and multistep checks',
  logicalId: 'client-certs-for-groups-and-multistep-checks',
  checks: {
    runtimeId: '2025.04',
    frequency: 1440,
    checkMatch: '**/__checks__/**/*.check.ts',
  },
})

export default config
