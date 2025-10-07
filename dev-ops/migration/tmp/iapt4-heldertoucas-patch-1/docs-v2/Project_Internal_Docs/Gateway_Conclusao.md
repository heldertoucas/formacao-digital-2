# Documentação do Projeto: Gateway de Conclusão de Curso

## 1. Visão Geral do Projeto 🎯

Este projeto, atualmente implementado como uma Google Apps Script Web App, funciona como um **"Gateway de Conclusão de Curso"**. O seu principal objetivo é fornecer aos formandos uma página única e centralizada onde podem realizar os passos finais de um curso, nomeadamente:

1.  **Aceder ao Desafio Digital Final**: Um link para um Google Form, pré-preenchido com dados do curso.
2.  **Reclamar Recompensas**: Obter acesso a links para medalhas digitais (digital badges).
3.  **Validar a Submissão**: O sistema verifica se o formando submeteu o Desafio Final antes de lhe dar acesso a certas recompensas.
4.  **Fornecer Feedback**: Opcionalmente, aceder a um questionário de avaliação final (ex: Microsoft Form), também pré-preenchido.

A principal característica do sistema é ser **altamente configurável e dinâmico**, com toda a informação de cada curso (links, nomes, datas, formadores, etc.) a ser gerida centralmente numa folha de cálculo Google Sheets, que atua como a nossa base de dados.

## 2. Conceitos Fundamentais 💡

Para recriar este sistema, é crucial entender três conceitos-chave:

### a. `CourseID` (Identificador do Curso)
É a **chave primária** que identifica um curso de forma única. A aplicação é acedida através de um URL com um parâmetro `courseId`, como `https://.../exec?courseId=CURSO-001`. Todo o conteúdo da página é carregado com base neste ID.

### b. `uniqueToken` (Token de Sessão Único)
Este é o mecanismo que **liga a sessão do utilizador na página web à sua submissão no Google Form**, sem necessidade de um sistema de login.

* **Geração**: Quando a página é carregada (`doGet`), o backend gera um token único. O processo é:
    1.  Obtém o email do utilizador da sessão Google (`Session.getEffectiveUser().getEmail()`). Se não existir, gera uma string aleatória (`'anonymous-' + Math.random()`).
    2.  Concatena este identificador com o timestamp atual (ex: `user@email.com1678886400000`).
    3.  Calcula um hash **SHA-256** desta string.
    4.  Codifica o hash em **Base64 Web Safe** para o tornar num token de URL amigável.
* **Utilização**:
    1.  Este token é injetado como um **parâmetro pré-preenchido** no URL do Google Form do "Desafio Final".
    2.  O formando preenche o formulário e submete-o. O token é guardado juntamente com as suas respostas.
    3.  Quando o formando clica no botão "Medalha Digital" na página web, o frontend envia este mesmo token para o backend. O backend usa-o para encontrar a submissão correspondente no Google Form.

### c. Configuração Orientada a Dados (Data-Driven)
A aplicação não contém lógica "hardcoded" para cursos específicos. Toda a sua estrutura e links são definidos pelas colunas na folha de cálculo. Colunas com sufixos específicos (`-valor`, `-link`, `-campoddf`, `-campoaval`) têm significados especiais que ditam o comportamento da aplicação.

## 3. Estrutura da Base de Dados (Google Sheet) 📊

A base de dados é uma única folha numa Google Sheet. Cada **linha representa um curso** e cada **coluna representa um atributo** desse curso. As colunas essenciais são:

| Nome da Coluna               | Descrição Técnica                                                                                                                                                                                                                           | Obrigatório |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `CourseID`                   | O identificador único do curso (ex: `CURSO-001`). Usado para procurar a linha correta.                                                                                                                                                       | **Sim** |
| `curso-valor`                | O nome do curso a ser exibido no título da página (H1).                                                                                                                                                                                      | **Sim** |
| `GOOGLE_FORM_ID`             | O ID do Google Form usado como "Desafio Final". Ex: `1FAIpQLS...`.                                                                                                                                                                           | **Sim** |
| `TOKEN_ENTRY_ID`             | O ID do campo *no Google Form* que irá receber o `uniqueToken`. Ex: `entry.123456789`. É usado para construir o URL pré-preenchido.                                                                                                           | **Sim** |
| `TOKEN_ITEM_ID`              | O ID do *item* (a pergunta) associado ao `TOKEN_ENTRY_ID`. É um número (ex: `987654321`). É usado no backend para procurar a resposta que contém o token.                                                                                     | **Sim** |
| `desafiodigitalfinal-link`   | O URL base do Google Form do "Desafio Final" (sem parâmetros).                                                                                                                                                                              | Sim         |
| `questionarioavaliacao-link` | O URL base do formulário de avaliação final (ex: Microsoft Form).                                                                                                                                                                           | Não         |
| `[nome]-campoddf`            | Define o ID de um campo no Google Form para pré-preenchimento. Ex: `entry.11223344`. O `[nome]` é um identificador arbitrário (ex: `curso-campoddf`).                                                                                          | Não         |
| `[nome]-valor`               | O valor a ser pré-preenchido no campo definido pela coluna `[nome]-campoddf` correspondente.                                                                                                                                                | Não         |
| `[nome]-campoaval`           | Similar a `campoddf`, mas para o formulário de avaliação. O valor aqui é o nome do parâmetro no URL do Microsoft Form (ex: `formField1`).                                                                                                      | Não         |
| `medalhadigital{i}-link`      | O URL para a medalha digital número `i` (de 1 a 5).                                                                                                                                                                                         | Não         |
| `realizarddf{i}-valor`        | Condição para exibir a medalha `i`. Apenas se o valor for, de forma insensível a maiúsculas, `"sim"`, é que o link da medalha será renderizado na página.                                                                                   | Não         |
| `formador1-valor`, etc.      | Dados de metainformação para serem exibidos no rodapé da página.                                                                                                                                                                            | Não         |

## 4. Detalhe Técnico das Funcionalidades ⚙️

Esta secção descreve o fluxo de dados e a lógica para cada funcionalidade principal, para que possa ser reimplementada.

### 4.1. Carregamento Inicial da Página

**Endpoint Equivalente**: `GET /api/course/:courseId`

1.  **Requisição**: O browser acede ao URL com `?courseId=XYZ`.
2.  **Backend**:
    a. Recebe o `courseId`.
    b. **Acede à Base de Dados**: Lê a folha de cálculo e procura a linha onde a coluna `CourseID` corresponde a `XYZ`.
    c. **Gera o `uniqueToken`**: Segue o processo descrito na secção 2b.
    d. **Constrói URL do Google Form (`buildGoogleFormUrl`)**:
        i. Pega no URL base de `desafiodigitalfinal-link`.
        ii. Adiciona o `uniqueToken` como parâmetro, usando o ID de `TOKEN_ENTRY_ID`. Ex: `&entry.123456789=TOKEN_GERADO`.
        iii. Itera por todas as colunas que terminam em `-campoddf`. Para cada uma, encontra a sua coluna `-valor` correspondente e adiciona-a como um parâmetro de URL. Ex: `&entry.11223344=NOME_DO_CURSO`.
        iv. O resultado é um URL completo e pré-preenchido.
    e. **Constrói URL do Formulário de Avaliação (`buildMicrosoftFormUrl`)**:
        i. Pega no URL base de `questionarioavaliacao-link`.
        ii. Itera por todas as colunas que terminam em `-campoaval`. Para cada uma, encontra a sua coluna `-valor` e adiciona-a como parâmetro. Ex: `&formField1=NOME_DO_FORMADOR`.
    f. **Filtra as Medalhas Digitais**: Itera pelas colunas `medalhadigital1-link` a `medalhadigital5-link`. Apenas inclui na resposta as medalhas cuja coluna `realizarddf{i}-valor` correspondente seja `"sim"`.
    g. **Envia Dados para o Frontend**: Retorna um objeto (atualmente injetado num template HTML) com todos os dados do curso, os URLs construídos, o token e a lista de medalhas ativas.

### 4.2. Fluxo de Verificação de Respostas (Clique na 1ª Medalha)

Este é o fluxo mais complexo, envolvendo múltiplas chamadas assíncronas do frontend para o backend.

**Endpoint Equivalente**: `GET /api/form-responses?token=...&formId=...&itemId=...&format=...&includeEmail=...`

1.  **Ação do Utilizador**: O formando clica no botão "Medalha Digital 1".
2.  **Frontend (`handleBadgeClick` no `page.html`)**:
    a. Mostra uma mensagem de "A processar...".
    b. **PRIMEIRA CHAMADA AO BACKEND**: Faz uma chamada para a função `getFormDataUnified` pedindo o formato `'text'` e `requestEmail=true`. Envia o `uniqueToken`, `googleFormId`, e `tokenItemId`.
3.  **Backend (`getFormDataUnified`)**:
    a. Recebe o token, formId e itemId.
    b. Abre o Google Form correspondente ao `formId`.
    c. Obtém as respostas. Para otimização, considera apenas as últimas 150 (`MAX_FORM_RESPONSES_TO_CHECK`).
    d. **Itera pelas respostas (da mais recente para a mais antiga)**. Para cada resposta:
        i. Itera pelos itens (perguntas/respostas) dentro dessa resposta.
        ii. Procura um item cujo ID seja igual ao `tokenItemId` e cuja resposta seja **exatamente igual** ao `uniqueToken` recebido.
    e. **Se encontrar uma correspondência**:
        i. Interrompe a busca.
        ii. Se `requestEmail` for `true`, tenta obter o email do respondente (`matchingResponse.getRespondentEmail()`).
        iii. Itera por todos os itens da resposta correspondente (exceto o do próprio token) e formata-os.
        iv. Se o formato pedido for `'text'`, cria uma string multi-linha como `"Pergunta 1: Resposta 1\nPergunta 2: Resposta 2"`.
        v. Se o formato pedido for `'html'`, cria uma lista HTML: `<ul><li><strong>Pergunta 1:</strong> Resposta 1</li>...</ul>`.
        vi. Retorna um objeto `{ formData: "...", email: "..." }`.
    f. **Se não encontrar correspondência**: Retorna uma mensagem de erro/não encontrado.
4.  **Frontend (Callback de Sucesso da 1ª chamada)**:
    a. Recebe o objeto com `formData` em texto e `email`.
    b. **Copia para a Área de Transferência**: Usa `navigator.clipboard.writeText()` para copiar o `formData` em texto.
    c. **SEGUNDA CHAMADA AO BACKEND (condicional)**: Se o `email` foi retornado, faz uma chamada à função `sendEmailWithFormData`, enviando o email e o `formData` em texto.
    d. **TERCEIRA CHAMADA AO BACKEND**: Faz uma chamada novamente a `getFormDataUnified`, mas desta vez pedindo o formato `'html'` e `requestEmail=false`.
5.  **Backend (`sendEmailWithFormData`)**:
    a. **Endpoint Equivalente**: `POST /api/send-summary-email` com body `{ userEmail, formDataText }`.
    b. Recebe o email e o texto.
    c. Verifica a quota diária de envio de emails.
    d. Envia um email para o `userEmail` com um assunto e corpo pré-definidos, contendo o `formDataText`.
6.  **Frontend (Callback de Sucesso da 3ª chamada)**:
    a. Recebe o `formData` em formato HTML.
    b. Injeta este HTML na `div` `#badgeResponses` da página, tornando as respostas visíveis para o utilizador.
    c. Mostra o link "Copiar as minhas respostas".
    d. **Abre o Link da Medalha**: Finalmente, abre o URL da medalha digital numa nova aba (`window.open(badgeUrl, '_blank')`).

## 5. Requisitos para a Nova Arquitetura (ex: React)

Para migrar este sistema, a nova arquitetura precisará de:

### Backend (API REST/GraphQL)

* **Endpoint de Configuração**: `GET /api/course/:courseId`
    * **Função**: Substitui a lógica inicial do `doGet`.
    * **Resposta (JSON)**:
        ```json
        {
          "courseName": "Nome do Curso",
          "uniqueToken": "...",
          "forms": {
            "finalChallenge": {
              "url": "[https://docs.google.com/forms/d/e/.../viewform?usp=pp_url&entry.1=](https://docs.google.com/forms/d/e/.../viewform?usp=pp_url&entry.1=)...",
              "formId": "...", // GOOGLE_FORM_ID
              "tokenId": "..."  // TOKEN_ITEM_ID
            },
            "evaluation": {
              "url": "[https://forms.office.com/r/](https://forms.office.com/r/)..."
            }
          },
          "rewards": [
            { "name": "Medalha Digital 1", "url": "http://...", "requiresVerification": true },
            { "name": "Medalha Digital 2", "url": "http://...", "requiresVerification": false }
          ],
          "metadata": {
            "trainers": ["Formador A", "Formador B"],
            "startDate": "2025-01-01",
            "endDate": "2025-01-10",
            "location": "Online"
          }
        }
        ```

* **Endpoint de Verificação de Respostas**: `GET /api/form-responses`
    * **Parâmetros**: `token`, `formId`, `itemId`, `format` (text/html), `includeEmail` (true/false).
    * **Função**: Substitui a lógica de `getFormDataUnified`. A API precisará de ter acesso à API do Google Forms (ou a uma exportação das respostas para outra base de dados).
    * **Resposta (JSON)**:
        ```json
        {
          "found": true,
          "data": {
            "content": "<ul><li>...</li></ul>", // ou "...\n..."
            "respondentEmail": "user@email.com" // ou null
          }
        }
        ```

* **Endpoint de Envio de Email**: `POST /api/emails/summary`
    * **Função**: Substitui `sendEmailWithFormData`.
    * **Body (JSON)**: `{ "to": "user@email.com", "content": "..." }`.
    * **Resposta**: `{ "status": "sent" }` ou `{ "status": "failed", "error": "..." }`.

### Frontend (React)

O frontend seria responsável por:

1.  Ler o `:courseId` do URL na montagem do componente principal.
2.  Chamar o `GET /api/course/:courseId` para obter todos os dados e guardá-los no estado da aplicação.
3.  Renderizar a página dinamicamente com base nos dados do estado (nome do curso, botões, etc.).
4.  Gerir o estado da UI (mensagens de loading, sucesso, erro).
5.  Orquestrar o fluxo de chamadas à API quando o botão da primeira medalha for clicado, exatamente como descrito na secção 4.2.
6.  Usar `navigator.clipboard` para a funcionalidade de "copiar".