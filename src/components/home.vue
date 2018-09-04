<template>
  <div id="wrapper">
    <nav class="navbar navbar-default top-navbar" role="navigation">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle waves-effect waves-dark" data-toggle="collapse" data-target=".sidebar-collapse">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand waves-effect waves-dark" href="index.html">
          <i class="large material-icons">track_changes</i>
          <strong>我的博客</strong>
        </a>

        <div id="sideNav" href="">
          <i class="material-icons dp48">toc</i>
        </div>
      </div>

      <ul class="nav navbar-top-links navbar-right">
        <li>
          <a class="dropdown-button waves-effect waves-dark" href="#!" data-activates="dropdown4">
            <i class="fa fa-envelope fa-fw"></i>
            <i class="material-icons right">arrow_drop_down</i>
          </a>
          <ul id="dropdown4" class="dropdown-content dropdown-tasks w250 taskList">
            <li>
              <div>
                <strong>John Doe</strong>
                <span class="pull-right text-muted">
                  <em>Today</em>
                </span>
              </div>
              <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>

            </li>
            <li class="divider"></li>
            <li>
              <div>
                <strong>John Smith</strong>
                <span class="pull-right text-muted">
                  <em>Yesterday</em>
                </span>
              </div>
              <p>Lorem Ipsum has been the industry's standard dummy text ever since an kwilnw...</p>

            </li>
            <li class="divider"></li>
            <li>
              <a href="#">
                <div>
                  <strong>John Smith</strong>
                  <span class="pull-right text-muted">
                    <em>Yesterday</em>
                  </span>
                </div>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the...</p>
              </a>
            </li>
            <li class="divider"></li>
            <li>
              <a class="text-center" href="#">
                <strong>Read All Messages</strong>
                <i class="fa fa-angle-right"></i>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a class="dropdown-button waves-effect waves-dark" href="#!" data-activates="dropdown3">
            <i class="fa fa-tasks fa-fw"></i>
            <i class="material-icons right">arrow_drop_down</i>
          </a>
          <ul id="dropdown3" class="dropdown-content dropdown-tasks w250">
            <li>
              <a href="#">
                <div>
                  <p>
                    <strong>Task 1</strong>
                    <span class="pull-right text-muted">60% Complete</span>
                  </p>
                  <div class="progress progress-striped active">
                    <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                      aria-valuemax="100" style="width: 60%">
                      <span class="sr-only">60% Complete (success)</span>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li class="divider"></li>
            <li>
              <a href="#">
                <div>
                  <p>
                    <strong>Task 2</strong>
                    <span class="pull-right text-muted">28% Complete</span>
                  </p>
                  <div class="progress progress-striped active">
                    <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="28" aria-valuemin="0"
                      aria-valuemax="100" style="width: 28%">
                      <span class="sr-only">28% Complete</span>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li class="divider"></li>
            <li>
              <a href="#">
                <div>
                  <p>
                    <strong>Task 3</strong>
                    <span class="pull-right text-muted">60% Complete</span>
                  </p>
                  <div class="progress progress-striped active">
                    <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                      aria-valuemax="100" style="width: 60%">
                      <span class="sr-only">60% Complete (warning)</span>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li class="divider"></li>
            <li>
              <a href="#">
                <div>
                  <p>
                    <strong>Task 4</strong>
                    <span class="pull-right text-muted">85% Complete</span>
                  </p>
                  <div class="progress progress-striped active">
                    <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="85" aria-valuemin="0"
                      aria-valuemax="100" style="width: 85%">
                      <span class="sr-only">85% Complete (danger)</span>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li class="divider"></li>
            <li>
            </li>
          </ul>
        </li>
        <li>
          <a class="dropdown-button waves-effect waves-dark" href="#!" data-activates="dropdown2">
            <i class="fa fa-bell fa-fw"></i>
            <i class="material-icons right">arrow_drop_down</i>
          </a>
          <ul id="dropdown2" class="dropdown-content w250">
            <li>
              <div>
                <i class="fa fa-comment fa-fw"></i> New Comment
                <span class="pull-right text-muted small">4 min</span>
              </div>

            </li>
            <li class="divider"></li>
            <li>
              <div>
                <i class="fa fa-twitter fa-fw"></i> 3 New Followers
                <span class="pull-right text-muted small">12 min</span>
              </div>

            </li>
            <li class="divider"></li>
            <li>
              <div>
                <i class="fa fa-envelope fa-fw"></i> Message Sent
                <span class="pull-right text-muted small">4 min</span>
              </div>

            </li>
            <li class="divider"></li>
            <li>
              <div>
                <i class="fa fa-tasks fa-fw"></i> New Task
                <span class="pull-right text-muted small">4 min</span>
              </div>

            </li>
            <li class="divider"></li>
            <li>
              <div>
                <i class="fa fa-upload fa-fw"></i> Server Rebooted
                <span class="pull-right text-muted small">4 min</span>
              </div>

            </li>
            <li class="divider"></li>
            <li>
              <a class="text-center" href="#">
                <strong>See All Alerts</strong>
                <i class="fa fa-angle-right"></i>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a class="dropdown-button waves-effect waves-dark" href="#!" data-activates="dropdown1">
            <i class="fa fa-user fa-fw"></i>
            <b>{{loginName}}</b>
            <i class="material-icons right">arrow_drop_down</i>
          </a>
          <ul id="dropdown1" class="dropdown-content">
            <li>
              <a href="#">
                <i class="fa fa-user fa-fw"></i> My Profile</a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-gear fa-fw"></i> Settings</a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-sign-out fa-fw"></i> Logout</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    <!-- Dropdown Structure -->
    <!--/. NAV TOP  -->
    <nav class="navbar-default navbar-side" role="navigation">
      <div class="sidebar-collapse">
        <ul class="nav" id="main-menu">
          <li>
            <router-link to="/user"><i class="fa fa-sitemap"></i> 用户管理</router-link>
          </li>

          <li>
            <a href="chart.html" class="waves-effect waves-dark">
              <i class="fa fa-bar-chart-o"></i> 相册管理</a>
          </li>
          <li>
            <a href="#" class="waves-effect waves-dark">
              <i class="fa fa-edit"></i>文章管理
              <span class="fa arrow"></span>
            </a>
            <ul class="nav nav-second-level collapse">
              <li>
                <router-link to="/articleList">文章列表</router-link>
              </li>
              <li>
                <router-link to="/publishArticle">添加文章</router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link to="/tag"> <i class="fa fa-fw fa-file"></i>标签管理</router-link>
          </li>

        </ul>

      </div>

    </nav>
    <!-- /. NAV SIDE  -->

    <div id="page-wrapper">
      <div class="header">
        <h4 class="page-header">

        </h4>
        <ol class="breadcrumb">
          <li>
            <a href="#">首页</a>
          </li>
          <li>
            <a href="#">文章管理</a>
          </li>
          <li class="active"></li>
        </ol>

      </div>
      <div id="page-inner">
        <router-view></router-view>
      </div>

      <footer>
        <p style="text-align: center">
            ©2018 manlene
        </p>
      </footer>
    </div>
    
  </div>


</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        loginName: ''
        
      }
    },
    methods: {
      loadLoginName() {
        this.loginName = localStorage.getItem("loginName");
        console.log("loginName:" + this.loginName);
      }
    },
    mounted() {
      this.loadLoginName();
    }

  }

</script>

<style>
  @import '../assets/materialize/css/materialize.min.css';
  @import '../assets/css/bootstrap.css';
  @import '../assets/css/font-awesome.css';
  @import '../assets/js/morris/morris-0.4.3.min.css';
  @import '../assets/css/custom-styles.css';
  @import '../assets/css/bootstrap-theme.min.css';
  @import '../assets/js/Lightweight-Chart/cssCharts.css';

</style>
