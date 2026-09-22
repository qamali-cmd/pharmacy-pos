// script.js

// FULL LIST OF MEDICINES
let medicines = JSON.parse(localStorage.getItem('medicines')) || [
    { id: 1, name: 'Albendazole 400mg', form: 'Chewable Tablet', price: 9.75, favorite: false },
    { id: 2, name: 'Aluminum + Magnesium', form: '300mg Tablet', price: 8.50, favorite: false },
    { id: 3, name: 'Aluminum + Magnesium', form: '225mcg+200mg/5mL, 60mL', price: 50.50, favorite: false },
    { id: 4, name: 'Aluminum + Magnesium', form: '225mcg+200mg/5mL, 120mL', price: 104.00, favorite: false },
    { id: 5, name: 'Amlodipine', form: '10mg Tablet', price: 6.50, favorite: false },
    { id: 6, name: 'Amlodipine', form: '5mg Tablet', price: 4.50, favorite: false },
    { id: 7, name: 'Amoxicillin', form: '100mg/mL Drops, 10mL', price: 58.25, favorite: false },
    { id: 8, name: 'Amoxicillin', form: '250mg Capsule', price: 4.00, favorite: false },
    { id: 9, name: 'Amoxicillin', form: '250mg/5mL Suspension, 60mL', price: 92.50, favorite: false },
    { id: 10, name: 'Amoxicillin', form: '500mg Capsule', price: 5.25, favorite: false },
    { id: 11, name: 'Co-Amoxiclav', form: '200mg+28.5mg/5mL Susp, 70mL', price: 244.50, favorite: false },
    { id: 12, name: 'Co-Amoxiclav', form: '400mg+57mg/5mL Susp, 70mL', price: 312.00, favorite: false },
    { id: 13, name: 'Co-Amoxiclav', form: '500mg+125mg Tablet', price: 25.75, favorite: false },
    { id: 14, name: 'Co-Amoxiclav', form: '875mg+125mg Tablet', price: 41.25, favorite: false },
    { id: 15, name: 'Co-Amoxiclav', form: '600mg+42.9mg/5mL, 70mL', price: 230.00, favorite: false },
    { id: 16, name: 'Aspirin', form: '100mg Tablet', price: 1.75, favorite: false },
    { id: 17, name: 'Aspirin', form: '80mg Tablet', price: 2.75, favorite: false },
    { id: 18, name: 'Atenolol', form: '100mg Tablet', price: 11.75, favorite: false },
    { id: 19, name: 'Atenolol', form: '50mg Tablet', price: 5.50, favorite: false },
    { id: 20, name: 'Atorvastatin', form: '10mg Tablet', price: 10.00, favorite: false },
    { id: 21, name: 'Atorvastatin', form: '20mg Tablet', price: 12.25, favorite: false },
    { id: 22, name: 'Atorvastatin', form: '40mg Tablet', price: 17.25, favorite: false },
    { id: 23, name: 'Atorvastatin', form: '80mg Tablet', price: 25.00, favorite: false },
    { id: 24, name: 'Azithromycin', form: '250mg Capsule', price: 35.00, favorite: false },
    { id: 25, name: 'Azithromycin', form: '250mg Tablet', price: 100.00, favorite: false },
    { id: 26, name: 'Azithromycin', form: '500mg Tablet', price: 74.25, favorite: false },
    { id: 27, name: 'Azithromycin', form: '250mg/5mL powder, 15mL', price: 270.00, favorite: false },
    { id: 28, name: 'Azithromycin', form: '250mg/5mL powder, 60mL', price: 262.00, favorite: false },
    { id: 29, name: 'Budesonide + Formoterol', form: '80/4.5mcg x 60 doses DPI', price: 853.25, favorite: false },
    { id: 30, name: 'Budesonide + Formoterol', form: '160/4.5mcg x 60 doses DPI', price: 1105.00, favorite: false },
    { id: 31, name: 'Budesonide + Formoterol', form: '320/9mcg x 60 doses DPI', price: 1533.50, favorite: false },
    { id: 32, name: 'Budesonide + Formoterol', form: '80/4.5mcg x 120 doses MDI', price: 590.50, favorite: false },
    { id: 33, name: 'Budesonide + Formoterol', form: '160/4.5mcg x 120 doses MDI', price: 719.75, favorite: false },
    { id: 34, name: 'Butamirate Citrate', form: '50mg Tablet', price: 8.50, favorite: false },
    { id: 35, name: 'Butamirate Citrate', form: '7.5mg/5mL syrup, 120mL', price: 121.75, favorite: false },
    { id: 36, name: 'Captopril', form: '25mg Tablet', price: 5.25, favorite: false },
    { id: 37, name: 'Captopril', form: '50mg Tablet', price: 28.00, favorite: false },
    { id: 38, name: 'Cefixime', form: '200mg Capsule', price: 63.00, favorite: false },
    { id: 39, name: 'Cefixime', form: '400mg Capsule', price: 127.25, favorite: false },
    { id: 40, name: 'Cefixime', form: '20mg/mL drops, 10mL', price: 298.75, favorite: false },
    { id: 41, name: 'Cefixime', form: '100mg/5mL suspension, 60mL', price: 317.50, favorite: false },
    { id: 42, name: 'Cefuroxime', form: '500mg Tablet', price: 37.25, favorite: false },
    { id: 43, name: 'Cefuroxime', form: '125mg/5mL suspension, 70mL', price: 309.00, favorite: false },
    { id: 44, name: 'Cefuroxime', form: '250mg/5mL suspension, 120mL', price: 320.25, favorite: false },
    { id: 45, name: 'Celecoxib', form: '100mg Capsule', price: 31.00, favorite: false },
    { id: 46, name: 'Celecoxib', form: '200mg Capsule', price: 21.00, favorite: false },
    { id: 47, name: 'Celecoxib', form: '400mg Capsule', price: 39.50, favorite: false },
    { id: 48, name: 'Cetirizine', form: '10mg Tablet', price: 11.25, favorite: false },
    { id: 49, name: 'Cetirizine', form: '2.5mg/mL Drops, 15mL', price: 126.50, favorite: false },
    { id: 50, name: 'Cetirizine', form: '10mg/mL drops, 10mL', price: 110.25, favorite: false },
    { id: 51, name: 'Cetirizine', form: '1mg/mL solution, 30mL', price: 91.00, favorite: false },
    { id: 52, name: 'Cetirizine', form: '1mg/mL solution, 60mL', price: 119.50, favorite: false },
    { id: 53, name: 'Cetirizine', form: '5mg/5mL Syrup, 60mL', price: 122.50, favorite: false },
    { id: 54, name: 'Chlorphenamine', form: '4mg Tablet', price: 4.00, favorite: false },
    { id: 55, name: 'Chlorphenamine', form: '2.5mg/5mL Syrup, 60mL', price: 37.75, favorite: false },
    { id: 56, name: 'Ciprofloxacin', form: '250mg Tablet', price: 32.00, favorite: false },
    { id: 57, name: 'Ciprofloxacin', form: '500mg Tablet', price: 25.00, favorite: false },
    { id: 58, name: 'Clarithromycin', form: '250mg Tablet', price: 48.25, favorite: false },
    { id: 59, name: 'Clarithromycin', form: '500mg Tablet', price: 56.00, favorite: false },
    { id: 60, name: 'Clarithromycin', form: '125mg/5mL Susp, 60mL', price: 277.00, favorite: false },
    { id: 61, name: 'Clarithromycin', form: '250mg/5mL Susp, 60mL', price: 470.00, favorite: false },
    { id: 62, name: 'Clindamycin', form: '150mg Capsule', price: 14.75, favorite: false },
    { id: 63, name: 'Clindamycin', form: '300mg Capsule', price: 29.75, favorite: false },
    { id: 64, name: 'Clindamycin', form: '75mg/5mL suspension, 60mL', price: 568.75, favorite: false },
    { id: 65, name: 'Clonidine', form: '75mcg Tablet', price: 16.50, favorite: false },
    { id: 66, name: 'Clonidine', form: '150mcg tablet', price: 21.50, favorite: false },
    { id: 67, name: 'Clopidogrel', form: '75mg Tablet', price: 20.25, favorite: false },
    { id: 68, name: 'Clotrimazole', form: '1% cream, 3g', price: 63.00, favorite: false },
    { id: 69, name: 'Clotrimazole', form: '1% cream, 10g', price: 118.25, favorite: false },
    { id: 70, name: 'Clotrimazole', form: '1% cream, 20g', price: 80.75, favorite: false },
    { id: 71, name: 'Cloxacillin', form: '500mg Capsule', price: 7.75, favorite: false },
    { id: 72, name: 'Cloxacillin', form: '250mg/5mL powder, 60mL', price: 74.50, favorite: false },
    { id: 73, name: 'Colchicine', form: '500mcg Tablet', price: 3.25, favorite: false },
    { id: 74, name: 'Dapagliflozin', form: '10mg tablet', price: 25.75, favorite: false },
    { id: 75, name: 'Diltiazem', form: '60mg capsule', price: 15.75, favorite: false },
    { id: 76, name: 'Diltiazem', form: '120mg capsule', price: 96.50, favorite: false },
    { id: 77, name: 'Diltiazem', form: '180mg capsule', price: 115.75, favorite: false },
    { id: 78, name: 'Diltiazem', form: '60mg tablet', price: 21.00, favorite: false },
    { id: 79, name: 'Diltiazem', form: '120mg tablet', price: 96.50, favorite: false },
    { id: 80, name: 'Diltiazem', form: '180mg tablet', price: 115.75, favorite: false },
    { id: 81, name: 'Diphenhydramine', form: '25mg Capsule', price: 14.75, favorite: false },
    { id: 82, name: 'Diphenhydramine', form: '50mg Capsule', price: 12.75, favorite: false },
    { id: 83, name: 'Diphenhydramine', form: '12.5mg/5mL Syrup, 30mL', price: 77.25, favorite: false },
    { id: 84, name: 'Diphenhydramine', form: '12.5mg/5mL Syrup, 60mL', price: 108.00, favorite: false },
    { id: 85, name: 'Doxycycline', form: '100mg Capsule', price: 23.75, favorite: false },
    { id: 86, name: 'Enalapril', form: '5mg Tablet', price: 6.00, favorite: false },
    { id: 87, name: 'Enalapril', form: '20mg Tablet', price: 11.00, favorite: false },
    { id: 88, name: 'Enalapril', form: '20mg+12.5mg Tablet', price: 16.00, favorite: false },
    { id: 89, name: 'Erythromycin', form: '500mg Tablet', price: 10.75, favorite: false },
    { id: 90, name: 'Erythromycin', form: '200mg/5mL suspension, 60mL', price: 318.50, favorite: false },
    { id: 91, name: 'Erythromycin', form: '0.5% ointment, 3.5g', price: 167.50, favorite: false },
    { id: 92, name: 'Erythromycin', form: '0.5% ointment, 5g', price: 153.50, favorite: false },
    { id: 93, name: 'Fenofibrate', form: '200mg Capsule', price: 15.75, favorite: false },
    { id: 94, name: 'Fenofibrate', form: '160mg Tablet', price: 27.25, favorite: false },
    { id: 95, name: 'Fluconazole', form: '50mg capsule', price: 186.75, favorite: false },
    { id: 96, name: 'Fluconazole', form: '150mg capsule', price: 375.00, favorite: false },
    { id: 97, name: 'Fluconazole', form: '200mg capsule', price: 693.00, favorite: false },
    { id: 98, name: 'Fluticasone + Salmeterol', form: '50/25mcg x 120 MDI', price: 429.25, favorite: false },
    { id: 99, name: 'Fluticasone + Salmeterol', form: '125/25mcg x 120 MDI', price: 569.25, favorite: false },
    { id: 100, name: 'Fluticasone + Salmeterol', form: '250/25mcg x 120 MDI', price: 737.00, favorite: false },
    { id: 101, name: 'Fluticasone + Salmeterol', form: '100/50mcg x 28 DPI', price: 1084.50, favorite: false },
    { id: 102, name: 'Fluticasone + Salmeterol', form: '100/50mcg x 60 DPI', price: 1084.50, favorite: false },
    { id: 103, name: 'Fluticasone + Salmeterol', form: '250/50mcg x 28 DPI', price: 1500.75, favorite: false },
    { id: 104, name: 'Fluticasone + Salmeterol', form: '250/50mcg x 60 DPI', price: 1156.25, favorite: false },
    { id: 105, name: 'Fluticasone + Salmeterol', form: '500/50mcg x 28 DPI', price: 798.50, favorite: false },
    { id: 106, name: 'Fluticasone + Salmeterol', form: '500/50mcg x 60 DPI', price: 1981.75, favorite: false },
    { id: 107, name: 'Ferrous Sulfate + Folic', form: '400mcg+60mg Capsule', price: 8.75, favorite: false },
    { id: 108, name: 'Ferrous Sulfate + Folic', form: '400mcg+60mg Tablet', price: 8.75, favorite: false },
    { id: 109, name: 'Ferrous Sulfate + Folic', form: '400mcg+60mg Film-coated', price: 8.75, favorite: false },
    { id: 110, name: 'Gabapentin', form: '100mg capsule', price: 25.75, favorite: false },
    { id: 111, name: 'Gabapentin', form: '300mg capsule', price: 32.50, favorite: false },
    { id: 112, name: 'Gliclazide', form: '30mg Tablet', price: 6.75, favorite: false },
    { id: 113, name: 'Gliclazide', form: '60mg Tablet', price: 27.00, favorite: false },
    { id: 114, name: 'Gliclazide', form: '80mg Tablet', price: 2.80, favorite: false },
    { id: 115, name: 'Hydrochlorothiazide', form: '12.5mg Tablet', price: 3.50, favorite: false },
    { id: 116, name: 'Hydrochlorothiazide', form: '25mg Tablet', price: 4.00, favorite: false },
    { id: 117, name: 'Ibuprofen', form: '200mg tablet', price: 5.00, favorite: false },
    { id: 118, name: 'Ibuprofen', form: '400mg tablet', price: 8.75, favorite: false },
    { id: 119, name: 'Ibuprofen', form: '100mg/5mL susp, 60mL', price: 67.75, favorite: false },
    { id: 120, name: 'Ibuprofen', form: '200mg/5mL susp, 60mL', price: 60.00, favorite: false },
    { id: 121, name: 'Ipratropium', form: '250mcg/mL nebule, 2mL', price: 29.75, favorite: false },
    { id: 122, name: 'Salbutamol + Ipratropium', form: '2.5mg+500mcg Nebule', price: 45.25, favorite: false },
    { id: 123, name: 'Salbutamol + Ipratropium', form: '20/100mcg MDI', price: 1083.00, favorite: false },
    { id: 124, name: 'Ferrous Sulfate (Iron)', form: '325mg (105mg) Tablet', price: 1.25, favorite: false },
    { id: 125, name: 'Ferrous Sulfate (Iron)', form: '15mg/0.6mL drops, 15mL', price: 31.50, favorite: false },
    { id: 126, name: 'Ferrous Sulfate (Iron)', form: '15mg/0.6mL drops, 30mL', price: 252.00, favorite: false },
    { id: 127, name: 'Ferrous Sulfate (Iron)', form: '30mg/5mL Syrup, 60mL', price: 259.00, favorite: false },
    { id: 128, name: 'Isosorbide Dinitrate', form: '5mg Tablet', price: 18.00, favorite: false },
    { id: 129, name: 'Isosorbide Dinitrate', form: '10mg Tablet', price: 15.75, favorite: false },
    { id: 130, name: 'Isosorbide Dinitrate', form: '20mg Tablet', price: 4.75, favorite: false },
    { id: 131, name: 'Isosorbide Dinitrate', form: '20mg MR Tablet', price: 18.50, favorite: false },
    { id: 132, name: 'Isosorbide Dinitrate', form: '40mg Tablet', price: 8.25, favorite: false },
    { id: 133, name: 'Isosorbide Mononitrate', form: '30mg Capsule', price: 14.50, favorite: false },
    { id: 134, name: 'Isosorbide Mononitrate', form: '60mg Capsule', price: 20.75, favorite: false },
    { id: 135, name: 'Isosorbide Mononitrate', form: '30mg Tablet', price: 17.00, favorite: false },
    { id: 136, name: 'Isosorbide Mononitrate', form: '60mg Tablet', price: 37.50, favorite: false },
    { id: 137, name: 'Ketoconazole', form: '2% Cream 3.5g', price: 118.75, favorite: false },
    { id: 138, name: 'Ketoconazole', form: '2% Cream 15g', price: 91.50, favorite: false },
    { id: 139, name: 'Ketoconazole', form: '2% Shampoo, 6mL Sachet', price: 51.75, favorite: false },
    { id: 140, name: 'Ketoconazole', form: '2% Shampoo, 60mL Bottle', price: 242.25, favorite: false },
    { id: 141, name: 'Ketoconazole', form: '2% Shampoo, 100mL Bottle', price: 433.50, favorite: false },
    { id: 142, name: 'Loratadine', form: '10mg Tablet', price: 4.25, favorite: false },
    { id: 143, name: 'Loratadine', form: '10mg Film-coated Tablet', price: 4.25, favorite: false },
    { id: 144, name: 'Loratadine', form: '5mg/5mL Syrup, 30mL', price: 208.50, favorite: false },
    { id: 145, name: 'Losartan', form: '50mg Tablet', price: 9.00, favorite: false },
    { id: 146, name: 'Losartan', form: '100mg Tablet', price: 12.00, favorite: false },
    { id: 147, name: 'Losartan + HCTZ', form: '50mg+12.5mg Tablet', price: 9.50, favorite: false },
    { id: 148, name: 'Mebendazole', form: '100mg Tablet', price: 6.00, favorite: false },
    { id: 149, name: 'Mebendazole', form: '100mg Capsule', price: 6.00, favorite: false },
    { id: 150, name: 'Mebendazole', form: '500mg Tablet', price: 41.50, favorite: false },
    { id: 151, name: 'Mebendazole', form: '500mg Chewable Tablet', price: 11.25, favorite: false },
    { id: 152, name: 'Mebendazole', form: '50mg/mL suspension, 10mL', price: 127.00, favorite: false },
    { id: 153, name: 'Mebendazole', form: '100mg/5mL suspension, 30mL', price: 305.00, favorite: false },
    { id: 154, name: 'Mebendazole', form: '100mg/5mL suspension, 60mL', price: 40.75, favorite: false },
    { id: 155, name: 'Mefenamic Acid', form: '250mg Capsule', price: 3.00, favorite: false },
    { id: 156, name: 'Mefenamic Acid', form: '500mg Capsule', price: 3.50, favorite: false },
    { id: 157, name: 'Mefenamic Acid', form: '250mg Tablet', price: 3.00, favorite: false },
    { id: 158, name: 'Mefenamic Acid', form: '500mg Tablet', price: 3.50, favorite: false },
    { id: 159, name: 'Metformin', form: '500mg Film-coated Tablet', price: 4.75, favorite: false },
    { id: 160, name: 'Metformin', form: '500mg Tablet', price: 4.75, favorite: false },
    { id: 161, name: 'Metformin', form: '850mg Tablet', price: 5.25, favorite: false },
    { id: 162, name: 'Methyldopa', form: '250mg Tablet', price: 11.00, favorite: false },
    { id: 163, name: 'Metoprolol', form: '50mg Tablet', price: 2.25, favorite: false },
    { id: 164, name: 'Metoprolol', form: '100mg Tablet', price: 3.50, favorite: false },
    { id: 165, name: 'Metronidazole', form: '250mg Tablet', price: 11.00, favorite: false },
    { id: 166, name: 'Metronidazole', form: '500mg Tablet', price: 13.25, favorite: false },
    { id: 167, name: 'Metronidazole', form: '125mg/5mL susp, 60mL', price: 81.50, favorite: false },
    { id: 168, name: 'Montelukast', form: '4mg Granules Sachet', price: 22.00, favorite: false },
    { id: 169, name: 'Montelukast', form: '4mg Chewable Tablet', price: 20.50, favorite: false },
    { id: 170, name: 'Montelukast', form: '5mg Chewable Tablet', price: 15.50, favorite: false },
    { id: 171, name: 'Montelukast', form: '10mg Tablet', price: 28.75, favorite: false },
    { id: 172, name: 'Naproxen', form: '275mg Tablet', price: 7.00, favorite: false },
    { id: 173, name: 'Naproxen', form: '550mg Tablet', price: 12.50, favorite: false },
    { id: 174, name: 'Nitrofurantoin', form: '50mg Capsule', price: 35.75, favorite: false },
    { id: 175, name: 'Nitrofurantoin', form: '100mg Capsule', price: 17.00, favorite: false },
    { id: 176, name: 'Omeprazole', form: '20mg Capsule', price: 19.00, favorite: false },
    { id: 177, name: 'Omeprazole', form: '40mg Capsule', price: 27.50, favorite: false },
    { id: 178, name: 'Oral Rehydration Salt (ORS)', form: '5.575g powder', price: 12.00, favorite: false },
    { id: 179, name: 'Oseltamivir', form: '75mg Capsule', price: 110.00, favorite: false },
    { id: 180, name: 'Paracetamol', form: '300mg Tablet', price: 3.00, favorite: false },
    { id: 181, name: 'Paracetamol', form: '500mg Tablet', price: 2.25, favorite: false },
    { id: 182, name: 'Paracetamol', form: '100mg/mL Drops, 15mL', price: 49.50, favorite: false },
    { id: 183, name: 'Paracetamol', form: '125mg/5mL Syrup, 30mL', price: 95.00, favorite: false },
    { id: 184, name: 'Paracetamol', form: '125mg/5mL Suspension, 30mL', price: 95.00, favorite: false },
    { id: 185, name: 'Paracetamol', form: '125mg/5mL Syrup, 60mL', price: 35.00, favorite: false },
    { id: 186, name: 'Paracetamol', form: '125mg/5mL Suspension, 60mL', price: 35.00, favorite: false },
    { id: 187, name: 'Paracetamol', form: '125mg/5mL Syrup, 120mL', price: 138.75, favorite: false },
    { id: 188, name: 'Paracetamol', form: '125mg/5mL Suspension, 120mL', price: 138.75, favorite: false },
    { id: 189, name: 'Paracetamol', form: '250mg/5mL Syrup, 30mL', price: 77.75, favorite: false },
    { id: 190, name: 'Paracetamol', form: '250mg/5mL Suspension, 30mL', price: 77.75, favorite: false },
    { id: 191, name: 'Paracetamol', form: '250mg/5ml Syrup, 60mL', price: 52.50, favorite: false },
    { id: 192, name: 'Paracetamol', form: '250mg/5ml Suspension, 60mL', price: 52.50, favorite: false },
    { id: 193, name: 'Paracetamol', form: '250mg/5ml Syrup, 120mL', price: 255.00, favorite: false },
    { id: 194, name: 'Paracetamol', form: '250mg/5ml Suspension, 120mL', price: 255.00, favorite: false },
    { id: 195, name: 'Paracetamol', form: '125mg Rectal Suppository', price: 6.75, favorite: false },
    { id: 196, name: 'Paracetamol', form: '250mg Rectal Suppository', price: 29.25, favorite: false },
    { id: 197, name: 'Prednisone', form: '5mg Tablet', price: 1.75, favorite: false },
    { id: 198, name: 'Prednisone', form: '10mg Tablet', price: 3.25, favorite: false },
    { id: 199, name: 'Prednisone', form: '20mg Tablet', price: 6.50, favorite: false },
    { id: 200, name: 'Prednisone', form: '10mg/5mL Suspension, 60mL', price: 134.25, favorite: false },
    { id: 201, name: 'Rosuvastatin', form: '10mg Tablet', price: 16.25, favorite: false },
    { id: 202, name: 'Rosuvastatin', form: '20mg Tablet', price: 23.25, favorite: false },
    { id: 203, name: 'Salbutamol', form: '2mg/5mL Syrup, 60mL', price: 60.00, favorite: false },
    { id: 204, name: 'Salbutamol', form: '1mg/mL Nebule, 2.5mL', price: 18.00, favorite: false },
    { id: 205, name: 'Salbutamol', form: '2mg/mL Nebule, 2.5mL', price: 32.00, favorite: false },
    { id: 206, name: 'Salbutamol', form: '200mcg DPI', price: 7.00, favorite: false },
    { id: 207, name: 'Salbutamol', form: '100mcg x 200 doses MDI', price: 195.50, favorite: false },
    { id: 208, name: 'Simvastatin', form: '20mg Tablet', price: 6.50, favorite: false },
    { id: 209, name: 'Simvastatin', form: '40mg Tablet', price: 10.00, favorite: false },
    { id: 210, name: 'Co-trimoxazole', form: '100mg+80mg Tablet', price: 3.00, favorite: false },
    { id: 211, name: 'Co-trimoxazole', form: '800mg+160mg Tablet', price: 9.50, favorite: false },
    { id: 212, name: 'Co-trimoxazole', form: '200+40mg/5mL susp, 70mL', price: 56.00, favorite: false },
    { id: 213, name: 'Co-trimoxazole', form: '200+40mg/5mL susp, 120mL', price: 53.25, favorite: false },
    { id: 214, name: 'Co-trimoxazole', form: '400+80mg/5mL susp, 60mL', price: 139.00, favorite: false },
    { id: 215, name: 'Tamsulosin', form: '200mcg Tablet', price: 47.00, favorite: false },
    { id: 216, name: 'Tamsulosin', form: '200mcg OD Tablet', price: 10.50, favorite: false },
    { id: 217, name: 'Tamsulosin', form: '400mcg Tablet', price: 30.50, favorite: false },
    { id: 218, name: 'Telmisartan', form: '40mg tablet', price: 10.00, favorite: false },
    { id: 219, name: 'Telmisartan', form: '80mg tablet', price: 13.75, favorite: false },
    { id: 220, name: 'Telmisartan + HCTZ', form: '40mg/12.5mg Tablet', price: 11.75, favorite: false },
    { id: 221, name: 'Tiotropium', form: '18mcg/dose DPI', price: 52.50, favorite: false },
    { id: 222, name: 'Tobramycin', form: '0.3% sol, 5mL', price: 345.00, favorite: false },
    { id: 223, name: 'Tobramycin', form: '0.3% ointment, 3.5g', price: 519.50, favorite: false },
    { id: 224, name: 'Tobramycin + Dexamethasone', form: '3mg/1mg/mL sol, 5mL', price: 164.50, favorite: false },
    { id: 225, name: 'Tobramycin + Dexamethasone', form: '0.3%+0.1% oint, 3.5g', price: 491.00, favorite: false },
    { id: 226, name: 'Valsartan', form: '80mg Tablet', price: 14.50, favorite: false },
    { id: 227, name: 'Valsartan', form: '160mg Tablet', price: 17.50, favorite: false },
    { id: 228, name: 'Valsartan', form: '80mg Film Coated', price: 14.50, favorite: false },
    { id: 229, name: 'Valsartan', form: '160mg Film Coated', price: 17.50, favorite: false },
    { id: 230, name: 'Valsartan + HCTZ', form: '80+12.5mg Film Coated', price: 16.75, favorite: false },
    { id: 231, name: 'Lagundi', form: '300mg Tablet', price: 4.00, favorite: false },
    { id: 232, name: 'Lagundi Forte', form: '600mg Capsule', price: 5.25, favorite: false },
    { id: 233, name: 'Lagundi', form: '300mg/5mL Syrup, 60mL', price: 79.00, favorite: false },
    { id: 234, name: 'Lagundi', form: '300mg/5mL Syrup, 120mL', price: 128.00, favorite: false },
    { id: 235, name: 'Lagundi', form: '600mg/5mL Syrup, 60mL', price: 97.50, favorite: false },
    { id: 236, name: 'Lagundi', form: '600mg/5mL Syrup, 120mL', price: 139.75, favorite: false },
    { id: 237, name: 'Zinc', form: '10mg Chewable Tablet', price: 4.00, favorite: false },
    { id: 238, name: 'Zinc', form: '30mg Tablet', price: 5.00, favorite: false },
    { id: 239, name: 'Zinc', form: '10mg/mL Drops, 15mL', price: 51.50, favorite: false },
    { id: 240, name: 'Zinc', form: '20mg/mL Syrup, 60mL', price: 85.00, favorite: false },
    { id: 241, name: 'Zinc', form: '70mg/5mL (1mg) Syrup, 60mL', price: 93.00, favorite: false },
    { id: 242, name: 'Zinc', form: '70mg/5mL (1mg) Syrup, 120mL', price: 88.50, favorite: false }
];

let cart = [];
let selectedMed = null;
let selectedQty = 0;
let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

if (!localStorage.getItem('medicines')) {
    localStorage.setItem('medicines', JSON.stringify(medicines));
}

function checkOrientation() {
    const warning = document.getElementById('orientationWarning');
    const isMobile = window.innerWidth <= 768;
    const isPortrait = window.innerHeight > window.innerWidth;
    if (isMobile && isPortrait) {
        warning.classList.add('show');
    } else {
        warning.classList.remove('show');
    }
}

window.addEventListener('load', checkOrientation);
window.addEventListener('resize', checkOrientation);
window.addEventListener('orientationchange', checkOrientation);

function toggleFavorite(e, id) {
    e.stopPropagation();
    const med = medicines.find(m => m.id === id);
    if (med) {
        med.favorite = !med.favorite;
        localStorage.setItem('medicines', JSON.stringify(medicines));
        renderMeds();
    }
}

function renderMeds() {
    const grid = document.getElementById('medsGrid');
    const search = document.getElementById('searchInput').value.toLowerCase();
    grid.innerHTML = '';

    const sortedMeds = [...medicines].sort((a, b) => {
        if (a.favorite === b.favorite) {
            return a.name.localeCompare(b.name);
        }
        return a.favorite ? -1 : 1;
    });

    sortedMeds.filter(m => m.name.toLowerCase().includes(search)).forEach(med => {
        const btn = document.createElement('div');
        btn.className = 'med-btn' + (selectedMed && selectedMed.id === med.id ? ' active' : '');
        
        const favIcon = med.favorite ? '★' : '☆';
        const favClass = med.favorite ? 'med-fav-icon active' : 'med-fav-icon';

        // Clean layout: Name, Details (Dosage/Form), Price
        btn.innerHTML = `
            <div class="${favClass}" onclick="toggleFavorite(event, ${med.id})">${favIcon}</div>
            <div class="med-name">${med.name}</div>
            <div class="med-details">${med.form}</div>
            <div class="med-price">₱${med.price.toFixed(2)}</div>
        `;
        
        btn.onclick = (e) => {
            if(e.target.className.includes('med-fav-icon')) return;
            if (selectedMed && selectedMed.id === med.id) {
                clearSelection();
            } else {
                selectMed(med);
            }
        };
        grid.appendChild(btn);
    });
}

function renderCart() {
    const cartDiv = document.getElementById('cartItems');
    const totalDiv = document.getElementById('totalAmount');
    
    if (cart.length === 0) {
        cartDiv.innerHTML = '<div class="placeholder-text" style="margin-top:20px;">Cart is empty</div>';
        totalDiv.innerText = '₱0.00';
        return;
    }

    cartDiv.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.qty;
        total += itemTotal;
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <div>
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-qty">Qty: ${item.qty} x ₱${item.price.toFixed(2)}</div>
            </div>
            <div style="display:flex; align-items:center; gap:10px;">
                <div class="cart-item-total">₱${itemTotal.toFixed(2)}</div>
                <span style="color:red; cursor:pointer; font-weight:bold;" onclick="removeFromCart(${index})">✕</span>
            </div>
        `;
        cartDiv.appendChild(div);
    });

    totalDiv.innerText = `₱${total.toFixed(2)}`;
}

function selectMed(med) {
    selectedMed = med;
    selectedQty = 0;
    document.getElementById('qtyControls').style.display = 'flex';
    document.getElementById('qtyInput').value = 0;
    updateSelectedInfo();
    renderMeds();
}

function updateSelectedInfo() {
    if(!selectedMed) return;
    document.getElementById('selectedInfo').innerHTML = `
        <div style="font-weight:bold; font-size:16px;">${selectedMed.name}</div>
        <div style="color:#4b5563; margin-top:5px; font-size:14px;">${selectedMed.form}</div>
        <div style="color:#4b5563; margin-top:2px;">Price: ₱${selectedMed.price.toFixed(2)}</div>
    `;
}

function adjustQty(change) {
    if (!selectedMed) return;
    selectedQty += change;
    if (selectedQty < 0) selectedQty = 0;
    document.getElementById('qtyInput').value = selectedQty;
    updateSelectedInfo();
}

function manualQtyChange(val) {
    if (!selectedMed) return;
    selectedQty = parseInt(val) || 0;
    if (selectedQty < 0) selectedQty = 0;
    updateSelectedInfo();
}

function handleNumClick(qty) {
    if (!selectedMed) {
        alert('Please select a medicine first!');
        return;
    }
    selectedQty = qty;
    const input = document.getElementById('qtyInput');
    input.value = qty;
    updateSelectedInfo();
    
    // Focus input to allow typing, but don't force keyboard if not needed
    input.focus();
    input.select(); 
}

function addToCart() {
    if (!selectedMed || selectedQty === 0) {
        alert('Please select a medicine and quantity!');
        return;
    }

    const existing = cart.find(c => c.id === selectedMed.id);
    if (existing) {
        existing.qty += selectedQty;
    } else {
        cart.push({ id: selectedMed.id, name: selectedMed.name, price: selectedMed.price, qty: selectedQty });
    }

    selectedMed = null;
    selectedQty = 0;
    document.getElementById('selectedInfo').innerHTML = '<div class="placeholder-text">Select a medicine</div>';
    document.getElementById('qtyControls').style.display = 'none';
    renderMeds();
    renderCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
}

function clearSelection() {
    selectedMed = null;
    selectedQty = 0;
    document.getElementById('selectedInfo').innerHTML = '<div class="placeholder-text">Select a medicine</div>';
    document.getElementById('qtyControls').style.display = 'none';
    renderMeds();
}

function checkout() {
    if (cart.length === 0) return;
    
    const now = new Date();
    const transaction = {
        id: Date.now(),
        date: now.toISOString(),
        items: [...cart],
        total: cart.reduce((sum, item) => sum + (item.price * item.qty), 0)
    };

    transactions.push(transaction);
    localStorage.setItem('transactions', JSON.stringify(transactions));
    
    cart = [];
    renderCart();
    alert('Transaction Saved Successfully!');
}

// --- MODAL FUNCTIONS ---

function openReportModal(type) {
    const now = new Date();
    let filtered = [];
    let title = '';

    if (type === 'daily') {
        title = 'DAILY SUMMARY REPORT';
        filtered = transactions.filter(t => {
            const tDate = new Date(t.date);
            return tDate.toDateString() === now.toDateString();
        });
    } else if (type === 'weekly') {
        title = 'WEEKLY SUMMARY REPORT';
        const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        filtered = transactions.filter(t => new Date(t.date) >= weekAgo);
    }

    let reportItems = {};
    filtered.forEach(t => {
        t.items.forEach(item => {
            if (!reportItems[item.name]) {
                reportItems[item.name] = { qty: 0, total: 0, price: item.price };
            }
            reportItems[item.name].qty += item.qty;
            reportItems[item.name].total += (item.price * item.qty);
        });
    });

    let grandTotal = 0;
    let tableRows = '';
    const sortedKeys = Object.keys(reportItems).sort();
    
    sortedKeys.forEach(name => {
        const r = reportItems[name];
        grandTotal += r.total;
        tableRows += `<tr>
            <td>${name}</td>
            <td class="text-center">${r.qty}</td>
            <td class="text-right">₱${r.price.toFixed(2)}</td>
            <td class="text-right">₱${r.total.toFixed(2)}</td>
        </tr>`;
    });

    const modal = document.getElementById('reportModal');
    document.getElementById('modalTitle').innerText = title;
    
    // Content Area
    document.getElementById('modalBody').innerHTML = `
        <p>Generated on: ${now.toLocaleString()}</p>
        <table>
            <thead><tr><th>Medicine Name</th><th>Qty</th><th>Price</th><th>Total</th></tr></thead>
            <tbody>${tableRows || '<tr><td colspan="4" class="text-center">No transactions recorded.</td></tr>'}</tbody>
        </table>
        <div style="margin-top:20px; font-weight:bold; font-size:18px; text-align:right;">Grand Total: ₱${grandTotal.toFixed(2)}</div>
    `;

    // Action Buttons (Direct Print/Save)
    document.getElementById('modalActions').innerHTML = `
        <button class="btn-action btn-back" onclick="closeModal()">Close</button>
        <button class="btn-action btn-save" onclick="saveAsPDF()">Save as PDF</button>
        <button class="btn-action btn-print" onclick="printContent()">Print Report</button>
    `;
    
    modal.style.display = 'block';
}

function openTransactionMonitor() {
    const modal = document.getElementById('reportModal');
    document.getElementById('modalTitle').innerText = 'TRANSACTION HISTORY';
    
    const sortedTrans = [...transactions].sort((a, b) => b.id - a.id);

    let html = '<table><thead><tr><th>ID / Time</th><th>Items</th><th>Total</th><th>Action</th></tr></thead><tbody>';
    
    sortedTrans.forEach(t => {
        const dateObj = new Date(t.date);
        const timeStr = dateObj.toLocaleString();
        const itemsStr = t.items.map(i => `${i.qty}x ${i.name}`).join(', ');
        
        html += `<tr>
            <td style="font-size:12px;">#${t.id}<br>${timeStr}</td>
            <td>${itemsStr}</td>
            <td class="text-right">₱${t.total.toFixed(2)}</td>
            <td class="text-center"><button class="btn-delete-sm" onclick="deleteTransaction(${t.id})">Delete</button></td>
        </tr>`;
    });

    html += '</tbody></table>';
    if(transactions.length === 0) html = '<p class="placeholder-text">No transactions yet.</p>';

    document.getElementById('modalBody').innerHTML = html;

    // Actions: Clear All + Close
    document.getElementById('modalActions').innerHTML = `
        <button class="btn-action btn-back" onclick="closeModal()">Close</button>
        <button class="btn-action" style="background:var(--danger); color:white;" onclick="clearAllHistory()">Clear All History</button>
    `;
    
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('reportModal');
    modal.style.display = 'none';
    setTimeout(() => {
        document.getElementById('modalBody').innerHTML = '';
        document.getElementById('modalActions').innerHTML = '';
    }, 200);
}

function printContent() {
    const printContents = document.getElementById('modalBody').innerHTML;
    const title = document.getElementById('modalTitle').innerText;
    const win = window.open('', '', 'height=600,width=800');
    if(win) {
        win.document.write('<html><head><title>' + title + '</title>');
        win.document.write('<style>body{font-family:Arial;} table{width:100%;border-collapse:collapse;} th,td{border:1px solid #ddd;padding:8px;} th{background:#f4f4f4;}</style>');
        win.document.write('</head><body>');
        win.document.write('<h2>' + title + '</h2>');
        win.document.write(printContents);
        win.document.write('</body></html>');
        win.document.close();
        win.print();
    } else {
        alert("Please allow popups to print.");
    }
}

function saveAsPDF() {
    printContent(); 
}

function deleteTransaction(id) {
    if(confirm('Are you sure you want to delete this specific transaction?')) {
        transactions = transactions.filter(t => t.id !== id);
        localStorage.setItem('transactions', JSON.stringify(transactions));
        openTransactionMonitor(); // Refresh list
    }
}

function clearAllHistory() {
    if(confirm('WARNING: This will delete ALL transaction history. Are you sure?')) {
        transactions = [];
        localStorage.setItem('transactions', JSON.stringify(transactions));
        openTransactionMonitor(); // Refresh list
    }
}

window.onclick = function(event) {
    const modal = document.getElementById('reportModal');
    if (event.target == modal) {
        closeModal();
    }
}

renderMeds();
renderCart();