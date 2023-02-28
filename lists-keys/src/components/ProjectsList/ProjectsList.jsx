import { projectsArray } from "../../fakeAPI"


const ProjectsList = () => {

    return (
        <section className="list">

            <h1>Listado de proyectos</h1>
            {
                projectsArray.map(({ _id, name, techStack }) => {
                    return (
                        <article key={_id}>
                            <h3>{name}</h3>
                            <p>Tech Stack: {techStack}</p>
                        </article>
                    )
                })
            }
        </section>
    )
}

export default ProjectsList