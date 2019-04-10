import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Componente from './Funcional';

configure({
  adapter: new Adapter(),
});

describe('<Componente />', () => {
  it('should render {n} Li depending on props.number', () => {
    const wrapper = shallow(<Componente number={2} />);
    expect(wrapper.find('li')).toHaveLength(2);
  });
});
