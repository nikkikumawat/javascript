 //length (is a property, not a function)
    //indexOf, lastIndexOf, includes, 
    //replace, replaceAll, 
    //slice, substring, substr
    //toUpperCase, toLowerCase
    //split, join (SANJAY)

    let str = 'Javascript ne pagal bana diya hai';

    document.write(str.length)

    // console.log(str.indexOf('p', 9))

    // console.log(str.lastIndexOf('j')) //-1

    // console.log(str.includes("j")) //false
    // console.log(str.includes("r")) //true


    // console.log(str.replace('pagal', 'mast'))

    //g - is called a flag which stands for global
    //i 

    // console.log(str.replace(/a/g, "A"))

    // console.log(str.replaceAll("a", "A"))



    //To Extract string from a string

    // console.log(str.slice(10,20 ).length) //10

    // console.log(str.slice(15, 10)) //blank

    // console.log(str.slice(-20, -10))
    // console.log(str.slice(-20, -30)) //BLANK

    // console.log(str.slice(-15)) //returns whole string from that position


    // console.log(str.substring(10,20))


    // console.log(str.substr(5,10))



    // SPLIT

    // str = "sanjay";

    let date = '12/01/2023'
    // console.log(date.split('/'))

    let splittedDate = date.split("")

    console.log(splittedDate)

    // console.log(splittedDate[2] + "-" + splittedDate[1] + "-" +splittedDate[0])


    let name = "Harsh"

    // let nameSplitted = name.split('')

    // for (let i = nameSplitted.length - 1; i >= 0; i--) {
    //   document.write(nameSplitted[i])
    // }


    //Join
    //What is Array?
    //length
    // push, pop, shift, unshift, slice, splice, indexOf, lastIndexOf, includes
    //sort, & compare function
    //Bubble sort
    //Selection Sort
