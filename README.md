## QUER VER FUNCIONANDO?
https://wendeldefreitas.github.io/calendario-agenda
# calendario-agenda
Calendário e agenda para marcar escala de serviço.
## Descrição:
Projeto simples usando HTML, CSS e JAVASCRIPT.
O projeto consiste em um calendário e uma agenda, para marcar o dia na qual você pode trabalhar.
O calendário está vinculado a uma planilha online do Google Planilhas, ou seja, é uma calendário colaborativo onde várias pessoas podem acessar ao mesmo tempo.
## Palavras chave:
HTML, CSS, JAVASCRIPT, Responsivo, Consumo de API (SheetDB), Mobile First.

## Problemas que enfrentei durante o projeto:
- API que usei para consultar a planilha do Google só me dá direito a 500 requisições por mês, ou seja, tenho que reduzir a quantidade de requisições ou construir minha própria API.
- Todos usuário podem adicionar uma tarefa sem restrinções, mas o cliente solicitou que fosse restrito... 
  1 - Quantidades de tarefas no dia;
  2 - Caso já exista uma tarefa, outro usuário não possa alterar esta tarefa;