const letter = position[0].toLowerCase();
const number = parseInt(position[0]).tolowercase();
if (letter < "a" || letter > "h" || number < 1 || number > 8) return "Invalid position";
return (letter.charCodeAt)