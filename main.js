var global = (function() {
    return this;
 })();



 function Pair(key, value) {
     this.key = key;
     this.value = value;

     this.toString = function() {
        return "(" + key + ", " + value + ")";
     };
 }


 Object.prototype.as = function(dataName) {
     var value, key, data;
     global[dataName] = data = [];

     for (key in this) {
        if (this.hasOwnProperty(key)) {
           value = this[key];

           (function() {
              var k = key,
                  v = value;

             data.push(new Pair(k, v));
           })();
        }
     }

     return data;
 };

 var d = {
    'one': 1,
    'two': 2
 };


 for (var i = 0, max = d.as("data").length; i < max; i += 1) {
    key = data[i].key;
    value = data[i].value;

    console.log("key: " + key + ", value: " + value);
 }


 delete data;