import { useState } from "react"
import { NavLink } from "react-router-dom"

function ReportsAndStatements() {
    const [activeTab, setActiveTab] = useState("reports")
    
    // This function will be called when a tab is clicked
    const handleTabClick = (tab) => {
        setActiveTab(tab)
    }
    
    return (
        <div className="md:pt-[18%] md:pl-8 pt-[55%] md:w-[78%] absolute -z-20 overflow-x-hidden mb-32 w-[100%] mx-auto flex flex-col gap-6 md:gap-10">
            {/* Page Header */}
            <div className="bg-blue-100 w-[95%] mx-auto p-4 rounded-xl flex justify-between gap-1 shadow">
                <div className="flex flex-col gap-1">
                    <h2 className="text-2xl font-bold mb-2">Manage Your Reports & Statements</h2>
                    <p className="text-sm">Access and download your financial records anytime</p>
                    <NavLink to="" className="bg-[#FAD129] px-8 py-4 rounded-lg w-fit mt-4">
                        <button>Download All</button>
                    </NavLink>
                </div>
                <img src="/img/reports.png" className="w-32 hidden md:block" alt="Reports icon" />
            </div>
            
            {/* Tab Selection - Fixed to ensure it works properly */}
            <div className="w-[95%] mx-auto">
                <div className="flex border-b">
                    <button 
                        className={`py-4 px-6 font-medium ${activeTab === "reports" ? "border-b-2 border-[#FAD129] text-black" : "text-gray-500"}`}
                        onClick={() => handleTabClick("reports")}
                    >
                        Reports
                    </button>
                    <button 
                        className={`py-4 px-6 font-medium ${activeTab === "statements" ? "border-b-2 border-[#FAD129] text-black" : "text-gray-500"}`}
                        onClick={() => handleTabClick("statements")}
                    >
                        Statements
                    </button>
                </div>
            </div>
            
            {/* Reports Section */}
            {activeTab === "reports" && (
                <div className="w-[95%] mx-auto">
                    <div className="grid md:grid-cols-2 gap-4">
                        {reportTypes.map((report, index) => (
                            <ReportCard key={index} report={report} />
                        ))}
                    </div>
                </div>
            )}
            
            {/* Statements Section */}
            {activeTab === "statements" && (
                <div className="w-[95%] mx-auto">
                    <StatementFilters />
                    <div className="mt-6">
                        {statements.map((statement, index) => (
                            <StatementRow key={index} statement={statement} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

// Report Card Component - note icon
function ReportCard({ report }) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between">
                <div>
                    <h3 className="font-bold text-lg">{report.title}</h3>
                    <p className="text-sm text-gray-600 mt-2">{report.description}</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-lg">
                    {/* Note icon SVG */}
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="w-6 h-6" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                        />
                    </svg>
                </div>
            </div>
            <div className="mt-6 flex justify-between items-center">
                <span className="text-xs text-gray-500">Last generated: {report.lastGenerated}</span>
                <button className="bg-[#FAD129] px-4 py-2 rounded-lg text-sm">Generate</button>
            </div>
        </div>
    )
}

// Statement Filters Component
function StatementFilters() {
    return (
        <div className="flex flex-col md:flex-row gap-4 mt-4">
            <div className="md:w-1/3">
                <label className="text-sm text-gray-600 block mb-1">Date Range</label>
                <select className="w-full border border-gray-300 rounded-lg p-3">
                    <option>Last 3 months</option>
                    <option>Last 6 months</option>
                    <option>This year</option>
                    <option>Last year</option>
                    <option>Custom range</option>
                </select>
            </div>
            <div className="md:w-1/3">
                <label className="text-sm text-gray-600 block mb-1">Account</label>
                <select className="w-full border border-gray-300 rounded-lg p-3">
                    <option>All accounts</option>
                    <option>Checking Account</option>
                    <option>Savings Account</option>
                    <option>Investment Account</option>
                </select>
            </div>
            <div className="md:w-1/3">
                <label className="text-sm text-gray-600 block mb-1">Format</label>
                <select className="w-full border border-gray-300 rounded-lg p-3">
                    <option>PDF</option>
                    <option>CSV</option>
                    <option>Excel</option>
                </select>
            </div>
        </div>
    )
}

// Statement Row Component
function StatementRow({ statement }) {
    return (
        <div className="border-b border-gray-200 py-4 flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-3 rounded-lg">
                    {/* Note icon for document */}
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="w-5 h-5" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                        />
                    </svg>
                </div>
                <div>
                    <h4 className="font-medium">{statement.title}</h4>
                    <p className="text-sm text-gray-500">{statement.period}</p>
                </div>
            </div>
            <div className="mt-3 md:mt-0 flex items-center gap-4 ml-0 md:ml-4">
                <span className="text-sm text-gray-500">
                    {statement.size} • {statement.format}
                </span>
                <button className="text-blue-600 hover:text-blue-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

// Sample data for reports
const reportTypes = [
    {
        title: "Tax Summary",
        description: "Annual tax summary for your accounts",
        lastGenerated: "Jan 15, 2025"
    },
    {
        title: "Income Report",
        description: "Summary of all income transactions",
        lastGenerated: "Feb 20, 2025"
    },
    {
        title: "Expense Analysis",
        description: "Breakdown of your spending by category",
        lastGenerated: "Feb 15, 2025"
    },
    {
        title: "Investment Summary",
        description: "Performance overview of your investments",
        lastGenerated: "Feb 22, 2025"
    }
]

// Sample data for statements
const statements = [
    {
        title: "Account Statement",
        period: "January 2025",
        size: "1.2 MB",
        format: "PDF"
    },
    {
        title: "Account Statement",
        period: "December 2024",
        size: "1.4 MB",
        format: "PDF"
    },
    {
        title: "Account Statement",
        period: "November 2024",
        size: "1.1 MB",
        format: "PDF"
    },
    {
        title: "Account Statement",
        period: "October 2024",
        size: "1.3 MB",
        format: "PDF"
    },
    {
        title: "Account Statement",
        period: "September 2024",
        size: "1.2 MB",
        format: "PDF"
    }
]

export default ReportsAndStatements