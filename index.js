let app = new Vue({
    el: '#app',
    data(){
        return{
            ShowMessageInfo:'',
            MessageJsonData:{
                '嵩山_bgis':{
                    info:'hrfdt4353edfer643534'
                },
                '泰山_bgis':{
                    info:'gdt435fdst43535werfwet'
                },
                '衡山_bgis':{
                    info:'4242342523rewr43534523'
                },
                '恒山_bgis':{
                    info:'1231254235312321432412'
                },
            }
        }
    },
    created() {
        window.SwitchInfo = this.SwitchInfo
        this.ShowMessageInfo = this.MessageJsonData.songshan.info
    },
    methods: {
        SwitchInfo(e){
            this.ShowMessageInfo = this.MessageJsonData[e].info
        }
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
function SwitchInfos(e){
    SwitchInfo(e)
}