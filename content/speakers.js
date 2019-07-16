export const TALK_TYPES = {
  RECORDED: 0,
  LIVE: 1,
};

const renatoGroffe = (when = '26/08/2019 às 20h15') => ({
  title: 'Desenvolvimento Serverless e Multiplaforma com .NET Core e Azure Functions',
  description: 'O serviço Azure Functions é uma das muitas ofertas em desenvolvimento Web da plataforma de cloud computing da Microsoft, com suporte ao .NET Core e a possibilidade de desenvolvimento multiplataforma através do Visual Studio Code e do Visual Studio 2019. Acompanhe esta apresentação e saiba mais como se beneficiar destas tecnologias, seja você um profissional que trabalha com Windows, Linux ou MacOS.',
  type: TALK_TYPES.LIVE,
  when,
  author: {
    photo: 'https://mvp.microsoft.com/pt-br/PublicProfile/Photo/5002142',
    name: 'Renato Groffe',
    description: 'Consultor em atividades voltadas ao desenvolvimento de sistemas há mais de 15 anos. Microsoft MVP (Most Valuable Professional) e participante do programa MTAC (Multi-Plataform Technical Audience Contributor). Bacharel em Sistemas de Informação, com Especialização em Engenharia de Software e MBA em Business Intelligence. Também é palestrante e autor técnico em portais e revistas especializadas, com foco em tecnologias Microsoft e boas práticas na área de software.',
    facebook: 'https://www.facebook.com/renatogroffe',
    linkedin: 'https://www.linkedin.com/in/renatogroffe/',
    twitter: 'https://twitter.com/RenatoGroff',
    github: 'https://github.com/renatogroffe',
  },
});

const angeloBelchior = (when = '26/07/2019 às 20h50') => ({
  title: 'Real Time Application com CosmosDB, Azure SignalR e Azure Functions',
  description: 'Saiba como criar uma aplicação que processa dados em real-time utilizando CosmosDB, Azure SignalR e Azure Functions',
  type: TALK_TYPES.LIVE,
  when,
  author: {
    photo: 'http://res.cloudinary.com/https-xamarinbr-azurewebsites-net/image/upload/v1442326497/foto_lt3p44.png',
    name: 'Angelo Belchior',
    description: 'Microsoft MVP AI & Dev Tech, Palestrante, Líder de Comunidade e Lead Software Developer na ESX.',
    medium: 'https://medium.com/@angelobelchior',
    twitter: 'https://twitter.com/@angelobelchior',
  },
});

const octavioFernands = (when = '26/07/2019 às 20h50') => ({
  title: 'Case Kovi: Resolvendo concorrência com Javascript + Lambda/SQS/S3',
  description: 'Como a Kovi implementou sua stack de alta performance e escalabilidade utilizando principalmente Serverless, SQS e S3. Soluções para problemas conhecidos da stack e insights importantes para quem quer entrar nesse mundo.',
  type: TALK_TYPES.LIVE,
  when,
  author: {
    photo: '/octavio.jpeg',
    name: 'Octavio Fernandes',
    description: 'Tech Lead & Wtvr it takes @ Kovi.',
    github: 'https://github.com/octaviofernands',
    twitter: 'https://twitter.com/octaviofernands',
  },
});

const pokemonBr = (when = '26/07/2019 às 20h50') => ({
  title: 'Function as a Service no OpenFaaS com Docker e PHP',
  description: 'Com o OpenFaaS é muito simples transformar qualquer coisa em uma function as a service que é executada no Linux ou Windows através do Docker Swarm ou Kubernetes. Além disso o OpenFaaS já possui um portal onde você pode implementar novas funções e verificar as métricas de suas funções.  Aproveitando a facilidade e poder da linguagem PHP, podemos fazer muita coisa usando essa ferramenta.',
  type: TALK_TYPES.RECORDED,
  when,
  author: {
    photo: '/poke.png',
    name: 'Pokemaobr',
    description: 'Apresentador do talk show The Velopers e desenvolvedor. Organizador e curador de eventos de TI. Bacharel em matemática com MBA em SOA. Evangelista PHPSP e criador do PokePHP. O foco é ajudar a comunidade a disseminar conteúdos técnicos e piadas para devs.',
    twitter: 'https://twitter.com/pokemaobr',
    facebook: 'https://facebook.com/pokemaobr',
    instagram: 'https://instagram.com/pokemaobr',
  },
});

const jorgeMaia = (when = '26/07/2019 às 20h50') => ({
  title: 'Azure Functions em projetos de Internet das Coisas',
  description: 'Nesta sessão você saberá por que serverless é uma idéia muito boa de ser adicionada nos projetos de Internet das Coisas. Será apresentada uma visão geral da utilização de Azure Functions tanto do lado nuvem, quando na ponta.',
  type: TALK_TYPES.RECORDED,
  when,
  author: {
    photo: 'https://portal.al.go.leg.br/fotos/galerias/29535/607368.jpg',
    name: 'Jorge Maia',
    description: 'Jorge é Cientista da Computação, há mais de 20 anos desenvolvendo software e hardware; trabalha ajudando empresas a conectar “coisas” e inovar com uso de inteligência artificial e computação em nuvem.  Premiado pela Microsoft como Most Valuable Professional na categoria Azure, semanalmente apresenta a coluna de tecnologia da rádio Transamerica Brasília, além de participar da cobertura de eventos nacionais e internacionais de tecnologia. Mantém também um canal de PodCast e um de vídeos sobre Internet das Coisas e Inovação, além de artigos e cursos sobre os temas em que trabalha. Viaja constantemente e atua contribuindo ativamente com a comunidade de tecnologia Brasileira e Norte Americana.',
    twitter: 'https://twitter.com/jorgemaia',
    instagram: 'https://facebook.com/jorgemaiagram',
    linkedin: 'https://www.linkedin.com/in/jorgeasmaia',
  },
});

const lucasAnjos = (when = '26/07/2019 às 20h50') => ({
  title: 'O que são Filas e como trabalhar com elas em Arquitetura Serverless',
  description: 'Você já precisou integrar duas APIs ou fazer algum tipo de comunicação entre elas? Então provavelmente já deve conhecer o conceito de Filas, se não, vem que eu te explico! E os mais importante: Como trabalhar com Filas em uma arquitetura Serverless? Bora conhecer um pouco sobre esse mundo!',
  type: TALK_TYPES.RECORDED,
  when,
  author: {
    photo: 'https://scontent.flis6-1.fna.fbcdn.net/v/t1.0-9/31093470_1683527808349010_1233511012523573248_n.jpg?_nc_cat=103&_nc_ht=scontent.flis6-1.fna&oh=4e40b4fd06bc4aea1aad4827b3586e66&oe=5D825AFB',
    name: 'Lucas Anjos',
    description: 'Desenvolvedor desde seus 17 anos, trabalhou em startups e big players no Brasil. Terminou sua jornada no BR como Tech Lead e hoje está em novas aventuras pela Europa.',
    instagram: 'https://www.instagram.com/lucasanjosbr',
  },
});

const neriJJJr = (when = '26/07/2019 às 20h50') => ({
  title: 'Usando serverless para processar +1.5 mi de pacotes',
  description: 'Como usamos o serverless aqui no EBANX Track para processar os updates e notificações dos mais de 1.3 milhões de pacotes.',
  type: TALK_TYPES.RECORDED,
  when,
  author: {
    photo: 'https://avatars2.githubusercontent.com/u/17169?s=460&v=4',
    name: 'Neri J. J. Jr',
    description: 'Full stack at EBANX, Serverless evangelist, Survivalism enthusiast.',
    linkedin: 'https://www.linkedin.com/in/nerijunior',
    github: 'https://www.github.com/in/nerijunior',
  },
});

const emmanuelBrandao= (when = '26/07/2019 às 20h50') => ({
  title: 'DevOps em apps Serverless',
  description: 'Aplicações serverless também precisam de um processo de estruturado e eficiente de entrega, e por isso elas também se beneficiam de DevOps. Ah, você também não sabe o que é DevOps? Nessa palestra você não só vai saber o que é, mas como aplicar em um desenvolvimento no Azure de aplicações serverless e entregar melhor suas demandas.',
  type: TALK_TYPES.RECORDED,
  when,
  author: {
    photo: 'https://aboutme.imgix.net/background/users/e/g/o/egomesbrandao_1510939007_014.jpg',
    name: 'Emmanuel Brandão',
    description: 'Apoio na realização da transformação ágil fazendo a mudança para o mindset de DevOps em times de desenvolvimento de software. Sou Microsoft MVP na categoria Developer Technologies.',
    twitter: 'https://www.twitter.com/in/egomesbrandao',
    linkedin: 'https://www.linkedin.com/in/egomesbrandao',
    github: 'https://www.github.com/in/egomesbrandao',
  },
});

const lucasTelles= (when = '26/07/2019 às 20h50') => ({
  title: 'Azure functions do zero',
  description: 'Vamos demonstrar o que é como funciona o recurso de functions do Azure, como é simples de criar, até mesmo com VSCode, alem de mostrar como funciona integração com outros serviços do azure como filas e banco de dados. Além disso a grande vantagem do serviço, seu custo diferenciado baseado em consumo!',
  type: TALK_TYPES.LIVE,
  when,
  author: {
    photo: 'https://pbs.twimg.com/profile_images/1116526293733052418/kl7B0VSZ_400x400.jpg',
    name: 'Lucas Teles',
    description: 'Desenvolvedor fullstack na Lambda3, formado em ciência da computação e atuo como desenvolvedor a mais de 10 anos. Acredito no valor da qualidade e boas praticas e militante de programação funcional.',
    twitter: 'https://www.twitter.com/in/lucasteles42',
    linkedin: 'https://www.linkedin.com/in/lteles',
    github: 'https://www.github.com/in/lucasteles',
  },
});

const robsonSoares= (when = '26/07/2019 às 20h50') => ({
  title: 'Escalando sua aplicação mundialmente com Cosmos DB',
  description: 'Entenda o que é o Cosmos DB, quais as suas características e como ele pode eliminar a necessidade de uma API para aplicativos CRUD based. Além disto veremos como é simples replicar sua aplicação mundialmente, aumentar a performance da sua base de dados de acordo com sua demanda e como é simples integra-lo com Azure Functions',
  type: TALK_TYPES.LIVE,
  when,
  author: {
    photo: 'https://pbs.twimg.com/profile_images/926564025265160192/wEI0N-Ms.jpg',
    name: 'Robson Soares Amorim',
    description: 'Desenvolvedor na Lambda3. Adepto a práticas ágeis, entusiasta de softwares voltados a saúde humana e animal. Organizador do @High5Devs, gosta de contribuir com a comunidade com posts, podcasts, palestras. Formado em sistemas de informação pela UNIP em 2012. Sempre em busca de novos conhecimentos e troca de experiências!',
    facebook: 'https://www.facebook.com/in/robson.soares.7106',
    twitter: 'https://www.twitter.com/in/AmorimRob',
  },
});

const gustavoGondim1 = (when = '26/07/2019 às 20h50') => ({
  title: 'Processamento assíncrono com Azure Functions e Service Bus',
  description: 'Nem sempre o HTTP Trigger te salvará! Essa é uma palestra básica sobre como implementar Azure Functions usando triggers de Service Bus, útil para processamento assíncrono.',
  type: TALK_TYPES.LIVE,
  when,
  author: {
    photo: 'https://gustavogondim.carrd.co/assets/images/image01.jpg?v95194434091451',
    name: 'Gustavo Gondim',
    description: 'CTO e co-fundador da NOALVO, desenvolvedor de software há 13 anos e empreendedor de tecnologia há 7, Microsoft Certified Professional e Microsoft Specialist, perito habilitado do Tribunal de Justiça do Estado de São Paulo, entusiasta e colaborador das comunidades e projetos de tecnologia open source, mentor do Google Launchpad Accelerator pela aceleradora ACE Startups, fã amador de filosofia e direito.',
    site: 'bit.ly/ggondim'
  },
});

const gustavoGondim2 = (when = '26/07/2019 às 20h50') => ({
  title: 'Usando o Funcpack para facilitar o carregamento de pacotes do Node',
  description: 'Nem sempre o HTTP Trigger te salvará! Essa é uma palestra básica sobre como implementar Azure Functions usando triggers de Service Bus, útil para processamento assíncrono.',
  type: TALK_TYPES.LIVE,
  when,
  author: {
    photo: 'https://gustavogondim.carrd.co/assets/images/image01.jpg?v95194434091451',
    name: 'Gustavo Gondim',
    description: 'CTO e co-fundador da NOALVO, desenvolvedor de software há 13 anos e empreendedor de tecnologia há 7, Microsoft Certified Professional e Microsoft Specialist, perito habilitado do Tribunal de Justiça do Estado de São Paulo, entusiasta e colaborador das comunidades e projetos de tecnologia open source, mentor do Google Launchpad Accelerator pela aceleradora ACE Startups, fã amador de filosofia e direito.',
    site: 'bit.ly/ggondim'
  },
});

const gustavoGondim3 = (when = '26/07/2019 às 20h50') => ({
  title: 'Azure Functions + Airtable: Um back-end sem banco de dados e sem uma única linha de código',
  description: 'Situações enxutas pedem soluções criativas! Nessa palestra você aprenderá como implementar um cadastro de formulário completo (CRUD), criando um back-end sem uma única linha de código usando Azure Functions Proxies e o Airtable.',
  type: TALK_TYPES.LIVE,
  when,
  author: {
    photo: 'https://gustavogondim.carrd.co/assets/images/image01.jpg?v95194434091451',
    name: 'Gustavo Gondim',
    description: 'CTO e co-fundador da NOALVO, desenvolvedor de software há 13 anos e empreendedor de tecnologia há 7, Microsoft Certified Professional e Microsoft Specialist, perito habilitado do Tribunal de Justiça do Estado de São Paulo, entusiasta e colaborador das comunidades e projetos de tecnologia open source, mentor do Google Launchpad Accelerator pela aceleradora ACE Startups, fã amador de filosofia e direito.',
    site: 'bit.ly/ggondim'
  },
});

const glaciaLemos = (when = '26/07/2019 às 20h50') => ({
  title: 'Criando API\'s Escaláveis com Node.js & Serverless',
  description: 'Node.Js é escalável. O Azure também é um serviço de nuvem escalável. E o que acha de usar os dois juntos e mais o Serveless?! Quais os benefícios de usarmos uma Arquitetura Serverless em aplicações Node.js integradas com Azure? Quais são os ganhos em usar essas tecnologias? Durante a palestra, estarei falando sobre como podemos definir uma arquitetura altamente escalável usando Node.js com Azure Functions baseado numa arquitetura Serverless. E claro que vai ter uma super demo em como podemos criar um Serverless Function App no Azure! :)',
  type: TALK_TYPES.LIVE,
  when,
  author: {
    photo: 'https://developer.microsoft.com/en-us/advocates/media/profiles/glaucia-lemos.png',
    name: 'Glaucia Lemos',
    description: 'Glaucia Lemos é Regional Cloud Advocate LATAM 🥑 na Microsoft. Ama realizar contribuições em projetos Open Source. Atua como Member & Contributor no Node.js Foundation e no React Community realizando contribuições nas traduções do site Nodejs.org e Reactjs.org para o português.Também atua como: Community Leader & Tech Speaker do Meetup Coders in Rio , Technical Author no Portal iMasters e Volunteer & Tech Speaker do WoMakersCode.',
    site: 'https://glaucialemos.netlify.com/contact'
  },
});


export default [
  lucasTelles('22/07/2019 às 20h10'), // Azure functions do zero
  gustavoGondim2('22/07/2019 às 20h50'), // Usando o Funcpack para facilitar o carregamento de pacotes do Node
  jorgeMaia('22/07/2019 às 21h00'), // Azure Functions em projetos de Internet das Coisas

  pokemonBr('23/07/2019 às 20h10'), // Function as a Service no OpenFaaS com Docker e PHP
  lucasAnjos('23/07/2019 às 20h50'), // O que são Filas e como trabalhar com elas em Arquitetura Serverless
  neriJJJr('23/07/2019 às 21h00'), // Usando serverless para processar +1.5 mi de pacotes

  angeloBelchior('24/07/2019 às 20h10'), // Real Time Application com CosmosDB, Azure SignalR e Azure Functions
  octavioFernands('24/07/2019 às 20h50'), // Case Kovi: Resolvendo concorrência com Javascript + Lambda/SQS/S3
  gustavoGondim1('24/07/2019 às 21h00'), // Processamento assíncrono com Azure Functions e Service Bus

  emmanuelBrandao('25/07/2019 às 20h10'), // DevOps em apps Serverless
  robsonSoares('25/07/2019 às 20h50'), // Escalando sua aplicação mundialmente com Cosmos DB

  gustavoGondim3('26/07/2019 às 20h10'), // Azure Functions + Airtable: Um back-end sem banco de dados e sem uma única linha de código
  renatoGroffe('26/07/2019 às 20h50'), // Desenvolvimento Serverless e Multiplaforma com .NET Core e Azure Functions
  glaciaLemos('26/07/2019 às 21h00'), // Criando API\'s Escaláveis com Node.js & Serverless
];
