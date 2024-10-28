





// function newItem() {

// //     let li = $('<li></li>');
// //     let inputValue = $('#input').val();
// //     li.append(inputValue);

// //     if (inputValue === '') {
// //         alert("You must write something!");
// //     } else {
// //         $('#list').append(li);
// //     }
// //     li.on("dblclick", function crossOut() {
// //         li.toggleClass("strike");
// //     });

// //     let crossOutButton = $('<crossOutButton></crossOutButton>');
// //     crossOutButton.append(document.createTextNode(' X')).addClass('crossOutButton');
// //     li.append(crossOutButton);

// //     crossOutButton.on("click", deleteListItem);
// //     function deleteListItem() {
// //         li.addClass("delete")
// //     }
// //     $('#list').sortable();
// // }




// Built by SP with aide of the function provided



function newItem() {

    // create Li and add the input value to the new list item
    let li = $('<li></li>');
    let inputValue = ($('#input').val());
    li.append(inputValue);
    // if new list item is empty, error message, if not adds to the list
    if (inputValue === '') {
        alert("Please enter a task")
    } else {
        $('#list').append(li)
    };

    // when doubleclicked, the class will render with a strikethrough
    li.on('dblclick', function crossOut() {
        li.toggleClass('strike');
    });


    // Create the crossout button and adds it to the list item
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode(' X')).addClass('crossOutButton')
    li.append(crossOutButton);
    //  adds listener on single click to "erase" the item.
    crossOutButton.on('click', function deleteListItem() {
        li.addClass('delete');
    })

    // allows list items to be sorted
    $('#list').sortable();

}

