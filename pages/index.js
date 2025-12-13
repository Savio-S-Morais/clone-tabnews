import React from "react";
import Head from "next/head";

function Home() {
  return (
    <>
      <Head>
        <title>Em Construção | Sávio Morais</title>
        <meta
          name="description"
          content="Site pessoal de compartilhamento de aprendizados de tecnologia"
        />
      </Head>

      <div className="container">
        <main className="main-content">
          <h1>🚧 Em Construção 🚧</h1>
          <p>
            Esse site está sendo construido como uma forma de Compartilhar
            aprendizados dentro da área de tecnologia, apresentando referencias
            e indicações de conteúdos e desenvolvimento dentro da área
          </p>
        </main>

        <footer className="footer">
          <p>
            Esse projeto está sendo desenvolvido por{""}
            <a
              href="https://github.com/Savio-S-Morais"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sávio Morais
            </a>
            {""}
            em parceria com o{""}
            <a
              href="https://curso.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              curso.dev
            </a>
          </p>
        </footer>
      </div>
    </>
  );
}

function teste() {
  console.log("identacao errada");
}

export default Home;
