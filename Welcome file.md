<h1 id="resultado-da-analise-de-dados-da-base-transações-de-venda-sem-métricas.xlsx">RESULTADO DA ANALISE DE DADOS DA BASE transações de venda sem métricas.xlsx</h1>
<blockquote>
<p>No arquivo <code>data_analysis.py</code> possui uma classe python com alguns métodos que desenvolvi para fazer as analises que irei descrever abaixo.</p>
</blockquote>
<hr>
<h2 id="instrução-de-intalações-e-execução">Instrução de intalações e execução</h2>
<ol>
<li>
<p>Salvar o arquivo na pasta desejada</p>
</li>
<li>
<p>Acessar o caminho do arquivo via terminal de comando</p>
</li>
<li>
<p>Criar um ambiente virtual para execução isolada</p>
</li>
</ol>
<ul>
<li>Comando: <code>python3 -m venv env</code></li>
</ul>
<ol start="4">
<li>Habilitar o ambiente virtual</li>
</ol>
<ul>
<li>
<p>Se Linux: <code>source env/bin/activate</code></p>
</li>
<li>
<p>Se Windowns: <code>.\env\Scripts\activate</code></p>
</li>
</ul>
<ol start="5">
<li>Instalar as dependencias doo projeto</li>
</ol>
<ul>
<li>Comando: <code>pip install -r requeriments.txt</code></li>
</ul>
<ol start="6">
<li>Executar o processo</li>
</ol>
<ul>
<li>Comando: <code>python data_analysis.py</code></li>
</ul>
<hr>
<ul>
<li>
<h2 id="problemas-encontrados">Problemas encontrados</h2>
</li>
</ul>
<hr>
<ol>
<li>
<h3 id="vendas-com-o-campo-valor_faturado-vazio-ou-inválido">Vendas com o campo VALOR_FATURADO vazio ou inválido</h3>
</li>
</ol>
<ul>
<li>Foi identificado vendas sem nenhuma informação de valor faturado, este tipo de dado pode ser um problema em ambientes transacionais onde valores são informações criticas para o sistema e em ambientes náliticos pode ser um problema no momento de gerar um relatório para a equipe de vendas por exemplo.</li>
</ul>
<ol start="2">
<li>
<h3 id="data-de-entrega-menor-do-que">Data de entrega menor do que</h3>
</li>
</ol>
<ul>
<li>Foi identificado que existe várias vendas onde a data de entrega é menor do que a data de venda, oque não faz sentido e representa um erro no momento do lançamento do dado no sistema</li>
</ul>
<ol start="3">
<li>
<h3 id="vendas-sem-produto">Vendas sem produto</h3>
</li>
</ol>
<ul>
<li>Foi identificado 841 vendas onde não possui informação de produto, dependendo do negocio pode ser que não seja um problema, mas para a maioria dis negócios séria critíco ter vendas sem informação de produto pois pode afetar no KPI daquele produto em relatórios e também gerando receita sem rastro</li>
</ul>
<ol start="4">
<li>
<h3 id="vendas-com-produtos-inválidos">Vendas com produtos inválidos</h3>
</li>
</ol>
<ul>
<li>Foi identificado um total de 2311 vendas com produtos que não possui cadastro na base de produtos, ou seja produtos inexistentes para o sistema</li>
</ul>
<ol start="5">
<li>
<h3 id="vendas-com-locais-inválidos">Vendas com locais inválidos</h3>
</li>
</ol>
<ul>
<li>Foi identificado um total de 3897 Vendas com locais que não possui cadastro na base de locais, ou seja locais inexistentes para o sistema</li>
</ul>
<hr>
<ul>
<li>
<h2 id="verificações-sem-erros">Verificações sem erros</h2>
</li>
</ul>
<ol>
<li>
<h3 id="valores-negativos-no-campo-valor_faturado">Valores negativos no campo VALOR_FATURADO</h3>
</li>
<li>
<h3 id="registros-duplicados">Registros duplicados</h3>
</li>
</ol>
<hr>
<blockquote>
<p>Na pasta files/ possui um arquivo com a nomenclatura de <code>transacoes_vendas_sem_metrica_tratado.csv</code>, este arquivo representa os dados sem problemas.</p>
</blockquote>
<hr>
<h1 id="tecnologias-usadas">Tecnologias usadas</h1>
<ul>
<li>
<p>Python (Análise)</p>
</li>
<li>
<p>Markedown (Gerar relatório explicativo)</p>
</li>
</ul>
<hr>
<p><strong>Emerson dos Santos Pereira</strong></p>

