import { useState } from 'react'
import { values } from '../../data/siteContent'

export default function AboutSection() {
  const [missionOpen, setMissionOpen] = useState(false)
  const [valuesOpen, setValuesOpen] = useState(false)

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
          <div className={`about-accordion${missionOpen ? ' is-open' : ''}`}>
            <button className="about-more-trigger" type="button" aria-expanded={missionOpen} aria-controls="about-mission" onClick={() => setMissionOpen(open => !open)}>
              Conheça nossa missão e visão
            </button>
            <div className="about-more-content" id="about-mission" aria-hidden={!missionOpen}>
              <div className="about-more-inner">
                <article>
                  <small>MISSÃO</small>
                  <p>Identificar a origem dos vazamentos com tecnologia e precisão, preservando o patrimônio e oferecendo a cada cliente o cuidado e a atenção que sua situação exige.</p>
                </article>
                <article>
                  <small>VISÃO</small>
                  <p>Elevar o padrão do caça vazamentos no Vale do Itajaí e no litoral, fazendo da precisão técnica e do cuidado com cada cliente uma experiência que as pessoas façam questão de recomendar.</p>
                </article>
              </div>
            </div>
          </div>
          <div className={`about-accordion${valuesOpen ? ' is-open' : ''}`}>
            <button className="about-more-trigger" type="button" aria-expanded={valuesOpen} aria-controls="about-values" onClick={() => setValuesOpen(open => !open)}>
              Conheça nossos valores
            </button>
            <div className="about-more-content" id="about-values" aria-hidden={!valuesOpen}>
              <div className="about-more-inner">
                {values.map(([title, description]) => (
                  <article key={title}>
                    <b>{title}</b>
                    <p>{description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
