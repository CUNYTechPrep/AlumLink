import React from 'react';
import { Link } from "react-router-dom";
import './HomeStyles.css';
import Layout from "../components/Layout";

function HomePage() {
   return (
       <>
       <Layout>
       <div>
           <h2 className='title'>Search For your Fellow Alumni</h2>
           <div className='flex-container'>
               <div class="flex-item">
                    <Link to="/directory" className='btn-link'>
                       <button type="button" className='btn'>
                           Let's Connect
                       </button>
                   </Link>
               </div>


               <div className='flex-item'>
                   <p>
                   Information on CUNY Law School and the Alumni. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget elit vel mi feugiat elementum. Praesent vel turpis non odio blandit fringilla. Integer nec lectus vitae massa consectetur eleifend. Sed nec libero in ex tincidunt pellentesque. In hac habitasse platea dictumst. Sed non tristique justo, in malesuada purus. Etiam nec quam ut velit mattis blandit. Vivamus vulputate sem id orci lacinia, eu cursus justo sagittis.
                   </p>
               </div>


               <div className='flex-item'>
                   <img src="/Law-School-image.jpeg" alt="Law School Alumni" className="law-school-image" />
               </div>
           </div>
       </div>
        </Layout>
       </>
   );
}

export default HomePage;