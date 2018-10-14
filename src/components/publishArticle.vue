<template>

  <div id="main">
    <div>标题：<input v-model="articleTitle" style="width: 95%"></div>
    <mavon-editor v-model="articleContent" ref=md @imgAdd="$imgAdd" @imgDel="$imgDel"/>
    <div class="all-tag">

      <div class="plus-tag tagbtn clearfix" id="myTags">
        <span style="float: left;">我的标签：</span>
        <a v-on:click="selectTag(tag)" href="javascript:void(0);" v-for="tag in tags" :class="{'active':tag.active,'unactive':!tag.active}"
          :value="tag.id"><span>{{tag.tagName}}</span><em></em></a>
      </div>
      <div>添加标签：<input style="width: 80%" v-model="tagName" @keyup.enter="saveTag()"> <button type="button" class="btn btn-primary"
          v-on:click.stop.prevent="saveTag()">添加</button></div>
    </div>
    <button type="button" class="btn btn-primary" v-on:click.stop.prevent="saveArticle()">保存</button>
    <button type="button" class="btn btn-primary" v-on:click.stop.prevent="saveArticle('1')">保存并发布</button>

  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: 'publishArticle',
    data() {
      return {
        tags: [],
        articleContent: "",
        tagName: "",
        tagIds: [],
        articleTitle: "",
      }
    },
    methods: {

      getAllTags() {
        var usersUrl = "/api/tag/active";
        this.$http.get(usersUrl).then(response => {
          var responseData = response.data;
          this.tags = responseData.data;
        }, response => {
          console.log("error");
        });
      },
      selectTag(tag) {
        Vue.set(tag, 'active', !tag.active);
        //标签选中
        if (tag.active && this.tagIds.indexOf(tag.id) == -1) {
          this.tagIds.push(tag.id);

        }
        //标签取消选中
        if (!tag.active && this.tagIds.indexOf(tag.id) != -1) {
          this.tagIds.splice(this.tagIds.indexOf(tag.id), 1);
        }
      },
      saveTag() {
        var url = "/api/tag/save";
        var params = {
          "tagName": this.tagName
        };
        console.log(params)
        this.$http.post(url, params).then(response => {
          var responseData = response.data;
          if (responseData.statusCode = "1000204") {
            this.getAllTags();
            this.tagName = "";
          }

        }, response => {
          console.log("error");
        });

      },
      saveArticle(status) {
        var url = "/api/article/save";
        var params = {
          "articleTitle": this.articleTitle,
          "articleContent": this.articleContent,
          "tagIds": this.tagIds,
          "status":status
        };
        console.log(params)
        this.$http.post(url, params).then(response => {
          var responseData = response.data;
          if (responseData.statusCode = "1000207") {
            alert("文章保存成功")
          }

        }, response => {
          console.log("error");
        });

      },
      // 图片上传，绑定@imgAdd event
      $imgAdd(pos, $file){
            // 第一步.将图片上传到服务器.
           var formdata = new FormData(),_this=this;
           formdata.append('image', $file);
           console.log(formdata)
           this.$http({
               url: '/api/article/uploadImage',
               method: 'post',
               data: formdata,
               headers: { 'Content-Type': 'multipart/form-data' },
           }).then((response) => {
             console.log(response.data);
              // 第二步.将返回的url替换到文本原位置![...](./0) -> ![...](url)
               /**
               * $vm 指为mavonEditor实例，可以通过如下两种方式获取
               * 1. 通过引入对象获取: `import {mavonEditor} from ...` 等方式引入后，`$vm`为`mavonEditor`
               * 2. 通过$refs获取: html声明ref : `<mavon-editor ref=md ></mavon-editor>，`$vm`为 `this.$refs.md`
               */
             if(response.data.statusCode=='1000213'){
             
              _this.$refs.md.$img2Url(pos, response.data.data);
             }
           })
        },
        $imgDel(pos){
          // this.$refs.md.$imgDel(pos);
        }
    },
    mounted() {
     
      this.getAllTags();
    }

  }

</script>
<style>
  @import 'mavon-editor/dist/css/index.css';

  .all-tag {
    padding-top: 30px;
  }

  .plus-tag {
    padding: 0 0 10px;
  }

  .tagbtn a {
    color: #333;
    display: block;
    float: left;
    height: 22px;
    line-height: 22px;
    overflow: hidden;
    margin: 0 10px 10px 0;
    padding: 0 10px 0 5px;
    white-space: nowrap;
  }

  default-tag a,
  .default-tag a span,
  .plus-tag a,
  .plus-tag a em,
  .plus-tag-add a {
    background: url(../assets/images/tagbg.png) no-repeat;
  }

  .plus-tag a {
    /* background-position: 100% -22px; */
    background-position: 100% 0px;
  }

  .active {
    background-position: 100% -22px !important;
  }

  .unactive {
    background-position: 100% 0px !important;
  }

  a,
  img {
    border: 0;
  }

  .plus-tag a span {
    float: left;
  }

  .plus-tag a em {
    display: block;
    float: left;
    margin: 5px 0 0 8px;
    width: 13px;
    height: 13px;
    overflow: hidden;
    background-position: 4px -100px;
    cursor: pointer;
  }

  a,
  a:visited {
    color: #5e5e5e;
    text-decoration: none;
  }

  .clearfix:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }

</style>
