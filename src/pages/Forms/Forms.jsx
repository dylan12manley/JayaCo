import './forms.css';
import HomeForm from './HomeForm';
import CategoryForm from './CategoryForm';
import ArticleForm from './ArticleForm';
import ReviewForm from './ReviewsForm';
export default function Forms() {
  return (
    <main id='forms'>
      <HomeForm />
      <CategoryForm />
      <ArticleForm />
      <ReviewForm />
    </main>
  );
}
