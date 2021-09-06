

            var mygender = document.querySelector("form select[name=mygender]");   
             var male = document.getElementById("male").value;     
             var female = document.getElementById("female").value;         
            var yourname = document.querySelector("form select[name=yourname]");
            var month = document.querySelector("form select[name=month]");
            var year = document.querySelector("form input[name=year]");



  
          // find the year if it is a leap year
            function findleapyear(arrayvalues) {
                return (arrayvalues % 4 == 0 && (arrayvalues % 100 != 0 || arrayvalues % 400 == 0));
            }

            