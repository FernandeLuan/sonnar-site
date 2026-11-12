import { useEffect } from 'react'
import { ArrowRight, Check, Droplets, MapPin, MessageCircle, ScanSearch, ShieldCheck, Waves, Activity, Search, ClipboardCheck, Instagram, Phone, ChevronDown } from 'lucide-react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const WHATSAPP = 'https://wa.me/5547988901278'
const INSTAGRAM = 'https://www.instagram.com/sonnar.vazamentos/'
const services = [
  { icon: Droplets, title: 'Vazamentos não aparentes', text: 'Suspeita de perda em tubulações mesmo sem água visível? Conte os sinais para a equipe avaliar o próximo passo.' },
  { icon: Waves, title: 'Infiltrações e umidade', text: 'Manchas, bolhas na pintura ou umidade persistente podem ter diferentes origens. A investigação começa pelos sintomas.' },
  { icon: Activity, title: 'Aumento no consumo de água', text: 'Uma conta acima do habitual pode indicar vazamento. A avaliação ajuda a direcionar a investigação.' },
]
const steps = [
  { number: '01', title: 'Você explica o que percebeu', text: 'Envie uma mensagem e, se possível, fotos ou vídeos dos sinais no imóvel.' },
  { number: '02', title: 'A SONNAR avalia o atendimento', text: 'A equipe conversa com você para entender o cenário e verificar a possibilidade de visita.' },
  { number: '03', title: 'Alinhamento da inspeção', text: 'Antes de agendar, confirme escopo, disponibilidade, valores e o que será entregue.' },
]
const faqs = [
  ['Como saber se existe um vazamento oculto?', 'Sinais comuns incluem aumento inesperado no consumo, umidade persistente, manchas e ruídos na tubulação. Esses sinais não confirmam sozinhos um vazamento; é necessária avaliação.'],
  ['A localização do vazamento evita quebrar paredes e pisos?', 'A investigação técnica pode ajudar a direcionar o ponto suspeito e reduzir intervenções desnecessárias. Não é possível garantir que nenhuma abertura será necessária em todos os casos.'],
  ['A SONNAR também realiza o conserto?', 'Confirme com a equipe o escopo disponível para o seu caso: localização, diagnóstico e eventual reparo devem ser alinhados antes da contratação.'],
  ['A empresa emite laudo técnico?', 'A disponibilidade, o formato e o responsável pela emissão de laudo devem ser confirmados diretamente com a SONNAR antes do agendamento.'],
  ['Quais cidades são atendidas?', 'A referência atual é Blumenau e região. Envie seu bairro ou município pelo WhatsApp para confirmar a cobertura e disponibilidade.'],
  ['Quanto custa uma avaliação?', 'O valor depende do tipo de ocorrência e das condições do atendimento. Solicite orçamento informando o endereço aproximado e os sinais observados.'],
]
function App() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>('[data-reveal]')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || !('IntersectionObserver' in window)) {
      items.forEach(item => item.classList.add('is-visible'))
      return
    }
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) }
    }), { threshold: 0.12 })
    items.forEach(item => observer.observe(item))
    return () => observer.disconnect()
  }, [])
  return <div className="site-shell">
    <Header />
    <main>
      <section className="hero premium-hero" id="inicio">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span/> CAÇA VAZAMENTOS · BLUMENAU E REGIÃO</div>
            <h1>Suspeita de vazamento? <em>Encontre a origem do problema.</em></h1>
            <p className="hero-lead">A SONNAR ajuda a investigar vazamentos não aparentes, sinais de infiltração e aumento inesperado no consumo de água.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={18}/> Falar com a SONNAR <ArrowRight size={17}/></a>
              <a className="text-link" href="#servicos">Ver situações atendidas <ArrowRight size={15}/></a>
            </div>
            <div className="hero-meta"><MapPin size={16}/><span>Atendimento em Blumenau e região. Consulte sua cidade.</span></div>
          </div>
          <div className="hero-visual" data-reveal>
            <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=85" alt="Imagem ilustrativa de profissional em atividade técnica" fetchPriority="high"/>
            <div className="hero-image-caption">IMAGEM ILUSTRATIVA · CONHEÇA O ATENDIMENTO REAL PELO INSTAGRAM</div>
          </div>
        </div>
        <div className="container hero-bottom"><span>INVESTIGAÇÃO</span><i/><span>AVALIAÇÃO TÉCNICA</span><i/><span>ATENDIMENTO LOCAL</span></div>
      </section>

      <section className="trust-strip" aria-label="Informações de atendimento"><div className="container trust-grid">
        <div><ScanSearch/><span><b>Vazamentos não aparentes</b><small>Investigue sinais e suspeitas</small></span></div>
        <div><ShieldCheck/><span><b>Orientação direta</b><small>Converse com a equipe</small></span></div>
        <div><MapPin/><span><b>Blumenau e região</b><small>Confirme sua localidade</small></span></div>
      </div></section>

      <section className="problem-section section-light" id="servicos"><div className="container">
        <div className="section-heading"><div><div className="eyebrow dark"><span/> QUANDO CHAMAR A SONNAR</div><h2>O que está acontecendo <em>no seu imóvel?</em></h2></div><p>Explique os sinais. A equipe pode orientar a melhor forma de avaliar a ocorrência.</p></div>
        <div className="service-grid">{services.map(({icon:Icon,title,text})=><article className="service-card" data-reveal key={title}><div className="service-top"><span className="service-icon"><Icon size={23}/></span></div><h3>{title}</h3><p>{text}</p><a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label={'Falar sobre '+title}><ArrowRight size={19}/></a></article>)}</div>
      </div></section>

      <section className="technology-section" id="metodo"><div className="container technology-grid">
        <div className="technology-photo" data-reveal><img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1100&q=85" alt="Imagem ilustrativa de serviço técnico em imóvel" loading="lazy"/><div className="photo-index">ATENDIMENTO SONNAR <b>/ REGISTROS</b></div></div>
        <div className="technology-copy" data-reveal><div className="eyebrow dark"><span/> COMO COMEÇAMOS</div><h2>Entender os sinais é o primeiro passo.</h2><p>Cada imóvel e cada suspeita têm características próprias. Por isso, o atendimento começa com informações sobre o problema, para alinhar a avaliação adequada.</p>
          <div className="technology-points">
            <div><span><Search size={19}/></span><p><b>Entendimento da ocorrência</b><small>Quando começou, onde aparece e o que mudou.</small></p></div>
            <div><span><Activity size={19}/></span><p><b>Avaliação do cenário</b><small>Conversa inicial para entender o tipo de suspeita.</small></p></div>
            <div><span><ClipboardCheck size={19}/></span><p><b>Escopo alinhado</b><small>Confirme método, valores e entregáveis antes da visita.</small></p></div>
          </div>
          <a className="inline-link" href={INSTAGRAM} target="_blank" rel="noreferrer"><Instagram size={17}/> Ver a SONNAR no Instagram <ArrowRight size={17}/></a>
        </div>
      </div></section>

      <section className="process-section" id="processo"><div className="container process-grid">
        <div className="process-intro" data-reveal><div className="eyebrow"><span/> ATENDIMENTO SEM COMPLICAÇÃO</div><h2>Como solicitar uma <em>avaliação.</em></h2><p>Tenha estas informações em mãos para agilizar a conversa com a equipe.</p><a className="button button-outline" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={17}/> Iniciar conversa</a></div>
        <div className="steps">{steps.map(step=><div className="step" data-reveal key={step.number}><div className="step-number">{step.number}</div><div><h3>{step.title}</h3><p>{step.text}</p></div><Check className="step-check" size={19}/></div>)}</div>
      </div></section>

      <section className="coverage-section"><div className="container coverage-inner" data-reveal><div><div className="eyebrow"><span/> ATENDIMENTO REGIONAL</div><h2>Você está em <em>Blumenau ou região?</em></h2><p>Entre em contato e informe seu município e bairro. A equipe confirma a disponibilidade para o endereço.</p></div><div className="coverage-card"><MapPin size={30}/><b>Blumenau · Santa Catarina</b><span>Consulte atendimento para sua cidade.</span><a href={WHATSAPP} target="_blank" rel="noreferrer">Consultar cobertura <ArrowRight size={16}/></a></div></div></section>

      <section className="faq-section section-light" id="duvidas"><div className="container faq-grid"><div><div className="eyebrow dark"><span/> DÚVIDAS FREQUENTES</div><h2>Antes de solicitar, <em>saiba o que perguntar.</em></h2><p>Se sua dúvida não estiver aqui, fale diretamente com a equipe.</p><a className="inline-link" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={17}/> Perguntar pelo WhatsApp</a></div><div className="faq-list">{faqs.map(([q,a])=><details key={q}><summary>{q}<ChevronDown size={18}/></summary><p>{a}</p></details>)}</div></div></section>

      <section className="contact-section premium-contact" id="contato"><div className="container contact-inner" data-reveal><div><div className="eyebrow dark"><span/> FALE COM A SONNAR</div><h2>Conte o que está acontecendo.</h2><p>Se possível, envie fotos ou vídeos dos sinais. A equipe conversa com você sobre os próximos passos.</p></div><div className="contact-actions"><a className="button button-primary" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={19}/> WhatsApp <ArrowRight size={18}/></a><a className="contact-phone" href="tel:+5547988901278"><Phone size={16}/> (47) 98890-1278</a></div></div></section>
    </main>
    <Footer/>
  </div>
}
export default App
