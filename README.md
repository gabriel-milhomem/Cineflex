# Live Link
https://cineflex.netlify.app/
Obs: Layout somente na versão mobile


# Descrição

Nessa semana você fará uma Single-Page Application para um cinema, usando ContextAPI e Styled Components!

Repositório de referência: [https://github.com/bootcamp-ra/09-cineflex](https://github.com/bootcamp-ra/09-cineflex)

# Requisitos

- Geral
    - [x]  Manipule o HTML usando somente React (sem usar o document nem bibliotecas como jQuery)
    - [x]  Seu projeto deverá ser desenvolvido utilizando Git e GitHub
    - [x]  Para isso, comece fazendo um **fork** **privado** do projeto de referência: [https://github.com/bootcamp-ra/09-cineflex](https://github.com/bootcamp-ra/09-cineflex)
    - [x]  **A cada requisito implementado** faça um commit com uma mensagem descritiva do que você evoluiu. Caso queira dividir um requisito em vários commits, não há problema. Mas evite colocar mais de um requisito no mesmo commit
- Layout
    - [x]  Aplicar layout para mobile, seguindo imagens fornecida (não é necessário implementar um layout para desktop)
    - [x]  Seus CSS globais (como CSS reset e estilos do <body>) devem ser aplicados em um arquivo CSS externo convencional
    - [x]  Seus estilos de cada componente devem ser aplicados utilizando Styled Components
- Escolha de Filme (rota "/")
    - [x]  Buscar as informações dos filmes pela API fornecida e exibir conforme layout fornecido
        - URL da API de filmes: [https://mock-api.bootcamp.respondeai.com.br/api/v1/cineflex/movies](https://mock-api.bootcamp.respondeai.com.br/api/v1/cineflex/movies)
    - [x]  Ao clicar em um filme, o usuário deve ser redirecionado para a rota "/sessoes"
- Escolha de Sessão (rota "/sessoes")
    - [x]  A partir do filme selecionado na tela anterior, exiba conforme o layout fornecido as sessões disponíveis
    - [x]  Ao clicar em uma seção, o usuário deve ser redirecionado para a rota "/assentos"
- Escolha de Assento (rota "/assentos")
    - [x]  A partir dos dados de assentos da seção escolhida, exibir o layout conforme fornecido
    - [x]  Ao clicar em um assento disponível, o assento deve ser marcado como "Selecionado"
    - [x]  Ao clicar novamente em um assento selecionado, este deve voltar para "Disponível"
    - [x]  Ao clicar em um assento indisponível, deverá ser exibido um alerta de "Esse assento não está disponível"
    - [x]  O usuário pode selecionar vários assentos
    - [x]  Ao clicar em "Reservar assento(s)", o pedido deve ser enviado para o servidor e o usuário deve ser redirecionado para a rota "/sucesso".  Isso fará com os assentos marcados fiquem indisponíveis para outras marcações.
        - URL da API de marcação assentos (POST):

            [https://mock-api.bootcamp.respondeai.com.br/api/v1/cineflex/seats/book_many/](https://mock-api.bootcamp.respondeai.com.br/api/v1/cineflex/movies)

            Verificar documentação para `body` da requisição.

- Rodapé
    - [x]  Ao longo das telas de Sessão e Assento, deve ser exibido um rodapé com as informações selecionadas até então, conforme layout
- Sucesso
    - [x]  Implementar layout conforme fornecido
    - [x]  Ao clicar em "Home" o usuário deve voltar para a rota inicial ("/"), com o pedido zerado

Documentação da API disponível em:

[Cineflex](https://documenter.getpostman.com/view/6886056/TVYCB1Gm)

# Bônus

- [x]  Adicione um botão "Voltar" no Rodapé
- [ ]  Adicione uma tela entre a tela de Assentos e Sucesso para que o usuário selecione o tipo de ingresso para cada assento selecionado (ex: Inteira, Meia-Entrada). Utilize o elemento <select> do HTML para isso
