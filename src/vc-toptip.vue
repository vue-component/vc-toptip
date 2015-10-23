<template lang="jade">
#top-tip(:class="[message.status]", v-show="show", transition="top-tip") {{ message.content }}

</template>

<script>
module.exports = {
  created: function(){
    this.$on('showTip', function(message){
      this.showTip(message);
    }.bind(this))
  },
  data: function(){
    return {
      show: false,
      message: {
        content: '',
        status: ''
      }
    }
  },
  methods: {
    showTip: function(message){
      this.show = true;
      this.message = message;
      setTimeout(function(){
        this.show = false;
      }.bind(this),2000)
    }
  }
}
</script>

<style lang="sass">
.top-tip-transition {
  transition: all .3s ease;
  overflow: hidden;
  padding: 1.41em;
}

.top-tip-enter, .top-tip-leave {
  height: 0;
  padding: 0;
}
#top-tip{
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-left: 1.41em;
  padding-right: 1.41em;
  &.error{
    color: #e94c31;
    background-color: #f8c9c1;
  }
}
</style>