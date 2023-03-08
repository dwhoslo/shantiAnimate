let app = new Vue({
    el: '#app',
    data(){
        return{

        }
    },
    created() {
        console.log('Vue is ready!')
    },
    methods: {
        
    },
})
const slideOut = () =>{
    $('.MessageBox').animate({
        right: '0px'
    }, 500)
}
const slideIn = () =>{
    $('.MessageBox').animate({
        right: '-200px'
    }, 500)
}