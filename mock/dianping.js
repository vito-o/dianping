var Mock = require('mockjs')
var express = require('express')
var router = express.Router();


router.use('/classify', (req,res)=>{
    var data = Mock.mock({
        code:0,
        data:function(){
            let res = []
            for(let i=0; i<3; i++){
                res.push({
                    pageId:Mock.Random.id(),
                    list:[
                        {id:Mock.Random.id(), name:'美食', icon:iconUrl('meishi')},
                        {id:Mock.Random.id(), name:'猫眼电影', icon:iconUrl('maoyandianying')},
                        {id:Mock.Random.id(), name:'酒店', icon:iconUrl('jiudian')},
                        {id:Mock.Random.id(), name:'休闲娱乐', icon:iconUrl('xiuxianyule')},
                        {id:Mock.Random.id(), name:'外卖', icon:iconUrl('waimai')},
                        {id:Mock.Random.id(), name:'火锅', icon:iconUrl('huoguo')},
                        {id:Mock.Random.id(), name:'丽人', icon:iconUrl('liren')},
                        {id:Mock.Random.id(), name:'购物', icon:iconUrl('gouwu')},
                        {id:Mock.Random.id(), name:'周边游', icon:iconUrl('zhoubianyou')},
                        {id:Mock.Random.id(), name:'KTV', icon:iconUrl('ktv')},
                    ]
                })
            }
            return res

            function iconUrl(name){
                return `/classify/${name}.png`
            }
        },
        message:'操作成功'
    })

    return res.json(data)
})

module.exports = router