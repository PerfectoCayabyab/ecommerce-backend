// src/app/dashboard/page.tsx
'use client'

import { useEffect } from 'react'
import * as echarts from 'echarts' 

export default function DashboardPage() {
  useEffect(() => {
    const chart = echarts.init(document.getElementById('sales-chart')!)
    chart.setOption({
      animation: false,
      tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderColor: '#e5e7eb',
        textStyle: { color: '#1f2937' },
      },
      legend: {
        data: ['Revenue', 'Orders'],
        bottom: 0,
        textStyle: { color: '#1f2937' },
      },
      grid: { top: 10, right: 10, bottom: 30, left: 50 },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLine: { lineStyle: { color: '#e5e7eb' } },
        axisLabel: { color: '#1f2937' },
      },
      yAxis: {
        type: 'value',
        axisLine: { show: false },
        axisLabel: { color: '#1f2937' },
        splitLine: { lineStyle: { color: '#f3f4f6' } },
      },
      series: [
        {
          name: 'Revenue',
          type: 'line',
          smooth: true,
          data: [8500, 11000, 12400, 9800, 15600, 14500, 16000],
          lineStyle: {
            width: 3,
            color: 'rgba(87, 181, 231, 1)',
          },
          symbol: 'none',
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(87, 181, 231, 0.1)' },
                { offset: 1, color: 'rgba(87, 181, 231, 0.01)' },
              ],
            },
          },
        },
        {
          name: 'Orders',
          type: 'line',
          smooth: true,
          data: [120, 182, 191, 134, 290, 330, 310],
          lineStyle: {
            width: 3,
            color: 'rgba(141, 211, 199, 1)',
          },
          symbol: 'none',
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(141, 211, 199, 0.1)' },
                { offset: 1, color: 'rgba(141, 211, 199, 0.01)' },
              ],
            },
          },
        },
      ],
    })

    const handleResize = () => chart.resize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
    <header className="bg-white shadow-sm">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 px-4">
      
          <div className="flex items-center">
            <div className="text-2xl font-['Pacifico'] text-primary">E-Commerce Backend</div>
          </div>

    
          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <div
                className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none w-10 h-10 justify-center"
              >
                <i className="ri-search-line text-gray-400"></i>
              </div>
              <input
                type="text"
                className="w-full py-2 pl-10 pr-4 text-sm text-gray-700 bg-gray-100 border-none rounded focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Search products, orders, customers..."
              />
            </div>
          </div>

     
          <div className="flex items-center space-x-4">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <i className="ri-notification-3-line text-gray-600"></i>
              <span
                className="absolute top-1 right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center"
                >3</span>
            </div>
            <div className="flex items-center space-x-2">
              <div
                className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center"
              >
                <span className="text-primary font-medium text-sm">JD</span>
              </div>
              <span className="text-sm font-medium text-gray-700 hidden md:block"
                >John Doe</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <nav className="bg-white shadow-sm border-t border-gray-100">
      <div className="container mx-auto">
        <div className="flex items-center space-x-1 px-4 h-12 overflow-x-auto">
          <a
            href="#"
            className="px-4 py-2 text-sm font-medium text-primary border-b-2 border-primary"
            >Dashboard</a>
          <a
            href="#"
            className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary"
            >Orders</a>
          <a
            href="#"
            className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary"
            >Products</a>
          <a
            href="#"
            className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary"
            >Customers</a>
          <a
            href="#"
            className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary"
            >Analytics</a>
          <a
            href="#"
            className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary"
            >Settings</a>
        </div>
      </div>
    </nav>

    <main className="container mx-auto px-4 py-6">
 
      <div className="flex flex-col md:flex-row justify-between items-start mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-600">
            Welcome back, John! Here&lsquo;s what&lsquo;s happening today.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <button
            className="bg-primary text-white px-4 py-2 rounded-button flex items-center space-x-2 whitespace-nowrap"
          >
            <i className="ri-download-line"></i>
            <span>Export Report</span>
          </button>
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
  
        <div className="bg-white p-5 rounded shadow-sm border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Sales</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-1">$124,563.00</h3>
            </div>
            <div
              className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center"
            >
              <i className="ri-shopping-bag-line text-primary"></i>
            </div>
          </div>
          <div className="flex items-center mt-4">
            <span className="text-green-500 flex items-center text-sm font-medium">
              <i className="ri-arrow-up-line mr-1"></i>
              12.5%
            </span>
            <span className="text-xs text-gray-500 ml-2">vs last month</span>
          </div>
        </div>

 
        <div className="bg-white p-5 rounded shadow-sm border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Orders</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-1">8,492</h3>
            </div>
            <div
              className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center"
            >
              <i className="ri-file-list-3-line text-blue-500"></i>
            </div>
          </div>
          <div className="flex items-center mt-4">
            <span className="text-green-500 flex items-center text-sm font-medium">
              <i className="ri-arrow-up-line mr-1"></i>
              8.2%
            </span>
            <span className="text-xs text-gray-500 ml-2">vs last month</span>
          </div>
        </div>

     
        <div className="bg-white p-5 rounded shadow-sm border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Customers</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-1">3,642</h3>
            </div>
            <div
              className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center"
            >
              <i className="ri-user-line text-purple-500"></i>
            </div>
          </div>
          <div className="flex items-center mt-4">
            <span className="text-green-500 flex items-center text-sm font-medium">
              <i className="ri-arrow-up-line mr-1"></i>
              5.3%
            </span>
            <span className="text-xs text-gray-500 ml-2">vs last month</span>
          </div>
        </div>


        <div className="bg-white p-5 rounded shadow-sm border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Revenue</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-1">$86,254.40</h3>
            </div>
            <div
              className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center"
            >
              <i className="ri-money-dollar-circle-line text-green-500"></i>
            </div>
          </div>
          <div className="flex items-center mt-4">
            <span className="text-red-500 flex items-center text-sm font-medium">
              <i className="ri-arrow-down-line mr-1"></i>
              2.4%
            </span>
            <span className="text-xs text-gray-500 ml-2">vs last month</span>
          </div>
        </div>
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
     
        <div
          className="bg-white p-5 rounded shadow-sm border border-gray-100 lg:col-span-2"
        >
          <div
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6"
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Sales Performance
              </h3>
              <p className="text-sm text-gray-500">Revenue trends over time</p>
            </div>
            <div className="mt-4 sm:mt-0 flex bg-gray-100 rounded-full p-1">
              <button
                className="px-3 py-1 text-xs font-medium rounded-full bg-primary text-white"
              >
                Daily
              </button>
              <button
                className="px-3 py-1 text-xs font-medium rounded-full text-gray-600"
              >
                Weekly
              </button>
              <button
                className="px-3 py-1 text-xs font-medium rounded-full text-gray-600"
              >
                Monthly
              </button>
            </div>
          </div>
          <div id="sales-chart" className="h-80 w-full"></div>
        </div>

        <div className="bg-white p-5 rounded shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-800">Top Products</h3>
            <a href="#" className="text-sm text-primary font-medium">View All</a>
          </div>
          <div className="space-y-4">
            <div className="flex items-center">
              <div
                className="w-12 h-12 rounded bg-gray-100 flex items-center justify-center mr-3"
              >
                <i className="ri-macbook-line text-gray-500"></i>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium text-gray-800">
                  MacBook Pro M2
                </h4>
                <p className="text-xs text-gray-500">Electronics</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-800">$2,499</p>
                <p className="text-xs text-green-500">+12.5%</p>
              </div>
            </div>
            <div className="flex items-center">
              <div
                className="w-12 h-12 rounded bg-gray-100 flex items-center justify-center mr-3"
              >
                <i className="ri-headphone-line text-gray-500"></i>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium text-gray-800">
                  Wireless Headphones
                </h4>
                <p className="text-xs text-gray-500">Audio</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-800">$349</p>
                <p className="text-xs text-green-500">+8.3%</p>
              </div>
            </div>
            <div className="flex items-center">
              <div
                className="w-12 h-12 rounded bg-gray-100 flex items-center justify-center mr-3"
              >
                <i className="ri-t-shirt-line text-gray-500"></i>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium text-gray-800">
                  Premium T-Shirt
                </h4>
                <p className="text-xs text-gray-500">Apparel</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-800">$49</p>
                <p className="text-xs text-green-500">+24.1%</p>
              </div>
            </div>
            <div className="flex items-center">
              <div
                className="w-12 h-12 rounded bg-gray-100 flex items-center justify-center mr-3"
              >
                <i className="ri-watch-line text-gray-500"></i>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium text-gray-800">Smart Watch</h4>
                <p className="text-xs text-gray-500">Wearables</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-800">$299</p>
                <p className="text-xs text-red-500">-2.4%</p>
              </div>
            </div>
            <div className="flex items-center">
              <div
                className="w-12 h-12 rounded bg-gray-100 flex items-center justify-center mr-3"
              >
                <i className="ri-camera-line text-gray-500"></i>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium text-gray-800">
                  Digital Camera
                </h4>
                <p className="text-xs text-gray-500">Photography</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-800">$799</p>
                <p className="text-xs text-green-500">+5.7%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

   
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
  
        <div
          className="bg-white rounded shadow-sm border border-gray-100 lg:col-span-2"
        >
          <div
            className="flex justify-between items-center p-5 border-b border-gray-100"
          >
            <h3 className="text-lg font-semibold text-gray-800">Recent Orders</h3>
            <a href="#" className="text-sm text-primary font-medium">View All</a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th
                    className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Order ID
                  </th>
                  <th
                    className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Customer
                  </th>
                  <th
                    className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Date
                  </th>
                  <th
                    className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td
                    className="px-5 py-4 whitespace-nowrap text-sm font-medium text-gray-800"
                  >
                    #ORD-7352
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap text-sm text-gray-600">
                    Emma Thompson
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap text-sm text-gray-600">
                    May 17, 2025
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap">
                    <span
                      className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800"
                      >Completed</span>
                  </td>
                  <td
                    className="px-5 py-4 whitespace-nowrap text-sm font-medium text-gray-800"
                  >
                    $235.40
                  </td>
                </tr>
                <tr>
                  <td
                    className="px-5 py-4 whitespace-nowrap text-sm font-medium text-gray-800"
                  >
                    #ORD-7351
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap text-sm text-gray-600">
                    Michael Johnson
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap text-sm text-gray-600">
                    May 16, 2025
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap">
                    <span
                      className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800"
                      >Pending</span>
                  </td>
                  <td
                    className="px-5 py-4 whitespace-nowrap text-sm font-medium text-gray-800"
                  >
                    $124.00
                  </td>
                </tr>
                <tr>
                  <td
                    className="px-5 py-4 whitespace-nowrap text-sm font-medium text-gray-800"
                  >
                    #ORD-7350
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap text-sm text-gray-600">
                    Sophia Williams
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap text-sm text-gray-600">
                    May 16, 2025
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap">
                    <span
                      className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800"
                      >Completed</span>
                  </td>
                  <td
                    className="px-5 py-4 whitespace-nowrap text-sm font-medium text-gray-800"
                  >
                    $432.20
                  </td>
                </tr>
                <tr>
                  <td
                    className="px-5 py-4 whitespace-nowrap text-sm font-medium text-gray-800"
                  >
                    #ORD-7349
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap text-sm text-gray-600">
                    Oliver Martinez
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap text-sm text-gray-600">
                    May 15, 2025
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap">
                    <span
                      className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800"
                      >Cancelled</span>
                  </td>
                  <td
                    className="px-5 py-4 whitespace-nowrap text-sm font-medium text-gray-800"
                  >
                    $65.90
                  </td>
                </tr>
                <tr>
                  <td
                    className="px-5 py-4 whitespace-nowrap text-sm font-medium text-gray-800"
                  >
                    #ORD-7348
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap text-sm text-gray-600">
                    Charlotte Brown
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap text-sm text-gray-600">
                    May 15, 2025
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap">
                    <span
                      className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800"
                      >Completed</span>
                  </td>
                  <td
                    className="px-5 py-4 whitespace-nowrap text-sm font-medium text-gray-800"
                  >
                    $356.00
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            className="p-4 border-t border-gray-100 flex items-center justify-between"
          >
            <p className="text-sm text-gray-500">Showing 5 of 125 orders</p>
            <div className="flex space-x-1">
              <button
                className="px-3 py-1 text-sm rounded border border-gray-200 text-gray-600 hover:bg-gray-50 !rounded-button whitespace-nowrap"
              >
                Previous
              </button>
              <button
                className="px-3 py-1 text-sm rounded bg-primary text-white !rounded-button whitespace-nowrap"
              >
                Next
              </button>
            </div>
          </div>
        </div>

 
        <div className="bg-white rounded shadow-sm border border-gray-100">
          <div
            className="flex justify-between items-center p-5 border-b border-gray-100"
          >
            <h3 className="text-lg font-semibold text-gray-800">
              Customer Activity
            </h3>
            <a href="#" className="text-sm text-primary font-medium">View All</a>
          </div>
          <div className="p-5">
            <div className="space-y-5">
              <div className="flex items-start">
                <div
                  className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0"
                >
                  <span className="text-blue-600 text-xs font-medium">ET</span>
                </div>
                <div>
                  <p className="text-sm text-gray-800">
                    <span className="font-medium">Emma Thompson</span> purchased
                    <span className="font-medium">MacBook Pro M2</span>
                  </p>
                  <p className="text-xs text-gray-500 mt-1">10 minutes ago</p>
                </div>
              </div>
              <div className="flex items-start">
                <div
                  className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3 flex-shrink-0"
                >
                  <span className="text-purple-600 text-xs font-medium">MJ</span>
                </div>
                <div>
                  <p className="text-sm text-gray-800">
                    <span className="font-medium">Michael Johnson</span> added 3
                    items to cart
                  </p>
                  <p className="text-xs text-gray-500 mt-1">25 minutes ago</p>
                </div>
              </div>
              <div className="flex items-start">
                <div
                  className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3 flex-shrink-0"
                >
                  <span className="text-green-600 text-xs font-medium">SW</span>
                </div>
                <div>
                  <p className="text-sm text-gray-800">
                    <span className="font-medium">Sophia Williams</span> left a
                    review (4.5★)
                  </p>
                  <p className="text-xs text-gray-500 mt-1">1 hour ago</p>
                </div>
              </div>
              <div className="flex items-start">
                <div
                  className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3 flex-shrink-0"
                >
                  <span className="text-red-600 text-xs font-medium">OM</span>
                </div>
                <div>
                  <p className="text-sm text-gray-800">
                    <span className="font-medium">Oliver Martinez</span> cancelled
                    order <span className="font-medium">#ORD-7349</span>
                  </p>
                  <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start">
                <div
                  className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center mr-3 flex-shrink-0"
                >
                  <span className="text-yellow-600 text-xs font-medium">CB</span>
                </div>
                <div>
                  <p className="text-sm text-gray-800">
                    <span className="font-medium">Charlotte Brown</span> created an
                    account
                  </p>
                  <p className="text-xs text-gray-500 mt-1">3 hours ago</p>
                </div>
              </div>
              <div className="flex items-start">
                <div
                  className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mr-3 flex-shrink-0"
                >
                  <span className="text-indigo-600 text-xs font-medium">RD</span>
                </div>
                <div>
                  <p className="text-sm text-gray-800">
                    <span className="font-medium">Robert Davis</span> subscribed to
                    newsletter
                  </p>
                  <p className="text-xs text-gray-500 mt-1">5 hours ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
</>
  )
}
