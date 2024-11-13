---


---

<h1 id="mapeamento-do-processo-atual">1. Mapeamento do Processo Atual</h1>
<p>O processo atual envolve as unidades da <strong>Mr. Health</strong> enviando, manualmente, arquivos CSV de vendas diárias (D-1) para serem consolidados em planilhas. Esse processo é manual, suscetível a erros e demanda tempo significativo da equipe de Ricardo Martins, além de limitar a capacidade de análise em tempo real.</p>
<h3 id="problemas-identificados">Problemas Identificados:</h3>
<ol>
<li>
<p><strong>Trabalho manual para consolidação dos dados</strong>:</p>
<ul>
<li>A equipe precisa reunir e processar manualmente os arquivos de cada unidade, o que consome muito tempo.</li>
</ul>
</li>
<li>
<p><strong>Suscetibilidade a erros humanos</strong></p>
<ul>
<li>A agregação manual aumenta a possibilidade de erros na entrada e no processamento dos dados.</li>
</ul>
</li>
<li>
<p><strong>Dificuldade em gerar insights em tempo real</strong>:</p>
<ul>
<li>O processo lento de consolidação impede uma análise rápida, dificultando a resposta a eventos em tempo real.</li>
</ul>
</li>
</ol>
<h3 id="diagrama-do-processo-atual">Diagrama do Processo Atual</h3>
<pre class=" language-mermaid"><svg id="mermaid-svg-woP3cNqk5M2Ksnq9" width="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="531.29296875" style="max-width: 253.109375px;" viewBox="0 0 253.109375 531.29296875"><style>#mermaid-svg-woP3cNqk5M2Ksnq9{font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:16px;fill:#000000;}#mermaid-svg-woP3cNqk5M2Ksnq9 .error-icon{fill:#552222;}#mermaid-svg-woP3cNqk5M2Ksnq9 .error-text{fill:#552222;stroke:#552222;}#mermaid-svg-woP3cNqk5M2Ksnq9 .edge-thickness-normal{stroke-width:2px;}#mermaid-svg-woP3cNqk5M2Ksnq9 .edge-thickness-thick{stroke-width:3.5px;}#mermaid-svg-woP3cNqk5M2Ksnq9 .edge-pattern-solid{stroke-dasharray:0;}#mermaid-svg-woP3cNqk5M2Ksnq9 .edge-pattern-dashed{stroke-dasharray:3;}#mermaid-svg-woP3cNqk5M2Ksnq9 .edge-pattern-dotted{stroke-dasharray:2;}#mermaid-svg-woP3cNqk5M2Ksnq9 .marker{fill:#666;stroke:#666;}#mermaid-svg-woP3cNqk5M2Ksnq9 .marker.cross{stroke:#666;}#mermaid-svg-woP3cNqk5M2Ksnq9 svg{font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:16px;}#mermaid-svg-woP3cNqk5M2Ksnq9 .label{font-family:"trebuchet ms",verdana,arial,sans-serif;color:#000000;}#mermaid-svg-woP3cNqk5M2Ksnq9 .cluster-label text{fill:#333;}#mermaid-svg-woP3cNqk5M2Ksnq9 .cluster-label span{color:#333;}#mermaid-svg-woP3cNqk5M2Ksnq9 .label text,#mermaid-svg-woP3cNqk5M2Ksnq9 span{fill:#000000;color:#000000;}#mermaid-svg-woP3cNqk5M2Ksnq9 .node rect,#mermaid-svg-woP3cNqk5M2Ksnq9 .node circle,#mermaid-svg-woP3cNqk5M2Ksnq9 .node ellipse,#mermaid-svg-woP3cNqk5M2Ksnq9 .node polygon,#mermaid-svg-woP3cNqk5M2Ksnq9 .node path{fill:#eee;stroke:#999;stroke-width:1px;}#mermaid-svg-woP3cNqk5M2Ksnq9 .node .label{text-align:center;}#mermaid-svg-woP3cNqk5M2Ksnq9 .node.clickable{cursor:pointer;}#mermaid-svg-woP3cNqk5M2Ksnq9 .arrowheadPath{fill:#333333;}#mermaid-svg-woP3cNqk5M2Ksnq9 .edgePath .path{stroke:#666;stroke-width:1.5px;}#mermaid-svg-woP3cNqk5M2Ksnq9 .flowchart-link{stroke:#666;fill:none;}#mermaid-svg-woP3cNqk5M2Ksnq9 .edgeLabel{background-color:white;text-align:center;}#mermaid-svg-woP3cNqk5M2Ksnq9 .edgeLabel rect{opacity:0.5;background-color:white;fill:white;}#mermaid-svg-woP3cNqk5M2Ksnq9 .cluster rect{fill:hsl(210,66.6666666667%,95%);stroke:#26a;stroke-width:1px;}#mermaid-svg-woP3cNqk5M2Ksnq9 .cluster text{fill:#333;}#mermaid-svg-woP3cNqk5M2Ksnq9 .cluster span{color:#333;}#mermaid-svg-woP3cNqk5M2Ksnq9 div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:12px;background:hsl(-160,0%,93.3333333333%);border:1px solid #26a;border-radius:2px;pointer-events:none;z-index:100;}#mermaid-svg-woP3cNqk5M2Ksnq9:root{--mermaid-font-family:"trebuchet ms",verdana,arial,sans-serif;}#mermaid-svg-woP3cNqk5M2Ksnq9 .step > *{fill:#f96 !important;stroke:#333 !important;stroke-width:2px !important;}#mermaid-svg-woP3cNqk5M2Ksnq9 .step tspan{!important;}#mermaid-svg-woP3cNqk5M2Ksnq9 .action > *{fill:#bbf !important;stroke:#333 !important;stroke-width:2px !important;}#mermaid-svg-woP3cNqk5M2Ksnq9 .action tspan{!important;}#mermaid-svg-woP3cNqk5M2Ksnq9 flowchart-v2{fill:apa;}</style><g transform="translate(0, 0)"><marker id="flowchart-pointEnd" class="marker flowchart" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" class="arrowMarkerPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path></marker><marker id="flowchart-pointStart" class="marker flowchart" viewBox="0 0 10 10" refX="0" refY="5" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M 0 5 L 10 10 L 10 0 z" class="arrowMarkerPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path></marker><marker id="flowchart-circleEnd" class="marker flowchart" viewBox="0 0 10 10" refX="11" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto"><circle cx="5" cy="5" r="5" class="arrowMarkerPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"></circle></marker><marker id="flowchart-circleStart" class="marker flowchart" viewBox="0 0 10 10" refX="-1" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto"><circle cx="5" cy="5" r="5" class="arrowMarkerPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"></circle></marker><marker id="flowchart-crossEnd" class="marker cross flowchart" viewBox="0 0 11 11" refX="12" refY="5.2" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto"><path d="M 1,1 l 9,9 M 10,1 l -9,9" class="arrowMarkerPath" style="stroke-width: 2; stroke-dasharray: 1, 0;"></path></marker><marker id="flowchart-crossStart" class="marker cross flowchart" viewBox="0 0 11 11" refX="-1" refY="5.2" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto"><path d="M 1,1 l 9,9 M 10,1 l -9,9" class="arrowMarkerPath" style="stroke-width: 2; stroke-dasharray: 1, 0;"></path></marker><g class="root"><g class="clusters"></g><g class="edgePaths"><path d="M126.5546875,49.69921875L126.5546875,56.0908203125C126.5546875,62.482421875,126.5546875,75.265625,126.5546875,88.048828125C126.5546875,100.83203125,126.5546875,113.615234375,126.5546875,120.0068359375L126.5546875,126.3984375" id="L-A-B" class=" edge-thickness-normal edge-pattern-solid flowchart-link LS-A LE-B" style="fill:none;" marker-end="url(#flowchart-pointEnd)"></path><path d="M126.5546875,168.09765625L126.5546875,174.4892578125C126.5546875,180.880859375,126.5546875,193.6640625,126.5546875,206.447265625C126.5546875,219.23046875,126.5546875,232.013671875,126.5546875,238.4052734375L126.5546875,244.796875" id="L-B-C" class=" edge-thickness-normal edge-pattern-solid flowchart-link LS-B LE-C" style="fill:none;" marker-end="url(#flowchart-pointEnd)"></path><path d="M126.5546875,286.49609375L126.5546875,292.8876953125C126.5546875,299.279296875,126.5546875,312.0625,126.5546875,324.845703125C126.5546875,337.62890625,126.5546875,350.412109375,126.5546875,356.8037109375L126.5546875,363.1953125" id="L-C-D" class=" edge-thickness-normal edge-pattern-solid flowchart-link LS-C LE-D" style="fill:none;" marker-end="url(#flowchart-pointEnd)"></path><path d="M126.5546875,404.89453125L126.5546875,411.2861328125C126.5546875,417.677734375,126.5546875,430.4609375,126.5546875,443.244140625C126.5546875,456.02734375,126.5546875,468.810546875,126.5546875,475.2021484375L126.5546875,481.59375" id="L-D-E" class=" edge-thickness-normal edge-pattern-solid flowchart-link LS-D LE-E" style="fill:none;" marker-end="url(#flowchart-pointEnd)"></path></g><g class="edgeLabels"><g class="edgeLabel" transform="translate(126.5546875, 88.048828125)"><g class="label" transform="translate(-101.4453125, -13.349609375)"><foreignObject width="202.890625" height="26.69921875"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;"><span class="edgeLabel">Envio diário de arquivos CSV</span></div></foreignObject></g></g><g class="edgeLabel" transform="translate(126.5546875, 206.447265625)"><g class="label" transform="translate(-118.5546875, -13.349609375)"><foreignObject width="237.109375" height="26.69921875"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;"><span class="edgeLabel">Processo Manual de Consolidação</span></div></foreignObject></g></g><g class="edgeLabel" transform="translate(126.5546875, 324.845703125)"><g class="label" transform="translate(-115.80078125, -13.349609375)"><foreignObject width="231.6015625" height="26.69921875"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;"><span class="edgeLabel">Importação manual dos arquivos</span></div></foreignObject></g></g><g class="edgeLabel" transform="translate(126.5546875, 443.244140625)"><g class="label" transform="translate(-112.12890625, -13.349609375)"><foreignObject width="224.2578125" height="26.69921875"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;"><span class="edgeLabel">Análise dos Dados Consolidados</span></div></foreignObject></g></g></g><g class="nodes"><g class="node default step" id="flowchart-A-1160" transform="translate(126.5546875, 28.849609375)"><rect class="basic label-container" style="" rx="0" ry="0" x="-79.23828125" y="-20.849609375" width="158.4765625" height="41.69921875"></rect><g class="label" style="" transform="translate(-71.73828125, -13.349609375)"><foreignObject width="143.4765625" height="26.69921875"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;"><span class="nodeLabel">Unidades Mr. Health</span></div></foreignObject></g></g><g class="node default step" id="flowchart-B-1161" transform="translate(126.5546875, 147.248046875)"><rect class="basic label-container" style="" rx="0" ry="0" x="-118.4375" y="-20.849609375" width="236.875" height="41.69921875"></rect><g class="label" style="" transform="translate(-110.9375, -13.349609375)"><foreignObject width="221.875" height="26.69921875"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;"><span class="nodeLabel">Arquivos CSV de vendas e itens</span></div></foreignObject></g></g><g class="node default step action" id="flowchart-C-1163" transform="translate(126.5546875, 265.646484375)"><rect class="basic label-container" style="" rx="0" ry="0" x="-82.734375" y="-20.849609375" width="165.46875" height="41.69921875"></rect><g class="label" style="" transform="translate(-75.234375, -13.349609375)"><foreignObject width="150.46875" height="26.69921875"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;"><span class="nodeLabel">Equipe de Operações</span></div></foreignObject></g></g><g class="node default step action" id="flowchart-D-1165" transform="translate(126.5546875, 384.044921875)"><rect class="basic label-container" style="" rx="0" ry="0" x="-87.939453125" y="-20.849609375" width="175.87890625" height="41.69921875"></rect><g class="label" style="" transform="translate(-80.439453125, -13.349609375)"><foreignObject width="160.87890625" height="26.69921875"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;"><span class="nodeLabel">Planilhas Consolidadas</span></div></foreignObject></g></g><g class="node default step action" id="flowchart-E-1167" transform="translate(126.5546875, 502.443359375)"><rect class="basic label-container" style="" rx="0" ry="0" x="-92.8125" y="-20.849609375" width="185.625" height="41.69921875"></rect><g class="label" style="" transform="translate(-85.3125, -13.349609375)"><foreignObject width="170.625" height="26.69921875"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;"><span class="nodeLabel">Relatório de Vendas D-1</span></div></foreignObject></g></g></g></g></g></svg></pre>
<hr>
<h1 id="mapeamento-do-processo-futuro">2. Mapeamento do Processo Futuro</h1>
<p>No processo futuro, a ingestão de dados é automatizada com serviços do Google Cloud. Os dados de vendas são enviados ao <strong>Cloud Storage</strong> às 12:00 AM, onde o <strong>Dataflow</strong> executa um pipeline de processamento às 12:30 AM, carregando automaticamente os dados processados no <strong>BigQuery</strong> para análise.</p>
<h3 id="melhorias">Melhorias</h3>
<ol>
<li>
<p><strong>Automatizar o processo de ingestão</strong>:</p>
<ul>
<li>Configurar um pipeline que ingere automaticamente os arquivos CSV enviados pelas unidades e os dados do banco de dados PostgreSQL da matriz.</li>
</ul>
</li>
<li>
<p><strong>Centralizar os dados em um Data Warehouse na nuvem</strong>:</p>
<ul>
<li>Consolidar os dados no <strong>BigQuery</strong>, facilitando a análise em tempo real e permitindo acesso rápido e centralizado a informações críticas.</li>
</ul>
</li>
<li>
<p><strong>Minimizar intervenção humana e reduzir erros</strong>:</p>
<ul>
<li>Reduzir o trabalho manual no processo de consolidação e análise, diminuindo as chances de erros e otimizando o tempo da equipe de operações.</li>
</ul>
</li>
</ol>
<h3 id="diagrama-do-processo-futuro">Diagrama do Processo Futuro</h3>
<pre class=" language-mermaid"><svg id="mermaid-svg-hbSgs2ZJUr7gaPzF" width="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="531.29296875" style="max-width: 363.2265625px;" viewBox="0 0 363.2265625 531.29296875"><style>#mermaid-svg-hbSgs2ZJUr7gaPzF{font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:16px;fill:#000000;}#mermaid-svg-hbSgs2ZJUr7gaPzF .error-icon{fill:#552222;}#mermaid-svg-hbSgs2ZJUr7gaPzF .error-text{fill:#552222;stroke:#552222;}#mermaid-svg-hbSgs2ZJUr7gaPzF .edge-thickness-normal{stroke-width:2px;}#mermaid-svg-hbSgs2ZJUr7gaPzF .edge-thickness-thick{stroke-width:3.5px;}#mermaid-svg-hbSgs2ZJUr7gaPzF .edge-pattern-solid{stroke-dasharray:0;}#mermaid-svg-hbSgs2ZJUr7gaPzF .edge-pattern-dashed{stroke-dasharray:3;}#mermaid-svg-hbSgs2ZJUr7gaPzF .edge-pattern-dotted{stroke-dasharray:2;}#mermaid-svg-hbSgs2ZJUr7gaPzF .marker{fill:#666;stroke:#666;}#mermaid-svg-hbSgs2ZJUr7gaPzF .marker.cross{stroke:#666;}#mermaid-svg-hbSgs2ZJUr7gaPzF svg{font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:16px;}#mermaid-svg-hbSgs2ZJUr7gaPzF .label{font-family:"trebuchet ms",verdana,arial,sans-serif;color:#000000;}#mermaid-svg-hbSgs2ZJUr7gaPzF .cluster-label text{fill:#333;}#mermaid-svg-hbSgs2ZJUr7gaPzF .cluster-label span{color:#333;}#mermaid-svg-hbSgs2ZJUr7gaPzF .label text,#mermaid-svg-hbSgs2ZJUr7gaPzF span{fill:#000000;color:#000000;}#mermaid-svg-hbSgs2ZJUr7gaPzF .node rect,#mermaid-svg-hbSgs2ZJUr7gaPzF .node circle,#mermaid-svg-hbSgs2ZJUr7gaPzF .node ellipse,#mermaid-svg-hbSgs2ZJUr7gaPzF .node polygon,#mermaid-svg-hbSgs2ZJUr7gaPzF .node path{fill:#eee;stroke:#999;stroke-width:1px;}#mermaid-svg-hbSgs2ZJUr7gaPzF .node .label{text-align:center;}#mermaid-svg-hbSgs2ZJUr7gaPzF .node.clickable{cursor:pointer;}#mermaid-svg-hbSgs2ZJUr7gaPzF .arrowheadPath{fill:#333333;}#mermaid-svg-hbSgs2ZJUr7gaPzF .edgePath .path{stroke:#666;stroke-width:1.5px;}#mermaid-svg-hbSgs2ZJUr7gaPzF .flowchart-link{stroke:#666;fill:none;}#mermaid-svg-hbSgs2ZJUr7gaPzF .edgeLabel{background-color:white;text-align:center;}#mermaid-svg-hbSgs2ZJUr7gaPzF .edgeLabel rect{opacity:0.5;background-color:white;fill:white;}#mermaid-svg-hbSgs2ZJUr7gaPzF .cluster rect{fill:hsl(210,66.6666666667%,95%);stroke:#26a;stroke-width:1px;}#mermaid-svg-hbSgs2ZJUr7gaPzF .cluster text{fill:#333;}#mermaid-svg-hbSgs2ZJUr7gaPzF .cluster span{color:#333;}#mermaid-svg-hbSgs2ZJUr7gaPzF div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:12px;background:hsl(-160,0%,93.3333333333%);border:1px solid #26a;border-radius:2px;pointer-events:none;z-index:100;}#mermaid-svg-hbSgs2ZJUr7gaPzF:root{--mermaid-font-family:"trebuchet ms",verdana,arial,sans-serif;}#mermaid-svg-hbSgs2ZJUr7gaPzF .storage > *{fill:#ffecb3 !important;stroke:#333 !important;stroke-width:2px !important;}#mermaid-svg-hbSgs2ZJUr7gaPzF .storage tspan{!important;}#mermaid-svg-hbSgs2ZJUr7gaPzF .processing > *{fill:#cce5ff !important;stroke:#333 !important;stroke-width:2px !important;}#mermaid-svg-hbSgs2ZJUr7gaPzF .processing tspan{!important;}#mermaid-svg-hbSgs2ZJUr7gaPzF .analysis > *{fill:#d1ffd6 !important;stroke:#333 !important;stroke-width:2px !important;}#mermaid-svg-hbSgs2ZJUr7gaPzF .analysis tspan{!important;}#mermaid-svg-hbSgs2ZJUr7gaPzF flowchart-v2{fill:apa;}</style><g transform="translate(0, 0)"><marker id="flowchart-pointEnd" class="marker flowchart" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" class="arrowMarkerPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path></marker><marker id="flowchart-pointStart" class="marker flowchart" viewBox="0 0 10 10" refX="0" refY="5" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M 0 5 L 10 10 L 10 0 z" class="arrowMarkerPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path></marker><marker id="flowchart-circleEnd" class="marker flowchart" viewBox="0 0 10 10" refX="11" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto"><circle cx="5" cy="5" r="5" class="arrowMarkerPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"></circle></marker><marker id="flowchart-circleStart" class="marker flowchart" viewBox="0 0 10 10" refX="-1" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto"><circle cx="5" cy="5" r="5" class="arrowMarkerPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"></circle></marker><marker id="flowchart-crossEnd" class="marker cross flowchart" viewBox="0 0 11 11" refX="12" refY="5.2" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto"><path d="M 1,1 l 9,9 M 10,1 l -9,9" class="arrowMarkerPath" style="stroke-width: 2; stroke-dasharray: 1, 0;"></path></marker><marker id="flowchart-crossStart" class="marker cross flowchart" viewBox="0 0 11 11" refX="-1" refY="5.2" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto"><path d="M 1,1 l 9,9 M 10,1 l -9,9" class="arrowMarkerPath" style="stroke-width: 2; stroke-dasharray: 1, 0;"></path></marker><g class="root"><g class="clusters"></g><g class="edgePaths"><path d="M181.61328125,49.69921875L181.61328125,56.0908203125C181.61328125,62.482421875,181.61328125,75.265625,181.61328125,88.048828125C181.61328125,100.83203125,181.61328125,113.615234375,181.61328125,120.0068359375L181.61328125,126.3984375" id="L-A-B" class=" edge-thickness-normal edge-pattern-solid flowchart-link LS-A LE-B" style="fill:none;" marker-end="url(#flowchart-pointEnd)"></path><path d="M181.61328125,168.09765625L181.61328125,174.4892578125C181.61328125,180.880859375,181.61328125,193.6640625,181.61328125,206.447265625C181.61328125,219.23046875,181.61328125,232.013671875,181.61328125,238.4052734375L181.61328125,244.796875" id="L-B-C" class=" edge-thickness-normal edge-pattern-solid flowchart-link LS-B LE-C" style="fill:none;" marker-end="url(#flowchart-pointEnd)"></path><path d="M181.61328125,286.49609375L181.61328125,292.8876953125C181.61328125,299.279296875,181.61328125,312.0625,181.61328125,324.845703125C181.61328125,337.62890625,181.61328125,350.412109375,181.61328125,356.8037109375L181.61328125,363.1953125" id="L-C-D" class=" edge-thickness-normal edge-pattern-solid flowchart-link LS-C LE-D" style="fill:none;" marker-end="url(#flowchart-pointEnd)"></path><path d="M181.61328125,404.89453125L181.61328125,411.2861328125C181.61328125,417.677734375,181.61328125,430.4609375,181.61328125,443.244140625C181.61328125,456.02734375,181.61328125,468.810546875,181.61328125,475.2021484375L181.61328125,481.59375" id="L-D-E" class=" edge-thickness-normal edge-pattern-solid flowchart-link LS-D LE-E" style="fill:none;" marker-end="url(#flowchart-pointEnd)"></path></g><g class="edgeLabels"><g class="edgeLabel" transform="translate(181.61328125, 88.048828125)"><g class="label" transform="translate(-165.751953125, -13.349609375)"><foreignObject width="331.50390625" height="26.69921875"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;"><span class="edgeLabel">Envio automático de arquivos CSV às 12:00 AM</span></div></foreignObject></g></g><g class="edgeLabel" transform="translate(181.61328125, 206.447265625)"><g class="label" transform="translate(-173.61328125, -13.349609375)"><foreignObject width="347.2265625" height="26.69921875"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;"><span class="edgeLabel">Início do pipeline de processamento às 12:30 AM</span></div></foreignObject></g></g><g class="edgeLabel" transform="translate(181.61328125, 324.845703125)"><g class="label" transform="translate(-133.349609375, -13.349609375)"><foreignObject width="266.69921875" height="26.69921875"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;"><span class="edgeLabel">Carregamento dos dados processados</span></div></foreignObject></g></g><g class="edgeLabel" transform="translate(181.61328125, 443.244140625)"><g class="label" transform="translate(-124.3359375, -13.349609375)"><foreignObject width="248.671875" height="26.69921875"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;"><span class="edgeLabel">Análise e relatórios em tempo real</span></div></foreignObject></g></g></g><g class="nodes"><g class="node default default" id="flowchart-A-1176" transform="translate(181.61328125, 28.849609375)"><rect class="basic label-container" style="" rx="0" ry="0" x="-79.23828125" y="-20.849609375" width="158.4765625" height="41.69921875"></rect><g class="label" style="" transform="translate(-71.73828125, -13.349609375)"><foreignObject width="143.4765625" height="26.69921875"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;"><span class="nodeLabel">Unidades Mr. Health</span></div></foreignObject></g></g><g class="node default storage" id="flowchart-B-1177" transform="translate(181.61328125, 147.248046875)"><rect class="basic label-container" style="" rx="0" ry="0" x="-57.1875" y="-20.849609375" width="114.375" height="41.69921875"></rect><g class="label" style="" transform="translate(-49.6875, -13.349609375)"><foreignObject width="99.375" height="26.69921875"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;"><span class="nodeLabel">Cloud Storage</span></div></foreignObject></g></g><g class="node default processing" id="flowchart-C-1179" transform="translate(181.61328125, 265.646484375)"><rect class="basic label-container" style="" rx="0" ry="0" x="-39.55078125" y="-20.849609375" width="79.1015625" height="41.69921875"></rect><g class="label" style="" transform="translate(-32.05078125, -13.349609375)"><foreignObject width="64.1015625" height="26.69921875"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;"><span class="nodeLabel">Dataflow</span></div></foreignObject></g></g><g class="node default analysis" id="flowchart-D-1181" transform="translate(181.61328125, 384.044921875)"><rect class="basic label-container" style="" rx="0" ry="0" x="-39.521484375" y="-20.849609375" width="79.04296875" height="41.69921875"></rect><g class="label" style="" transform="translate(-32.021484375, -13.349609375)"><foreignObject width="64.04296875" height="26.69921875"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;"><span class="nodeLabel">BigQuery</span></div></foreignObject></g></g><g class="node default analysis" id="flowchart-E-1183" transform="translate(181.61328125, 502.443359375)"><rect class="basic label-container" style="" rx="0" ry="0" x="-92.8125" y="-20.849609375" width="185.625" height="41.69921875"></rect><g class="label" style="" transform="translate(-85.3125, -13.349609375)"><foreignObject width="170.625" height="26.69921875"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;"><span class="nodeLabel">Dashboards e Relatórios</span></div></foreignObject></g></g></g></g></g></svg></pre>
<hr>
<h1 id="proponha-um-diagrama-de-arquitetura-para-realizar-a-ingestão-e-consolidação-dos-dados.">3. Proponha um Diagrama de Arquitetura para realizar a ingestão e consolidação dos dados.</h1>
<p><strong>Proposta de Arquitetura:</strong></p>
<ol>
<li>
<p><strong>Cloud Storage</strong>:</p>
<ul>
<li>Utilizado como ponto de armazenamento inicial dos arquivos CSV de vendas. Cada unidade pode enviar seus arquivos diretamente para um bucket dedicado no GCP.</li>
</ul>
</li>
<li>
<p><strong>Cloud Dataflow</strong>:</p>
<ul>
<li>Responsável pelo processamento em lote dos dados dos arquivos CSV e pela transformação dos dados antes de carregá-los no BigQuery.</li>
</ul>
</li>
<li>
<p><strong>BigQuery</strong>:</p>
<ul>
<li>O Data Warehouse central onde todos os dados são consolidados e disponíveis para análise.</li>
</ul>
</li>
<li>
<p><strong>Looker</strong>:</p>
<ul>
<li>Ferramenta de visualização de dados que permite criar relatórios e dashboards para análise de vendas e geração de alertas.</li>
</ul>
</li>
</ol>
<p><strong>Ilustrativo</strong><br>
<img src="https://www.googlecloudcommunity.com/gc/image/serverpage/image-id/71664i9E455DB9A4ACBA68/image-size/large?v=v2&amp;px=999" alt="Diagrama de Arquitetura do Processo Futuro"></p>
<p>A transferência dos dados do banco de dados relacional da Matriz (PostgreSQL) para o BigQuery será realizada utilizando o template do Dataflow <strong>Postgres to BigQuery</strong>.<br>
<img src="https://estuary.dev/static/5d69b994e5b70f3a722aea786c1eafeb/6a57e/9775bf_postgresql_to_bigquery_237cb86841.avif" alt="Diagrama de Arquitetura do Processo Futuro"></p>
<hr>
<h1 id="descreva-como-os-dados-serão-armazenados-no-datalake-em-termos-de-camadas-e-qual-a-estrutura-adotada-para-cada-uma-delas.-considere-que-além-dos-arquivos-recebidos-os-dados-oriundos-do-banco-de-dados-da-matriz-da-mr-health.">4. Descreva como os dados serão armazenados no datalake em termos de camadas e qual a estrutura adotada para cada uma delas. Considere que além dos arquivos recebidos, os dados oriundos do banco de dados da matriz da MR HEALTH.</h1>
<p><strong>A estrutura do Data Lake será dividida em duas camadas:</strong></p>
<ul>
<li><strong>Raw</strong>: Recebe os dados brutos dos arquivos CSV . Todos os dados são armazenados sem transformação.</li>
<li><strong>Curated</strong>: Dados prontos para análise e consumo. Inclui os dados finais, agregados e preparados para uso em relatórios e dashboards.</li>
</ul>
<p><strong>Estrutura de Arquivos no Cloud Storage</strong>:</p>
<ul>
<li><code>raw/orders/file_yyyy_mm_dd/</code>  para armazenar dados diários de pedidos.</li>
<li><code>raw/items/file_yyy_mm_dd/</code>  para armazenar dados diários de itens dos pedidos.</li>
</ul>
<hr>
<h1 id="elabore-uma-relação-de-atividades-que-serão-necessárias-para-implementação-do-processo-de-ingestão-e-consolidação-de-dados.-estas-informações-serão-necessárias-para-realizar-o-entendimento-das-atividades-com-os-demais-membros-da-equipe-e-poder-elaborar-o-“product-backlog”-do-projeto.">5. Elabore uma relação de atividades que serão necessárias para implementação do processo de ingestão e consolidação de dados. Estas informações serão necessárias para realizar o entendimento das atividades com os demais membros da equipe e poder elaborar o “Product Backlog” do projeto.</h1>
<p><a href="https://github.com/Ediee-sec/case_data_pipeline_gcp/blob/master/README.md">GITHUB</a></p>
