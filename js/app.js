console.log("News App Connected!");

//get sources on document ready
$(document).ready(getSources);

//select submit button
// $(document).ready(() => {
// 	//add event listener for submit button
// 	$("#searchForm").on("submit", (event) => {
// 		//get search values in variable
// 		//run get news info function with search values
// 		getNews();
// 		//prevent submit button default behaviour / values disappearing 
// 		event.preventDefault();
// 	});
// });

//add eventlistener for option selection
// $("select").click(() => {
// 	for (var i = 0; i < Things.length; i++) {
// 		Things[i]
// 	}
// })
//get list of english language sites sources from news API
// https://newsapi.org/v1/sources?language=en
//push into array
//array.push(sources.name.value)
//loop thru array
//for(var i = 0; i < array.length; i++)
//assign values to options available in pull down menu
//getNews Function


// function getSources(){
// 	axios.get("https://newsapi.org/v1/sources?language=en")
// 	.then((response) => {
// 		// console.log(response);
// 		let sources = response.data.sources;
// 		let sourceList = [];
// 		// console.log(sources);
// 		function addOption_list(){
// 			for (let i = 0; i < sources.length; i++) {
// 				sourceList.push(sources[i].name);
// 			}
// 		}
// 		addOption()
// 	});
// }

//get select field
let select = $("#sourceSelect");
// let sourceList = [];
//get list of sources and populate select field with options
function getSources(){
	axios.get("https://newsapi.org/v1/sources?language=en")
	.then((response) => {
		let sources = response.data.sources;
		// sourceList.push(sources);
		// console.log(sourceList);
		for (let i = 0; i < sources.length; i++) {
			// let opt = sources[i].name + sources[i].id;
			// idList.push(sources[i].id);
			let el = document.createElement("option");
				el.textContent = sources[i].name;
				el.value = sources[i].id;
				select[0].appendChild(el);
		}
	})
}

//add eventlistener to select choices
// $("#sourceSelect").on("click", function(){
// 	var selection = 
// })
//getNews function
// function getNews(id){
// 	// console.log(searchValues);
// 	//loop thru sourceList and equate with searchValues
// 	for (var i = 0; i < sourceList[0].length; i++) {
// 		let id = sourceList[0][i].id;
// 		console.log(id);
// 		//send a request with sources selected
// 		// console.log(searchValues);
// 		}
// 	}


//getNews function
//add event listener to select list
// function getNews(){

	$("select").on("click", function() {
		//pass id value to var
		let id = ($(this).val());
		axios.get("https://newsapi.org/v2/top-headlines?sources="+id+"&apiKey=7473e3ba38184699a3d401262f418dd3")
		.then((response) => {
			console.log(response);
			let headlines = response.data.articles;
			let output = "";
			$.each(headlines, (index, article) => {
				output += 	`
							<div class="col-md-3">
								<div class = "card text-center">
									<img src="${article.urlToImage}" class="card-img-top"/>
									<h5 class="card-title">${article.title}</h5>
									<p class="card-text">${article.description}<p>
									<a class="btn btn-primary" href="${article.url}" target="_blank">Read Article</a>
									<div class="card-footer text-muted">
								    	${article.publishedAt}
									</div>
								</div>
								<br><br>
							</div>
							`;
				});
				$("#newsResults").html(output);
			})
		})
// }

// $('select > option:selected').each(function() {
//     		alert($(this).text() + ' ' + $(this).val());
// });
