import React from 'react'

class MainCenter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            elements: ['Java', 'JavaScript', 'C', 'Node.js', 'Express', 'React', 'Redux', 'Web Developer'],
            currentWord: '',
            currentIndex: 0,
            currentWordIndex: 0,
        }
    }

    word(){
        this.setState(state => {
            return {currentWord: state.elements[state.currentIndex], currentIndex: ((state.currentIndex + 1) % state.elements.length)};
        });
        
    }

    componentDidMount(){
        setInterval(() => {
            this.word();
        }, 1000);
    }

    render(){
        
        return(
            <div className='main-center text-white'>
                <h1>Alex Rodriguez</h1>
                <p>{this.state.currentWord}</p>
            </div>
        );
    }

}

export default MainCenter;