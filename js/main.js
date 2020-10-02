var main = document.querySelector('main');

var requestURL = 'http://news.re19.ru/api/mobile/lastnews'

var request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();
request.onload = function(){
	var articles = request.response;
  	showArticles(articles);
}

function showArticles(jsonObj) {
  var articles = jsonObj['data'];
      
  for (var i = 0; i < articles.length; i++) {
  	var id = document.createElement('p');
    var title = document.createElement('h2');
    var description = document.createElement('p');
    var createdAt = document.createElement('span');
    var updatedAt = document.createElement('span');
    var imageLabel = document.createElement('span');
    var categoryId = document.createElement('span');
    var sticky = document.createElement('span');
    var views = document.createElement('span');
    var publishedAt = document.createElement('span');
	



    id.textContent = articles[i].id;
    title.textContent = ' Заголовок: ' + articles[i].name;
    description.textContent = ' Описание: ' + articles[i].description;
    createdAt.textContent = ' Создано: ' + articles[i].created_at;
    updatedAt.textContent = ' Обновлено: ' + articles[i].updated_at;
    imageLabel.textContent = ' ?imageLabel: ' + articles[i].image_label;
    categoryId.textContent = ' Id категории: ' + articles[i].category_id;
    sticky.textContent = ' ?sticky: ' + articles[i].sticky;
    views.textContent = ' Просмотров: ' + articles[i].views;
    publishedAt.textContent = ' Опубликовано: ' + articles[i].published_at;



    id.appendChild(title);
    id.appendChild(description);
    id.appendChild(createdAt);
    id.appendChild(updatedAt);
    id.appendChild(imageLabel);
    id.appendChild(categoryId);
    id.appendChild(sticky);
    id.appendChild(views);
    id.appendChild(publishedAt);

    main.appendChild(id);
    console.log('showArticles');
}
}