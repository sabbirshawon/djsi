//Question: 3

function updateData(a, ob) {
    isArray = Object.prototype.toString.call(ob) == '[object Array]';

    if (isArray) { 

        ob.forEach((item, index) => {
            let path = item.path;
            let val = item.value;

            let first, second;
            // console.log(path);
            seperated = path.split(".");

            if (a[seperated[0]])
                a[seperated[0]][seperated[1]] = val
            else {
                a[seperated[0]] = {}
                a[seperated[1]] = val

            }
        })

    } else {

        let path = ob.path;
        let val = ob.value;
        seperated = path.split(".");
  

        if (a[seperated[0]])
            a[seperated[0]][seperated[1]] = val
        else {
            a[seperated[0]] = {}
            a[seperated[0]][seperated[1]] = val
        }

    }

    return a;

}



const opt1 = { path: "address.country", value: "Bangladesh" };

const opt2 = [
  { path: "address.line_1", value: "Address Line 1" },
  { path: "address.line_2", value: "Address Line 2" },
];



//Original Object

const data = {
    hello: "HELLO",

};

console.log("Original: ")
console.log(data)

let output;
let new_ob = {
    ...data
}
output = updateData(new_ob, opt1);
console.log(output)
console.log('After Modification: ');
output = updateData(output, opt2);
console.log(output)


/**

Quetion: 3
Name: Sabbir Ahmed Shawon
Github Usename: sabbirshawon

 */