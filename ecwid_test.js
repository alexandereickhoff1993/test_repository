//вставляем картинку на страницу, размечаем её на области и назначаем обработчики событиям для каждой области
var parentElement = document.getElementById('ecwid-products');

var childElement = parentElement.getElementsByTagName('div')[0];

var myDiv = document.createElement('div');
myDiv.innerHTML="<img src=\"https://i.postimg.cc/K8xk1W2S/car3.jpg\" style=\"display: block; margin-left: auto; margin-right: auto;\" usemap=\"#map\"><map name=\"map\"><area shape=\"poly\" alt=\"Engine\" coords=\"140,400, 215,400, 240,420, 240,500, 190,530, 125,530, 90,490, 90,430\" href=\"javascript:;\" onclick=\"addEngineToCart();\"><area shape=\"poly\" alt=\"Transmission\" coords=\"245,350, 265,340, 280,360, 340,325, 385,325, 385,390, 325,435, 245,435\" href=\"javascript:;\" onclick=\"addTransmissionToCart();\"><area shape=\"poly\" alt=\"Body\" coords=\"370,230, 445,195, 510,130, 585,105, 660,113, 775,150, 780,210, 725,270, 580,350, 525,325, 470,360, 450,340, 460,310, 480,300, 435,290, 390,315, 370,305\" href=\"javascript:;\" onclick=\"addBodyToCart();\"><area shape=\"poly\" alt=\"Chassis\" coords=\"405,450, 450,450, 595,375, 620,350, 680,335, 790,360, 790,370, 755,395, 760,415, 735,435, 735,445, 640,525, 630,530, 570,520, 580,550, 567,567, 535,580, 510,555, 485,585, 460,570, 450,577, 430,570, 445,550, 385,550, 385,500\" href=\"javascript:;\" onclick=\"addChassisToCart();\"><area shape=\"poly\" alt=\"Wheels\" coords=\"385,625, 425,630 440,665, 595,585, 605,560, 620,550, 647,558, 647,590, 725,610, 742,584, 770,590, 775,615, 765,650, 745,660, 723,652, 720,627, 570,712, 560,750, 540,773, 520,780, 490,770, 480,745, 490,713, 432,690, 415,707, 388,713, 360,694, 358,660\" href=\"javascript:;\" onclick=\"addWheelsToCart();\">";

parentElement.insertBefore(myDiv, childElement);


//объявляем функции для добавления товаров в корзину при клике на области
function addEngineToCart() {
	Ecwid.Cart.addProduct(385718834);
}

function addTransmissionToCart() {
	Ecwid.Cart.addProduct(385718837);
}

function addBodyToCart() {
	Ecwid.Cart.addProduct(385718836);
}

function addChassisToCart() {
	Ecwid.Cart.addProduct(385718838);
}

function addWheelsToCart() {
	Ecwid.Cart.addProduct(385718835);
}


//добавляем проверку при изменениях корзины
Ecwid.OnCartChanged.add(function(cart){
    Ecwid.Cart.get(function(cart) {
	if (cart.items.length == 5) {
    myDiv.innerHTML="<p style=\"font-size:48px; font-weight:bold; color:#404040; font-family:Montserrat; text-align:center; margin:200px 0px;\">Вы собрали автомобиль!</p>";
    }
	})
});