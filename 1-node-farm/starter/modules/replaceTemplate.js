module.exports = (temp, product) => {
	let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
	output = output.replace(/{%ID%}/g, product.id);
	output = output.replace(/{%IMAGES%}/g, product.image);
	output = output.replace(/{%QUANTITY%}/g, product.quantity);
	output = output.replace(/{%PRICE%}/g, product.price);
	output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
	output = output.replace(/{%FROM%}/g, product.from);
	output = output.replace(/{%DESCRIPTIONS%}/g, product.description);

	if (!product.organic)
		output = output.replace(/{%NOT-ORGANIC%}/g, 'not-organic');

	return output;
};
