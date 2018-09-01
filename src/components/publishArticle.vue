<template>

  <div id="main">
    <div>标题：<input v-model="articleTitlle" style="width: 95%"></div>
    <mavon-editor v-model="articleContent" />
    <div class="all-tag">
       
      <div class="plus-tag tagbtn clearfix" id="myTags">
          <span style="float: left;">我的标签：</span>
        <a v-on:click="selectTag(tag)" href="javascript:void(0);" v-for="tag in tags" :class="{'active':tag.active,'unactive':!tag.active}"><span>{{tag.tagName}}</span><em></em></a>
      </div>
      <div>添加标签：<input style="width: 80%"> <button type="button" class="btn btn-primary">添加</button></div>
    </div>

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
