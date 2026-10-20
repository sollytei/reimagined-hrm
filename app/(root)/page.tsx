'use client'

import { useEffect, useState } from 'react'
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronDown,
  Clock3,
  Menu,
  Play,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from 'lucide-react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const features = [
  {
    icon: Users,
    title: 'One home for your people',
    text: 'Keep profiles, documents, and important moments organized in one calm, connected workspace.',
  },
  {
    icon: Clock3,
    title: 'Automate the busywork',
    text: 'Make onboarding, time off, and approvals flow smoothly with simple, flexible automation.',
  },
  {
    icon: BarChart3,
    title: 'See what matters',
    text: 'Turn everyday people data into clear insights that help your team move forward.',
  },
]

const logos = ['Northstar', 'morrow', 'Kindred', 'Hatch', 'FIELDWORK']


const demoSchema = z.object({
  firstName: z.string().trim().min(1, 'First name is required.'),
  lastName: z.string().trim().min(1, 'Last name is required.'),
  email: z.string().trim().email('Enter a valid work email.'),
  company: z.string().trim().min(1, 'Company is required.'),
  jobTitle: z.string().trim().min(1, 'Job title is required.'),
  companySize: z.string().trim().min(1, 'Company size is required.'),
  message: z.string().trim().min(1, 'Message is required.'),
})

type DemoFormValues = z.infer<typeof demoSchema>

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [demoOpen, setDemoOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [demoDetails, setDemoDetails] = useState<DemoFormValues | null>(null)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<DemoFormValues>({
    resolver: zodResolver(demoSchema),
    mode: 'onBlur',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      companySize: '',
      jobTitle: '',
      message: '',
    },
  })

   useEffect(() => {
    if (demoOpen) {
      setSubmitted(false)
      reset()
    }
  }, [demoOpen])

  const openDemo = () => {
    setDemoOpen(true)
  }
  // const openDemo = () => {
  //   setSubmitted(false)
  //   setDemoOpen(true)
  // }

  const submitDemo: SubmitHandler<DemoFormValues> = (data) => {
    setDemoDetails(data)
    console.log('Demo form submitted:', data)
    setSubmitted(true)
    setDemoOpen
  }

  // const submitDemo = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault()
  //   setSubmitted(true)
  // }

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f7f2] text-[#17201b]">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <nav className="flex h-20 items-center justify-between border-b border-[#17201b]/10" aria-label="Main navigation">
          <a href="#top" className="flex items-center gap-2.5 font-semibold tracking-[-0.04em] text-[1.15rem]">
            <span className="flex size-8 items-center justify-center rounded-[10px] bg-[#d5f35f] text-[#17201b]" aria-hidden="true"><Sparkles size={17} /></span>
            peoplewise
          </a>
          <div className="hidden items-center gap-8 text-sm text-[#52605a] md:flex">
            <a href="#product" className="transition-colors hover:text-[#17201b]">Product</a>
            <a href="#why" className="transition-colors hover:text-[#17201b]">Why Peoplewise</a>
            <a href="#customers" className="transition-colors hover:text-[#17201b]">Customers</a>
            <a href="#pricing" className="transition-colors hover:text-[#17201b]">Pricing</a>
          </div>
          <div className="hidden items-center gap-5 text-sm md:flex">
            <a href="#login" className="text-[#52605a] hover:text-[#17201b]">Sign in</a>
            <a href="#demo" onClick={(event) => { event.preventDefault(); openDemo() }} className="rounded-full bg-[#17201b] px-5 py-2.5 font-medium text-white transition-transform hover:-translate-y-0.5">Book a demo <ArrowRight className="ml-1 inline" size={15} /></a>
          </div>
          <button className="rounded-lg p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>
        {menuOpen && <div className="flex flex-col gap-4 border-b border-[#17201b]/10 py-5 text-sm md:hidden"><a href="#product" onClick={() => setMenuOpen(false)}>Product</a><a href="#why" onClick={() => setMenuOpen(false)}>Why Peoplewise</a><a href="#customers" onClick={() => setMenuOpen(false)}>Customers</a><a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a><a href="#demo" onClick={(event) => { event.preventDefault(); openDemo() }} className="font-semibold">Book a demo <ArrowRight className="ml-1 inline" size={15} /></a></div>}

        <section id="top" className="relative grid min-h-[650px] items-center gap-12 py-16 lg:grid-cols-[1.05fr_.95fr] lg:py-24">
          <div className="relative z-10 max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#17201b]/15 bg-white/60 px-3.5 py-2 text-xs font-medium text-[#52605a]"><span className="size-2 rounded-full bg-[#cfef4c]" /> HR that feels human</div>
            <h1 className="max-w-3xl text-[clamp(3.6rem,8vw,7rem)] font-medium leading-[.91] tracking-[-0.075em]">Make work<br /><span className="text-[#71826e]">work better.</span></h1>
            <p className="mt-8 max-w-md text-base leading-7 text-[#52605a] sm:text-lg">Peoplewise brings your people, processes, and culture together—so your team can focus on doing their best work.</p>
            <div className="mt-9 flex flex-wrap items-center gap-4"><a href="#demo" onClick={(event) => { event.preventDefault(); openDemo() }} className="rounded-full bg-[#17201b] px-6 py-3.5 text-sm font-medium text-white transition-transform hover:-translate-y-0.5">Book a demo <ArrowRight className="ml-2 inline" size={16} /></a><a href="#product" className="flex items-center gap-2 text-sm font-medium text-[#52605a] hover:text-[#17201b]"><span className="flex size-9 items-center justify-center rounded-full border border-[#17201b]/20"><Play size={13} fill="currentColor" /></span> See how it works</a></div>
          </div>
          <div className="relative mx-auto w-full max-w-[590px]">
            <div className="absolute -right-10 -top-10 size-40 rounded-full bg-[#d5f35f] blur-[1px] sm:size-56" />
            <div className="absolute -bottom-12 -left-12 size-48 rounded-full bg-[#e7d9ff] sm:size-64" />
            <div className="relative rounded-[2rem] border border-[#17201b]/10 bg-[#fffef9] p-3 shadow-[0_24px_80px_rgba(34,50,41,.13)] sm:p-5">
              <div className="flex items-center justify-between border-b border-[#17201b]/10 px-2 pb-4"><div className="flex items-center gap-2 text-sm font-semibold"><span className="size-2 rounded-full bg-[#ff9b71]" /> Good morning, Maya</div><div className="flex gap-1.5"><span className="size-2 rounded-full bg-[#d9ddd7]" /><span className="size-2 rounded-full bg-[#d9ddd7]" /></div></div>
              <div className="grid gap-3 pt-4 sm:grid-cols-[1fr_1.2fr]"><div className="rounded-2xl bg-[#f1f4ec] p-4"><p className="text-xs text-[#718078]">Your team</p><p className="mt-2 text-3xl font-medium tracking-[-.06em]">248</p><p className="mt-1 text-xs text-[#718078]">people doing great work</p><div className="mt-8 flex -space-x-2">{['#efc3aa','#b9c8f2','#d5f35f','#d8c2ed'].map((c, i) => <span key={i} className="size-8 rounded-full border-2 border-[#f1f4ec]" style={{ backgroundColor: c }} />)}<span className="flex size-8 items-center justify-center rounded-full border-2 border-[#f1f4ec] bg-white text-[10px] text-[#718078]">+24</span></div></div><div className="rounded-2xl bg-[#17201b] p-4 text-white"><div className="flex items-center justify-between"><p className="text-xs text-white/60">Team wellbeing</p><span className="rounded-full bg-[#d5f35f] px-2 py-1 text-[10px] font-semibold text-[#17201b]">+12%</span></div><p className="mt-2 text-3xl font-medium tracking-[-.06em]">8.9<span className="text-base text-white/50">/10</span></p><div className="mt-6 flex h-14 items-end gap-1.5">{[34,45,30,54,47,63,59,78,67,86,76,95].map((h, i) => <span key={i} className="flex-1 rounded-t bg-[#d5f35f]" style={{ height: `${h}%`, opacity: .45 + i/25 }} />)}</div></div></div>
              <div className="mt-3 rounded-2xl border border-[#17201b]/10 p-4"><div className="flex items-center justify-between"><p className="text-xs font-medium">Upcoming moments</p><ChevronDown size={15} className="text-[#718078]" /></div><div className="mt-4 flex items-center justify-between text-xs"><span className="flex items-center gap-2"><span className="flex size-7 items-center justify-center rounded-full bg-[#e7d9ff]">LP</span> Lena&apos;s first day</span><span className="text-[#718078]">Tomorrow</span></div></div>
            </div>
          </div>
        </section>

        <section id="customers" className="border-y border-[#17201b]/10 py-8"><p className="mb-6 text-center text-xs uppercase tracking-[.18em] text-[#718078]">Trusted by teams who put people first</p><div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 text-lg font-semibold tracking-[-.04em] text-[#718078] sm:justify-between sm:px-6">{logos.map((logo) => <span key={logo}>{logo}</span>)}</div></section>

        <section id="product" className="py-24 sm:py-32"><div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-sm font-medium text-[#718078]">Everything in one place</p><h2 className="mt-4 max-w-lg text-4xl font-medium tracking-[-.06em] sm:text-5xl">The simpler way to take care of your team.</h2></div><p className="max-w-md self-end text-base leading-7 text-[#52605a]">From the first hello to the next big milestone, Peoplewise gives every person a better experience at work.</p></div><div id="why" className="mt-16 grid gap-px overflow-hidden rounded-[1.75rem] border border-[#17201b]/10 bg-[#17201b]/10 md:grid-cols-3">{features.map(({ icon: Icon, title, text }, i) => <article key={title} className="bg-[#fffef9] p-7 sm:p-9"><div className="flex size-11 items-center justify-center rounded-2xl bg-[#d5f35f]"><Icon size={20} /></div><p className="mt-12 text-xl font-medium tracking-[-.04em]">0{i + 1}</p><h3 className="mt-4 text-xl font-medium tracking-[-.04em]">{title}</h3><p className="mt-3 text-sm leading-6 text-[#718078]">{text}</p><a href="#demo" onClick={(event) => { event.preventDefault(); openDemo() }} className="mt-7 inline-flex items-center text-sm font-medium">Explore <ArrowRight className="ml-2" size={15} /></a></article>)}</div></section>

        <section id="pricing" className="relative overflow-hidden rounded-[2rem] bg-[#d5f35f] px-7 py-14 sm:px-14 sm:py-20"><div className="relative z-10 max-w-2xl"><p className="text-sm font-medium text-[#526018]">Ready when you are</p><h2 className="mt-4 text-4xl font-medium tracking-[-.06em] sm:text-6xl">Give your people a place to thrive.</h2><div className="mt-8 flex flex-wrap gap-4"><a href="#demo" onClick={(event) => { event.preventDefault(); openDemo() }} className="rounded-full bg-[#17201b] px-6 py-3.5 text-sm font-medium text-white">Book a demo <ArrowRight className="ml-2 inline" size={16} /></a><span className="flex items-center gap-2 text-sm text-[#526018]"><ShieldCheck size={16} /> No pressure, just a good conversation.</span></div></div><div className="absolute -right-20 -top-32 size-96 rounded-full border-[50px] border-[#efffa6]/50" /></section>

        <footer id="demo" className="flex flex-col gap-8 py-12 text-sm text-[#718078] sm:flex-row sm:items-center sm:justify-between"><span className="font-semibold tracking-[-.04em] text-[#17201b]">peoplewise</span><div className="flex flex-wrap gap-6"><a href="#product">Product</a><a href="#why">About</a><a href="#pricing">Pricing</a><a href="#login">Sign in</a></div><span>© 2026 Peoplewise</span></footer>
      </div>

      {demoOpen && <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#17201b]/60 p-5" role="dialog" aria-modal="true" aria-labelledby="demo-title">
        <div className="w-full max-w-lg rounded-[1.75rem] bg-[#fffef9] p-7 shadow-2xl sm:p-9">
          <div className="flex items-start justify-between gap-5">
              <div>
                  <p className="text-sm font-medium text-[#718078]">See Peoplewise in action</p>
                  <h2 id="demo-title" className="mt-2 text-3xl font-medium tracking-[-.06em]">Book your demo</h2>
                </div>
                <button 
                type="button" 
                onClick={() => setDemoOpen(false)} 
                className="rounded-full p-2 text-[#718078] hover:bg-[#f1f4ec]" aria-label="Close demo form">
                  <X />
                </button>
          </div>
           {submitted ? 
             <div className="mt-8 rounded-2xl bg-[#f1f4ec] p-6">
                <div className="flex size-11 items-center justify-center rounded-full bg-[#d5f35f]">
                  <Check size={22} />
                </div>
                <p className="mt-5 text-2xl font-medium tracking-[-.05em]">Demo Scheduled Successfully.</p>
                <p className="mt-3 text-sm leading-6 text-[#52605a]">Your Demo has been booked for:</p>
                <p className="mt-1 text-base font-semibold">21 October 2026, 10:00 AM</p>
                <p className="mt-4 text-sm leading-6 text-[#718078]">Confirmation email has been sent to <span className="font-medium text-[#17201b]">{demoDetails?.email}</span>.</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Peoplewise%20HR%20Platform%20Demo&dates=20261021T100000/20261021T110000&details=Your%20Peoplewise%20HR%20Platform%20demo.&location=Online" target="_blank" rel="noreferrer" className="rounded-full bg-[#17201b] px-5 py-3 text-sm font-medium text-white">Add to Google Calendar</a>
                  <a href="data:text/calendar;charset=utf-8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0ADTSTART:20261021T100000%0ADTEND:20261021T110000%0ASUMMARY:Peoplewise%20HR%20Platform%20Demo%0AEND:VEVENT%0AEND:VCALENDAR" download="peoplewise-demo.ics" className="rounded-full border border-[#17201b]/15 px-5 py-3 text-sm font-medium text-[#17201b]">Download .ics</a>
                  <button type="button" onClick={() => { setDemoOpen(false); document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' }) }} className="rounded-full border border-[#17201b]/15 px-5 py-3 text-sm font-medium text-[#17201b]">Explore HR Platform</button>
              </div>
             </div>
             : 
             <form onSubmit={handleSubmit(submitDemo)}  className="mt-7 flex max-h-[62vh] flex-col gap-4 overflow-y-auto pr-1">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm font-medium">First name<input {...register('firstName', { required: true })} required name="firstName" type="text" autoComplete="given-name" placeholder="Maya" className="rounded-xl border border-[#17201b]/15 bg-white px-4 py-3 font-normal outline-none focus:border-[#17201b]" /></label>
                <label className="flex flex-col gap-2 text-sm font-medium">Last name<input {...register('lastName', { required: true })} required name="lastName" type="text" autoComplete="family-name" placeholder="Chen" className="rounded-xl border border-[#17201b]/15 bg-white px-4 py-3 font-normal outline-none focus:border-[#17201b]" /></label>
              </div>
              <label className="flex flex-col gap-2 text-sm font-medium">Work email<input {...register('email', { required: true })} required name="email" type="email" autoComplete="work email" placeholder="you@company.com" className="rounded-xl border border-[#17201b]/15 bg-white px-4 py-3 font-normal outline-none focus:border-[#17201b]" /></label>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm font-medium">Company<input {...register('company', { required: true })} required name="company" type="text" autoComplete="organization" placeholder="Acme Inc." className="rounded-xl border border-[#17201b]/15 bg-white px-4 py-3 font-normal outline-none focus:border-[#17201b]" /></label>
                <label className="flex flex-col gap-2 text-sm font-medium">Job title<input {...register('jobTitle', { required: true })} required name="jobTitle" type="text" autoComplete="organization-title" placeholder="Head of People" className="rounded-xl border border-[#17201b]/15 bg-white px-4 py-3 font-normal outline-none focus:border-[#17201b]" /></label>
              </div>
              <label className="flex flex-col gap-2 text-sm font-medium">Company size
                <select {...register('companySize', { required: true })} required name="companySize" className="rounded-xl border border-[#17201b]/15 bg-white px-4 py-3 font-normal outline-none focus:border-[#17201b]">
                <option value="">Select a range</option>
                <option>1–25 employees</option>
                <option>26–100 employees</option>
                <option>101–500 employees</option>
                <option>500+ employees</option>
              </select>
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium">What would you like to improve?
              <textarea {...register('message', { required: true })} name="message" rows={3} placeholder="Tell us a little about your team's needs" className="resize-none rounded-xl border border-[#17201b]/15 bg-white px-4 py-3 font-normal outline-none focus:border-[#17201b]" /></label>
            <button type="submit" className="mt-2 rounded-full bg-[#17201b] px-6 py-3.5 text-sm font-medium text-white">Request my demo <ArrowRight className="ml-2 inline" size={16} />
           </button>
           <p className="text-center text-xs text-[#718078]">We&apos;ll use these details to tailor your conversation.</p>
           </form>
           }
        </div>
      </div>}
    </main>
  )
}