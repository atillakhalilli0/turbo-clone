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
  { id: 21, marka: "BMW", model: "X5", qiymet: "30 000", mator: "3.0", il: "2010", reng: "black", img: "https://turbo.azstatic.com/uploads/full/2025%2F01%2F03%2F21%2F25%2F59%2F5d7d734a-377d-4459-8cf9-d7d2414c61c1%2F67900_VsfyEqu9G0cxtdUTwCN1tQ.jpg" },
  { id: 22, marka: "Audi", model: "A6", qiymet: "28 000", mator: "2.0", il: "2012", reng: "white", img: "https://turbo.azstatic.com/uploads/full/2024%2F09%2F19%2F13%2F26%2F46%2Feb8cbc42-50da-441f-812e-be9e2897c51c%2F11375_qXr7-N1ppBcS2a5TEaxWRQ.jpg" },
  { id: 23, marka: "Volkswagen", model: "Passat", qiymet: "18 500", mator: "1.8", il: "2015", reng: "black", img: "https://turbo.azstatic.com/uploads/full/2025%2F01%2F10%2F17%2F36%2F02%2F06a57046-aa49-47b2-bd0e-92f592ed3939%2F67900_VsfyEqu9G0cxtdUTwCN1tQ.jpg" },
  { id: 24, marka: "Ford", model: "Mustang", qiymet: "35 000", mator: "5.0", il: "2018", reng: "red", img: "https://turbo.azstatic.com/uploads/full/2024%2F11%2F22%2F15%2F01%2F16%2Fec8b13ad-2d6d-4ed9-aaf4-093b5240f91c%2F67900_VsfyEqu9G0cxtdUTwCN1tQ.jpg" },
  { id: 25, marka: "Chevrolet", model: "Camaro", qiymet: "38 000", mator: "6.2", il: "2016", reng: "yellow", img: "https://turbo.azstatic.com/uploads/full/2025%2F02%2F01%2F16%2F22%2F12%2F11e82997-591f-463c-bdd6-afd4b29a64d1%2F15247_eRuz4Do5pS0g3SY6jF6RZg.jpg" },
  { id: 26, marka: "Toyota", model: "Corolla", qiymet: "15 000", mator: "1.6", il: "2014", reng: "silver", img: "https://turbo.azstatic.com/uploads/full/2024%2F08%2F15%2F19%2F28%2F39%2F4976f93e-09b5-4d26-92e7-e18e116d0d0a%2F76402_Kt6M8xdUQ8mUvNPSzi54jw.jpg" },
  { id: 27, marka: "Nissan", model: "Altima", qiymet: "17 000", mator: "2.5", il: "2013", reng: "white", img: "https://turbo.azstatic.com/uploads/full/2025%2F01%2F28%2F15%2F43%2F25%2F6db5b1c0-c2bc-4861-a6c7-927859f10703%2F15247_eRuz4Do5pS0g3SY6jF6RZg.jpg" },
  { id: 28, marka: "Jaguar", model: "XF", qiymet: "40 000", mator: "3.0", il: "2017", reng: "black", img: "https://turbo.azstatic.com/uploads/full/2024%2F10%2F21%2F01%2F35%2F38%2Fd807a49d-8c69-420c-b992-9b0f6ec844ee%2F76402_Kt6M8xdUQ8mUvNPSzi54jw.jpg" },
  { id: 29, marka: "Bentley", model: "Continental", qiymet: "85 000", mator: "6.0", il: "2015", reng: "white", img: "https://turbo.azstatic.com/uploads/full/2025%2F01%2F28%2F14%2F49%2F32%2F636d71a3-cd5c-4b2d-9515-a7e192dc27ac%2F15247_eRuz4Do5pS0g3SY6jF6RZg.jpg" },
  { id: 30, marka: "Land Rover", model: "Range Rover", qiymet: "75 000", mator: "4.4", il: "2016", reng: "black", img: "https://turbo.azstatic.com/uploads/full/2024%2F12%2F30%2F12%2F59%2F49%2F236da439-318c-4a5e-84f5-41e28eab355a%2F15247_eRuz4Do5pS0g3SY6jF6RZg.jpg" },
  { id: 31, marka: "Honda", model: "Civic", qiymet: "14 500", mator: "1.5", il: "2013", reng: "white", img: "https://turbo.azstatic.com/uploads/full/2025%2F02%2F19%2F20%2F19%2F12%2F04936483-3d1a-4623-b5a3-bccab678ad20%2F83603_NnVipO7k_8o2mR0vhpmgbA.jpg" },
  { id: 32, marka: "Lexus", model: "RX 350", qiymet: "32 000", mator: "3.5", il: "2018", reng: "black", img: "https://turbo.azstatic.com/uploads/full/2025%2F02%2F09%2F13%2F57%2F23%2F1e6d39f7-7e25-47f6-b612-835dff879288%2F710_n_84bQNwZvpGSEPPCvJ-ng.jpg" },
  { id: 33, marka: "Subaru", model: "Outback", qiymet: "22 000", mator: "2.5", il: "2015", reng: "black", img: "https://turbo.azstatic.com/uploads/full/2023%2F11%2F11%2F10%2F21%2F47%2F613475ce-1ecf-4feb-9d46-83090a95f797%2F3770_gvbzXVgUPbqBtTG8tQNobA.jpg" },
  { id: 34, marka: "Mazda", model: "CX-5", qiymet: "20 000", mator: "2.0", il: "2016", reng: "white", img: "https://turbo.azstatic.com/uploads/full/2024%2F11%2F08%2F01%2F06%2F01%2F16986439-4c8c-4a0d-b092-35a86b5ee6e3%2F15247_eRuz4Do5pS0g3SY6jF6RZg.jpg" },
  { id: 35, marka: "Dodge", model: "Challenger", qiymet: "45 000", mator: "6.4", il: "2018", reng: "black", img: "https://turbo.azstatic.com/uploads/full/2025%2F01%2F10%2F16%2F08%2F15%2F81af7284-f2dd-4f29-80fa-e42cd8baec5e%2F3752_4NpV7XsFM7A9UVCf68RBhw.jpg" },
  { id: 36, marka: "Chrysler", model: "300", qiymet: "28 000", mator: "3.6", il: "2014", reng: "black", img: "https://turbo.azstatic.com/uploads/full/2025%2F02%2F19%2F21%2F18%2F55%2F05aeb6a5-15b2-4663-9fac-8154b6b2266e%2F83603_NnVipO7k_8o2mR0vhpmgbA.jpg" },
  { id: 37, marka: "Tesla", model: "Model S", qiymet: "55 000", mator: "Electric", il: "2018", reng: "white", img: "https://turbo.azstatic.com/uploads/full/2025%2F02%2F13%2F17%2F49%2F51%2F9d5ea08a-6950-48b5-8e86-e1e496e9967c%2F83603_NnVipO7k_8o2mR0vhpmgbA.jpg" },
  { id: 38, marka: "Acura", model: "MDX", qiymet: "29 000", mator: "3.5", il: "2016", reng: "silver", img: "https://turbo.azstatic.com/uploads/full/2025%2F02%2F06%2F14%2F21%2F59%2Ff268e45b-f0cd-4acb-a2f7-dd0982424552%2F98950_C_iE9aGbkxckegQmY7zA5g.jpg" },
  { id: 39, marka: "Infiniti", model: "Q50", qiymet: "33 000", mator: "3.0", il: "2017", reng: "gray", img: "https://turbo.azstatic.com/uploads/full/2024%2F08%2F28%2F00%2F11%2F35%2F622561df-2480-4417-b1ec-bfa15a353178%2F76402_Kt6M8xdUQ8mUvNPSzi54jw.jpg" },
  { id: 40, marka: "Buick", model: "Enclave", qiymet: "27 000", mator: "3.6", il: "2015", reng: "black", img: "https://turbo.azstatic.com/uploads/full/2025%2F02%2F03%2F20%2F10%2F47%2F5c02038f-ceb8-4a42-8425-42d91612c1a2%2F3528_Q1lPu2yra0tvVqTBugrxVg.jpg" },
  {
    id: 41,
    marka: "BMW",
    model: "X3",
    qiymet: "32 000",
    mator: "2.0",
    il: "2015",
    reng: "black",
    img: "https://turbo.azstatic.com/uploads/full/2025%2F02%2F10%2F19%2F06%2F24%2Fdcd8e259-37c8-44f8-a2e4-64e54c7858a1%2F83603_NnVipO7k_8o2mR0vhpmgbA.jpg"
  },
  {
    id: 42,
    marka: "Audi",
    model: "Q7",
    qiymet: "45 000",
    mator: "3.0",
    il: "2016",
    reng: "white",
    img: "https://turbo.azstatic.com/uploads/full/2024%2F04%2F18%2F20%2F52%2F56%2F7fa1acc0-f049-47a2-8ec3-9f884f6d6568%2F90393_ODR1trMUn1QUOVEF2iZirw.jpg"
  },
  {
    id: 43,
    marka: "Volkswagen",
    model: "Golf GTI",
    qiymet: "27 500",
    mator: "2.0",
    il: "2018",
    reng: "black",
    img: "https://turbo.azstatic.com/uploads/full/2025%2F02%2F05%2F11%2F07%2F14%2F4a248d6d-5af3-4550-aa03-1c604ca3beef%2F67900_VsfyEqu9G0cxtdUTwCN1tQ.jpg"
  },
  {
    id: 44,
    marka: "Ford",
    model: "F-150",
    qiymet: "50 000",
    mator: "5.0",
    il: "2017",
    reng: "blue",
    img: "https://turbo.azstatic.com/uploads/full/2024%2F07%2F08%2F16%2F49%2F06%2F80b7175a-eec0-4105-8e98-36131d458057%2F12183_ogtQftp0VNM0b8HrfrDIcQ.jpg"
  },
  {
    id: 45,
    marka: "Chevrolet",
    model: "Tahoe",
    qiymet: "55 000",
    mator: "5.3",
    il: "2018",
    reng: "black",
    img: "https://turbo.azstatic.com/uploads/full/2024%2F03%2F15%2F18%2F51%2F38%2Fb1a50ef0-fbb7-4862-9160-768511de19ff%2F32444_OikwS_ZIYofkU92pw8zouQ.jpg"
  },
  {
    id: 46,
    marka: "Toyota",
    model: "Highlander",
    qiymet: "35 000",
    mator: "3.5",
    il: "2016",
    reng: "white",
    img: "https://turbo.azstatic.com/uploads/full/2024%2F11%2F15%2F23%2F08%2F06%2F671b8494-65ad-4227-a6ad-0ca29baa1f45%2F67900_VsfyEqu9G0cxtdUTwCN1tQ.jpg"
  },
  {
    id: 47,
    marka: "Nissan",
    model: "Rogue",
    qiymet: "28 000",
    mator: "2.5",
    il: "2017",
    reng: "black",
    img: "https://turbo.azstatic.com/uploads/full/2025%2F02%2F12%2F13%2F37%2F12%2Feea2056d-3c3e-44a5-9d8e-af01e9902fb7%2F83603_NnVipO7k_8o2mR0vhpmgbA.jpg"
  },
  {
    id: 48,
    marka: "Jaguar",
    model: "F-Pace",
    qiymet: "60 000",
    mator: "3.0",
    il: "2018",
    reng: "silver",
    img: "https://turbo.azstatic.com/uploads/full/2025%2F01%2F18%2F14%2F05%2F23%2F01095d6b-b76f-4d44-b271-2ede4a9622be%2F3752_4NpV7XsFM7A9UVCf68RBhw.jpg"
  },
  {
    id: 49,
    marka: "Bentley",
    model: "Bentayga",
    qiymet: "200 000",
    mator: "6.0",
    il: "2018",
    reng: "blue",
    img: "https://turbo.azstatic.com/uploads/full/2023%2F12%2F15%2F21%2F15%2F16%2F54dbb337-6dd6-4899-9e70-56421f65fe65%2F3773_7r_VvIJA67fwnaT1pp49sg.jpg"
  },
  {
    id: 50,
    marka: "Land Rover",
    model: "Defender",
    qiymet: "70 000",
    mator: "3.0",
    il: "2017",
    reng: "black",
    img: "https://turbo.azstatic.com/uploads/full/2025%2F02%2F11%2F09%2F42%2F05%2Fbb7e4343-407a-4041-bf5b-b68a225e1bfc%2F710_n_84bQNwZvpGSEPPCvJ-ng.jpg"
  },
  // Manually adding 40 more cars
  {
    id: 51,
    marka: "Honda",
    model: "Civic",
    qiymet: "25 000",
    mator: "1.5",
    il: "2016",
    reng: "black",
    img: "https://turbo.azstatic.com/uploads/full/2024%2F04%2F18%2F22%2F04%2F18%2Fb4bd57b1-12bf-4a58-b5d5-95d6b0668cee%2F14231_J-_dQLKSND7AOyYEFIDxaw.jpg"
  },
  {
    id: 52,
    marka: "Subaru",
    model: "Outback",
    qiymet: "30 000",
    mator: "2.5",
    il: "2017",
    reng: "black",
    img: "https://turbo.azstatic.com/uploads/full/2025%2F02%2F07%2F19%2F56%2F05%2F99fe63d1-f1d2-4be8-8229-105b6acd12e4%2F83603_NnVipO7k_8o2mR0vhpmgbA.jpg"
  },
  {
    id: 53,
    marka: "Mazda",
    model: "CX-5",
    qiymet: "33 000",
    mator: "2.5",
    il: "2018",
    reng: "gray",
    img: "https://turbo.azstatic.com/uploads/full/2024%2F09%2F21%2F10%2F37%2F12%2Fad93b9c2-6ba4-4176-990d-c5dddb069777%2F11375_qXr7-N1ppBcS2a5TEaxWRQ.jpg"
  },
  {
    id: 54,
    marka: "Mercedes",
    model: "C-Class",
    qiymet: "40 000",
    mator: "2.0",
    il: "2016",
    reng: "white",
    img: "https://turbo.azstatic.com/uploads/full/2025%2F01%2F29%2F19%2F43%2F37%2F3491169d-216d-4ba3-bf41-e7531353e315%2F67900_VsfyEqu9G0cxtdUTwCN1tQ.jpg"
  },
  {
    id: 55,
    marka: "Tesla",
    model: "Model S",
    qiymet: "85 000",
    mator: "Electric",
    il: "2017",
    reng: "blue",
    img: "https://turbo.azstatic.com/uploads/full/2024%2F01%2F15%2F11%2F41%2F02%2F9aecb5fa-ec8a-4f98-8b63-dffb62c7d54d%2F3761_BlRZsWnwprHEiAyGLDzrEw.jpg"
  },
  {
    id: 56,
    marka: "Ferrari",
    model: "458 Italia",
    qiymet: "250 000",
    mator: "4.5",
    il: "2015",
    reng: "black",
    img: "https://turbo.azstatic.com/uploads/full/2024%2F12%2F20%2F17%2F58%2F37%2F3bf09f48-5c2b-4dd9-8f7e-8cfc64ce5088%2F67900_VsfyEqu9G0cxtdUTwCN1tQ.jpg"
  },
  {
    id: 57,
    marka: "Porsche",
    model: "911",
    qiymet: "120 000",
    mator: "3.0",
    il: "2018",
    reng: "silver",
    img: "https://turbo.azstatic.com/uploads/full/2025%2F02%2F08%2F20%2F34%2F50%2F8d88ed8b-db97-48ef-9b2a-971c38dd9726%2F710_n_84bQNwZvpGSEPPCvJ-ng.jpg"
  },
  {
    id: 58,
    marka: "BMW",
    model: "iX1",
    qiymet: "42 000",
    mator: "2.0",
    il: "2015",
    reng: "black",
    img: "https://turbo.azstatic.com/uploads/full/2025%2F01%2F24%2F19%2F30%2F00%2F99039af6-c1bf-47e5-a622-d0f909295bfd%2F15247_eRuz4Do5pS0g3SY6jF6RZg.jpg"
  },
  {
    id: 59,
    marka: "Audi",
    model: "A4",
    qiymet: "38 500",
    mator: "2.0",
    il: "2017",
    reng: "white",
    img: "https://turbo.azstatic.com/uploads/full/2025%2F01%2F27%2F13%2F29%2F03%2F8c6f7819-d4d0-4ed1-bf28-4216a9b1e28e%2F15247_eRuz4Do5pS0g3SY6jF6RZg.jpg"
  },
  {
    id: 60,
    marka: "Volkswagen",
    model: "Passat",
    qiymet: "28 000",
    mator: "1.8",
    il: "2016",
    reng: "gray",
    img: "https://turbo.azstatic.com/uploads/full/2025%2F02%2F11%2F10%2F01%2F14%2F45588843-a2e2-47c8-a7b6-ea1d4a802661%2F1957_PTAk9XsjQ8he6mTnwxv8JQ.jpg"
  },
  {
    id: 61,
    marka: "Ford",
    model: "Mustang",
    qiymet: "52 000",
    mator: "5.0",
    il: "2018",
    reng: "red",
    img: "https://turbo.azstatic.com/uploads/full/2024%2F11%2F22%2F15%2F01%2F16%2Fec8b13ad-2d6d-4ed9-aaf4-093b5240f91c%2F67900_VsfyEqu9G0cxtdUTwCN1tQ.jpg"
  },
  {
    id: 62,
    marka: "Chevrolet",
    model: "Camaro",
    qiymet: "49 000",
    mator: "6.2",
    il: "2017",
    reng: "red",
    img: "https://turbo.azstatic.com/uploads/full/2025%2F02%2F17%2F12%2F49%2F05%2F90b99fdb-676a-4bd1-a538-1e03f8e1fa93%2F83603_NnVipO7k_8o2mR0vhpmgbA.jpg"
  },
  {
    id: 63,
    marka: "Toyota",
    model: "Camry",
    qiymet: "30 500",
    mator: "2.5",
    il: "2016",
    reng: "black",
    img: "https://turbo.azstatic.com/uploads/full/2024%2F06%2F05%2F00%2F10%2F41%2F35397844-30bb-4e77-abec-08b329484d85%2F73879_Llsf7HE7T9ZVmMOurKtMGQ.jpg"
  },
  {
    id: 64,
    marka: "Nissan",
    model: "Altima",
    qiymet: "27 000",
    mator: "2.5",
    il: "2015",
    reng: "gray",
    img: "https://turbo.azstatic.com/uploads/full/2025%2F01%2F13%2F18%2F41%2F48%2Fdf9be155-44e0-4fda-a38b-a2f30e2691af%2F67900_VsfyEqu9G0cxtdUTwCN1tQ.jpg"
  },
  {
    id: 65,
    marka: "Jaguar",
    model: "XE",
    qiymet: "45 000",
    mator: "2.0",
    il: "2018",
    reng: "white",
    img: "https://turbo.azstatic.com/uploads/full/2025%2F02%2F10%2F10%2F19%2F16%2F4042649c-9244-4c10-aa35-2a405ddd12f7%2F710_n_84bQNwZvpGSEPPCvJ-ng.jpg"
  },
  {
    id: 66,
    marka: "Land Rover",
    model: "Range Rover Evoque",
    qiymet: "55 000",
    mator: "2.0",
    il: "2017",
    reng: "white",
    img: "https://turbo.azstatic.com/uploads/full/2024%2F12%2F28%2F17%2F41%2F10%2F8b4db7ad-d0be-443d-ad26-a502fdc10e47%2F3752_4NpV7XsFM7A9UVCf68RBhw.jpg"
  },
  {
    id: 67,
    marka: "Mazda",
    model: "Mazda6",
    qiymet: "29 500",
    mator: "2.5",
    il: "2016",
    reng: "red",
    img: "https://turbo.azstatic.com/uploads/full/2024%2F09%2F23%2F17%2F47%2F15%2F7b36ed5c-b3ab-44c1-b8b7-68e6ea3dcb90%2F11375_qXr7-N1ppBcS2a5TEaxWRQ.jpg"
  },
  {
    id: 68,
    marka: "BMW",
    qiymet: "15 000",
    model: "525",
    mator: "2.5",
    il: "2005",
    reng: "white",
    img: "https://turbo.azstatic.com/uploads/full/2025%2F02%2F16%2F18%2F41%2F01%2Fa52ec6a7-bae9-4350-9d8a-d948c2c2109b%2F1957_PTAk9XsjQ8he6mTnwxv8JQ.jpg",
  },
  {
    id: 69,
    marka: "Toyota",
    qiymet: "12 500",
    model: "Camry",
    mator: "2.4",
    il: "2005",
    reng: "black",
    img: "https://turbo.azstatic.com/uploads/full/2025%2F02%2F08%2F00%2F19%2F11%2Fc9c5036b-c132-4700-a651-1aace3bff78e%2F83603_NnVipO7k_8o2mR0vhpmgbA.jpg",
  },
  {
    id: 70,
    marka: "Ford",
    qiymet: "14 000",
    model: "Mustang",
    mator: "4.0",
    il: "2015",
    reng: "purple",
    img: "https://turbo.azstatic.com/uploads/full/2025%2F01%2F24%2F17%2F32%2F45%2Fba45147a-5594-4472-afcf-694901e2088d%2F67900_VsfyEqu9G0cxtdUTwCN1tQ.jpg",
  },
  {
    id: 71,
    marka: "Mercedes",
    qiymet: "16 500",
    model: "E-Class",
    mator: "3.0",
    il: "2006",
    reng: "silver",
    img: "https://turbo.azstatic.com/uploads/full/2024%2F12%2F12%2F11%2F14%2F26%2Fc913c168-7c9d-4c04-8d62-1f219ef38397%2F15247_eRuz4Do5pS0g3SY6jF6RZg.jpg",
  },
  {
    id: 72,
    marka: "Nissan",
    qiymet: "45000",
    model: "Altima",
    mator: "2.5",
    il: "2023",
    reng: "silver",
    img: "https://turbo.azstatic.com/uploads/full/2024%2F12%2F03%2F12%2F43%2F47%2F46b87feb-62ed-4dc7-9e69-170a75de34bd%2F82570_03Jwy_e00fC2mfxpGD9upA.jpg",
  },
  {
    id: 73,
    marka: "Chevrolet",
    qiymet: "21 500",
    model: "Malibu",
    mator: "2.2",
    il: "2017",
    reng: "black",
    img: "https://turbo.azstatic.com/uploads/full/2025%2F02%2F24%2F20%2F49%2F45%2F1f3aab62-e381-4532-8551-ee26375a7b10%2F710_n_84bQNwZvpGSEPPCvJ-ng.jpg",
  },
  {
    id: 74,
    marka: "Audi",
    qiymet: "35 000",
    model: "A4",
    mator: "2.0",
    il: "2018",
    reng: "white",
    img: "https://turbo.azstatic.com/uploads/full/2025%2F01%2F27%2F13%2F29%2F03%2F8c6f7819-d4d0-4ed1-bf28-4216a9b1e28e%2F15247_eRuz4Do5pS0g3SY6jF6RZg.jpg",
  },
  {
    id: 75,
    marka: "Volkswagen",
    qiymet: "8000",
    model: "Passat",
    mator: "2.0",
    il: "2002",
    reng: "gray",
    img: "https://turbo.azstatic.com/uploads/full/2025%2F02%2F24%2F12%2F03%2F59%2Fa4a7db4f-d669-43ae-a6e3-1c0fad18c2dc%2F83603_NnVipO7k_8o2mR0vhpmgbA.jpg",
  },
  {
    id: 76,
    marka: "Honda",
    qiymet: "40 000",
    model: "Accord",
    mator: "2.4",
    il: "2022",
    reng: "blue",
    img: "https://turbo.azstatic.com/uploads/full/2025%2F02%2F24%2F12%2F03%2F59%2Fa4a7db4f-d669-43ae-a6e3-1c0fad18c2dc%2F83603_NnVipO7k_8o2mR0vhpmgbA.jpg",
  },
  {
    id: 77,
    marka: "Dodge",
    qiymet: "40 000",
    model: "Charger",
    mator: "3.5",
    il: "2016",
    reng: "white",
    img: "https://turbo.azstatic.com/uploads/full/2024%2F02%2F06%2F16%2F26%2F24%2F70cb489d-309c-499f-85e6-2e07069d97dc%2F3799_YvOkqb-PPIpVWhJ-139kpg.jpg",
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
const totalPrice = document.getElementById("totalPrice")
const addCarPage = document.getElementById("addCarPage")
const carContent = document.getElementById("carContent")
const carInput = document.getElementById("carInput")
const randomCars = document.getElementById("randomCars")

function handleSideBar(status) {
  sidebar.style.transform = status ? 'translateX(0)' : 'translateX(100%)'
}

let count = 4

function showCars() {  
  loadBtn.style.display = 'flex'
  cards.innerHTML = ''
  cardetails.innerHTML = ''
  cars
    .filter(item => option.value ? item.marka == option.value : item)
    .slice(0, count)
    .map((item) => {
        cards.innerHTML += `
                <div class="card flex flex-col mb-3 bg-white rounded-lg overflow-hidden relative shadow-2xl">
                    <img onclick="detailCars(${item.id})" class="w-[290px] h-[250px] object-cover" src="${item.img}" alt="car-img">
                    <i class="fa-regular fa-heart text-2xl bg-red-600 text-white rounded-full p-[5px] absolute top-[20px] right-[20px]"></i>
                    <h3 class="px-5 py-1 text-2xl font-bold">${item.qiymet} AZN</h3>
                    <h3 onclick="detailCars(${item.id})" class="px-5 py-1 text-lg font-medium">${item.marka} ${item.model}</h3>
                    <h4 class="px-5 py-1 text-lg font-medium">${item.il} ${item.mator} ${item.reng}</h4>
                    <button onclick="addBasket(${item.id})" type="button" class="px-5 py-3 bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition">Buy</button>
                </div>
        `
    })
}

function searchCars(){
  cards.innerHTML = ''
  cardetails.innerHTML = ''
  cars
    .filter(item => item.marka.toLowerCase().startsWith(search.value.toLowerCase()))
    .map((item) => {
        cards.innerHTML += `
                <div class="card flex flex-col mb-3 bg-white rounded-lg overflow-hidden relative shadow-2xl">
                    <img onclick="detailCars(${item.id})" class="w-[290px] h-[250px] object-cover" src="${item.img}" alt="car-img">
                    <i class="fa-regular fa-heart text-2xl bg-red-600 text-white rounded-full p-[5px] absolute top-[20px] right-[20px]"></i>
                    <h3 class="px-5 py-1 text-2xl font-bold">${item.qiymet} AZN</h3>
                    <h3 onclick="detailCars(${item.id})" class="px-5 py-1 text-lg font-medium text-ellipsis overflow-hidden ...">${item.marka} ${item.model}</h3>
                    <h4 class="px-5 py-1 text-lg font-medium">${item.il} ${item.mator} ${item.reng}</h4>
                    <button onclick="addBasket(${item.id})" type="button" class="px-5 py-3 bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition">Buy</button>
                </div>
        `
    })
}
searchCars()

const markas = []
function printMarkas() {
  cars.forEach(item => !markas.includes(item.marka) && markas.push(item.marka))
  markas.sort()
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
        <div class="card flex flex-col mb-3 bg-white rounded-lg overflow-hidden relative shadow-2xl">
          <img onclick="detailCars(${item.id})" class="w-[290px] h-[250px] object-cover" src="${item.img}" alt="car-img">
          <i class="fa-regular fa-heart text-2xl bg-red-600 text-white rounded-full p-[5px] absolute top-[20px] right-[20px]"></i>
          <h3 class="px-5 py-1 text-2xl font-bold">${item.qiymet} AZN</h3>
          <h3 onclick="detailCars(${item.id})" class="px-5 py-1 text-lg font-medium">${item.marka} ${item.model}</h3>
          <h4 class="px-5 py-1 text-lg font-medium">${item.il} ${item.mator} ${item.reng}</h4>
          <button onclick="addBasket(${item.id})" type="button" class="px-5 py-3 bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition">Buy</button>
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

function addCar(){ 
  carInput.style.display = 'block'
  carContent.style.display = 'none'
  carInput.innerHTML = `
    <input id="marka" type="text" placeholder="marka">
    <input id="model" type="text" placeholder="model">
    <input id="il" type="text" placeholder="il">
    <input id="mator" type="text" placeholder="mator">
    <input id="reng" type="text" placeholder="reng">
    <input id="qiymet" type="text" placeholder="qiymet">
    <input id="img" type="text" placeholder="photo linkini daxil et">
    <button onclick="addCarArray()">elave et</button>
  `
  
}

function addCarArray(){   
  const marka = document.getElementById("marka");
  const model = document.getElementById("model");
  const il = document.getElementById("il");
  const mator = document.getElementById("mator");
  const reng = document.getElementById("reng");
  const qiymet = document.getElementById("qiymet");
  const img = document.getElementById("img");
  if (marka.value.trim() !== "" &&
      model.value.trim() !== "" &&
      il.value.trim() !== "" &&
      mator.value.trim() !== "" &&
      reng.value.trim() !== "" &&
      qiymet.value.trim() !== "" &&
      img.value.trim() !== "") {
        cars.push({
            id: cars.length + 1,
            marka: marka.value.trim(),
            qiymet: qiymet.value.trim(),
            model: model.value.trim(),
            mator: mator.value.trim(),
            il: il.value.trim(),
            reng: reng.value.trim(),
            img: img.value.trim()
        });
        marka.value = "";
        model.value = "";
        il.value = "";
        mator.value = "";
        reng.value = "";
        qiymet.value = "";
        img.value = "";
        carInput.style.display = 'none'
        carContent.style.display = 'block'
    }else {
      alert("Butun bosluqlari doldur!");
  }
}

const basket = []
function addBasket(id) {
  let obj = cars.find(item => item.id == id)
  const alreadyInBasket = basket.find(item => item.id == id)
  if (alreadyInBasket) {
    alreadyInBasket.count++
    // console.log('Item added to basket:', obj)
  } else {
    obj = {...obj, count: 1}
    basket.push(obj)
    // console.log('Item already in basket')
  }
  // console.log('Current basket:', basket)
  showBasket()
}

function removeBasket(id) {
  const index = basket.findIndex(item => item.id == id)
  basket.splice(index, 1)
  showBasket()
}

function handleCount(x, id) {
  const element = basket.find(item => item.id == id)
  if (element.count + x >= 1) element.count += x
  showBasket()
}

function showBasket(){
  const total = basket.reduce((sum, item) => sum + Number(item.qiymet.replace(/\s/g, '')) * item.count, 0)
  totalPrice.innerHTML = `Total: ${total} AZN`
  sidebar.innerHTML = `
    <div onclick="handleSideBar(false)" class="text-yellow-600 absolute top-[30px] left-[30px] font-[900] cursor-pointer p-[5px]">╳</div>
    <div id="totalPrice">Total: ${total} AZN</div>
  `  
  basket.forEach(item => {
    sidebar.innerHTML += `
      <div class="bg-slate-400 rounded-lg px-8 mb-4 py-3 flex justify-between gap-4">
          <div class="flex gap-4">
              <img class="w-[250px] h-[200px] rounded-lg object-cover" src="${item.img}" alt="car-img">
              <div class="flex flex-col">
                  <h1>${item.marka}, ${item.model}</h1>
                  <h1>Ili: ${item.il}</h1>
                  <h1>Motor: ${item.mator}</h1>
                  <h1 class="flex gap-4"><span class="cursor-pointer px-3 bg-blue-700 rounded text-white" onclick="handleCount(-1, ${item.id})">-</span>Sayi: ${item.count}<span class="cursor-pointer px-3 bg-blue-700 rounded text-white" onclick="handleCount(+1, ${item.id})">+</span></h1>
              </div>
          </div>
          <div>
              <h1>${item.qiymet} AZN</h1>
              <h1>${Number(item.qiymet) * Number(item.count)} AZN</h1>
              <button onclick="removeBasket(${item.id})" class="rounded-2xl font-bold text-[20px] p-3 text-white border-[2px] border-black bg-red-600" type="button">remove</button>
          </div>
      </div>
    `
  })
}
function showRandCars() {
  randomCars.innerHTML = `
    <div class="swiper mySwiper rounded-[10px] my-4">
      <div class="swiper-wrapper">
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div>
    </div>
  `
  
  const swiperWrapper = randomCars.querySelector('.swiper-wrapper')
  
  const carsData = [...cars]
  
  const shuffledCars = shuffleArray(carsData)
  
  const randomSelection = shuffledCars.slice(0, 12)
  
  randomSelection.forEach(item => {
    swiperWrapper.innerHTML += `
      <div class="swiper-slide">
        <div class="card flex flex-col bg-white rounded-lg overflow-hidden relative shadow-2xl h-full">
          <img onclick="detailCars(${item.id})" class="w-full h-[250px] object-cover" src="${item.img}" alt="car-img">
          <i class="fa-regular fa-heart text-2xl bg-red-600 text-white rounded-full p-[5px] absolute top-[20px] right-[20px]"></i>
          <h3 class="px-5 py-1 text-2xl font-bold">${item.qiymet} AZN</h3>
          <h3 onclick="detailCars(${item.id})" class="px-5 py-1 text-lg font-medium">${item.marka} ${item.model}</h3>
          <h4 class="px-5 py-1 text-lg font-medium">${item.il} ${item.mator} ${item.reng}</h4>
          <button onclick="addBasket(${item.id})" type="button" class="px-5 py-3 bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition mt-auto">Buy</button>
        </div>
      </div>
    `
  })
}

function shuffleArray(array) {
  let currentIndex = array.length
  let randomIndex;

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
  }

  return array
}
function shuffleArray(array) {
  let currentIndex = array.length
  let randomIndex

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
  }

  return array
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
          <button onclick="addBasket(${car.id})" type="button" class="px-5 py-2 mb-1 text-[30px] bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition">Sebete elave et</button>
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
showRandCars()