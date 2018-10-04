$(function(){

    //List of products in array
 var products = [
    { name: 'dress', price: 1500, id: 1, description: 'evning derss coLor witht $67', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeyP4sOTcFGgBAue6dAlcZ39kmcBIt9-SIWUJlzZrZaCxbiuNQ', category: 'Elektronik' },
    { name: 'Camera', price: 755, id: 2, description: 'modern camera with peice  $ 5000', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpFiwR99i6kpLn8gUZeLty2wL6zV0JyLoYlrWI7hh3Ain-x59J', category: 'Elektronik' },
    { name: 'ring', price: 25, id: 3, description: 'coLd ring withe dimond at a pres $2300', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZh3uyjzCzlpnQ0MoyPiCMP-5UBfpdqDO9lKttG8mu3TsCVJMa', category: 'Hemmet' },
    { name: 'car', price: 20, id: 4, description: ' used car in good cndition at $ 100000', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPGkaDTNi4rxowrb4I08EpvRQ-o1Dxl-G0lJGsFJzrU19TGNRnRA', category: 'Hemmet' },
    { name: 'hat', price: 800, id: 5, description: ' baby hat a cr at a pric $ 10', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV_La9IHmIO3xmh9jXFdQSohkxiQ9c9-YExth1rAidAQoQOdO7', category: 'Kontor' },
    { name: 'shoes', price: 2000, id: 6, description: 'yygefegdgggdfgf $ 23', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE9Lj5KLGPBJgBSitbRGMQN31WmMt5Qlge_OM_7-E_gdctorgNdw', category: 'Kontor' },
    { name: 'cver', price: 2000, id: 6, description: 'mbai cver $ 23', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZr-_803ni6STRA_T8QfYGB-rz2-WfY8Ky0lebRnDl-wXUeP2Q1w', category: 'Kontor' },
    { name: 'shoes', price: 2000, id: 6, description: 'shoes coLor brown and bLack price $ 44', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ-lu8CN_J_xFLIi1jBH6WsjuATzq4cKugZ2MITHrcTAYsPnKj', category: 'Kontor' },
    { name: 'writstwatch', price: 2000, id: 6, description: 'writstwatch $ 50', picture: 'data:image/jpeg;base64,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', category: 'Kontor' },
 ];
 
 //empty cart array
 var cart = [];
 
 // Lägger till i en array
 var appendList = function (array, location) {
    var template = array.map(function(item, id) {
        return `
        <li class="product col-3">
        <img src="${item.picture}" alt"${item.name}">
        <div class="product-content">
        <h4>
        ${item.name} -
        <span class="category">${item.category}</span><small>${item.price}</small>
        </h4>
        <p>${item.description}</p>
        </div>
        <button type="button" id="${item.id}">Köp Nu</button>
        </li>
        `;
    });
 
    $(location).html(template);
 };
 
 var addToCart = function (array, id, location) { //location .cart-list
    //letar efter specifik ID
    var a = array.find(function (i) {
        return i.id === id;
    });
 
    //Lägger till producten i Cart Array och visar på hemsidan.
    cart.push(a);
 
    var item = `
    <li class="item" id="${a.id}">
        <h4>${a.name}</h4>
        <button type="button">X</button>
    </li>
    `;
 
    $('span.amount').text(cart.length);
    $(location).append(item); // add to listen
 };
 
 var removeFromCart = function (array, removedItem) {
    array.splice(removedItem, 1);
 
 };
 // updetera function efter remove
 var populateCart = function (array, location) {
    var item = `
    <li class="item" id="${array.id}">
        <h4>${array.name}</h4>
        <button type="button">X</button>
    </li>
    `;
    $('span.amount').text(array.length);
 };
 
 
 appendList(products, $('.product-list'));
 
 $('.product').on('click', 'button', function (event) {
    var id = $(this).attr('id');
    addToCart(products, +id, $('.cart-list'));
 });
 // ta bort från cart
 $('.cart-list').on('click', 'button', function (e) {
    // item är list item in cart
    var item = $(e.currentTarget).closest('li').remove();
    //ta bort från cart
    removeFromCart(cart, item);
    //lägg till i cart , igen
    populateCart(cart, $('.cart-list'));
 });
 
 });