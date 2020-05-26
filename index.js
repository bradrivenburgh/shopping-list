function addItems() {
    $('#js-shopping-list-form').on('submit', function(event) {
        // Prevent default form submission
        event.preventDefault();
        // Prevent submitting an empty input
        if ($('#shopping-list-entry').val().length === 0 ) {return};
        // Append item to shopping list
        $('.shopping-list').append(
            `<li>
            <span class="shopping-item">${$('#shopping-list-entry').val()}</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>`
        )
    });
}

function deleteItems() {
    $('.shopping-list').on('click', 'button.shopping-item-delete', function() {
        $(this).closest('li').remove();
    });
 }


function toggleItems() {
    $('.shopping-list').on('click', 'button.shopping-item-toggle', function() {
        // Problem: span is targeted but class is not toggling.  Works for 'li'
        $(this).closest('span').toggleClass('shopping-item__checked');
    });
}

/*
$('.shopping-item-toggle').click(function() {
    if ($(this).closest('li').is(".shopping-item__checked")){
      $(this).closest('li').removeClass("shopping-item__checked");
    } else {
      $(this).closest('li').addClass("shopping-item__checked");
    }
  });
*/

function shoppingHandler() {
    addItems();
    deleteItems();
    toggleItems();
}

$(shoppingHandler);