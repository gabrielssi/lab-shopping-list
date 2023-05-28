# LabShoppingList

O LabShoppingList é um sistema de lista de compras desenvolvido em React. Ele permite que você adicione produtos à lista, marque-os como comprados, insira o valor da compra e acompanhe o valor total gasto.

## Requisitos da Aplicação

- Um título na aba do navegador para facilitar a identificação.
- Um cabeçalho que exibe o nome da aplicação.
- Um campo de texto com validação para digitar o nome do produto a ser adicionado.
  - O campo é obrigatório.
  - O campo deve ter no mínimo 8 e no máximo 64 caracteres.
- Um botão para adicionar um novo produto na lista.
- Uma lista que exibe os produtos já adicionados.
  - Cada produto da lista possui:
    - Um checkbox para marcar o produto como comprado.
    - O texto que foi digitado ao cadastrar o produto.
    - Um botão para excluir o produto da lista.
  - Ao marcar um produto como comprado, um popup é exibido para inserir o valor da compra.
    - O valor inserido é somado ao valor total das compras.
- A lista é salva no localStorage do navegador e carregada ao reabrir a página.

## Como Utilizar

1. Clone este repositório em sua máquina local:

```bash
git clone https://github.com/gabrielssi/lab-shopping-list.git

```

2. Navegue até o diretório do projeto:

cd lab-shopping-list

3. Navegue até o diretório do projeto:

npm install

4. Execute o projeto:

npm start

Acesse a aplicação em seu navegador no endereço http://localhost:3000.

- No campo de texto, digite o nome do produto que deseja adicionar à lista (entre 8 e 64 caracteres).

- Clique no botão "Adicionar" para adicionar o produto à lista.

- Na lista de produtos, marque um produto como comprado ao clicar no checkbox correspondente.

- Ao marcar um produto como comprado, será exibido um popup para inserir o valor da compra.

- Insira o valor da compra no formato "R$0,00" e pressione "OK".

- O valor da compra será somado ao valor total exibido abaixo da lista de produtos.

- Para excluir um produto da lista, clique no botão "Excluir" correspondente ao produto.

- O estado da lista e o valor total das compras são salvos automaticamente no localStorage e serão restaurados quando você abrir a aplicação novamente.

- Para limpar o valor total das compras, clique no botão "Limpar" localizado abaixo do valor total.

## Considerações Finais

O LabShoppingList é um projeto simples, mas funcional, que permite gerenciar uma lista de compras de forma prática. Ele foi desenvolvido utilizando React e localStorage para armazenar os dados. Sinta-se à vontade para explorar o código, fazer melhorias e personalizar o projeto de acordo com suas necessidades.
