import React from "react";
import { Link } from "react-router-dom";

const groups = [
  { name: "Frontend", items: ["React 19", "TypeScript", "Vite 7", "Tailwind CSS 4", "React Router 7", "Redux Toolkit", "React Redux", "Axios"] },
  { name: "Backend & Data", items: ["Node.js", "Express.js 4", "TypeScript", "MongoDB", "Mongoose 8", "Express Validator", "Node-cron"] },
  { name: "Security", items: ["JWT", "bcryptjs", "CORS", "Google reCAPTCHA", "dotenv"] },
  { name: "Integrations & Quality", items: ["Stripe", "Backblaze B2", "AWS S3 SDK", "Multer", "Sharp", "Mailgun", "i18next", "Jest", "React Testing Library", "ESLint"] },
];

const sections = [
  { title: "Frontend & User Experience", body: "The user interface is built with React 19, TypeScript and Vite 7. Reusable components and Tailwind CSS 4 support a responsive design. Redux Toolkit manages shared application state, React Router handles navigation, and Axios connects the interface to the backend API. i18next provides internationalization, while toast notifications and icon libraries enhance the user experience." },
  { title: "Backend, API & Database", body: "The server uses Node.js, Express.js 4 and TypeScript. It handles HTTP requests, application logic, account operations and integrations with external services. MongoDB stores application data, while Mongoose 8 defines models, schemas and document relationships. Express Validator validates incoming data." },
  { title: "Authentication & Security", body: "JWT-based authentication supports access to protected API resources. bcryptjs hashes user passwords. Input validation, CORS configuration, environment variables and Google reCAPTCHA provide additional controls. The overall security of a deployment also depends on server configuration and implementation details." },
  { title: "Payments", body: "Stripe is integrated on both sides of the application: Stripe.js and React Stripe.js on the frontend, and the Stripe SDK on the backend. This separation supports a payment experience connected to the application's business logic." },
  { title: "Cloud Storage & Image Processing", body: "Files can be stored in Backblaze B2 through its S3-compatible API using AWS SDK. Multer and Multer-S3 support uploads, while Sharp enables image resizing, compression and format conversion. This keeps uploaded media separate from the application server." },
  { title: "Email & Scheduled Tasks", body: "Mailgun.js supports transactional and system email communication. Node-cron enables recurring server-side tasks and automation of selected administrative processes." },
  { title: "Testing, Tooling & Backups", body: "Jest, React Testing Library and User Event support frontend tests. ESLint and TypeScript ESLint help maintain code quality. Development tooling includes tsx, TypeScript Compiler, tsc-alias and npm scripts. Dedicated scripts support MongoDB backup creation, listing and inspection, with mongorestore available for recovery." },
];

export default function WandalMT() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="bg-slate-950 text-white px-5 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto">
          <Link to="/" className="text-sky-300 hover:underline text-sm">← Back to portfolio</Link>
          <p className="text-sky-300 text-xs uppercase font-bold tracking-widest mt-10 mb-3">Project case study</p>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-5">WandalMT</h1>
          <p className="text-xl text-slate-300 max-w-3xl">Full Stack Web Application · React · TypeScript · Node.js · Express · MongoDB</p>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-5 py-12 sm:py-16">
        <section className="mb-14" aria-labelledby="overview-title">
          <h2 id="overview-title" className="text-3xl font-bold mb-5">Project Overview</h2>
          <p className="text-slate-700 leading-8 mb-4">WandalMT is a full-stack web application developed with JavaScript and TypeScript technologies. The frontend provides the user interface, while the backend handles business logic, data management, authentication, authorization and external service integrations.</p>
          <p className="text-slate-700 leading-8">The project follows a client-server architecture, separating presentation from server-side logic. Key areas include user management, online payments, cloud file storage, internationalization and automated server processes.</p>
        </section>

        <section className="mb-14" aria-labelledby="video-title">
          <h2 id="video-title" className="text-3xl font-bold mb-5">Project Demo</h2>
          <div className="aspect-video overflow-hidden rounded-2xl shadow-lg bg-slate-900">
            <iframe className="w-full h-full" src="https://www.youtube-nocookie.com/embed/7WXJMmEW7So" title="WandalMT video demonstration" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
          </div>
        </section>

        <section className="mb-14" aria-labelledby="stack-title">
          <h2 id="stack-title" className="text-3xl font-bold mb-7">Technology Stack</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {groups.map(({ name, items }) => <div key={name} className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm"><h3 className="text-xl font-bold mb-4">{name}</h3><div className="flex flex-wrap gap-2">{items.map(item => <span key={item} className="bg-slate-100 text-slate-700 rounded-md px-3 py-1.5 text-sm">{item}</span>)}</div></div>)}
          </div>
        </section>

        <section className="mb-14" aria-labelledby="architecture-title">
          <h2 id="architecture-title" className="text-3xl font-bold mb-5">Architecture</h2>
          <p className="text-slate-700 leading-8 mb-6">The React frontend communicates with an Express API. The server manages business logic and MongoDB persistence, and integrates with Stripe, Backblaze B2 and Mailgun. This separation supports modular development and maintenance.</p>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-white rounded-xl border border-slate-200 p-5"><h3 className="font-bold">Client</h3><p className="text-sm text-slate-600 mt-2">React · Redux · Tailwind</p></div>
            <div className="bg-white rounded-xl border border-slate-200 p-5"><h3 className="font-bold">API & Business Logic</h3><p className="text-sm text-slate-600 mt-2">Node.js · Express · TypeScript</p></div>
            <div className="bg-white rounded-xl border border-slate-200 p-5"><h3 className="font-bold">Data & Services</h3><p className="text-sm text-slate-600 mt-2">MongoDB · Stripe · B2 · Mailgun</p></div>
          </div>
        </section>

        <section className="mb-14" aria-labelledby="implementation-title">
          <h2 id="implementation-title" className="text-3xl font-bold mb-3">Technical Implementation</h2>
          <p className="text-slate-600 mb-6">Expand a topic to explore the technical approach.</p>
          <div className="space-y-3">{sections.map(({ title, body }) => <details key={title} className="group rounded-xl border border-slate-200 bg-white px-5 py-4 open:shadow-sm"><summary className="cursor-pointer font-semibold text-lg marker:text-sky-600">{title}</summary><p className="text-slate-700 leading-8 pt-4">{body}</p></details>)}</div>
        </section>

        <div className="border-t border-slate-200 pt-8"><Link to="/" className="inline-flex bg-slate-900 text-white rounded-lg px-6 py-3 font-semibold hover:bg-slate-700">← Back to all projects</Link></div>
      </div>
    </main>
  );
}