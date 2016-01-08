            var link = document.querySelector(".btn-write-us")
            var popup = document.querySelector(".write-us")
            var close = document.querySelector(".close-cross")
            var login = popup.querySelector("[name=name]")
            var cancel = document.querySelector(".btn-cancel")
            var form = popup.querySelector("form")
            
            link.addEventListener("click", function (event) {
                event.preventDefault();
                popup.classList.add("write-us-show");
                login.focus();  
            })
            
            close.addEventListener("click", function (event) {
                event.preventDefault();
                popup.classList.remove("write-us-show")
            })
            
            cancel.addEventListener("click", function (event) {
                event.preventDefault();
                popup.classList.remove("write-us-show");   
            })
            
            window.addEventListener("keydown", function(event) {
                if (event.keyCode === 27) {
                    if (popup.classList.contains("write-us-show")) {
                    popup.classList.remove("write-us-show");
                    }
                }
            })