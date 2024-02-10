import air from '@/shared/assets/cft-air.png';

import st from './ProfilePage.module.scss';
import CalculateForm from './components/calculate-form/CalculateForm';

const MainPage = () => {
  return (
    <div className={st.page}>
      <div className={`container ${st.page__body}`}>
        <div className={st.page__img}>
          <img src={air} draggable={false} />
        </div>

        <CalculateForm />
      </div>
    </div>
  );
};

export default MainPage;
