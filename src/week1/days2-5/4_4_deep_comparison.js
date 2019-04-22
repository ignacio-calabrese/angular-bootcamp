function deepEqual(value1, value2) {
    if (value1 === value2) {
        return true;
    } else if (value1 == null || typeof value1 != "object" ||
        value2 == null || typeof value2 != "object") {
            return false;
    }  else if (typeof value1 == "object" && typeof value2 == "object") {
        let keys1 = Object.keys(value1); 
        let keys2 = Object.keys(value2);
      
        if (keys1.length != keys2.length) {
            return false;
        }
      
        for (let key of keys1) {
          if (!keys2.includes(key) || !deepEqual(value1[key], value2[key])) {
              return false;
          } 
        }
        return true;
    }
  }
  
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));