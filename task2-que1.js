//Question: 1

var source_obj, destination_obj, source_id, destination_id, transfer = 0;

function movement_between_siblings(data, src, des) {

    let len = data.length;
    if (des > len - 1 || des < 0) {

        console.log("This index does not exist")
        return;

    }

    console.log(`Complete Length : ${len}`)
    for (let i = 0; i < data.length; i++) {

        if (data[i].id == src) {
            source_id = i;

            if (des == i) {

                console.log("The source data is already there")
                return;

            } else {
                
                source_obj = {
                    ...data[i]
                }
                console.log('Source Found!');
                console.log(source_obj)

            }
        }

        if (des == i) {
            console.log('Destination Found!')
            destination_obj = {
                ...data[i]
            }
            destination_id = i;
            if (source_obj) {
                console.log("we have both")
                transfer = 1;
                break;
            }

        }
    }

    if (transfer) {

        console.log('To be transferred Now!')
        console.log(`Dest ID : ${destination_id}, SourceID : ${source_id}`);

        data.splice(destination_id, 0, source_obj);
        data.splice(source_id, 1)

    }

    console.log(data)

}

function object_movement(arr, source, destination, movement_pattern) {


    if (movement_pattern == 1) {
        arr = movement_between_siblings(arr, source, destination);
        return arr;
    }

    for (let i = 0; i < arr.length; i++) {

        console.log(arr[i])

        if (arr[i].id == source) {

            source_obj = {
                ...arr[i]
            }
            console.log('Source Found!');
            console.log(source_obj)

        }

        if (arr[i].id == destination) {
            console.log('Destination Found at : ' + arr[i].id)
            destination_id = arr[i].id
            if (source_obj) {
                console.log(arr[i])
                console.log("We have both the source and destination!")
                if (arr[i].children) {
                    arr[i].children.push(source_obj)
                    transfer = 1;
                    break;
                } else {

                    arr[i].children = []

                    arr[i].children.push(source_obj)
                    transfer = 1;
                    break;
                }
            }
        }

        if (arr[i].children) {
            console.log('This one has children')
            if (traversing_children(arr[i].children, destination, source))
                break;
        }
    }

    if (transfer) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].id == source_obj.id) {
                arr.splice(i, 1)
                transfer = 0;
            }

        }
    }

    console.log("Required::")
    console.log(arr)
    return arr;

}

function traversing_children(children, des, sour) {
    console.log("Inside Traversing")

    for (let i = 0; i < children.length; i++) {

        if (children[i].id == des) {

            console.log('Destination Found at : ' + children[i].id)
            destination_id = children[i].id
            if (source_obj) {

                console.log("Required: ")
                console.log(destination_id)
                console.log(children[i])

                console.log("We have both the source and destination!")
                if (children[i].children) {

                    children[i].children.push(source_obj)
                    transfer = 1;
                    return 1;

                } else {
                    console.log("Run")
                    console.log(source_obj)
                    children[i].children = []
                    console.log(children[i])
                    children[i].children.push(source_obj)
                    transfer = 1;
                    console.log(children[i])
                    return 1;

                }
            }

        }

        if (children[i].children) {
            if (traversing_children(children[i].children, des, sour))
                break;
        }
    }

}

const sourceData = [
  {
    id: 1,
    label: "Label 1",
  },
  {
    id: 2,
    label: "Label 2",
    children: [
      { id: 21, label: "Label 21" },
      {
        id: 22,
        label: "Label 22",
        children: [
          { id: 221, label: "Label 221" },
          { id: 222, label: "Label 222" },
        ],
      },
    ],
  },
  {
    id: 3,
    label: "Label 3",
  },
];

let a, b, c;

let new_obj = [...sourceData]

let result = object_movement(new_obj, 1, 22, 2) // choose object which you want to move
// console.log(result) 


/**

Quetion: 1
Name: Sabbir Ahmed Shawon
Github Usename: sabbirshawon

 */