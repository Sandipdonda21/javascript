// Write a function that clears array from all unnecessary elements, like false, undefined, empty strings, zero, null
function finalArray(array){
    console.log(array)
    array = array.filter(element=> element!=false && element!=undefined && element!=' ' && element!=0 && element!=null );
    console.log(array);
    }
    let array = [1, 0, null, ' ', false, 5, 6, 7, undefined, null, 0, 9, 10];
    finalArray(array);

    //Write a function that should not returns non-repetitive values.
    /*
      * Function which returns non-repetitive values
      * @createdDate 14-02-2022
      * @author Sandip donda
    */
    function findRepetitive(e , array1){
        let count = 0;
        for(let i=0 ; i<array1.length-1 ; i++){
              if(e==array1[i]){
                  array1[i] = null;
                  count++;
              }
        }
        if(count<=1)return false;
        else return true;
    }
    /*
      * Function which returns repetitive values
      * @createdDate 14-02-2022
      * @author Sandip donda
    */
    function findNonRepetitive(e , array2){
        let count = 0;
        for(let i=0 ; i<array2.length-1 ; i++){
              if(e==array2[i]){
                  array2[i] = null;
                  count++;
              }
        }
        if(count<=1)return true;
        else return false;
    }
    let Initialarray = [1, 2, 1, 5, 6, 2, 3, 1, 2, 5, 8, 9];
    let  array = [...Initialarray];
    let repetedArray = array.filter(e => findRepetitive(e , array)); // call the fuction findRepetitive()
    repetedArray = repetedArray.filter(e => e!==null)
    console.log("repeted element : " + repetedArray);
    let NonRepetedArray = Initialarray.filter(e => findNonRepetitive(e , Initialarray)); //call the function findNonRepetitive()
    NonRepetedArray = NonRepetedArray.filter(e => e!==null)
    console.log("NonRepeted element : " + NonRepetedArray);



    //
/*
  * Function which returns the longest country name from provided array of input
  * @createdDate 14-02-2022
  * @author sandip donda
*/
function findMaxLengthString(array){
    const stringLength= array.map(e => e.length);
    const maxValue = input[stringLength.indexOf(Math.max(...stringLength))];
    console.log(maxValue);
}
const input = ['India', 'USA', 'UK'];
findMaxLengthString(input);


//
/*
  * Function which returns non-repetitive values
  * @createdDate 14-02-2022
  * @author Keyur Rathod
*/
function coins(value , coinstype){
    let remain = value;
    let coinlist=[];
    for(let i =0 ; i<coinstype.length; i++){
        coinNumber = Math.floor(remain/coinstype[i]);
        remain = remain%coinstype[i];
            for(let j =0 ; j<coinNumber; j++){
                coinlist.push(coinstype[i]);
            }
    }
    console.log(coinlist)
}
function compareNumbers(a, b) {
  return a - b;
}
const input = 46;
const cointype = [10,3,5,2,9,1];
cointype.sort();
cointype.sort(compareNumbers);
cointype.reverse();
coins(input , cointype);