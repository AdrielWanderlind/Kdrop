# Documento de Requisitos e Especificações Técnicas: K-Drop Hub
### Alunos: Lucas Eiki Uemura, Gustavo Kenzo Iwakura, Renan Negrini, Adriel Wanderlind


## 1. Visão Geral do Sistema

O K-Drop Hub foi idealizado como um ecossistema unificado para atender a todas as necessidades de fãs de K-pop. O objetivo central da aplicação é garantir que os usuários acompanhem todos os momentos importantes de seus fandoms, desde o lançamento de teasers até a chegada de photocards físicos. A plataforma se posiciona como a "plataforma número 1 para fãs de K-pop", englobando funcionalidades de eventos, comércio, compras coletivas, notificações e rastreamento de pacotes.


## 2. Recursos e Funcionalidades Principais (Features)

A plataforma é sustentada por seis pilares essenciais de funcionalidades:
- Calendário Inteligente: Automatiza o acompanhamento de datas cruciais para os fãs, incluindo lançamentos (comebacks), aniversários de artistas e aberturas de pré-vendas.
- Marketplace Verificado: Oferece um ambiente de comércio eletrônico focado em produtos oficiais, garantindo a segurança através de lojas verificadas e sistemas de avaliação.
- Group Orders (Compras Coletivas): Disponibiliza uma funcionalidade para que múltiplos fãs dividam os custos de fretes internacionais, gerando economia nas importações.
- Alertas Inteligentes: Sistema de notificações integrado para alertar os usuários em tempo real sobre atualizações e novidades do ecossistema.
- Rastreamento: Ferramenta dedicada ao acompanhamento logístico das encomendas. 
- Favoritos: Funcionalidade que permite ao usuário salvar seus produtos, eventos ou informações preferidas para acesso rápido.


## 3. Tecnologias Aplicadas

O projeto utiliza um conjunto de tecnologias modernas para garantir interatividade e desempenho:
- Frontend e Lógica: A interface do usuário é construída utilizando a biblioteca React 19 em conjunto com JavaScript (JSX) para o desenvolvimento dos componentes dinâmicos. O ponto de entrada da aplicação utiliza a API ReactDOM.createRoot.
- Estilização e Compilação: O design visual é formatado utilizando o framework Tailwind CSS v4, integrado diretamente como um plugin nativo no ecossistema do Vite, proporcionando tempos de build extremamente rápidos. Animações personalizadas e classes estruturais globais complementares são mantidas no arquivo App.css.
- Gerenciamento de Estado: A aplicação utiliza os "hooks" nativos do React, como o useState, para o controle lógico e dinâmico de componentes interativos, como os slides de benefícios.
- Backend: O sistema se conecta a um serviço de backend com processamento de dados em tempo real (real-time).

## 4. Decisões de Layout e Interface (UI/UX)

As decisões de interface foram tomadas para refletir a estética enérgica do nicho de K-pop, mantendo uma navegação clara e moderna:
- Paleta de Cores: O tema principal é composto por uma paleta suave e vibrante focada em tons de rosa e branco (como #f589bf, #e56b95 e #F7A7C7), complementada por cores de fonte escuras para contraste (como #351927 e #666).
- Tipografia: A família tipográfica definida globalmente é a "Quicksand", importada do Google Fonts, o que entrega uma aparência limpa e sem serifas (sans-serif) para todo o conteúdo legível.
- Estrutura de Componentes e Navegação: O cabeçalho contendo o logotipo e os links de navegação (Benefícios, Recursos, Sobre) possui a propriedade "sticky" com alto índice de profundidade (z-index), o que o mantém fixo no topo da tela enquanto o usuário rola a página. Interatividade visual inclui elementos como o carrossel de benefícios que foram desenhados com botões redondos flutuantes, efeitos de sombra (box-shadow) e transições suaves de redimensionamento (transform: scale) ao passar o mouse.
- Design Responsivo: A aplicação é totalmente adaptável. Em telas com largura inferior a 900px (dispositivos móveis e tablets), a seção de introdução (Hero) altera sua disposição para o modo de colunas empilhadas (flex-direction: column) e os links tradicionais da barra de navegação são ocultados em prol de uma melhor organização do espaço.

