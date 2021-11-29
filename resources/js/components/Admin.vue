<template>
    <main>
        <html lang="en"><head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Hugo 0.88.1">
    <title>Dashboard Template · Bootstrap v4.6</title>

    <link rel="canonical" href="https://getbootstrap.com/docs/4.6/examples/dashboard/">



    <!-- Bootstrap core CSS -->
<link href="/docs/4.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">



    <!-- Favicons -->
<link rel="apple-touch-icon" href="/docs/4.6/assets/img/favicons/apple-touch-icon.png" sizes="180x180">
<link rel="icon" href="/docs/4.6/assets/img/favicons/favicon-32x32.png" sizes="32x32" type="image/png">
<link rel="icon" href="/docs/4.6/assets/img/favicons/favicon-16x16.png" sizes="16x16" type="image/png">
<link rel="manifest" href="/docs/4.6/assets/img/favicons/manifest.json">
<link rel="mask-icon" href="/docs/4.6/assets/img/favicons/safari-pinned-tab.svg" color="#563d7c">
<link rel="icon" href="/docs/4.6/assets/img/favicons/favicon.ico">
<meta name="msapplication-config" content="/docs/4.6/assets/img/favicons/browserconfig.xml">
<meta name="theme-color" content="#563d7c">


    <style>
      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }
    </style>


    <!-- Custom styles for this template -->
    <link href="dashboard.css" rel="stylesheet">
  <style type="text/css">/* Chart.js */
@keyframes chartjs-render-animation{from{opacity:.99}to{opacity:1}}.chartjs-render-monitor{animation:chartjs-render-animation 1ms}.chartjs-size-monitor,.chartjs-size-monitor-expand,.chartjs-size-monitor-shrink{position:absolute;direction:ltr;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1}.chartjs-size-monitor-expand>div{position:absolute;width:1000000px;height:1000000px;left:0;top:0}.chartjs-size-monitor-shrink>div{position:absolute;width:200%;height:200%;left:0;top:0}</style><style type="text/css">button.btn[data-v-5f0b9ba1]{display:inline-block;font-weight:300;line-height:1.25;text-align:center;white-space:nowrap;vertical-align:middle;user-select:none;border:1px solid transparent;cursor:pointer;letter-spacing:1px;transition:all .15s ease}button.btn.btn-sm[data-v-5f0b9ba1]{padding:.4rem .8rem;font-size:.8rem;border-radius:.2rem}button.btn.btn-primary[data-v-5f0b9ba1]{color:#fff;background-color:#45C8F1;border-color:#45C8F1}button.btn.btn-outline-primary[data-v-5f0b9ba1]{color:#45C8F1;background-color:transparent;border-color:#45C8F1}button.btn.btn-danger[data-v-5f0b9ba1]{color:#fff;background-color:#FF4949;border-color:#FF4949}.text-muted[data-v-5f0b9ba1]{color:#8492A6}.text-center[data-v-5f0b9ba1]{text-align:center}.drop-down-enter[data-v-5f0b9ba1],.drop-down-leave-to[data-v-5f0b9ba1]{transform:translateX(0) translateY(-20px);transition-timing-function:cubic-bezier(0.74, 0.04, 0.26, 1.05);opacity:0}.drop-down-enter-active[data-v-5f0b9ba1],.drop-down-leave-active[data-v-5f0b9ba1]{transition:all .15s}.move-left-enter[data-v-5f0b9ba1],.move-left-leave-to[data-v-5f0b9ba1]{transform:translateY(0) translateX(-80px);transition-timing-function:cubic-bezier(0.74, 0.04, 0.26, 1.05);opacity:0}.move-left-enter-active[data-v-5f0b9ba1],.move-left-leave-active[data-v-5f0b9ba1]{transition:all .15s}.no-tr[data-v-5f0b9ba1]{transition:none !important}.no-tr *[data-v-5f0b9ba1]{transition:none !important}.overlay[data-v-5f0b9ba1]{position:fixed;background:rgba(220,220,220,0.8);display:flex;align-items:center;justify-content:center;top:0;left:0;right:0;bottom:0;transition:all 0.2s ease;opacity:0;visibility:hidden}.overlay .modal[data-v-5f0b9ba1]{transition:all 0.2s ease;opacity:0;transform:scale(0.6);overflow:hidden}.overlay.show[data-v-5f0b9ba1]{opacity:1;visibility:visible}.overlay.show .modal[data-v-5f0b9ba1]{opacity:1;transform:scale(1)}.panel[data-v-5f0b9ba1]{padding:6px 10px;display:flex;width:100%;box-sizing:border-box;align-items:center;border-radius:4px;position:relative;border:1px solid #eaf7ff;background:#f7fcff;outline:none;transition:all 0.07s ease-in-out}.btn[data-v-5f0b9ba1]{cursor:pointer;box-sizing:border-box}.light-btn[data-v-5f0b9ba1]{padding:6px 10px;display:flex;width:100%;box-sizing:border-box;align-items:center;border-radius:4px;position:relative;border:1px solid #eaf7ff;background:#f7fcff;outline:none;cursor:pointer;transition:all 0.07s ease-in-out}.light-btn[data-v-5f0b9ba1]:hover{background:#e0f4ff;border-color:#8acfff}.shake[data-v-5f0b9ba1]{animation:shake-data-v-5f0b9ba1 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;transform:translate3d(0, 0, 0)}@keyframes shake-data-v-5f0b9ba1{10%,90%{transform:translate3d(-1px, 0, 0)}20%,80%{transform:translate3d(2px, 0, 0)}30%,50%,70%{transform:translate3d(-4px, 0, 0)}40%,60%{transform:translate3d(4px, 0, 0)}}.pulse[data-v-5f0b9ba1]{animation:pulse-data-v-5f0b9ba1 2s ease infinite}@keyframes pulse-data-v-5f0b9ba1{0%{opacity:.7}50%{opacity:.4}100%{opacity:.7}}.flash-once[data-v-5f0b9ba1]{animation:flash-once 3.5s ease 1}@keyframes fade-up-data-v-5f0b9ba1{0%{transform:translate3d(0, 10px, 0);opacity:0}100%{transform:translate3d(0, 0, 0);opacity:1}}.fade-in[data-v-5f0b9ba1]{animation:fade-in-data-v-5f0b9ba1 .3s ease-in-out}@keyframes fade-in-data-v-5f0b9ba1{0%{opacity:0}100%{opacity:1}}.spin[data-v-5f0b9ba1]{animation-name:spin-data-v-5f0b9ba1;animation-duration:2000ms;animation-iteration-count:infinite;animation-timing-function:linear}@keyframes spin-data-v-5f0b9ba1{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}.bounceIn[data-v-5f0b9ba1]{animation-name:bounceIn-data-v-5f0b9ba1;transform-origin:center bottom;animation-duration:1s;animation-fill-mode:both;animation-iteration-count:1}@keyframes bounceIn-data-v-5f0b9ba1{0%,20%,40%,60%,80%,100%{-webkit-transition-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1);transition-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1)}0%{opacity:1;-webkit-transform:scale3d(0.8, 0.8, 0.8);transform:scale3d(0.8, 0.8, 0.8)}20%{-webkit-transform:scale3d(1.1, 1.1, 1.1);transform:scale3d(1.1, 1.1, 1.1)}40%{-webkit-transform:scale3d(0.9, 0.9, 0.9);transform:scale3d(0.9, 0.9, 0.9)}60%{opacity:1;-webkit-transform:scale3d(1.03, 1.03, 1.03);transform:scale3d(1.03, 1.03, 1.03)}80%{-webkit-transform:scale3d(0.97, 0.97, 0.97);transform:scale3d(0.97, 0.97, 0.97)}100%{opacity:1;-webkit-transform:scale3d(1, 1, 1);transform:scale3d(1, 1, 1)}}@keyframes dots-data-v-5f0b9ba1{0%,20%{color:rgba(0,0,0,0);text-shadow:0.25em 0 0 rgba(0,0,0,0),0.5em 0 0 rgba(0,0,0,0)}40%{color:#8492A6;text-shadow:0.25em 0 0 rgba(0,0,0,0),0.5em 0 0 rgba(0,0,0,0)}60%{text-shadow:0.25em 0 0 #8492A6,0.5em 0 0 rgba(0,0,0,0)}80%,100%{text-shadow:.25em 0 0 #8492A6, .5em 0 0 #8492A6}}@keyframes recording-data-v-5f0b9ba1{0%{box-shadow:0px 0px 5px 0px rgba(173,0,0,0.3)}65%{box-shadow:0px 0px 5px 5px rgba(173,0,0,0.3)}90%{box-shadow:0px 0px 5px 5px rgba(173,0,0,0)}}body[data-v-5f0b9ba1]{margin:0;font-size:100%;color:#3C4858}a[data-v-5f0b9ba1]{text-decoration:none;color:#45C8F1}h1[data-v-5f0b9ba1],h2[data-v-5f0b9ba1],h3[data-v-5f0b9ba1],h4[data-v-5f0b9ba1]{margin-top:0}svg[data-v-5f0b9ba1]{outline:none}.container_selected_area[data-v-5f0b9ba1]{display:none;visibility:hidden;padding:0;position:fixed;top:0;left:0;right:0;bottom:0;z-index:2147483647}.container_selected_area.active[data-v-5f0b9ba1]{visibility:visible;display:block}.container_selected_area .label[data-v-5f0b9ba1]{font-family:"Didact Gothic Regular",sans-serif;font-size:22px;text-align:center;padding-top:15px}.container_selected_area .area[data-v-5f0b9ba1]{display:none;position:fixed;z-index:2147483647;border:1px solid #1e83ff;background:rgba(30,131,255,0.1);box-sizing:border-box}.container_selected_area .area.active[data-v-5f0b9ba1]{display:block;top:0;left:0}.hide[data-v-5f0b9ba1]{display:none}
</style></head>
  <body>

<nav class="p-0 shadow navbar navbar-dark sticky-top bg-dark flex-md-nowrap">
  <a class="px-3 mr-0 navbar-brand col-md-3 col-lg-2" href="#">Company name</a>
  <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search">
  <ul class="px-3 navbar-nav">
    <li class="nav-item text-nowrap">
      <a class="nav-link" href="#">Sign out</a>
    </li>
  </ul>
</nav>

<div class="container-fluid">
  <div class="row">
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse" style="">
      <div class="pt-3 sidebar-sticky">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link active" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke:currentColor;"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              Dashboard <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke:currentColor;"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
              Orders
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke:currentColor;"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
              Products
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke:currentColor;"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              Customers
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bar-chart-2" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke:currentColor;"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
              Reports
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-layers" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke:currentColor;"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
              Integrations
            </a>
          </li>
        </ul>

        <h6 class="px-3 mt-4 mb-1 sidebar-heading d-flex justify-content-between align-items-center text-muted">
          <span>Saved reports</span>
          <a class="d-flex align-items-center text-muted" href="#" aria-label="Add a new report">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke:currentColor;"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
          </a>
        </h6>
        <ul class="mb-2 nav flex-column">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke:currentColor;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              Current month
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke:currentColor;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              Last quarter
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke:currentColor;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              Social engagement
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke:currentColor;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              Year-end sale
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
      <div class="flex-wrap pt-3 pb-2 mb-3 d-flex justify-content-between flex-md-nowrap align-items-center border-bottom">
        <h1 class="h2">Dashboard</h1>
        <div class="mb-2 btn-toolbar mb-md-0">
          <div class="mr-2 btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
            <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
          </div>
          <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke:currentColor;"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            This week
          </button>
        </div>
      </div>

      <canvas class="my-4 w-100 chartjs-render-monitor" id="myChart" width="885" height="372" style="display: block; height: 276px; width: 656px;"></canvas>

      <h2>Section title</h2>
      <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Header</th>
              <th>Header</th>
              <th>Header</th>
              <th>Header</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1,001</td>
              <td>random</td>
              <td>data</td>
              <td>placeholder</td>
              <td>text</td>
            </tr>
            <tr>
              <td>1,002</td>
              <td>placeholder</td>
              <td>irrelevant</td>
              <td>visual</td>
              <td>layout</td>
            </tr>
            <tr>
              <td>1,003</td>
              <td>data</td>
              <td>rich</td>
              <td>dashboard</td>
              <td>tabular</td>
            </tr>
            <tr>
              <td>1,003</td>
              <td>information</td>
              <td>placeholder</td>
              <td>illustrative</td>
              <td>data</td>
            </tr>
            <tr>
              <td>1,004</td>
              <td>text</td>
              <td>random</td>
              <td>layout</td>
              <td>dashboard</td>
            </tr>
            <tr>
              <td>1,005</td>
              <td>dashboard</td>
              <td>irrelevant</td>
              <td>text</td>
              <td>placeholder</td>
            </tr>
            <tr>
              <td>1,006</td>
              <td>dashboard</td>
              <td>illustrative</td>
              <td>rich</td>
              <td>data</td>
            </tr>
            <tr>
              <td>1,007</td>
              <td>placeholder</td>
              <td>tabular</td>
              <td>information</td>
              <td>irrelevant</td>
            </tr>
            <tr>
              <td>1,008</td>
              <td>random</td>
              <td>data</td>
              <td>placeholder</td>
              <td>text</td>
            </tr>
            <tr>
              <td>1,009</td>
              <td>placeholder</td>
              <td>irrelevant</td>
              <td>visual</td>
              <td>layout</td>
            </tr>
            <tr>
              <td>1,010</td>
              <td>data</td>
              <td>rich</td>
              <td>dashboard</td>
              <td>tabular</td>
            </tr>
            <tr>
              <td>1,011</td>
              <td>information</td>
              <td>placeholder</td>
              <td>illustrative</td>
              <td>data</td>
            </tr>
            <tr>
              <td>1,012</td>
              <td>text</td>
              <td>placeholder</td>
              <td>layout</td>
              <td>dashboard</td>
            </tr>
            <tr>
              <td>1,013</td>
              <td>dashboard</td>
              <td>irrelevant</td>
              <td>text</td>
              <td>visual</td>
            </tr>
            <tr>
              <td>1,014</td>
              <td>dashboard</td>
              <td>illustrative</td>
              <td>rich</td>
              <td>data</td>
            </tr>
            <tr>
              <td>1,015</td>
              <td>random</td>
              <td>tabular</td>
              <td>information</td>
              <td>text</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
</div>


    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script><div id="scrnli_recorder_root"></div>
      <script>window.jQuery || document.write('<script src="/docs/4.6/assets/js/vendor/jquery.slim.min.js"><\/script>')</script><script src="/docs/4.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>


        <script src="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/feather.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.js"></script>
        <script src="dashboard.js"></script>


<iframe src="chrome-extension://ijejnggjjphlenbhmjhhgcdpehhacaal/audio-devices.html" allow="microphone" style="display: none;"></iframe><input type="file" id="" name="file" style="display: none;"><div data-v-5f0b9ba1="" class="container_selected_area" style="cursor: url(&quot;chrome-extension://ijejnggjjphlenbhmjhhgcdpehhacaal/assets/images/cursor-imagen.svg&quot;) 9 9, crosshair;"><div data-v-5f0b9ba1="" class="area"></div></div></body></html>
    </main>
</template>
