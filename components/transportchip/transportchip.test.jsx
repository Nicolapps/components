import React from 'react';
import { shallow } from 'enzyme';
import Transportchip from './transportchip';

describe('Button Component', () => {
  it('should split S 1', () => {
    const wrapper = shallow(<Transportchip lineNumber="S 1" />);
    expect(wrapper.find('.dbx-transportchip .dbx-transportchip__text')).toHaveLength(2);
  });

  it('should split S1', () => {
    const wrapper = shallow(<Transportchip lineNumber="S1" />);
    expect(wrapper.find('.dbx-transportchip .dbx-transportchip__text')).toHaveLength(2);
  });

  it('should not split Bus 1', () => {
    const wrapper = shallow(<Transportchip lineNumber="Bus 1" />);
    expect(wrapper.find('.dbx-transportchip .dbx-transportchip__text')).toHaveLength(1);
  });

  it('should detect the train type S-Bahn from S 1', () => {
    const wrapper = shallow(<Transportchip lineNumber="S 1" />);
    expect(wrapper.find('.dbx-transportchip.dbx-transportchip--sbahn')).toHaveLength(1);
  });

  it('should detect the train type S-Bahn from S1', () => {
    const wrapper = shallow(<Transportchip lineNumber="S1" />);
    expect(wrapper.find('.dbx-transportchip.dbx-transportchip--sbahn')).toHaveLength(1);
  });

  it('should detect the train type S-Bahn from Bus 1', () => {
    const wrapper = shallow(<Transportchip lineNumber="Bus 1" />);
    expect(wrapper.find('.dbx-transportchip.dbx-transportchip--bus')).toHaveLength(1);
  });

  it('should allow setting the transport type manually', () => {
    const wrapper = shallow(
      <Transportchip transportType={Transportchip.transportTypes.BUS} lineNumber="U 1" />
    );
    expect(wrapper.find('.dbx-transportchip.dbx-transportchip--bus')).toHaveLength(1);
  });
});
