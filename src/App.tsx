import { ArrowDown, ArrowRight, Check, Crosshair, Droplets, MapPin, ScanSearch, ShieldCheck, Waves, Camera, ClipboardCheck } from 'lucide-react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const WHATSAPP = 'https://wa.me/5547988901278'
const services = [
  { icon: Droplets, title: 'Vazamentos ocultos', text: 'Investigação de vazamentos em tubulações sem sair quebrando tudo.' },
  { icon: Waves, title: 'Infiltrações e umidade', text: 'Análise da origem de manchas, infiltrações e sinais de umidade.' },
  { icon: ScanSearch, title: 'Aumento na conta de água', text: 'Investigação de consumo fora do normal e possíveis perdas na rede.' },
  { icon: Crosshair, title: 'Localização precisa', text: 'Identificação do ponto provável para orientar o reparo.' },
]
const steps = [
  { number: '01', title: 'Entendemos o problema', text: 'Você conta o que está acontecendo e onde percebeu os sinais.' },
  { number: '02', title: 'Realizamos a inspeção', text: 'Utilizamos métodos e equipamentos adequados para investigar a ocorrência.' },
  { number: '03', title: 'Entregamos o diagnóstico', text: 'Você recebe os resultados, registros e orientação para direcionar o reparo.' },
]

function Brand() {
  return <a className="brand" href="#inicio" aria-label="SONNAR - início"><span className="brand-mark"><Droplets size={31} strokeWidth={1.8}/></span><span><b>SONNAR</b><small>CAÇA VAZAMENTOS</small></span></a>
}

function App() {
  return <div className="site-shell">
    <Header />

    <main>
      <section className="hero" id="inicio">
        <div className="hero-glow"/>
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span/> INSPEÇÃO TÉCNICA DE VAZAMENTOS</div>
            <h1>Encontramos vazamentos. <em>Sem quebrar tudo.</em></h1>
            <p className="hero-lead">Tecnologia e precisão para localizar a origem de vazamentos em residências, condomínios e empresas.</p>
            <div className="hero-actions"><a className="button button-primary" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={19}/> Solicitar atendimento <ArrowRight size={18}/></a><a className="text-link" href="#processo">Conheça o processo <ArrowDown size={16}/></a></div>
            <div className="hero-meta"><MapPin size={16}/><span>Blumenau, Vale do Itajaí e litoral</span></div>
          </div>
          <div className="hero-visual">
            <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1100&q=85" alt="Profissional realizando serviço técnico" />
            <div className="visual-tag"><span className="tag-icon"><Crosshair size={20}/></span><span><b>Precisão na localização</b><small>Diagnóstico técnico especializado</small></span></div>
            <div className="visual-stamp"><Droplets size={25}/><span>SONNAR<br/>INSPEÇÃO</span></div>
          </div>
        </div>
        <div className="hero-bottom container"><span>ATENDIMENTO TÉCNICO</span><span className="hero-line"/><span>RESIDENCIAL · CONDOMINIAL · COMERCIAL</span></div>
      </section>

      <section className="problem-section section-light" id="problemas">
        <div className="container">
          <div className="section-heading"><div><div className="eyebrow dark"><span/> SINAIS DE ALERTA</div><h2>O problema pode estar<br/><em>onde você menos espera.</em></h2></div><p>Nem sempre a umidade aparece no mesmo lugar onde o vazamento começou. Investigar a origem evita intervenções desnecessárias.</p></div>
          <div className="service-grid">{services.map(({icon:Icon,title,text},i)=><article className="service-card" key={title}><div className="service-top"><span className="service-icon"><Icon size={24}/></span><span className="service-index">0{i+1}</span></div><h3>{title}</h3><p>{text}</p><a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label={'Consultar sobre '+title}><ArrowUpRightIcon/></a></article>)}</div>
        </div>
      </section>

      <section className="process-section" id="processo">
        <div className="container process-grid">
          <div className="process-intro"><div className="eyebrow"><span/> COMO FUNCIONA</div><h2>Da suspeita ao diagnóstico, <em>com clareza.</em></h2><p>Um processo técnico para investigar a ocorrência e entregar informações que ajudam a direcionar o reparo.</p><a className="button button-outline" href={WHATSAPP} target="_blank" rel="noreferrer">Tirar dúvidas <ArrowRight size={17}/></a></div>
          <div className="steps">{steps.map((step,i)=><div className="step" key={step.number}><div className="step-number">{step.number}</div><div><h3>{step.title}</h3><p>{step.text}</p></div>{i===2&&<Check className="step-check" size={21}/>}</div>)}</div>
        </div>
      </section>

      <section className="proof-section section-light" id="sobre">
        <div className="container proof-grid">
          <div className="proof-image"><img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=85" alt="Profissional em atividade de inspeção técnica"/><div className="image-caption"><ShieldCheck size={18}/> Cuidado técnico em cada etapa</div></div>
          <div className="proof-copy"><div className="eyebrow dark"><span/> SOBRE A SONNAR</div><h2>Precisão que localiza. <em>Informação que orienta.</em></h2><p>A SONNAR atua com inspeção técnica para localizar vazamentos e investigar sinais de infiltração. O trabalho é direcionado para identificar a origem do problema e fornecer informações claras para o profissional responsável pelo reparo.</p><div className="proof-points"><div><Check size={17}/> Inspeção com equipamentos especializados</div><div><Check size={17}/> Registros e diagnóstico técnico</div><div><Check size={17}/> Atendimento na região de Blumenau e litoral</div></div><a className="inline-link" href={WHATSAPP} target="_blank" rel="noreferrer">Converse com a SONNAR <ArrowRight size={17}/></a></div>
        </div>
      </section>

      <section className="report-section">
        <div className="container report-grid"><div><div className="eyebrow"><span/> ENTREGA TÉCNICA</div><h2>Você sabe o que foi encontrado.</h2><p>Após a inspeção, o diagnóstico reúne informações para que o reparo seja direcionado com mais segurança.</p></div><div className="report-cards"><div className="report-card"><ClipboardCheck/><b>Testes realizados</b><small>Informações sobre a inspeção</small></div><div className="report-card"><Camera/><b>Registros fotográficos</b><small>Evidências da avaliação</small></div><div className="report-card"><Crosshair/><b>Localização indicada</b><small>Orientação sobre a origem</small></div></div></div>
      </section>

      <section className="contact-section" id="contato"><div className="container contact-inner"><div><div className="eyebrow"><span/> FALE COM A SONNAR</div><h2>Vamos entender o que está acontecendo?</h2><p>Conte para nossa equipe o que você percebeu. Vamos orientar os próximos passos.</p></div><a className="button button-primary contact-button" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={20}/> Chamar no WhatsApp <ArrowRight size={18}/></a></div></section>
    </main>

    <Footer />
  </div>
}


export default App