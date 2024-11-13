---


---

<hr>
<hr>
<h2 id="atividades">ATIVIDADES</h2>
<ol>
<li>
<h3 id="criar-data-lake-com-a-arquitetura-para-o-armazenamento-eficiente-dos-arquivos-csv">Criar data lake com a arquitetura para o armazenamento eficiente dos arquivos csv</h3>
<ul>
<li><strong>Comandos</strong>
<ol>
<li>
<p>Abrir o cloud shell</p>
</li>
<li>
<p>Criar as variáveis de ambiente</p>
<ul>
<li><code>project=$(gcloud config get-value project)</code></li>
<li><code>export PROJECT_ID=$project</code></li>
<li><code>export BUCKET_NAME="mr-health-data-lake"</code></li>
<li><code>export LOCATION="us-central1"</code></li>
</ul>
</li>
<li>
<p>Criar o bucket separado por pedidos e itens , staging e temp serão usados posteriormente no dataflow</p>
<ul>
<li><code>touch text.txt</code></li>
<li><code>gsutil mb -p $PROJECT_ID -c STANDARD -l $LOCATION -b on gs://$BUCKET_NAME/</code></li>
<li><code>gsutil cp *.txt gs://$BUCKET_NAME/raw/orders/</code></li>
<li><code>gsutil cp *.txt gs://$BUCKET_NAME/raw/items/</code></li>
<li><code>gsutil cp *.txt gs://$BUCKET_NAME/raw/staging/</code></li>
<li><code>gsutil cp *.txt gs://$BUCKET_NAME/raw/temp/</code></li>
</ul>
</li>
<li>
<p>Habilita para que o GCS possa ser acessado por uma service account (Necessário criar uma SA antes no menu de IAM)</p>
<ul>
<li><code>SERVICE_ACCOUNT=$(gcloud iam service-accounts list --format="value(email)")</code></li>
<li><code>gsutil iam ch serviceAccount:$SERVICE_ACCOUNT:roles/storage.objectAdmin gs://$BUCKET_NAME/</code></li>
</ul>
</li>
</ol>
</li>
</ul>
</li>
<li>
<h3 id="criar-as-tabelas-no-bigquery">Criar as tabelas no Bigquery</h3>
<ul>
<li><strong>Comandos</strong>
<ol>
<li>Acessar o console do Bigquery e criar o dataset <code>dw_mr_health</code></li>
<li>No editor do bigquery crie a tabela <code>orders</code>, executando o script abaixo:</li>
</ol>
<pre class="  language-sql"><code class="prism  language-sql"><span class="token keyword">CREATE</span>  <span class="token keyword">TABLE</span>  casedatalakers<span class="token punctuation">.</span>dw_mr_health<span class="token punctuation">.</span>orders  <span class="token punctuation">(</span>
id_Unidade  STRING<span class="token punctuation">,</span>
id_Pedido  STRING<span class="token punctuation">,</span>
Tipo_Pedido  STRING<span class="token punctuation">,</span>
Data_Pedido  <span class="token keyword">DATE</span><span class="token punctuation">,</span>
Vlr_Pedido  FLOAT64<span class="token punctuation">,</span>
Endereco_Entrega  STRING<span class="token punctuation">,</span>
Taxa_Entrega  FLOAT64<span class="token punctuation">,</span>
<span class="token keyword">Status</span>  STRING
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<ol start="3">
<li>No editor do bigquery crie a tabela <code>items</code>, executando o script abaixo:</li>
</ol>
<pre class="  language-sql"><code class="prism  language-sql"><span class="token keyword">CREATE</span>  <span class="token keyword">TABLE</span>  <span class="token punctuation">`</span>casedatalakers<span class="token punctuation">.</span>dw_mr_health<span class="token punctuation">.</span>items<span class="token punctuation">`</span>  <span class="token punctuation">(</span>
   	id_Pedido  STRING<span class="token punctuation">,</span>
   	id_Item_Pedido  STRING<span class="token punctuation">,</span>
   	id_Produto  STRING<span class="token punctuation">,</span>
   	Qtd  INT64<span class="token punctuation">,</span>
   	Vlr_Item  FLOAT64<span class="token punctuation">,</span>
   	Observacao  STRING
   	<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</li>
</ul>
</li>
<li>
<h3 id="criar-um-modelo-pré-pronto-do-dataflow-para-automatizar-a-consolidação-dos-arquivos">Criar um modelo pré pronto do Dataflow para automatizar a consolidação dos arquivos</h3>
<ol>
<li>
<p>Baixar os arquivos abaixo que estão neste repositório</p>
<ul>
<li>transformer_order.js</li>
<li>transformer_items.js</li>
<li>orders.csv</li>
<li>orders_items.csv</li>
<li>schema_items.json</li>
<li>schema_orders.json</li>
</ul>
</li>
<li>
<p>Fazer o upload dos arquivos pro GCS respectivamente:</p>
<ul>
<li>gs://mr-health-data-lake/raw/orders
<ul>
<li>orders.csv</li>
</ul>
</li>
<li>gs://mr-health-data-lake/raw/items
<ul>
<li>orders_items.csv</li>
</ul>
</li>
<li>gs://mr-health-data-lake/staging
<ul>
<li>schema_items.json</li>
<li>schema_orders.json</li>
<li>trasnformer_items.js</li>
<li>transformer_order.js</li>
</ul>
</li>
</ul>
</li>
<li>
<p>Modelo: “Text File on Cloud Storage to BigQuery”</p>
</li>
<li>
<p>Agendamento: Diariamente ás 12:30 AM</p>
</li>
<li>
<p>Seguir com o preenchimento dos parâmetros</p>
</li>
<li>
<p>Execute os pipelines para carregar os dados dos csv para as tabelas</p>
<ul>
<li>Caso ocorra tudo bem o pipeline ficará desta forma</li>
<li><img src="https://i.imgur.com/ig5eKdw.png" alt="''"></li>
</ul>
</li>
</ol>
</li>
<li>
<h3 id="consulte-as-tabelas-no-bigquery">Consulte as tabelas no Bigquery</h3>
<ul>
<li>
<p>Order</p>
<pre class="  language-sql"><code class="prism  language-sql"><span class="token keyword">SELECT</span>
<span class="token operator">*</span>
<span class="token keyword">FROM</span>  <span class="token punctuation">`</span>casedatalakers<span class="token punctuation">.</span>dw_mr_health<span class="token punctuation">.</span>orders<span class="token punctuation">`</span>
<span class="token keyword">LIMIT</span>  <span class="token number">10</span>
</code></pre>
</li>
<li>
<p>Items</p>
<pre class="  language-sql"><code class="prism  language-sql"><span class="token keyword">SELECT</span>
<span class="token operator">*</span>
<span class="token keyword">FROM</span>  <span class="token punctuation">`</span>casedatalakers<span class="token punctuation">.</span>dw_mr_health<span class="token punctuation">.</span>items<span class="token punctuation">`</span>
<span class="token keyword">LIMIT</span>  <span class="token number">10</span>
</code></pre>
</li>
</ul>
</li>
</ol>
<h3 id="transferir-os-dados-do-postgres-para-o-big-query">5. Transferir os dados do Postgres para o big query</h3>
<ol>
<li>Criar as tabelas em branco no bigquery</li>
</ol>
<pre class=" language-sql"><code class="prism  language-sql"><span class="token comment">-- Criação da tabela PAIS</span>
<span class="token keyword">CREATE</span>  <span class="token operator">OR</span>  REPLACE  <span class="token keyword">TABLE</span>  <span class="token punctuation">`</span>casedatalakers<span class="token punctuation">.</span>dw_mr_health<span class="token punctuation">.</span>PAIS<span class="token punctuation">`</span>  <span class="token punctuation">(</span>
Id_Pais  INT64<span class="token punctuation">,</span>
Nome_Pais  STRING
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- Criação da tabela ESTADO</span>
<span class="token keyword">CREATE</span>  <span class="token operator">OR</span>  REPLACE  <span class="token keyword">TABLE</span>  <span class="token punctuation">`</span>casedatalakers<span class="token punctuation">.</span>dw_mr_health<span class="token punctuation">.</span>ESTADO<span class="token punctuation">`</span>  <span class="token punctuation">(</span>
Id_Estado  INT64<span class="token punctuation">,</span>
Id_Pais  INT64<span class="token punctuation">,</span>
Nome_Estado  STRING
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- Criação da tabela UNIDADE</span>
<span class="token keyword">CREATE</span>  <span class="token operator">OR</span>  REPLACE  <span class="token keyword">TABLE</span>  <span class="token punctuation">`</span>casedatalakers<span class="token punctuation">.</span>dw_mr_health<span class="token punctuation">.</span>UNIDADE<span class="token punctuation">`</span>  <span class="token punctuation">(</span>
Id_Unidade  INT64<span class="token punctuation">,</span>
Nome_Unidade  STRING<span class="token punctuation">,</span>
Id_Estado  INT64
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- Criação da tabela PRODUTO</span>
<span class="token keyword">CREATE</span>  <span class="token operator">OR</span>  REPLACE  <span class="token keyword">TABLE</span>  <span class="token punctuation">`</span>casedatalakers<span class="token punctuation">.</span>dw_mr_health<span class="token punctuation">.</span>PRODUTO<span class="token punctuation">`</span>  <span class="token punctuation">(</span>
Id_Produto  INT64<span class="token punctuation">,</span>
Nome_Produto  STRING
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<ol start="2">
<li>Criar o Pipeline usando o Dataflow, usar o template Postgres To BigQuery
<ul>
<li>
<p>Preencher corretamente os parâmetros obrigatórios</p>
</li>
<li>
<p>Parâmetro OPCIONAL que <strong>deve</strong> ser preenchido:<br>
<img src="https://i.imgur.com/Nizlmgh.png" alt="Descrição da imagem"></p>
</li>
<li>
<p><strong>EXEMPLO:</strong><br>
<img src="https://i.imgur.com/i0eHqx4.png" alt="EEEE"></p>
</li>
</ul>
</li>
</ol>
<h4 id="com-este-pipeline-resolveremos-o-problema-do-gerente-de-ti-o-processo-ficará-totalmente-transparente-sendo-necessário-apenas-o-responsável-de-cada-filial-inserir-o-arquivo-de-sua-região-no-cloud-storage">Com este pipeline resolveremos o problema do Gerente de TI, o processo ficará totalmente transparente sendo necessário apenas o responsável de cada filial inserir o arquivo de sua região no cloud storage</h4>

