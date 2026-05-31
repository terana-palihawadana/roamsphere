// Destination filters 
const filterButtons = document.querySelectorAll(".filter-btn");
const destinationItems = document.querySelectorAll(".destination-item");

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });
        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        destinationItems.forEach(function (item) {
            const category = item.getAttribute("data-category");
            if (filter === "all" || category === filter) {
                item.classList.remove("d-none");
            } else {
                item.classList.add("d-none");
            }
        });
    });
});

// Contact form
var contactForm = document.getElementById("contactForm");
var contactFormMessage = document.getElementById("contactFormMessage");

if (contactForm && contactFormMessage) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        if (!contactForm.checkValidity()) {
            contactForm.classList.add("was-validated");
            contactFormMessage.textContent = "Please fill in all fields correctly.";
            contactFormMessage.classList.remove("d-none", "text-success");
            contactFormMessage.classList.add("text-danger");
            return;
        }

        contactFormMessage.textContent = "Thanks! We received your message and will get back to you soon.";
        contactFormMessage.classList.remove("d-none", "text-danger");
        contactFormMessage.classList.add("text-success");
        contactForm.reset();
        contactForm.classList.remove("was-validated");
    });
}

// Newsletter signup 
document.querySelectorAll("section.newsletter form").forEach(function (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (!form.checkValidity()) {
            form.classList.add("was-validated");
            return;
        }
        form.classList.remove("was-validated");
        window.alert("Thanks for subscribing!");
        form.reset();
    });
});

// Packages show more 
var viewAllPackagesBtn = document.getElementById("viewAllPackagesBtn");
var morePackages = document.getElementById("morePackages");
if (viewAllPackagesBtn && morePackages) {
    viewAllPackagesBtn.addEventListener("click", function () {
        var isHidden = morePackages.classList.contains("d-none");
        if (isHidden) {
            morePackages.classList.remove("d-none");
            viewAllPackagesBtn.textContent = "Show fewer packages";
            viewAllPackagesBtn.setAttribute("aria-expanded", "true");
            morePackages.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
            morePackages.classList.add("d-none");
            viewAllPackagesBtn.textContent = "View All Packages";
            viewAllPackagesBtn.setAttribute("aria-expanded", "false");
            viewAllPackagesBtn.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    });
}
