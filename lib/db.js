

import low from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'
var CryptoJS = require('crypto-js')

let db = null

if (process.browser) {
  const adapter = new LocalStorage('db', {
    serialize: (data) => CryptoJS.AES.encrypt(JSON.stringify(data), 'key'),
    deserialize: (data) => JSON.parse(CryptoJS.AES.decrypt(data.toString(), 'key').toString(CryptoJS.enc.Utf8))
  })

  db = low(adapter)
}

export default db;
