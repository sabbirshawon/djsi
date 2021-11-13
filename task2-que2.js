//Question: 2 

function primitive_check(x) {
    /* 
        console.log("Original:")
        console.log(x) 
    */

    //Clone Created
    let new_obj = {
        ...x
    };

    for (const property in new_obj) {

        if (typeof new_obj[property] != 'object') {
            new_obj[property] = true;

        } else {
            // console.log('Is Object!');
            new_obj[property] = object_property(new_obj[property])
        }

    }

    return new_obj;

}

function object_property(content) {
    let ab = {
        ...content
    };
    for (const p in ab) {
        if (typeof ab[p] != 'object') {
            ab[p] = true;

        } else {
            // console.log('Is Object!');
            ab[p] = object_property(ab[p])
        }
    }

    return ab;

}


const data = {
    name: "Bar",
    email: "foo@example.com",
    address: {
        line_1: "12-A, 1st Floor",
        line_2: "",
        street: "Omuk Street",
        country: {
            name: "Bangladesh",
            code: "BGD",
        },
    },
};


/* console.log(primitive_check(data)) */

console.log(data);
console.log('After Modification: ');
console.log(primitive_check(data));
/* primitive_check(data); */


/**

Quetion: 2
Name: Sabbir Ahmed Shawon
Github Usename: sabbirshawon

 */