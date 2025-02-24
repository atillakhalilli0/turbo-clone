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
  { id: 21, marka: "BMW", model: "X5", qiymet: "30 000", mator: "3.0", il: "2010", reng: "black", img: "https://via.placeholder.com/300" },
  { id: 22, marka: "Audi", model: "A6", qiymet: "28 000", mator: "2.0", il: "2012", reng: "white", img: "https://via.placeholder.com/300" },
  { id: 23, marka: "Volkswagen", model: "Passat", qiymet: "18 500", mator: "1.8", il: "2015", reng: "blue", img: "https://via.placeholder.com/300" },
  { id: 24, marka: "Ford", model: "Mustang", qiymet: "35 000", mator: "5.0", il: "2018", reng: "red", img: "https://via.placeholder.com/300" },
  { id: 25, marka: "Chevrolet", model: "Camaro", qiymet: "38 000", mator: "6.2", il: "2016", reng: "yellow", img: "https://via.placeholder.com/300" },
  { id: 26, marka: "Toyota", model: "Corolla", qiymet: "15 000", mator: "1.6", il: "2014", reng: "silver", img: "https://via.placeholder.com/300" },
  { id: 27, marka: "Nissan", model: "Altima", qiymet: "17 000", mator: "2.5", il: "2013", reng: "gray", img: "https://via.placeholder.com/300" },
  { id: 28, marka: "Jaguar", model: "XF", qiymet: "40 000", mator: "3.0", il: "2017", reng: "black", img: "https://via.placeholder.com/300" },
  { id: 29, marka: "Bentley", model: "Continental", qiymet: "85 000", mator: "6.0", il: "2015", reng: "white", img: "https://via.placeholder.com/300" },
  { id: 30, marka: "Land Rover", model: "Range Rover", qiymet: "75 000", mator: "4.4", il: "2016", reng: "green", img: "https://via.placeholder.com/300" },
  { id: 31, marka: "Honda", model: "Civic", qiymet: "14 500", mator: "1.5", il: "2013", reng: "red", img: "https://via.placeholder.com/300" },
  { id: 32, marka: "Lexus", model: "RX 350", qiymet: "32 000", mator: "3.5", il: "2018", reng: "gray", img: "https://via.placeholder.com/300" },
  { id: 33, marka: "Subaru", model: "Outback", qiymet: "22 000", mator: "2.5", il: "2015", reng: "blue", img: "https://via.placeholder.com/300" },
  { id: 34, marka: "Mazda", model: "CX-5", qiymet: "20 000", mator: "2.0", il: "2016", reng: "white", img: "https://via.placeholder.com/300" },
  { id: 35, marka: "Dodge", model: "Challenger", qiymet: "45 000", mator: "6.4", il: "2018", reng: "black", img: "https://via.placeholder.com/300" },
  { id: 36, marka: "Chrysler", model: "300", qiymet: "28 000", mator: "3.6", il: "2014", reng: "silver", img: "https://via.placeholder.com/300" },
  { id: 37, marka: "Tesla", model: "Model S", qiymet: "55 000", mator: "Electric", il: "2018", reng: "white", img: "https://via.placeholder.com/300" },
  { id: 38, marka: "Acura", model: "MDX", qiymet: "29 000", mator: "3.5", il: "2016", reng: "gray", img: "https://via.placeholder.com/300" },
  { id: 39, marka: "Infiniti", model: "Q50", qiymet: "33 000", mator: "3.0", il: "2017", reng: "blue", img: "https://via.placeholder.com/300" },
  { id: 40, marka: "Buick", model: "Enclave", qiymet: "27 000", mator: "3.6", il: "2015", reng: "black", img: "https://via.placeholder.com/300" },
  {
    id: 41,
    marka: "BMW",
    model: "X3",
    qiymet: "32 000",
    mator: "2.0",
    il: "2015",
    reng: "black",
    img: "https://via.placeholder.com/300"
  },
  {
    id: 42,
    marka: "Audi",
    model: "Q7",
    qiymet: "45 000",
    mator: "3.0",
    il: "2016",
    reng: "white",
    img: "https://via.placeholder.com/300"
  },
  {
    id: 43,
    marka: "Volkswagen",
    model: "Golf GTI",
    qiymet: "27 500",
    mator: "2.0",
    il: "2018",
    reng: "red",
    img: "https://via.placeholder.com/300"
  },
  {
    id: 44,
    marka: "Ford",
    model: "F-150",
    qiymet: "50 000",
    mator: "5.0",
    il: "2017",
    reng: "blue",
    img: "https://via.placeholder.com/300"
  },
  {
    id: 45,
    marka: "Chevrolet",
    model: "Tahoe",
    qiymet: "55 000",
    mator: "5.3",
    il: "2018",
    reng: "gray",
    img: "https://via.placeholder.com/300"
  },
  {
    id: 46,
    marka: "Toyota",
    model: "Highlander",
    qiymet: "35 000",
    mator: "3.5",
    il: "2016",
    reng: "silver",
    img: "https://via.placeholder.com/300"
  },
  {
    id: 47,
    marka: "Nissan",
    model: "Rogue",
    qiymet: "28 000",
    mator: "2.5",
    il: "2017",
    reng: "black",
    img: "https://via.placeholder.com/300"
  },
  {
    id: 48,
    marka: "Jaguar",
    model: "F-Pace",
    qiymet: "60 000",
    mator: "3.0",
    il: "2018",
    reng: "white",
    img: "https://via.placeholder.com/300"
  },
  {
    id: 49,
    marka: "Bentley",
    model: "Bentayga",
    qiymet: "200 000",
    mator: "6.0",
    il: "2018",
    reng: "blue",
    img: "https://via.placeholder.com/300"
  },
  {
    id: 50,
    marka: "Land Rover",
    model: "Defender",
    qiymet: "70 000",
    mator: "3.0",
    il: "2017",
    reng: "green",
    img: "https://via.placeholder.com/300"
  },
  // Manually adding 40 more cars
  {
    id: 51,
    marka: "Honda",
    model: "Civic",
    qiymet: "25 000",
    mator: "1.5",
    il: "2016",
    reng: "red",
    img: "https://via.placeholder.com/300"
  },
  {
    id: 52,
    marka: "Subaru",
    model: "Outback",
    qiymet: "30 000",
    mator: "2.5",
    il: "2017",
    reng: "blue",
    img: "https://via.placeholder.com/300"
  },
  {
    id: 53,
    marka: "Mazda",
    model: "CX-5",
    qiymet: "33 000",
    mator: "2.5",
    il: "2018",
    reng: "gray",
    img: "https://via.placeholder.com/300"
  },
  {
    id: 54,
    marka: "Mercedes",
    model: "C-Class",
    qiymet: "40 000",
    mator: "2.0",
    il: "2016",
    reng: "white",
    img: "https://via.placeholder.com/300"
  },
  {
    id: 55,
    marka: "Tesla",
    model: "Model S",
    qiymet: "85 000",
    mator: "Electric",
    il: "2017",
    reng: "black",
    img: "https://via.placeholder.com/300"
  },
  {
    id: 56,
    marka: "Ferrari",
    model: "458 Italia",
    qiymet: "250 000",
    mator: "4.5",
    il: "2015",
    reng: "red",
    img: "https://via.placeholder.com/300"
  },
  {
    id: 57,
    marka: "Porsche",
    model: "911",
    qiymet: "120 000",
    mator: "3.0",
    il: "2018",
    reng: "silver",
    img: "https://via.placeholder.com/300"
  },
  {
    id: 58,
    marka: "BMW",
    model: "5 Series",
    qiymet: "42 000",
    mator: "2.0",
    il: "2015",
    reng: "black",
    img: "https://via.placeholder.com/300"
  },
  {
    id: 59,
    marka: "Audi",
    model: "A4",
    qiymet: "38 500",
    mator: "2.0",
    il: "2017",
    reng: "white",
    img: "https://via.placeholder.com/300"
  },
  {
    id: 60,
    marka: "Volkswagen",
    model: "Passat",
    qiymet: "28 000",
    mator: "1.8",
    il: "2016",
    reng: "blue",
    img: "https://via.placeholder.com/300"
  },
  {
    id: 61,
    marka: "Ford",
    model: "Mustang",
    qiymet: "52 000",
    mator: "5.0",
    il: "2018",
    reng: "red",
    img: "https://via.placeholder.com/300"
  },
  {
    id: 62,
    marka: "Chevrolet",
    model: "Camaro",
    qiymet: "49 000",
    mator: "6.2",
    il: "2017",
    reng: "yellow",
    img: "https://via.placeholder.com/300"
  },
  {
    id: 63,
    marka: "Toyota",
    model: "Camry",
    qiymet: "30 500",
    mator: "2.5",
    il: "2016",
    reng: "silver",
    img: "https://via.placeholder.com/300"
  },
  {
    id: 64,
    marka: "Nissan",
    model: "Altima",
    qiymet: "27 000",
    mator: "2.5",
    il: "2015",
    reng: "gray",
    img: "https://via.placeholder.com/300"
  },
  {
    id: 65,
    marka: "Jaguar",
    model: "XE",
    qiymet: "45 000",
    mator: "2.0",
    il: "2018",
    reng: "black",
    img: "https://via.placeholder.com/300"
  },
  {
    id: 66,
    marka: "Land Rover",
    model: "Range Rover Evoque",
    qiymet: "55 000",
    mator: "2.0",
    il: "2017",
    reng: "white",
    img: "https://via.placeholder.com/300"
  },
  {
    id: 67,
    marka: "Mazda",
    model: "Mazda6",
    qiymet: "29 500",
    mator: "2.5",
    il: "2016",
    reng: "red",
    img: "https://via.placeholder.com/300"
  },
  {
    id: 68,
    marka: "BMW",
    qiymet: "15 000",
    model: "E90",
    mator: "2.5",
    il: "2005",
    reng: "black",
    img: "https://example.com/bmw-e90.jpg",
  },
  {
    id: 69,
    marka: "Toyota",
    qiymet: "12 500",
    model: "Camry",
    mator: "2.4",
    il: "2005",
    reng: "white",
    img: "https://example.com/toyota-camry.jpg",
  },
  {
    id: 70,
    marka: "Ford",
    qiymet: "14 000",
    model: "Mustang",
    mator: "4.0",
    il: "2005",
    reng: "red",
    img: "https://example.com/ford-mustang.jpg",
  },
  {
    id: 71,
    marka: "Mercedes",
    qiymet: "16 500",
    model: "E-Class",
    mator: "3.0",
    il: "2006",
    reng: "silver",
    img: "https://example.com/mercedes-eclass.jpg",
  },
  {
    id: 72,
    marka: "Nissan",
    qiymet: "13 000",
    model: "Altima",
    mator: "2.5",
    il: "2006",
    reng: "blue",
    img: "https://example.com/nissan-altima.jpg",
  },
  {
    id: 73,
    marka: "Chevrolet",
    qiymet: "11 500",
    model: "Malibu",
    mator: "2.2",
    il: "2006",
    reng: "gray",
    img: "https://example.com/chevrolet-malibu.jpg",
  },
  {
    id: 74,
    marka: "Audi",
    qiymet: "17 000 USD",
    model: "A4",
    mator: "2.0",
    il: "2006",
    reng: "black",
    img: "https://example.com/audi-a4.jpg",
  },
  {
    id: 75,
    marka: "Volkswagen",
    qiymet: "13 200 USD",
    model: "Passat",
    mator: "2.0",
    il: "2006",
    reng: "white",
    img: "https://example.com/volkswagen-passat.jpg",
  },
  {
    id: 76,
    marka: "Honda",
    qiymet: "12 800 USD",
    model: "Accord",
    mator: "2.4",
    il: "2007",
    reng: "silver",
    img: "https://example.com/honda-accord.jpg",
  },
  {
    id: 77,
    marka: "Dodge",
    qiymet: "14 500 USD",
    model: "Charger",
    mator: "3.5",
    il: "2007",
    reng: "red",
    img: "https://example.com/dodge-charger.jpg",
  }
];

const cards = document.getElementById("cards");
const cardetails = document.getElementById("cardetails");
const search = document.getElementById("search");
const sidebar = document.getElementById("sidebar");
const option = document.getElementById("option");
const loadBtn = document.getElementById("loadBtn");
const sort = document.getElementById("sort");
const opt = document.getElementById("opt");
const minimum = document.getElementById("minimum")
const minimum1 = document.getElementById("minimum1")
const maximum = document.getElementById("maximum")
const maximum1 = document.getElementById("maximum1")
const filter = document.getElementById("filter")
const reset = document.getElementById("reset")

function handleSideBar(status) {
  sidebar.style.transform = status ? 'translateX(0)' : 'translateX(100%)'
}

let count = 4

function showCars() {
  cards.innerHTML = ''
  cardetails.innerHTML = ''
  cars
    .filter(item => option.value ? item.marka == option.value : item)
    .slice(0, count)
    .map((item) => {
        cards.innerHTML += `
                <div onclick="detailCars(${item.id})" class="card flex flex-col mb-3 bg-white rounded-lg overflow-hidden relative shadow-2xl">
                    <img class="w-[290px] h-[250px] object-cover" src="${item.img}" alt="car-img">
                    <i class="fa-regular fa-heart text-2xl bg-red-600 text-white rounded-full p-[5px] absolute top-[20px] right-[20px]"></i>
                    <h3 class="px-5 py-1 text-2xl font-bold">${item.qiymet} AZN</h3>
                    <h3 class="px-5 py-1 text-lg font-medium">${item.marka} ${item.model}</h3>
                    <h4 class="px-5 py-1 text-lg font-medium">${item.il} ${item.mator} ${item.reng}</h4>
                </div>
        `
    })
  // option.value = ""
}

function searchCars(){
  cards.innerHTML = ''
  cardetails.innerHTML = ''
  cars
    .filter(item => item.marka.toLowerCase().startsWith(search.value.toLowerCase()))
    .map((item) => {
        cards.innerHTML += `
                <div onclick="detailCars(${item.id})" class="card flex flex-col mb-3 bg-white rounded-lg overflow-hidden relative shadow-2xl">
                    <img class="w-[290px] h-[250px] object-cover" src="${item.img}" alt="car-img">
                    <i class="fa-regular fa-heart text-2xl bg-red-600 text-white rounded-full p-[5px] absolute top-[20px] right-[20px]"></i>
                    <h3 class="px-5 py-1 text-2xl font-bold">${item.qiymet} AZN</h3>
                    <h3 class="px-5 py-1 text-lg font-medium text-ellipsis overflow-hidden ...">${item.marka} ${item.model}</h3>
                    <h4 class="px-5 py-1 text-lg font-medium">${item.il} ${item.mator} ${item.reng}</h4>
                </div>
        `
    })
}
searchCars()

const markas = []
function printMarkas() {
  cars.forEach(item => !markas.includes(item.marka) && markas.push(item.marka))
  console.log(markas);
            
  markas.forEach(item => option.innerHTML += `<option value="${item}">${item}</option>`)
}
printMarkas()

function sortCars(){
  if (opt.value === "let1") {
      cars.sort((a, b) => a.marka.localeCompare(b.marka))
  } else if (opt.value === "let2") {
    cars.sort((a, b) => b.marka.localeCompare(a.marka))
  } else if (opt.value === "year1") {
    cars.sort((a, b) => a.il - b.il)
  } else if (opt.value === "year2") {
    cars.sort((a, b) => b.il - a.il)
  } else if (opt.value === "eng1") {
    cars.sort((a, b) => a.mator - b.mator)
  } else if (opt.value === "eng2") {
    cars.sort((a, b) => b.mator - a.mator)
  } else if(opt.value === "time1"){
    cars.sort((a, b) => a.id - b.id)
  } else if(opt.value === "time2"){
    cars.sort((a, b) => b.id - a.id)
  }
  showCars()
}

filter.onclick = function(){
  let minYear = minimum.value ? Number(minimum.value) : 0
  let maxYear = maximum.value ? Number(maximum.value) : Infinity
  let minPrice = minimum1.value ? Number(minimum1.value) : 0
  let maxPrice = maximum1.value ? Number(maximum1.value) : Infinity
  
  if ((minimum.value && isNaN(minYear)) || (maximum.value && isNaN(maxYear)) || (minimum1.value && isNaN(minPrice)) || (maximum1.value && isNaN(maxPrice))) {
      alert("Please enter valid numbers!")
      return
  }

  cards.innerHTML = ''
  cardetails.innerHTML = ''
  
  cars
    .filter(item => option.value ? item.marka == option.value : true)
    .filter((item) => {
      const carYear = Number(item.il)
      const carPrice = Number(item.qiymet.replace(/\s/g, ''))
      
      const yearCondition = carYear >= minYear && carYear <= maxYear
      const priceCondition = carPrice >= minPrice && carPrice <= maxPrice
      
      return yearCondition && priceCondition
    })
    .forEach((item) => {
      cards.innerHTML += `
        <div onclick="detailCars(${item.id})" class="card flex flex-col mb-3 bg-white rounded-lg overflow-hidden relative shadow-2xl">
          <img class="w-[290px] h-[250px] object-cover" src="${item.img}" alt="car-img">
          <i class="fa-regular fa-heart text-2xl bg-red-600 text-white rounded-full p-[5px] absolute top-[20px] right-[20px]"></i>
          <h3 class="px-5 py-1 text-2xl font-bold">${item.qiymet} AZN</h3>
          <h3 class="px-5 py-1 text-lg font-medium">${item.marka} ${item.model}</h3>
          <h4 class="px-5 py-1 text-lg font-medium">${item.il} ${item.mator} ${item.reng}</h4>
        </div>
      `
    })
    loadBtn.style.display = 'none'
}

reset.onclick = function(){
  location.reload()
}

function loadMore() {
  count += 4
  loadBtn.style.display = count >= cars.length ? 'none' : 'block'
  showCars()
}

function detailCars(id){
  search.value = ''
  loadBtn.style.display = 'none'
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

showCars()