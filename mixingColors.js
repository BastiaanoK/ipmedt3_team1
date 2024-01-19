const mixingColors = (brushColor, boxColor) => {
    console.log(boxColor);

    if (brushColor == null) {
        // if brushColor has no value, return boxColor
        return boxColor;
    }

    if (boxColor == null) {
        // if boxColor has no value, there will be no mixing
        return brushColor;
    } else {
        const rgbA = brushColor.substring(4, brushColor.length - 1).split(',');
        const rgbB = boxColor.substring(4, boxColor.length - 1).split(',');
        return colorMixer(rgbA, rgbB);
    }
};


//colorChannelA and colorChannelB are ints ranging from 0 to 255
function colorChannelMixer(colorChannelA, colorChannelB, amountToMix){
    var channelA = colorChannelA*amountToMix;
    var channelB = colorChannelB*(1-amountToMix);
    return parseInt(channelA+channelB);
}
//rgbA and rgbB are arrays, amountToMix ranges from 0.0 to 1.0
//example (red): rgbA = [255,0,0]
function colorMixer(rgbA, rgbB){
    var r = colorChannelMixer(parseInt(rgbA[0]), parseInt(rgbB[0]), 0.5);
    var g = colorChannelMixer(parseInt(rgbA[1]),parseInt(rgbB[1]), 0.5);
    var b = colorChannelMixer(parseInt(rgbA[2]),parseInt(rgbB[2]), 0.5);
    return "rgb("+r+","+g+","+b+")";
}