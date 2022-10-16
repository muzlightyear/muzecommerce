const cartButton = document.querySelector("addToCart");
const nameValue = document.getElementById('nameInput');
const priceValue = document.getElementById("priceInput");
const descriptionValue = document.getElementById("descriptionInput");
const image_input = document.querySelector("#image_input");
const submitButton = document.getElementById("submitButton")
let uploaded_image = "";



// class Product { Not confident enough with constructors, but this is probably the best way
// 	constructor(name,price,description,img) {
// 		this.name = name;
// 		this.price = price;
// 		this.description = description;
// 		this.img = img;
// 	}
// } 

let image_result = "";

image_input.addEventListener("change",function(){
	const reader = new FileReader(); //File reader is an object to let web apps read contents of files
	reader.addEventListener("load",() => {
		uploaded_image = reader.result;
		image_result = uploaded_image;
		//document.querySelector("body").style.backgroundImage = `url(${uploaded_image})`;	
	});
	reader.readAsDataURL(this.files[0]); //readasdataurl is used to read the contents of a file. When it's finished reading the readystate will become DONE and loadend is triggered
	//the result of this will contain the data
})


function newProd() { //This was the most challenging thing to work out how to do, I managed to do this without actually asking for any help, so I'm proud of how it's turned out
	
	//initializing input value variables
	const name = nameValue.value;
	const price = priceValue.value;
	const desc = descriptionValue.value;
	const image = image_input.value;

	//adding a div to store the new product
	const targetDiv = document.querySelector('[dataset-group="products"]');
	let div = document.createElement('div');
	div.setAttribute("id","newDiv");
	div.classList.add("product");
	div.style.display === "inline-block";
	div.style.margin === "20px";
	div.background === "#e04f4f";
	targetDiv.appendChild(div);

	//adding image to div
	if (image_result!=""){
	const image_create = document.createElement("img");
	image_create.setAttribute("height","400px");
	image_create.setAttribute("width","300px");
	image_create.src=image_result;
	div.appendChild(image_create);
	}
	//adding a div within the first div to store the 'words' so that they take on css styling
	let wordDiv = document.createElement('div');
	wordDiv.setAttribute("class","words");
	div.appendChild(wordDiv);

	//adding the name
	let nameAdd = document.createElement("a"); //creating element a
	nameAdd.setAttribute('dataset-group',"details"); //adding details
	nameAdd.classList.add("name"); //adding details
	nameAdd.appendChild(document.createTextNode(`${name}`)); //adding the input text to the newly made element
	wordDiv.appendChild(nameAdd); //adding new element to the newly created div

	//adding the price
	let priceAdd = document.createElement("a")
	priceAdd.setAttribute('dataset-group',"details");
	priceAdd.classList.add("price");
	priceAdd.appendChild(document.createTextNode(`${price}`));
	wordDiv.appendChild(priceAdd);	

	//adding the description
	let descAdd = document.createElement("a");
	descAdd.setAttribute('dataset-group',"details");
	descAdd.classList.add("description");
	descAdd.appendChild(document.createTextNode(`${desc}`));
	wordDiv.appendChild(descAdd);

	//adding an 'add to cart' button
	let buttonAdd = document.createElement("button");
	buttonAdd.classList.add("addToCart");
	buttonAdd.appendChild(document.createTextNode("Add To Cart"));
	wordDiv.appendChild(buttonAdd);

	//resetting the values for second usage
	nameValue.value = "";
	priceValue.value = "";
	descriptionValue.value = "";
}



submitButton.addEventListener("click",newProd)
