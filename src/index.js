import camelcase from 'lodash.camelcase'
import sankecase from 'lodash.snakecase'
import {myTypeOf} from './utils'


export function s2cConvert(data, rules = null, level = 0) {
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
        res[keyCoverted] = s2cConvert(value, rules, level + 1)
      }
    } else {
      if (myTypeOf(value) !== '[object Object]') {
        let flag = false
        rules.forEach((item) => {
          if (item.hasOwnProperty('level')) {
            if (level === item.level) {
              if (key === item.source) {
                res[item.target] = value
                flag = true
              }
            }
          } else {
            if (key === item.source) {
                res[item.target] = value
                flag = true
              }
          }
        })
        if (!flag) {
          const keyCoverted = camelcase(key)
          res[keyCoverted] = value
        }
      } else {
        let flag = false
        rules.forEach((item) => {
          if (item.hasOwnProperty('level')) {
            if (level === item.level) {
              if (key === item.source) {
                res[item.target] = s2cConvert(value, rules, level + 1)
                flag = true
              }
            }
          } else {
            if (key === item.source) {
                res[item.target] = s2cConvert(value, rules, level + 1)
                flag = true
              }
          }
        })
        if (!flag) {
          const keyCoverted = camelcase(key)
          res[keyCoverted] = s2cConvert(value, rules, level + 1)
        }
      }
    }
  }
  return res
}

export function c2sConvert(data, rules = null, level = 0) {
  if (myTypeOf(data) !== '[object Object]') return data
  let hasRules = false
  if (rules && rules.length) {
    hasRules = true
  }
  let res = {}
  for(let [key, value] of Object.entries(data)) {
    if (!hasRules) {
      if (myTypeOf(value) !== '[object Object]') {
        const keyCoverted = sankecase(key)
        res[keyCoverted] = value
      } else {
        const keyCoverted = sankecase(key)
        res[keyCoverted] = c2sConvert(value, rules, level + 1)
      }
    } else {
      if (myTypeOf(value) !== '[object Object]') {
        let flag = false
        rules.forEach((item) => {
          if (item.hasOwnProperty('level')) {
            if (level === item.level) {
              if (key === item.source) {
                res[item.target] = value
                flag = true
              }
            }
          } else {
            if (key === item.source) {
                res[item.target] = value
                flag = true
              }
          }
        })
        if (!flag) {
          const keyCoverted = sankecase(key)
          res[keyCoverted] = value
        }
      } else {
        let flag = false
        rules.forEach((item) => {
          if (item.hasOwnProperty('level')) {
            if (level === item.level) {
              if (key === item.source) {
                res[item.target] = c2sConvert(value, rules, level + 1)
                flag = true
              }
            }
          } else {
            if (key === item.source) {
                res[item.target] = c2sConvert(value, rules, level + 1)
                flag = true
              }
          }
        })
        if (!flag) {
          const keyCoverted = sankecase(key)
          res[keyCoverted] = c2sConvert(value, rules, level + 1)
        }
      }
    }
  }
  return res
}