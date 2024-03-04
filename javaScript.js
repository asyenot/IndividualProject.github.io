function calculate(btnapa)
            {
                
                let no1 = parseInt(document.getElementById("no1").value);
                let no2 = parseInt(document.getElementById("no2").value);
                let total;
                switch(btnapa.value){
                    case 'Plus (+)':
                          total = no1 + no2;
                          outStr = no1+"+"+no2+"="+total; 
                        break;

                    case 'Minus (-)':
                        total = no1 - no2;
                        outStr = no1+"-"+no2+"="+total; 
                        break;

                    case 'Divide (/)':
                        total = no1 / no2;
                        outStr = no1+"/"+no2+"="+total; 
                        break;

                    case 'Multiply (*)':
                        total = no1 * no2;
                        outStr = no1+"*"+no2+"="+total; 
                        break;
                    
                }

                document.getElementById("resultDiv").innerHTML = "<h3>Result is "+outStr+"</h3>";

            }

        function cleardata() {
            document.getElementById("no1").value = "";
            document.getElementById("no2").value = "";
            document.getElementById("resultDiv").innerHTML = "Result will be here...";
            }

        function calculateBMI() {
                let berat = parseFloat(document.getElementById("kilo").value);
                let meter = parseFloat(document.getElementById("meter").value);
                let tinggi = meter/100;
                let result = document.getElementById("bmi-result");
                let BMI = berat/(tinggi*tinggi);

                if(BMI<18.5){
                    result.innerHTML = '<h1>Your BMI is ' + BMI.toFixed(2) + ', You are Wasted/Underweigth.</h1>';
                    result.style.backgroundColor = "blue";
                }else if(BMI>=18.5 && BMI<=24.9){
                    result.innerHTML = '<h1>Your BMI is ' + BMI.toFixed(2) + ', You are Normal.</h1>';
                    result.style.backgroundColor = "green";
                }else if(BMI>=25 && BMI<=29.9){
                    result.innerHTML = '<h1>Your BMI is ' + BMI.toFixed(2) + ', You are Overweight.</h1>';
                    result.style.backgroundColor = "yellow";
                }else if(BMI>=30 &&BMI<=39.9){
                    result.innerHTML = '<h1>Your BMI is ' + BMI.toFixed(2) + ', You are Obese.</h1>';
                    result.style.backgroundColor = "orange";
                }else {
                    result.innerHTML = '<h1>Your BMI is ' + BMI.toFixed(2) + ', You are Extremely Obese.</h1>';
                    result.style.backgroundColor = "red";
                }
        
            }

            function calculateZakat(){
                let income = parseFloat(document.getElementById("income").value);
                let Zakat = income * 0.025;
                document.getElementById("Zakat").innerHTML= "Zakat is "+Zakat.toFixed(2);
                alert( "Zakat is "+Zakat.toFixed(2));
            }

            function calculateUnit(btn) {
                let unit = parseFloat(document.getElementById("unit").value);
                let resultUnit ;
                let simbol;

                switch(btn.value){
                    case 'Cm to Metre':
                        resultUnit = unit * 0.01; 
                        simbol = " m";
                        break;

                    case 'Metre to Cm':
                        resultUnit = unit * 100;
                        simbol = " cm";
                        break;

                    case 'Metre to Km':
                        resultUnit = unit * 0.001;
                        simbol = " km"
                        break;

                    case 'Km to Metre':
                        resultUnit = unit * 1000;
                        simbol = " m";
                        break;

                    case 'Celcius to Fahrenheit':
                        resultUnit = unit * 1.8 + 32;
                        simbol = "°F"
                        break;
                    
                }
                alert("Your answer : "+resultUnit+simbol);
                document.getElementById("resultUnit").innerHTML = "Your answer : "+resultUnit+simbol;
            }
            function clearUnit() {
                document.getElementById("unit").value = "";
                document.getElementById("resultUnit").innerHTML = "Result will be here...";
            }