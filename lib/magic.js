const { Magic } = require('@magic-sdk/admin')

// MAGIC TEST SECRET KEY:
// export const magic = new Magic(process.env.MAGIC_SECRET_KEY)
// MAGIN *LIVE* SECRET KEY:
export const magic = new Magic(process.env.MAGIC_LIVE_SECRET_KEY)