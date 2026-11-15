import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowDown, ArrowUpRight, Github, Menu, X } from 'lucide-react'

const projects = [
  {
    type: 'Agentic security',
    title: 'Gatekeeper MCP',
    description:
      'A policy enforcement and evaluation layer for agent tool use—built to inspect intent, constrain execution, and study bypass resistance without overstating what the evidence proves.',
    detail: 'MCP · Policy evaluation · Adversarial testing',
    href: 'https://github.com/Grevanur',
    tone: 'red',
  },
  {
    type: 'Spatial security research',
    title: 'XR × Wi-Fi CSI',
    description:
      'Experimental research into coarse hand-position inference from Wi-Fi channel-state information, with reproducibility checks, synchronized capture design, and explicit measurement limits.',
    detail: 'Quest · ESP32 · CSI · Reproducible research',
    href: 'https://github.com/Grevanur',
    tone: 'light',
  },
  {
    type: 'AI systems',
    title: 'Observable Agents',
    description:
      'A working practice for making agent behavior inspectable: trace the request, tool decision, policy boundary, result, and failure—not just the final answer.',
    detail: 'Traces · Evaluations · Operational evidence',
    href: 'https://github.com/Grevanur',
    tone: 'dark',
  },
]

const practices = [
  ['01', 'Secure the action', 'Control what an agent can do, not only what it can say.'],
  ['02', 'Observe the path', 'Capture decisions, tool calls, policy checks, and failure states.'],
  ['03', 'Test the boundary', 'Use adversarial evaluation to reveal where controls actually break.'],
  ['04', 'Report the evidence', 'Separate measured results from assumptions and open questions.'],
]

function Mark({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="80" height="80" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M60 120C26.8629 120 0 93.1371 0 60V0C22.5654 0 42.2213 12.4569 52.4662 30.8691C38.4788 34.2089 28.0787 46.7902 28.0787 61.8006V63.1443C28.0787 79.9648 41.7146 93.6006 58.5353 93.6006H59.8789L59.8785 61.8006C59.8785 79.3633 74.1159 93.6006 91.6787 93.6006L91.6787 61.8006C91.6787 44.2783 77.5071 30.0661 60 30.0008L60 0H62.5352C94.2722 0 120 25.7279 120 57.4648V60C120 93.1371 93.1371 120 60 120Z" fill="currentColor" />
    </svg>
  )
}

function App() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [videoFailed, setVideoFailed] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const nav = [
    ['Work', '#work'],
    ['Approach', '#approach'],
    ['About', '#about'],
  ]

  return (
    <main className="bg-[#f4f2ed] font-manrope">
      <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-[#f4f2ed]/95 text-black backdrop-blur-md border-b border-black/10' : 'text-white'}`}>
        <nav className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 md:px-10" aria-label="Primary navigation">
          <a href="#top" className="font-italiana text-2xl tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600">GR.</a>
          <div className="hidden items-center gap-9 text-sm md:flex">
            {nav.map(([label, href]) => <a key={href} href={href} className="transition-opacity hover:opacity-55">{label}</a>)}
            <a href="https://github.com/Grevanur" target="_blank" rel="noreferrer" className={`flex items-center gap-2 border px-4 py-2 transition-colors ${scrolled ? 'border-black hover:bg-black hover:text-white' : 'border-white hover:bg-white hover:text-black'}`}>GitHub <ArrowUpRight size={15} /></a>
          </div>
          <button onClick={() => setOpen(!open)} className="p-2 md:hidden" aria-label="Toggle menu" aria-expanded={open}>{open ? <X /> : <Menu />}</button>
        </nav>
        {open && (
          <div className="border-t border-black/10 bg-[#f4f2ed] px-5 pb-7 text-black md:hidden">
            {nav.map(([label, href]) => <a key={href} onClick={() => setOpen(false)} href={href} className="block border-b border-black/10 py-4 text-2xl font-italiana">{label}</a>)}
          </div>
        )}
      </header>

      <section id="top" className="relative min-h-screen overflow-hidden bg-black text-white">
        <img src="/security-agent-hero.png" alt="" className="absolute inset-0 h-full w-full object-cover object-[62%_center] opacity-80 md:object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.56)_45%,rgba(0,0,0,0.08)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.82)_0%,transparent_52%)]" />
        <div className="noise pointer-events-none absolute inset-0 z-10 opacity-35" />
        <div className="absolute inset-y-0 right-0 w-[23%] bg-[#ff0000]/55 mix-blend-multiply max-md:w-[17%]" />
        <div className="relative z-20 mx-auto flex min-h-screen max-w-[1440px] flex-col justify-end px-5 pb-12 pt-32 md:px-10 md:pb-16">
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <p className="mb-7 max-w-[520px] text-sm leading-relaxed text-white/60 md:ml-[33%] md:text-base">Security engineering for autonomous systems, where permissions, observability, and evidence meet.</p>
            <h1 className="font-italiana text-[19vw] leading-[0.72] tracking-[-0.065em] md:text-[14vw]">
              GOWTHAM<br /><span className="ml-[8vw]">REVANUR</span>
            </h1>
          </motion.div>
          <div className="mt-12 flex items-end justify-between border-t border-white/30 pt-6">
            <div>
              <p className="text-base font-semibold">Security Engineer</p>
              <p className="mt-1 text-sm text-white/55">Agentic AI · Cybersecurity · Observability</p>
            </div>
            <a href="#work" aria-label="Explore selected work" className="flex h-12 w-12 items-center justify-center rounded-full border border-white transition-colors hover:bg-white hover:text-black"><ArrowDown size={20} /></a>
          </div>
        </div>
      </section>

      <section id="work" className="px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-10 border-b border-black pb-10 md:grid-cols-12">
            <h2 className="font-italiana text-6xl tracking-tight md:col-span-8 md:text-[8rem] md:leading-none">Selected systems</h2>
            <p className="max-w-sm self-end leading-relaxed text-black/65 md:col-span-4">Work at the edge of security and autonomy—designed to make powerful systems constrained, observable, and accountable.</p>
          </div>
          <div>
            {projects.map((project, index) => (
              <motion.article key={project.title} initial={reduceMotion ? false : { opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.65 }} className={`group grid min-h-[420px] border-b border-black md:grid-cols-12 ${project.tone === 'red' ? 'bg-[#ff0000] text-white' : project.tone === 'dark' ? 'bg-black text-white' : ''}`}>
                <div className="flex flex-col justify-between p-7 md:col-span-3 md:p-10">
                  <span className="font-italiana text-4xl">{String(index + 1).padStart(2, '0')}</span>
                  <p className="mt-16 text-sm">{project.type}</p>
                </div>
                <div className="flex flex-col justify-center p-7 md:col-span-6 md:p-10">
                  <h3 className="font-italiana text-5xl tracking-tight md:text-7xl">{project.title}</h3>
                  <p className={`mt-8 max-w-2xl text-lg leading-relaxed ${project.tone === 'light' ? 'text-black/65' : 'text-white/70'}`}>{project.description}</p>
                  <p className={`mt-8 text-sm ${project.tone === 'light' ? 'text-black/50' : 'text-white/50'}`}>{project.detail}</p>
                </div>
                <div className="flex items-end justify-end p-7 md:col-span-3 md:p-10">
                  <a href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.title} work on GitHub`} className={`flex h-16 w-16 items-center justify-center rounded-full border transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 ${project.tone === 'light' ? 'border-black' : 'border-white'}`}><ArrowUpRight /></a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="bg-[#111] px-5 py-24 text-white md:px-10 md:py-36">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="font-italiana text-6xl leading-[0.95] md:text-[7.5rem]">Trust is an observable system.</p>
            </div>
            <div className="md:col-span-7 md:pl-12">
              {practices.map(([num, title, desc]) => (
                <div key={num} className="grid grid-cols-[44px_1fr] gap-4 border-t border-white/25 py-7 md:grid-cols-[70px_1fr_1fr]">
                  <span className="text-sm text-[#ff0000]">{num}</span>
                  <h3 className="text-xl">{title}</h3>
                  <p className="col-start-2 text-sm leading-relaxed text-white/55 md:col-start-3">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative min-h-screen w-full bg-[#FF0000] flex flex-col z-10">
        <div className="flex-1 flex flex-col items-center w-full pt-[100px] md:pt-[240px]">
          <div className="flex flex-col items-center w-full px-8 text-center z-20 relative max-w-[900px] h-auto md:min-h-[620px] mx-auto">
            <Mark className="mb-12 text-white" />
            <p className="text-white text-[16px] min-h-[100px] w-full max-w-[440px] leading-[1.6] mb-[40px] uppercase tracking-wider mx-auto">
              I build security systems that make autonomous software safer to trust, easier to inspect, and harder to misuse.
            </p>
            <div className="font-marck text-white text-[100px] md:text-[120px] leading-none mb-[32px]">G.R</div>
            <div className="text-white leading-[1.6] mb-[100px] md:mb-24 w-full flex flex-col items-center font-light">
              <p className="mb-[24px] text-[16px] w-[440px] max-w-full text-center">
                I Work Across Cybersecurity, Agentic AI, And Observability—Studying How Autonomous Systems Choose Actions, Cross Boundaries, And Leave Evidence Behind.
              </p>
              <p className="text-[16px] w-[440px] max-w-full text-center">
                My Goal Is Practical: Build Controls That Survive Contact With Reality, Then Measure Their Limits With The Same Rigor Used To Design Them.
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-full shrink-0 bg-[#ff0000]">
          <div className="absolute top-0 left-0 w-full h-[100px] bg-gradient-to-b from-[#FF0000] to-transparent z-10 pointer-events-none" />
          {videoFailed ? (
            <div className="relative aspect-[16/8] min-h-[260px] overflow-hidden bg-black" role="img" aria-label="Abstract security signal visualization">
              <motion.div className="absolute left-1/2 top-1/2 h-[85vw] w-[85vw] -translate-x-1/2 -translate-y-1/2 rounded-full border-[2px] border-[#ff0000]" animate={reduceMotion ? undefined : { scale: [0.35, 1], opacity: [0.9, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeOut' }} />
              <motion.div className="absolute left-1/2 top-1/2 h-[62vw] w-[62vw] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ff0000]" animate={reduceMotion ? undefined : { scale: [0.45, 1.25], opacity: [0.8, 0] }} transition={{ duration: 4, delay: 1.3, repeat: Infinity, ease: 'easeOut' }} />
              <div className="absolute inset-x-0 top-1/2 h-px bg-[#ff0000]/60" />
              <div className="absolute inset-y-0 left-1/2 w-px bg-[#ff0000]/60" />
              <div className="absolute bottom-8 left-8 text-xs text-white/55 md:bottom-12 md:left-12">SIGNAL / POLICY / TRACE / EVIDENCE</div>
            </div>
          ) : (
            <video autoPlay loop muted playsInline onError={() => setVideoFailed(true)} className="w-full h-auto block object-contain" aria-label="Abstract motion study">
              <source src="https://res.cloudinary.com/daklr2whx/video/upload/v1778602552/track-video_2_s9lp53.mp4" type="video/mp4" />
            </video>
          )}
        </div>
      </section>

      <footer className="bg-[#f4f2ed] px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <p className="max-w-4xl font-italiana text-6xl leading-[0.95] tracking-tight md:text-[8rem]">Let’s make autonomy accountable.</p>
          <div className="mt-20 flex flex-col gap-8 border-t border-black pt-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-semibold">Gowtham Revanur</p>
              <p className="mt-1 text-sm text-black/55">M.S. Computer Science · Georgia State University · 2027</p>
            </div>
            <a href="https://github.com/Grevanur" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-lg hover:text-[#ff0000]">Continue on GitHub <Github size={20} /></a>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default App
