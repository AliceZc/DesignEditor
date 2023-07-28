import './index.less';
// import { ReactComponent as Logo } from '@/assets/svg/multiple.svg';
// import imgSrc from '@/assets/svg/warning.svg';
import CustomButton from '@/components/CustomButton';
import { useEffect } from 'react';
import { useIntl, FormattedMessage } from 'umi';
import { getUserInfo } from '@/utils/common';
import { fetchApi } from '@/utils/fetchApi';
import { connect } from 'umi';
import { setLocale, getLocale } from 'umi';
import Components from './components/CustomComponent';
import { Button } from 'antd';

const Home = (props: any) => {
  const intl = useIntl();
  useEffect(() => {
    console.log('获取用户信息', getUserInfo());
    console.log('获取dva的model中的state:', props.user.count);
    fetchApi.get('/api/getUser', { id: 1 });
    fetchApi.get('/api/testRouter');
  });
  //state中的count 加一个数
  const addCount = (num: number) => {
    props.dispatch({
      type: 'user/add',
      payload: num,
    });
  };
  //获取用户信息
  const getUserA = () => {
    props.dispatch({
      type: 'user/getUserInfo',
      payload: 1,
    });
  };
  //切换语言 .umirc.ts 中locale设置useLocalStorage为false，切换多语言会出bug
  const changeLang = () => {
    console.log(3)
    const currentLang = getLocale();
    console.log('lang:', currentLang);
    setLocale(currentLang === 'zh-CN' ? 'en-US' : 'zh-CN', false);
  };
  return (
    <div>
      <h1>使用图片方式:</h1>
      <ul>
        <li>
          <p>require 的方式引入图片</p>
          <p>
            {/* <img
              src={require('@/assets/images/positive.png')}
              alt="require image"
            /> */}
          </p>
        </li>
        <li>
          <p>组件式引入图片</p>
          {/* <Logo /> */}
        </li>
        <li>
          <p>url式引入图片</p>
          {/* <img src={imgSrc} width={100} alt="" /> */}
        </li>
      </ul>
      <div>
        <h3>使用国际化语言</h3>
        <div><Button onClick={() => changeLang()}>切换语言</Button></div>
        <div>方式一(推荐): {intl.formatMessage({ id: 'person.name' })}</div>
        <div>
          方式二: <FormattedMessage id="user.say" values={{ name: 'Jack' }} />
        </div>
      </div>
      <footer>
        <div>count: {props.user.count}</div>
        <div>user: {props.user.user.name}</div>
        <div>
          <CustomButton
            name="自定义button组件1"
            onClick={() => addCount(1)}
            fun="count+1"
          />
        </div>
        <div>
          <CustomButton
            name="自定义button组件2"
            onClick={() => getUserA()}
            fun="请求用户信息"
          />
        </div>
        <div>
          <Components username='zhang san' gender='female' />
        </div>
      </footer>
    </div>
  );
};

export default connect((user: any) => ({ ...user }))(Home);
