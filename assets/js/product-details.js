function changeImage(thumb) {
  // Change main image
  const mainImg = document.getElementById("main-image");
  mainImg.src = thumb.src;

  // Remove active class from all thumbnails
  const thumbs = document.querySelectorAll(".thumb");
  thumbs.forEach((img) => img.classList.remove("active"));

  // Add active class to clicked one
  thumb.classList.add("active");
}

//quantity btn

const decreasebtn = document.getElementById("decrease")
const increasebtn = document.getElementById("increase")
const quantityInput = document.getElementById("quantity")

function updateButtonState() {
    const currentValue = parseInt(quantityInput.value)
    decreasebtn.disabled = currentValue <= parseInt(quantityInput.min)
    increasebtn.disabled = currentValue >= parseInt(quantityInput.max)
}

decreasebtn.addEventListener('click', () => {
    let currentValue = parseInt(quantityInput.value);
    if (currentValue > parseInt(quantityInput.min)) {
        quantityInput.value = currentValue - 1;
        updateButtonState()
    }
})

increasebtn.addEventListener('click', () => {
    let currentValue = parseInt(quantityInput.value);
    if (currentValue < parseInt(quantityInput.max)) {
        quantityInput.value = currentValue + 1;
        updateButtonState()

    }
})

quantityInput.addEventListener('input', updateButtonState)

updateButtonState()

//size

const sizeBoxes = document.querySelectorAll('.size-box')
const selectedSizeText = document.getElementById('selected-size')

sizeBoxes.forEach((box) => {
    box.addEventListener('click', ()=> {
         // Remove active class from all
         sizeBoxes.forEach((b) => b.classList.remove('active'))

         // Add to clicked one
         box.classList.add('active')

          // Update text
          selectedSizeText.textContent = box.dataset.size
    })
})