<template>
  <div>
    测试页面
  </div>
</template>

<script lang="ts" setup>
const person = {
  name: 'jamie',
}

const handler = {
  get(target: any, property: string, receiver: any) {
    console.log('get intersecpted!', target[property])
    console.log(...arguments)
    // 在这里可以拦截一下获取属性的过程，直接返回一个无关的字符串也是ok的
    // 想起了vuex的getters
    // return 'mike'
    // return target[property]
    return Reflect.get(target, property, receiver)
  },
  set(target: any, property: string, newValue: any, receiver: any) {
    console.log('set intersecpted!', target[property], newValue)
    // target[property] = newValue
    return Reflect.set(target, property, newValue, receiver)
  },
}

const nameProxy = new Proxy(person, handler)
console.log(nameProxy.name)
nameProxy.name = 'mike'
console.log(nameProxy)

</script>

<style scoped>
</style>
