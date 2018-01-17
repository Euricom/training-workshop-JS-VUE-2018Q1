<template>
<div class="layout">
    <Layout>
        <Header>
          <h2>iView Demo</h2>
        </Header>
        <Content :style="{padding: '50px 50px'}">
          <Button>Default</Button>
          <Button type="primary">Primary</Button>
          <Button type="ghost">Ghost</Button>
          <Button type="dashed">Dashed</Button>

          <br><br>
          <Button type="info">Info</Button>
          <Button type="success">Success</Button>
          <Button type="warning">Warning</Button>
          <Button type="error">Error</Button>

          <br><br>    
          <Button @click="show()">Click me!</Button>
          <Modal v-model="visible" title="Welcome">Welcome to iView</Modal>

          <br><br> 
          <Table stripe :columns="columns" :data="users"></Table>
        </Content>
        <Footer>This is my footer</Footer>
    </Layout>
</div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      visible: false,
      columns: [
        {
          title: 'Name',
          key: 'name',
        },
        {
          title: 'Age',
          key: 'age',
          width: '15%',
        },
        {
          title: 'Address',
          key: 'address',
          width: '60%',
        },
      ],
      users: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03',
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01',
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02',
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04',
        },
      ],
    };
  },
  methods: {
    show() {
      this.visible = true;
    },
  },
};
</script>

<style lang="less">
@import '~iview/dist/styles/iview.css';

h2 {
  color: lightpink;
}
</style>
