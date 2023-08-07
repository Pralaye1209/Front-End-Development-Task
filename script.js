const pairRadios = document.querySelectorAll('input[name^="pair"]');
const expandContents = document.querySelectorAll('.expand-content');
const boxes = document.querySelectorAll('.box');

pairRadios.forEach((pairRadio, index) => {
    pairRadio.addEventListener('change', () => {
        if (pairRadio.checked) {
            pairRadios.forEach((radio, radioIndex) => {
                if (radioIndex !== index) {
                    radio.checked = false;
                    expandContents[radioIndex].style.display = 'none';
                    boxes[radioIndex].style.height = 'fit-content';
                    boxes[radioIndex].style.backgroundColor = 'transparent';
                    boxes[radioIndex].style.borderColor = '#ccc';
                }
            });

            expandContents[index].style.display = 'block';
            boxes[index].style.height = 'auto';
            boxes[index].style.backgroundColor = '#F4FBF9';
            boxes[index].style.borderColor = '#007F61';
            
            const popularText = boxes[index].querySelector('.popular');
            if (popularText) {
                popularText.style.display = 'block'; // Show "Most Popular" text
            }
        } else {
            expandContents[index].style.display = 'none';
            boxes[index].style.height = 'fit-content';
            boxes[index].style.backgroundColor = 'transparent';
            boxes[index].style.borderColor = '#ccc';
            
            const popularText = boxes[index].querySelector('.popular');
            if (popularText) {
                popularText.style.display = 'none'; // Hide "Most Popular" text
            }
        }
    });
});

// Dummy data for dropdown options
const sizes = ['Small', 'Medium', 'Large'];
const colors = ['Red', 'Blue', 'Green'];

const sizeDropdowns = document.querySelectorAll('.size-dropdown');
const colorDropdowns = document.querySelectorAll('.color-dropdown');

sizeDropdowns.forEach((dropdown) => {
    sizes.forEach((size) => {
        const option = document.createElement('option');
        option.value = size;
        option.text = size;
        dropdown.appendChild(option);
    });
});

colorDropdowns.forEach((dropdown) => {
    colors.forEach((color) => {
        const option = document.createElement('option');
        option.value = color;
        option.text = color;
        dropdown.appendChild(option);
    });
});
