<template>
  <div>
    <div class="span12 box bordered-box green-border" style="margin-bottom:0;">
      <div class="box-header red-background">
        <button type="button" class="btn btn-primary" v-on:click="addArticle()">添加</button>
      </div>
      <div class="box-content box-no-padding" style="padding-top: 30px">
        <div class="responsive-table">
          <div class="scrollable-area">
            <table class="table table-bordered" style="margin-bottom:0;">
              <thead>
                <tr>
                  <th>
                    标题
                  </th>
                 
                  <th>
                    标签
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
                <tr v-for="article in articles">

                  <td>{{article.articleTitle}}</td>
                  
                  <td>
                    <div class="plus-tag tagbtn clearfix"> <a href="javascript:void(0);" v-for="tag in article.tags"><span>{{tag.tagName}}</span></a></div>
                  </td>
                  <td>{{article.createTime}}</td>
                  <td>{{article.statusStr}}</td>
                  <td>
                    <div class="box-header red-background">
                      <button type="button" class="btn btn-info" v-on:click="showArticleDetail(article.id)"> 查看</button>
                      <button type="button" class="btn btn-success" v-on:click="editArticle(article.id)">编辑</button>
                     
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
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
    name: 'articleList',
    data() {
      return {
        articles: [],
        tagNames: [],
        articleContent: "",
        createTime: "",
        status: ""
      }
    },
    methods: {

      loadActicle() {
        var url = "/api/article"
        this.$http.get(url).then(response => {
          var responseData = response.data;
          console.log(responseData)
          this.articles = responseData.data;
        }, response => {
          console.log("error");
        });
      },
      showArticleDetail(articleId){
        this.$router.push({path:'/articleDetail',query:{"articleId":articleId}});
      },
      addArticle(){
        this.$router.push({path:'/publishArticle'});
      },
      editArticle(articleId){
        this.$router.push({path:'/editArticle',query:{"articleId":articleId}});
      }
    },
    mounted() {
      this.loadActicle();
    }

  }

</script>
<style>
  table {
    background-color: beige;
  }

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
