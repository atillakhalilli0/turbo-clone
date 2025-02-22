const cars = [
  {
    id: 1,
    marka: "Mercedes",
    qiymet: "10 500",
    model: "w202",
    mator: "2.0",
    il: "1998",
    reng: "silver",
    img: "https://turbo.azstatic.com/uploads/full/2022%2F02%2F07%2F16%2F20%2F36%2F05ae3ec7-b845-4458-8033-99eec8aec1a2%2F83217_ryHX2Q7AONB3-jC_sEJ3mQ.jpg",
  },
  {
    id: 2,
    marka: "Kia",
    qiymet: "21 000",
    model: "Rio",
    mator: "1.4",
    il: "2014",
    reng: "silver",
    img: "https://turbo.azstatic.com/uploads/full/2021%2F09%2F10%2F11%2F40%2F18%2Fbe262b8b-13ff-40ee-9664-4c7c4ea93e4b%2F94552_bf7HpneCobaNn8ooAalBwg.jpg",
  },
  {
    id: 3,
    marka: "Hyundai",
    qiymet: "12 000",
    model: "Tucson",
    mator: "2.0",
    il: "2014",
    reng: "black",
    img: "https://turbo.azstatic.com/uploads/f660x496/2020%2F02%2F08%2F12%2F31%2F23%2Fdfd4bcdd-5279-4807-85cb-58aa153c900f%2F44290_Il5UqH7nhzVTrAAfdt5BuQ.jpg",
  },
  {
    id: 4,
    marka: "LADA (VAZ)",
    qiymet: "35 000",
    model: "2107",
    mator: "1.6",
    il: "2010",
    reng: "black",
    img: "https://turbo.azstatic.com/uploads/full/2022%2F09%2F29%2F04%2F48%2F26%2Ff85c3fb0-4f77-4157-8b15-a3122bbaf36d%2F15612_S_xRbeuG6jQhZhkc_JM3wg.jpg",
  },
  {
    id: 5,
    marka: "BMW",
    qiymet: "28 700",
    model: "M5 e39",
    mator: "4.4",
    il: "1998",
    reng: "blue",
    img: "https://turbo.azstatic.com/uploads/full/2020%2F08%2F15%2F17%2F42%2F55%2F5e61d0d8-ac41-42d4-8a34-33f9c563bba8%2F4747_ZOpsrcdSRl_mByG6tDsiqQ.jpg",
  },
  {
    id: 6,
    marka: "Mercedes",
    qiymet: "86 500",
    model: "CLS",
    mator: "5.5",
    il: "2013",
    reng: "gray",
    img: "https://turbo.azstatic.com/uploads/full/2021%2F12%2F09%2F01%2F51%2F22%2F2e3d6e19-baa7-4625-89e0-d358238808ce%2F21872_z_Z4BhoRifgwGf0Fz_hvJw.jpg",
  },
  {
    id: 7,
    marka: "Toyota",
    qiymet: "54 000",
    model: "Camry",
    mator: "3.0",
    il: "2021",
    reng: "white",
    img: "https://turbo.azstatic.com/uploads/full/2021%2F06%2F18%2F16%2F16%2F02%2Fd4a556f8-adc6-4ff8-897b-2079ea777987%2F24971_KEan9mcELSSmUAPbxG1KEw.jpg",
  },
  {
    id: 8,
    marka: "Porche",
    qiymet: "118 400",
    model: "911 Carrera",
    mator: "4.4",
    il: "2023",
    reng: "cyan",
    img: "https://turbo.azstatic.com/uploads/full/2020%2F08%2F13%2F13%2F32%2F55%2F012a26df-efae-4cf0-b763-a4c3de17ae23%2F46349_cqQK5HyMFGcJOEMh1pCm1A.jpg",
  },
  {
    id: 9,
    marka: "Dodge",
    qiymet: "38 500",
    model: "Challenger",
    mator: "7.2",
    il: "2018",
    reng: "black",
    img: "https://turbo.azstatic.com/uploads/full/2021%2F04%2F09%2F10%2F02%2F28%2F9a6bf393-9f08-476b-abc0-d6278f1d6668%2F37456_34ZTVBn26COoCWhsqBx3vw.jpg",
  },
  {
    id: 10,
    marka: "Nissan",
    qiymet: "86 000",
    model: "GTR R-35",
    mator: "3.0",
    il: "2014",
    reng: "black",
    img: "https://turbo.azstatic.com/uploads/full/2017%2F02%2F16%2F00%2F02%2F00%2F573%2F54000_4wUHTVdrb_-kLx6BJMuF8Q.jpg",
  },
  {
    id: 11,
    marka: "Audi",
    qiymet: "124 100",
    model: "RS7",
    mator: "4.0",
    il: "2015",
    reng: "dimgrey",
    img: "https://turbo.azstatic.com/uploads/full/2021%2F05%2F29%2F15%2F33%2F07%2Fc9bec2ac-97eb-4e07-bc8a-509f1898dd7d%2F82001_MmzL0_nnwbSnJI6rtabq7Q.jpg",
  },
  {
    id: 12,
    marka: "Toyota",
    qiymet: "15 800",
    model: "Corolla",
    mator: "1.6",
    il: "2016",
    reng: "white",
    img: "https://turbo.azstatic.com/uploads/full/2020%2F09%2F24%2F08%2F21%2F40%2Facdc9e7e-d243-46fd-b2ce-dc51a85c8343%2F66667_OxPaAqSg8MzGM7diar5WlQ.jpg",
  },
  {
    id: 13,
    marka: "Honda",
    qiymet: "18 500",
    model: "Civic",
    mator: "1.8",
    il: "2017",
    reng: "cyan",
    img: "https://turbo.azstatic.com/uploads/full/2023%2F03%2F29%2F18%2F06%2F09%2F1dc0eed8-15d4-46f9-abf5-0b772be61d2d%2F98117_r2JD4f3tCYHUBNquO-VTdQ.jpg",
  },
  {
    id: 14,
    marka: "Volkswagen",
    qiymet: "23 200",
    model: "Golf",
    mator: "2.0",
    il: "2019",
    reng: "white",
    img: "https://turbo.azstatic.com/uploads/full/2023%2F02%2F17%2F15%2F03%2F28%2F97566bce-3bcb-43ff-8c96-5274fdf59360%2F74622_ZZd9ojx9ZyTk5EOyx7D3wA.jpg",
  },
  {
    id: 15,
    marka: "Ford",
    qiymet: "27 000",
    model: "Mustang",
    mator: "5.0",
    il: "2019",
    reng: "black",
    img: "https://turbo.azstatic.com/uploads/full/2024%2F06%2F20%2F17%2F06%2F13%2F6c659d49-2364-438e-979d-b1e6afaaf44d%2F12183_ogtQftp0VNM0b8HrfrDIcQ.jpg",
  },
  {
    id: 16,
    marka: "Chevrolet",
    qiymet: "32 500",
    model: "Camaro",
    mator: "6.2",
    il: "2020",
    reng: "gray",
    img: "https://turbo.azstatic.com/uploads/full/2025%2F02%2F17%2F20%2F21%2F16%2Fc2ce8768-9c42-4d82-92ed-fdbba8472a6d%2F1957_PTAk9XsjQ8he6mTnwxv8JQ.jpg",
  },
  {
    id: 17,
    marka: "Toyota",
    qiymet: "30 430",
    model: "Land Cruiser Prado",
    mator: "2.7",
    il: "2008",
    reng: "white",
    img: "https://turbo.azstatic.com/uploads/full/2025%2F02%2F15%2F21%2F40%2F02%2F84cb8edf-190a-4d89-b021-c1e3c915bc0e%2F1957_PTAk9XsjQ8he6mTnwxv8JQ.jpg",
  },
  {
    id: 18,
    marka: "Lexus",
    qiymet: "90 000",
    model: "RX 350",
    mator: "3.5",
    il: "2014",
    reng: "black",
    img: "https://turbo.azstatic.com/uploads/full/2025%2F02%2F02%2F00%2F14%2F43%2F43c465dd-328d-4d3d-9bd8-fb3e9d246bc1%2F3528_Q1lPu2yra0tvVqTBugrxVg.jpg",
  },
  {
    id: 19,
    marka: "Subaru",
    qiymet: "29 500",
    model: "WRX STI",
    mator: "2.0",
    il: "2015",
    reng: "blue",
    img: "https://turbo.azstatic.com/uploads/full/2024%2F08%2F06%2F15%2F34%2F29%2F626b7551-2dc5-4dd3-9ff6-3fd012b620d8%2F27450_s_V-C-Wr1VEw63Wze1sy4w.jpg",
  },
  {
    id: 20,
    marka: "Maserati",
    qiymet: "88 900",
    model: "Ghibli",
    mator: "3.0",
    il: "2021",
    reng: "black",
    img: "https://turbo.azstatic.com/uploads/full/2024%2F11%2F13%2F10%2F53%2F43%2F2c6f70af-971e-4b8a-b317-3aeb2ac73395%2F67900_VsfyEqu9G0cxtdUTwCN1tQ.jpg",
  },
];

const cards = document.getElementById("cards");
const cardetails = document.getElementById("cardetails");
const search = document.getElementById("search");
const sidebar = document.getElementById("sidebar");

function handleSideBar(status) {
  sidebar.style.transform = status ? 'translateX(0)' : 'translateX(100%)'
}

function showCars() {
  cards.innerHTML = ''
  cardetails.innerHTML = ''
  cars
    .filter(item => item.marka.toLowerCase().startsWith(search.value.toLowerCase()))
    .map((item) => {
        cards.innerHTML += `
                <div onclick="detailCars(${item.id})" class="card flex flex-col mb-8 bg-white rounded-lg overflow-hidden relative shadow-2xl">
                    <img class="w-[320px] h-[300px] object-cover" src="${item.img}" alt="car-img">
                    <i class="fa-regular fa-heart text-2xl bg-red-600 text-white rounded-full p-[5px] absolute top-[20px] right-[20px]"></i>
                    <h3 class="px-5 py-1 text-2xl font-bold">${item.qiymet} AZN</h3>
                    <h3 class="px-5 py-1 text-lg font-medium">${item.marka} ${item.model}</h3>
                    <h4 class="px-5 py-1 text-lg font-medium">${item.il} ${item.mator} ${item.reng}</h4>
                </div>
            `;
    });
}

function detailCars(id){
  search.value = ''
  cards.innerHTML = ''
  const car = cars.find(item => item.id == id)
  cardetails.innerHTML = `
  <div class="flex justify-between max-detres:flex-col  max-detres:flex-wrap items-center mb-5 gap-5">
        <h2 class="text-3xl max-detres:text-lg font-bold capitalize">${car.marka} ${car.model}, ${car.mator}, ${car.il}, ${car.reng}</h2>
        <div class="flex gap-6">
            <p class="text-xl max-detres:text-lg capitalize"><i class="fa-regular fa-heart text-xl font-bold"></i> secilmislerde saxla</p>
            <p class="text-xl max-detres:text-lg capitalize"><i class="fa-regular fa-flag text-xl font-bold"></i> sikayet et</p>
        </div>
    </div>
    <div class="car-detail flex max-detres:flex-col flex-row shadow-lg rounded-lg overflow-hidden">
      <div class="w-full detres:w-3/5 bg-gray-800">
          <img class="w-full h-[500px] object-cover" src="${car.img}" alt="car-img">
      </div>      
      <div class="w-full detres:w-2/5 bg-gray-50 p-6 flex flex-col">
          <div class="mb-6">
              <h2 class="text-3xl font-bold text-gray-800">29 900 AZN</h2>
          </div>
          <div class="flex justify-between items-center mb-6">
              <div>
                  <h3 class="text-2xl font-medium">Alverci Elvin</h3>
              </div>
              <div><i class="fa-solid fa-user text-3xl"></i></div>
          </div>
          <button class="w-full bg-green-500 text-white py-3 px-4 rounded-md mb-10 flex flex-col items-center">
              <span class="mb-1 text-xl">Nömrəni göstər</span>
              <span class="text-lg flex items-center">
                  <i class="fa-solid fa-phone mr-2"></i>
                  +994-50-278-63-••
              </span>
          </button>          
          <div class="flex flex-wrap items-center justify-between gap-2">
              <div class="bg-white border border-gray-400 rounded p-2 text-center w-[150px]">
                  <div class="font-bold text-lg">İrəli çək</div>
                  <div class="text-base text-blue-600 flex items-center justify-center">
                      3 AZN-dən 
                      <span class="text-green-500 ml-1">
                        <i class="fa-solid fa-arrow-up-from-bracket text-lg"></i>
                      </span>
                  </div>
              </div>
              
              <div class="bg-white border border-gray-400 rounded p-2 text-center w-[150px]">
                  <div class="font-bold text-lg">VIP</div>
                  <div class="text-base text-blue-600 flex items-center justify-center">
                      5 AZN-dən
                      <span class="text-red-500 ml-1">
                        <i class="fa-solid fa-gem text-lg"></i>
                      </span>
                  </div>
              </div>

              <div class="bg-white border border-gray-400 rounded p-2 text-center w-[150px]">
                  <div class="font-bold text-lg">Premium</div>
                  <div class="text-base text-blue-600 flex items-center justify-center">
                      7 AZN-dən
                      <span class="text-yellow-500 ml-1">
                        <i class="fa-solid fa-crown text-lg"></i>
                      </span>
                  </div>
              </div>
          </div>
      </div>
</div>
  `
}

showCars();
