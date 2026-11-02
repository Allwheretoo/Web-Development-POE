/* BOOKING FORM VALIDATION */

const bookingForm = document.getElementById("bookingForm");
const bookingMessage = document.getElementById("bookingMessage");
const dateInput = document.getElementById("date");

// Only run booking code on the Contact page
if (bookingForm && bookingMessage && dateInput) {

    // Set today's date as the earliest booking date
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    const todayDate = `${year}-${month}-${day}`;

    dateInput.min = todayDate;

    bookingForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const customerName = document.getElementById("name").value;
        const selectedService = document.getElementById("service").value;
        const selectedDate = dateInput.value;

        if (selectedDate < todayDate) {
            bookingMessage.textContent =
                "Please select a valid future booking date.";
            return;
        }

        bookingMessage.textContent =
            "Thank you, " + customerName +
            "! Your request for " + selectedService +
            " on " + selectedDate +
            " has been received.";

        bookingForm.reset();
        dateInput.min = todayDate;
    });
}


/* GALLERY LIGHTBOX */

const galleryImages = document.querySelectorAll(".gallery-image");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeLightbox = document.querySelector(".close-lightbox");

// Only run gallery code when the lightbox exists
if (galleryImages.length > 0 && lightbox && lightboxImage && closeLightbox) {

    galleryImages.forEach(function(image) {

        image.addEventListener("click", function() {

            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt;

            lightbox.style.display = "flex";
        });

    });

    // Close the lightbox
    closeLightbox.addEventListener("click", function() {
        lightbox.style.display = "none";
    });

    // Close when clicking outside the image
    lightbox.addEventListener("click", function(event) {

        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }

    });
}

// Enquiry form validation and AJAX submission

const enquiryForm = document.getElementById("enquiryForm");
const enquiryResponse = document.getElementById("enquiryResponse");

if (enquiryForm && enquiryResponse) {

    enquiryForm.addEventListener("submit", async function(event) {

        event.preventDefault();

        if (!enquiryForm.checkValidity()) {
            enquiryForm.reportValidity();
            return;
        }

        const customerName =
            document.getElementById("enquiryName").value;

        try {

            const response = await fetch(enquiryForm.action, {
                method: "POST",
                body: new FormData(enquiryForm),
                headers: {
                    "Accept": "application/json"
                }
            });

            if (response.ok) {

                enquiryResponse.textContent =
                    "Thank you, " + customerName +
                    "! Your enquiry has been sent successfully. Glow Up & Co. will respond soon.";

                enquiryForm.reset();

            } else {

                enquiryResponse.textContent =
                    "Sorry, your enquiry could not be sent. Please try again.";

            }

        } catch (error) {

            enquiryResponse.textContent =
                "There was a connection problem. Please try again.";

        }

    });

}

// General contact form validation and AJAX submission

const contactMessageForm = document.getElementById("contactMessageForm");
const contactResponse = document.getElementById("contactResponse");

if (contactMessageForm && contactResponse) {

    contactMessageForm.addEventListener("submit", async function(event) {

        event.preventDefault();

        if (!contactMessageForm.checkValidity()) {
            contactMessageForm.reportValidity();
            return;
        }

        const customerName =
            document.getElementById("contactName").value;

        try {

            const response = await fetch(contactMessageForm.action, {
                method: "POST",
                body: new FormData(contactMessageForm),
                headers: {
                    "Accept": "application/json"
                }
            });

            if (response.ok) {

                contactResponse.textContent =
                    "Thank you, " + customerName +
                    "! Your message has been sent successfully. Glow Up & Co. will get back to you soon.";

                contactMessageForm.reset();

            } else {

                contactResponse.textContent =
                    "Sorry, your message could not be sent. Please try again.";

            }

        } catch (error) {

            contactResponse.textContent =
                "There was a connection problem. Please try again.";

        }

    });

}

