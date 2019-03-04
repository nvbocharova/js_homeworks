function checkDataType(isNumber) {
    if (typeof isNumber === "number") {
        var curDate = new Date();
        document.write(curDate.toLocaleString())
    } else
        document.write("Неверный тип данных")
}





/*при попытке записать тернарный оператор выдает ошибку в консоли.
Цепляется к  "var curDate"


typeof isNumber === "number" ? (
	var curDate = new Date(),
    console.log(curDate.toLocaleString())
) : console.log("Неверный тип данных");

*/