# Documento de Visão e Escopo: Website do Passaporte Competências Digitais

**Versão:** 1.2
**Data:** 23 de setembro de 2025

---

## Etapa 3: Funcionalidades e Fluxos de Utilizador (O "Como")

Esta secção detalha o funcionamento das componentes interativas do website, com um foco especial no processo crítico de conclusão do curso. O objetivo é fornecer uma especificação clara que possa guiar o desenvolvimento técnico, baseada na lógica validada do sistema "Gateway de Conclusão de Curso" existente.

### 7.0 Fluxo Crítico: O Desafio Digital Final

Este fluxo descreve a jornada do formando desde o momento em que decide iniciar a validação final até à receção da sua medalha digital. O sistema foi desenhado para ser seguro e anónimo, sem exigir qualquer tipo de login, utilizando um token de sessão único para validar a participação.

#### 7.1 Princípio de Funcionamento: O `uniqueToken`

Para ligar a visita de um formando ao website com a sua submissão no formulário do "Desafio Final" (Google Form), o sistema gerará um **Token de Sessão Único** (`uniqueToken`) sempre que a página do desafio for carregada.

* **Geração:** O token será um hash criptográfico (SHA-256) de um identificador de sessão anónimo e do timestamp atual. Isto garante que cada sessão é única e impossível de adivinhar.
* **Utilização:**
    1.  O `uniqueToken` é automaticamente injetado como uma resposta oculta no link do Google Form.
    2.  Quando o formando submete o formulário, o token é guardado juntamente com as suas respostas.
    3.  Para reclamar a medalha, o website envia o `uniqueToken` ao sistema, que o procura nas respostas do formulário para confirmar a submissão.

#### 7.2 Fluxo Passo-a-Passo

**Contexto:** O formando está na secção "A Conquista do Cume" da página do seu curso.

1.  **Ativação do Desafio:**
    * O formando clica no botão "Iniciar o Desafio Final".
    * **Ação do Sistema (Frontend):** O website já carregou previamente (da sua Base de Dados/CMS) toda a configuração para este curso específico, identificado por um `CourseID` (ex: `inclusao-digital-internet-seguranca-T1`). Isto inclui o link para o Google Form, os campos a pré-preencher e os links das medalhas.
    * **Ação do Sistema (Backend):** É gerado o `uniqueToken` para esta sessão.

2.  **Redirecionamento para o Desafio:**
    * **Ação do Sistema:** O website constrói dinamicamente o URL final do Google Form. Este URL inclui:
        * O link base do formulário.
        * O `uniqueToken` como parâmetro para um campo pré-definido.
        * Outros dados do curso (nome do curso, formador, data) como parâmetros para outros campos pré-preenchidos.
    * **Ação do Utilizador:** O formando é redirecionado para o Google Form, que abre numa nova aba, já pré-preenchido com a informação relevante. Ele preenche o quiz e clica em "Submeter".

3.  **Reclamação da Medalha Digital:**
    * **Ação do Utilizador:** O formando regressa à página do curso no website do Passaporte e clica no botão "Conquistar a minha Medalha Digital".
    * **Ação do Sistema (Frontend):** Uma mensagem de "A verificar a sua submissão..." é exibida. O frontend envia uma requisição ao backend, contendo o `uniqueToken` da sessão, o ID do Google Form e o ID da pergunta onde o token foi guardado.

4.  **Verificação e Confirmação:**
    * **Ação do Sistema (Backend):**
        * O backend recebe o pedido e acede às respostas do Google Form correspondente.
        * Procura, da mais recente para a mais antiga, por uma submissão que contenha o `uniqueToken` exato.
        * **Se encontrar uma correspondência:** O sistema confirma que o formando completou o desafio.
        * **Se não encontrar:** O sistema informa o frontend que a submissão não foi encontrada (o formando pode ter de esperar um pouco ou pode não ter submetido o formulário).
    * **Ação do Sistema (Frontend):**
        * **Em caso de sucesso:** A mensagem muda para "Sucesso! A sua conquista foi validada.". O sistema procede para o passo seguinte.
        * **Em caso de falha:** É exibida uma mensagem como: "Ainda não encontrámos a sua submissão. Por favor, tente novamente dentro de um minuto. Se o erro persistir, fale com o seu formador."

5.  **Entrega da Recompensa e Feedback:**
    * **Ação do Sistema (Frontend):** Após a confirmação bem-sucedida:
        * O botão "Conquistar a minha Medalha Digital" transforma-se ou revela o link final para a medalha digital, que o utilizador pode agora abrir.
        * Opcionalmente, o sistema pode extrair as respostas do formando do formulário, exibi-las na página para sua referência e oferecer um botão para as copiar para a área de transferência.
        * Um novo botão, "Ajude-nos a melhorar", aparece, contendo o link para o questionário de satisfação (ex: Microsoft Form), também ele pré-preenchido com dados do curso.

### 8.0 Outras Funcionalidades Interativas

* **Barra de Progresso (Local e Temporária):** Nas páginas de curso, para dar aos formandos uma sensação de avanço enquanto exploram os recursos, será implementada uma barra de progresso visual. O estado desta barra será guardado no armazenamento local do navegador (*local storage*). Esta informação é anónima, específica daquele navegador, e não é enviada para o servidor, respeitando totalmente o RGPD.

### 9.0 Requisitos de Acessibilidade e Responsividade

O website será desenvolvido com um compromisso fundamental com a inclusão e a usabilidade universal.

* **Responsividade (Mobile-First):** O design e o desenvolvimento seguirão uma abordagem "mobile-first", garantindo uma experiência de utilização perfeita em telemóveis, que são o principal dispositivo de acesso para muitos dos nossos formandos. A interface será testada em diversos tamanhos de ecrã, desde smartphones a desktops.
* **Acessibilidade (WCAG 2.1):** O website cumprirá, no mínimo, o nível AA das diretrizes WCAG 2.1 (Web Content Accessibility Guidelines). Isto inclui, mas não se limita a:
    * **Contraste:** Garantir que todo o texto tem um rácio de contraste adequado.
    * **Navegação por Teclado:** Permitir que todas as funcionalidades sejam acessíveis utilizando apenas o teclado.
    * **Texto Alternativo:** Fornecer descrições textuais para todas as imagens informativas.
    * **Semântica HTML:** Utilizar uma estrutura de cabeçalhos (H1, H2, etc.) e elementos HTML corretos para que o site seja facilmente navegável por leitores de ecrã.