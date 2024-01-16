const PI = 3.14159
let radius
let circumference
let area

document.getElementById("Submit").onclick = function () {
    radius = document.getElementById("box").value
    radius = Number(radius)

    circumference = 2 * PI * radius
    area = PI * radius ** 2
    document.getElementById("H3").textContent = "circumference of a circle is: " + circumference
    document.getElementById("H4").textContent = "Area of a circle is: " + area
}