import { ArrowRight, Check, Crosshair, Droplets, MapPin, MessageCircle, ScanSearch, Waves } from 'lucide-react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const WHATSAPP = 'https://wa.me/5547988901278'

const services = [
  { icon: Droplets, title: 'Vazamentos ocultos', text: 'Localização de vazamentos em tubulações e redes hidráulicas.' },
  { icon: Waves, title: 'Infiltrações', text: 'Investigação de manchas, umidade e possíveis pontos de entrada de água.' },
  { icon: ScanSearch, title: 'Consumo elevado', text: 'Verificação de possíveis perdas quando a conta de água aumenta sem explicação.' },
]

function App() {
  return <div className="site-shell">
    <Header />
    <main>
      <section className="hero" id="inicio">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span /> CAÇA-VAZAMENTOS EM BLUMENAU E REGIÃO</div>
            <h1>Localização de vazamentos com <em>precisão.</em></h1>
            <p className="hero-lead">Identificamos a origem do vazamento para evitar quebras e reparos desnecessários.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Solicitar atendimento <ArrowRight size={17} /></a>
              <a className="text-link" href="#servicos">Ver serviços</a>
            </div>
            <div className="hero-meta"><MapPin size={16} /><span>Blumenau, Vale do Itajaí e litoral</span></div>
          </div>
          <div className="hero-visual">
            <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1100&q=85" alt="Profissional realizando inspeção técnica" />
          </div>
        </div>
      </section>

      <section className="problem-section section-light" id="servicos">
        <div className="container">
          <div className="section-heading">
            <div><div className="eyebrow dark"><span /> SERVIÇOS</div><h2>Encontramos a origem.<br /><em>Você resolve com segurança.</em></h2></div>
            <p>Inspeção técnica para imóveis residenciais, condomínios e empresas.</p>
          </div>
          <div className="service-grid">{services.map(({ icon: Icon, title, text }) => <article className="service-card" key={title}>
            <div className="service-top"><span className="service-icon"><Icon size={23} /></span></div>
            <h3>{title}</h3><p>{text}</p>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label={'Solicitar atendimento: ' + title}><ArrowRight size={19} /></a>
          </article>)}</div>
        </div>
      </section>

      <section className="process-section" id="processo">
        <div className="container process-grid">
          <div className="process-intro">
            <div className="eyebrow"><span /> ATENDIMENTO</div>
            <h2>Simples, direto e <em>técnico.</em></h2>
            <p>Entre em contato, explique o que está acontecendo e agende uma avaliação.</p>
            <a className="button button-outline" href={WHATSAPP} target="_blank" rel="noreferrer">Falar com a SONNAR <ArrowRight size={17} /></a>
          </div>
          <div className="steps">
            <div className="step"><div className="step-number">01</div><div><h3>Contato</h3><p>Entendemos os sinais e as características do imóvel.</p></div><Check className="step-check" size={19} /></div>
            <div className="step"><div className="step-number">02</div><div><h3>Inspeção</h3><p>Realizamos os testes adequados para investigar o problema.</p></div><Check className="step-check" size={19} /></div>
            <div className="step"><div className="step-number">03</div><div><h3>Diagnóstico</h3><p>Indicamos o ponto identificado para orientar o reparo.</p></div><Check className="step-check" size={19} /></div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contato">
        <div className="container contact-inner">
          <div><div className="eyebrow"><span /> SONNAR CAÇA-VAZAMENTOS</div><h2>Precisa localizar um vazamento?</h2><p>Fale com a equipe e solicite uma avaliação.</p></div>
          <a className="button button-primary contact-button" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={19} /> Chamar no WhatsApp <ArrowRight size={18} /></a>
        </div>
      </section>
    </main>
    <Footer />
  </div>
}

export default App
