<template>
  <div class="Edit container">
      <Alert v-if="alert" v-bind:message="alert"></Alert>
      <h1 class="page-header">编辑用户 </h1>
      <form v-on:submit="updateCustomer" >
          <div class="well">
              <h4>用户信息</h4>
              <div class="form-group">
                  <label>姓名</label>
                  <input type="text" class="form-control" placeholder="name" v-model="customer.name">
              </div>
              <div class="form-group">
                  <label>电话</label>
                  <input type="text" class="form-control" placeholder="phone" v-model="customer.phone">
              </div>
              <div class="form-group">
                  <label>邮箱</label>
                  <input type="text" class="form-control" placeholder="email" v-model="customer.email">
              </div>
              <div class="form-group">
                  <label>学历</label>
                  <input type="text" class="form-control" placeholder="education" v-model="customer.education">
              </div>
              <div class="form-group">
                  <label>毕业学校</label>
                  <input type="text" class="form-control" placeholder="graduationschool" v-model="customer.graduationschool">
              </div>
              <div class="form-group">
                  <label>职业</label>
                  <input type="text" class="form-control" placeholder="profession" v-model="customer.profession">
              </div>
              <div class="form-group">
                  <label>职业</label>
                  <!-- <input type="text" class="form-control" placeholder="profile" v-model="customer.profile"> -->
                  <textarea class="form-control" v-model="customer.profile" name="" id="" rows="10"></textarea>
              </div>
              <button type="submit" class="btn btn-primary">确认</button>
          </div>
      </form>
  </div>
</template>

<script>
import Alert from './Alert'
export default {
  name: 'Add',
  data () {
    return {
        customer:{},
        alert:""
    }
  },
  components:{
      Alert 
  },
  methods:{
      fetchCustomer(id){
          this.$http.get("http://localhost:3000/users/"+id)
        .then(function(res){
            // console.log(res);
            this.customer = res.body;
        })
    },
    updateCustomer(e){
        e.preventDefault();  // 阻止默认事件 

        // console.log('123');
        if(!this.customer.name || !this.customer.phone || !this.customer.email){
            // console.log("请添加对应的信息")
            this.alert = "请添加对应的信息";
        } else {
            let updateCustomer = {
                name: this.customer.name,
                phone: this.customer.phone,
                email: this.customer.education,
                graduationschool: this.customer.graduationschool,
                profession: this.customer.profession,
                profile: this.customer.profile
            }
            // 更新 。。。
            this.$http.put("http://localhost:3000/users/"+this.$route.params.id,updateCustomer).then(function(res){
                console.log(res);
                this.$router.push({ path:'/' ,query:{alert:"更新成功"}}); // 进入到主页，并把 query 传过去
            })
        }
    }
  } ,
  created(){
    this.fetchCustomer(this.$route.params.id)
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
