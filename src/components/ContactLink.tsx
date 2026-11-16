import type { ReactNode } from 'react'

const WHATSAPP_URL = 'https://wa.me/5547988901278?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20SONNAR%20e%20tenho%20interesse%20em%20solicitar%20um%20servi%C3%A7o%20de%20ca%C3%A7a-vazamentos.%20Poderiam%20me%20passar%20mais%20informa%C3%A7%C3%B5es%3F'

function WhatsAppIcon({ size = 22 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" fill="currentColor"><path d="M16.02 2.67A13.24 13.24 0 0 0 4.66 22.72L2.8 29.5l6.95-1.82a13.25 13.25 0 1 0 6.27-25.01Zm0 24.12a10.85 10.85 0 0 1-5.53-1.51l-.4-.24-4.12 1.08 1.1-4.01-.26-.42a10.87 10.87 0 1 1 9.21 5.1Zm5.97-8.14c-.33-.16-1.94-.96-2.24-1.07-.3-.11-.52-.16-.74.16-.22.33-.85 1.07-1.04 1.29-.19.22-.38.25-.71.08-.33-.16-1.38-.51-2.63-1.62-.97-.87-1.63-1.94-1.82-2.27-.19-.33-.02-.5.14-.66.15-.14.33-.38.49-.57.16-.19.22-.33.33-.55.11-.22.05-.41-.03-.57-.08-.16-.74-1.78-1.01-2.43-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.41-.3.33-1.14 1.12-1.14 2.73s1.17 3.17 1.33 3.39c.16.22 2.3 3.51 5.57 4.92.78.34 1.39.54 1.87.69.79.25 1.51.21 2.08.13.63-.09 1.94-.79 2.22-1.56.27-.77.27-1.42.19-1.56-.08-.14-.3-.22-.63-.38Z"/></svg>
}

export function ContactLink({ children }: { children: ReactNode }) {
  return <a className="wa-link" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><WhatsAppIcon/><span>{children}</span></a>
}
