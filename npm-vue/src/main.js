import { createApp, h } from 'vue'
//import App from './App.vue'


createApp({

    data(){
        return{
            message: 'Hello Vue!'
        };
    },
    methods:{
        reverse(){
            this.message = this.message.split('').reverse().join('');
        }
    },
    render(){
        return h('div', [
            h('p', this.message),
            h('button', { onClick: this.reverse }, 'Reverse Message')
        ]);
    },

}).mount('#app');



//createApp(App).mount('#app')
