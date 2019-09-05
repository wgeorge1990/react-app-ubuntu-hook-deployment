import React from 'react'
import axios from 'axios'

class Medium extends React.Component {
    state = {
        posts: []
    }
    componentDidMount() {
        this.fetchPosts().then(this.setPosts)
    }
    
    fetchPosts = () => axios.get(`https://cors.now.sh/https://us-central1-aaronklaser-1.cloudfunctions.net/medium?username=@wgeorgedev`)
    setPosts = response => {
        this.setState({
            posts: response
        })
    }

    render() {
        console.log(JSON.stringify(this.state.posts, null, 2))
        return (
            <div>
                
                    {/* <a className="button is-inverted is-outlined" href="https://medium.com/@aaron.klaser" target="_blank">
                        View My Medium
            <span className="icon" style={{ marginLeft: 5 }}>
                            <i className="fab fa-lg fa-medium"></i>
                        </span>
                    </a> */}
                
                    <pre>{JSON.stringify(this.state.posts, null, 2)}</pre>
               
            </div>
        )
    }
}
export default Medium