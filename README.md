## Você irá usar esse comando somente uma vez em todo o projeto

### Irá clonar o repositório para a máquina
git clone git@github.com:brunojosematias/labotech.git

### por precaução utilize esse comnado para iniciar o git no repositório
git init


## Sempre utilize esse comando quando abrir a pasta do projeto. Ele irá puxar todas as auterações feita pelo grufo do repositório para a máquina
git pull


## irá selecionar a branch secondary. Todos os commits seão feitos nessa branch, quando concluir todas as funcionalidades criadas e se estiver tudo ok, você irá adicionar as alterações feitas na branch secondary para a branch main, esse processo será mostrada mais pa frente
git checkout secondary


## Faça esse processo para cada funcionalidade que você criou na aplicação

#### irá selecionar todas as novas alterações para serem commitadas
git add .

### irá criar o commit. Para esse processo use digite feat antes da descrição do commit como está abaixo
git commit -m "feat: descreva o que você criou"

#### irá adicionar as alterações no repositório
git push origin secondary


## Faça esse processo somente terminar de desenvolver E SE ESTIVER TUDO FUNCIONANDO

### irá selecionar a branch main
git checkout main

### irá adicionar as alterações feitas na branch secondary para a main
git merge secondary

### irá adicionar as alterações no repositório
git push origin main
