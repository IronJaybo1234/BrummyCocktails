var imageClicked = false;

function showMapAndInfo(location) {
    var locationBox = document.getElementById('locationBox');
    var infoBox = document.getElementById('infoBox');
    var gallery = document.getElementById('gallery');
    var largerImageBox = document.getElementById('largerImageBox');
    var reviewsAndRecipes = document.getElementById('reviewsAndRecipes');
    var cocktailMenu = document.getElementById('cocktailMenu');
    reviewsAndRecipes.style.display = 'block';
    largerImageBox.style.display = 'none';
    imageClicked = false;
    // location 1
    if (location === 'location1') {
        locationBox.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0!2d-1.888704!3d52.475215999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bc22e349554b%3A0x7c3d01130a377fb4!2s30%20Gibb%20St%2C%20Birmingham%20B9%204BF%2C%20UK!5e0!3m2!1sen!2s!4v1635834562965!5m2!1sen!2s"  style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>';
        infoBox.innerHTML = '<h2>Laid-Back, Neighbourhood Bar</h2><p>Placeholder info</p>';
        gallery.innerHTML = '<img src="martini.jpg" alt="martini" onclick="changeLargeImage(this.src, this.alt)">\n' +
            '<img src="martini.jpg" alt="martini" onclick="changeLargeImage(this.src, this.alt)">\n' +
            '<img src="martini.jpg" alt="martini" onclick="changeLargeImage(this.src, this.alt)">\n' +
            '<img src="martini.jpg" alt="martini" onclick="changeLargeImage(this.src, this.alt)">'
        cocktailMenu.innerHTML = '<img src="fancy.png" alt="cocktail menu">'
    }

    else if (location === 'location2') {
        locationBox.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0!2d-1.908787!3d52.483076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bc133c7e6d7f%3A0x4c4c39a1751785da!2s40%20Cox%20St%2C%20Birmingham%20B3%201RD%2C%20UK!5e0!3m2!1sen!2s!4v1635834562965!5m2!1sen!2s\n"  style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>';
        infoBox.innerHTML = '<h2>Small Table Service Bar</h2><p></p>';
        gallery.innerHTML = '<img src="martini.jpg" alt="martini" onclick="changeLargeImage(this.src, this.alt)">\n' +
            '<img src="martini.jpg" alt="martini" onclick="changeLargeImage(this.src, this.alt)">\n' +
            '<img src="icey.jpg" alt="icey" onclick="changeLargeImage(this.src, this.alt)">\n' +
            '<img src="martini.jpg" alt="martini" onclick="changeLargeImage(this.src, this.alt)">'
        cocktailMenu.innerHTML = '<img src="40stpaul.jpg" alt="cocktail menu">'
    }

    else if (location === 'location3') {
        locationBox.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0!2d-1.927883!3d52.421286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870c71471ec02df%3A0xf50c960bf10a3d7c!2s1466%20Pershore%20Rd%2C%20Birmingham%20B30%202NT%2C%20UK!5e0!3m2!1sen!2s!4v1635834562965!5m2!1sen!2s\n"  style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>';
        infoBox.innerHTML = '<h2>Bar for Cocktail Connoisseurs</h2><p>Placeholder info</p>';
        gallery.innerHTML = '<img src="martini.jpg" alt="martini" onclick="changeLargeImage(this.src, this.alt)">\n' +
            '<img src="martini.jpg" alt="martini" onclick="changeLargeImage(this.src, this.alt)">\n' +
            '<img src="icey.jpg" alt="icey" onclick="changeLargeImage(this.src, this.alt)">\n' +
            '<img src="martini.jpg" alt="martini" onclick="changeLargeImage(this.src, this.alt)">'
        cocktailMenu.innerHTML = '<img src="couch.jpg" alt="cocktail menu">'
    }

    else {
        locationBox.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.0737884702434!2d-74.00679578459615!3d40.71277638184267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0x5e6253b05ac935a4!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1635834562965!5m2!1sen!2s"  style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>';
        infoBox.innerHTML = '<h2>placeholder title</h2><p>Placeholder info</p>';
        gallery.innerHTML = '<img src="cocktail3.jpeg" alt="rocks" onclick="changeLargeImage(this.src, this.alt)">\n' +
            '<img src="cocktail1.jpg" alt="mojito" onclick="changeLargeImage(this.src, this.alt)">\n' +
            '<img src="cocktail2.jpg" alt="blue jug" onclick="changeLargeImage(this.src, this.alt)">\n' +
            '<img src="cocktail3.jpeg" alt="rocks" onclick="changeLargeImage(this.src, this.alt)">'
        cocktailMenu.innerHTML = '<img src="fancy.png" alt="cocktail menu">'
    }
    infoBox.style.display = 'block';
}

function changeLargeImage(image, info) {
    var largerImageBox = document.getElementById('largerImageBox');
    var reviewsAndRecipes = document.getElementById('reviewsAndRecipes')
    console.log("changes large image")
    if (!imageClicked) {
        largerImageBox.style.display = 'block';
        reviewsAndRecipes.style.display = 'none';
        imageClicked = true;
    }
    largerImageBox.innerHTML = '<img src="' + image + '" alt="' + info + '">'
}

document.addEventListener('DOMContentLoaded', function() {
    // Makes the bar at the top of the list displayed when it is loaded.
    showMapAndInfo('location1');

    var boxes = document.querySelectorAll('.vertical-menu a');

    boxes.forEach(function(box) {
        box.addEventListener('click', function(event) {
            boxes.forEach(function(b) {
                b.classList.remove('active');
            });
            //activates the button and keeps it highlighted
            this.classList.add('active');
        });
    });
});

function submitReview() {

    var reviewInput = document.getElementById('reviewInput').value.trim();

    if (reviewInput.length >= 100 ) {
        var reviewsAndRecipes = document.getElementById('reviewsAndRecipes');
        var reviewNode = document.createElement('a');
        reviewNode.textContent = reviewInput;
        reviewsAndRecipes.appendChild(reviewNode);

        document.getElementById('reviewInput').value = '';
    } else {
        alert('Your review is too short, please make it at least 100 characters');
    }
}