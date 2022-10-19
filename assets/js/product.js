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


var getProductType = function (event) {
    var productType = event.target.getAttribute('data-universal');
    console.log(productType);
    event.preventDefault();
    var makeupAPI = 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=' + productType;

    fetch(makeupAPI)
    .then(function (response) {
        if (response.ok){
            console.log(response);
            response.json().then(function (data) {

                if (data.length === 0){
                    //hide 'Which product would you like to review' container
                }
            
                for (var i = 0; i < data.length; i++) {
            
                    var productBrandName = data[i].brand + ' ' + data[i].name;
                    console.log(productBrandName);
                    var productBrandNameEl = document.createElement('a');
                    productBrandNameEl.classList = 'panel-block';
                    productBrandNameEl.textContent = productBrandName;
                    brandList.appendChild(productBrandNameEl);
                }
                console.log(data);
            });
        } else {
            alert('Error:' + response.statusText);
        }
    })
    .catch(function (error){
        alert('Unable to retrive makeup data');
    });

};

var brands