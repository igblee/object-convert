import camelcase from 'lodash.camelcase'
import {myTypeOf} froom './utils'


export function u2cConvert(data, rules = null, level = 0) {
  if (myTypeOf(data) !== '[object Object]') return data
  let hasRules = false
  if (rules && rules.length) {
    hasRules = true
  }
  let res = {}
  for(let [key, value] of Object.entries(data)) {
    if (!hasRules) {
      if (myTypeOf(value) !== '[object Object]') {
        const keyCoverted = camelcase(key)
        res[keyCoverted] = value
      } else {
        const keyCoverted = camelcase(key)
        res[keyCoverted] = u2cConvert(value, rules, level + 1)
      }
    }
  }
}

export function c2uConvert(data, rules = null) {
  
}