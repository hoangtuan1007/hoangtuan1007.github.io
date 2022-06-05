var wrapper = document.querySelector(".wrapper")
setInterval(function() {

    var span = document.createElement('span')
    span.style.left = (Math.floor(Math.random() * window.innerWidth))
    span.style.top = (Math.floor(Math.random() * window.innerHeight))
    const sizeImg = Math.floor(Math.random() * 100);
    span.style.width = sizeImg + 'px';
    span.style.height = sizeImg + 'px';
    wrapper.appendChild(span)
    setTimeout(function() {
        span.remove()
    }, 2000)
}, 100)