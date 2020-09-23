class Goods2 extends Goods {
	constructor(name, amount, image, count, sale) {
		super(name, amount, image, count);
		this.sale = sale;
	}
	draw(elem) {
		let div = document.createElement('div');

		div.innerHTML = `Product: ${this.name}<br>`;
		div.innerHTML += `Amount: ${this.amount}<br>`;
		div.innerHTML += `<img src="${this.image}"<br>`;
		div.innerHTML += `Quantity: ${this.count}<br>`;
		if (this.sale) {
			div.innerHTML += `<div class="sale">Sale</div>`;
		}
		elem.append(div);
	}
}