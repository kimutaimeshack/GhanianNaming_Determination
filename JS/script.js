            var m = document.getElementById("Male");
            var f = document.getElementById("Female");       
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

            //add the total number of days

            month.addEventListener("input", finddaysnumber);
            year.addEventListener("input", finddaysnumber);

            // gettng total number of days
            function getNumberOfDaysMonth(arrayvalues, isleap = 0) {
                return {
                    "January": 31,
                    "February": 28 + isleap,
                    "March": 31,
                    "April": 30,
                    "May": 31,
                    "June": 30,
                    "July": 31,
                    "August": 31,
                    "September": 30,
                    "October": 31,
                    "November": 30,
                    "December": 31
                }[arrayvalues];
            }

       
            function finddaysnumber() {
                yourname.innerHTML = "<option selected disabled value='-'>Select yourname</option>" + (arraylist(getNumberOfDaysMonth(month.value, (findleapyear(year.value) ? 1 : 0))).map(el => "<option value='" + el + "'>" + el + "</option>").join(""));
            }



            function yournamedisp(arrayvalues) {
                return document.getElementById(arrayvalues);
            }