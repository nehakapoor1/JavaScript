
define(['./pubsub'], function (pubsub) {
	return {
		init: function() {
			var productList = $('.products');

			productList.on('click', 'img', function () {
				alert($(this).text());
				var $this = $(this);
				item  = {
					id: this,
					name: $(this).parents('section:first').find('h1').html()
				};

				if ($this.hasClass('icon-plus')){
					pubsub.pub('add-to-cart', item);
					$this.removeClass('icon-plus')
						.addClass('icon-minus')
						.attr('src', './minus.jpg')
						.attr('title', 'remove from cart');
				}else {
					pubsub.pub('remove-from-cart', item);
					$this.addClass('icon-plus')
						.removeClass('icon-minus')
						.attr('src', './plus.jpg')
						.attr('title', 'remove from cart');
				}
			});
		}
	};
});

