<template>
  <div class="form-group">
    <label>Preview File Icon</label>
    <span class="file-input file-input-new"><div class="file-preview">
<div class="close fileinput-remove">×</div>
<div class="">
<div class="file-preview-thumbnails"></div>
<div class="clearfix"></div>    <div class="file-preview-status text-center text-success"></div>
<div class="kv-fileinput-error file-error-message" style="display: none;"></div>
</div>
</div>
<div class="kv-upload-progress hide"><div class="progress">
<div class="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;">
0%
</div>
</div></div>
<button type="button" title="清除选中文件" class="btn btn-default fileinput-remove fileinput-remove-button"><i class="glyphicon glyphicon-trash"></i> 移除</button>
<button type="button" title="取消进行中的上传" class="hide btn btn-default fileinput-cancel fileinput-cancel-button"><i class="glyphicon glyphicon-ban-circle"></i> 取消</button>

<div class="btn btn-primary btn-lg btn-file"> <i class="glyphicon glyphicon-folder-open"></i> &nbsp;选择 … <input id="file-3" type="file" multiple="true"></div>
</span>
</div>
</template>
 
  <script>
    export default {
      name: 'album',
      data() {
        return {
          tags: [],
          tagName: "",
          id: "",
          status: ""
        }
      },
      methods: {
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
      
      },
      mounted() {
        this.loadTags();
      }
  
    }
  
  </script>
  <style>
  @import '../assets/css/fileinput.css';
  </style>