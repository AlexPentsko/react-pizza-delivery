import { useEffect, useCallback } from 'react';
import Categories from '../components/Categories';
import Skeleton from '../components/PizzaBlock/Skeleton';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Sort, { list } from '../components/Sort';
import Pagination from '../components/Pagination';
import qs from 'qs';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { fetchPizzas } from '../redux/pizza/asyncActions';
import { useAppDispatch } from '../redux/store';
import { selectFilter } from '../redux/filter/selector';
import { selectPizzaData } from '../redux/pizza/selector';
import { setCategoryId, setCurrentPage, setFilters } from '../redux/filter/slice';
import { SearchPizzaParams } from '../redux/pizza/types';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isSearch = useRef(false);
  const isMounted = useRef(false);
  const { categoryId, sort, currentPage, searchValue } = useSelector(selectFilter);
  const { items, status } = useSelector(selectPizzaData);
  const sortType = sort.sortProperty;

  const onChangeCategory = useCallback((id: number) => {
    dispatch(setCategoryId(id));
  }, []);
  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  //getting pizzas from BackEnd
  const getPizzas = async () => {
    const search = searchValue ? `&search=${searchValue}` : '';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const sortBy = sortType.replace('-', '');
    const order = sortType.includes('-') ? 'asc' : 'desc';

    dispatch(
      fetchPizzas({
        search,
        category,
        sortBy,
        order,
        currentPage: String(currentPage),
      }),
    );

    window.scrollTo(0, 0);
  };

  //if it's not the first render, put the parameters in URL if [catId....] changed
  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        currentPage,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sort.sortProperty, currentPage]);

  //if was first render, checking URL and save them in redux
  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1)) as unknown as SearchPizzaParams;
      const sort = list.find((obj) => obj.sortProperty === params.sortBy);

      dispatch(
        setFilters({
          searchValue: params.search,
          categoryId: Number(params.category),
          currentPage: Number(params.currentPage),
          sort: sort || list[0],
        }),
      );
      isSearch.current = true;
    }
  }, []);

  //if was 1-st render, get pizzas from backEnd
  useEffect(() => {
    window.scrollTo(0, 0);

    if (!isSearch.current) {
      try {
        getPizzas();
      } catch (error) {
        alert("Error: can't get data from server");
      }
    }

    isSearch.current = false;
  }, [categoryId, sort, searchValue, currentPage]);

  const pizzas = items.map((obj: any) => <PizzaBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(8)].map((_, index) => <Skeleton key={index} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort value={sort} />
      </div>
      <h2 className="content__title">All pizzas</h2>
      {status === 'error' ? (
        <div className="content__error-info">
          <h2>Error!</h2>
          <p>So sorry. Can't get pizzas. Try to reload the page later.</p>
        </div>
      ) : (
        <div className="content__items">{status === 'loading' ? skeletons : pizzas}</div>
      )}
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};

export default Home;
