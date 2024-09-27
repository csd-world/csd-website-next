<script setup lang="ts">
import { Form } from 'vee-validate'
import { FormModel } from '~~/types'



const hcaptChaToken = ref<string>('')
const form = reactive<FormModel>({
  studentId: '',
  name: '',
  qq: '',
  email: '',
  hadExperience: true,
  applyReason: '',
  grade: 2,
  experience: '',
  direction: '',
})

const { siteKey } = useRuntimeConfig().public
const { isLoading, handleSubmit } = useSubmitForm(form, hcaptChaToken)

const directionOptions = [
  {
    name: 'Web 开发',
    value: 'web',
  },
  {
    name: '游戏开发',
    value: 'game',
  },
  {
    name: '人工智能',
    value: 'ai',
  },
  {
    name: '移动开发',
    value: 'mobile',
  },
]


</script>

<template>
  <div
    class="container flex-grow px-4 flex flex-col-reverse sm:px-0 sm:grid sm:grid-cols-3 sm:space-x-4"
  >
    <Form
      :onSubmit="handleSubmit "
      class="space-y-4 form"
    >
      <div class="input-row">
        <BaseInput
          v-model="form.studentId"
          :name="'studentId'"
          :rules="'required'"
          class="col-span-1"
          :label="'学号'"
          :type="'number'"
        />
        <BaseInput
          v-model="form.name"
          :rules="'required|name'"
          :name="'name'"
          :label="'姓名'"
          :type="'text'"
        />
      </div>
      <div class="input-row">
        <BaseInput
          v-model="form.qq"
          :name="'qq'"
          :rules="'required'"
          :label="'QQ'"
          class="col-span-1"
          :type="'number'"
        />
        <BaseInput
          v-model="form.email"
          :rules="'required|email'"
          :name="'email'"
          :label="'邮箱'"
          :type="'text'"
        />
      </div>
      <div class="input-row">
        <BaseSelect
          v-model="form.direction"
          :name="'direction'"
          :rules="'required'"
          :label="'方向'"
          :options="directionOptions"
        />
      </div>
      <BaseTextarea
        v-model="form.experience"
        :rules="'required'"
        :name="'experience'"
        :label="'聊聊你学过的东西，以及参与过的项目'"
      />
      <BaseTextarea
        v-model="form.applyReason"
        :rules="'required'"
        :name="'applyReason'"
        :label="'说说你为什么想加入软件部'"
      />
      
      <button
        :class="{ loading: isLoading }"
        :disabled="isLoading"
        class="submit flex items-center"
      >
        <BaseLoading
          v-if="isLoading"
          class="mr-1"
        />
        提交报名表
      </button>
    </Form>
    <div class="col-span-1">
      <div
        class="bg-white mt-4 sm:mt-0 sm:relative sm:top-32 rounded-lg text-gray-600 p-6 space-y-2"
      >
        <h4 class="text-xl font-medium">注意事项：</h4>
        <ul class="list-disc pl-4 space-y-2">
          <li>
            报名表的信息尤为关键，这是我们决定是否给你发送面试邮件的重要依据。
          </li>
          <li>面试会在每个月的第三周周末进行。</li>
          <li>发送面试邮件之后会在群里发通知。</li>
          <li>遇到如提交不了等其他问题，请到群里联系管理员反馈。</li>
        </ul>
      </div>
    </div>
  </div>
</template>
