import { useState } from 'react'
import type { FormEvent } from 'react'
import './Newsletter.scss'

// Faixa de inscrição na newsletter: texto à esquerda e formulário à direita.
export function Newsletter() {
    // Guarda se o formulário já foi enviado, para mostrar uma mensagem de confirmação.
    const [submitted, setSubmitted] = useState(false)

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        // Impede a página de recarregar. Ainda não existe um servidor para receber os dados.
        event.preventDefault()
        setSubmitted(true)
    }

    return (
        // aria-labelledby liga a seção ao título, para leitores de tela.
        <section className="newsletter" aria-labelledby="newsletter-title">
            <div className="newsletter__inner">
                <div className="newsletter__text">
                    <h2 id="newsletter-title" className="newsletter__title">
                        Inscreva-se na nossa newsletter
                    </h2>
                    <p className="newsletter__description">
                        Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.
                    </p>
                </div>

                {submitted ? (
                    // role="status" faz leitores de tela anunciarem a mensagem quando ela aparece.
                    <p className="newsletter__success" role="status">
                        Obrigado! Sua inscrição foi realizada.
                    </p>
                ) : (
                    <form className="newsletter__form" onSubmit={handleSubmit}>
                        <div className="newsletter__fields">
                            {/* O placeholder não substitui um rótulo, por isso uso aria-label nos campos.
                  O required e o type="email" fazem o próprio navegador validar o envio. */}
                            <input
                                className="newsletter__input"
                                type="text"
                                name="name"
                                placeholder="Digite seu nome"
                                aria-label="Seu nome"
                                autoComplete="name"
                                required
                            />
                            <input
                                className="newsletter__input"
                                type="email"
                                name="email"
                                placeholder="Digite seu e-mail"
                                aria-label="Seu e-mail"
                                autoComplete="email"
                                required
                            />
                            <button className="newsletter__button" type="submit">
                                Inscrever
                            </button>
                        </div>

                        {/* Colocar a caixa dentro do label deixa o texto clicável também. */}
                        <label className="newsletter__terms">
                            <input type="checkbox" name="terms" required />
                            Aceito os termos e condições
                        </label>
                    </form>
                )}
            </div>
        </section>
    )
}