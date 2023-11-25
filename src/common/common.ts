export const changeToDateText = (date: Date, mode?: "ymd" | "ym" ) => {
    let text: string
    switch (mode) {
        case "ymd":
            text = date.getFullYear() +"-"+ ( "0" + (date.getMonth()+1) ).slice(-2) +"-"+ ( "0" + date.getDate() ).slice(-2);
            break;
        case "ym":
            text = date.getFullYear() +"-"+ ( "0" + (date.getMonth()+1) ).slice(-2)
            break
        default:
            text = date.getFullYear() +"-"+ ( "0" + (date.getMonth()+1) ).slice(-2) +"-"+ ( "0" + date.getDate() ).slice(-2);
            break;
    }
    return text
}