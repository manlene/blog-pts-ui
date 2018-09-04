<template>
  <div class="article">
    <div class="article-title">
      <h2>{{article.articleTitle}}</h2>
      <span class="article-time" style="float: right"><b>{{article.createTime}}</b></span>
    </div>
    <div class="article-content" style="padding-top: 20px" v-html="article.articleContentHtml">

    </div>
    <div class="plus-tag tagbtn clearfix" style="padding-top: 20px">
            
            <a  v-for="tag in article.tags"><span>{{tag.tagName}}</span></a>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'articleDetail',
    data() {
      return {
        article:""
      }
    },
    methods: {
      showArticle() {
        var url = "/api/article/" + this.$route.query.articleId;
        this.$http.get(url).then(response => {
          var responseData = response.data;
          if (responseData.statusCode == '1000208') {
            this.article = responseData.data
          } 
        }, response => {
          console.log("error");
        });
      }
    },
    mounted() {
      this.showArticle();
    }

  }

</script>

<style>
  @import '../assets/css/markdown.css';
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
    background-position: 100% -22px;

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
