import React from 'react'
import './styles.css'

class SocialBar extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            socialSites:[
                {
                    name: 'GitHub',
                    url: 'https://github.com/arodr856',
                    icon: 'github_logo.png'
                },
                {
                    name: 'LinkedIn',
                    url: 'https://www.linkedin.com/in/alex-rodriguez-45788b127/',
                    icon: 'linkedin_logo.png'
                }
            ]
        }
    }

    render(){
        return (
            <div className='social-bar'>
                {this.state.socialSites.map(item => {
                    return (
                        <div className='socialbar-item'>
                            <a href={item.url}>
                                <img src={`/social-icons/${item.icon}`}></img>
                            </a>
                        </div>
                    );
                })}
            </div>
        )
    }
}

export default SocialBar;