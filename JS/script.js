

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



        //create array list for adding values

            function arraylist(arrayvalues) {
                var numbers = [];
                for(i = 1; i <= arrayvalues; ++i) numbers.push(i);
                return numbers;
            }

            month.addEventListener("input", finddaysnumber);
            year.addEventListener("input", finddaysnumber);

            function finddaysnumber() {
                yourname.innerHTML = "<option selected disabled value='-'>Select yourname</option>" + (arraylist(getNumberOfDaysMonth(month.value, (findleapyear(year.value) ? 1 : 0))).map(el => "<option value='" + el + "'>" + el + "</option>").join(""));
            }