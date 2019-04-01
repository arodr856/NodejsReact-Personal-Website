import React from 'react'
import { Jumbotron, Container } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchRepos } from '../../actions/GitHubActions';

class GitHubTable extends React.Component {
    

    componentDidMount(){
        this.props.fetchRepos();
    }

    render(){
        return (
            <div>
                <Jumbotron fluid>
                    <Container fluid>
                    <h1 className="display-3">Fluid jumbotron</h1>
                    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    github: state.github
}); 

export default connect(mapStateToProps, {fetchRepos})(GitHubTable);