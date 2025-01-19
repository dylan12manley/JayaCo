import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GET } from '../../functions/fetch';
import { setHeaderFooter } from '../../reducers/headerFooterSlice';
import { setAbout } from '../../reducers/aboutSlice';
import { setArticles } from '../../reducers/articlesSlice';
import { setCategories } from '../../reducers/categoriesSlice';
import { setCompanyInfo } from '../../reducers/companyInfoSlice';
import { setGeneral } from '../../reducers/generalSlice';
import { setHome } from '../../reducers/homeSlice';
import { setReviews } from '../../reducers/reviewsSlice';

export default function UserLanding() {
  const [isLoading, setIsLoading] = useState(true);

  function handleClickGoToForms() {
    window.location.href = 'http://localhost:5173/main-form';
  }

  function handleClickLoadData() {
    console.log('load data clicked');
    const fetchTable = async (table) => {
      try {
        const { data } = await GET(table);
        if (data) {
          switch (table) {
            case 'about':
              setAbout(data);
              break;
            case 'categories':
              setCategories(data);
              break;
            case 'categoryArticles':
              setArticles(data);
              break;
            case 'companyInfo':
              setCompanyInfo(data);
              break;
            case 'general':
              setGeneral(data);
              break;
            case 'headerFooter':
              setHeaderFooter(data);
              break;
            case 'homePage':
              setHome(data);
              break;
            case 'reviews':
              setReviews(data);
              break;
            default:
              alert(`could not load ${table}`);
          }
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    const tables = ['about', 'categories', 'categoryArticles', 'companyInfo', 'general', 'headerFooter', 'homePage', 'reviews'];
    tables.forEach((table) => {
      fetchTable(table);
    });
  }

  return (
    <main className='user-landing-page'>
      <h1>Welcome to your website!</h1>
      <h2>From this page you can either start building and customizing your website or load the existing data.</h2>
      <div>
        <div>
          <p>Click below to start building your website</p>
          <button onClick={handleClickGoToForms}>Go To Forms</button>
        </div>
        <div>
          <p>Click below to load existing data</p>
          <button onClick={handleClickLoadData}>Load Data</button>
        </div>
      </div>
    </main>
  );
}
