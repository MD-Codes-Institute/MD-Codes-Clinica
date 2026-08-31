import faceScan from "../assets/icons/face-scan.png";
import worldIcon from "../assets/icons/world-icon.png";
import treatedFace from "../assets/icons/treated-face.png";
import countryIcon from "../assets/icons/countries-icon.png";
import trophyIcon from "../assets/icons/trophy-icon.png";
import syringeIcon from "../assets/icons/syringe-icon.png";
import infinityIcon from "../assets/about_clinic/infinito-icon.png";
import securyIcon from "../assets/about_clinic/seguranca-icon.png";
import userIcon from "../assets/about_clinic/user-icon.png";
import traditionIcon from "../assets/icons/tradition.png";

export const procedimentos = [
  {
    key: "homePage",
    conteudo: [
      {
        metodo: "MD Codes™",
        title: "Abordagem não cirúrgica",
        urlImg: "/mdcodes_model.png",
      },
      {
        metodo: "MD Dyna Codes™",
        title: "Expressão natural",
        urlImg: "/mddyna_model.png",
      },
      {
        metodo: "MD Codes™",
        title: "Bioestimulador de colágeno",
        urlImg: "/mdcodes_biostimulator.png",
      },
      {
        metodo: "MD Codes™",
        title: "Regeneradores teciduais",
        urlImg: "/mdcodes_regeneradores.png",
      },
    ],
  },
  {
    key: "procedimentosPage",
    conteudo: [
      {
        metodo: "MD Codes™",
        title: "Ácido hialurônico",
        text: `O tratamento com MD Codes™ e ácido hialurônico representa uma técnica minimamente invasiva, baseada em pontos estratégicos de aplicação para restaurar estrutura, contorno e refinamento, devolvendo equilíbrio e harmonia ao rosto. Mais do que preencher, a técnica propõe um tratamento estruturado e personalizado, que respeita a anatomia de cada paciente e valoriza resultados naturais, precisos e sofisticados.`,
        urlImg1: "/woman_models/alessia_before.png",
        urlImg2: "/woman_models/alessia_after.png",
      },
      {
        metodo: "MD Dyna Codes™",
        title: "Toxina botulínica e ácido hialurônico",
        text: `O MD DYNA Codes™ é uma abordagem avançada que integra toxina botulínica e ácido hialurônico para tratar não apenas a face em repouso, mas também sua dinâmica durante as expressões. Com foco na função muscular, equilíbrio e naturalidade, o procedimento busca refinar movimentos e suavizar sinais de tensão, oferecendo resultados refinados e funcionais mesmo durante as expressões faciais.`,
        urlImg1: "/woman_models/faten_before.png",
        urlImg2: "/woman_models/faten_after.png",
      },
      {
        metodo: "MD Codes™",
        title: "Bioestimulador de colágeno",
        text: `Os procedimentos de MD Codes™ associados aos bioestimuladores de colágeno foram desenvolvidos para aprimorar a qualidade da pele, estimular a produção natural de colágeno, recuperar a elasticidade e favorecer a reestruturação tecidual, contribuindo para maior sustentação facial. Aplicado em pontos estratégicos, o tratamento atua em profundidade para renovar os tecidos de forma gradual, promovendo mais firmeza, vitalidade e estabilidade para o rosto.`,
        urlImg1: "/woman_models/lucimara_before.png",
        urlImg2: "/woman_models/lucimara_after.png",
      },
      {
        metodo: "MD Codes™",
        title: "Regeneradores teciduais",
        text: `Os regeneradores teciduais, quando associados às técnicas de MD Codes, atuam na revitalização da pele e na melhora global da qualidade dos tecidos, promovendo hidratação profunda e contribuindo para uma aparência mais saudável e uniforme. O tratamento estimula a regeneração cutânea, aprimora a textura e a luminosidade da pele e contribui para um rejuvenescimento facial orgânico e aprimorado.`,
        urlImg1: "/woman_models/gabrielle_before.png",
        urlImg2: "/woman_models/gabrielle_after.png",
      },
    ],
  },
];

export const clinicalPillars = [
  {
    id: "diagnostico",
    img: faceScan,
    alt: "Icone de rosto em diagnóstico",
    phrase: "Diagnóstico facial avançado",
  },
  {
    id: "rosto tratado",
    img: treatedFace,
    alt: "Icone do rosto tratado",
    phrase: "Resultados naturais",
  },
  {
    id: "referência mundial",
    img: worldIcon,
    alt: "Icone de um globo",
    phrase: "Referência mundial em estética facial",
  },
];

export const navigationLinks = [
  { name: "Início", href: "/" },
  { name: "Procedimentos", href: "/procedimentos" },
  { name: "Quem somos", href: "/sobre" },
  { name: "Estudo de caso", href: "/estudo-de-caso" },
  { name: "Contato", href: "/contato" },
];

export const aboutContent = [
  {
    id: "about dr",
    title: "Liderança e Excelência",
    texts: `A  excelência começa pela forma como cada paciente é compreendido. 

Dr. Maurício de Maio, referência mundial em injetáveis e criador do MD Codes™, metodologia reconhecida internacionalmente por transformar a maneira de avaliar e tratar o rosto. 

Cada paciente recebe um olhar individualizado, guiado por conhecimento, precisão e um elevado padrão de cuidado. Cada decisão é cuidadosamente planejada para respeitar suas características, necessidades e objetivos. 

Mais do que buscar resultados sofisticados, buscamos resultados que façam sentido para você, naturais, equilibrados e fiéis à sua identidade.

    `,
  },
  {
    id: "about clinic",
    title: "Inovação, Tecnologia e Sofisticação",
    texts: `Localizada na Faria Lima, um dos principais centros financeiros e estratégicos de São Paulo, a Clínica Dr. Maurício de Maio é projetada para oferecer uma experiência de excelência em cada detalhe. 

            A clínica combina tecnologia de ponta, conforto e sofisticação em um ambiente pensado para proporcionar segurança, privacidade e cuidado em todas as etapas do tratamento.`,
  },
];

export const aboutClinicContent = [
  {
    id: "securanca",
    img: securyIcon,
    title: "SEGURANÇA",
    description: "Protocolos rigorosos e materiais de alta qualidade para sua total segurança.",
  },
  {
    id: "experiencia",
    img: userIcon,
    title: "EXPERIÊNCIA EXCLUSIVA",
    description:
      "Do primeiro contato ao acompanhamento dos resultados, cada etapa é conduzida com discrição, atenção e cuidado.",
  },
  {
    id: "referencia",
    img: infinityIcon,
    title: "REFERÊNCIA EM EXCELÊNCIA",
    description: "Excelência reconhecida por pacientes no Brasil e no exterior.",
  },
  {
    id: "tradicao",
    img: traditionIcon,
    title: "Tradição",
    description: "Fundada em 1992, reunindo mais de três décadas de experiência e inovação.",
  },
];

export const counterItems = [
  {
    id: "Países",
    limit: 70,
    duration: 1.5,
    phrase: "Impacto global",
    imgUrl: countryIcon,
  },
  {
    id: "Seringas",
    limit: 25,
    qtd: "Mil",
    title: "Seringas aplicadas",
    phrase: "Precisão em escala",
    imgUrl: syringeIcon,
  },
  {
    id: "Experiência e inovação",
    limit: 30,
    qtd: "Anos",
    title: "de experiência e inovação",
    phrase: "Excelência consolidada",
    imgUrl: trophyIcon,
  },
];
