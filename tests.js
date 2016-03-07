QUnit.test("makes the body background red", function (assert) {
    "use strict";

    var bodyColor = $('body').css('background-color');

    assert.ok(bodyColor === "rgb(255, 0, 0)", "body color is red");
});

/*
test on different platforms that subnav works properly
    $('subnav item').trigger();
    check if $("elm").scrollTop() has value
*/