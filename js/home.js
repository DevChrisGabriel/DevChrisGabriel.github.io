const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }

    });
});

const hiddenElements = document.querySelectorAll('#hidden');
Array.from(hiddenElements).forEach((el) => observer.observe(el));


const observer1image = new IntersectionObserver((entries1) => {
    entries1.forEach((entry1) => {
        console.log(entry1);
        if (entry1.isIntersecting) {
            entry1.target.classList.add('show1image');
        }
        else{
            entry1.target.classList.remove('show1image');
        }

    });
});

const hiddenElements1image = document.querySelectorAll('#hidden1image');
Array.from(hiddenElements1image).forEach((el) => observer1image.observe(el));

const observer2 = new IntersectionObserver((entries2) => {
    entries2.forEach((entry2) => {
        console.log(entry2);
        if (entry2.isIntersecting) {
            entry2.target.classList.add('show2');
        }
        else{
            entry2.target.classList.remove('show2');
        }

    });
});

const hiddenElements2 = document.querySelectorAll('#hidden2');
Array.from(hiddenElements2).forEach((el) => observer2.observe(el));


const observer2image = new IntersectionObserver((entries2image) => {
    entries2image.forEach((entry2) => {
        console.log(entry2);
        if (entry2.isIntersecting) {
            entry2.target.classList.add('show2image');
        }
        else{
            entry2.target.classList.remove('show2image');
        }

    });
});

const hiddenElements2image = document.querySelectorAll('#hidden2image');
Array.from(hiddenElements2image).forEach((el) => observer2image.observe(el));

document.addEventListener("DOMContentLoaded", function () {
    var drawGlobe = document.getElementById('draw-globe');
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                drawGlobe.classList.add('draw');
            } else {
                drawGlobe.classList.remove('draw');
            }
        });
    }, { threshold: 0.5 });

    observer.observe(drawGlobe);
});