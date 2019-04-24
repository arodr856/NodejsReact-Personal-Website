import React from 'react'

class MainCenter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            elements: ['Java', 'JavaScript', 'C.', 'Node.js', 'Express.js', 'React.js', 'Redux.js', 'Web Developer'],
            currentWord: '',
            currentIndex: 0,
            currentWordIndex: 0,
            typing: true
        }
    }

    word(){

        setInterval(async () => {
            const word = this.state.elements[this.state.currentIndex];
            const wordIndex = this.state.currentWordIndex;
            const currentWord = this.state.currentWord;

            if(wordIndex < word.length && this.state.typing){
                await this.setState({currentWord: (currentWord + word.charAt(wordIndex)), currentWordIndex: (wordIndex + 1)});
            }else{  
                await this.setState({typing: false});
                if(wordIndex > 0){
                    await this.setState({currentWord: currentWord.substring(0, wordIndex), currentWordIndex: wordIndex - 1});
                }else{
                    await this.setState({typing: true});
                    await this.setState({currentWord: '', currentIndex: (this.state.currentIndex + 1) % this.state.elements.length, wordIndex: 0});
                }
            }
        }, 200);
        
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