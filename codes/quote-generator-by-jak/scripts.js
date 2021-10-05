// By Jonak Adipta Kalita

const dex = document.getElementById("dex");

const fetchData = async () => {
	const url = "https://type.fit/api/quotes";
	const res = await fetch(url);
	const data = await res.json();
	displayData(data);
};

const displayData = (data) => {
	const quoteHTMLString = data.map((item) => {		
		console.log(item);
		
		return (`
			<li class="card">
				<h2 class="card-title">${item.text}</h2>
				<p>By: ${item.author}</p>
			</li>
		`);
	}).join('');

    dex.innerHTML = quoteHTMLString;
};

fetchData();
