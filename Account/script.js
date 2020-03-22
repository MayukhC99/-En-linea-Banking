var theImageForm = document.querySelector('#theImageForm');
var theImageField = document.querySelector('#theImageField');
var theImageContainer = document.querySelector('#theImageContainer');
var theErrorMessage = document.querySelector('#errorMessage');
var theSuccessMessage = document.querySelector('#successMessage');
var theClearImageLink = document.querySelector('#clearImage');
var theOpenButton = document.querySelector('#buttonContainer');

var i = 0;

function myFunction(){
	if (i > 2){
		i = 1;
	}
	if (theOpenButton.style.display === "none" && i == 1) {
		theOpenButton.style.display = "grid";
	} else {
		i = 0;
		theOpenButton.style.display = "none";
	}
}

$(document).mouseup(function(e){
	var container = $("#buttonContainer");
    if(!container.is(e.target)){
		i++;
        container.hide();
	}
});

theImageField.onchange = function (e) {
    var theFile = e.target.files[0];

    if(checkFileProperties(theFile)) {
        handleUploadedFile(theFile);
    }

}

function checkFileProperties(theFile) {
    theErrorMessage.classList.add('hide');
    theSuccessMessage.classList.add('hide');

    if (theFile.type !== "image/png" && theFile.type !== "image/jpeg") {
        theErrorMessage.innerHTML = "File type should be png or jpg/jpeg...";
        theErrorMessage.classList.remove('hide');
        return false;
    }

    if (theFile.size > 500000) {
        theErrorMessage.innerHTML = "File too large, cannot be more than 500KB...";
        theErrorMessage.classList.remove('hide');
        return false;
    }

    return true;

}

theImageForm.onsubmit = function (e) {
    e.preventDefault();
    var theImageTag = document.querySelector('#theImageTag');
    try{
        jQuery.ajax({
            method: 'POST',
            url: '/upload',
            data: {
                theFile: theImageTag.getAttribute('src'),
                name: fileName
            }
        })
        .done(function (resp) {
            if(resp === "UPLOADED") {
                theSuccessMessage.innerHTML = "Image uploaded successfully";
                theSuccessMessage.classList.remove('hide');
            }
        })
    }
    catch(errorMessage){
        theErrorMessage.innerHTML = "Select a File to Upload...";
        theErrorMessage.classList.remove('hide');
    }
}

theClearImageLink.onclick = clearImage;



function preventDragDefault(e) {
    e.preventDefault();
    e.stopPropagation();
}

function handleUploadedFile(file) {
    fileName = file.name;
    clearImage();
    var img = document.createElement("img");
    img.setAttribute('id', 'theImageTag');
    img.file = file;
    theImageContainer.appendChild(img);
    var reader = new FileReader();
    reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
    reader.readAsDataURL(file);
}

function clearImage(e) {
    if(e) {
        e.preventDefault();
    }

    var theImageTag = document.querySelector('#theImageTag');

    if(theImageTag) {
        theImageContainer.removeChild(theImageTag);
        theImageField.value = null;
    }

    theErrorMessage.classList.add('hide');
    theSuccessMessage.classList.add('hide');
}

$(document).ready(function(){
    let prev_flag = $('#pi');

    $(".head").click(function(){
        prev_flag.toggleClass('active');
        prev_flag = $(this);
        prev_flag.toggleClass('active');
        if($('#pi').hasClass('active')){
            $("#personal").css({'margin-left': '0'});
            $("#change").css({'margin-left': '120%'});
        }
        else{
            $("#personal").css({'margin-left': '-100%'});
            $("#change").css({'margin-left': '0%'});
        }
    });
});