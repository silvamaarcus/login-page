# Página de Login (React + Firebase)

## Descrição

Este projeto full-stack demonstra a criação de uma página de login utilizando React e Vite. O objetivo principal é ilustrar o processo de criação de um usuário, salvando-o em um banco de dados Firebase, e posteriormente autenticá-lo. O projeto é composto por três páginas distintas: uma página de login, uma página de criação de novo usuário e uma página de sucesso que é exibida após o usuário efetuar login com sucesso.

## Estrutura do Projeto

### Páginas

1. **Página de Login**
    - Permite ao usuário inserir suas credenciais (e-mail e senha) para autenticação.
    - Conecta-se ao Firebase para verificar as credenciais e autenticar o usuário.

2. **Página de Criação de Novo Usuário**
    - Permite ao usuário registrar uma nova conta fornecendo e-mail e senha.
    - Os dados são salvos no banco de dados Firebase.
    - Após o registro bem-sucedido, o usuário pode fazer login usando as credenciais recém-criadas.

3. **Página de Sucesso**
    - Exibida após o usuário efetuar login com sucesso.

## Tecnologias Utilizadas

- **React**
    - Biblioteca JavaScript para construção de interfaces de usuário.
    - Utilizada para criar componentes reutilizáveis e gerenciar o estado da aplicação.

- **Vite**
    - Ferramenta de build que oferece um ambiente de desenvolvimento rápido e otimizado para projetos React.
    - Usado para configurar e iniciar o projeto rapidamente.

- **Firebase**
    - Plataforma de desenvolvimento de aplicativos móveis e web.
    - Utilizada para autenticação de usuários e armazenamento de dados.

## Como Executar o Projeto

1. Clone o repositório para o seu ambiente local:
    ```sh
    git clone https://github.com/silvamaarcus/login-page.git
    ```

2. Navegue até o diretório do projeto:
    ```sh
    cd nome-do-repositorio
    ```

3. Instale as dependências necessárias:
    ```sh
    npm install
    ```

4. Inicie o servidor de desenvolvimento:
    ```sh
    npm run dev
    ```

5. Abra o navegador e acesse `http://localhost:5137` para visualizar o projeto.


## Funcionalidades Futuras

- Implementação de recuperação de senha.
- Adição de validações de formulários mais robustas.
- Melhorias na interface do usuário.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
