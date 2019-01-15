import React, {Component} from 'react'
import './Home.css'

class Home extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <div className='home-container'>
                <div className='image-overlay' />
            {/* <img src='http://www.zotographics.com/blog_img//istock_000053598896_large_korr2.jpg' alt="visual effect"/> */}
            </div>
        )
    }
}

export default Home