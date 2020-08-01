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
  },
}
