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
import './UserLanding.css';

export default function UserLanding() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  function handleClickGoToForms() {
    window.location.href = 'http://localhost:5173/main-form';
  }

  function handleClickLoadData() {
    const fetchTable = async (table) => {
      setIsLoading(true);
      try {
        const { data } = await GET(table);
        if (data) {
          switch (table) {
            case 'about':
              dispatch(setAbout(data));
              break;
            case 'categories':
              dispatch(setCategories(data));
              break;
            case 'categoryArticles':
              dispatch(setArticles(data));
              break;
            case 'companyInfo':
              dispatch(setCompanyInfo(data));
              break;
            case 'general':
              dispatch(setGeneral(data));
              break;
            case 'headerFooter':
              dispatch(setHeaderFooter(data));
              break;
            case 'homePage':
              dispatch(setHome(data));
              break;
            case 'reviews':
              dispatch(setReviews(data));
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
      <div className='landing-btns'>
        <div>
          <span>Click below to start building your website</span>
          <button onClick={handleClickGoToForms}>Go To Forms</button>
        </div>
        <div>
          <span>Click below to load existing data</span>
          <button onClick={handleClickLoadData}>Load Data</button>
        </div>
      </div>
      <div>{isLoading ? 'data is loading..' : ''}</div>
    </main>
  );
}
