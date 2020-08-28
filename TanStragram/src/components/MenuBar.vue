<template>
 <div id="app">
      <div class="ui secondary  menu">
        <a class="item" href="/profile">
          Tanya
        </a>
        <a class="item active" href="/">
          Home
        </a>
        <a class="item" href="/contact">
          Create
        </a>
        <div class="right menu">
          <div class="item">
            <div class="ui icon input">
              <input type="text" placeholder="Search..." />
              <i class="search link icon"></i>
            </div>
          </div>
          <a class="ui item">
            Logout
          </a>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'MenuBar',
  data () {
    return {
      msg: 'Welcome to Tanstragram'
    }
  }
}
</script>