import React from  'react';
// import styled from 'styled-components';
import Template from '../../components/Templates';
import './styles.css';

export default function Projects(){
    const [repos, setRepos] = React.useState([]);

    React.useEffect( () => {
        fetch(`https://api.github.com/users/ptmarmello/repos`)
        .then((response) => {
            return response.json();
        }).then((response) => {
            console.log(response);
            setRepos(response);
        })
    },[]);

    return(
        <Template headerTitle="Projects" headerLink="/projects" >
            <>
                {/* <div>
                    <div>
                        <a href="https://github.com/ptmarmello" style={{display: "flex"}} >
                            <img src={`https://github-readme-stats.vercel.app/api?username=ptmarmello&show_icons=true&theme=dark&include_all_commits=true&count_private=true`}/>
                            <img src={`https://github-readme-stats.vercel.app/api/top-langs/?username=ptmarmello&layout=compact&langs_count=8&theme=dark`}/>
                        </a>
                    </div>
                </div> */}
                <div className='projectsDiv'>
                    <ul>
                        {repos.map((repos, id) => {
                            return(
                                <li key={id}>
                                    <a href={`${repos.html_url}`}>{repos.name}</a>
                                    {repos.description && <p>{repos.description}</p>}
                                </li>
                            )
                        })}
                    </ul>
                </div>

            </>
        </Template>
    );
}