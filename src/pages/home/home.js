import React from 'react'
import SearchBar from './searchBar/searchBar'
import Classify from './classify/classify'
import './home.scss'

class Home extends React.Component{
    render(){
        return (
            <div className="home-wrapper">
                {/* 头部搜索条 */}
                <SearchBar/>

                {/* 分类展示 */}
                <Classify/>

                {/* 超值特惠 */}
                <div className="preferential"></div>

                {/* 猜你喜欢 */}
                <div className="recommend"></div>
            </div>
        )
    }
}

export default Home;