function telephoneCheck(str) {
  str=str.split(" ").join("");
  var patt=/[1]?\d\d\d[-]?\d\d\d[-]?\d\d\d\d$/;
    var patt2=/[1]?[(]?\d\d\d[)]?\d\d\d[-]?\d\d\d[0-9]$/;
console.log(patt.test(str));
  console.log(patt2.test(str));

  var result=false;
//   console.log(str);
//   console.log(patt.test(str));
//   console.log(patt2.test(str));
//   console.log(str.match(/\d/g));

  if(patt.test(str)||patt2.test(str)){
       var temp=str.match(/\d/g);
//       console.log(temp[0]);
      console.log(temp.length);
      console.log(str);
      console.log(temp);

       if(temp.length===11&&temp[0]!=="1")
         {
           result=false;
           console.log("11 digit and first one is 1");

         }else if(temp.length==10&&str.match(/[(]|[)]/g)===null){
            console.log("() ");

            result=true;
          }else if(temp.length==10&&str.match(/[(]|[)]/g).length<2&&str.match(/[(]|[)]/).length>0){
            console.log("10 digit ");

            result=false;
          }else if(temp.length==10){
            console.log("10 digit ");

            result=true;
          }else if(temp.length===11&&str[0]==="1"&&str.match(/[(]|[)]/g)===null)
            {
              result=true;
            }else if(temp.length===11&&str[0]==="1"&&str.match(/[(]|[)]/g).length<2&&str.match(/[(]|[)]/).length>0)
            {
              result=false;
            }else if(temp.length===11&&str[0]==="1")
            {
              result=true;
            }
     }
  // Good luck!
  return result;
}

telephoneCheck("1 555)555-5555");
