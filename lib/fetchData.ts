import { m } from "framer-motion";

export const HospitalName = 'LAKHIMPUR CANCER CENTRE';
export const HName = '/Lakhimpur';
export const HomePageAccess = true;
export const AboutUsAccess = true;
export const FacilitiesAccess = true;
export const HospitalsAccess = true;
export const NewsAndEventsAccess = true;
export const ContactUsAccess = true;
export const AcademicsAccess = false;
export const VideosAccess = false;
export const SocialInfraAccess = false;
export const UpdatesAccess = false;
export const HospitalID = 7;

export function removeBackslashes(input?: string): string {
  if (typeof input !== 'string') return '';
  return input.replace(/\\/g, '');
}
export const HomeContent = {
  "_id": "67d5201b92ae82369ef8f29d",
  "id": 1,
  "heading": "South Asia's Largest Cancer Care Network",
  "description": "Assam Cancer Care Foundation is a joint initiative between the Government of Assam and the Tata Trusts. It was set up in December 2017 to create a first-of-its-kind, three-level cancer grid in the state of Assam. The distributed care model was conceptualized by the Government of Assam and Tata Trusts to create patient-centric cancer care hospitals to deliver standardized and affordable care closer to patients' homes. With a plan to set up 17 cancer hospitals in the state of Assam, it is the largest cancer care network in South Asia. Of the 17 hospitals, Hon’ble Prime Minister, Shri Narendra Modi inaugurated seven hospitals at Dibrugarh, Barpeta, Tezpur, Lakhimpur, Jorhat, Kokrajhar, and Darrang and also laid the foundation stones for seven more new cancer care hospitals at Nagaon, Goalpara, Nalbari, Golaghat, Tinsukia, Sivasagar, and Dhubri on April 28, 2022. Subsequently, two more hospitals at State Cancer Institute Guwahati and Silchar were inaugurated by Hon’ble Chief Minister of Assam, Dr. Himanta Biswa Sarma in March 2024. Construction works at Diphu and the seven new sites are currently in progress.",
  "HospitalID": 1,
  "updatedAt": "2025-03-18T08:51:38.302Z"
}


// https://accf-api.cancercareinstituteguwahati.org/api/get-slides-for-center
export async function ImageSliderData() {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  try {
    const response = await fetch(`https://accf-api.cancercareinstituteguwahati.org/api/get-slides-for-center`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({"hospitalId": HospitalID}),
      next: { revalidate: 10 },
      // cache: "no-store",
    });

    const data = await response.json();
    return data || [];
  } catch (error) {
    console.error("Failed to fetch doctors:", error);
    return [];
  }
}
// ✅ Fetch Doctors
export async function fetchDoctors2() {
  // ⚠️ Bypass SSL check (only for local development)
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  try {
    const response = await fetch(`https://accf-api.cancercareinstituteguwahati.org/api/get-doctor-for-center`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ "hospitalId": HospitalID }),
      next: { revalidate: 900 },
      // cache: "no-store",
    });

    const data = await response.json();
    return data || [];
  } catch (error) {
    console.error("Failed to fetch doctors:", error);
    return [];
  }
}

// ✅ Fetch Accomplishments
export async function fetchAccomplishments2() {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  try {
    const response = await fetch(`https://accf-api.cancercareinstituteguwahati.org/api/get-counts-for-center`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({"hospitalId": HospitalID}),
      next: { revalidate: 10 },
      // cache: "no-store",
    });

    const data = await response.json();
    return data || [];
  } catch (error) {
    console.error("Failed to fetch doctors:", error);
    return [];
  }
}

export const FetchFacilitiesData = [{
  "_id": "67edf9f274c62b1f3d0231c5",
  "id": 29,
  "HospitalID": 8,
  "title": "Medical Oncology",
  "short_description": "Medical Oncology is a branch of medicine that specializes in the diagnosis and treatment of cancer. It is a super-specialty field where Medical Oncologists treat various types of cancer using medications, including chemotherapy, immunotherapy, targeted therapy, and hormone therapy.\n\nThe center has a dedicated daycare setup with modern Chemo Daycare wards.",
  "long_description": "Medical Oncology is a branch of medicine that specializes in the diagnosis and treatment of cancer. It is a super-specialty field where Medical Oncologists treat various types of cancer using medications, including chemotherapy, immunotherapy, targeted therapy, and hormone therapy.\n\nThe center has a dedicated daycare setup with modern Chemo Daycare wards.",
  "read_more2": false,
  "read_more": true,
  "description": "Medical Oncology is a branch of medicine that specializes in the diagnosis and treatment of cancer. It is a super-specialty field where Medical Oncologists treat various types of cancer using medications, including chemotherapy, immunotherapy, targeted therapy, and hormone therapy.\n\nThe center has a dedicated daycare setup with modern Chemo Daycare wards.\n\nThe department operates a dedicated OPD service every day, along with daycare services for chemotherapy. In addition, the department has a long-term chemotherapy ward for hospitalized patients, supportive care wards, an isolation block for neutropenic patients, and hemato-oncology services.",
  "path": "Lakhimpur/Facilities/1_1.jpg",
  "Loader": "#0076bd",
  "color1": "#cbdae54",
  "color2": "#ced0d51",
  "order": 1
},
{
  "_id": "67edf9f274c62b1f3d0231d6",
  "id": 46,
  "HospitalID": 8,
  "title": "Radiation Oncology",
  "short_description": "Radiation oncology is a medical specialty that involves the controlled use of radiation to treat cancer. Radiation Oncologists treat cancer using radiation therapy, through high-energy x-rays or other particles to destroy cancer cells. The centre is equipped with state-of-the-art modern LINAC machines and Brachytherapy..",
  "long_description": "Radiation oncology is a medical specialty that involves the controlled use of radiation to treat cancer. Radiation Oncologists treat cancer using radiation therapy, through high-energy x-rays or other particles to destroy cancer cells. The centre is equipped with state-of-the-art modern LINAC machines and Brachytherapy.",
  "read_more": false,
  "read_more2": false,
  "description": "Radiation oncology is a medical specialty that involves the controlled use of radiation to treat cancer. Radiation Oncologists treat cancer using radiation therapy, through high-energy x-rays or other particles to destroy cancer cells. The centre is equipped with state-of-the-art modern LINAC machines and Brachytherapy.",
  "path": "Lakhimpur/Facilities/2.jpg",
  "Loader": "#0076bd",
  "color1": "#cbdae55",
  "color2": "#ced0d52"
},
// {
//   "_id": "67edf9f274c62b1f3d0231db",
//   "id": 51,
//   "HospitalID": 8,
//   "title": "Surgical Oncology",
//   "short_description": "Surgical Oncology is the field of cancer care that focuses on surgery to diagnose, stage and treat cancer, and to manage some cancer-related symptoms. A Major OT and a Minor OT setup is present at Dibrugarh Cancer Centre.",
//   "long_description": "Surgical Oncology is the field of cancer care that focuses on surgery to diagnose, stage and treat cancer, and to manage some cancer-related symptoms. A Major OT and a Minor OT setup is present at Dibrugarh Cancer Centre.",
//   "read_more": false,
//   "read_more2": false,
//   "description": "Surgical Oncology is the field of cancer care that focuses on surgery to diagnose, stage and treat cancer, and to manage some cancer-related symptoms. A Major OT and a Minor OT setup is present at Dibrugarh Cancer Centre.",
//   "path": "Dibrugarh/Facilities/3.jpg",
//   "Loader": "#0076bd",
//   "color1": "#cbdae56",
//   "color2": "#ced0d53"
// }, 
// {
//   "_id": "67edf9f274c62b1f3d0231b3",
//   "id": 11,
//   "HospitalID": 8,
//   "title": "Nuclear Medicine",
//   "short_description": "Nuclear medicine is a specialized area of radiology that uses very small amounts of radioactive materials, or radiopharmaceuticals, to examine organ function and structure. This branch of radiology is often used to help diagnose and treat abnormalities very early in the progression of a disease. PET CT is available at Dibrugarh Cancer Centre.",
//   "long_description": "Nuclear medicine is a specialized area of radiology that uses very small amounts of radioactive materials, or radiopharmaceuticals, to examine organ function and structure. This branch of radiology is often used to help diagnose and treat abnormalities very early in the progression of a disease. PET CT is available at Dibrugarh Cancer Centre.",
//   "read_more": false,
//   "read_more2": false,
//   "description": "Nuclear medicine is a specialized area of radiology that uses very small amounts of radioactive materials, or radiopharmaceuticals, to examine organ function and structure. This branch of radiology is often used to help diagnose and treat abnormalities very early in the progression of a disease. PET CT is available at Dibrugarh Cancer Centre.",
//   "path": "Dibrugarh/Facilities/5.jpg",
//   "Loader": "#0076bd",
//   "color1": "#cbdae58",
//   "color2": "#ced0d55"
// },
// {
//   "_id": "67edf9f274c62b1f3d0231cc7",
//   "id": 36,
//   "HospitalID": 1,
//   "title": "Hospital Based Cancer Registry",
//   "short_description": "Hospital Based Cancer Registry (HBCR) systematically analyzes cancer data to generate reliable insights into disease patterns, survival trends, and treatment outcomes. It plays a crucial role in clinical research, evaluating treatment modalities, and supporting hospital facility planning.",
//   "long_description": "Hospital Based Cancer Registry (HBCR) systematically analyzes cancer data to generate reliable insights into disease patterns, survival trends, and treatment outcomes. It plays a crucial role in clinical research, evaluating treatment modalities, and supporting hospital facility planning.\n\nAdditionally, the registry contributes to active patient follow-up, assesses survival length and quality based on cancer site, stage, and treatment, and tracks time trends in early versus late-stage diagnoses. HBCR also focuses on capacity building by recruiting and training professionals in cancer registration and epidemiology.",
//   "read_more2": false,
//   "read_more": true,
//   "description": "Hospital Based Cancer Registry (HBCR) systematically analyzes cancer data to generate reliable insights into disease patterns, survival trends, and treatment outcomes. It plays a crucial role in clinical research, evaluating treatment modalities, and supporting hospital facility planning.\n\nAdditionally, the registry contributes to active patient follow-up, assesses survival length and quality based on cancer site, stage, and treatment, and tracks time trends in early versus late-stage diagnoses. HBCR also focuses on capacity building by recruiting and training professionals in cancer registration and epidemiology.",
//   "path": "Dibrugarh/Facilities/palm.jpg",
//   "Loader": "#0076bd",
//   "color1": "#cbdae5",
//   "color2": "#ced0d39",
//   "order": 7
// },
{
  "_id": "67edf9f274c62b1f3d0231af",
  "id": 7,
  "HospitalID": 8,
  "title": "Radiology",
  "short_description": "Radiology is the branch of medicine that makes diagnostic images of anatomic structures using electromagnetic radiation or sound waves and that treats disease using radioactive compounds. Radiological imaging techniques include x-rays, CT scans, MRIs, Mammography, ultrasonograms, etc.",
  "long_description": "Radiology is the branch of medicine that makes diagnostic images of anatomic structures using electromagnetic radiation or sound waves and that treats disease using radioactive compounds. Radiological imaging techniques include x-rays, CT scans, MRIs, Mammography, ultrasonograms, etc.",
  "read_more": false,
  "read_more2": false,
  "description": "Radiology is the branch of medicine that makes diagnostic images of anatomic structures using electromagnetic radiation or sound waves and that treats disease using radioactive compounds. Radiological imaging techniques include x-rays, CT scans, MRIs, Mammography, ultrasonograms, etc.",
  "path": "Lakhimpur/Facilities/4.jpg",
  "Loader": "#0076bd",
  "color1": "#cbdae59",
  "color2": "#ced0d56"
},
{
  "_id": "67edf9f274c62b1f3d0231x19",
  "id": 98,
  "HospitalID": 1,
  "title": "Laboratory Services",
  "short_description": "The institute is equipped with an advanced unit with Histopathology with routine Pathology, Biochemistry etc.",
  "long_description": "The institute is equipped with an advanced unit with Histopathology with routine Pathology, Biochemistry etc.\n\nEquipped with the state of art Autopack 300, Fuji dri-chem series and XN 330 hematology analyzer, we strive to adhere to the Good Laboratory Practices to provide accurate and reliable laboratory results to our patients.",
  "read_more2": false,
  "read_more": true,
  "description": "The institute is equipped with an advanced unit with Histopathology with routine Pathology, Biochemistry etc. \n\nEquipped with the state of art Autopack 300, Fuji dri-chem series and XN 330 hematology analyzer, we strive to adhere to the Good Laboratory Practices to provide accurate and reliable laboratory results to our patients.",
  "path": "Lakhimpur/Facilities/Lab2.jpg",
  "Loader": "#0076bd",
  "color1": "#cbdae54",
  "color2": "#ced0d2",
  "order": 19
},
// {
//   "_id": "67edf9f274c62b1f3d0231ee",
//   "id": 70,
//   "HospitalID": 8,
//   "title": "Blood Store",
//   "short_description": "The Jorhat Blood Store is an advanced unit for storing and preserving blood for later use in blood transfusion.",
//   "long_description": "The Jorhat Blood Store is an advanced unit for storing and preserving blood for later use in blood transfusion.",
//   "read_more": false,
//   "read_more2": false,
//   "description": "The Jorhat Blood Store is an advanced unit for storing and preserving blood for later use in blood transfusion.",
//   "path": "Jorhat/Facilities/5.jpg",
//   "Loader": "#0076bd",
//   "color1": "#cbdae62",
//   "color2": "#ced0d59"
// },
{
  "_id": "67edf9f274c62b1f3d0231fa",
  "id": 82,
  "HospitalID": 8,
  "title": "Palliative Medicine",
  "short_description": "Palliative Care is an approach that improves the quality of life of patients (adults and children) who are suffering from life limiting illness, and their families.Palliative Care includes not only cancer patients but non-cancer patients as well.",
  "long_description": "Palliative Care is an approach that improves the quality of life of patients (adults and children) who are suffering from life limiting illness, and their families.Palliative Care includes not only cancer patients but non-cancer patients as well.\n\nAlthough Palliative Care is thought to be synonymous with Terminal or End of Life Care but it is not always true because Palliative Care should start from the time of diagnosis of a terminal illness and go along with curative treatment like surgery, chemotherapy and radiation therapy.Palliative Care extends upto bereavement support for the patient's family.\n\nPalliative Care also includes respite, hospice and home care for patients.Good communication, proper pain and other symptom management along with counselling are other aspects of Palliative Care.Palliative Care respects the ethical issues in terms of communication regarding prognostication and futile treatment.",
  "read_more2": false,
  "read_more": true,
  "description": "Palliative Care is an approach that improves the quality of life of patients (adults and children) who are suffering from life limiting illness, and their families.Palliative Care includes not only cancer patients but non-cancer patients as well.\n\nAlthough Palliative Care is thought to be synonymous with Terminal or End of Life Care but it is not always true because Palliative Care should start from the time of diagnosis of a terminal illness and go along with curative treatment like surgery, chemotherapy and radiation therapy.Palliative Care extends upto bereavement support for the patient's family.\n\nPalliative Care also includes respite, hospice and home care for patients.Good communication, proper pain and other symptom management along with counselling are other aspects of Palliative Care.Palliative Care respects the ethical issues in terms of communication regarding prognostication and futile treatment.",
  "path": "Lakhimpur/Facilities/3.jpg",
  "Loader": "#0076bd",
  "color1": "#cbdae54",
  "color2": "#ced0d51",
  "order": 15
},
// {
//   "_id": "67edf9f274c62b1f3d0231f6",
//   "id": 78,
//   "HospitalID": 8,
//   "title": "Emergency Medicine",
//   "short_description": "Emergency medicine is available at the centre for our existing cancer patients.",
//   "long_description": "Emergency medicine is available at the centre for our existing cancer patients.",
//   "read_more2": false,
//   "read_more": false,
//   "description": "Emergency medicine is available at the centre for our existing cancer patients.",
//   "path": "Dibrugarh/Facilities/10.jpg",
//   "Loader": "#0076bd",
//   "color1": "#cbdae42",
//   "color2": "#ced0d39",
//   "order": 10
// },
// {
//   "_id": "67edf9f274c62b1f3d0231eb",
//   "id": 67,
//   "HospitalID": 8,
//   "title": "Anesthesiology",
//   "short_description": "It is the medical specialty concerned with the total perioperative care of patients before, during and after surgery/procedure. It involves use of anesthesia to safely support a patient's vital functions through out the perioperative period. It encompasses anesthesia, intensive care medicine, critical emergency medicine, and pain medicine.\n\nThe institute have a full-fledged Anesthesia department",
//   "long_description": "It is the medical specialty concerned with the total perioperative care of patients before, during and after surgery/procedure. It involves use of anesthesia to safely support a patient's vital functions through out the perioperative period. It encompasses anesthesia, intensive care medicine, critical emergency medicine, and pain medicine.\n\nThe institute have a full-fledged Anesthesia department",
//   "read_more2": false,
//   "read_more": false,
//   "description": "It is the medical specialty concerned with the total perioperative care of patients before, during and after surgery/procedure. It involves use of anesthesia to safely support a patient's vital functions through out the perioperative period. It encompasses anesthesia, intensive care medicine, critical emergency medicine, and pain medicine.\n\nThe institute have a full-fledged Anesthesia department",
//   "path": "Dibrugarh/Facilities/8.jpg",
//   "Loader": "#0076bd",
//   "color1": "#cbdae54",
//   "color2": "#ced0d51",
//   "order": 16
// },
// {
//   "_id": "67edf9f274c62b1f3d0231ec",
//   "id": 68,
//   "HospitalID": 8,
//   "title": "Endoscopy Services",
//   "short_description": "The endoscopy procedure uses an endoscope to examine the interior of a hollow organ or cavity of the body. Unlike many other medical imaging techniques, endoscopes are inserted directly into the organ. Most commonly we do endoscopy to examine the gastrointestinal tract.",
//   "long_description": "The endoscopy procedure uses an endoscope to examine the interior of a hollow organ or cavity of the body. Unlike many other medical imaging techniques, endoscopes are inserted directly into the organ. Most commonly we do endoscopy to examine the gastrointestinal tract.",
//   "read_more2": false,
//   "read_more": false,
//   "description": "The endoscopy procedure uses an endoscope to examine the interior of a hollow organ or cavity of the body. Unlike many other medical imaging techniques, endoscopes are inserted directly into the organ. Most commonly we do endoscopy to examine the gastrointestinal tract.",
//   "path": "Dibrugarh/Facilities/11.jpg",
//   "Loader": "#0076bd",
//   "color1": "#cbdae54",
//   "color2": "#ced0d51",
//   "order": 49
// },
// {
//   "_id": "67edf9f274c62b1f3d0231dc",
//   "id": 52,
//   "HospitalID": 8,
//   "title": "Tele Health Services – Tele-radiology, Virtual Tumour Board (VTB), DiNC",
//   "short_description": "The telehealth services consist of our central hub at Guwahati, which is called DiNC (Digital Nerve center) and all our Hospitals have Tele-radiology and Virtual Tumour Board (VTB) services.",
//     "long_description": "The telehealth services consist of our central hub at Guwahati, which is called DiNC (Digital Nerve center) and all our Hospitals have Tele-radiology and Virtual Tumour Board (VTB) services.",
//     "read_more": true,
//     "read_more2": false,
//   "description": "The telehealth services consist of our central hub at Guwahati, which is called DiNC (Digital Nerve center) and all our Hospitals have Tele-radiology and Virtual Tumour Board (VTB) services.",
//   "path": "Dibrugarh/Facilities/13.jpg",
//   "Loader": "#0076bd",
//   "color1": "#cbdae66",
//   "color2": "#ced0d63"
// },
// {
//   "_id": "67edf9f274c62b1f3d0231d7",
//   "id": 47,
//   "HospitalID": 8,
//   "title": "Critical care (ICU)",
//   "short_description": "Critical care is medical care for people who have life-threatening injuries and illnesses. It usually takes place in an intensive care unit (ICU). A team of specially trained health care providers gives you 24-hour care.\n\n This includes using machines to constantly monitor your vital signs. We are having ICU and HDU set up at the State Cancer Institute to take care of Cancer patients who need ICU care.",
//   "long_description": "Critical care is medical care for people who have life-threatening injuries and illnesses. It usually takes place in an intensive care unit (ICU). A team of specially trained health care providers gives you 24-hour care.\n\n This includes using machines to constantly monitor your vital signs. We are having ICU and HDU set up at the State Cancer Institute to take care of Cancer patients who need ICU care.",
//   "read_more2": false,
//   "read_more": false,
//   "description": "Critical care is medical care for people who have life-threatening injuries and illnesses. It usually takes place in an intensive care unit (ICU). A team of specially trained health care providers gives you 24-hour care.\n\n This includes using machines to constantly monitor your vital signs. We are having ICU and HDU set up at the State Cancer Institute to take care of Cancer patients who need ICU care.",
//   "path": "Dibrugarh/Facilities/7.jpg",
//   "Loader": "#0076bd",
//   "color1": "#cbdae54",
//   "color2": "#ced0d51",
//   "order": 17
// },
{
  "_id": "67edf9f274c62b1f3d0231e4",
  "id": 60,
  "HospitalID": 8,
  "title": "Ambulance Service",
  "short_description": "Ambulance service is available.",
  "long_description": "Ambulance service is available.",
  "read_more": false,
  "read_more2": false,
  "description": "Ambulance service is available.",
  "path": "Lakhimpur/Facilities/8.jpg",
  "Loader": "#0076bd",
  "color1": "#cbdae67",
  "color2": "#ced0d64"
}]


export async function FetchHospitalsData2() {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  try {
    const response = await fetch(`https://accf-api.cancercareinstituteguwahati.org/api/get-hospitals`, {
      method: "POST"
    });

    const data = await response.json();

    // Filter out the hospital with id = 1
    const filteredData = (data || []).filter((hospital: { id: number; }) => hospital.id !== HospitalID);
    return filteredData;
  } catch (error) {
    console.error("Failed to fetch doctors:", error);
    return [];
  }
}

export const FetchAboutUs = [
  {
    "_id": "67e008c4738919e55f45e3ef",
    "HospitalID": 1,
    "title": "Who we are",
    "short_description": "Lakhimpur Cancer Centre – a unit of Assam Cancer Care Foundation (ACCF) - is located adjacent to Lakhimpur Medical College and Hospital (LMCH) at Lakhimpur. With its state-of-the-art infrastructure, the 44-bedded centre is equipped with advanced technology. The unit has a team of experienced Oncologists from reputed medical institutes and oncology-trained nurses to ensure best of treatment and care.",
    "read_more2": false,
    "description2": "Lakhimpur Cancer Centre – a unit of Assam Cancer Care Foundation (ACCF) - is located adjacent to Lakhimpur Medical College and Hospital (LMCH) at Lakhimpur. With its state-of-the-art infrastructure, the 44-bedded centre is equipped with advanced technology. The unit has a team of experienced Oncologists from reputed medical institutes and oncology-trained nurses to ensure best of treatment and care.",
    "description": "Lakhimpur Cancer Centre – a unit of Assam Cancer Care Foundation (ACCF) - is located adjacent to Lakhimpur Medical College and Hospital (LMCH) at Lakhimpur. With its state-of-the-art infrastructure, the 44-bedded centre is equipped with advanced technology. The unit has a team of experienced Oncologists from reputed medical institutes and oncology-trained nurses to ensure best of treatment and care.",
    "active": "Y",
    "path": "Lakhimpur/about/whoWeAre.jpg"
  },
  {
    "_id": "67f1623946886839f4f9b661",
    "HospitalID": 1,
    "title": "Key facilities",
    "short_description": "Radiation Therapy, Chemotherapy, CT Scan, MRI, X-Ray, Mammography, and laboratory services are a few of the facilities. The centralised helpdesk - DiNC (Digital Nerve Centre) connects the centre to the network of ACCF units in real time, for delivery of virtual care through effective and efficient communication. Appointments and cancer related queries can be done from the comfort of home through the helpdesk.",
    "read_more2": false,
    "description": "Radiation Therapy, Chemotherapy, CT Scan, MRI, X-Ray, Mammography, and laboratory services are a few of the facilities. The centralised helpdesk - DiNC (Digital Nerve Centre) connects the centre to the network of ACCF units in real time, for delivery of virtual care through effective and efficient communication. Appointments and cancer related queries can be done from the comfort of home through the helpdesk.",
    "active": "Y",
    "path": "Lakhimpur/about/keyfacilities.jpg"
  },
  {
    "_id": "67f163b746886839f4f9b662",
    "HospitalID": 1,
    "title": "How does the centre help?",
    "short_description": "Lakhimpur Cancer Centre is strategically located to cater to the needs of cancer patients in Lakhimpur, its neighbouring districts and adjacent states. Patients from neighbouring countries can also avail the services. The location of the centre has helped in reducing financial and emotional burdens of the local population, who otherwise would have travelled to state headquarters for treatment. The centre offers cashless treatment for patients under Central Government scheme – PMJAY (Ayushman Bharat Pradhan Mantri Jan Arogya Yojana) and ESIC.",
    "read_more2": false,
    "description": "Lakhimpur Cancer Centre is strategically located to cater to the needs of cancer patients in Lakhimpur, its neighbouring districts and adjacent states. Patients from neighbouring countries can also avail the services. The location of the centre has helped in reducing financial and emotional burdens of the local population, who otherwise would have travelled to state headquarters for treatment. The centre offers cashless treatment for patients under Central Government scheme – PMJAY (Ayushman Bharat Pradhan Mantri Jan Arogya Yojana) and ESIC.",
    "active": "Y",
    "path": "Lakhimpur/about/centre_help.jpg"
  }
]

// ✅ Fetch News & Events
export async function fetchNewsAndEvents2() {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  try {
    const response = await fetch(`https://accf-api.cancercareinstituteguwahati.org/api/get-news-events-for-center`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ "hospitalId": HospitalID }),
      next: { revalidate: 900 },
      // cache: "no-store",
    });

    const data = await response.json();
    // console.log('Trying to fetch news from barpeta server :', data);
    return data || [];
  } catch (error) {
    console.error("Failed to fetch doctors:", error);
    return [];
  }
}

export async function FetchHospitalDetails() {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  try {
    const response = await fetch(`https://accf-api.cancercareinstituteguwahati.org/api/get-hospital/${HospitalID}`);
    const data = await response.json();
    // console.log('Trying to fetch HospitalDetails:', data);
    return data || [];
  } catch (error) {
    console.error("Failed to fetch doctors:", error);
    return [];
  }
}

export const FetchPartners = [{
  "id": 1,
  "partner_name": "Numaligarh Refinery Ltd",
  "partner_image": "/Partners/nrl-logo.jpg",
  "path": "https://www.nrl.co.in/"
},
{
  "id": 2,
  "partner_name": "Bharat Petroleum Corporation Ltd",
  "partner_image": "/Partners/BPCL-Logo.jpg",
  "path": "https://www.bharatpetroleum.in/"
},
{
  "id": 3,
  "partner_name": "Indian Oil Corporation Ltd",
  "partner_image": "/Partners/Indian_Oil_Logo.svg.png",
  "path": "https://iocl.com/"
},
{
  "id": 4,
  "partner_name": "Pfizer",
  "partner_image": "/Partners/Pfizer.png",
  "path": "https://www.pfizer.com/"
},
{
  "id": 5,
  "partner_name": "Induslnd Bank",
  "partner_image": "/Partners/indus3.png",
  "path": "https://www.indusind.com/"
},
{
  "id": 6,
  "partner_name": "D-Mart",
  "partner_image": "/Partners/DMart.png",
  "path": "https://www.dmartindia.com/"
},
{
  "id": 7,
  "partner_name": "Indus Towers",
  "partner_image": "/Partners/indus-towers.png",
  "path": "https://www.industowers.com/"
},
{
  "id": 8,
  "partner_name": "LIC Housing Finance Ltd",
  "partner_image": "/Partners/LIC_Housing_Finance_logo.png",
  "path": "https://www.lichousing.com/"
},
{
  "id": 9,
  "partner_name": "Mindray",
  "partner_image": "/Partners/mindray.jpg",
  "path": "https://www.mindray.com/"
},
{
  "id": 10,
  "partner_name": "Titan",
  "partner_image": "/Partners/titan.jpg",
  "path": "http://www.titan.co.in/"
},
{
  "id": 11,
  "partner_name": "Engineers India Ltd",
  "partner_image": "/Partners/EIL.png",
  "path": "https://engineersindia.com/"
},
{
  "id": 12,
  "partner_name": "Exim Bank",
  "partner_image": "/Partners/Exim.jpg",
  "path": "https://www.eximbankindia.in/"
},
{
  "id": 13,
  "partner_name": "Federal Bank",
  "partner_image": "/Partners/fedarel.png",
  "path": "https://www.federalbank.co.in/"
},
{
  "id": 14,
  "partner_name": "National Thermal Power Corporation",
  "partner_image": "/Partners/NTPC.jpg",
  "path": "https://ntpc.co.in/"
},
{
  "id": 15,
  "partner_name": "Brahmaputra Crackers and Polymers Ltd",
  "partner_image": "/Partners/BCPL.jpg",
  "path": "https://bcplonline.co.in/"
}]

export const AcademicsContents = [
  {
    "id": 1,
    "Title": "",
    "Description": "Nursing Fellowship Programme (NFP) - a first-of-its-kind in Assam is building a cadre of professionals trained to specialise in oncology nursing to deliver high-quality cancer care.\n\nThe nurses at cancer facilities have a challenging and delicate responsibility and it requires a novel and empathetic approach towards patients. There is also a specific psychosocial need of patients as well as their immediate caregivers. To equip nurses with specialised knowledge and skills in cancer care and treatment, it was essential to train nursing talent so that they can become champions in the cancer care delivery system.\n\nNFP programme was launched in July 2020, by the Tata Trusts and Assam Cancer Care Foundation (ACCF). The eleven-month long programme offers cancer nursing, treatment modalities, palliative care nursing, communication and counselling, and leadership lessons.",
    "ImagePath": "/nfp/nfp1.jpg"
  },
  {
    "id": 2,
    "Title": "",
    "Description": "The nurses undergo intensive training by in-house master trainers and facilitators; the Foundation's Medical Oncologists, Radiation Oncologists, Surgical Oncologists and Palliative Care doctors; other Cancer Care professionals from BBCI Guwahati, TMH Mumbai and TMC Kolkata. Senior nursing professionals from India and abroad are also involved in programme design and implementation.\n\nThe specialised oncology nursing team will help ACCF bridge a key human resource gap in the ten cancer hospitals it is establishing in Assam. The programme is not in the scheduled list of Indian Nursing Council and is basically an upskilling initiative.\n\nFor information on the programme contact\ninfo@accf.in",
    "ImagePath": "/nfp/nfp2.jpg"
  }
]

export const SocialInfra = [
  {
    "id": 1,
    "Title": "Accommodation ( housing/ hotels)",
    "Description": ["Long stay: Decent apartments at Dutta bhawan, like Luit View apartments, Jsb Ananda at pn road etc. and limited independent houses", "Short Stay: Good 3 star hotels like Hotel Tea County, Hotel Sarovar Portico, Tree Fern, Dibrugarh Club House, Raj Palace,Nataraj, Manohari Resorts etc."]
  },
  {
    "id": 2,
    "Title": "Education centres",
    "Description": ["Good primary and secondary schools like DPS, Don Bosco, Little Flower School, VKV Dibrugarh, St. Xavier's School, Siksha Valley, Salt Brook Academy etc."]
  },
  {
    "id": 3,
    "Title": "Health facilities",
    "Description": ["Good multispecialty Hospitals like Srishti Hospitals & Research Centre,Aditya, M.F. Hospital & Research Centre, Assam medical college etc."]
  },
  {
    "id": 4,
    "Title": "Air/ Road/ Rail Connectivity",
    "Description": ["Air: Domestic Airport at Mohanbari", "Rail: 2 railway stations, at Dibrugarh town & Banipur"]
  },
  {
    "id": 5,
    "Title": "Restaurants",
    "Description": ["Few fine dining restaurants like Yolo, KFC, Dominos, and good outing places like Food infinity, Atmosphere, El Dorado Bar & Restaurant, Hotel Garden Treat, May Flower, Bogibeel Eco Resort, Kanchunjunga (Floating Restaurant over Brahmaputra) etc."]
  },
  {
    "id": 6,
    "Title": "Malls/ Movie Halls",
    "Description": ["Good Shopping centres like Sohum,Junction mall, Reliance Trends, Reliance Digital, Reliance Smart, Pantaloons, westside, Vishal, HS plaza and entertainment centres like, Galleria Cinema, Dibrugarh Gymkhana Club etc."]
  }
]

export const LatestVideos = [{
  "id": 1,
  "Title": "Integrated Robotic Surgery Facility",
  "Image": "/SCI/LatestVideos/robotic.jpeg",
  "Link": "/SCI/LatestVideos/SCI-OT.mp4",
  "duration": 0
}, {
  "id": 2,
  "Title": "A new chapter in cancer healing beings",
  "Image": "/SCI/LatestVideos/tvc.png",
  "Link": "/SCI/LatestVideos/TVC HINDI.MP4",
  "duration": 0
},
{
  "id": 3,
  "Title": "State of the Art Cancer Hospital in Guwahati",
  "Image": "/SCI/LatestVideos/new_hospital.png",
  "Link": "https://www.youtube.com/watch?v=xziy2MCp95U",
  "duration": 0
}, {
  "id": 4,
  "Title": `Gaath Pe Dhyan "Breast cancer awareness"`,
  "Image": "/SCI/LatestVideos/sanjeev_kapoor.png",
  "Link": "/SCI/LatestVideos/GPD.mp4",
  "duration": 0
}, {
  "id": 5,
  "Title": "Hon’ble Prime Minister, Shri Narendra Modi Dedicates & Lays Foundation Stone of Cancer Hospitals in Assam",
  "Image": "/SCI/LatestVideos/Bihu_Video.png",
  "Link": "https://www.youtube.com/watch?v=ptmiMutYI6I",
  "duration": 0
},
]