
function App() {
  const navigation = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Contact",
  ];

  return (
    <div className="min-h-screen bg-[#071426] text-white">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071426]/95 backdrop-blur-lg">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 text-xl font-bold text-[#071426]">
              K
            </div>
            <span className="text-lg font-bold tracking-wide">
              KENO<span className="text-cyan-400">.DEV</span>
            </span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navigation.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-slate-300 transition hover:text-cyan-400"
              >
                {item}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="rounded-lg border border-cyan-400/40 px-5 py-2.5 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
          >
            Let's Talk
          </a>

        </nav>
      </header>

      {/* Hero Section */}
      <main>
        <section
          id="home"
          className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2"
        >

          {/* Introduction */}
          <div>
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              <span className="text-xs font-semibold tracking-[0.2em] text-cyan-300">
                SOFTWARE DEVELOPMENT · TECHNOLOGY
              </span>
            </div>

            <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Building with
              <br />
              technology.
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Creating impact.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
              Hello, I'm Keno, a Computer Science and Engineering graduate
              from Ethiopia. I'm a software developer passionate about
              building digital solutions, improving information systems,
              and exploring artificial intelligence.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-3.5 font-semibold text-slate-950 transition hover:scale-105"
              >
                Explore My Projects →
              </a>

              <a
                href="#contact"
                className="rounded-xl border border-white/20 px-7 py-3.5 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
              >
                Contact Me
              </a>
            </div>

                <div className="mt-5">
  <a
    href="https://github.com/Keno-taf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-cyan-400"
  >
    <span>⌘</span>
    Visit My GitHub Profile →
  </a>
</div>

            <div className="mt-12 flex flex-wrap gap-10 border-t border-white/10 pt-8">
              <div>
                <h3 className="text-2xl font-bold text-cyan-400">3.76</h3>
                <p className="mt-1 text-sm text-slate-400">University CGPA</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-cyan-400">BSc</h3>
                <p className="mt-1 text-sm text-slate-400">Computer Science</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-cyan-400">AI</h3>
                <p className="mt-1 text-sm text-slate-400">Technology Interest</p>
              </div>
            </div>
          </div>

          {/* Technology Illustration */}
          <div className="relative flex min-h-[420px] items-center justify-center">

            <div className="absolute h-72 w-72 rounded-full border border-cyan-400/10 sm:h-96 sm:w-96" />
            <div className="absolute h-60 w-60 rounded-full border border-blue-400/20 sm:h-80 sm:w-80" />
            <div className="absolute h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative flex h-48 w-48 items-center justify-center rounded-full border border-cyan-300/30 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 shadow-[0_0_80px_rgba(34,211,238,0.15)]">
              <span className="text-8xl font-black text-cyan-300">
                K.
              </span>
            </div>

            <div className="absolute left-0 top-16 rounded-xl border border-white/10 bg-[#142a42] px-5 py-3 text-sm text-cyan-200 shadow-xl">
              &lt;/&gt; Software
            </div>

            <div className="absolute right-0 top-28 rounded-xl border border-white/10 bg-[#142a42] px-5 py-3 text-sm text-cyan-200 shadow-xl">
              AI + Innovation
            </div>

            <div className="absolute bottom-14 left-1/2 -translate-x-1/2 rounded-xl border border-white/10 bg-[#142a42] px-5 py-3 text-sm text-cyan-200 shadow-xl">
              Build · Learn · Grow
            </div>

          </div>
        </section>
      </main>

    
{/* About Section */}
<section
  id="about"
  className="border-t border-white/10 bg-[#071426] px-6 py-24"
>
  <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">

    {/* About Introduction */}
    <div>
      <p className="mb-3 text-sm font-bold tracking-widest text-cyan-400">
        WHO I AM
      </p>

      <h2 className="text-4xl font-bold sm:text-5xl">
        About <span className="text-cyan-400">Me</span>
      </h2>

      <p className="mt-8 leading-8 text-slate-300">
        I am a Computer Science and Engineering graduate from
        Bule Hora University with a strong interest in software
        development, information systems, and emerging technologies.
      </p>

      <p className="mt-5 leading-8 text-slate-300">
        I currently work as a Junior Software Developer and
        System Improvement Officer at the Ethiopian Federal
        Civil Service Commission, contributing to the development,
        maintenance, and improvement of organizational systems.
      </p>

      <p className="mt-5 leading-8 text-slate-300">
        I enjoy solving technical problems, learning modern
        development technologies, and building applications
        that improve organizational processes.
      </p>

      <a
        href="https://github.com/Keno-taf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block rounded-lg border border-cyan-400/40 px-6 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
      >
        Explore My GitHub →
      </a>
    </div>

    {/* Education Card */}
    <div className="flex flex-col justify-center gap-6">

      <div className="rounded-2xl border border-white/10 bg-[#102238] p-8 transition hover:border-cyan-400/40">
        <p className="text-sm font-bold tracking-widest text-cyan-400">
          EDUCATION
        </p>

        <h3 className="mt-4 text-2xl font-bold">
          BSc in Computer Science and Engineering
        </h3>

        <p className="mt-3 text-slate-400">
          Bule Hora University
        </p>

        <div className="mt-6 flex flex-wrap gap-8">
          <div>
            <p className="text-3xl font-bold text-cyan-400">
              3.76
            </p>
            <p className="mt-1 text-sm text-slate-400">
              CGPA
            </p>
          </div>

          <div>
            <p className="text-3xl font-bold text-cyan-400">
              67/100
            </p>
            <p className="mt-1 text-sm text-slate-400">
              Exit Exam
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-[#102238] p-8 transition hover:border-cyan-400/40">
        <p className="text-sm font-bold tracking-widest text-cyan-400">
          PROFESSIONAL INTERESTS
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {[
            "Software Engineering",
            "Artificial Intelligence",
            "System Development",
            "Data Analytics",
            "Technology Innovation",
          ].map((interest) => (
            <span
              key={interest}
              className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>


      
{/* Skills Section */}
<section id="skills" className="border-t border-white/10 px-6 py-20">
  <div className="mx-auto max-w-6xl">
    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
      My Technical Skills
    </p>

    <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
      Technologies I Work With
    </h2>

    <p className="mb-12 max-w-2xl leading-7 text-slate-400">
      Tools and technologies I have used through academic learning,
      professional experience, and personal software projects.
    </p>

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {[
        {
          title: "Frontend Development",
          skills: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
        },
        {
          title: "Backend Development",
          skills: ["Node.js", "Express.js", "REST APIs"],
        },
        {
          title: "Database Management",
          skills: ["PostgreSQL", "SQL Server", "SQL"],
        },
        {
          title: "Tools & Data",
          skills: ["Git", "GitHub", "VS Code", "Power BI"],
        },
        {
          title: "Programming & AI",
          skills: ["Python", "Machine Learning", "Speech Recognition", "Text-to-Audio"],
        },
      ].map((category) => (
        <div
          key={category.title}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/40"
        >
          <h3 className="mb-5 text-lg font-semibold text-white">
            {category.title}
          </h3>

          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-lg border border-white/10 bg-slate-800/70 px-3 py-2 text-sm text-slate-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      
{/* Projects Section */}
<section
  id="projects"
  className="border-t border-white/10 bg-[#09182B] px-6 py-24"
>
  <div className="mx-auto max-w-7xl">

    {/* Section Heading */}
    <div className="mb-14">
      <p className="mb-3 text-sm font-bold tracking-widest text-cyan-400">
        MY WORK
      </p>

      <h2 className="text-4xl font-bold sm:text-5xl">
        Featured <span className="text-cyan-400">Projects</span>
      </h2>

      <p className="mt-5 max-w-2xl leading-8 text-slate-400">
        A selection of software development and artificial intelligence
        projects that demonstrate my technical skills and creativity.
      </p>
    </div>

    {/* Project Cards */}
    <div className="grid gap-7 md:grid-cols-2">

      {/* Project 1 */}
      <div className="group rounded-2xl border border-white/10 bg-[#102238] p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50">

        <div className="mb-6 flex h-48 items-center justify-center rounded-xl bg-gradient-to-br from-blue-900/60 to-cyan-900/40">
          <span className="text-6xl">🏢</span>
        </div>

        <div className="mb-3 flex items-center justify-between">
  <p className="text-xs font-bold tracking-widest text-cyan-400">
    WEB APPLICATION
  </p>

  <span className="rounded-full bg-green-400/10 px-3 py-1 text-xs text-green-400">
    Completed
  </span>
</div>

        <h3 className="text-2xl font-bold">
          Room Reservation System
        </h3>

        <p className="mt-4 leading-7 text-slate-400">
          An organizational room and hall reservation system
          that manages reservation requests, approval workflows,
          facilities, and user roles.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {["React", "TypeScript", "Node.js", "PostgreSQL"].map(skill => (
            <span key={skill} className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs text-cyan-300">
              {skill}
            </span>
          ))}
        </div>
<a
  href="https://github.com/Keno-taf/RoomReservationSystem"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-7 inline-block font-semibold text-cyan-400 hover:text-cyan-300"
>
  View Source Code on GitHub →
</a>
      </div>

      {/* Project 2 */}
      <div className="group rounded-2xl border border-white/10 bg-[#102238] p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50">

        <div className="mb-6 flex h-48 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-900/60 to-purple-900/40">
          <span className="text-6xl">📋</span>
        </div>

        <p className="mb-3 text-xs font-bold tracking-widest text-cyan-400">
          MANAGEMENT SYSTEM
        </p>

        <h3 className="text-2xl font-bold">
          Clearance Management System
        </h3>

        <p className="mt-4 leading-7 text-slate-400">
          A digital clearance management solution designed
          to streamline employee exit procedures, departmental
          approvals, document handling, and clearance tracking.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {["React", "Node.js", "PostgreSQL", "System Design"].map(skill => (
            <span key={skill} className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs text-cyan-300">
              {skill}
            </span>
          ))}
        </div>

        <a href="#contact" className="mt-7 inline-block font-semibold text-cyan-400 hover:text-cyan-300">
          Project Details →
        </a>
      </div>

      {/* Project 3 */}
      <div className="group rounded-2xl border border-white/10 bg-[#102238] p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50">

        <div className="mb-6 flex h-48 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-900/60 to-cyan-900/40">
          <span className="text-6xl">🔊</span>
        </div>

        <p className="mb-3 text-xs font-bold tracking-widest text-cyan-400">
          ARTIFICIAL INTELLIGENCE
        </p>

        <h3 className="text-2xl font-bold">
          Text-to-Audio Application
        </h3>

        <p className="mt-4 leading-7 text-slate-400">
          An AI-related application that converts written
          text into audio, exploring speech synthesis
          and accessible digital communication.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {["Python", "Artificial Intelligence", "Text Processing"].map(skill => (
            <span key={skill} className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs text-cyan-300">
              {skill}
            </span>
          ))}
        </div>

        <a href="#contact" className="mt-7 inline-block font-semibold text-cyan-400 hover:text-cyan-300">
          Project Details →
        </a>
      </div>

      {/* Project 4 */}
      <div className="group rounded-2xl border border-white/10 bg-[#102238] p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50">

        <div className="mb-6 flex h-48 items-center justify-center rounded-xl bg-gradient-to-br from-orange-900/60 to-pink-900/40">
          <span className="text-6xl">🎙️</span>
        </div>

        <p className="mb-3 text-xs font-bold tracking-widest text-cyan-400">
          ARTIFICIAL INTELLIGENCE
        </p>

        <h3 className="text-2xl font-bold">
          Audio-to-Text Application
        </h3>

        <p className="mt-4 leading-7 text-slate-400">
          An application that converts audio input into
          written text, exploring speech recognition
          and automated transcription.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {["Python", "AI", "Speech Recognition"].map(skill => (
            <span key={skill} className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs text-cyan-300">
              {skill}
            </span>
          ))}
        </div>

        <a href="#contact" className="mt-7 inline-block font-semibold text-cyan-400 hover:text-cyan-300">
          Project Details →
        </a>
      </div>

    </div>
  </div>
</section>

      
{/* Experience Section */}
<section id="experience" className="border-t border-white/10 px-6 py-20">
  <div className="mx-auto max-w-6xl">
    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
      My Career
    </p>

    <h2 className="mb-12 text-3xl font-bold text-white md:text-4xl">
      Professional Experience
    </h2>

    <div className="relative border-l border-cyan-400/40 pl-8">
      <div className="absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full bg-cyan-400" />

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-400">
            Current Position
          </span>

          <span className="text-sm text-slate-400">
            Ethiopia
          </span>
        </div>

        <h3 className="text-xl font-bold text-white md:text-2xl">
          Junior Software Developer and System Improvement Officer
        </h3>

        <p className="mt-2 font-medium text-cyan-400">
          Ethiopian Federal Civil Service Commission (FCSC)
        </p>

        <p className="mt-5 leading-7 text-slate-400">
          Contributing to the development, maintenance, and improvement
          of organizational information systems while supporting
          technology-driven improvements in institutional processes.
        </p>

        <h4 className="mb-3 mt-7 font-semibold text-white">
          Key Responsibilities
        </h4>

        <ul className="list-inside list-disc space-y-3 text-sm leading-6 text-slate-400">
          <li>Designing, developing, maintaining, and enhancing organizational software systems.</li>
          <li>Analyzing user requirements and translating them into system improvements.</li>
          <li>Troubleshooting technical issues and supporting system reliability.</li>
          <li>Identifying opportunities to improve existing systems and workflows.</li>
          <li>Collaborating with colleagues and stakeholders on software-related activities.</li>
        </ul>
      </div>
    </div>
  </div>
</section>


      
{/* Contact Section */}
<section id="contact" className="border-t border-white/10 px-6 py-20">
  <div className="mx-auto max-w-6xl">
    <div className="mx-auto max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
        Get In Touch
      </p>

      <h2 className="text-3xl font-bold text-white md:text-4xl">
        Let's Work Together
      </h2>

      <p className="mt-5 leading-7 text-slate-400">
        I'm interested in software development opportunities,
        technology projects, and collaborations.
        Feel free to connect with me.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <a
          href="mailto:keno63tha@gmail.com"
          className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          Send Me an Email →
        </a>

        <a
          href="https://github.com/Keno-taf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
        >
          GitHub Profile
        </a>
      </div>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Keno. Built with React and TypeScript.
      </footer>
    </div>

  );
}

export default App;
