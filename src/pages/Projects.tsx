import { useEffect, useState } from 'react';
import ProjectCard from '../component/ProjectCard';
import data from '../data/project.json';


type Project = {
    id: number,
    title: string,
    description: string,
    image: string;
};

const Projects = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    

    useEffect(() => {
        //  Simuler un changement
        setProjects(data);
    }, []);
    
    
    const [search, setSearch] = useState('');

    const filteredProjects = projects.filter((project) => 
        project.title.toLowerCase().includes(search.toLowerCase())
    );


    return (
        <section>
            <h2>Mes Projets</h2>
            <div className='filteredProjects'>
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                    />
                ))}

            <input
                type="text"
                placeholder="Rechercher un projet ..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            
            {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                    />
                ))
            ) : (
                <p>Aucun projet ne correspond à votre recherche.</p>
            )}
            </div>
        </section>
    );
};

export default Projects