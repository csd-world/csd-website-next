<script setup lang="ts">
import { Form } from 'vee-validate'
import { FormModel } from '~~/types'

const form = reactive<FormModel>({
  studentId: '',
  name: '',
  qq: '',
  email: '',
  hadExperience: false,
  applyReason: '',
  grade: 1,
  experience: '',
})

const { handleSubmit, isLoading } = useSubmitForm(form)
</script>

<template>
  <div
    class="container flex-grow px-4 flex flex-col-reverse sm:px-0 sm:grid sm:grid-cols-3 sm:space-x-4"
  >
    <div class="form sm:col-span-2">
      <Form
        :onSubmit="handleSubmit"
        class="space-y-4 bg-white"
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
        <BaseCheckbox
          v-model="form.hadExperience"
          :name="'hadExperience'"
          :label="'我有编程基础'"
        />
        <BaseTextarea
          v-model="form.experience"
          v-if="form.hadExperience"
          :name="'experience'"
          :label="'聊聊你学过的东西，以及用来做过哪些有趣的事'"
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
    </div>
    <div class="col-span-1">
      <div
        class="bg-white mt-4 sm:mt-0 sm:relative sm:top-32 rounded-lg text-gray-600 p-6 space-y-2"
      >
        <h4 class="text-xl font-medium">注意事项：</h4>
        <ul class="list-disc pl-4 space-y-2">
          <li>报名表可以让我们对你有个大概的了解，请务必如实认真填写。</li>
          <li>
            如果你有不错的编程基础，并且已经开发了自己的软件，可以主动联系管理员进入特招流程。
          </li>
          <li>遇到如提交不了等其他问题，请到群里联系管理员反馈。</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
@import '~/style/apply-form.css';
</style>
