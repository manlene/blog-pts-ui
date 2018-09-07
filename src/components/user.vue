<template>
  <div>
    <div class="span12 box bordered-box green-border" style="margin-bottom:0;">
      <div class="box-header red-background">
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#saveModal">添加</button>
      </div>
      <div class="box-content box-no-padding" style="padding-top: 30px">
        <div class="responsive-table">
          <div class="scrollable-area">
            <table class="table table-bordered" style="margin-bottom:0;">
              <thead>
                <tr>
                  <th>
                    用户名
                  </th>
                  <th>
                    邮箱
                  </th>
                  <th>
                    创建时间
                  </th>
                  <th>
                    状态
                  </th>
                  <th>
                    操作
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in users">

                  <td>{{user.loginName}}</td>
                  <td>{{user.email}}</td>
                  <td>{{user.createTimeStr}}</td>
                  <td>{{user.status==1?"生效":"无效"}}</td>
                  <td>
                    <div class="box-header red-background">
                      <button type="button" class="btn btn-success" data-toggle="modal" data-target="#editModal" v-on:click="showUpdateUser(user.id)">编辑</button>
                      <button type="button" class="btn btn-info" data-toggle="modal" data-target="#delectModel" v-on:click="updateUserStatus(user.id,user.status)">{{user.status==1?"禁用":"启用"}}</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="saveModal" tabindex="-1" role="dialog" aria-labelledby="userModel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
              &times;
            </button>
            <h4 class="modal-title" id="myModalLabel">
              添加用户
            </h4>
          </div>
          <div class="modal-body">
            <label>用户名</label>
            <input type="text" class="form-control" v-model="loginName">
            <label>邮箱</label>
            <input type="text" class="form-control" v-model="email">
            <label>密码</label>
            <input type="password" class="form-control" v-model="password">
            <label>确认密码</label>
            <input type="password" class="form-control" v-model="repassword">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">关闭
            </button>
            <button type="button" class="btn btn-primary" data-dismiss="modal" v-on:click="save()">
              保存
            </button>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal -->
    </div>
    <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="userModel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
              &times;
            </button>
            <h4 class="modal-title" id="myModalLabel">
              编辑用户
            </h4>
          </div>
          <div class="modal-body">
            <label>用户名</label>
            <input type="text" class="form-control" v-model="loginName">
            <label>邮箱</label>
            <input type="text" class="form-control" v-model="email">
            <label>密码</label>
            <input type="password" class="form-control" v-model="password">
            <label>确认密码</label>
            <input type="password" class="form-control" v-model="repassword">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">关闭
            </button>
            <button type="button" class="btn btn-primary" v-on:click="updateUser()">
              保存
            </button>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal -->
    </div>
    <!-- 信息删除确认 -->
    <div class="modal fade" id="delectModel">
      <div class="modal-dialog">
        <div class="modal-content message_align">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
            <h4 class="modal-title">提示信息</h4>
          </div>
          <div class="modal-body">
            <p>您确认吗？</p>
          </div>
          <div class="modal-footer">
            <input type="hidden" id="url" />
            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            <a class="btn btn-success" data-dismiss="modal" v-on:click="confirmUpdateUserStatus()">确定</a>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->
  </div>
</template>

<script>
  export default {
    name: 'user',
    data() {
      return {
        users: [],
        loginName: "",
        email: "",
        password: "",
        repassword: "",
        id: "",
        status: ""
      }
    },
    methods: {
      save() {
        var url = "/api/user/save";
        var params = {
          "loginName": this.loginName,
          "email": this.email,
          "password": this.password,
          "repassword": this.repassword
        };
        this.$http.post(url, params).then(response => {
          var responseData = response.data;
          if (responseData.statusCode = "1000201") {
            this.loadUser();
          }

        }, response => {
          console.log("error");
        });

      },
      loadUser() {
        var usersUrl = "/api/user"
        this.$http.get(usersUrl).then(response => {
          var responseData = response.data;
          this.users = responseData.data;
        }, response => {
          console.log("error");
        });
      },
      showUpdateUser(id) {
        var usersUrl = "/api/user/" + id
        this.$http.get(usersUrl).then(response => {
          var responseData = response.data;
          this.loginName = responseData.data.loginName;
          this.email = responseData.data.email;
          this.password = responseData.data.password;
          this.repassword = responseData.data.password;
          this.id = id;
        }, response => {
          console.log("error");
        });
      },
      updateUser() {
        var usersUrl = "/api/user/update";
        var params = {
          "id": this.id,
          "loginName": this.loginName,
          "email": this.email,
          "password": this.password,
          "repassword": this.repassword
        };
        this.$http.patch(usersUrl, params).then(response => {
          this.loadUser();
        }, response => {
          console.log("error");
        });
      },
      updateUserStatus(id, status) {
        this.id = id;
        this.status = status
      },
      confirmUpdateUserStatus() {
        var usersUrl = "/api/user/update";
        var params = {
          "id": this.id,
          "status": this.status
        };
        this.$http.patch(usersUrl, params).then(response => {
          this.loadUser();
        }, response => {
          console.log("error");
        });
      }
    },
    mounted() {
      
      this.loadUser();
    }

  }

</script>
<style>
  table {
    background-color: beige;
  }

  .modal {
    width: 45%
  }

  .modal-dialog {
    margin: 0 0;
  }

  #delectModel {
    height: 36%;
    width: 43%
  }

  [type="checkbox"]:not(:checked),
  [type="checkbox"]:checked {
    left: 60px !important;
    opacity: 1;
  }

</style>
