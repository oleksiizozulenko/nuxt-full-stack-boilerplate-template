import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({
  // options here
})
.prepend(
  // ...Prepend some flat configs in front
)
.override('nuxt/typescript', {
  rules: {
    // ...Override rules, for example:

  }
})