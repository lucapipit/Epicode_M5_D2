import React, { Component } from 'react'

class SearchBar extends Component {

    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className='d-flex justify-content-center mt-2'>
                <input onChange={this.props.mySearch} className='m-2 rounded-5 px-2 py-1' type="text" placeholder='search...' />
            </div>
        )
    }
}

export default SearchBar