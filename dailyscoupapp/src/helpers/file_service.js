export const FileService = {
    getGUID, getFileExtenssion, downloadData
};
function getGUID() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return (s4() + s4());
}

function getFileExtenssion(fileExtensions) {
    let fileIcon = null;
    fileExtensions = fileExtensions.toLowerCase();
    if (fileExtensions === "xlsx" || fileExtensions === "xls") {
        fileIcon = '<div class="sprite-images xls"></div>';
    }
    else if (fileExtensions === "jpg" || fileExtensions === "png" || fileExtensions === "jpeg") {
        //fileIcon = require('../assets/images/icons/images_icon.png')
        fileIcon = '<div class="sprite-images img"></div>';
    }
    else if (fileExtensions === "pdf") {
        fileIcon = '<div class="sprite-images pdf"></div>';
    }
    else if (fileExtensions === "docx" || fileExtensions === "doc") {
        fileIcon = '<div class="sprite-images doc"></div>';
    }
    else if (fileExtensions === "tif" || fileExtensions === "tiff") {
        fileIcon = '<div class="sprite-images tif"></div>';
    }
    else if (fileExtensions === "eps") {
        fileIcon = '<div class="sprite-images eps"></div>';
    }
    else if (fileExtensions === "ppt" || fileExtensions === "pptx") {
        fileIcon = '<div class="sprite-images ppt"></div>';
    }
    else if (fileExtensions === "xml") {
        fileIcon = '<div class="sprite-images xml"></div>';
    }
    else if (fileExtensions === "msg") {
        fileIcon = '<div class="sprite-images mail_format"></div>';
    }
    else if (fileExtensions === "eml") {
        fileIcon = '<div class="sprite-images mail_format"></div>';
    }
    else if (fileExtensions === "ps") {
        fileIcon = '<div class="sprite-images ps"></div>';
    }

    return fileIcon;
}


function downloadData(file_name, fileurl) {

  
	try {
        window.location = fileurl;
		// var a = document.createElement("a");
		// a.href = fileurl;
		// a.target = "_blank";
		// a.setAttribute("download", file_name);
		// var b = document.createEvent("MouseEvents");
		// b.initEvent("click", false, true);
		// a.dispatchEvent(b);
		// return false;
	} catch (error) {
		window.webix.message({ text: error, type: "error" });
	}

}