require(['product-list.js', 'big-cart.js', 'mini-cart.js' ], function (productList, bigCart, miniCart) {
		$(document).ready(function () {
			bigCart.init();
			miniCart.init();
			productList.init();
		});
});
