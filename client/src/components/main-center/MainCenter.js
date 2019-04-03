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

        setInterval(async () => {
            const word = this.state.elements[this.state.currentIndex];
            const index = this.state.currentIndex;
            const wordIndex = this.state.currentWordIndex;
            const currentWord = this.state.currentWord;

            if(wordIndex < word.length){
                await this.setState({currentWord: (currentWord + word.charAt(wordIndex)), currentWordIndex: (wordIndex + 1)});
            }else{  
                await this.setState({currentIndex: ((this.state.currentIndex + 1) % this.state.elements.length), currentWordIndex: 0, currentWord: ''});
            }
        }, 1000);
        
    }

    
    componentDidMount(){
        this.word();
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