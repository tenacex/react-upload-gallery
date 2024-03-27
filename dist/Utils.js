"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAccepted = exports.getImageDimensions = exports.getEventFiles = exports.getBody = exports.bytesToSize = exports.arrayMove = void 0;
var getBody = exports.getBody = function getBody(xhr) {
  var text = xhr.responseText || xhr.response;
  if (!text) return text;
  try {
    return JSON.parse(text);
  } catch (e) {
    return text;
  }
};
var bytesToSize = exports.bytesToSize = function bytesToSize(bytes) {
  var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes === 0) return "0 Byte";
  var log = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.round(bytes / Math.pow(1024, log), 2) + " " + sizes[log];
};
var getEventFiles = exports.getEventFiles = function getEventFiles(event) {
  if (!event.dataTransfer) {
    return [];
  }
  return event.dataTransfer.files;
};
var isAccepted = exports.isAccepted = function isAccepted(fileType, acceptedFiles) {
  if (fileType && acceptedFiles) {
    var mimeType = fileType || "";
    var baseMimeType = mimeType.replace(/\/.*$/, "");
    return acceptedFiles.some(function (type) {
      var validType = type.trim();
      if (validType.endsWith("/*")) {
        return baseMimeType === validType.replace(/\/.*$/, "");
      }
      return mimeType === validType;
    });
  }
  return true;
};
var getImageDimensions = exports.getImageDimensions = function getImageDimensions(data) {
  return new Promise(function (resolve) {
    var image = new Image();
    image.onload = function () {
      var width = image.width,
        height = image.height;
      resolve({
        width: width,
        height: height
      });
    };
    image.src = data;
  });
};
var arrayMove = exports.arrayMove = function arrayMove(array, from, to) {
  array = array.slice();
  array.splice(to < 0 ? array.length + to : to, 0, array.splice(from, 1)[0]);
  return array;
};