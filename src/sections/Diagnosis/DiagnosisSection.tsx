import { Camera, ClipboardCheck, ShieldCheck, Target } from 'lucide-react'

export default function DiagnosisSection() {
  return (
    <section className="diagnosis" aria-labelledby="diagnosis-title">
      <div className="container diagnosis-grid">
        <div className="diagnosis-copy">
          <div className="eyebrow">O QUE VOCÊ RECEBE</div>
          <h2 id="diagnosis-title">A origem do vazamento e a solução para o reparo</h2>
          <p>O diagnóstico técnico apresenta os testes realizados, os resultados encontrados e o que precisa ser feito para resolver o vazamento.</p>
        </div>

        <figure className="diagnosis-image">
          <img
            src="./sonnar-diagnostico-ilustracao.png"
            alt="Ilustração do diagnóstico técnico da SONNAR, com investigação, conclusão técnica e solução para o reparo"
            width="1600"
            height="1600"
            loading="lazy"
            decoding="async"
          />
          <figcaption>Representação ilustrativa do diagnóstico técnico</figcaption>
        </figure>

        <ul className="deliverables" aria-label="Entregáveis do diagnóstico técnico">
          <li><Target aria-hidden="true"/>Origem identificada do vazamento</li>
          <li><ClipboardCheck aria-hidden="true"/>Testes e resultados da inspeção</li>
          <li><Camera aria-hidden="true"/>Registros fotográficos</li>
          <li><ShieldCheck aria-hidden="true"/>Solução indicada para o reparo</li>
        </ul>
      </div>
    </section>
  )
}
