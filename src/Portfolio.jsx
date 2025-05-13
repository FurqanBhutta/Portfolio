import React, { useState } from 'react';
import Data from './PortfolioData';

const Portfolio = () => {
    const [activeTab, setActiveTab] = useState("all");
    const isActive = (category) => {
        return activeTab === category ? "active" : "";
      };

    const displayContent = (category) => {

        return Data
            .filter((item) => category === "all" || item.category === category)
            .map((data, index) => (
                <div key={index} className='col-md-6 col-lg-4 text-center mt-3'>
                    <img className='img-fluid' src={data.image} alt="" />
                    <h4 className='mt-3 '>{data.name}</h4>
                    <p className='text-white-50'>{data.category}</p>
                </div>
            ));
    };
    return (
        <div>

            <div id='portfolio' className='container text-center '>
                <h2 ><span className='fw-lighter '>Featured</span><span className='fw-bolder '> Portfolio</span></h2>
                <div>
                    <ul className=' portfolio-links d-flex justify-content-center flex-wrap'>
                        <li className={`nav-link m-4 ${isActive("all")}`} onClick={() => setActiveTab("all")}>All</li>
                        <li className={`nav-link m-4 ${isActive("packaging")}`}  onClick={() => setActiveTab("packaging")}>Packaging</li>
                        <li className={`nav-link m-4 ${isActive("mockup")}`}  onClick={() => setActiveTab("mockup")}>Mockup</li>
                        <li className={`nav-link m-4 ${isActive("typography")}`}  onClick={() => setActiveTab("typography")}>Typography</li>
                        <li className={`nav-link m-4 ${isActive("photography")}`}  onClick={() => setActiveTab("photography")}>Photography</li>
                    </ul>
                </div>
                <div className='tab-content row'>
                    {activeTab === "all" && displayContent("all")}
                    {activeTab === "packaging" && displayContent("packaging")}
                    {activeTab === "mockup" && displayContent("mockup")}
                    {activeTab === "typography" && displayContent("typography")}
                    {activeTab === "photography" && displayContent("photography")}
                </div>
            </div>

        </div>
    )
}

export default Portfolio
