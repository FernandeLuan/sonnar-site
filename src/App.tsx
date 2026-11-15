import { ArrowRight, Activity, Camera, Check, ClipboardCheck, Droplets, FileText, Instagram, Mail, MapPin, MessageCircle, Phone, Search, ShieldCheck, Thermometer, Waves, Gauge, Target } from 'lucide-react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const WHATSAPP = 'https://wa.me/message/V2UGAYQJIJ77N1'
const PHONE = 'tel:+5547988901278'
const services = [
  { icon: Target, title: 'Geofonamento', text: 'Investigamos ruídos em tubulações pressurizadas para localizar a origem de possíveis vazamentos.' },
  { icon: Thermometer, title: 'Termografia', text: 'Analisamos diferenças de temperatura para identificar sinais que auxiliam na investigação de vazamentos e infiltrações.' },
  { icon: Camera, title: 'Inspeção por câmera — Boroscopia', text: 'Inspecionamos o interior de tubulações e pontos de difícil acesso para identificar anomalias e registrar as condições encontradas.' },
  { icon: Gauge, title: 'Teste de estanqueidade', text: 'Realizamos testes em áreas e trechos delimitados para verificar possíveis perdas de água.' },
  { icon: Droplets, title: 'Investigação com traçador', text: 'Acompanhamos o percurso da água com traçador para identificar possíveis pontos de passagem e infiltração.' },
]
const steps = [
  ['01', 'Conte o que está acontecendo', 'Conversamos sobre os sinais percebidos e o histórico do problema para definir os próximos passos da avaliação.'],
  ['02', 'Receba a proposta', 'Apresentamos o escopo da investigação, as condições e o valor do serviço antes da contratação.'],
  ['03', 'Acompanhe a investigação', 'Realizamos os testes adequados à situação e registramos as evidências encontradas.'],
  ['04', 'Receba a conclusão técnica', 'Entregamos o diagnóstico com os resultados, a origem identificada e a intervenção recomendada, quando conclusivas, além das limitações e necessidades de avaliação complementar.'],
]
const values = [
  ['Cuidado com as pessoas e o patrimônio', 'Reconhecer a preocupação por trás de cada chamado e tratar cada ambiente com atenção, respeito e zelo.'],
  ['Rigor técnico', 'Investigar com método, atenção e responsabilidade, sustentando cada diagnóstico nos testes realizados e nas evidências encontradas.'],
  ['Integridade', 'Agir com honestidade em cada orientação, apresentar os resultados com clareza e assumir compromissos que possam ser cumpridos.'],
  ['Respeito ao cliente', 'Valorizar seu tempo, seu investimento e sua privacidade, com pontualidade, discrição e atenção durante todo o atendimento.'],
  ['Excelência em cada detalhe', 'Expressar qualidade na apresentação, na comunicação, na organização e na execução do serviço, do primeiro contato à entrega do diagnóstico técnico.'],
]
function App() {
  return <div className="site-shell">
    <Header />
    <main>
      <section className="hero" id="inicio">
        <div className="hero-glow" aria-hidden="true" />
        <div className="container hero-content">
          <div className="hero-copy">
            <div className="eyebrow"><span /> CAÇA VAZAMENTOS · BLUMENAU · VALE DO ITAJAÍ · LITORAL</div>
            <h1>Manchas de umidade ou conta de água acima do normal?</h1>
            <p className="hero-lead">Investigamos a suspeita de vazamento com tecnologia e testes adequados ao seu imóvel, buscando identificar a origem do problema e indicar a solução recomendada.</p>
            <ul className="hero-points">
              <li><Check size={17}/> Localização técnica de vazamentos</li>
              <li><Check size={17}/> Inspeção evitando quebras desnecessárias</li>
              <li><Check size={17}/> Diagnóstico com resultados e orientação da solução</li>
            </ul>
            <a className="button button-primary" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={19}/> Falar com a SONNAR <ArrowRight size={17}/></a>
            <div className="hero-signature">Precisão que localiza, economia que resolve.</div>
          </div>
          <div className="hero-brand-panel">
            <img src="./sonnar-logo.svg" alt="SONNAR Caça Vazamentos" />
            <div className="panel-line" />
            <span>TECNOLOGIA PARA ENCONTRAR A ORIGEM</span>
            <div className="panel-mark" aria-hidden="true"><Droplets /></div>
          </div>
        </div>
        <div className="container hero-bottom"><span>EMPRESAS</span><i/><span>CONDOMÍNIOS</span><i/><span>RESIDÊNCIAS</span></div>
      </section>

      <section className="intro-band"><div className="container intro-inner"><span className="intro-mark"><Search size={23}/></span><p><b>Antes de quebrar, descubra a origem do vazamento.</b><small>Investigação técnica orientada pelos sinais e pelas características de cada imóvel.</small></p><a href="#servicos">Conheça os métodos <ArrowRight size={17}/></a></div></section>

      <section className="services-section section-light" id="servicos"><div className="container">
        <div className="section-heading"><div><div className="eyebrow dark"><span/> SERVIÇOS</div><h2>Tecnologia para investigar. <em>Precisão para esclarecer.</em></h2></div><p>Selecionamos os métodos adequados para cada situação, buscando verificar a existência de vazamentos, localizar sua origem e indicar a intervenção recomendada.</p></div>
        <div className="service-grid">{services.map(({icon:Icon,title,text},i)=><article className="service-card" key={title}><span className="service-number">0{i+1}</span><span className="service-icon"><Icon size={25}/></span><h3>{title}</h3><p>{text}</p></article>)}</div>
        <div className="diagnostic-note"><FileText size={23}/><p><b>Diagnóstico técnico ao final da investigação</b><span>Você recebe os testes realizados, as evidências encontradas e a conclusão da investigação, com orientação sobre a intervenção recomendada.</span></p></div>
      </div></section>

      <section className="equipment-section" id="tecnologia"><div className="container">
        <div className="section-heading"><div><div className="eyebrow"><span/> TECNOLOGIA E MÉTODO</div><h2>Cada situação exige <em>uma investigação adequada.</em></h2></div><p>Os equipamentos e procedimentos são selecionados conforme os sinais observados, as características da instalação e o histórico da ocorrência.</p></div>
        <div className="equipment-grid">
          <article className="equipment-card"><div className="equipment-image"><img src="./geofone-yamatec.webp" alt="Conjunto do geofone Yamatec 4306 em sua maleta" loading="lazy"/></div><div><span className="equipment-tag">GEofonamento</span><h3>Geofone Yamatec 4306</h3><p>Equipamento de referência para investigação de ruídos em tubulações pressurizadas.</p></div></article>
          <article className="equipment-card"><div className="equipment-image"><img src="./camera-carretel.webp" alt="Câmera de inspeção com cabo laranja e monitor" loading="lazy"/></div><div><span className="equipment-tag">REFERÊNCIA DE PRODUTO</span><h3>Câmera com carretel</h3><p>Imagem de referência de câmera de inspeção. A disponibilidade deste modelo ainda não foi confirmada; não representa equipamento próprio em uso.</p></div></article>
          <article className="equipment-card equipment-text"><span className="equipment-icon"><Thermometer size={28}/></span><span className="equipment-tag">MÉTODO DE INSPEÇÃO</span><h3>Termografia</h3><p>Análise de diferenças de temperatura para identificar sinais que auxiliam a investigação. O modelo utilizado deve ser confirmado conforme cada atendimento.</p></article>
          <article className="equipment-card equipment-text"><span className="equipment-icon"><Droplets size={28}/></span><span className="equipment-tag">KIT INFORMADO COMO DISPONÍVEL</span><h3>Traçador e luz UV</h3><p>Investigação do percurso da água e de possíveis pontos de passagem e infiltração, com método adequado à situação.</p></article>
        </div>
        <p className="equipment-disclaimer">As imagens de equipamentos são referências de produto e não comprovam, por si só, aquisição ou disponibilidade para um atendimento específico.</p>
      </div></section>

      <section className="process-section" id="atendimento"><div className="container process-layout">
        <div className="process-intro"><div className="eyebrow"><span/> COMO FUNCIONA O ATENDIMENTO</div><h2>Do primeiro contato à <em>conclusão técnica.</em></h2><p>Você sabe o que será investigado, quais condições foram combinadas e o que os resultados permitem concluir.</p><a className="button button-primary" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={18}/> Fale com a SONNAR</a></div>
        <div className="steps">{steps.map(([number,title,text])=><article className="step" key={number}><span className="step-number">{number}</span><div><h3>{title}</h3><p>{text}</p></div><Check className="step-check" size={19}/></article>)}</div>
      </div></section>

      <section className="deliverable-section"><div className="container deliverable-inner"><div><div className="eyebrow dark"><span/> INVESTIGAÇÃO E DIAGNÓSTICO TÉCNICO</div><h2>Informação para orientar <em>a próxima decisão.</em></h2><p>Nosso serviço compreende a inspeção, os testes e a análise dos resultados, com indicação da intervenção recomendada conforme as evidências encontradas.</p></div><div className="deliverable-list"><div><ClipboardCheck/><span><b>Testes e procedimentos realizados</b><small>Registro do que foi aplicado durante a investigação.</small></span></div><div><Activity/><span><b>Resultados e evidências</b><small>Informações encontradas e registros fotográficos da inspeção.</small></span></div><div><ShieldCheck/><span><b>Conclusão e orientação</b><small>Origem identificada, quando conclusiva, e indicação do próximo passo.</small></span></div></div></div><div className="container repair-note">A execução de reparos não faz parte do serviço da SONNAR.</div></section>

      <section className="about-section section-light" id="sobre"><div className="container about-layout"><div className="about-copy"><div className="eyebrow dark"><span/> SOBRE A SONNAR</div><h2>Tecnologia e método. <em>Cuidado com cada cliente.</em></h2><p>A Sonnar reúne tecnologia e métodos profissionais de inspeção para localizar a origem de vazamentos em empresas, condomínios e residências.</p><p>Por trás de cada chamado, há uma rotina afetada e alguém que precisa de respostas. Por isso, o atendimento combina rigor técnico, respeito ao ambiente e atenção às preocupações de cada cliente.</p><p>Da primeira conversa à entrega do diagnóstico técnico, cada etapa é conduzida com organização, clareza e cuidado com as pessoas e o patrimônio.</p></div><div className="purpose-grid"><article><span>MISSÃO</span><p>Identificar a origem dos vazamentos com tecnologia e precisão, preservando o patrimônio e oferecendo a cada cliente o cuidado e a atenção que sua situação exige.</p></article><article><span>VISÃO</span><p>Elevar o padrão do caça vazamentos no Vale do Itajaí e no litoral, fazendo da precisão técnica e do cuidado com cada cliente uma experiência que as pessoas façam questão de recomendar.</p></article></div></div>
        <div className="container values-wrap"><div className="values-heading"><span className="eyebrow dark"><span/> NOSSOS VALORES</span><h3>O que orienta cada atendimento.</h3></div><div className="values-grid">{values.map(([title,text],i)=><article key={title}><span>0{i+1}</span><h4>{title}</h4><p>{text}</p></article>)}</div></div>
      </section>

      <section className="coverage-section"><div className="container coverage-inner"><div><div className="eyebrow"><span/> ONDE ATENDEMOS</div><h2>Do Vale do Itajaí ao litoral, <em>onde você estiver.</em></h2><p>Com base em Blumenau, a SONNAR vai até empresas, condomínios e residências para realizar a inspeção. Consulte o atendimento na sua região.</p></div><div className="coverage-card"><MapPin size={30}/><b>Blumenau · Santa Catarina</b><span>Vale do Itajaí · Litoral</span><a href={WHATSAPP} target="_blank" rel="noreferrer">Consultar minha região <ArrowRight size={17}/></a></div></div></section>

      <section className="contact-section" id="contato"><div className="container contact-layout"><div><div className="eyebrow dark"><span/> FALE COM A SONNAR</div><h2>Suspeita de vazamento? <em>Vamos investigar!</em></h2><p>Precisa localizar um vazamento ou esclarecer uma dúvida sobre a inspeção? Conte o que está acontecendo. A SONNAR orienta você sobre o atendimento e os próximos passos.</p><a className="button button-primary" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={19}/> Falar pelo WhatsApp <ArrowRight size={17}/></a></div><div className="contact-details"><a href={PHONE}><Phone/> <span><small>WHATSAPP / TELEFONE</small>(47) 98890-1278</span></a><a href="mailto:sonnar.vazamentos@gmail.com"><Mail/> <span><small>E-MAIL</small>sonnar.vazamentos@gmail.com</span></a><a href="https://www.instagram.com/sonnar.vazamentos/" target="_blank" rel="noreferrer"><Instagram/> <span><small>INSTAGRAM</small>@sonnar.vazamentos</span></a><a href="https://www.sonnarcacavazamentos.com.br" target="_blank" rel="noreferrer"><ArrowRight/> <span><small>ENDEREÇO NA WEB</small>www.sonnarcacavazamentos.com.br</span></a></div></div></section>
    </main>
    <Footer/>
  </div>
}
export default App
