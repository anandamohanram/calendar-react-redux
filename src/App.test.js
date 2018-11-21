import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Year from './components/Year/Year'
import Month from './components/Month/Month'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store'

const middlewares = []
const mockStore = configureStore(middlewares)

configure({adapter : new Adapter()})

it('Renders without crashing', () => {

  const initialState = {2018:{
    1:{
        1:'Holiday',
        15:'Busy'
    }
},2019:{
    1:{
        1:'Holiday'
    }
}}
  const store = mockStore(initialState)

  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><App /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});


describe('<Year />', () =>{
  it('should render 12 months correctly', () => {
      let year = 2018;
      let now = 2018;
      const wrapper = shallow(<Year year={year} yearNow={now} />);
      expect (wrapper.find(Month)).toHaveLength(12);
  });
});
