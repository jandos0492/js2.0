
class Goods {
	constructor(name, amount, image, count) {
		this.name = name;
		this.amount = amount;
		this.image = image;
		this.count = count;
	}
	draw(elem) {
		elem.innerHTML = `Product: ${this.name}<br>Amount: ${this.amount}<br><img src="${this.image}" alt=""<br>Quantity: ${this.count}`;
	}
}