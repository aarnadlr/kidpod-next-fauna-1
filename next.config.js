module.exports = {
  env: {
    /**
    |--------------------------------------------------
    | Set the client secret for your database here.
    |
    | Learn more about managing roles and creating private keys:
    | https://docs.fauna.com/fauna/current/security/
    |--------------------------------------------------
    */
    faunaDbSecret: process.env.FAUNADB_SECRET,
    faunaDbGraphQlEndpoint: 'https://graphql.fauna.com/graphql',
    NEXT_EXAMPLE_MAGIC_PUBLISHABLE_KEY: process.env.NEXT_EXAMPLE_MAGIC_PUBLISHABLE_KEY,
    NEXT_EXAMPLE_MAGIC_SECRET_KEY: process.env.NEXT_EXAMPLE_MAGIC_SECRET_KEY,
    NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY: process.env.NEXT_EXAMPLE_MAGIC_PUBLISHABLE_KEY,
    MAGIC_SECRET_KEY: process.env.MAGIC_SECRET_KEY
  },
}
