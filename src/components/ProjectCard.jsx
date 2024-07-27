// components/ProjectCard.js
import React from 'react';
import { CgDetailsMore } from 'react-icons/cg';
import { IoEyeSharp } from 'react-icons/io5';

export function ProjectCard({ image, alt, title, description, demoLink, detailsLink }) {
  return (
    <div className="relative">
      <img
        src={image}
        alt={alt}
        title={title}
        className="mt-5 w-full h-56 object-cover rounded-lg hover:border-green-700 hover:border-[0.2rem]"
      />
      <div className="flex items-center justify-between mt-3">
        <div>
          <p className="font-bold text-lg">{title}</p>
          <p className="text-sm text-zinc-400">{description}</p>
        </div>
        <div className="flex gap-2 font-extralight">
          <a
            href={demoLink}
            title="Visualizar projeto"
            target="_blank"
            className="p-2 bg-zinc-700 rounded-md hover:bg-zinc-800"
          >
            <IoEyeSharp size={30} />
          </a>
          <a
            href={detailsLink}
            title="Detalhes do Projeto"
            target="_blank"
            className="flex p-2 bg-zinc-700 rounded-md hover:bg-zinc-800"
          >
            <CgDetailsMore size={30} />
          </a>
        </div>
      </div>
    </div>
  );
}
