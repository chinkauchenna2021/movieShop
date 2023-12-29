
// interface IText{
//     description:string
// }


export function wrapText(description:any ,maxWords:number ) {
    var words = description.split(/\s+/);
    if (words.length > maxWords) {
        return words.slice(0, maxWords).join(" ") + "...";
    }
    return description;
}
