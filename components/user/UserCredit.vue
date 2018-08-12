<template>
  <div>
    <Form :model="form">
      <FormItem label="姓名" :label-width="60">
        <Input v-model="form.name" style="width: 200px"></Input>
      </FormItem>
      <FormItem label="性别" :label-width="60">
        <RadioGroup v-model="animal">
          <Radio label="男"></Radio>
          <Radio label="女"></Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="手机号" :label-width="60">
        <Input v-model="form.name" style="width: 200px"></Input>
      </FormItem>
      <FormItem label="地址" :label-width="60">
        <Input v-model="form.name"></Input>
      </FormItem>
      <FormItem label="学校" :label-width="60">
        <Input v-model="form.name"></Input>
      </FormItem>
      <FormItem label="院系" :label-width="60">
        <Input v-model="form.name"></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formValidate')">确定</Button>
        <Button @click="handleReset('formValidate')" style="margin-left: 8px">取消</Button>
      </FormItem>
    </Form>

  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: null
      }
    }
  }


}
</script>
<style lang="stylus">
</style>


