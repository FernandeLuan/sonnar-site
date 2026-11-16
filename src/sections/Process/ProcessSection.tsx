import { ShieldCheck } from 'lucide-react'
import { steps } from '../../data/siteContent'

export default function ProcessSection() {
  return (
    <section className="light section" id="processo">
      <div className="container">
        <div className="eyebrow dark">COMO FUNCIONA</div>
        <div className="heading">
          <h2>Um processo claro, do contato ao diagnóstico</h2>
          <p>Você conhece o serviço, as condições e o valor antes de contratar</p>
        </div>
        <div className="steps">
          {steps.map(([number, title, description]) => (
            <article key={number}>
              <span>{number}</span>
              <div><h3>{title}</h3><p>{description}</p></div>
            </article>
          ))}
        </div>
        <div className="repair">
          <ShieldCheck aria-hidden="true"/>
          <p><b>Investigação e diagnóstico técnico</b><br/>Você recebe o diagnóstico técnico com os resultados da investigação, a origem identificada e a solução recomendada para o reparo. <strong>A execução do reparo não está incluída na contratação da investigação.</strong></p>
        </div>
      </div>
    </section>
  )
}
