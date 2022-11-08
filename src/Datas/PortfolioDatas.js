// Importer les images ici
import post from "../assets/projects/post.png";
import movieflix from "../assets/projects/movieflix.png";
import obsstjean from "../assets/projects/obsstjean.png";
import lumios from "../assets/projects/lumios.png";

const portfolioDatas = [
  {
    titre: "Lumios",
    image: lumios,
    lien: "https://github.com/WildCodeSchool/2022-03-JS-RemoteFR-TeamKarma-P3-Lumios",
    description:
      "Aboutissement de ma formation, le projet professionel Lumios avait pour but d'apporter une solution à un porteur de projet en suivant un plan de charge. C'était pour nous l'occasion d'utiliser toutes nos connaissances acquises durant le bootcamp afin de pouvoir devenir développeurs Full Stack.",
    github: "https:github.com/moumax/",
    techno1: "React.js",
    techno2: "d3js",
    techno3: "Sass",
    techno4: "mysql",
    techno5: "NodeJs",
  },
  {
    titre: "The wild post",
    image: post,
    lien: "https://clemdsc.github.io/",
    description:
      "Premier project de ma formation à la Wild Code School, \"The wild post\" est une page statique en Html et Css. Il s'agissait de présenter nos premiers pas d'élèves à travers un journal",
    github: "https:github.com/moumax/",
    techno1: "Html",
    techno2: "Css",
  },
  {
    titre: "Movieflix",
    image: movieflix,
    lien: "https://project-2-teamkarma-tigers.netlify.app/",
    description:
      'Second projet, "MovieFlix" nous à permis de découvrir React, ainsi que l\'utilisation des Api à distance. La récupération des données nous à permis de créer quelques outils de requêtes.',
    github: "https:github.com/moumax/",
    techno1: "Html",
    techno2: "Css",
    techno3: "Javascript",
    techno4: "React",
    techno5: "ChakraUi",
  },
  {
    titre: "Observatoire de Saint Jean Le Blanc",
    image: obsstjean,
    lien: "https://obsstjean.fr/",
    description:
      "L'association à laquelle j'appartient, l'observatoire astronomique de Saint Jean Le Blanc avait besoin d'un nouveau site web. Il y'a 3 ans, j'ai donc fait mes premiers pas en développement web! ",
    github: "https:github.com/moumax/",
    techno1: "Html",
    techno2: "Css",
    techno3: "Javascript",
  },
];

export default portfolioDatas;
