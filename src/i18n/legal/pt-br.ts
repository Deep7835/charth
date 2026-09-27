import type { LegalMessages } from "./en";

const messages: LegalMessages = {
  privacy: {
    metaTitle: "Política de privacidade",
    metaDescription:
      "Como o {site} trata seus dados: sem contas, os gráficos ficam no seu navegador e cookies de análise opcionais só com o seu consentimento.",
    h1: "Política de privacidade",
    intro:
      "O {site} é uma ferramenta gratuita de comparação de altura. Coletamos o mínimo de dados possível. Esta política explica o que é processado quando você usa o site e quais escolhas você tem.",
    sections: [
      {
        h: "Dados que você insere",
        p: [
          "Os nomes e as alturas que você digita nas ferramentas são processados no seu navegador. Não os armazenamos em nossos servidores.",
          "Quando você usa Compartilhar, o gráfico é codificado no próprio link. Qualquer pessoa com o link pode ver esse gráfico, então evite colocar informações privadas nos nomes.",
          "As imagens que você carrega são lidas localmente pelo seu navegador e nunca são enviadas nem incluídas em links de compartilhamento.",
        ],
      },
      {
        h: "Cookies e armazenamento local",
        p: [
          "Armazenamos sua preferência de tema e sua escolha sobre cookies no armazenamento local do seu navegador. Esses dados são necessários para que o site funcione como você espera.",
          "Se você aceitar os cookies de análise, usamos o Google Analytics para medir o uso anônimo, como páginas visitadas, país e tipo de dispositivo. Não usamos análises sem o seu consentimento, e você pode alterar sua escolha a qualquer momento em “Configurações de cookies”, no rodapé.",
          "Se exibirmos publicidade no futuro, cookies de anúncios personalizados só serão usados com o seu consentimento, e esta política será atualizada antes.",
        ],
      },
      {
        h: "Registros do servidor",
        p: [
          "Nosso provedor de hospedagem processa automaticamente dados técnicos, como endereço IP, tipo de navegador e páginas solicitadas, para disponibilizar o site e protegê-lo contra abusos. Esses registros são mantidos por tempo limitado e não são usados para identificar você.",
        ],
      },
      {
        h: "Seus direitos",
        p: [
          "Dependendo de onde você mora (por exemplo, segundo o RGPD na UE ou a CCPA na Califórnia), você pode ter o direito de acessar, corrigir ou excluir dados pessoais e de se opor ao tratamento. Como não mantemos contas nem dados de gráficos, a maioria das solicitações pode ser resolvida limpando o armazenamento do seu navegador. Para qualquer outro assunto, entre em contato pelo {email}.",
        ],
      },
      {
        h: "Crianças",
        p: ["O site é adequado para o público em geral e não coleta intencionalmente dados pessoais de crianças."],
      },
      {
        h: "Alterações",
        p: ["Podemos atualizar esta política. A data no topo da página indica a versão mais recente."],
      },
    ],
  },
  terms: {
    metaTitle: "Termos de serviço",
    metaDescription:
      "Os termos de uso do {site}, uma ferramenta visual e gratuita de comparação de altura, incluindo uso aceitável e isenções de responsabilidade.",
    h1: "Termos de serviço",
    intro: "Ao usar o {site}, você concorda com estes termos. Se não concordar, por favor, não use o site.",
    sections: [
      {
        h: "Uso das ferramentas",
        p: [
          "As ferramentas são gratuitas para uso pessoal, educacional e comercial. Você pode compartilhar e publicar os gráficos que criar, incluindo as imagens baixadas.",
          "Não faça uso indevido do site, por exemplo, tentando interromper seu funcionamento, fazendo scraping em um volume que afete outros usuários ou usando-o para criar conteúdo ilegal ou de assédio.",
        ],
      },
      {
        h: "Precisão",
        p: [
          "As alturas de figuras públicas, personagens, animais e objetos são valores comumente divulgados e podem diferir de outras fontes. As estatísticas vêm dos conjuntos de dados de pesquisa citados. As proporções corporais nos desenhos e modelos 3D são aproximações.",
          "O site tem fins informativos e de entretenimento. Ele não constitui aconselhamento médico; consulte um profissional sobre questões de crescimento ou saúde.",
        ],
      },
      {
        h: "Propriedade intelectual",
        p: [
          "O design, o código e as ilustrações do site pertencem ao {site}. Os nomes de pessoas, personagens e monumentos pertencem aos seus respectivos proprietários e são usados apenas para identificação.",
          "Os dados de altura média são © NCD Risk Factor Collaboration e são usados sob a licença CC BY 4.0.",
        ],
      },
      {
        h: "Responsabilidade",
        p: [
          "O site é fornecido “no estado em que se encontra”, sem garantias. Na medida permitida por lei, não nos responsabilizamos por perdas decorrentes do seu uso.",
        ],
      },
      {
        h: "Contato",
        p: ["Dúvidas sobre estes termos: {email}."],
      },
    ],
  },
};

export default messages;
