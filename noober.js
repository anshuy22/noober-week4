async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write code to loop through the rides

  let passengerName
  let passengerPhone
  let passengerNumberOfPassengers
  let  passengerPickupAddressLine1
  let passengerPickupAddressLine2 
  let  passengerDropoffAddressLine1 
  let passengerDropoffAddressLine2 
  let levelOfService
  let outputElement = document.querySelector('.rides')
  
for(let i=0; i<json.length;i++){
if(json[i].length>1){
   levelOfService="Noober Pool"
  for(let j=0;j<json[i].length;j++){
  passengerName=json[i][j].passengerDetails.first +[" "]+ json[i][j].passengerDetails.last
  passengerPhone=json[i][j].passengerDetails.phoneNumber
  passengerNumberOfPassengers=json[i][j].numberOfPassengers
  passengerPickupAddressLine1 = json[i][j].pickupLocation.address
  passengerPickupAddressLine2  = json[i][j].pickupLocation.city + [', '] + json[i][j].pickupLocation.state +[' ']+ json[i][j].pickupLocation.zip 
   passengerDropoffAddressLine1 = json[i][j].dropoffLocation.address
  passengerDropoffAddressLine2 = json[i][j].dropoffLocation.city + [', '] + json[i][j].dropoffLocation.state +[' ']+ json[i][j].dropoffLocation.zip 
  
  
 outputElement.insertAdjacentHTML("beforeend",`
 
<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
 <i class="fas fa-car-side"></i>
 <span>${levelOfService}</span>
</h1>

<div class="border-4 border-gray-900 p-4 my-4 text-left">
 <div class="flex">
   <div class="w-1/2">
     <h2 class="text-2xl py-1">${passengerName}</h2>
     <p class="font-bold text-gray-600">${passengerPhone}</p>
   </div>
   <div class="w-1/2 text-right">
     <span class="rounded-xl bg-gray-600 text-white p-2">
     ${passengerNumberOfPassengers}
     </span>
   </div>
 </div>
 <div class="mt-4 flex">
   <div class="w-1/2">
     <div class="text-sm font-bold text-gray-600">PICKUP</div>
     <p>${passengerPickupAddressLine1}</p>
     <p>${passengerPickupAddressLine2}</p>
   </div>
   <div class="w-1/2">
     <div class="text-sm font-bold text-gray-600">DROPOFF</div>
     <p>${passengerDropoffAddressLine1}</p>
     <p>${passengerDropoffAddressLine2}</p>
   </div>
 </div>
</div>

 `)
}
  } else if(json[i].length==1){
  if(json[i][0].numberOfPassengers>3){
      levelOfService="Noober XL"
  passengerName=json[i][0].passengerDetails.first +[" "]+ json[i][0].passengerDetails.last
  passengerPhone=json[i][0].passengerDetails.phoneNumber
     passengerNumberOfPassengers=json[i][0].numberOfPassengers
     passengerPickupAddressLine1 = json[i][0].pickupLocation.address
     passengerPickupAddressLine2  = json[i][0].pickupLocation.city + [', '] + json[i][0].pickupLocation.state +[' ']+ json[i][0].pickupLocation.zip 
    passengerDropoffAddressLine1 = json[i][0].dropoffLocation.address
    passengerDropoffAddressLine2 = json[i][0].dropoffLocation.city + [', '] + json[i][0].dropoffLocation.state +[' ']+ json[i][0].dropoffLocation.zip 
     outputElement.insertAdjacentHTML("beforeend",`
     <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
     <i class="fas fa-car-side"></i>
     <span>${levelOfService}</span>
   </h1>

   <div class="border-4 border-gray-900 p-4 my-4 text-left">
     <div class="flex">
       <div class="w-1/2">
         <h2 class="text-2xl py-1">${passengerName}</h2>
         <p class="font-bold text-gray-600">${passengerPhone}</p>
       </div>
       <div class="w-1/2 text-right">
         <span class="rounded-xl bg-gray-600 text-white p-2">
         ${passengerNumberOfPassengers}
         </span>
       </div>
     </div>
     <div class="mt-4 flex">
       <div class="w-1/2">
         <div class="text-sm font-bold text-gray-600">PICKUP</div>
         <p>${passengerPickupAddressLine1}</p>
         <p>${passengerPickupAddressLine2}</p>
       </div>
       <div class="w-1/2">
         <div class="text-sm font-bold text-gray-600">DROPOFF</div>
         <p>${passengerDropoffAddressLine1}</p>
         <p>${passengerDropoffAddressLine2}</p>
       </div>
     </div>
   </div> `)
    } else if(json[i][0].numberOfPassengers<=3 && json[i][0].purpleRequested==true){
      levelOfService="Noober Purple"
  passengerName=json[i][0].passengerDetails.first +[" "]+ json[i][0].passengerDetails.last
  passengerPhone=json[i][0].passengerDetails.phoneNumber
     passengerNumberOfPassengers=json[i][0].numberOfPassengers
     passengerPickupAddressLine1 = json[i][0].pickupLocation.address
    passengerPickupAddressLine2  = json[i][0].pickupLocation.city + [', '] + json[i][0].pickupLocation.state +[' ']+ json[i][0].pickupLocation.zip 
    passengerDropoffAddressLine1 = json[i][0].dropoffLocation.address
    passengerDropoffAddressLine2 = json[i][0].dropoffLocation.city + [', '] + json[i][0].dropoffLocation.state +[' ']+ json[i][0].dropoffLocation.zip 
  
      outputElement.insertAdjacentHTML("beforeend",`
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>${levelOfService}</span>
    </h1>

    <div class="border-4 border-purple-500 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${passengerName}</h2>
          <p class="font-bold text-gray-600">${passengerPhone}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-purple-600 text-white p-2">
          ${passengerNumberOfPassengers}
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${passengerPickupAddressLine1}</p>
          <p>${passengerPickupAddressLine2}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${passengerDropoffAddressLine1}</p>
          <p>${passengerDropoffAddressLine2}</p>
        </div>
      </div>
    </div>`)
  } else if(json[i][0].numberOfPassengers<=3 && json[i][0].purpleRequested==false){
      levelOfService="Noober X"
  passengerName=json[i][0].passengerDetails.first +[" "]+ json[i][0].passengerDetails.last
  passengerPhone=json[i][0].passengerDetails.phoneNumber
     passengerNumberOfPassengers=json[i][0].numberOfPassengers
     passengerPickupAddressLine1 = json[i][0].pickupLocation.address
     passengerPickupAddressLine2  = json[i][0].pickupLocation.city + [', '] + json[i][0].pickupLocation.state +[' ']+ json[i][0].pickupLocation.zip 
    passengerDropoffAddressLine1 = json[i][0].dropoffLocation.address
    passengerDropoffAddressLine2 = json[i][0].dropoffLocation.city + [', '] + json[i][0].dropoffLocation.state +[' ']+ json[i][0].dropoffLocation.zip 

      outputElement.insertAdjacentHTML("beforeend",`
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>${levelOfService}</span>
    </h1>

    <div class="border-4 border-gray-900 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${passengerName}</h2>
          <p class="font-bold text-gray-600">${passengerPhone}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
          ${passengerNumberOfPassengers}
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${passengerPickupAddressLine1}</p>
          <p>${passengerPickupAddressLine2}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${passengerDropoffAddressLine1}</p>
          <p>${passengerDropoffAddressLine2}</p>
        </div>
      </div>
    </div>`)
    }
  }
}
}

window.addEventListener('DOMContentLoaded', pageLoaded)

