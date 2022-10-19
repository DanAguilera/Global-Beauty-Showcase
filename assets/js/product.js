var blushBtn = document.querySelector('#blush-btn');
var bronzerBtn = document.querySelector('#bronzer-btn');
var eyebrowBtn = document.querySelector('#eyebrow-btn');
var eyelinerBtn = document.querySelector('#eyeliner-btn');
var eyeshadowBtn = document.querySelector('#eyeshadow-btn');
var foundationBtn = document.querySelector('#foundation-btn');
var liplinerBtn = document.querySelector('#lipliner-btn');
var mascaraBtn = document.querySelector('#masacara-btn');
var brandElement = document.querySelector('.panel-block');
var brandList = document.querySelector('#brand-list');
var selectedVideoList = document.querySelector('#video-list');



var getProductType = function (event) {
    var productType = event.target.getAttribute('data-universal');
    console.log(productType);
    event.preventDefault();
    var makeupAPI = 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=' + productType;

    fetch(makeupAPI)
    .then(function (response) {
        if (response.ok){
            console.log(response);
            response.json().then(function (productList) {

                if (productList.length === 0){
                    return
                }
            
                for (var i = 0; i < productList.length; i++) {
            
                    var productBrandName = productList[i].brand + ' ' + productList[i].name;
                    console.log(productBrandName);
                    var productBrandNameEl = document.createElement('a');
                    productBrandNameEl.classList = 'panel-block';
                    productBrandNameEl.textContent = productBrandName;
                    productBrandNameEl.setAttribute('type', 'button');
                    productBrandNameEl.setAttribute('data-universal',productBrandName);
                    productBrandNameEl.setAttribute('onclick', 'videoSearch(event);');
                    brandList.appendChild(productBrandNameEl)

                }
                console.log(productList);
            });
        } else {
            alert('Error:' + response.statusText);
        }
    })
    .catch(function (error){
        alert('Unable to retrive makeup data');
    });

};

API_Key = 'AIzaSyC6xTHQkQ-sRmh_wwGUf0hObfic3e7ZDr4'
maxResults = 10


var videoSearch = function (event) {
    var selectedBrand = event.target.getAttribute('data-universal');
    console.log(selectedBrand);
    event.preventDefault();

    var youtubeAPI = 'https://www.googleapis.com/youtube/v3/search?part=snippet&key='+ API_Key + '&maxResults=' + maxResults + '&type=video&q=' + selectedBrand;

    fetch(youtubeAPI)
    .then(function (response) {
        if (response.ok){
            console.log(response);
            response.json().then(function (videoList) {

                if (videoList.length === 0){
                    return
                }
            
                for (var i = 0; i < videoList.length; i++) {
            
                    var selectedVideo = selectedVideo[i].videoId;
                    console.log(selectedVideo);
                    var selectedVideoEl = document.createElement('div');
                    selectedVideoEl.classList = 'video-list';
                    selectedVideoEl.setAttribute('id', 'ytplayer');
                    selectedVideoEl.setAttribute('type', 'text/html');
                    selectedVideoEl.setAttribute('width','640');
                    selectedVideoEl.setAttribute('height','360');
                    selectedVideoEl.setAttribute('src','https://wwww.youtube.com/embed/' + videoId);
                    selectedVideoEl.setAttribute('frameborder', '0');
                    selectedVideoList.appendChild(selectedVideoEl)

                }
                console.log(videoList);
            });
        } else {
            alert('Error:' + response.statusText);
        }
    })
    .catch(function (error){
        alert('Unable to retrive Youtube Video');
    });

};
