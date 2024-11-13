function transform(line) {
	var values = line.split(',');
	
	var obj = new Object();
	obj.id_Pedido = values[0];
	obj.id_Item_Pedido = values[1];
	obj.id_Produto = values[2];
	obj.Qtd = values[3];
	obj.Vlr_Item = values[4];
	obj.Observacao = values[5];
	var jsonString = JSON.stringify(obj);
	
	return jsonString;
	
}