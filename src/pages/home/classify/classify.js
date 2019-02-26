import React from 'react'
import './classify.scss'
//import Swiper from 'swiper/dist/js/swiper'
//import 'swiper/dist/css/swiper.min.css'


class Classify extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count:0,
            swiperList:[]
        }
    }

    render(){
        return (
            <div className="classify-wrap">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {this.renderSlide()}
                    </div>
                    {/* <!-- 如果需要分页器 --> */}
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        )
    }

    renderSlide(){
        return (
            this.state.swiperList.map(item =>
                <div className="swiper-slide" key={item.pageId}>{this.renderItem(item.list)}</div>
            )
        )
    }

    renderItem(list){
        return (
            list.map(item => 
                <div className="swiper-item" key={item.id}>
                    <img className="item-icon" src={item.icon} alt={item.name}/>
                    <div className="item-name">{item.name}</div>
                </div>
            )
        )
    }

    componentDidMount(){
        this.getClassifyInfo()
        /* var mySwiper = new Swiper('.swiper-container', {

        })
        console.log(mySwiper) */

    }

    getClassifyInfo(){
        fetch("/api/dianping/classify",{
            method:"GET",
            credentials: 'include'
        }).then(res=>{
            return res.json()
        }).then(res=>{
            console.log(res.data)
            this.setState({
                swiperList:res.data || []
            })
        })
    }

}

export default Classify