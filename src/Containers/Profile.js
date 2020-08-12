import React, { Component } from 'react';
import List from '../Components/List/List';
import Link from '../Components/Links/Links';
import './Profile.css'
class Profile extends Component{
    state ={
        data:{},
        loading:true,
        repostories:[],
        error:''
    }

    async componentDidMount (){
        try {
            const profile = await fetch ('https://api.github.com/users/mahmoudkhdre');
        const dataJson = await profile.json();
        if(dataJson){
            const repostories = await  fetch (dataJson.repos_url);
            const repostoriesJson = await repostories.json();
            this.setState({
                data:dataJson,
                loading:false,
                repostories:repostoriesJson
            })
        }
        } catch (error) {
            this.setState({
                loading:false,
                error:error.message
            })
        }
        
    }
    render(){
        const {loading, data, repostories,error} = this.state
        if(loading || error ){
        return<div>{loading ? 'Loading...' : error}</div>
        }
        const  items= [
            {label: 'html_url', value: <Link url={data.html_url} title="Github_url" />},
            {label: 'repos_url', value:data.repos_url},
            {label: 'name', value:data.name},
            {label: 'email', value:data.email},
            {label: 'bio', value:data.bio}
        ];
        const projects = repostories.map((repostory) =>(
            {
                label: repostory.name,
                value: <Link  url={repostory.html_url} title="Github_url" />
            
            }
        ) 
        )
        return(
            <div className="Profile-container">
                <img  className="Profile-avatar" src={data.avatar_url} alt={data.html_url}/>
                <List title='Profile' items={items} />
                <List title='Projects' items={projects} />
            </div>

        )
    }
}
export default Profile;