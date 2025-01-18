import './forms.css';
import HomeForm from './HomeForm';
import CategoryForm from './CategoryForm';
import ArticleForm from './ArticleForm';
import ReviewForm from './ReviewsForm';
import AboutForm from './AboutForm';

export default function Forms() {
  return (
    <main id='forms'>
      <AboutForm />
      <HomeForm />
      <CategoryForm />
      <ArticleForm />
      <ReviewForm />
    </main>
  );
}
