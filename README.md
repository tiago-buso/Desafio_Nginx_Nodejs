# Desafio_Nginx_Nodejs

Não subi a pasta node_modules nem a mysql. 

Para executar o projeto, crie uma pasta mysql e ela deve estar vazia.

Para rodar o dockerfile, execute o comando:

docker compose up -d --build

**********************************

UPDATE 20/06 - 22:50 - após tentativa de correção

Percebi em testes em minha máquina que o container mysql (db) na primeira execução, ou seja com a pasta "mysql" no meu computador limpa, demorou quase 4 minutos para conseguir realizar o start completo. No docker ele até aparece online, mas percebi que a pasta "mysql" do meu computador ainda estava recebendo os arquivos do container.

Enquanto esse processo não acaba o container do node.js (app) fica tentar fazer restart constantemente já que ele fica tomando vários connection refused devido o container db ainda não estar ok. Esses restarts são devido o restart:always no dockerfile.

Não percebi a necessidade de fazer a mesma configuração do restart:always no nginx.

Também não consegui usar o jwilder dockerize nesse exemplo. Não sei o motivo de após colocar a configuração feita na aula na configuração do container app, ele para de me mostrar os logs (que tem a conexão com banco, inserts e etc) e o nginx não conecta mais a ele. O docker sinaliza tudo ok, mas da connection refused entre o endereço do container app.
