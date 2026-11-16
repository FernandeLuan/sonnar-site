import { values } from '../../data/siteContent'

export default function AboutSection() {
  return (
    <section className="about" id="sobre">
      <div className="container about-grid">
        <div>
          <div className="eyebrow">SOBRE A SONNAR</div>
          <h2>Precisão técnica e cuidado com cada ambiente</h2>
          <p>A SONNAR reúne tecnologia e métodos profissionais de inspeção para localizar a origem de vazamentos em empresas, condomínios e residências.</p>
          <p>Atendimento com rigor técnico, respeito ao ambiente e atenção às preocupações de cada cliente.</p>
        </div>
        <div className="about-more">
          <details>
            <summary>Conheça nossa missão e visão</summary>
            <div className="about-more-content">
              <article>
                <small>MISSÃO</small>
                <p>Identificar a origem dos vazamentos com tecnologia e precisão, preservando o patrimônio e oferecendo a cada cliente o cuidado e a atenção que sua situação exige.</p>
              </article>
              <article>
                <small>VISÃO</small>
                <p>Elevar o padrão do caça vazamentos no Vale do Itajaí e no litoral, fazendo da precisão técnica e do cuidado com cada cliente uma experiência que as pessoas façam questão de recomendar.</p>
              </article>
            </div>
          </details>
          <details>
            <summary>Conheça nossos valores</summary>
            <div className="about-more-content">
              {values.map(([title, description]) => (
                <article key={title}>
                  <b>{title}</b>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </details>
        </div>
      </div>
    </section>
  )
}
