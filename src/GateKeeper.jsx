

// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';

// // function GateKeeper() {
// //   const [formData, setFormData] = useState({
// //     truckNo: '',
// //     dispatchDate: new Date().toISOString().split('T')[0], // Today's date
// //     invoiceNo: '',
// //     contact: '',
// //   });

// //   const [plantList, setPlantList] = useState([]);
// //   const [selectedPlant, setSelectedPlant] = useState('');
// //   const [truckNumbers, setTruckNumbers] = useState([]);
// //   const [checkedInTrucks, setCheckedInTrucks] = useState([]);

// //   // Fetch plant list
// //   useEffect(() => {
// //     axios.get('http://localhost:3001/api/plants')
// //       .then(res => setPlantList(res.data))
// //       .catch(err => console.error('Error fetching plants:', err));
// //   }, []);

// //   // Fetch trucks for selected plant
// //   useEffect(() => {
// //     if (selectedPlant) {
// //       axios.get(`http://localhost:3001/api/trucks?plantName=${selectedPlant}`)
// //         .then(res => setTruckNumbers(res.data))
// //         .catch(err => console.error('Error fetching trucks:', err));
// //     }
// //   }, [selectedPlant]);

// //   // Fetch checked-in trucks
// //   useEffect(() => {
// //     if (selectedPlant) {
// //       axios.get(`http://localhost:3001/api/checked-in-trucks?plantName=${selectedPlant}`)
// //         .then(res => setCheckedInTrucks(res.data))
// //         .catch(err => console.error('Error fetching checked-in trucks:', err));
// //     }
// //   }, [selectedPlant]);

// //   const handleChange = (e) => {
// //     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
// //   };

// //   const handlePlantChange = (e) => {
// //     setSelectedPlant(e.target.value);
// //     setCheckedInTrucks([]);
// //     setFormData(prev => ({
// //       ...prev,
// //       truckNo: '',
// //       dispatchDate: new Date().toISOString().split('T')[0], // reset to today
// //     }));
// //   };

// //   const handleTruckSelect = (truckNo) => {
// //     setFormData(prev => ({ ...prev, truckNo }));
// //   };

// //   const handleCheckedInClick = (truckNo) => {
// //     setFormData(prev => ({ ...prev, truckNo }));
// //   };

// //   const handleSubmit = async (type) => {
// //     const { truckNo } = formData;
// //     if (!truckNo) return alert('Please select a truck number.');

// //     try {
// //       const res = await axios.post('http://localhost:3001/api/update-truck-status', {
// //         truckNo,
// //         plantName: selectedPlant,
// //         type
// //       });

// //       // Remove from available truck list
// //       setTruckNumbers(prev => prev.filter(t => t.TruckNo !== truckNo));

// //       if (type === 'Check In' && !checkedInTrucks.includes(truckNo)) {
// //         setCheckedInTrucks(prev => [...prev, { TruckNo: truckNo }]);
// //       }

// //       alert(res.data.message);
// //       setFormData(prev => ({ ...prev, truckNo: '' }));
// //     } 
    
// //     catch (err) {
// //       console.error('Error:', err);
// //       alert('Error while updating status');
// //     }
// //   };

// //   return (
// //     <div className="bg-gradient-to-br from-indigo-50 to-blue-100 min-h-screen p-6">
// //       <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6 grid grid-cols-1 md:grid-cols-3 gap-6">

// //         {/* Left Panel */}
// //         <div className="col-span-1 space-y-4">
// //           <select
// //             value={selectedPlant}
// //             onChange={handlePlantChange}
// //             className="w-full border px-4 py-2 rounded-md shadow-sm"
// //           >
// //             <option value="">Select Plant</option>
// //             {plantList.map((plant, i) => (
// //               <option key={i} value={plant}>{plant}</option>
// //             ))}
// //           </select>

// //           <div className="bg-blue-100 rounded p-4 h-[300px] overflow-y-auto">
// //             <h3 className="text-md font-semibold text-blue-800 mb-2">Truck List</h3>
// //             <ul className="space-y-1 text-sm text-gray-700 cursor-pointer">
// //               {truckNumbers.map((truck, index) => (
// //                 <li
// //                   key={index}
// //                   onClick={() => handleTruckSelect(truck.TruckNo)}
// //                   className="hover:text-blue-600"
// //                 >
// //                   {truck.TruckNo}
// //                 </li>
// //               ))}
// //               {truckNumbers.length === 0 && (
// //                 <li className="text-gray-400 italic">No trucks available</li>
// //               )}
// //             </ul>
// //           </div>
// //         </div>

// //         {/* Center Panel - Form */}
// //         <div className="col-span-1 space-y-4">
// //           <img
// //             src="https://pngimg.com/uploads/truck/truck_PNG16234.png"
// //             alt="Truck"
// //             className="w-full object-contain"
// //           />

// //           <div>
// //             <label className="block font-semibold text-gray-700">Truck No.</label>
// //             <input
// //               name="truckNo"
// //               value={formData.truckNo}
// //               onChange={handleChange}
// //               className="w-full border rounded px-4 py-2 shadow-sm"
// //               placeholder="Enter Truck No"
// //             />
// //           </div>

// //           <div>
// //             <label className="block font-semibold text-gray-700">Dispatch Date</label>
// //             <input
// //               name="dispatchDate"
// //               value={formData.dispatchDate}
// //               onChange={handleChange}
// //               type="date"
// //               className="w-full border rounded px-4 py-2 shadow-sm"
// //             />
// //           </div>

// //           <div>
// //             <label className="block font-semibold text-gray-700">Invoice Number</label>
// //             <input
// //               name="invoiceNo"
// //               value={formData.invoiceNo}
// //               onChange={handleChange}
// //               className="w-full border rounded px-4 py-2 shadow-sm"
// //               placeholder="Invoice No"
// //             />
// //           </div>

// //           <div>
// //             <label className="block font-semibold text-gray-700">Contact No.</label>
// //             <input
// //               name="contact"
// //               value={formData.contact}
// //               onChange={handleChange}
// //               className="w-full border rounded px-4 py-2 shadow-sm"
// //               placeholder="Phone Number"
// //             />
// //           </div>

// //           <div className="flex justify-between mt-4">
// //             <button
// //               className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
// //               onClick={() => handleSubmit('Check In')}
// //             >
// //               Check In
// //             </button>
// //             <button
// //               className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
// //               onClick={() => handleSubmit('Check Out')}
// //             >
// //               Check Out
// //             </button>
// //           </div>
// //         </div>

// //         {/* Right Panel - Checked-In Trucks */}
// //         <div className="col-span-1">
// //           <div className="bg-green-100 rounded p-4 h-full overflow-y-auto">
// //             <h3 className="text-lg font-bold text-green-800 mb-2">Checked In Trucks</h3>
// //             <ul className="space-y-1 text-sm text-gray-700">
// //               {checkedInTrucks.map((truck, idx) => (
// //                 <li
// //                   key={idx}
// //                   className="hover:text-green-600 cursor-pointer"
// //                   onClick={() => handleCheckedInClick(truck.TruckNo)}
// //                 >
// //                   {truck.TruckNo}
// //                 </li>
// //               ))}
// //               {checkedInTrucks.length === 0 && (
// //                 <li className="text-gray-400 italic">No checked-in trucks</li>
// //               )}
// //             </ul>
// //           </div>
// //         </div>

// //       </div>
// //     </div>
// //   );
// // }

// // export default GateKeeper;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function GateKeeper() {
//   const [formData, setFormData] = useState({
//     truckNo: '',
//     dispatchDate: '',
//     invoiceNo: '',
//     contact: '',
//   });

//   const [plantList, setPlantList] = useState([]);
//   const [selectedPlant, setSelectedPlant] = useState('');
//   const [truckNumbers, setTruckNumbers] = useState([]);
//   const [checkedInTrucks, setCheckedInTrucks] = useState([]);

//   // Set default dispatch date to today
//   useEffect(() => {
//     const today = new Date().toISOString().split('T')[0];
//     setFormData(prev => ({ ...prev, dispatchDate: today }));
//   }, []);

//   // Fetch list of plants
//   useEffect(() => {
//     axios.get('http://localhost:3001/api/plants')
//       .then(res => setPlantList(res.data))
//       .catch(err => console.error('Error fetching plants:', err));
//   }, []);

//   // Fetch trucks when a plant is selected
//   useEffect(() => {
//     if (selectedPlant) {
//       axios.get(`http://localhost:3001/api/trucks?plantName=${selectedPlant}`)
//         .then(res => setTruckNumbers(res.data))
//         .catch(err => console.error('Error fetching trucks:', err));

//       axios.get(`http://localhost:3001/api/checked-in-trucks?plantName=${selectedPlant}`)
//         .then(res => setCheckedInTrucks(res.data))
//         .catch(err => console.error('Error fetching checked-in trucks:', err));
//     }
//   }, [selectedPlant]);

//   const handleChange = (e) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handlePlantChange = (e) => {
//     setSelectedPlant(e.target.value);
//     setCheckedInTrucks([]);
//     setFormData(prev => ({ ...prev, truckNo: '' }));
//   };

//   const handleTruckSelect = (truckNo) => {
//     setFormData(prev => ({ ...prev, truckNo }));
//   };

//   const handleCheckedInTruckClick = (truckNo) => {
//     setFormData(prev => ({ ...prev, truckNo }));
//   };

//   const handleSubmit = async (type) => {
//     const { truckNo } = formData;
//     if (!truckNo) return alert('Please select a truck number.');

//     try {
//       const res = await axios.post('http://localhost:3001/api/update-truck-status', {
//         truckNo,
//         plantName: selectedPlant,
//         type
//       });

//       // Remove truck from display list
//       setTruckNumbers(prev => prev.filter(t => t.TruckNo !== truckNo));

//       // Update checked-in truck list
//       if (type === 'Check In' && !checkedInTrucks.includes(truckNo)) {
//         setCheckedInTrucks(prev => [...prev, truckNo]);
//       }

//       alert(res.data.message);
//       setFormData(prev => ({ ...prev, truckNo: '' }));
//     } catch (err) {
//       console.error('Error:', err);
//       if (err.response && err.response.data && err.response.data.message) {
//         alert(err.response.data.message);
//       } else {
//         alert('Error while updating status');
//       }
//     }
//   };

//   return (
//     <div className="bg-gradient-to-br from-indigo-50 to-blue-100 min-h-screen p-6">
//       <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6 grid grid-cols-1 md:grid-cols-3 gap-6">

//         {/* Left Panel - Plant & Truck List */}
//         <div className="col-span-1 space-y-4">
//           <select
//             value={selectedPlant}
//             onChange={handlePlantChange}
//             className="w-full border px-4 py-2 rounded-md shadow-sm"
//           >
//             <option value="">Select Plant</option>
//             {plantList.map((plant, i) => (
//               <option key={i} value={plant}>{plant}</option>
//             ))}
//           </select>

//           <div className="bg-blue-100 rounded p-4 h-[300px] overflow-y-auto">
//             <h3 className="text-md font-semibold text-blue-800 mb-2">Truck List</h3>
//             <ul className="space-y-1 text-sm text-gray-700 cursor-pointer">
//               {truckNumbers.map((truck, index) => (
//                 <li
//                   key={index}
//                   onClick={() => handleTruckSelect(truck.TruckNo)}
//                   className="hover:text-blue-600"
//                 >
//                   {truck.TruckNo}
//                 </li>
//               ))}
//               {truckNumbers.length === 0 && <li className="text-gray-400 italic">No trucks available</li>}
//             </ul>
//           </div>
//         </div>

//         {/* Center Panel - Form */}
//         <div className="col-span-1 space-y-4">
//           <img
//             src="https://pngimg.com/uploads/truck/truck_PNG16234.png"
//             alt="Truck"
//             className="w-full object-contain"
//           />

//           <div>
//             <label className="block font-semibold text-gray-700">Truck No.</label>
//             <input
//               name="truckNo"
//               value={formData.truckNo}
//               onChange={handleChange}
//               className="w-full border rounded px-4 py-2 shadow-sm"
//               placeholder="Enter Truck No"
//             />
//           </div>

//           <div>
//             <label className="block font-semibold text-gray-700">Dispatch Date</label>
//             <input
//               name="dispatchDate"
//               value={formData.dispatchDate}
//               onChange={handleChange}
//               type="date"
//               className="w-full border rounded px-4 py-2 shadow-sm"
//             />
//           </div>

//           <div>
//             <label className="block font-semibold text-gray-700">Invoice Number</label>
//             <input
//               name="invoiceNo"
//               value={formData.invoiceNo}
//               onChange={handleChange}
//               className="w-full border rounded px-4 py-2 shadow-sm"
//               placeholder="Invoice No"
//             />
//           </div>

//           <div>
//             <label className="block font-semibold text-gray-700">Contact No.</label>
//             <input
//               name="contact"
//               value={formData.contact}
//               onChange={handleChange}
//               className="w-full border rounded px-4 py-2 shadow-sm"
//               placeholder="Phone Number"
//             />
//           </div>

//           <div className="flex justify-between mt-4">
//             <button
//               className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//               onClick={() => handleSubmit('Check In')}
//             >
//               Check In
//             </button>
//             <button
//               className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
//               onClick={() => handleSubmit('Check Out')}
//             >
//               Check Out
//             </button>
//           </div>
//         </div>

//         {/* Right Panel - Checked In Trucks */}
//         <div className="col-span-1">
//           <div className="bg-green-100 rounded p-4 h-full overflow-y-auto">
//             <h3 className="text-lg font-bold text-green-800 mb-2">Checked In Trucks</h3>
//             <ul className="space-y-1 text-sm text-gray-700 cursor-pointer">
//               {checkedInTrucks.map((truck, idx) => (
//                 <li
//                   key={idx}
//                   onClick={() => handleCheckedInTruckClick(truck.TruckNo || truck)}
//                   className="hover:text-green-700"
//                 >
//                   {truck.TruckNo || truck}
//                 </li>
//               ))}
//               {checkedInTrucks.length === 0 && <li className="text-gray-400 italic">No checked-in trucks</li>}
//             </ul>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default GateKeeper;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import truck from './assets/truck.jpg';
function GateKeeper() {
  const [formData, setFormData] = useState({
    truckNo: '',
    dispatchDate: new Date().toISOString().split('T')[0],
    invoiceNo: '',
    remarks: 'This is a system-generated remark.',
    quantity:'',
  });

  const [plantList, setPlantList] = useState([]);
  const [selectedPlant, setSelectedPlant] = useState('');
  const [truckNumbers, setTruckNumbers] = useState([]);
  const [checkedInTrucks, setCheckedInTrucks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/plants')
      .then(res => setPlantList(res.data))
      .catch(err => console.error('Error fetching plants:', err));
  }, []);
 useEffect(() => {
    axios.get('http://localhost:3001/api/fetch-qty')
      .then(res => setPlantList(res.data))
      .catch(err => console.error('Error fetching plants:', err));
  }, []);

  useEffect(() => {
    if (selectedPlant) {
      axios.get(`http://localhost:3001/api/trucks?plantName=${selectedPlant}`)
        .then(res => setTruckNumbers(res.data))
        .catch(err => console.error('Error fetching trucks:', err));
    }
  }, [selectedPlant]);

  useEffect(() => {
    if (selectedPlant) {
      axios.get(`http://localhost:3001/api/checked-in-trucks?plantName=${selectedPlant}`)
        .then(res => setCheckedInTrucks(res.data))
        .catch(err => console.error('Error fetching checked-in trucks:', err));
    }
  }, [selectedPlant]);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePlantChange = (e) => {
    setSelectedPlant(e.target.value);
    setCheckedInTrucks([]);
    setFormData(prev => ({
      ...prev,
      truckNo: '',
      dispatchDate: new Date().toISOString().split('T')[0],
    }));
  };

// const handleTruckSelect = async (truckNo) => {
//   setFormData(prev => ({ ...prev, truckNo }));

//   try {
//     const res = await axios.get('http://localhost:3001/api/fetch-remarks', {
//       params: {
//         plantName: selectedPlant,
//         truckNo,
//       }
//     });

//     setFormData(prev => ({
//       ...prev,
//       remarks: res.data.remarks || 'No remarks available.'
//     }));
//   } catch (err) {
//     console.error('Error fetching remarks:', err);
//     setFormData(prev => ({
//       ...prev,
//       remarks: 'No remarks available or error fetching remarks.'
//     }));
//   }
// };


  const handleCheckedInClick = (truckNo) => {
    setFormData(prev => ({ ...prev, truckNo }));
  };

  const handleSubmit = async (type) => {
    const { truckNo } = formData;
    if (!truckNo) {
      toast.warn('🚛 Please select a truck number.');
      return;
    }

    try {
      const res = await axios.post('http://localhost:3001/api/update-truck-status', {
        truckNo,
        plantName: selectedPlant,
        type
      });

      setTruckNumbers(prev => prev.filter(t => t.TruckNo !== truckNo));

      if (type === 'Check In' && !checkedInTrucks.includes(truckNo)) {
        setCheckedInTrucks(prev => [...prev, { TruckNo: truckNo }]);
      }

      toast.success(res.data.message);
      setFormData(prev => ({ ...prev, truckNo: '' }));
    } catch (err) {
      console.error('Error:', err);
      if (err.response?.status === 400 && err.response.data?.message) {
        toast.error(err.response.data.message);
      } else {
        toast.error('⚠️ Error while updating status');
      }
    }
  };
const handleTruckSelect = async (truckNo) => {
  setFormData(prev => ({ ...prev, truckNo }));

  try {
    const resRemarks = await axios.get('http://localhost:3001/api/fetch-remarks', {
      params: {
        plantName: selectedPlant,
        truckNo,
      }
    });

    setFormData(prev => ({
      ...prev,
      remarks: resRemarks.data.remarks || 'No remarks available.'
    }));

    const resQty = await axios.get('http://localhost:3001/api/fetch-qty', {
      params: {
        plantName: selectedPlant,
        truckNo,
      }
    });

    setFormData(prev => ({
      ...prev,
      quantity: resQty.data.quantity || ''
    }));
  } catch (err) {
    console.error('Error fetching remarks or quantity:', err);
    setFormData(prev => ({
      ...prev,
      remarks: 'No remarks available or error fetching remarks.',
      quantity: ''
    }));
  }
};

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-blue-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-6 grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Left Panel */}
        <div className="col-span-1 space-y-4">
          <select
            value={selectedPlant}
            onChange={handlePlantChange}
            className="w-full border px-4 py-2 rounded-md shadow-sm"
          >
            <option value="">Select Plant</option>
            {plantList.map((plant, i) => (
              <option key={i} value={plant.PlantName}>{plant.PlantName}</option>
            ))}
          </select>

          <div className="bg-blue-100 rounded-lg p-4 h-[300px] overflow-y-auto">
            <h3 className="text-md font-semibold text-blue-800 mb-2">Truck List</h3>
            <ul className="space-y-1 text-sm text-gray-700 cursor-pointer">
              {truckNumbers.map((truck, index) => (
                <li
                  key={index}
                  onClick={() => handleTruckSelect(truck.TruckNo)}
                  className="hover:text-blue-600"
                >
                  {truck.TruckNo}
                </li>
              ))}
              {truckNumbers.length === 0 && (
                <li className="text-gray-400 italic">No trucks available</li>
              )}
            </ul>
          </div>
        </div>

        {/* Center Panel - Form */}
        <div className="col-span-1 space-y-4">
     <div className="relative w-full">
  <img
    src={truck}
    alt="Truck"
    className="w-full object-contain rounded-lg shadow-md"
  />
  {formData.quantity && (
    <div className="absolute top-4 right-4 bg-yellow-500 text-white font-bold px-3 py-1 rounded-full text-sm shadow-lg">
      Qty: {formData.quantity}
    </div>
  )}
</div>


          <div>
            <label className="block font-semibold text-gray-700">Truck No.</label>
            <input
              name="truckNo"
              value={formData.truckNo}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2 shadow-sm"
              placeholder="Enter Truck No"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700">Dispatch Date</label>
            <input
              name="dispatchDate"
              value={formData.dispatchDate}
              onChange={handleChange}
              type="date"
              className="w-full border rounded px-4 py-2 shadow-sm"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700">Invoice Number</label>
            <input
              name="invoiceNo"
              value={formData.invoiceNo}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2 shadow-sm"
              placeholder="Invoice No"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700">Remarks</label>
            <textarea
              name="remarks"
              value={formData.remarks}
              readOnly
              className="w-full border rounded px-4 py-2 shadow-sm bg-gray-100 text-gray-700 resize-none h-24"
            />
          </div>


           <div>
            <label className="block font-semibold text-gray-700">Quantity</label>
            <input
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2 shadow-sm"
              placeholder="Quantity"
            />
          </div>

          <div className="flex justify-between mt-4">
            <button
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              onClick={() => handleSubmit('Check In')}
            >
              Check In
            </button>
            <button
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              onClick={() => handleSubmit('Check Out')}
            >
              Check Out
            </button>
          </div>
        </div>

        {/* Right Panel - Checked-In Trucks */}
        <div className="col-span-1">
          <div className="bg-green-100 rounded-lg p-4 h-full overflow-y-auto">
            <h3 className="text-lg font-bold text-green-800 mb-2">Checked In Trucks</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              {checkedInTrucks.map((truck, idx) => (
                <li
                  key={idx}
                  className="hover:text-green-600 cursor-pointer"
                  onClick={() => handleCheckedInClick(truck.TruckNo)}
                >
                  {truck.TruckNo}
                </li>
              ))}
              {checkedInTrucks.length === 0 && (
                <li className="text-gray-400 italic">No checked-in trucks</li>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
    </div>
  );
}

export default GateKeeper;