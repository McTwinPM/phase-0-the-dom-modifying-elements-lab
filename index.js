main.remove()

let newHeader = document.createElement("h1")
document.body.append(newHeader)

newHeader.id = "victory"
console.log(newHeader.id)

newHeader.textContent = "Michael is the champion"