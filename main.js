// вчимось гратися з остачею, юзаємо масиви та цикли (тут для першого вибрав вайл, длля другого - фор, тому що не знаю, чи є тут форіч та інший сахарок)
// якщо для циклів ще зарано і метою завдання було перевірити щось інше, перепрошую.  Та, все ж, в консоль виводиться те, що треба) 

let i=1;
let bla_bla = 10369;
let array = [];
let aux = "";

while (bla_bla !== 0) {
    array.push (bla_bla %10);
    bla_bla = (bla_bla - (bla_bla%10))/10;
}

// перший варіант виводу
aux = array[0]; 
for (i;i<array.length;i++){
    aux = aux + " " + array[i];
}

console.log (aux);

//другий варіант виводу без циклу а з простою конкатенацією. але якщо ми не знаємо одразу к-сть циферок в числі, то цикл краще, бо він одразу буде враховувати довжину числа/слова/етсетера.
console.log(array[0] + " " + array[1] + " " + array[2] + " " + array[3] + " " + array[4]);



// алерт/промт

let name = prompt ("Enter your name:");
console.log ( "Hello, " + name + "! How are you?");



// if, and, or, array, cycle;    Насправді, цикли - це та дікуха. Можна було одразу звертатись до числа як до масиву. 

let digits = prompt ("Enter three digits:");
let digits_array = [];
aux_dig = digits;

console.log(digits[0] + " " + digits[1] + " " + digits[2]);

// можна і без циклів було зробити, а просто звертатись до змінної "діджитс" за номером елементу. але попрактикуюсь з циклами. і одразу ж задєл на майбутнє, якщо зміниться к-сть цифер в числі. 
// так що цикли більш універсальні. та й давненько з ними не грався. хоча знаю, що там, де можна без них обійтись, треба обходитись без них, бо гальмують програму. 

while (digits !== 0) {
    digits_array.push (digits %10);
    digits = (digits - (digits%10))/10;
}

//перший варіант гри з умовними конструкціями. 

if (digits_array[0] === digits_array[1] && digits_array[0] === digits_array[2] & digits_array[1] === digits_array[2] ) {
    console.log ("They are all the same!");
} else {
    console.log("Some of them is different:-(");
}

if (digits_array[0]===digits_array[1] || digits_array[0]===digits_array[2] || digits_array[1]===digits_array[2]){
    console.log("Some of them is equal.");}

else {
console.log("The are all different!");
}



//другий варіант гри з умовними конструкціями. Тут залежить від самої задачі. В самому завданні не вказана мета (окрім закріпити знання з логічники "і" та "або"), але якби це було реальне
//завдання, то я б вже вибирав. І, швидше од усе, потрібна була б саме ось ця друга конструкція. 

if (digits_array[0] === digits_array[1] && digits_array[0] === digits_array[2] & digits_array[1] === digits_array[2] ) {
    console.log ("They are all the same!");
} else {
    if (digits_array[0]===digits_array[1] || digits_array[0]===digits_array[2] || digits_array[1]===digits_array[2]){
        console.log("Some of them is equal.");}

else {
    console.log("The are all different!");
}
}








