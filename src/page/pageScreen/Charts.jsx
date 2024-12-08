import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement, // Tambahkan ini
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { Bar, Line, Pie } from 'react-chartjs-2';
import CardDashboardMarketing from '../../component/CardDashboardMarketing';
import CardChart from '../../component/CardChart';
import { GrLineChart } from 'react-icons/gr';

// Mendaftarkan komponen yang dibutuhkan dari ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement, // Registrasi BarElement
  Title,
  Tooltip,
  Legend
);





const Charts = () => {


  const data = {
    labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli'],
    datasets: [
      {
        label: 'Penjualan',
        data: [5, 10, 5, 25, 15, 10, 15],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 2,
      },
    ],
  };


  const options = {
    responsive: true,
    maintainAspectRatio: false, 
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Bulan',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Jumlah Penjualan',
        },
        beginAtZero: true,
      },
    },
  };


  const dataPie = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'], // Label untuk tiap bagian pie
    datasets: [
      {
        label: 'Jumlah Item',
        data: [12, 19, 3, 5, 2, 3], // Nilai untuk setiap label
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  const optionsPie = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom', // Tetap di bawah
        labels: {
          boxWidth: 15, // Lebar kotak warna
          boxHeight: 15, // Tinggi kotak warna
          padding: 10, // Jarak antar item
          font: {
            size: 12, // Ukuran font teks
            family: 'Arial', // Jenis font
          },
          color: '#333', // Warna teks
        },
      },
    },
    layout: {
      padding: {
        top: 0, // Jarak atas grafik
        bottom: 10,
      },
    },
  };
  
  
  const dataDua = {
    labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli'], // Label sumbu X
    datasets: [
      {
        label: 'Penjualan Produk A',
        data: [5, 10, 15, 20, 25, 30, 35], // Data untuk Produk A
        borderColor: 'rgba(75, 192, 192, 1)', // Warna garis
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Warna area di bawah garis
        borderWidth: 2,
      },
      {
        label: 'Penjualan Produk B',
        data: [10, 15, 10, 25, 20, 15, 10], // Data untuk Produk B
        borderColor: 'rgba(255, 99, 132, 1)', // Warna garis
        backgroundColor: 'rgba(255, 99, 132, 0.2)', // Warna area di bawah garis
        borderWidth: 2,
      },
      {
        label: 'Penjualan Produk C',
        data: [20, 25, 20, 15, 10, 5, 10], // Data untuk Produk C
        borderColor: 'rgba(54, 162, 235, 1)', // Warna garis
        backgroundColor: 'rgba(54, 162, 235, 0.2)', // Warna area di bawah garis
        borderWidth: 2,
      },
    ],
  };
  
  const optionsDua = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom', // Posisikan legend di atas grafik
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Bulan',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Jumlah Penjualan',
        },
        beginAtZero: true,
      },
    },
  };

  const dataBar = {
    labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli'], // Label pada sumbu X
    datasets: [
      {
        label: 'Produk A',
        data: [12, 19, 3, 5, 2, 3, 10], // Data untuk Produk A
        backgroundColor: 'rgba(75, 192, 192, 0.5)', // Warna bar Produk A
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Produk B',
        data: [7, 11, 5, 8, 3, 7, 12], // Data untuk Produk B
        backgroundColor: 'rgba(255, 99, 132, 0.5)', // Warna bar Produk B
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Produk C',
        data: [3, 5, 2, 3, 9, 6, 7], // Data untuk Produk C
        backgroundColor: 'rgba(54, 162, 235, 0.5)', // Warna bar Produk C
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };


  const optionsBar = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom', // Legend di atas
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Bulan', // Judul untuk sumbu X
        },
        stacked: false, // Jika ingin bar ditumpuk, ubah ke `true`
      },
      y: {
        title: {
          display: true,
          text: 'Jumlah Penjualan', // Judul untuk sumbu Y
        },
        beginAtZero: true,
      },
    },
  };
  
  
  


  return (
    <div id='home' className=" w-full pt-10 h-full flex flex-col ">
      <CardChart/>
      {/* Baris pertama */}
     <div className='flex text-gray-500 flex-col gap-24' >
     <div className="flex justify-center items-center gap-16">
        <div className="h-[350px] relative shadow-[0_0_15px_rgba(0,0,0,0.2)] pt-20 flex items-center justify-center p-5 w-[800px]">
        <div className='absolute flex gap-3  text-end -top-5 left-3 items-end  '>
            <div className='w-16 flex text-white rounded-md items-center justify-center  h-16 bg-[#53B7CB]' >
            <GrLineChart size={35} />
            </div>
            <h1 className=" text-xl ">Coloured Lines Chart - Rounded</h1>
          </div>
          <Line data={data} options={options} />
        </div>
        <div className="h-[350px] relative shadow-[0_0_15px_rgba(0,0,0,0.2)] flex pt-20 items-center justify-center w-[650px]">
        <div className='absolute flex gap-3  text-end -top-5 left-3 items-end  '>
            <div className='w-16 flex text-white rounded-md items-center justify-center  h-16 bg-[#CF406C]' >
            <GrLineChart size={35} />
            </div>
            <h1 className=" text-xl ">Coloured Lines Chart - Rounded</h1>
          </div>
          <div style={{ width: '550px', height: '280px', margin: '0 auto' }} className='pb-5' >
          <Bar data={dataBar} options={optionsBar} />
          </div>
        </div>
      </div>

      {/* Baris kedua */}
      <div className="flex justify-center items-center gap-14">
        <div className="h-[350px] pt-20 relative shadow-[0_0_15px_rgba(0,0,0,0.2)]  flex items-center justify-center p-5 w-[800px]">
          <div className='absolute flex gap-3  text-end -top-5 left-3 items-end  '>
            <div className='w-16 flex text-white rounded-md items-center justify-center  h-16 bg-orange-400' >
            <GrLineChart size={35} />
            </div>
            <h1 className=" text-xl ">Coloured Lines Chart - Rounded</h1>
          </div>
          <Line data={dataDua} options={optionsDua} />
        </div>
        <div className="h-[350px] relative shadow-[0_0_15px_rgba(0,0,0,0.2)] pb-5 flex items-center pt-20 justify-center w-[650px]">
        <div className='absolute flex gap-3  text-end -top-5 left-3 items-end  '>
            <div className='w-16 flex text-white rounded-md items-center justify-center  h-16 bg-blue-400' >
            <GrLineChart size={35} />
            </div>
            <h1 className=" text-xl ">Coloured Lines Chart - Rounded</h1>
          </div>
          <div style={{ width: '400px', height: '280px', margin: '0 auto' }} className='' >
            <Pie data={dataPie} options={optionsPie} />
          </div>
        </div>
      </div>
     </div> 
    </div>
  );
};

export default Charts;
