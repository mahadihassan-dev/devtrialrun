// FAQ Section
const items = document.querySelectorAll('.faq-accordion button');

function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');

    for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
    }

    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));

// Password Toggle
// $(".toggle-password").click(function () {
//     $(this).toggleClass("bi-eye-fill bi-eye-slash-fill");
//     var input = $($(this).attr("toggle"));
//     if (input.attr("type") == "password") {
//         input.attr("type", "text");
//     } else {
//         input.attr("type", "password");
//     }
// });

/*

    I need to work on Password Toggle Eye To Hide and Visible

*/

$('#form-calendar .calendar').datepicker({
    autoclose: true,
    todayHighlight: true,
    beforeShowMonth: function (date) {
        if (date.getMonth() == 8) {
            return false;
        }
    },
    beforeShowYear: function (date) {
        if (date.getFullYear() == 2007) {
            return false;
        }
    },
    datesDisabled: ['08/06/2023'],
    toggleActive: true,
    templates: {
        leftArrow: '<i class="bx bxs-chevron-left" ></i>',
        rightArrow: '<i class="bx bxs-chevron-right" ></i>'
    },
});