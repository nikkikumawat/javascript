  //Regular Expression(regex):
      // -Always written between two forward slashes (/ and /)

      // ^ marks the beginning, $ marks the ending of regex

      // allowed characters are written in [ and ]

      // Some sp chars hold special meaning in regex:
      // . - exactly once match is allowed
      // + - zero, one or more than one match is allowed
      // ? - the character(s) preceding are optional
      // - : specifies range of allowed characters
      // {} : specifies range of input
      // a-zA-Z = \w
      // 0-9 = \d
      // Back slash is used to escape the usual meaning of sp chars

      const form = document.querySelector("form");

      form.onsubmit = (e) => {
        e.preventDefault();

        const name = document.querySelector("#name");
        const email = document.querySelector("#email");
        const phone = document.querySelector("#phone");
        const age = document.querySelector("#age");
        const gender = document.querySelectorAll(".gen");
        const hometown = document.querySelector("#home");
        
        const phoneNumberRegex = /^\+?[0-9]{2}?[0-9]{10}$/;
        

        const nameExp = /^[a-zA-Z ]{3,20}$/;
        const emailExp = /^[a-zA-Z0-9\.\_]+\@[a-zA-Z0-9]+\.[a-zA-Z]{2,5}$/;
        const phoneExp = /^[0-9]{10}$/;
        const ageExp = /^[0-9]{2}$/;

        if (check(name, nameExp, "Enter Name")) {
          if (check(email, emailExp, "Enter a valid email")) {
            if (check(phone, phoneExp, "Enter your valid number")) {
              if (check(age, ageExp, "enter your age")) {
                if (check2(gender, "Select Gender")) {
                  if (check3(hometown, "Select Your Hometown")) {
                    document.querySelector("form").submit()
                  }
                }
              }
            }
          }
        }
      };







      function check(element, regex, msg) {
        if (element.value.match(regex)) {
          return true;
        } else {
          alert(msg);
          element.focus();
          return false;
        }
      }

      function check2(elements, msg) {
        let sahiHai = false;
        for (let i = 0; i < elements.length; i++) {
          if (elements[i].checked) sahiHai = true;
        }

        if (sahiHai === false) {
          alert(msg);
          return false;
        } else {
          return true;
        }
      }

      function check3(element, msg) {
        if (element.value.length === 0) {
          alert(msg);
          return false;
        } else return true;
      }