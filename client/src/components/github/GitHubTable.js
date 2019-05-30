import React from 'react'
import { Table } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchRepos } from '../../actions/GitHubActions';
import './styles.css';

class GitHubTable extends React.Component {
    

    componentDidMount(){
        this.props.fetchRepos();
    }

    render(){
        return (
            <div className='github'>
                <div className='container'>
                    <Table bordered responsive>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Language</th>
                                <th>Date Created</th>
                                <th>GitHub URL</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.github.repos.map(({name, language, html_url, clone_url, created_at, description}) => {
                                return (
                                    <tr key={name}>
                                        <td>{name}</td>
                                        <td><div className='desc_col'><p>{description === null ? 'N/A' : description}</p></div></td>
                                        <td>{language}</td>
                                        <td>{created_at}</td>
                                        <td>{<a href={html_url}>Go to GitHub</a>}</td>
                                    </tr>
                                );  
                            })}
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    github: state.github
}); 

export default connect(mapStateToProps, {fetchRepos})(GitHubTable);