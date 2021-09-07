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
            function getNumberOfDaysInMonth(arrayvalues, isleap = 0) {
                return {
                    "January": 31,  "February": 28 + isleap,  "March": 31,   "April": 30, "May": 31,  "June": 30, "July": 31, "August": 31,  "September": 30,  "October": 31,  "November": 30, "December": 31
                }[arrayvalues];
            }

       
            function finddaysnumber() {
                yourname.innerHTML = "<option selected disabled value='-'>Select day</option>" 
                + (arraylist(getNumberOfDaysInMonth(month.value, (findleapyear(year.value) ? 1 : 0)))
                .map(el => "<option value='" + el + "'>" + el + "</option>").join(""));
            }

    
        
        
       
        function malenameonly(year, month, yourname) {
                return [
                    "Kwasi", "Kwadwo",  "Kwabena",  "Kwaku",  "Yaw", "Kofi",   "Kwame"


                ][new Date(month + " " + yourname + ", " + year + " 00:00:00").getDay()];
            }
        function femalenameonly(year, month, yourname) {

                return ["Akosua", "Adwoa",  "Abenaa",  "Akua",  "Yaa", "Afua",   "Ama" ]
                    [new Date(month + " " + yourname + ", " + year + " 00:00:00").getDay()];
            }
          function findyourname(year, month, yourname) {
                return [
                    "Sunday", "Monday",  "Tuesday", "Wednesday",   "Thursday","Friday",  "Saturday"
                ][new Date(month + " " + yourname + ", " + year + " 00:00:00").getDay()];
            }



            function Birthdayfuction() {

                if  (yourname.value == '-' || month.value == '-')  {
                     yournamedisp("output").innerHTML = alert("Enter all the information please");
                    }
                  else if ( f.checked === false || m.checked === true ) {
                    yournamedisp("output").innerHTML = "<span>" +"Born on \n :\n" + findyourname(year.value, month.value, yourname.value)
                  +"\n your name is\n :" + '\n'+ malenameonly(year.value, month.value, yourname.value) + "</span>" ;
                    }
                else if( f.checked === true || m.checked === false ){
                    yournamedisp("output").innerHTML = "<span>" +"Born on \n :\n" + findyourname(year.value, month.value, yourname.value)
                  +"\n your name is\n :" + '\n'+ femalenameonly(year.value, month.value, yourname.value) + "</span>" ;
                    }
                else {
                    yournamedisp("output").innerHTML = "<span>" +"fail all";
                   }
            }

            function yournamedisp(arrayvalues) {
                return document.getElementById(arrayvalues);
            }