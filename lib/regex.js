// 正则表达式
const mm = require('micromatch')

export const isMobile = (mobile) => {
  return mm.isMatch(mobile, /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/)
}
