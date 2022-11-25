import React from "react"
import Project from "./project"
import { arrayOf, shape, ProjectType } from "../../types"

const Projects = ({ projects }) => (
  <>
    <h5 className="font-header font-semibold text-front text-sm uppercase mb-3">
      Projects
    </h5>
    <h4 className="font-header font-semibold text-front text-sm uppercase mb-3">
    Work
    <div class="work">
    {
      projects.map((project, i) => (
        project.type.toLowerCase() ==="work" &&(    
        <Project key={`${project.name}_${i}`} {...project} />
      )))
      }
    </div>
    </h4>
    <h4 className="font-header font-semibold text-front text-sm uppercase mb-3">
    Personal
    <div class="personal">
    {
      projects.map((project, i) => (
        project.type.toLowerCase() ==="personal" &&(    
        <Project key={`${project.name}_${i}`} {...project} />
      )))
      }
    </div>
    </h4>
    
  </>
)

Projects.propTypes = {
  projects: arrayOf(shape(ProjectType)),
}

export default Projects