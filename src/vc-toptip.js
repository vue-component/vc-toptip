;(function(){
  var vcToptip = {
    install: function(Vue){
      Vue.component('vcToptip', {
        template: '<div id="vc-toptip" :class="[message.status]" v-show="show", transition="vc-toptip">{{ message.content }}</div>',
        created: function(){
          console.log('created');
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
            }.bind(this), message.duration || 2000)
          }
        }
      })
    }
  }

  if (typeof exports == "object") {
    module.exports = vcToptip;
  } else if (typeof define == "function" && define.amd) {
    define([], function(){ return vcToptip});
  } else if (window.Vue) {
    console.log('running');
    window.vcToptip = vcToptip;
    Vue.use(vcToptip);
  };
})()