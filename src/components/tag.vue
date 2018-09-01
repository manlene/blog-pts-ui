<template>
  <div>
    <div class="span12 box bordered-box green-border" style="margin-bottom:0;">
      <div class="box-header red-background">
        <span>标签名</span>
        <input v-model="tagName">
        <button type="button" class="btn btn-primary" v-on:click.stop.prevent="save()">添加</button>
      </div>
      <div class="box-content box-no-padding" style="padding-top: 30px">
        <div class="responsive-table">
          <div class="scrollable-area">
            <table class="table table-bordered" style="margin-bottom:0;">
              <thead>
                <tr>
                  <th>
                    标签名
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
                <tr v-for="tag in tags">

                  <td>{{tag.tagName}}</td>
                  <td>{{tag.createTimeStr}}</td>
                  <td>{{tag.status==1?"生效":"无效"}}</td>
                  <td>
                    <div class="box-header red-background">
                      <button type="button" class="btn btn-success" data-toggle="modal" data-target="#editModal" v-on:click="showUpdateTag(tag)">编辑</button>
                      <button type="button" class="btn btn-info" data-toggle="modal" data-target="#delectModal" v-on:click="updateTagStatus(tag.id,tag.status)">{{tag.status==1?"禁用":"启用"}}</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
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
            <label>标签</label>
            <input type="text" class="form-control" v-model="tagName">

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">关闭
            </button>
            <button type="button" class="btn btn-primary" data-dismiss="modal" v-on:click="updateTag()">
              保存
            </button>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal -->
    </div <!-- 信息删除确认 -->
    <div class="modal fade" id="delectModal">
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
            <a class="btn btn-success" data-dismiss="modal" v-on:click="confirmUpdateTagStatus()">确定</a>
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
    name: 'tag',
    data() {
      return {
        tags: [],
        tagName: "",
        id: "",
        status: ""
      }
    },
    methods: {
      save() {

        var url = "/api/tag/save";
        var params = {
          "tagName": this.tagName,
        };
        console.log(params)
        this.$http.post(url, params).then(response => {
          var responseData = response.data;
          if (responseData.statusCode = "1000204") {
            this.loadTags();
          }

        }, response => {
          console.log("error");
        });

      },
      loadTags() {
        var usersUrl = "/api/tag"
        this.$http.get(usersUrl).then(response => {
          var responseData = response.data;
          this.tags = responseData.data;
        }, response => {
          console.log("error");
        });
      },
      showUpdateTag(tag) {
        this.id = tag.id;
        this.tagName = tag.tagName;
      },
      updateTag() {
        var url = "/api/tag/update";
        var params = {
          "id": this.id,
          "tagName": this.tagName
        };
        
        this.$http.patch(url, params).then(response => {
          this.loadTags();
        }, response => {
          console.log("error");
        });
      },
      updateTagStatus(id, status) {
        this.id = id;
        this.status = status
      },
      confirmUpdateTagStatus() {
        var url = "/api/tag/update";
        var params = {
          "id": this.id,
          "status": this.status
        };
        console.log(params)
        this.$http.patch(url, params).then(response => {
          this.loadTags();
        }, response => {
          console.log("error");
        });
      }
    },
    mounted() {
      this.loadTags();
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

  #delectModal {
    height: 36%;
    width: 43%
  }

  #editModal {
    height: 44%;
    width: 43%;
  }

  [type="checkbox"]:not(:checked),
  [type="checkbox"]:checked {
    left: 60px !important;
    opacity: 1;
  }
</style>
