const countValue = document.querySelector('#counter');

const increement = () => {
    // get the value from UI
    let value = parseInt(countValue.innerText) || 0; // Default to 0 if NaN
    // update the value
    value = value + 1;
    // set the value onto UI
    countValue.innerText = value;
};

const decreement = () => {
    // get the value from UI
    let value = parseInt(countValue.innerText) || 0; // Default to 0 if NaN
    // update the value
    value = value - 1;
    // set the value onto UI
    countValue.innerText = value;
};
