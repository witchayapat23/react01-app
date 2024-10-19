function Dashboard() {
    const data = [
        { title: 'รายได้', value: '฿405,091.00', percentage: '+4.75%', positive: true },
        { title: 'ใบแจ้งหนี้ค้างชำระ', value: '฿12,787.00', percentage: '+54.02%', positive: false },
        { title: 'ใบแจ้งหนี้รอการชำระ', value: '฿245,988.00', percentage: '-1.39%', positive: false },
        { title: 'ค่าใช้จ่าย', value: '฿30,156.00', percentage: '+10.18%', positive: false },
        { title: 'กำไรสุทธิ', value: '฿122,540.00', percentage: '+8.25%', positive: true },
        { title: 'การลงทุน', value: '฿50,000.00', percentage: '+2.35%', positive: true },
        { title: 'ภาษีที่ต้องชำระ', value: '฿9,412.00', percentage: '+15.50%', positive: false },
        { title: 'หนี้สิน', value: '฿62,320.00', percentage: '-3.10%', positive: false },
    ];

    return (
        <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-8 rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-4 gap-6">
            {data.map((item, index) => (
                <div key={index} className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md border border-gray-200">
                    <span className="text-lg font-semibold text-gray-700 mb-2">{item.title}</span>
                    <span className="text-3xl font-extrabold text-gray-900 mb-2">{item.value}</span>
                    <span className={`text-lg ${item.positive ? 'text-green-600' : 'text-red-600'}`}>
                        {item.percentage}
                    </span>
                </div>
            ))}
        </div>
    );
}

export default Dashboard;
