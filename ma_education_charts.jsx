import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, ComposedChart, Area } from 'recharts';

const enrollmentData = [
  { type: 'Traditional Public', change: -6.4, fill: '#ef4444' },
  { type: 'Overall K-12', change: -3.5, fill: '#f97316' },
  { type: 'Private Schools', change: -1.0, fill: '#eab308' },
  { type: 'Charter Schools', change: 11, fill: '#22c55e' },
  { type: 'Vocational-Tech', change: 18, fill: '#10b981' },
  { type: 'Homeschooling', change: 56, fill: '#059669' },
];

const mcasComparison = [
  { subject: 'ELA (Gr 3-8)', y2019: 52, y2024: 39, y2025: 42 },
  { subject: 'Math (Gr 3-8)', y2019: 49, y2024: 41, y2025: 41 },
  { subject: 'ELA (Gr 10)', y2019: 61, y2024: 57, y2025: 51 },
  { subject: 'Math (Gr 10)', y2019: 59, y2024: 48, y2025: 45 },
];

const gatewayVsState = [
  { metric: 'ELA Meeting Standards', gateway: 30.2, state: 45.1 },
  { metric: 'Math Meeting Standards', gateway: 27.3, state: 43.7 },
  { metric: 'ELA Not Meeting', gateway: 26.5, state: 15.0 },
  { metric: 'Math Not Meeting', gateway: 25.8, state: 14.5 },
];

const gatewayCities = [
  { city: 'Quincy', ela: 46, math: 42 },
  { city: 'Attleboro', ela: 37, math: 39 },
  { city: 'Leominster', ela: 36, math: 35 },
  { city: 'Westfield', ela: 35, math: 34 },
  { city: 'Malden', ela: 34, math: 34 },
  { city: 'Salem', ela: 32, math: 24 },
  { city: 'Lowell', ela: 28, math: 31 },
  { city: 'Worcester', ela: 26, math: 24 },
  { city: 'Springfield', ela: 22, math: 17 },
  { city: 'Brockton', ela: 21, math: 19 },
  { city: 'Fall River', ela: 19, math: 18 },
  { city: 'Lawrence', ela: 18, math: 19 },
  { city: 'Lynn', ela: 17, math: 14 },
  { city: 'Holyoke', ela: 11, math: 6 },
];

const spendingData = [
  { year: '2022', spending: 19712, ela: 39, math: 41 },
  { year: '2023', spending: 21256, ela: 39, math: 41 },
  { year: '2024', spending: 21886, ela: 39, math: 41 },
  { year: '2025', spending: 22500, ela: 42, math: 41 },
];

const districtDistribution = [
  { name: '<25% Meeting', value: 41, fill: '#dc2626' },
  { name: '25-50% Meeting', value: 189, fill: '#f97316' },
  { name: '50-75% Meeting', value: 116, fill: '#eab308' },
  { name: '≥75% Meeting', value: 6, fill: '#22c55e' },
];

const absenteeismData = [
  { group: 'Asian', rate: 11.6 },
  { group: 'White', rate: 18.3 },
  { group: 'Multi-Race', rate: 25.9 },
  { group: 'Black', rate: 28.0 },
  { group: 'Am Indian', rate: 31.7 },
  { group: 'Disabilities', rate: 34.9 },
  { group: 'Low Income', rate: 37.5 },
  { group: 'Hispanic', rate: 38.3 },
  { group: 'EL Students', rate: 38.3 },
];

const highSchoolDecline = [
  { group: 'All Students', ela: -4.7, math: -2.8, science: -2.6 },
  { group: 'White', ela: -4.8, math: -3.1, science: -2.7 },
  { group: 'Black', ela: -5.1, math: -1.9, science: -2.5 },
  { group: 'Hispanic', ela: -4.1, math: -2.5, science: -2.4 },
  { group: 'Asian', ela: -3.7, math: -1.6, science: -2.0 },
  { group: 'Low Income', ela: -4.6, math: -3.0, science: -3.0 },
  { group: 'Disabilities', ela: -4.0, math: -3.2, science: -2.9 },
];

export default function MAEducationDashboard() {
  const [activeTab, setActiveTab] = useState('enrollment');

  const tabs = [
    { id: 'enrollment', label: 'Enrollment Shift' },
    { id: 'mcas', label: 'MCAS Trends' },
    { id: 'gateway', label: 'Gateway Cities' },
    { id: 'spending', label: 'Spending vs Results' },
    { id: 'gaps', label: 'Achievement Gaps' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2">Massachusetts K-12 Education Crisis</h1>
        <p className="text-gray-400 text-center mb-6">Data-Driven Analysis of Systemic Decline</p>
        
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeTab === tab.id 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'enrollment' && (
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4">K-12 Enrollment Change (2019-2025)</h2>
              <p className="text-gray-400 mb-4">Families are voting with their feet—leaving traditional public schools for alternatives</p>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={enrollmentData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis type="number" domain={[-20, 60]} tickFormatter={(v) => `${v}%`} stroke="#9ca3af" />
                  <YAxis type="category" dataKey="type" width={120} stroke="#9ca3af" />
                  <Tooltip 
                    formatter={(value) => [`${value}%`, 'Change']}
                    contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px' }}
                  />
                  <Bar dataKey="change" radius={[0, 4, 4, 0]}>
                    {enrollmentData.map((entry, index) => (
                      <Cell key={index} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div className="bg-red-900/30 border border-red-700 rounded-lg p-3">
                  <div className="text-red-400 font-semibold">Traditional Public Schools</div>
                  <div className="text-2xl font-bold text-red-500">-6.4%</div>
                </div>
                <div className="bg-green-900/30 border border-green-700 rounded-lg p-3">
                  <div className="text-green-400 font-semibold">Homeschooling</div>
                  <div className="text-2xl font-bold text-green-500">+56%</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'mcas' && (
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4">MCAS % Meeting/Exceeding Expectations</h2>
              <p className="text-gray-400 mb-4">Five years post-pandemic, scores remain far below 2019 levels</p>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={mcasComparison}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="subject" stroke="#9ca3af" />
                  <YAxis domain={[0, 70]} tickFormatter={(v) => `${v}%`} stroke="#9ca3af" />
                  <Tooltip 
                    formatter={(value) => [`${value}%`]}
                    contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px' }}
                  />
                  <Legend />
                  <Bar dataKey="y2019" name="2019 (Pre-COVID)" fill="#22c55e" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="y2024" name="2024" fill="#eab308" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="y2025" name="2025" fill="#ef4444" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4">District Performance Distribution (ELA)</h2>
              <p className="text-gray-400 mb-4">65% of districts have fewer than half of students meeting standards</p>
              <div className="flex items-center justify-center">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={districtDistribution}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}`}
                    >
                      {districtDistribution.map((entry, index) => (
                        <Cell key={index} fill={entry.fill} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value) => [`${value} districts`]}
                      contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="text-center mt-2">
                <span className="text-4xl font-bold text-red-500">230</span>
                <span className="text-gray-400 ml-2">of 352 districts below 50% proficiency</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'gateway' && (
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4">Gateway Cities vs. Rest of State</h2>
              <p className="text-gray-400 mb-4">A 15-16 percentage point achievement gap</p>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={gatewayVsState}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="metric" stroke="#9ca3af" tick={{ fontSize: 11 }} />
                  <YAxis tickFormatter={(v) => `${v}%`} stroke="#9ca3af" />
                  <Tooltip 
                    formatter={(value) => [`${value}%`]}
                    contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px' }}
                  />
                  <Legend />
                  <Bar dataKey="gateway" name="Gateway Cities" fill="#ef4444" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="state" name="Rest of State" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4">Gateway City Performance (MCAS 2025)</h2>
              <p className="text-gray-400 mb-4">Holyoke: Only 6% of students meet math expectations</p>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={gatewayCities} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis type="number" domain={[0, 50]} tickFormatter={(v) => `${v}%`} stroke="#9ca3af" />
                  <YAxis type="category" dataKey="city" width={80} stroke="#9ca3af" tick={{ fontSize: 11 }} />
                  <Tooltip 
                    formatter={(value) => [`${value}%`]}
                    contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px' }}
                  />
                  <Legend />
                  <Bar dataKey="ela" name="ELA" fill="#3b82f6" radius={[0, 4, 4, 0]} />
                  <Bar dataKey="math" name="Math" fill="#8b5cf6" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {activeTab === 'spending' && (
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4">Per-Pupil Spending vs. Achievement</h2>
              <p className="text-gray-400 mb-4">Spending increases haven't translated to better outcomes</p>
              <ResponsiveContainer width="100%" height={350}>
                <ComposedChart data={spendingData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="year" stroke="#9ca3af" />
                  <YAxis yAxisId="left" orientation="left" tickFormatter={(v) => `$${(v/1000).toFixed(0)}k`} stroke="#22c55e" />
                  <YAxis yAxisId="right" orientation="right" domain={[30, 50]} tickFormatter={(v) => `${v}%`} stroke="#ef4444" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px' }}
                    formatter={(value, name) => {
                      if (name === 'spending') return [`$${value.toLocaleString()}`, 'Per-Pupil Spending'];
                      return [`${value}%`, name.toUpperCase()];
                    }}
                  />
                  <Legend />
                  <Area yAxisId="left" type="monotone" dataKey="spending" name="Per-Pupil Spending" fill="#22c55e" fillOpacity={0.3} stroke="#22c55e" />
                  <Line yAxisId="right" type="monotone" dataKey="ela" name="ELA %" stroke="#3b82f6" strokeWidth={3} dot={{ r: 6 }} />
                  <Line yAxisId="right" type="monotone" dataKey="math" name="Math %" stroke="#ef4444" strokeWidth={3} dot={{ r: 6 }} />
                </ComposedChart>
              </ResponsiveContainer>
              <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                <div className="bg-gray-700 rounded-lg p-3">
                  <div className="text-gray-400 text-sm">Per-Pupil Spending</div>
                  <div className="text-2xl font-bold text-green-500">$21,886</div>
                </div>
                <div className="bg-gray-700 rounded-lg p-3">
                  <div className="text-gray-400 text-sm">Above Required NSS</div>
                  <div className="text-2xl font-bold text-yellow-500">+27%</div>
                </div>
                <div className="bg-gray-700 rounded-lg p-3">
                  <div className="text-gray-400 text-sm">Students Proficient</div>
                  <div className="text-2xl font-bold text-red-500">42%</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'gaps' && (
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4">High School Chronic Absenteeism by Group</h2>
              <p className="text-gray-400 mb-4">Nearly 40% of English Learners and Hispanic students are chronically absent</p>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={absenteeismData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="group" stroke="#9ca3af" tick={{ fontSize: 10 }} angle={-45} textAnchor="end" height={80} />
                  <YAxis domain={[0, 45]} tickFormatter={(v) => `${v}%`} stroke="#9ca3af" />
                  <Tooltip 
                    formatter={(value) => [`${value}%`, 'Chronic Absenteeism']}
                    contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px' }}
                  />
                  <Bar dataKey="rate" fill="#f97316" radius={[4, 4, 0, 0]}>
                    {absenteeismData.map((entry, index) => (
                      <Cell key={index} fill={entry.rate > 30 ? '#ef4444' : entry.rate > 20 ? '#f97316' : '#22c55e'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4">Grade 10 Score Changes (2024→2025)</h2>
              <p className="text-gray-400 mb-4">Every student group declined after MCAS graduation requirement removed</p>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={highSchoolDecline}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="group" stroke="#9ca3af" tick={{ fontSize: 10 }} angle={-45} textAnchor="end" height={80} />
                  <YAxis domain={[-6, 0]} tickFormatter={(v) => `${v}`} stroke="#9ca3af" />
                  <Tooltip 
                    formatter={(value) => [`${value} points`]}
                    contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px' }}
                  />
                  <Legend />
                  <Bar dataKey="ela" name="ELA" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="math" name="Math" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="science" name="Science" fill="#06b6d4" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        <div className="mt-6 text-center text-gray-500 text-sm">
          Data Sources: MA DESE MCAS Results 2025, Accountability Data, Per-Pupil Expenditure Reports
        </div>
      </div>
    </div>
  );
}
