import React from "react";
import { notFound } from "next/navigation";
import { getProjectById, getRelatedProjects, projectsData } from "@/lib/projectData";
import ProjectClient from "./project-client";

// Generate static params for all projects
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id.toString(),
  }))
}

// Generate metadata for each project
export async function generateMetadata({ params }: { params: { id: string } }) {
  const project = getProjectById(parseInt(params.id));
  
  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} - Devoted Studio Project`,
    description: project.description || `${project.title} project by Devoted Studio. ${project.size} in ${project.location}.`,
    keywords: `${project.title}, ${project.category} project, ${project.location}, devoted studio portfolio`,
  }
}

export default function Page({ params }: { params: { id: string } }) {
  const projectId = parseInt(params.id, 10);
  const project = getProjectById(projectId);

  if (!project) {
    notFound();
  }

  const relatedProjects =
    project.otherProjects ||
    getRelatedProjects(project.category, projectId).map((p) => ({
      id: p.id,
      title: p.title,
      imageUrl: p.images[0]?.src || "",
    }));

  return <ProjectClient project={project} relatedProjects={relatedProjects} />;
} 