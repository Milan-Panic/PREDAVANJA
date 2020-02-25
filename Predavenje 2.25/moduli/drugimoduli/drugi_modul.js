const format = datum => {
    return `${datum.getDate()}/${datum.getMonth()+1}/${datum.getFullYear()}`
}
module.exports = {
    format
}