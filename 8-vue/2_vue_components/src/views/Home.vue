<template>
  <div role="tabpanel" class="tab-pane active" id="home">
    <!-- Nav tabs -->
    <ul class="nav nav-tabs" role="tablist">
      <li role="presentation" class="active"><a href="#Message" aria-controls="Message" role="tab"
                                                data-toggle="tab">Message</a></li>
      <li role="presentation"><a href="#News" aria-controls="News" role="tab"
                                 data-toggle="tab">News</a></li>
    </ul>
    <!-- Tab panes -->
    <div class="tab-content">
      <div role="tabpanel" class="tab-pane active" id="Message">
        <ul class="list-group">
          <li class="list-group-item">
            <a href="##">message01</a>
          </li>
          <li class="list-group-item">
            <a href="##">message02</a>
          </li>
          <li class="list-group-item">
            <a href="##">message03</a>
          </li>
        </ul>
        <div class="alert alert-success" role="alert">
          <ul class="list-group">
            <li class="list-group-item">message01</li>
            <li class="list-group-item">message02</li>
            <li class="list-group-item">message03</li>
            <li class="list-group-item">message04</li>
          </ul>
        </div>
      </div>
      <div role="tabpanel" class="tab-pane" id="News">
        <ul class="list-group">
          <li class="list-group-item">
            news1
            <button type="button" class="btn btn-primary" data-toggle="button"
                    aria-pressed="false" autocomplete="off">
            </button>
          </li>
          <li class="list-group-item">
            news2
            <button type="button" class="btn btn-primary" data-toggle="button"
                    aria-pressed="false" autocomplete="off">
            </button>
          </li>
          <li class="list-group-item">
            news3
            <button type="button" class="btn btn-primary" data-toggle="button"
                    aria-pressed="false" autocomplete="off">
            </button>
          </li>
        </ul>
        <div class="alert alert-success" role="alert">
          <ul class="list-group">
            <li class="list-group-item">news1</li>
            <li class="list-group-item">news2</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>

</style>