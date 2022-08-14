let mainCoursePrice
let mainCoursePriceDot
let drinkPrice
let drinkPriceDot
let dessertPrice
let dessertPriceDot
let mainCourseName
let drinkName
let dessertName
let pname
let address

function selectMainCourse(itemClass) {
	const selectedDish = document.querySelector(".main-course .selected")

	if (selectedDish !== null) {
		selectedDish.classList.remove("selected")
	}

	document.querySelector(itemClass).classList.add("selected")

	//

	const uncheck = document.querySelector(".main-course .check")

	if (uncheck !== null) {
		uncheck.classList.add("hidden")
		uncheck.classList.remove("check")
	}

	const check = document.querySelector(itemClass + " .hidden")
	check.classList.remove("hidden")
	check.classList.add("check")

	//

	mainCoursePrice = document.querySelector(itemClass + " .price").innerHTML
	mainCourseName = document.querySelector(itemClass + " .name-item").innerHTML

	//

	closeOrder()
}

function selectDrink(itemClass) {
	const selectedDish = document.querySelector(".drink .selected")

	if (selectedDish !== null) {
		selectedDish.classList.remove("selected")
	}

	document.querySelector(itemClass).classList.add("selected")

	//

	const uncheck = document.querySelector(".drink .check")

	if (uncheck !== null) {
		uncheck.classList.add("hidden")
		uncheck.classList.remove("check")
	}

	const check = document.querySelector(itemClass + " .hidden")
	check.classList.remove("hidden")
	check.classList.add("check")

	//

	drinkPrice = document.querySelector(itemClass + " .price").innerHTML
	drinkName = document.querySelector(itemClass + " .name-item").innerHTML

	//

	closeOrder()
}

function selectDessert(itemClass) {
	const selectedDish = document.querySelector(".dessert .selected")

	if (selectedDish !== null) {
		selectedDish.classList.remove("selected")
	}

	document.querySelector(itemClass).classList.add("selected")

	//

	const uncheck = document.querySelector(".dessert .check")

	if (uncheck !== null) {
		uncheck.classList.add("hidden")
		uncheck.classList.remove("check")
	}

	const check = document.querySelector(itemClass + " .hidden")
	check.classList.remove("hidden")
	check.classList.add("check")

	//

	dessertPrice = document.querySelector(itemClass + " .price").innerHTML
	dessertName = document.querySelector(itemClass + " .name-item").innerHTML

	//

	closeOrder()
}

function closeOrder() {
	const order = document.querySelector(".close-order")

	if ((mainCourseName && drinkName && dessertName) !== undefined) {
		order.innerHTML = "Fechar Pedido"
		order.classList.add("order-closed")
	} else if ((mainCourseName && dessertName) !== undefined || (drinkName && dessertName) !== undefined || (mainCourseName && drinkName) !== undefined) {
		order.innerHTML = "Adicione mais 1 item para fechar o pedido"
	} else if (mainCourseName !== undefined || drinkName !== undefined || dessertName !== undefined) {
		order.innerHTML = "Adicione mais 2 itens para fechar o pedido"
	}
}

function confirmScreen(button) {
	if (button.classList.contains("order-closed")) {
		document.querySelector(".confirm-screen").classList.remove("hidden")
	}

	mainCoursePriceDot = mainCoursePrice.replace(",", ".")
	drinkPriceDot = drinkPrice.replace(",", ".")
	dessertPriceDot = dessertPrice.replace(",", ".")

	pname = prompt("Informe o seu nome:")
	address = prompt("Informe o seu endereço:")

	document.querySelector(".main-course-name").innerHTML = mainCourseName
	document.querySelector(".main-course-price").innerHTML = mainCoursePrice
	document.querySelector(".drink-name").innerHTML = drinkName
	document.querySelector(".drink-price").innerHTML = drinkPrice
	document.querySelector(".dessert-name").innerHTML = dessertName
	document.querySelector(".dessert-price").innerHTML = dessertPrice
	document.querySelector(".price-total").innerHTML = "R$ " + (Number(mainCoursePriceDot) + Number(drinkPriceDot) + Number(dessertPriceDot)).toFixed(2).replace(".", ",")
}

function openWhatsapp() {
	let texto =
		"Olá, gostaria de fazer o pedido:" +
		"\n- Prato: " +
		mainCourseName +
		"\n- Bebida: " +
		drinkName +
		"\n- Sobremesa: " +
		dessertName +
		"\nTotal: R$ " +
		(Number(mainCoursePriceDot) + Number(drinkPriceDot) + Number(dessertPriceDot)).toFixed(2) +
		"\n\nNome: " +
		pname +
		"\nEndereço: " +
		address

	let link = "https://wa.me/5524998338263?text=" + encodeURIComponent(texto)

	window.open(link, "_blank")
}

function exitScreen() {
	document.querySelector(".confirm-screen").classList.add("hidden")
}
