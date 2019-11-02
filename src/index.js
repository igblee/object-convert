/* eslint-disable no-void */
import camelcase from 'lodash.camelcase'
import sankecase from 'lodash.snakecase'
import { myTypeOf } from './utils'

function traverse (data, rules, fn, level) {
  if (myTypeOf(data) !== '[object Object]') return data
  const hasRules = !!(rules && rules.length)
  const res = {}
  for (const [key, value] of Object.entries(data)) {
    const keyCoverted = fn(key)
    if (!hasRules) {
      res[keyCoverted] = (myTypeOf(value) === '[object Object]') ? traverse(value, rules, fn, level + 1) : value
    } else {
      if (myTypeOf(value) !== '[object Object]') {
        let flag = false
        rules.forEach((item) => {
          if (Object.prototype.hasOwnProperty.call(item, 'level')) {
            if (level === item.level && key === item.source) {
              res[item.target] = value
              flag = true
            }
          } else {
            if (key === item.source) {
              res[item.target] = value
              flag = true
            }
          }
        })
        flag ? void (0) : res[keyCoverted] = value
      } else {
        let flag = false
        rules.forEach((item) => {
          if (Object.prototype.hasOwnProperty.call(item, 'level')) {
            if (level === item.level && key === item.source) {
              res[item.target] = traverse(value, rules, fn, level + 1)
              flag = true
            }
          } else {
            if (key === item.source) {
              res[item.target] = traverse(value, rules, fn, level + 1)
              flag = true
            }
          }
        })
        flag ? void (0) : res[keyCoverted] = traverse(value, rules, fn, level + 1)
      }
    }
  }
  return res
}

export function s2cConvert (data, rules = null) {
  return traverse(data, rules, camelcase, 0)
}

export function c2sConvert (data, rules = null) {
  return traverse(data, rules, sankecase, 0)
}
