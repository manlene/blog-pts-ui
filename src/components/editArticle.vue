<template>

  <div id="main">
    <div>标题：<input v-model="articleTitle"></div>
    <mavon-editor v-model="articleContent" />
    <div class="all-tag">

      <div class="plus-tag tagbtn clearfix" id="myTags">
        <span style="float: left;">我的标签：</span>
        <a v-on:click="selectTag(tag)" href="javascript:void(0);" v-for="tag in tags" :class="{'active':tag.active,'unactive':!tag.active}"
          :value="tag.id"><span>{{tag.tagName}}</span><em></em></a>
      </div>
      <div>添加标签：<input style="width: 80%" v-model="tagName" @keyup.enter="saveTag()"> <button type="button" class="btn btn-primary"
          v-on:click.stop.prevent="saveTag()">添加</button></div>
    </div>
    <button type="button" class="btn btn-primary" v-on:click.stop.prevent="updateArticle()">保存</button>
    <button type="button" class="btn btn-success" v-on:click.stop.prevent="updateArticle('1')">保存并发布</button>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: 'editArticle',
    data() {
      return {
        tags: [],
        articleContent: "",
        tagName: "",
        tagIds: [],
        articleTitle: "",
        articleId: ""
      }
    },
    methods: {
      showArticle() {
        this.articleId = this.$route.query.articleId
        var url = "/api/article/" + this.articleId;
        this.$http.get(url).then(response => {
          var responseData = response.data;
          if (responseData.statusCode == '1000208') {
            var article = responseData.data
            this.articleContent = article.articleContent;
            this.articleTitle = article.articleTitle;
            this.articleTime = article.articleTime;
            //文章标签
            article.tags.forEach(tag => {
              this.tagIds.push(tag.id);
            });
            this.tags.forEach(tag => {
              //已选标签
              if (this.tagIds.indexOf(tag.id) != -1) {
                Vue.set(tag, 'active', true);
              } else {
                Vue.set(tag, 'active', false);
              }
            });
          }
        }, response => {
          console.log("error");
        });
      },
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
      updateArticle(status) {
        var url = "/api/article/update";
        var params = {
          "id":this.articleId,
          "articleTitle": this.articleTitle,
          "articleContent": this.articleContent,
          "tagIds": this.tagIds,
          "status":status
        };
        console.log(params)
        this.$http.patch(url, params).then(response => {
          var responseData = response.data;
          if (responseData.statusCode = "1000209") {
            alert("文章保存成功")
          }

        }, response => {
          console.log("error");
        });

      }
    },
    mounted() {
      this.getAllTags();
      this.showArticle();


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
