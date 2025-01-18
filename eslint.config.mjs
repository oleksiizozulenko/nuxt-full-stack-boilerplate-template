import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // ...Custom flat configs append after nuxt's configs
).prepend(
  // ...Prepend some flat configs in front
)