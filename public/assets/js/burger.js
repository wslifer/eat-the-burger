$(function () {
  $(".eat-btn").on("click", function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();

    var burger_id = $(this).data("id");
    console.log(burger_id);

    $.ajax("/api/burger/" + burger_id, {
      type: "PUT",
    }).then(function () {
      location.reload();
    });
  });
});

$(function () {
  $(".addBurger").on("click", function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();

    var newBurger = {
      burgerName: $("#add-burger").val(),
    };
    console.log(newBurger);
    $.ajax("/api/burger/", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      location.reload();
    });
  });
});
