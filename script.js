// Search destination

function searchDestination() {

    let search = document.getElementById("searchInput").value;

    if (search == "") {
        alert("Please enter a destination");
    } else {
        alert("Searching for " + search);
    }
}


// Add destination to wishlist

function addWishlist(destination) {

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (!wishlist.includes(destination)) {

        wishlist.push(destination);

        localStorage.setItem(
            "wishlist",
            JSON.stringify(wishlist)
        );

        alert(destination + " added to wishlist ❤️");

    } else {

        alert(destination + " is already in your wishlist");

    }
}


// Display wishlist

function displayWishlist() {

    let container = document.getElementById("wishlistContainer");

    if (!container) {
        return;
    }

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (wishlist.length == 0) {

        container.innerHTML = "<p>Your wishlist is empty.</p>";

        return;
    }

    container.innerHTML = "";

    wishlist.forEach(function(destination) {

        let card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `
            <h3>${destination}</h3>
            <p>This destination is saved in your wishlist.</p>
            <button onclick="removeWishlist('${destination}')">
                Remove
            </button>
        `;

        container.appendChild(card);
    });
}


// Remove from wishlist

function removeWishlist(destination) {

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    wishlist = wishlist.filter(function(item) {
        return item !== destination;
    });

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

    displayWishlist();
}


// Book package

function bookPackage(packageName) {

    alert(
        "You selected " + packageName + 
        ". Booking feature will be added later."
    );
}


// Logout

// function logout() {

//     alert("You have been logged out.");
// }


// Run wishlist function when page loads

displayWishlist();
function loginUser() {

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    if (email == "" || password == "") {

        alert("Please enter email and password");

    } else {

        alert("Login successful!");

    }
}


function signupUser() {

    let name = document.getElementById("signupName").value;
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;

    if (name == "" || email == "" || password == "") {

        alert("Please fill all fields");

    } else {

        alert("Account created successfully!");

    }
}


function showSignup() {

    document.getElementById("signupBox").style.display = "block";

}