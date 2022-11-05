import {NonSurgicalMedicalProvider} from "./employee_classes";
import {SurgicalMedicalProvider} from "./employee_classes";
import {PhysicalTherapist} from "./employee_classes";
import {OccupationalTherapist} from "./employee_classes";


const Surgical_Orthopedist_Vijay_Thangamani = new SurgicalMedicalProvider(
    "Vijay",
    "Thangamani",
    "MD",
    ["Elmhurst", "Westmont"],
    "https://vzn-dmg-prdb-asset-cdn.azureedge.net/je37F0W0X7al-uvbOJZTIlIXuWWMO8axLLCkDYKIjU0/gravity:sm/resize:fill:800:800:1:1/aHR0cHM6Ly9kbWd3ZWJwcm9kc3RvcmFnZS5ibG9iLmNvcmUud2luZG93cy5uZXQvZG1ncHJvZHdlYi9waHlzaWNpYW4taGVhZHNob3RzL3RoYW5nYW1hbmlfdmlqYXlfbWQtMDAxX3dlYi5KUEc=.webp",
    "https://www.dulyhealthandcare.com/physicians/vijay-thangamani-md",
    "Surgical Orthopedics",
    ["Sports Medicine", "Total Joint Replacement"],
    ["Hip", "Knee", "Shoulder"],
    ["Knee: ACL Reconstruction", "Hip: Hip Arthroscopy with Labral Repair", "Knee: Meniscal Repair", "Shoulder: Rotator Cuff Repair", "Shoulder: Labral Repair"]);

const Surgical_Orthopedist_William_Davis = new SurgicalMedicalProvider(
    "William",
    "Davis",
    "MD",
    ["Naperville", "Plainfield"],
    "https://vzn-dmg-prdb-asset-cdn.azureedge.net/FewZdUdQEvemVgV2Ca5B5BvHbsOvDNyNRvqGiGx4IgY/gravity:sm/resize:fill:800:800:1:1/aHR0cHM6Ly9kbWd3ZWJwcm9kc3RvcmFnZS5ibG9iLmNvcmUud2luZG93cy5uZXQvZG1ncHJvZHdlYi9waHlzaWNpYW4taGVhZHNob3RzL2RhdmlzX3dpbGxpYW1fbWRfb3J0aG9zdXJnZW9uLTAwMXdlYi5qcGc=.webp",
    "https://www.dulyhealthandcare.com/physicians/william-davis-md",
    "Surgical Orthopedics",
    ["Sports Medicine", "Total Joint Replacement"],
    ["Hip", "Knee", "Shoulder"],
    ["Knee: ACL Reconstruction", "Hip: Hip Arthroscopy with Labral Repair", "Knee: Meniscal Repair", "Shoulder: Rotator Cuff Repair", "Shoulder: Labral Repair"]);

const Surgical_Orthopedist_Gregory_Dairyko = new SurgicalMedicalProvider(
    "Gregory",
    "Dairyko",
    "MD",
    ["Lombard", "Westmont"],
    "https://vzn-dmg-prdb-asset-cdn.azureedge.net/6Bl3ruYOwiJ_fZl5j7kvH9weoqqyUz1EGC0Rgeju9s4/gravity:sm/resize:fill:800:800:1:1/aHR0cHM6Ly9kbWd3ZWJwcm9kc3RvcmFnZS5ibG9iLmNvcmUud2luZG93cy5uZXQvZG1ncHJvZHdlYi9waHlzaWNpYW4taGVhZHNob3RzL0RhaXJ5a29fR3JlZ29yeV9PcnRob18xNTk3X3dlYi5KUEc=.webp",
    "https://www.dulyhealthandcare.com/physicians/gregory-dairyko-md",
    "Surgical Orthopedics",
    ["Sports Medicine"],
    ["Hip", "Knee", "Shoulder"],
    ["Ankle: Achilles Repair", "Knee: ACL Reconstruction", "Knee: Meniscal Repair", "Shoulder: Rotator Cuff Repair", "Shoulder: Labral Repair"],
);

const Surgical_Orthopedist_Anthony_Romeo = new SurgicalMedicalProvider(
    "Anthony",
    "Romeo",
    "MD",
    ["Elmhurst", "Westmont"],
    "https://vzn-dmg-prdb-asset-cdn.azureedge.net/ZEExeimTp-dpUNk2e0Yu0q2E2is8IyAWO3wca6a6sgE/gravity:sm/resize:fill:800:800:1:1/aHR0cHM6Ly9kbWd3ZWJwcm9kc3RvcmFnZS5ibG9iLmNvcmUud2luZG93cy5uZXQvZG1ncHJvZHdlYi9waHlzaWNpYW4taGVhZHNob3RzL3JvbWVvX2FudGhvbnlfbWQtMDAxX3dlYi0yLmpwZw==.webp",
    "https://www.dulyhealthandcare.com/physicians/anthony-romeo-md",
    "Surgical Orthopedics",
    ["Sports Medicine", "Total Joint Replacement"],
    ["Elbow", "Shoulder"],
    ["Shoulder: Labral Repair", "Shoulder: Total Shoulder Replacement", "Elbow: UCL Repair"]);


const Surgical_Orthopedist_Marc_Asselmeier = new SurgicalMedicalProvider(
    "Marc",
    "Asselmeier",
    "MD",
    ["Glen Ellyn", "Naperville"],
    "https://vzn-dmg-prdb-asset-cdn.azureedge.net/ciIHtEZ1pBxw6OiNUTN_t9Yl-jnJympZMBZjGFTPtjI/gravity:sm/resize:fill:800:800:1:1/aHR0cHM6Ly9kbWd3ZWJwcm9kc3RvcmFnZS5ibG9iLmNvcmUud2luZG93cy5uZXQvZG1ncHJvZHdlYi9waHlzaWNpYW4taGVhZHNob3RzL0Fzc2VsbWVpZXJfTWFyY19NRF9PcnRoby0wMTgyX3dlYi5KUEc=.webp",
    "https://www.dulyhealthandcare.com/physicians/marc-a-asselmeier-md",
    "Surgical Orthopedics",
    ["Sports Medicine", "Total Joint Replacement"],
    ["Knee", "Shoulder"],
    ["Knee: ACL Reconstruction", "Knee: Meniscal Repair", "Knee: PCL Reconstruction", "Shoulder: Rotator Cuff Repair", "Shoulder: Labral Repair", "Knee: Total Knee Replacement", "Shoulder: Total Shoulder Replacement"]);


const Surgical_Orthopedist_Brian_Ward = new SurgicalMedicalProvider(
    "Brian",
    "Ward",
    "MD",
    ["Bloomingdale", "Glen Ellyn"],
    "https://vzn-dmg-prdb-asset-cdn.azureedge.net/eqyvp3Tx0XxslnbWoyJaMgFSCWzCRuGjXTA6XNb_YGQ/gravity:sm/resize:fill:800:800:1:1/aHR0cHM6Ly9kbWd3ZWJwcm9kc3RvcmFnZS5ibG9iLmNvcmUud2luZG93cy5uZXQvZG1ncHJvZHdlYi9waHlzaWNpYW4taGVhZHNob3RzL1dhcmRfQnJpYW5fT3J0aG8tMDEwX3dlYi5KUEc=.webp",
    "https://www.dulyhealthandcare.com/physicians/brian-ward-md-mhs",
    "Surgical Orthopedics",
    ["Sports Medicine"],
    ["Elbow", "Hip", "Knee", "Shoulder"],
    ["Knee: ACL Reconstruction", "Hip: Hip Arthroscopy with Labral Repair", "Knee: Meniscal Repair", "Knee: PCL Reconstruction", "Shoulder: Rotator Cuff Repair", "Shoulder: Labral Repair", "Elbow: UCL Repair"]);

const Surgical_Orthopedist_Michael_Murphy = new SurgicalMedicalProvider(
    "Michael",
    "Murphy",
    "DO",
    ["Joliet"],
    "https://vzn-dmg-prdb-asset-cdn.azureedge.net/DGSIGiPi6Hxc8MWEVeeGE0fojNr7QP76GseK3tK0NHk/gravity:sm/resize:fill:800:800:1:1/aHR0cHM6Ly9kbWd3ZWJwcm9kc3RvcmFnZS5ibG9iLmNvcmUud2luZG93cy5uZXQvZG1ncHJvZHdlYi9waHlzaWNpYW4taGVhZHNob3RzL211cnBoeV9taWNoYWVsX21kLTAwMS1yZXRvdWNoZWRfd2ViLmpwZw==.webp",
    "https://www.dulyhealthandcare.com/physicians/michael-p-murphy-do",
    "Surgical Orthopedics",
    ["Sports Medicine", "Total Joint Replacement"],
    ["Ankle", "Elbow", "Foot", "Hand", "Hip", "Knee", "Shoulder", "Wrist"],
    ["Knee: ACL Reconstruction", "Hip: Hip Arthroscopy with Labral Repair", "Knee: Meniscal Repair", "Knee: PCL Reconstruction", "Shoulder: Rotator Cuff Repair", "Shoulder: Labral Repair", "Hip: Total Hip Replacement", "Knee: Total Knee Replacement", "Shoulder: Total Shoulder Replacement", "Elbow: UCL Repair"]
);

const Surgical_Orthopedist_Brian_Murphy = new SurgicalMedicalProvider(
    "Brian",
    "Murphy",
    "MD",
    ["Naperville"],
    "https://vzn-dmg-prdb-asset-cdn.azureedge.net/0F0Psuwh-n-GsLnX16Qn0IqM3Bk1avcOgGt7xIVdnPk/gravity:sm/resize:fill:800:800:1:1/aHR0cHM6Ly9kbWd3ZWJwcm9kc3RvcmFnZS5ibG9iLmNvcmUud2luZG93cy5uZXQvZG1ncHJvZHdlYi9waHlzaWNpYW4taGVhZHNob3RzL011cnBoeV9Ccmlhbl9PcnRoby0xNF93ZWIuSlBH.webp",
    "https://www.dulyhealthandcare.com/physicians/brian-murphy-md",
    "Surgical Orthopedics",
    ["Sports Medicine"],
    ["Elbow", "Hand", "Shoulder"],
    ["Hand: Finger Surgery", "Hand: Hand Surgery", "Shoulder: Rotator Cuff Repair", "Shoulder: Labral Repair", "Elbow: UCL Repair"],
);

const Surgical_Orthopedist_Justin_Kyhos = new SurgicalMedicalProvider(
    "Justin",
    "Kyhos",
    "MD",
    ["Naperville"],
    'https://vzn-dmg-prdb-asset-cdn.azureedge.net/prS-xS_H_rTYJ_NpLNNbiu2d4B5WFLOhMsZrh6jeDec/gravity:sm/resize:fill:800:800:1:1/aHR0cHM6Ly9kbWd3ZWJwcm9kc3RvcmFnZS5ibG9iLmNvcmUud2luZG93cy5uZXQvZG1ncHJvZHdlYi9waHlzaWNpYW4taGVhZHNob3RzL0p1c3Rpbl9LeWhvc19NRF9XZWIuanBn.webp',
    'https://www.dulyhealthandcare.com/physicians/justin-kyhos-md',
    "Surgical Orthopedics",
    ["Sports Medicine"],
    ["Ankle", "Elbow", "Knee", "Shoulder", "Wrist"],
    ["Ankle: Achilles Repair", "Knee: ACL Reconstruction", "Knee: Meniscal Repair", "Shoulder: Rotator Cuff Repair", "Shoulder: Labral Repair"]);

const Surgical_Orthopedist_Andrew_Kim = new SurgicalMedicalProvider(
    "Andrew",
    "Kim",
    "MD",
    ["Naperville"],
    'https://vzn-dmg-prdb-asset-cdn.azureedge.net/1X9eUS3LorZjK9C-pY0ea9fXIDfcCWfx4Q7h_hQMNDE/gravity:sm/resize:fill:800:800:1:1/aHR0cHM6Ly9kbWd3ZWJwcm9kc3RvcmFnZS5ibG9iLmNvcmUud2luZG93cy5uZXQvZG1ncHJvZHdlYi9waHlzaWNpYW4taGVhZHNob3RzL2tpbV9hbmRyZXdfbWRfb3J0aG8tMDAxX3dlYi5KUEc=.webp',
    'https://www.dulyhealthandcare.com/physicians/andrew-kim-md',
    "Surgical Orthopedics",
    ["Total Joint Replacement"],
    ["Hip", "Knee"],
    ['Hip: Total Hip Replacement', 'Knee: Total Knee Replacement']);

const Surgical_Orthopedist_Salman_Chaudri = new SurgicalMedicalProvider(
    "Salman",
    "Chaudri",
    "DO",
    ['Oak Lawn'],
    'https://vzn-dmg-prdb-asset-cdn.azureedge.net/E9n_KrOBbWa1D6o3bI9hHn84O7yB9GzLUvWTUmBFP90/gravity:sm/resize:fill:800:800:1:1/aHR0cHM6Ly9kbWd3ZWJwcm9kc3RvcmFnZS5ibG9iLmNvcmUud2luZG93cy5uZXQvZG1ncHJvZHdlYi9waHlzaWNpYW4taGVhZHNob3RzL0NoYXVkcmlfU2FsbWFuX0RPX0ZBT0FPX09ydGhvLTk2MDdfd2ViLkpQRw==.webp',
    'https://www.dulyhealthandcare.com/physicians/salman-chaudri-do-faoao',
    "Surgical Orthopedics",
    ["Sports Medicine", "Total Joint Replacement"],
    ["Knee", "Shoulder"],
    ['Knee: ACL Reconstruction', 'Knee: Meniscal Repair', 'Knee: PCL Reconstruction', 'Knee: Total Knee Replacement', 'Shoulder: Labral Repair', 'Shoulder: Rotator Cuff Repair', 'Shoulder: Total Shoulder Replacement']);


const Non_Surgical_Orthopedist_Julio_Gonzalez = new NonSurgicalMedicalProvider(
    "Julio",
    "Gonzalez",
    "MD",
    ["Naperville", "Glen Ellyn"],
    "https://vzn-dmg-prdb-asset-cdn.azureedge.net/5w5e_V7K-Mx60DWAZ5CCK6cADnbuHqhS8yCloh_Nkg4/gravity:sm/resize:fill:800:800:1:1/aHR0cHM6Ly9kbWd3ZWJwcm9kc3RvcmFnZS5ibG9iLmNvcmUud2luZG93cy5uZXQvZG1ncHJvZHdlYi9waHlzaWNpYW4taGVhZHNob3RzL0dvbnphbGV6X0p1bGlvX01EXzg3NDNfd2ViLkpQRw==.webp",
    "https://www.dulyhealthandcare.com/physicians/julio-c-gonzalez-md",
    "Non-surgical Orthopedics",
    ["Sports Medicine"],
    ["Cortisone Injection", "Fracture Care", "Hyaluronic Acid (Viscosupplementation)", "Joint Injection"]);


const Non_Surgical_Orthopedist_Ima_Jonkheer = new NonSurgicalMedicalProvider(
    "Ima",
    "Jonkheer",
    "DO",
    ["Naperville", "Glen Ellyn"],
    "https://vzn-dmg-prdb-asset-cdn.azureedge.net/xzQ1_GvswEr47aqSac7kCF9hOrzuMXPCH90YunyDbh8/gravity:sm/resize:fill:800:800:1:1/aHR0cHM6Ly9kbWd3ZWJwcm9kc3RvcmFnZS5ibG9iLmNvcmUud2luZG93cy5uZXQvZG1ncHJvZHdlYi9waHlzaWNpYW4taGVhZHNob3RzL0pvbmtlZXJfSW1hX0RvX09ydGhvX1dlYl8yMDIxLTA5LTEzLTE5NTk1NV9ja3F0LmpwZw==.webp",
    "https://www.dulyhealthandcare.com/physicians/ima-jonkheer-do-ms",
    "Non-surgical Orthopedics",
    ["Sports Medicine"],
    ["Cortisone Injection", "Fracture Care", "Hyaluronic Acid (Viscosupplementation)", "Joint Injection"]);

const Non_Surgical_Orthopedist_Ryan_Taylor= new NonSurgicalMedicalProvider(
    "Ryan",
    "Taylor",
    "DO",
    ["Westmont"],
    "https://vzn-dmg-prdb-asset-cdn.azureedge.net/WljknqeNUFbygcpBlpX477mJFmxQEuoe0qcXX0Qs8-w/gravity:sm/resize:fill:800:800:1:1/aHR0cHM6Ly9kbWd3ZWJwcm9kc3RvcmFnZS5ibG9iLmNvcmUud2luZG93cy5uZXQvZG1ncHJvZHdlYi9waHlzaWNpYW4taGVhZHNob3RzL3RheWxvcl9yeWFuX2RvX29ydGhvXzAwMS1yZXRvdWNoZWRfd2ViLmpwZw==.webp",
    "https://www.dulyhealthandcare.com/physicians/ryan-taylor-do",
    "Non-surgical Orthopedics",
    ["Sports Medicine"],
    ["Cortisone Injection", "Fracture Care", "Hyaluronic Acid (Viscosupplementation)", "Joint Injection"]);

const Non_Surgical_Orthopedist_Michael_Coffel = new NonSurgicalMedicalProvider(
    "Michael",
    "Coffel",
    "APN",
    ["Naperville", "Glen Ellyn"],
    'https://vzn-dmg-prdb-asset-cdn.azureedge.net/oF0jZGsSjtcU-fZRTb5OusWkQh-TStTGf382Ub2G0YM/gravity:sm/resize:fill:800:800:1:1/aHR0cHM6Ly9kbWd3ZWJwcm9kc3RvcmFnZS5ibG9iLmNvcmUud2luZG93cy5uZXQvZG1ncHJvZHdlYi9waHlzaWNpYW4taGVhZHNob3RzL0NvZmZlbF9NaWNoYWVsX0FQUk5fRk5QLUJDXzI2MTdfd2ViLkpQRw==.webp',
    'https://www.dulyhealthandcare.com/physicians/michael-coffel-apn',
    "Non-surgical Orthopedics",
    ["Sports Medicine"],
    ["Cortisone Injection", "Fracture Care", "Hyaluronic Acid (Viscosupplementation)", "Joint Injection"]);

const Non_Surgical_Orthopedist_Ryan_Schneider = new NonSurgicalMedicalProvider(
    "Ryan",
    "Schneider",
    "PA-C",
    ["Elmhurst", "Westmont"],
    'https://vzn-dmg-prdb-asset-cdn.azureedge.net/m-RQItn-ZlZtzMU3649uwm_EtJ0V4kz0XULalzrCRqM/gravity:sm/resize:fill:800:800:1:1/aHR0cHM6Ly9kbWd3ZWJwcm9kc3RvcmFnZS5ibG9iLmNvcmUud2luZG93cy5uZXQvZG1ncHJvZHdlYi9waHlzaWNpYW4taGVhZHNob3RzL1NjaG5laWRlcl9SeWFuX1BBLUNfQVRDX1dlYi5qcGc=.webp',
    'https://www.dulyhealthandcare.com/physicians/ryan-schneider-pa-c',
    "Non-surgical Orthopedics",
    ["Sports Medicine"],
    ["Cortisone Injection", "Fracture Care", "Hyaluronic Acid (Viscosupplementation)", "Joint Injection"]);

const Non_Surgical_Orthopedist_Danielle_Brandonisio = new NonSurgicalMedicalProvider(
    "Danielle",
    "Brandonisio",
    "FNP-BC",
    ['Elmhurst', 'Lombard', 'Westmont'],
    'https://vzn-dmg-prdb-asset-cdn.azureedge.net/CJQNLTw8rdySxx9s0HTb7NEFqKPnoaIWlGtwVoo8ho0/gravity:sm/resize:fill:800:800:1:1/aHR0cHM6Ly9kbWd3ZWJwcm9kc3RvcmFnZS5ibG9iLmNvcmUud2luZG93cy5uZXQvZG1ncHJvZHdlYi9waHlzaWNpYW4taGVhZHNob3RzL0JyYW5kb25pc2lvX0RhbmllbGxlX0ZOUC1CQ19PcnRoby05NzMxX3dlYi5KUEc=.webp',
    'https://www.dulyhealthandcare.com/physicians/danielle-brandonisio-fnp-bc',
    "Non-surgical Orthopedics",
    ["Sports Medicine"],
    ["Cortisone Injection", "Fracture Care", "Hyaluronic Acid (Viscosupplementation)", "Joint Injection"]);

const Non_Surgical_Orthopedist_Taylor_Comstock = new NonSurgicalMedicalProvider(
    "Taylor",
    "Comstock",
    "PA-C",
    ['Bloomingdale', 'Naperville'],
    'https://vzn-dmg-prdb-asset-cdn.azureedge.net/Ovi7s4KpOCUtPteHa56P1kDdXcyvH5Usyu3Hsl0wQ08/gravity:sm/resize:fill:800:800:1:1/aHR0cHM6Ly9kbWd3ZWJwcm9kc3RvcmFnZS5ibG9iLmNvcmUud2luZG93cy5uZXQvZG1ncHJvZHdlYi9waHlzaWNpYW4taGVhZHNob3RzL2NvbXN0b2NrX3RheWxvcl9wYV9vcnRoby0wMDFfd2ViLkpQRw==.webp',
    'https://www.dulyhealthandcare.com/physicians/taylor-comstock-pa-c',
    "Non-surgical Orthopedics",
    ["Sports Medicine"],
    ["Cortisone Injection", "Fracture Care", "Hyaluronic Acid (Viscosupplementation)", "Joint Injection"]);

const Non_Surgical_Orthopedist_Shawn_Patel = new NonSurgicalMedicalProvider(
    "Shawn",
    "Patel",
    "MD",
    ['Lockport'],
    'https://vzn-dmg-prdb-asset-cdn.azureedge.net/g-08WdZEZo4_vYvgIrpw3V75yGMQMJAxlDxx6TdFY34/gravity:sm/resize:fill:800:800:1:1/aHR0cHM6Ly9kbWd3ZWJwcm9kc3RvcmFnZS5ibG9iLmNvcmUud2luZG93cy5uZXQvZG1ncHJvZHdlYi9waHlzaWNpYW4taGVhZHNob3RzL3BhdGVsX3NoYXduX21kX29ydGhvcGVkaWNzLTAwMV93ZWIuSlBH.webp',
    'https://www.dulyhealthandcare.com/physicians/shawn-patel-md',
    "Non-surgical Orthopedics",
    ["Sports Medicine"],
    ["Cortisone Injection", "Fracture Care", "Hyaluronic Acid (Viscosupplementation)", "Joint Injection"]);

const Surgical_Spine_Steven_Mather = new SurgicalMedicalProvider(
    "Steven",
    "Mather",
    "MD",
    ["Westmont", "Lockport"],
    "https://vzn-dmg-prdb-asset-cdn.azureedge.net/jggWOtjs5P1pqcki2hgI0pGL45rfGsYoSq83VMQn4Is/gravity:sm/resize:fill:800:800:1:1/aHR0cHM6Ly9kbWd3ZWJwcm9kc3RvcmFnZS5ibG9iLmNvcmUud2luZG93cy5uZXQvZG1ncHJvZHdlYi9waHlzaWNpYW4taGVhZHNob3RzL21hdGhlcl9zdGV2ZV9tZF9zcGluZS0wMDFfd2ViLkpQRw==.webp",
    "https://www.dulyhealthandcare.com/physicians/steven-mather-md",
    "Surgical Spine Orthopedics",
    ["Spine Surgery"],
    ["Spine"],
    ["Microdiscectomy", "Spinal Fusion"]);

const Surgical_Spine_Ronjon_Paul = new SurgicalMedicalProvider(
    "Ronjon",
    "Paul",
    "MD",
    ["Naperville"],
    "https://vzn-dmg-prdb-asset-cdn.azureedge.net/IcAFA9MipqdzY30X7wN4hngR7nai6Rz6vYJuY6OsxmM/gravity:sm/resize:fill:800:800:1:1/aHR0cHM6Ly9kbWd3ZWJwcm9kc3RvcmFnZS5ibG9iLmNvcmUud2luZG93cy5uZXQvZG1ncHJvZHdlYi9waHlzaWNpYW4taGVhZHNob3RzL1BhdWxfUm9uam9uX01EXzM3MzBfV2ViLmpwZw==.webp",
    "https://www.dulyhealthandcare.com/physicians/p-ronjon-paul-md",
    "Surgical Spine Orthopedics",
    ["Spine Surgery"],
    ["Spine"],
    ["Microdiscectomy", "Spinal Fusion"]);

const Surgical_Spine_Islam_Elboghdady = new SurgicalMedicalProvider(
    "Islam",
    "Elboghdady",
    "MD",
    ["Bloomingdale", "Naperville"],
    "https://vzn-dmg-prdb-asset-cdn.azureedge.net/HuIVG50c11ZrJLLBAsIat3r720K4KLlsEIVXEV6Jz14/gravity:sm/resize:fill:800:800:1:1/aHR0cHM6Ly9kbWd3ZWJwcm9kc3RvcmFnZS5ibG9iLmNvcmUud2luZG93cy5uZXQvZG1ncHJvZHdlYi9waHlzaWNpYW4taGVhZHNob3RzL2VsYm9naGFkYWR5X2lzbGFtX21kX3NwaW5lc3VyZ2VyeV8wMDEtcmV0b3VjaGVkX3dlYi5qcGc=.webp",
    "https://www.dulyhealthandcare.com/physicians/islam-elboghdady-md",
    "Surgical Spine Orthopedics",
    ["Spine Surgery"],
    ["Spine"],
    ["Microdiscectomy", "Spinal Fusion"]);

const Non_Surgical_Spine_Kevin_Wright = new NonSurgicalMedicalProvider(
    "Kevin",
    "Wright",
    "PA-C",
    ["Elmhurst", "Lombard", "Naperville"],
    "https://vzn-dmg-prdb-asset-cdn.azureedge.net/tIvOW2CKzpKLdB_fii2dqujZ4Nxb2An43qsDNm9JuMw/gravity:sm/resize:fill:800:800:1:1/aHR0cHM6Ly9kbWd3ZWJwcm9kc3RvcmFnZS5ibG9iLmNvcmUud2luZG93cy5uZXQvZG1ncHJvZHdlYi9waHlzaWNpYW4taGVhZHNob3RzL3dyaWdodF9rZXZpbl9wYS1jLTAwMV93ZWIuanBn.webp",
    "https://www.dulyhealthandcare.com/physicians/kevin-wright-pa-c",
    "Non-surgical Spine Orthopedics",
    ["Non-surgical Spine"],
    []);

const Non_Surgical_Spine_Rebecca_Michna = new NonSurgicalMedicalProvider(
    "Rebecca",
    "Michna",
    "PA-C",
    ["Elmhurst", "Bloomingdale", "Naperville"],
    "https://vzn-dmg-prdb-asset-cdn.azureedge.net/Dop2NgfO70_5Garxc92FSbGQe0uToEhXd4P2cYu1F8c/gravity:sm/resize:fill:800:800:1:1/aHR0cHM6Ly9kbWd3ZWJwcm9kc3RvcmFnZS5ibG9iLmNvcmUud2luZG93cy5uZXQvZG1ncHJvZHdlYi9waHlzaWNpYW4taGVhZHNob3RzL21pY2huYV9yZWJlY2NhX3BhLWMtMDAxX3dlYi5KUEc=.webp",
    "https://www.dulyhealthandcare.com/physicians/rebecca-michna-pa-c",
    "Non-surgical Spine Orthopedics",
    ["Non-surgical Spine"],
    []);

const Non_Surgical_Spine_Adam_Mollsen = new NonSurgicalMedicalProvider(
    "Adam",
    "Mollsen",
    "PA-C",
    ["Elmhurst", "Lombard", "Naperville"],
    "https://vzn-dmg-prdb-asset-cdn.azureedge.net/KKov3dsbkK81bxRXb9tnHmJLe8OHji08AwkGe9z1wKU/gravity:sm/resize:fill:800:800:1:1/aHR0cHM6Ly9kbWd3ZWJwcm9kc3RvcmFnZS5ibG9iLmNvcmUud2luZG93cy5uZXQvZG1ncHJvZHdlYi9waHlzaWNpYW4taGVhZHNob3RzL01vbGxzZW5fQWRhbV9QQV8yNDE4X3dlYi5KUEc=.webp",
    "https://www.dulyhealthandcare.com/physicians/adam-mollsen-pa-c",
    "Non-surgical Spine Orthopedics",
    ["Non-surgical Spine"],
    []);

const Non_Surgical_Spine_Sienna_Kotch = new NonSurgicalMedicalProvider(
    "Sienna",
    "Kotch",
    "PA-C",
    ['Elmhurst', 'Lombard'],
    'https://vzn-dmg-prdb-asset-cdn.azureedge.net/k4YEZLwaN8zEKflo1uyYQC38ctFoc2H_HLDN26SouR8/gravity:sm/resize:fill:800:800:1:1/aHR0cHM6Ly9kbWd3ZWJwcm9kc3RvcmFnZS5ibG9iLmNvcmUud2luZG93cy5uZXQvZG1ncHJvZHdlYi9waHlzaWNpYW4taGVhZHNob3RzL0tvdGNoX1NpZW5uYV9QQV9DX09ydGhvX1dlYi5qcGc=.webp',
    'https://www.dulyhealthandcare.com/physicians/sienna-kotch-pa-c',
    'Non-surgical Spine Orthopedics',
    ['Non-surgical Spine'],
    []);

const Non_Surgical_Spine_Kelly_Perillo = new NonSurgicalMedicalProvider(
    "Kelly",
    "Perillo",
    "PA-C",
    ['Westmont'],
    'https://vzn-dmg-prdb-asset-cdn.azureedge.net/j4fIXdNZxb5_-cduPymn75Rd7SJpUZAnulEVAC6CNGQ/gravity:sm/resize:fill:800:800:1:1/aHR0cHM6Ly9kbWd3ZWJwcm9kc3RvcmFnZS5ibG9iLmNvcmUud2luZG93cy5uZXQvZG1ncHJvZHdlYi9waHlzaWNpYW4taGVhZHNob3RzL1BlcmlsbG9fS2VsbHlfUEEtQ19TcGluZVN1cmdlcnlfNzY4Nl93ZWIuSlBH.webp',
    'https://www.dulyhealthandcare.com/physicians/kelly-perillo-pa-c',
    'Non-surgical Spine Orthopedics',
    ['Non-surgical Spine'],
    []);

const Surgical_Cardiologist_Evans_Pappas = new SurgicalMedicalProvider(
    "Evans",
    "Pappas",
    "MD",
    ["Lisle", "Naperville"],
    "https://vzn-dmg-prdb-asset-cdn.azureedge.net/o-_2mEq76ilsv_CgccKhtbKeHPIEWM1Cq6KBfAF3_1o/gravity:sm/resize:fill:800:800:1:1/aHR0cHM6Ly9kbWd3ZWJwcm9kc3RvcmFnZS5ibG9iLmNvcmUud2luZG93cy5uZXQvZG1ncHJvZHdlYi9waHlzaWNpYW4taGVhZHNob3RzL1BhcHBhc19FdmFuc19NRF84NTkzX3dlYi5KUEc=.webp",
    "https://www.dulyhealthandcare.com/physicians/evans-p-pappas-md-facc",
    "Surgical Cardiology",
    ["General adult cardiologists", "Cardiac imaging specialists", "Electrophysiologists", "Adult congenital heart specialists", "Heart failure specialists", "Heart bypass surgery", "Heart valve surgery"],
    ["Heart"],
    ["Heart bypass surgery", "Heart valve surgery", "Heart failure surgery"]);

const Surgical_Cardiologist_Jong_Yoon_Yi = new SurgicalMedicalProvider(
    "Jong Yoon",
    "Yi",
    "MD",
    ["Joliet"],
    "https://vzn-dmg-prdb-asset-cdn.azureedge.net/5FcnNvlXhqNcHYvodkNaXhuzxnZubvBhYOtamClag4c/gravity:sm/resize:fill:800:800:1:1/aHR0cHM6Ly9kbWd3ZWJwcm9kc3RvcmFnZS5ibG9iLmNvcmUud2luZG93cy5uZXQvZG1ncHJvZHdlYi9waHlzaWNpYW4taGVhZHNob3RzL1lpX0pvbmdfWW9vbl9NRF9DYXJkaW9sb2d5LTk4ODJfd2ViLkpQRw==.webp",
    "https://www.dulyhealthandcare.com/physicians/jong-yoon-yi-md",
    "Surgical Cardiology",
    ["General adult cardiologists", "Cardiac imaging specialists", "Electrophysiologists", "Adult congenital heart specialists", "Heart failure specialists", "Heart bypass surgery", "Heart valve surgery"],
    ["Heart"],
    ["Heart bypass surgery", "Heart valve surgery", "Heart failure surgery"]);


const Surgical_Cardiologist_James_Carroll = new SurgicalMedicalProvider(
    "James",
    "Carroll",
    "MD",
    ["Lisle", "Winfield"],
    "https://vzn-dmg-prdb-asset-cdn.azureedge.net/D41r1Acn-hyj4FOiWHJpAOFfFqVPwW8XkRUli4CTpX4/gravity:sm/resize:fill:800:800:1:1/aHR0cHM6Ly9kbWd3ZWJwcm9kc3RvcmFnZS5ibG9iLmNvcmUud2luZG93cy5uZXQvZG1ncHJvZHdlYi9waHlzaWNpYW4taGVhZHNob3RzL0NhcnJvbGxfSmFtZXNfTURfODU2MV93ZWIuSlBH.webp",
    "https://www.dulyhealthandcare.com/physicians/james-r-carroll-md",
    "Surgical Cardiology",
    ["General adult cardiologists", "Cardiac imaging specialists", "Electrophysiologists", "Adult congenital heart specialists", "Heart failure specialists", "Heart bypass surgery", "Heart valve surgery"],
    ["Heart"],
    ["Heart bypass surgery", "Heart valve surgery", "Heart failure surgery"]);

const Surgical_Cardiologist_Syed_Hasan = new SurgicalMedicalProvider(
    "Syed",
    "Hasan",
    "MD",
    ['Elgin'],
    'https://vzn-dmg-prdb-asset-cdn.azureedge.net/DIJJzy8BJ3MdaTI0tCHhkgiQ1C6AcrKpoRsPU0v1hos/gravity:sm/resize:fill:800:800:1:1/aHR0cHM6Ly9kbWd3ZWJwcm9kc3RvcmFnZS5ibG9iLmNvcmUud2luZG93cy5uZXQvZG1ncHJvZHdlYi9waHlzaWNpYW4taGVhZHNob3RzL2hhc2FuX3N5ZWRfbWQtMDAxLXJldG91Y2hlZF93ZWIuanBn.webp',
    'https://www.dulyhealthandcare.com/physicians/syed-hasan-md',
    'Surgical Cardiology',
    ["General adult cardiologists", "Cardiac imaging specialists", "Electrophysiologists", "Adult congenital heart specialists", "Heart failure specialists", "Heart bypass surgery", "Heart valve surgery"],
    ["Heart"],
    ["Heart bypass surgery", "Heart valve surgery", "Heart failure surgery"]);

const Non_Surgical_Cardiologist_Michael_Green = new NonSurgicalMedicalProvider(
    "Michael",
    "Green",
    "PA-C",
    ["Westmont"],
    "https://vzn-dmg-prdb-asset-cdn.azureedge.net/NpQot-w12zBUXKarW4xJYuAiV-jeZYbXyFnPX1NjCCw/gravity:sm/resize:fill:800:800:1:1/aHR0cHM6Ly9kbWd3ZWJwcm9kc3RvcmFnZS5ibG9iLmNvcmUud2luZG93cy5uZXQvZG1ncHJvZHdlYi9waHlzaWNpYW4taGVhZHNob3RzL2dyZWVuX21pY2hhZWxfcGEtMDAxX3dlYi5qcGc=.webp",
    "https://www.dulyhealthandcare.com/physicians/michael-green-pa-c",
    "Non-surgical Cardiology",
    ["General adult cardiologists", "Cardiac imaging specialists", "Electrophysiologists", "Adult congenital heart specialists"],
    []);

const Non_Surgical_Cardiologist_Natalie_Hill = new NonSurgicalMedicalProvider(
    "Natalie",
    "Hill",
    "NP-C",
    ["Naperville"],
    "https://vzn-dmg-prdb-asset-cdn.azureedge.net/-EtUjblX3dPX9WvGETc09xEO6oYbpOXyhPaZkSofPT8/gravity:sm/resize:fill:800:800:1:1/aHR0cHM6Ly9kbWd3ZWJwcm9kc3RvcmFnZS5ibG9iLmNvcmUud2luZG93cy5uZXQvZG1ncHJvZHdlYi9waHlzaWNpYW4taGVhZHNob3RzL0hpbGxfTmF0YWxpZV9OUF84MjYxX3dlYi5KUEc=.webp",
    "https://www.dulyhealthandcare.com/physicians/natalie-hill-np-c",
    "Non-surgical Cardiology",
    ["General adult cardiologists", "Cardiac imaging specialists", "Electrophysiologists", "Adult congenital heart specialists"],
    []);

const Non_Surgical_Cardiologist_Lindsay_Thorgesen = new NonSurgicalMedicalProvider(
    "Lindsay",
    "Thorgesen",
    "FNP-BC",
    ["New Lenox", "Joliet", "Oak Lawn"],
    "https://vzn-dmg-prdb-asset-cdn.azureedge.net/677l2uJN8pvlbEznFbWVi_PvwSRy8mTaJSwlYcpUrsM/gravity:sm/resize:fill:800:800:1:1/aHR0cHM6Ly9kbWd3ZWJwcm9kc3RvcmFnZS5ibG9iLmNvcmUud2luZG93cy5uZXQvZG1ncHJvZHdlYi9waHlzaWNpYW4taGVhZHNob3RzL1Rob3JnZXNlbl9MaW5kc2F5X0FQUk4tRk5QLUJDXzUxMjNfd2ViLkpQRw==.webp",
    "https://www.dulyhealthandcare.com/physicians/lindsay-thorgensen-fnp-bc",
    "Non-surgical Cardiology",
    ["General adult cardiologists", "Cardiac imaging specialists", "Electrophysiologists", "Adult congenital heart specialists"],
    []);

const Physical_Therapist_Dave_Pratt = new PhysicalTherapist(
    "David",
    "Pratt",
    "DPT",
    ["Naperville"],
    "https://vzn-dmg-prdb-asset-cdn.azureedge.net/0uDYH6IRanfbYdSY1tPuVEu_qt_jkbQBztzgxqV3OAw/gravity:sm/resize:fill:800:800:1:1/aHR0cHM6Ly9kbWd3ZWJwcm9kc3RvcmFnZS5ibG9iLmNvcmUud2luZG93cy5uZXQvZG1ncHJvZHdlYi9waHlzaWNpYW4taGVhZHNob3RzL3ByYXR0X2RhdmVfcHQtMDAxX3dlYi5KUEc=.webp",
    "https://www.dulyhealthandcare.com/physicians/david-pratt-dpt-ocs",
    ["Sports Medicine"],
    ["Graston", "Dry Needling"]);

const Physical_Therapist_Jimmy_Enomoto = new PhysicalTherapist(
    "Jimmy",
    "Enomoto",
    "DPT",
    ["Naperville"],
    "https://vzn-dmg-prdb-asset-cdn.azureedge.net/MLYC_OBibK6CoIdJ5JA9NI6hclaMHCPvvQGSW-nBj6g/gravity:sm/resize:fill:800:800:1:1/aHR0cHM6Ly9kbWd3ZWJwcm9kc3RvcmFnZS5ibG9iLmNvcmUud2luZG93cy5uZXQvZG1ncHJvZHdlYi9waHlzaWNpYW4taGVhZHNob3RzL0Vub21vdG9fSmltbXlfUFRfRFBULTEyOTdfd2ViLkpQRw==.webp",
    "https://www.dulyhealthandcare.com/physicians/jimmy-enomoto-dpt",
    ["Sports Medicine", "Vestibular"],
    ["Graston", "Dry Needling"]);

const Physical_Therapist_Carie_Pace = new PhysicalTherapist(
    "Carie",
    "Pace",
    "PT",
    ["Lisle"],
    "https://vzn-dmg-prdb-asset-cdn.azureedge.net/nmqPwgs0Oep-WVEKeTTQYcE1rqbkjf9-nmxiKE934w8/gravity:sm/resize:fill:800:800:1:1/aHR0cHM6Ly9kbWd3ZWJwcm9kc3RvcmFnZS5ibG9iLmNvcmUud2luZG93cy5uZXQvZG1ncHJvZHdlYi9waHlzaWNpYW4taGVhZHNob3RzL3BhY2VfY2FycmllX3B0X3BoeXNpY2FsdGhlcmFweS0wMDFfd2ViLkpQRw==.webp",
    "https://www.dulyhealthandcare.com/physicians/carie-pace-pt-clt",
    ["Lymphedema", "Women's Health"],
    ["Graston"]);

const Physical_Therapist_Irene_Gibbons = new PhysicalTherapist(
    "Irene",
    "Gibbons",
    "DPT",
    ["Glenn Ellyn"],
    "https://vzn-dmg-prdb-asset-cdn.azureedge.net/HzjJuXidckS-0Ztacr6Or4ntI8SJ7FCyrX8fhrtMf0U/gravity:sm/resize:fill:800:800:1:1/aHR0cHM6Ly9kbWd3ZWJwcm9kc3RvcmFnZS5ibG9iLmNvcmUud2luZG93cy5uZXQvZG1ncHJvZHdlYi9waHlzaWNpYW4taGVhZHNob3RzL0dpYmJvbnNfSXJlbmVfUFQtRFBUX1BoeXNpY2FsVGhlcmFweV81NTAwX3dlYi5KUEc=.webp",
    "https://www.dulyhealthandcare.com/physicians/irene-gibbons-dpt-pt",
    ["Pediatrics"],
    []);

const Physical_Therapist_Lindsay_Carr = new PhysicalTherapist(
    "Lindsay",
    "Carr",
    "DPT",
    ["New Lenox"],
    'https://vzn-dmg-prdb-asset-cdn.azureedge.net/kWfwn_iJaWRrsgz0lcOfVqG-xgkxi_xB6EXm668KhP8/gravity:sm/resize:fill:800:800:1:1/aHR0cHM6Ly9kbWd3ZWJwcm9kc3RvcmFnZS5ibG9iLmNvcmUud2luZG93cy5uZXQvZG1ncHJvZHdlYi9waHlzaWNpYW4taGVhZHNob3RzL0NhcnJfTGluZHNheV9QVF9QaHlzaWNhbF9UaGVyYXB5XzYwMjRfd2ViLkpQRw==.webp',
    'https://www.dulyhealthandcare.com/physicians/lindsay-carr-pt-dpt-ocs',
    ['Spine'],
    ['Graston']);

const Physical_Therapist_Victor_Rodriguez = new PhysicalTherapist(
    "Victor",
    "Rodriguez",
    "PT",
    ['Plainfield'],
    'https://vzn-dmg-prdb-asset-cdn.azureedge.net/5-YXZffqtCxMNcqwtZkyOQXJk-qvgrjpZVfLL7bPVFg/gravity:sm/resize:fill:800:800:1:1/aHR0cHM6Ly9kbWd3ZWJwcm9kc3RvcmFnZS5ibG9iLmNvcmUud2luZG93cy5uZXQvZG1ncHJvZHdlYi9waHlzaWNpYW4taGVhZHNob3RzL3JvZHJpZ3Vlel92aWN0b3JfcHQtMDAxX3dlYi5KUEc=.webp',
    'https://www.dulyhealthandcare.com/physicians/victor-rodriguez-pt',
    ['Spine', 'TMJ', 'Work-Related Injury'],
    ['Graston']);

const Occupational_Therapist_Meena_Harper = new OccupationalTherapist(
    "Meena",
    "Harper",
    "OTD",
    ["Glen Ellyn"],
    "https://vzn-dmg-prdb-asset-cdn.azureedge.net/EwlZ4PeWqazv2M5aPmHA5P-f4FUrain4ePrSDI8wU44/gravity:sm/resize:fill:800:800:1:1/aHR0cHM6Ly9kbWd3ZWJwcm9kc3RvcmFnZS5ibG9iLmNvcmUud2luZG93cy5uZXQvZG1ncHJvZHdlYi9waHlzaWNpYW4taGVhZHNob3RzL0hhcnBlcl9NZWVuYV9QdF9XZWIuanBn.webp",
    "https://www.dulyhealthandcare.com/physicians/meena-harper-otd-otr-l",
    ["Hand Therapy"],
    ["Graston"]);

const Occupational_Therapist_Shelbi_Vergauwen = new OccupationalTherapist(
    "Shelbi",
    "Vergauwen",
    "OTR/L",
    ["Westmont"],
    "https://vzn-dmg-prdb-asset-cdn.azureedge.net/_IO4mMl6xrXtj5NcrnxOFV2Eke-M6xAqanR0QWiHlCE/gravity:sm/resize:fill:800:800:1:1/aHR0cHM6Ly9kbWd3ZWJwcm9kc3RvcmFnZS5ibG9iLmNvcmUud2luZG93cy5uZXQvZG1ncHJvZHdlYi9waHlzaWNpYW4taGVhZHNob3RzL1NoZWxieV9WZXJnYXV3ZW5fUFRfT1Rfd2ViLmpwZw==.webp",
    "https://www.dulyhealthandcare.com/physicians/shelbi-vergauwen-mot-otr-l",
    ["Hand Therapy"],
    ["Graston"]);

const Occupational_Therapist_Michael_Lennie = new OccupationalTherapist(
    "Michael",
    "Lennie",
    "OTR/L",
    ["Westmont"],
    "https://vzn-dmg-prdb-asset-cdn.azureedge.net/fDcXQhKW7Z8GsVrakG9xTSAweAAD8_88DPq_s9ApaQU/gravity:sm/resize:fill:800:800:1:1/aHR0cHM6Ly9kbWd3ZWJwcm9kc3RvcmFnZS5ibG9iLmNvcmUud2luZG93cy5uZXQvZG1ncHJvZHdlYi9waHlzaWNpYW4taGVhZHNob3RzL2xlbm5pZV9taWtlX290ci1sX2F0Y19jaHQtMDAxX3dlYi5KUEc=.webp",
    "https://www.dulyhealthandcare.com/physicians/michael-lennie-otr-l-cht-atc",
    ["Hand Therapy", "Sports Medicine"],
    ["Graston"]);

const Occupational_Therapist_Maud_Makoni = new OccupationalTherapist(
    "Maud",
    "Makoni",
    "OTR/L",
    ["Plainfield"],
    "https://vzn-dmg-prdb-asset-cdn.azureedge.net/Z5u1H0KVGgyz04I7AYnweCILJPK3SNCyOI6VtvB1VHs/gravity:sm/resize:fill:800:800:1:1/aHR0cHM6Ly9kbWd3ZWJwcm9kc3RvcmFnZS5ibG9iLmNvcmUud2luZG93cy5uZXQvZG1ncHJvZHdlYi9waHlzaWNpYW4taGVhZHNob3RzL21ha29uaV9tYXVkX290LTAwMS1yZXRvdWNoZWRfd2ViLmpwZw==.webp",
    "https://www.dulyhealthandcare.com/physicians/maud-makoni-otd",
    ["Hand Therapy"],
    []);

const Occupational_Therapist_Kaitlin_Hall = new OccupationalTherapist(
    "Kaitlin",
    "Hall",
    "OTR/L",
    ['Joliet', 'Lockport'],
    'https://vzn-dmg-prdb-asset-cdn.azureedge.net/70dq-rBtAOGw-vniKJVOFUAkIGyasslHpEsKW-0E3A4/gravity:sm/resize:fill:800:800:1:1/aHR0cHM6Ly9kbWd3ZWJwcm9kc3RvcmFnZS5ibG9iLmNvcmUud2luZG93cy5uZXQvZG1ncHJvZHdlYi9waHlzaWNpYW4taGVhZHNob3RzL0hhbGxfS2FpdGxpbl9NT1RfT1RSX09jY3VwYXRpb25hbC1UaGVyYXB5XzkwNjZfV2ViLmpwZw==.webp',
    'https://www.dulyhealthandcare.com/physicians/kaitlin-hall-mot-otr-l',
    ["Hand Therapy"],
    ["Graston"]);

const Occupational_Therapist_Jessica_Christell = new OccupationalTherapist(
    "Jessica",
    "Christell",
    "OTR/L",
    ['Bloomingdale', 'Elmhurst'],
    'https://vzn-dmg-prdb-asset-cdn.azureedge.net/HiaVAJqcdMSWOC5txdKrtC25kpM_ECoXpZdRZJtVi9k/gravity:sm/resize:fill:800:800:1:1/aHR0cHM6Ly9kbWd3ZWJwcm9kc3RvcmFnZS5ibG9iLmNvcmUud2luZG93cy5uZXQvZG1ncHJvZHdlYi9waHlzaWNpYW4taGVhZHNob3RzL0NocmlzdGVsbF9KZXNzaWNhX01TLU9UUkxfT2NjdXBhdGlvbmFsVGhlcmFweV81ODExX3dlYi5KUEc=.webp',
    'https://www.dulyhealthandcare.com/physicians/jessica-christell-ms-otr-l',
    ["Hand Therapy"],
    ["Graston"]);

const Occupational_Therapist_Sonia_Hammond = new OccupationalTherapist(
    "Sonia",
    "Hammond",
    "OTR/L",
    ['Naperville'],
    'https://vzn-dmg-prdb-asset-cdn.azureedge.net/hz6VnvM6FG0wV1QzClAMwVjE2c0btnIMUwJ4CTsLq0Q/gravity:sm/resize:fill:800:800:1:1/aHR0cHM6Ly9kbWd3ZWJwcm9kc3RvcmFnZS5ibG9iLmNvcmUud2luZG93cy5uZXQvZG1ncHJvZHdlYi9waHlzaWNpYW4taGVhZHNob3RzL2hhbW1vbmRfc29uaWFfbW90X290ci1sX29jY3VwYXRpb25hbHRoZXJhcHktMDAxX3dlYi5KUEc=.webp',
    'https://www.dulyhealthandcare.com/physicians/sonia-hammond-otr-l-mot',
    ["Hand Therapy"],
    ["Graston"]);

const non_surgical_orthopedist_list = [Non_Surgical_Orthopedist_Danielle_Brandonisio, Non_Surgical_Orthopedist_Michael_Coffel, Non_Surgical_Orthopedist_Taylor_Comstock, Non_Surgical_Orthopedist_Julio_Gonzalez, Non_Surgical_Orthopedist_Ima_Jonkheer, Non_Surgical_Orthopedist_Shawn_Patel, Non_Surgical_Orthopedist_Ryan_Taylor, Non_Surgical_Orthopedist_Ryan_Schneider];
const non_surgical_orthopedist_specialty_list = ['Non-surgical Orthopedics'];
const non_surgical_orthopedist_full_name_list = ['Danielle Brandonisio, FNP-BC', 'Michael Coffel, APN', 'Taylor Comstock, PA-C', 'Julio Gonzalez, MD', 'Ima Jonkheer, DO', 'Shawn Patel, MD', 'Ryan Taylor, MD', 'Ryan Schneider, PA-C'];
const non_surgical_orthopedist_sub_specialty_list = ['Sports Medicine'];
const non_surgical_orthopedist_location_list = ['Bloomingdale', 'Elmhurst', 'Glen Ellyn', 'Lockport', 'Lombard', 'Naperville', "Westmont"];
const non_surgical_orthopedist_procedure_list = ['Cortisone Injection', 'Fracture Care', 'Hyaluronic Acid (Viscosupplementation)', 'Joint Injection'];

const non_surgical_orthopedist = {
    providers: non_surgical_orthopedist_list,
    specialty: non_surgical_orthopedist_specialty_list,
    full_name: non_surgical_orthopedist_full_name_list,
    sub_specialty: non_surgical_orthopedist_sub_specialty_list,
    location: non_surgical_orthopedist_location_list,
    procedure: non_surgical_orthopedist_procedure_list
};


const surgical_orthopedist_list = [Surgical_Orthopedist_Marc_Asselmeier, Surgical_Orthopedist_Salman_Chaudri, Surgical_Orthopedist_Gregory_Dairyko, Surgical_Orthopedist_William_Davis, Surgical_Orthopedist_Andrew_Kim, Surgical_Orthopedist_Justin_Kyhos, Surgical_Orthopedist_Brian_Murphy, Surgical_Orthopedist_Michael_Murphy, Surgical_Orthopedist_Anthony_Romeo, Surgical_Orthopedist_Vijay_Thangamani, Surgical_Orthopedist_Brian_Ward];
const surgical_orthopedist_specialty_list = ['Surgical Orthopedics'];
const surgical_orthopedist_full_name_list = ['Marc Asselmeier, MD', 'Salman Chaudri, DO', 'Gregory Dairyko, MD', 'William Davis, MD', 'Andrew Kim, MD', 'Justin Kyhos, MD', 'Brian Murphy, MD', 'Michael Murphy, DO', 'Anthony Romeo, MD', 'Vijay Thangamani, MD', 'Brian Ward, MD'];
const surgical_orthopedist_location_list = ['Bloomingdale', 'Elmhurst', 'Glen Ellyn', 'Joliet', 'Lombard', 'Naperville', 'Plainfield', 'Westmont'];
const surgical_orthopedist_sub_specialty_list = ['Sports Medicine', 'Total Joint Replacement'];
const surgical_orthopedist_body_parts_list = ['Ankle', 'Elbow', 'Foot', 'Hand', 'Hip', 'Knee', 'Shoulder', 'Spine', 'Wrist'];
const surgical_orthopedist_procedure_list = ['Ankle: Achilles Repair', 'Elbow: UCL Repair', 'Hand: Finger Surgery', 'Hand: Hand Surgery', 'Hip: Hip Arthroscopy with Labral Repair', 'Hip: Total Hip Replacement', 'Knee: ACL Reconstruction', 'Knee: Meniscal Repair', 'Knee: PCL Reconstruction', 'Knee: Total Knee Replacement', 'Shoulder: Labral Repair', 'Shoulder: Rotator Cuff Repair', 'Shoulder: Total Shoulder Replacement'];
const surgical_orthopedist_sports_medicine_procedure_list = ['Ankle: Achilles Repair', 'Elbow: UCL Repair', 'Hand: Finger Surgery', 'Hand: Hand Surgery', 'Hip: Hip Arthroscopy with Labral Repair', 'Knee: ACL Reconstruction', 'Knee: Meniscal Repair', 'Knee: PCL Reconstruction', 'Shoulder: Labral Repair', 'Shoulder: Rotator Cuff Repair'];
const surgical_orthopedist_joint_replacement_procedure_list = ['Hip: Total Hip Replacement', 'Knee: Total Knee Replacement', 'Shoulder: Total Shoulder Replacement'];

const surgical_orthopedist = {
    providers: surgical_orthopedist_list,
    specialty: surgical_orthopedist_specialty_list,
    full_name: surgical_orthopedist_full_name_list,
    sub_specialty: surgical_orthopedist_sub_specialty_list,
    location: surgical_orthopedist_location_list,
    body_parts: surgical_orthopedist_body_parts_list,
    procedure: surgical_orthopedist_procedure_list,
    sports_medicine_procedures: surgical_orthopedist_sports_medicine_procedure_list,
    total_joint_replacement_procedures: surgical_orthopedist_joint_replacement_procedure_list
};

const surgical_spine_list = [Surgical_Spine_Islam_Elboghdady, Surgical_Spine_Steven_Mather, Surgical_Spine_Ronjon_Paul];
const surgical_spine_specialty_list = ['Surgical Spine Orthopedics'];
const surgical_spine_full_name_list = ['Islam Elboghdady, MD', 'Steven Mather, MD', 'Ronjon Paul, MD'];
const surgical_spine_location_list = ['Bloomingdale', 'Lockport', 'Naperville', 'Westmont'];
const surgical_spine_sub_specialty_list = ['Spine Surgery'];
const surgical_spine_body_parts_list = ['Spine'];
const surgical_spine_procedures_list = ['Microdiscectomy', 'Spinal Fusion'];

const surgical_spine = {
    providers: surgical_spine_list,
    specialty: surgical_spine_specialty_list,
    full_name: surgical_spine_full_name_list,
    sub_specialty: surgical_spine_sub_specialty_list,
    location: surgical_spine_location_list,
    body_parts: surgical_spine_body_parts_list,
    procedure: surgical_spine_procedures_list
};

const non_surgical_spine_list = [Non_Surgical_Spine_Sienna_Kotch, Non_Surgical_Spine_Rebecca_Michna, Non_Surgical_Spine_Adam_Mollsen, Non_Surgical_Spine_Kelly_Perillo, Non_Surgical_Spine_Kevin_Wright];
const non_surgical_spine_specialty_list = ['Non-surgical Spine Orthopedics'];
const non_surgical_spine_full_name_list = ['Sienna Kotch, PA-C', 'Rebecca Michna, PA-C', 'Adam Mollsen, PA-C', 'Kelly Perillo, PA-C', 'Kevin Wright, PA-C'];
const non_surgical_spine_location_list = ['Bloomingdale', 'Elmhurst', 'Lombard', 'Naperville', 'Westmont'];
const non_surgical_spine_sub_specialty_list = ['Non-surgical Spine'];
const non_surgical_spine_procedures_list = [];

const non_surgical_spine = {
    providers: non_surgical_spine_list,
    specialty: non_surgical_spine_specialty_list,
    full_name: non_surgical_spine_full_name_list,
    sub_specialty: non_surgical_spine_sub_specialty_list,
    location: non_surgical_spine_location_list,
    procedure: non_surgical_spine_procedures_list
};

const surgical_cardiologist_list = [Surgical_Cardiologist_James_Carroll, Surgical_Cardiologist_Syed_Hasan, Surgical_Cardiologist_Evans_Pappas, Surgical_Cardiologist_Jong_Yoon_Yi];
const surgical_cardiologist_specialty_list = ['Surgical Cardiology'];
const surgical_cardiologist_body_parts_list = ['Heart'];
const surgical_cardiologist_full_name_list = ['James Carroll, MD', 'Syed Hasan, MD', 'Evans Pappas, MD', 'Jong Yoon Yi, MD'];
const surgical_cardiologist_location_list = ['Elgin', 'Joliet', 'Lisle', 'Naperville', 'Winfield'];
const surgical_cardiologist_sub_specialty_list = ['Adult congenital heart specialists', 'Cardiac imaging specialists', 'Electrophysiologists', 'General adult cardiologists', 'Heart bypass surgery', 'Heart failure specialists', 'Heart valve surgery'];
const surgical_cardiologist_procedures_list = ['Heart bypass surgery', 'Heart failure surgery', 'Heart valve surgery'];

const surgical_cardiologist = {
    providers: surgical_cardiologist_list,
    specialty: surgical_cardiologist_specialty_list,
    full_name: surgical_cardiologist_full_name_list,
    sub_specialty: surgical_cardiologist_sub_specialty_list,
    location: surgical_cardiologist_location_list,
    body_parts: surgical_cardiologist_body_parts_list,
    procedure: surgical_cardiologist_procedures_list
};

const non_surgical_cardiologist_list = [Non_Surgical_Cardiologist_Michael_Green, Non_Surgical_Cardiologist_Natalie_Hill, Non_Surgical_Cardiologist_Lindsay_Thorgesen];
const non_surgical_cardiologist_specialty_list = ['Non-surgical Cardiology'];
const non_surgical_cardiologist_full_name_list = ['Michael Green, PA-C', 'Natalie Hill, NP-C', 'Lindsay Thorgesen, FNP-BC'];
const non_surgical_cardiologist_location_list = ['Joliet', 'Naperville', 'New Lenox', 'Oak Lawn', 'Westmont'];
const non_surgical_cardiologist_sub_specialty_list = ['Adult congenital heart specialists', 'Cardiac imaging specialists', 'Electrophysiologists', 'General adult cardiologists'];
const non_surgical_cardiologist_procedures_list = [];

const non_surgical_cardiologist = {
    providers: non_surgical_cardiologist_list,
    specialty: non_surgical_cardiologist_specialty_list,
    full_name: non_surgical_cardiologist_full_name_list,
    sub_specialty: non_surgical_cardiologist_sub_specialty_list,
    location: non_surgical_cardiologist_location_list,
    procedure: non_surgical_cardiologist_procedures_list
};

const physical_therapist_list = [Physical_Therapist_Lindsay_Carr, Physical_Therapist_Jimmy_Enomoto, Physical_Therapist_Irene_Gibbons, Physical_Therapist_Carie_Pace, Physical_Therapist_Dave_Pratt, Physical_Therapist_Victor_Rodriguez];
const physical_therapist_full_name_list = ['Lindsay Carr, DPT', 'Jimmy Enomoto, DPT', 'Irene Gibbons, DPT', 'Carie Pace, PT', 'David Pratt, DPT'];
const physical_therapist_location_list = ['Glenn Ellyn', 'Lisle', 'Naperville', 'New Lenox', 'Plainfield'];
const physical_therapist_specialty_list = ['Physical Therapy'];
const physical_therapist_procedure_list = ["Dry Needling", "Graston"];
const physical_therapist_sub_specialty_list = ['Lymphedema', 'Pediatrics', 'Sports Medicine', 'Spine', 'TMJ', 'Vestibular', "Women's Health", 'Work-Related Injury'];

const physical_therapist = {
    providers: physical_therapist_list,
    specialty: physical_therapist_specialty_list,
    full_name: physical_therapist_full_name_list,
    sub_specialty: physical_therapist_sub_specialty_list,
    location: physical_therapist_location_list,
    procedure: physical_therapist_procedure_list
};

const occupational_therapist_list = [Occupational_Therapist_Jessica_Christell, Occupational_Therapist_Kaitlin_Hall, Occupational_Therapist_Sonia_Hammond, Occupational_Therapist_Meena_Harper, Occupational_Therapist_Michael_Lennie, Occupational_Therapist_Maud_Makoni, Occupational_Therapist_Shelbi_Vergauwen];
const occupational_therapist_full_name_list = ['Jessica Christell, OTR/L', 'Kaitlin Hall, OTR/L', 'Sonia Hammond, OTR/L', 'Meena Harper, OTD', 'Michael Lennie, OTR/L', 'Maud Makoni, OTR/L', 'Shelbi Vergauwen, OTR/L'];
const occupational_therapist_location_list = ['Bloomingdale', 'Elmhurst', 'Glen Ellyn', 'Joliet', 'Lockport', 'Naperville', 'Plainfield', 'Westmont'];
const occupational_therapist_specialty_list = ['Occupational Therapy'];
const occupational_therapist_procedure_list = ["Dry Needling", "Graston"];
const occupational_therapist_sub_specialty_list = ['Hand Therapy', 'Sports Medicine'];

const occupational_therapist = {
    providers: occupational_therapist_list,
    specialty: occupational_therapist_specialty_list,
    full_name: occupational_therapist_full_name_list,
    sub_specialty: occupational_therapist_sub_specialty_list,
    location: occupational_therapist_location_list,
    procedure: occupational_therapist_procedure_list
};


const list_of_specialties = ['Non-surgical Orthopedics', 'Surgical Orthopedics', 'Non-surgical Spine Orthopedics', 'Surgical Spine Orthopedics', 'Non-surgical Cardiology', 'Surgical Cardiology', 'Physical Therapy', 'Occupational Therapy'];

export const all_providers = {
    non_surgical_orthopedist: non_surgical_orthopedist,
    surgical_orthopedist: surgical_orthopedist,
    non_surgical_spine: non_surgical_spine,
    surgical_spine: surgical_spine,
    non_surgical_cardiologist: non_surgical_cardiologist,
    surgical_cardiologist: surgical_cardiologist,
    physical_therapist: physical_therapist,
    occupational_therapist: occupational_therapist,
    list_of_specialties: list_of_specialties,
};
