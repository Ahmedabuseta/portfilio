'use client'
import 'bootstrap/dist/css/bootstrap.css';

import { useState } from "react";
import PreviewModel from "../preview_projext/preview"
import { IProject } from "./data";
import Image from "next/image";
import './projects.css'
export default function Projects({ projects }: { projects: IProject[] }) {
  const [open, setIsOpen] = useState(false);
  const [previewProject, setPreviewProject] = useState<IProject | undefined>();

  const findProject = (id: number) => {
    const project = projects.filter((project) => project.id === id);
    if (project.length > 0) { // Check if project exists
      setPreviewProject(project[0]);
    } else {
      console.error(`Project with id ${id} not found`); // Handle non-existent project
    }
    setIsOpen(true);
  };

  return (
    <div className="d-block w-full ">
      <PreviewModel setIsOpen={setIsOpen} isOpen={open} previewProject={previewProject} />
      <div className="d-flex w-full p-3 pt-5 pb-5 justify-content-center gap-3 flex-wrap">
        {projects.map((project: IProject) => (
          <div
            key={project.id} // Add a unique key for each project
            className="col-xs-12 col-md-5 col-lg-3 position-relative project"
          >
            <div className="rounded" style={{ height: "300px" }}>
              <Image src={project.imgUrl} className="w-100 h-100 rounded flex-grow-1" alt="img" />
            </div>
            <div className="position-absolute top-0 start-0 w-100 d-flex flex-column justify-content-center align-items-center rounded text-center p-3 overlay">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <button onClick={() => findProject(project.id)} className="btn bg-info text-white">
                preview
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
