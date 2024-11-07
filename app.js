function searchCountry(){
    console.log("Search!!");
    let txtSearch = document.getElementById("txtSearch").value;

    fetch(`https://restcountries.com/v3.1/name/${txtSearch}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        let body="";
        data.forEach(element => {
            body+=`
            
            <div class="bg-body-tertiary p-5 rounded" style="background-image: url(${element.flags.png}); background-repeat: no-repeat; background-size: cover;">
          <div class="col-sm-8 py-5 mx-auto">
            <h1 class="display-5 fw-normal text-white">${element.name.common}</h1>
            <p class="fs-5 text-white">${element.flags.alt}</p>
            <h2 class="text-white">${element.capital[0]}</h2>
            <p>From the top down, you'll see a dark navbar, light navbar and a responsive navbar—each with offcanvases built in. Resize your browser window to the large breakpoint to see the toggle for the offcanvas.</p>
            <p>
              <a class="btn btn-primary" href="/docs/5.3/components/navbar/#offcanvas" role="button">Learn more about offcanvas navbars &raquo;</a>
            </p>
            
             
        </div>
        </div>
            
            `
        });

        document.getElementById("row").innerHTML=body;
        
    })
    
}
restcountries();
async function restcountries() {

   let res= await fetch("https://restcountries.com/v3.1/all");
   let items = await res.json();
   let body = "";
   console.log(items);
   
   items.forEach(element => {
    console.log(element);
    body+=`
           <div class="col">
                <div class="card shadow-sm">
                  <img src=${element.flags.png} alt="">
                  <div class="card-body">
                  <h2>${element.name.common}</h2>
                    <p class="card-text">population:${element.population}</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                         <a href="${element.maps?.googleMaps || '#'}" target="_blank" class="btn btn-primary w-100 mt-3">View on Google Maps</a>
                      </div>
                      <small class="text-body-secondary"></small>
                    </div>
                  </div>
                </div>
              </div>
  `
 });

   console.log(body);
   document.getElementById("row").innerHTML=body;


}

