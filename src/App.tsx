import { useEffect } from 'react'
import { ArrowRight, Check, Droplets, MapPin, MessageCircle, ScanSearch, ShieldCheck, Waves, Activity, Search, ClipboardCheck } from 'lucide-react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const WHATSAPP = 'https://wa.me/5547988901278'

const services = [
  { icon: Droplets, number: '01', title: 'Vazamentos ocultos', text: 'Investigação de perdas em tubulações e redes hidráulicas.' },
  { icon: Waves, number: '02', title: 'Infiltrações e umidade', text: 'Análise de sinais de umidade e possíveis pontos de origem.' },
  { icon: Activity, number: '03', title: 'Consumo fora do normal', text: 'Investigação de possíveis vazamentos quando a conta aumenta.' },
]

const steps = [
  { number: '01', title: 'Conte o que está acontecendo', text: 'Explique os sinais percebidos no imóvel e tire suas dúvidas.' },
  { number: '02', title: 'Agende uma inspeção', text: 'A equipe avalia o cenário e define os testes adequados.' },
  { number: '03', title: 'Receba o diagnóstico', text: 'Você recebe as informações para orientar o reparo.' },
]

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal-on-scroll')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return <div className="site-shell">
    <Header />
    <main>
      <section className="hero premium-hero" id="inicio">
        <div className="hero-orbit" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span /> SONNAR · CAÇA VAZAMENTOS</div>
            <h1>O vazamento não precisa aparecer para ser <em>encontrado.</em></h1>
            <p className="hero-lead">Localização técnica de vazamentos e investigação de infiltrações com foco em precisão e diagnóstico.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Solicitar avaliação <ArrowRight size={17} /></a>
              <a className="text-link" href="#servicos">Conhecer serviços <ArrowRight size={15}/></a>
            </div>
            <div className="hero-meta"><MapPin size={16} /><span>Blumenau, Vale do Itajaí e região</span></div>
          </div>
          <div className="hero-visual reveal-on-scroll">
            <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=85" alt="Profissional realizando trabalho técnico em ambiente interno" fetchPriority="high" />
            <div className="hero-image-caption"><span className="caption-pulse" /> INSPEÇÃO TÉCNICA · DIAGNÓSTICO PRECISO</div>
          </div>
        </div>
        <div className="container hero-bottom"><span>TECNOLOGIA</span><i/><span>INVESTIGAÇÃO</span><i/><span>PRECISÃO</span></div>
      </section>

      <section className="trust-strip" aria-label="Diferenciais">
        <div className="container trust-grid">
          <div><ScanSearch/><span><b>Localização técnica</b><small>Investigação direcionada</small></span></div>
          <div><ShieldCheck/><span><b>Mais precisão</b><small>Decisões com diagnóstico</small></span></div>
          <div><MapPin/><span><b>Atendimento regional</b><small>Blumenau e Vale do Itajaí</small></span></div>
        </div>
      </section>

      <section className="problem-section section-light premium-services" id="servicos">
        <div className="container">
          <div className="section-heading">
            <div><div className="eyebrow dark"><span /> O QUE INVESTIGAMOS</div><h2>O problema pode estar escondido.<br/><em>A investigação começa pelos sinais.</em></h2></div>
            <p>Atendimento para imóveis residenciais, condomínios e estabelecimentos comerciais.</p>
          </div>
          <div className="service-grid">{services.map(({ icon: Icon, number, title, text }) => <article className="service-card reveal-on-scroll" key={title}>
            <div className="service-top"><span className="service-icon"><Icon size={23}/></span><span className="service-index">{number}</span></div>
            <h3>{title}</h3><p>{text}</p>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label={'Consultar sobre ' + title}><ArrowRight size={19}/></a>
          </article>)}</div>
        </div>
      </section>

      <section className="technology-section" id="tecnologia">
        <div className="container technology-grid">
          <div className="technology-photo reveal-on-scroll">
            <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1100&q=85" alt="Profissional realizando inspeção e manutenção técnica" loading="lazy"/>
            <div className="photo-index">SONNAR <b>/ 02</b></div>
          </div>
          <div className="technology-copy reveal-on-scroll">
            <div className="eyebrow"><span/> MÉTODO E TECNOLOGIA</div>
            <h2>Diagnóstico antes de qualquer <em>intervenção.</em></h2>
            <p>Cada ocorrência exige uma investigação adequada. A avaliação técnica ajuda a direcionar o reparo e reduzir intervenções desnecessárias.</p>
            <div className="technology-points">
              <div><span><Search size={19}/></span><p><b>Investigação direcionada</b><small>Análise dos sinais e das condições do imóvel.</small></p></div>
              <div><span><Activity size={19}/></span><p><b>Testes adequados ao cenário</b><small>Escolha do método conforme o tipo de suspeita.</small></p></div>
              <div><span><ClipboardCheck size={19}/></span><p><b>Informação para decidir</b><small>Diagnóstico para orientar os próximos passos.</small></p></div>
            </div>
            <a className="inline-link" href={WHATSAPP} target="_blank" rel="noreferrer">Converse com a SONNAR <ArrowRight size={17}/></a>
          </div>
        </div>
      </section>

      <section className="process-section premium-process" id="processo">
        <div className="container process-grid">
          <div className="process-intro reveal-on-scroll">
            <div className="eyebrow"><span/> COMO FUNCIONA</div>
            <h2>Do primeiro contato ao <em>diagnóstico.</em></h2>
            <p>Um atendimento objetivo para entender o problema e indicar o caminho da investigação.</p>
            <a className="button button-outline" href={WHATSAPP} target="_blank" rel="noreferrer">Iniciar atendimento <ArrowRight size={17}/></a>
          </div>
          <div className="steps">{steps.map((step) => <div className="step reveal-on-scroll" key={step.number}><div className="step-number">{step.number}</div><div><h3>{step.title}</h3><p>{step.text}</p></div><Check className="step-check" size={19}/></div>)}</div>
        </div>
      </section>

      <section className="coverage-section">
        <div className="container coverage-inner reveal-on-scroll">
          <div><div className="eyebrow"><span/> ONDE ATENDEMOS</div><h2>Presença local.<br/><em>Atendimento próximo.</em></h2><p>Atendimento em Blumenau, no Vale do Itajaí e regiões próximas. Consulte a disponibilidade para sua cidade.</p></div>
          <div className="coverage-card"><MapPin size={30}/><b>Blumenau · SC</b><span>Vale do Itajaí e região</span><a href={WHATSAPP} target="_blank" rel="noreferrer">Consultar minha região <ArrowRight size={16}/></a></div>
        </div>
      </section>

      <section className="contact-section premium-contact" id="contato">
        <div className="container contact-inner reveal-on-scroll">
          <div><div className="eyebrow"><span/> SONNAR CAÇA VAZAMENTOS</div><h2>Suspeita de vazamento?<br/>Vamos investigar.</h2><p>Entre em contato e explique o que está acontecendo.</p></div>
          <a className="button button-primary contact-button" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={19}/> Falar pelo WhatsApp <ArrowRight size={18}/></a>
        </div>
      </section>
    </main>
    <Footer />
  </div>
}

export default App
