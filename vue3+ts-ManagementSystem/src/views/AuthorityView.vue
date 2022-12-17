<template>
  <div>
    <el-tree
      ref="treeRef"
      :data="list"
      show-checkbox
      :check-strictly="true"
      node-key="roleId"
      :default-checked-keys="authority"
      :props="{
        children: 'roleList',
        label: 'name',
      }"
    />
  </div>
  <el-button @click="changeAuthority">确认修改</el-button>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import { useRoute } from "vue-router";
import { InitData } from "../type/authority";
import { getAuthorityList } from "../request/api";
export default defineComponent({
  setup() {
    const route = useRoute();
    const params: any = route.params;
    const data = reactive(
      new InitData(params.id, JSON.parse(params.authority))
    );
    onMounted(() => {
      getAuthorityList().then((res) => {
        data.list = res.data;
      });
    });
    const changeAuthority = () => {
      console.log(data.treeRef);
    };
    return { ...toRefs(data), changeAuthority };
  },
});
</script>

<style scoped>
</style>