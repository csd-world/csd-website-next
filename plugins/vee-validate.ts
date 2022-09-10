import { defineRule } from 'vee-validate'

const GRADE_ONE_PREFIX = 22
const GRADE_TWO_PREFIX = 21

const errorMessage = {
  required: '该项不能为空！',
  gradeOne: '请输入正确的大一学号！',
  gradeTwo: '请输入正确的大二学号！',
  name: '请输入正确的姓名（必须是中文）！',
  email: '请输入正确的邮箱！',
}

export default defineNuxtPlugin(() => {
  defineRule('required', (value: string) => {
    if (!value || !value.trim().length) {
      return errorMessage['required']
    }

    return true
  })

  defineRule('gradeOne', (value: number) => {
    if (parseInt(value.toString().slice(0, 2), 10) !== GRADE_ONE_PREFIX) {
      return errorMessage['gradeOne']
    }

    return true
  })

  defineRule('gradeTwo', (value: number) => {
    if (parseInt(value.toString().slice(0, 2), 10) !== GRADE_TWO_PREFIX) {
      return errorMessage['gradeTwo']
    }

    return true
  })

  defineRule('name', (value: string) => {
    if (!value.match(new RegExp(`^[\u4e00-\u9fa5]+(·[\u4e00-\u9fa5]+)*$`))) {
      return errorMessage['name']
    }

    return true
  })

  defineRule('email', (value: string) => {
    if (!value.trim().length) return true

    // https://stackoverflow.com/questions/201323/how-can-i-validate-an-email-address-using-a-regular-expression
    const emailRe =
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    if (!emailRe.test(value)) {
      return errorMessage['email']
    }
    return true
  })
})
