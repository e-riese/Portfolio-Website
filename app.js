(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

var my_element = document.getElementById("my_element");
my_element.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest"
  });



  function CopyMe(TextToCopy) {
    var TempText = document.createElement("input");
    TempText.value = TextToCopy;
    document.body.appendChild(TempText);
    TempText.select();
    
    document.execCommand("copy");
    document.body.removeChild(TempText);
    
    alert("Copied the text to clipboard: " + TempText.value);
  }