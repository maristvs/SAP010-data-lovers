# Data Lovers - Game of Thrones

Segundo projeto realizado pela turma SAP010 da Laboratoria. 


<div align="center">
  
  Acesse o projeto: [aqui]((https://www.linkedin.com/in/ma%C3%ADra-bergamaschi-aaa8a6139/)  
  <br>
  <img align="center" alt="git" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
  <img align="center" alt="Rafa-HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
  <img align="center" alt="Rafa-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">
  <img align="center" alt="Rafa-Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
  <img align="center" alt="vscode" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
  <img align="center" alt="Figma" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
  <br>

  Desenvolvido por 
  <br>
  Maíra Bergamaschi <br> 
  [Linkedin](https://www.linkedin.com/in/ma%C3%ADra-bergamaschi-aaa8a6139/) | [Github](https://github.com/mairabergamaschi)
  <br>
  Marianna Esteves A. e Moura <br>
  [Linkedin](https://www.linkedin.com/in/marianna-esteves-43bb6a274/) | [Github](https://github.com/maristvs)
</div>
 
***

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Histórias do Usuário](#3-histórias-do-usuário)
* [4.Metodologia](#4-metodologia)
* [5. Interface](#5-interface)
* [6. Objetivos de Aprendizagem e Cobertura de Testes](#6-objetivos-de-aprendizagem-e-cobertura-de-testes)
* [7. Especificações Técnicas](#7-especificações-técnicas)

***

## 1. Prefácio

Este trabalho tem como objetivo desevolver uma aplicação web responsiva sobre a série Game of Thrones que possibilita visualizar os personagens, organizá-los em ordem alfabética crescente e decrescente, pesquisar por nome ou sobrenome, e filtrá-los por família. Também é possível encontrar informações como o título do personagem no card e informações sobre a série em uma página anexa. 
 Game of Thrones é uma série de TV produzida pela HBO baseada na obra de George R. R. Martin e tem todos seus direitos autorais reservados.

***

## 2. Resumo do projeto

Este trabalho foi realizado com o intuito de aplicar as tecnologias abordadas no bootcamp da Laboratória na prática e foi montado usando a linguagem JavaScript (Vanilla) de modo que fosse possível testar nossos conhecimentos com programação lógica, manipulação de DOM, dados mais complexos como listas e objetos bem como o trabalho colaborativo no GitHub. Tudo isso a partir de um arquivo de dados disponibilizado pela Laboratoria. 

***

## 3. Histórias do Usuário

Pensando na experiência do usuário, desenvolvemos um produto no formato de Fanpage que permite que a experiência de consultar o elenco de personagens de forma divertida, intuitiva e prática ainda que simples. 
  
 #### * Quem são os usuários principais do produto?
  Fãs novos e assíduos da série que tem interesse em consultar informações básicas sobre os personagens e suas casas. 
 #### * Quais são os objetivos dos usuários com relação ao produto?
  Acessar informações como o nome completo dos personagens, Casa pertencente, título e ano de nascimento. Além de uma página anexa com o trailer oficial e um botão que direciona para a primeira temporada da série. 
 #### * Quais são os dados mais relevantes que querem ver na interface e por quê?
  Os dados mais relevantes que os usuários desejam ver na interface são os personagens e a família à qual eles pertencem. Isso se deve ao fato de a série abordar um cenário de disputa política e territorial, tornando indispensável que os usuários possam entender esses conceitos de pertencimento dos personagens.
 #### * Quando utilizam ou utilizariam o produto? 
  Quando quiserem consultar a lista de personagens.


## 4. Metodologia

Utilizamos a ferramenta Google Keep para o planejamento da logística, bem como divisão de tarefas e planejamento dos sprints. Usamos a ferramenta para também compartilhar links de materiais usados como bibliografia. 
 As tecnologias utilizadas neste projeto incluem: JavaScript Vanilla, HTML5, CSS3 para criação da página, Jest para os testes unitários e o Git colaborativo na plataforma Github para o controle de versões.
 Uma vez que o aplicativo foi criado a partir do uso da linguagem JavaScript pura, dividimos sua aplicação em arquivos da seguinte forma: 
 * data.js:
 inclui a lógica das funções criadas para buscar nome, filtrar por família, cálculo agregado de porcentagem relacionada à família e ordenação alfabética.
 * extra.js: 
 inclui a lógica da função de tradução dos cards, uma vez que o banco de dados estava em Inglês. 
 * main.js: 
 inclui toda a manipulação de DOM da página relacionados a exibição de dados na tela, filtragem e ordenação.

 ***

## 5. Interface Responsiva

 Para elaborar o design do aplicativo web, primeiro criamos o protótipo de baixa fidelidade a fim de definir os elementos que seriam usados, bem como um esboço de seu layout em papel sulfite e lápis. 

  ![prototype](https://github.com/maristvs/SAP010-data-lovers/assets/131373702/23771ef4-71be-44fe-a9cf-725ddee48f5d)

  
  A partir deste primeiro esboço, criamos um protótipo de alta fidelidade no Figma, onde definimos quais seriam as cores e imagens utilizadas, bem como a escolha visual dos elementos. 
  Toda o design foi pensado na experiência de usuário, buscando que este tenha uma sensação de imersão no cenário de Game of Thrones, desde a escolha minuciosa da logo, a imagem de background referenciando Westeros, local onde a série acontece, a escolha das cores que remete à identidade visual da produção. 

 ![homepage](https://github.com/maristvs/SAP010-data-lovers/assets/131373702/a50fb23e-cc81-453c-94e1-9a4c64cc9831)
  
  Na página inicial, temos a projeção dos cards de personagem com suas informações, um campo de pesquisa para que o usuário busque o personagem pelo nome ou sobrenome, um botão de direcionamento para o site oficial de GoT, e um menu hamburguer acionável que direciona para a página sobre a série, permite que o usuário escolha um filtro for familia, uma ordenação alfabética crescente e/ou descresente e uma página adjacente sobre as desenvolvedoras.

![menuopened](https://github.com/maristvs/SAP010-data-lovers/assets/131373702/813314fd-61e2-4e53-8912-d861750841dd)


  
  Na página sobre a série, podemos ver uma breve descrição sobre a obra e o trailer oficial produzido pela HBO. 

  ![aboutgot](https://github.com/maristvs/SAP010-data-lovers/assets/131373702/4be08d82-7a53-4b08-8974-fd8a521f29e4)


  
  E por fim, na página sobre as desenvolvedoras, temos uma breve descrição do projeto, apresentação das desenvolvedoras bem como divulgação de redes sociais e tecnologias utilizadas. 

  ![aboutus](https://github.com/maristvs/SAP010-data-lovers/assets/131373702/ee419475-6748-49f8-a4d8-6a362baab0de)

 A interface foi trabalhada de forma responsiva para se adaptar a outros tipos de tela além do desktop, deste modo podemos visualizar:
 
#### Interface para Mobile: 
 ![mobileprint](https://github.com/maristvs/SAP010-data-lovers/assets/131373702/de6afb60-3bd5-4d4c-83cb-afc439a13b60)

#### Interface para tablets: 
![tabletprint](https://github.com/maristvs/SAP010-data-lovers/assets/131373702/708dbd1d-f58c-4a8d-9c2d-4e46916357d5)


***

## 6. Objetivos de aprendizagem e cobertura de testes unitários

  * Uso de Vanilla JavaScript 
  * Uso de HTML semântico
  * Uso de seletores de CSS
  * Uso de filtros baseados em uma condição
  * Inclusão de Cálculo Agregado
  * Criação de protótipo de alta fidelidade usando o Figma
  * Criação de testes unitários
  * Cobertura mínima de 70% de statements, functions, lines e branches
  * Responsividade 
  * Documentação README incluindo descrição do produto, histórias de usuário, e interface. 
  * Controle de versionamento colaborativo (Git)
  
  # * Cobertura dos testes: 
  
 ![covertests](https://github.com/maristvs/SAP010-data-lovers/assets/131373702/a7c62a0c-1b80-462e-bd5c-29c4e036b56e)


## 7. Especificações Técnicas

O projeto foi desenvolvido utilizando as seguintes tecnologias e ferramentas:

* HTML: A linguagem de marcação utilizada para estruturar e organizar os elementos da interface do usuário.

* CSS: Utilizado para estilizar e personalizar a aparência visual da aplicação, garantindo uma experiência agradável e coerente.

* JavaScript: A linguagem de programação que permite a interatividade e funcionalidades dinâmicas na aplicação.

* Git: Utilizado para controle de versionamento do código, permitindo o acompanhamento das alterações, rastreamento de problemas e colaboração entre membros da equipe.

* GitHub: Plataforma de hospedagem de código-fonte que possibilita o armazenamento remoto do repositório do projeto, facilitando o compartilhamento e colaboração entre os desenvolvedores.

* Testes unitários: Foram implementados testes unitários utilizando a biblioteca de testes Jest para garantir o correto funcionamento das funções desenvolvidas. Os testes abrangem as principais funcionalidades do projeto, como filtrar personagens por família, calcular a porcentagem por família e buscar personagens por nome.

* Metodologia ágil: A equipe adotou uma abordagem ágil para o desenvolvimento do projeto, utilizando Scrum como metodologia. Isso permitiu uma maior flexibilidade e adaptabilidade ao longo do processo de desenvolvimento, além de promover uma comunicação eficiente e um acompanhamento contínuo das tarefas.

* Responsividade: A aplicação foi desenvolvida seguindo princípios de design responsivo, o que significa que ela é capaz de se adaptar e fornecer uma experiência adequada em diferentes dispositivos e tamanhos de tela, desde desktops até smartphones.

* Acessibilidade: Foram aplicadas práticas de acessibilidade para garantir que a aplicação seja utilizável por pessoas com deficiência visual, auditiva ou motora. Isso inclui o uso adequado de semântica HTML, contraste de cores adequado, compatibilidade com leitores de tela e teclado, entre outras diretrizes de acessibilidade.

Essas especificações técnicas fornecem a base para o desenvolvimento e funcionamento da aplicação, garantindo uma implementação sólida e eficiente.
  

