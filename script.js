let divelement = document.querySelector("div");
setTimeout(() =>
{
    console.log("10");
    divelement.innerHTML="<h1>10</h1>";
    setTimeout(()=>{
        console.log("09");
        divelement.innerHTML="<h1>09</h1>";
        setTimeout(()=>{
            console.log("08");
            divelement.innerHTML="<h1>08</h1>";
            setTimeout(()=>{
                console.log("07");
                divelement.innerHTML="<h1>07</h1>";
                setTimeout(()=>{
                    console.log("06");
                    divelement.innerHTML="<h1>06</h1>";
                    setTimeout(()=>{
                        console.log("05");
                        divelement.innerHTML="<h1>05</h1>";
                        setTimeout(()=>{
                            console.log("04");
                            divelement.innerHTML="<h1>04</h1>";
                            setTimeout(()=>{
                                console.log("03");
                                divelement.innerHTML="<h1>03</h1>";
                                setTimeout(()=>{
                                    console.log("02");
                                    divelement.innerHTML="<h1>02</h1>";
                                    setTimeout(()=>{
                                        console.log("01");
                                        divelement.innerHTML="<h1>01</h1>";
                                        setTimeout(()=>{
                                            console.log("Happy Independence Day");
                                            divelement.innerHTML="<h2>Happy Independence Day</h2>";
                                        },1000);
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);  
},1000);