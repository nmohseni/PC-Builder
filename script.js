function criteria(){
    var budget = document.getElementById("budgetInputId").value;
    var videoCard = document.getElementById("videoCard").value;
    var processor = document.getElementById("processor").value;
    var ram = document.getElementById("ram").value;
    var ssd = document.getElementById("ssd").value;

   if (budget <= 450 && processor == "intel" && ram == "eight") {
    window.open("build1.html");
    window.close("index.html");
   } else if (budget <= 650 && videoCard == "amd" && processor == "intel" && ram == "eight") {
    window.open("build2.html");
    window.close("index.html");
   } else if (budget <= 900 && videoCard == "amd" && processor == "intel" && ram == "eight") {
    window.open("build3.html");
    window.close("index.html");
   } else if (budget <= 1100 && videoCard == "nvidia" && processor == "intel" && (ram == "eight" || ram == "sixteen")) {
    window.open("build4.html");
    window.close("index.html");
   } else if (budget <= 1300 && videoCard == "nvidia" && processor == "intel" && (ram == "eight" || ram == "sixteen")) {
    window.open("build5.html");
    window.close("index.html");
   } else if (budget <= 1500 && videoCard == "nvidia" && processor == "intel" && (ram == "eight" || ram == "sixteen")) {
    window.open("build6.html");
    window.close("index.html");
   } else if (budget <= 1500 && videoCard == "nvidia" && processor == "amd" && (ram == "eight" || ram == "sixteen")) {
    window.open("build7.html");
    window.close("index.html");
   } else if (budget <= 1500 && videoCard == "nvidia" && processor == "amd" && ram == "thirtytwo") {
    window.open("build8.html");
    window.close("index.html");
   } else {
    alert("Please try a different search.")
   }
}

//Do not touch anything below this line