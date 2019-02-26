import React from 'react'
import './searchBar.scss'

class SearchBar extends React.Component{
    render(){
        return (
            <div className="searchBar">
                <div className="switch-locate">
                    <span className="locate-name">上海</span>
                    <i className="icon-down-arrow"></i>
                </div>
                <div className="search-wrapper">
                    <i className="icon-search"></i>
                    <input type="text" className="search-input" placeholder="请输入关键字"/>
                </div>
                <div className="user"></div>
            </div>
        )
    }

    getList(){
        fetch('/api/test/profile', {
            method:'get',
            credentials:'include'
        })
    }


}

export default SearchBar