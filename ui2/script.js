const dropzoneBox = document.getElementsByClassName("dropzone-box")[0];

const inputFiles = document.querySelectorAll(".dropzone-area input[type='file']");

const inputElem = inputFiles[0];

const dropzoneElem = inputElem.closest(".dropzone-area");

inputElem.addEventListener("change", (e) => {
    if (inputElem.files.length) {
        updateDropzoneFileList(dropzoneElem, inputElem.files[0]);
    }
});

dropzoneElem.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropzoneElem.classList.add("dropzone--over")
});

["dragleave", "dragend"].forEach((type) => {
    dropzoneElem.addEventListener(type, (e) => {
        dropzoneElem.classList.remove("dropzone--over");
    });
});

dropzoneElem.addEventListener("drop", (e) => {
    e.preventDefault();
    if (e.dataTransfer.files.length) {
        inputElem.files = e.dataTransfer.files;

        updateDropzoneFileList(dropzoneElem, e.dataTransfer.files[0]);
    }
    dropzoneElem.classList.remove("dropzone--over");
});

const updateDropzoneFileList = (dropzoneElem, file) => {
    let dropzoneFileMessage = dropzoneElem.querySelector(".message");

    dropzoneFileMessage.innerHTML = `${file.name}, ${file.size} bytes`;
}

dropzoneBox.addEventListener("reset", (e) => {
    let dropzoneFileMessage = dropzoneElem.querySelector(".message");
    dropzoneFileMessage.innerHTML = `No Files Selected`;
});

dropzoneBox.addEventListener("submit", (e) =>{
    e.preventDefault();
    const myFiled = document.getElementById("upload-file");
    console.log(myFiled.files[0]);
})
