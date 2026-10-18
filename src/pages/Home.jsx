import React from "react";
import { Link } from "react-router-dom";
import { textContent } from "./texthome";

const earlierProjects = [
  { id: 1, video: "1041227479", github: "https://github.com/Monika464/Club-Management-App" },
  { id: 2, video: "1041228725", github: "https://github.com/Monika464/ClubsRegister" },
  { id: 3, video: "1041230673", github: "https://github.com/Monika464/Bookkeeping" },
  { id: 4, video: "1041583293", github: "https://github.com/Monika464/navigator2--2022" },
];

const tech = ["React 19", "TypeScript", "Node.js", "Express", "MongoDB", "Redux Toolkit", "Tailwind CSS", "Stripe"];

export default function Home() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <section className="bg-slate-950 text-white px-5 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-[.22em] text-sky-300 text-xs font-bold mb-4">Featured project · Full Stack</p>
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6">WandalMT</h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed mb-7">
            A full-stack web application built with React, TypeScript, Node.js, Express and MongoDB.
            Featuring authentication, payments, cloud file storage, internationalization and server-side automation.
          </p>
          <div className="flex flex-wrap gap-2 mb-9">{tech.map((item) => <span key={item} className="rounded-full border border-slate-600 px-3 py-1 text-sm text-slate-200">{item}</span>)}</div>
          <Link to="/projects/wandalmt" className="inline-flex rounded-lg bg-sky-500 px-6 py-3 font-semibold text-slate-950 hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400">View Project Details →</Link>
          <div className="mt-12 overflow-hidden rounded-2xl border border-slate-700 shadow-2xl aspect-video">
            <iframe className="h-full w-full" src="https://www.youtube-nocookie.com/embed/7WXJMmEW7So" title="WandalMT project demonstration" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 py-16 sm:py-20" aria-labelledby="earlier-heading">
        <p className="text-sky-700 text-sm font-bold uppercase tracking-widest mb-2">Development journey</p>
        <h2 id="earlier-heading" className="text-3xl sm:text-4xl font-bold mb-3">Earlier Projects</h2>
        <p className="text-slate-600 mb-10">A selection of previous applications and experiments.</p>
        <div className="grid gap-8">
          {earlierProjects.map(({ id, video, github }) => {
            const project = textContent[id];
            if (!project) return null;
            return (
              <article key={id} className="grid md:grid-cols-2 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                <div className="aspect-video md:aspect-auto md:min-h-72 bg-slate-900">
                  <iframe className="w-full h-full min-h-64" src={`https://player.vimeo.com/video/${video}`} title={`${project.title} demonstration`} loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
                </div>
                <div className="p-7 sm:p-9 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-5">{project.body}</p>
                  <p className="text-sm text-slate-500 mb-6"><strong className="text-slate-800">Technologies:</strong> {project.tech}</p>
                  <a href={github} target="_blank" rel="noopener noreferrer" className="text-sky-700 font-semibold hover:underline w-fit">View on GitHub ↗</a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}

